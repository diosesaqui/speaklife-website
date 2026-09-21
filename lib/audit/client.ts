// ── Storm Audit: session state, analytics and email capture ─────────────────
// Browser only. Every call here is fire-and-forget: nothing the page renders
// waits on the network, and every storage access survives being blocked
// (private mode, in-app browsers with storage disabled).

import type { Answers, Method, Route, GapId, ObCode } from "@/lib/audit/model";

// ── Session state (§11: answers survive a refresh) ──────────────────────────

const STATE_KEY = "storm-audit";

export interface AuditSession {
  answers: Answers;
  completedAt?: string;
  utm?: { utm_source?: string; utm_campaign?: string };
  flags?: { started?: boolean; completedFired?: string };
}

export function loadSession(): AuditSession {
  try {
    const raw = sessionStorage.getItem(STATE_KEY);
    if (raw) return JSON.parse(raw) as AuditSession;
  } catch {}
  return { answers: {} };
}

export function saveSession(s: AuditSession) {
  try {
    sessionStorage.setItem(STATE_KEY, JSON.stringify(s));
  } catch {}
}

// ── PostHog (§10) ───────────────────────────────────────────────────────────
// Project 455580. Public project key, the same one the iOS app ships with.
// Raw capture API instead of posthog-js on purpose: no autocapture and no
// session replay, so the Q2 free text can never be recorded by accident.
// `own_words` must never appear in a property here.

const POSTHOG_KEY = "phc_D4qLgjTSwfzKpbgCNTdUn7Hx9QoS7ur3BWwpwubVLdG7";
const POSTHOG_HOST = "https://us.i.posthog.com";
const DISTINCT_KEY = "sl-web-distinct-id";

function distinctId(): string {
  try {
    const existing = localStorage.getItem(DISTINCT_KEY);
    if (existing) return existing;
    const id = crypto.randomUUID();
    localStorage.setItem(DISTINCT_KEY, id);
    return id;
  } catch {
    return "anonymous-web";
  }
}

type AuditEvent =
  | { event: "audit_started"; properties: { utm_source: string | null; utm_campaign: string | null } }
  | { event: "audit_question_answered"; properties: { question: string; value: string } }
  | { event: "audit_email_submitted"; properties: { storm: string; pain: string } }
  | {
      event: "audit_completed";
      properties: {
        storm: string;
        substorm: string | null;
        pain: string;
        method: Method;
        gaps: GapId[];
        duration: string;
        has_own_words: boolean;
      };
    }
  | { event: "audit_declaration_revealed"; properties: { storm: string } }
  | { event: "audit_cta_tapped"; properties: { storm: string; ob: ObCode } }
  | { event: "audit_pdf_downloaded"; properties: { storm: string } };

// Dev builds log instead of sending, so local testing never touches
// production analytics or the real list.
const LIVE = process.env.NODE_ENV === "production";

export function track({ event, properties }: AuditEvent) {
  if (!LIVE) {
    console.debug("[audit]", event, properties);
    return;
  }
  try {
    fetch(`${POSTHOG_HOST}/capture/`, {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: POSTHOG_KEY,
        event,
        distinct_id: distinctId(),
        timestamp: new Date().toISOString(),
        properties: {
          ...properties,
          platform: "web",
          $lib: "speaklife-web-audit",
          $current_url: location.origin + location.pathname,
        },
      }),
    }).catch(() => {});
  } catch {}
}

// ── Klaviyo (§7) ────────────────────────────────────────────────────────────
// Client subscriptions API: public company ID only, no secret. The list is
// "Email List", chosen 2026-09-17. It triggers no flows today, so the PDF
// email and the storm-branched sequence still need building in Klaviyo.

const KLAVIYO_COMPANY_ID = "XH2gnk";
const KLAVIYO_LIST_ID = "WaeTSA";
const KLAVIYO_REVISION = "2026-07-15";

export async function subscribe(
  email: string,
  data: { answers: Answers; route: Route; method: Method; gaps: GapId[]; completedAt: string },
): Promise<boolean> {
  const { answers, route, method, gaps, completedAt } = data;
  if (!LIVE) {
    console.debug("[audit] klaviyo subscribe skipped in dev", { route, method, gaps });
    return false;
  }
  try {
    const res = await fetch(`https://a.klaviyo.com/client/subscriptions?company_id=${KLAVIYO_COMPANY_ID}`, {
      method: "POST",
      keepalive: true,
      headers: { "Content-Type": "application/vnd.api+json", revision: KLAVIYO_REVISION },
      body: JSON.stringify({
        data: {
          type: "subscription",
          attributes: {
            custom_source: "Storm Audit",
            profile: {
              data: {
                type: "profile",
                attributes: {
                  email,
                  properties: {
                    audit_storm: route.storm,
                    audit_substorm: route.substorm,
                    audit_pain: route.pain,
                    audit_method: method,
                    audit_gaps: gaps.join(","),
                    audit_duration: answers.duration,
                    audit_own_words: answers.own_words ?? "",
                    audit_completed_at: completedAt,
                  },
                  subscriptions: { email: { marketing: { consent: "SUBSCRIBED" } } },
                },
              },
            },
          },
          relationships: { list: { data: { type: "list", id: KLAVIYO_LIST_ID } } },
        },
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export function readUtm(): { utm_source?: string; utm_campaign?: string } {
  const p = new URLSearchParams(location.search);
  return {
    utm_source: p.get("utm_source") ?? undefined,
    utm_campaign: p.get("utm_campaign") ?? undefined,
  };
}
