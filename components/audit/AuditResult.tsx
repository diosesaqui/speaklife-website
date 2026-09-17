"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  DECLARATIONS,
  IDENTITY_LINES,
  MARK_11,
  METHOD_COPY,
  PDFS_PUBLISHED,
  SAY_IT_UNDERLINE,
  TURN_LINE,
  gapsFor,
  inputLedgerLine,
  isComplete,
  methodFor,
  outboundUrl,
  resolveRoute,
  stormNameFor,
  waitingCostLine,
} from "@/lib/audit/model";
import { loadSession, saveSession, track, type AuditSession } from "@/lib/audit/client";

// §6 beat 5: hold the declaration alone before the CTA appears. Deliberate.
const DECLARATION_HOLD_MS = 3000;

export default function AuditResult() {
  const router = useRouter();
  const [session, setSession] = useState<AuditSession | null>(null);

  useEffect(() => {
    const s = loadSession();
    if (!isComplete(s.answers)) {
      router.replace("/audit");
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrating from storage
    setSession(s);
  }, [router]);

  const route = session ? resolveRoute(session.answers.storm, session.answers.substorm) : null;

  // §10 audit_completed, once per completion (a refresh does not re-fire it).
  useEffect(() => {
    if (!session || !route) return;
    const key = session.completedAt ?? "no-email";
    if (session.flags?.completedFired === key) return;
    const a = session.answers;
    track({
      event: "audit_completed",
      properties: {
        storm: route.storm,
        substorm: route.substorm,
        pain: route.pain,
        method: methodFor(a),
        gaps: gapsFor(a).map((g) => g.id),
        duration: a.duration!,
        has_own_words: !!a.own_words,
      },
    });
    saveSession({ ...session, flags: { ...session.flags, completedFired: key } });
  }, [session, route]);

  if (!session || !route) return <div className="min-h-[100dvh]" aria-busy="true" />;

  const a = session.answers;
  const method = methodFor(a);
  const gaps = gapsFor(a);
  const cost = waitingCostLine(a);
  const ledger = inputLedgerLine(a);

  return (
    <main className="mx-auto max-w-lg px-4 pb-16 pt-10 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">Your Storm Audit</p>

      {/* Beat 1: the storm, named */}
      <section className="mt-4" aria-labelledby="beat-storm">
        <h1 id="beat-storm" className="text-[1.9rem] font-semibold leading-tight tracking-tight text-white">
          You are standing in the storm of {stormNameFor(route)}.
        </h1>
        {a.own_words && (
          <blockquote className="serif-display mt-4 border-l-2 border-gold/60 pl-4 text-xl italic leading-snug text-white/80">
            “{a.own_words}”
          </blockquote>
        )}
      </section>

      {/* Beat 2: the method gap. The label never stands alone. */}
      <section className="mt-10" aria-labelledby="beat-method">
        <h2 id="beat-method" className="text-2xl font-semibold leading-snug text-white">
          {METHOD_COPY[method].line}
        </h2>
        <p className="mt-4 text-white/75">
          <span className="mr-2 inline-block rounded-full border border-gold/50 px-3 py-0.5 text-sm font-semibold text-gold">
            {method}
          </span>{" "}
          {METHOD_COPY[method].reassurance}
        </p>
      </section>

      {/* Beat 3: the gaps, never more than three */}
      {(gaps.length > 0 || cost || ledger) && (
        <section className="mt-10" aria-labelledby="beat-gaps">
          <h2 id="beat-gaps" className="text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
            {gaps.length === 1 ? "Your gap" : `Your ${gaps.length === 2 ? "two" : "three"} gaps`}
          </h2>
          <ol className="mt-4 flex flex-col gap-3">
            {gaps.map((g, i) => (
              <li key={g.id} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <span className="serif-display text-2xl font-bold leading-none text-gold" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="text-[1.0625rem] leading-snug text-white">{g.headline}</span>
              </li>
            ))}
          </ol>
          {cost && <p className="mt-6 leading-relaxed text-white/75">{cost}</p>}
          {ledger && <p className="mt-4 leading-relaxed text-white/75">{ledger}</p>}
        </section>
      )}

      {/* Beat 4: the turn */}
      <section className="mt-14 border-t border-white/10 pt-12" aria-labelledby="beat-turn">
        <h2 id="beat-turn" className="text-2xl font-semibold leading-snug text-white">
          {TURN_LINE}
        </h2>
        <figure className="mt-6">
          <blockquote className="serif-display text-lg italic leading-relaxed text-white/80">“{MARK_11.text}”</blockquote>
          <figcaption className="mt-3 text-sm font-semibold tracking-wide text-gold">{MARK_11.cite}</figcaption>
        </figure>
        <p className="serif-display mt-10 text-[2.1rem] font-bold leading-tight text-white">{IDENTITY_LINES[route.pain]}</p>
      </section>

      {/* Beat 5: say it now */}
      <SayItNow route={route} />

      {PDFS_PUBLISHED && (
        <p className="mt-10 text-center">
          <a
            href={`/audit/${route.pdf}`}
            download
            onClick={() => track({ event: "audit_pdf_downloaded", properties: { storm: route.storm } })}
            className="text-sm font-semibold text-white/70 underline underline-offset-4 hover:text-white"
          >
            Download your plan (PDF)
          </a>
        </p>
      )}
    </main>
  );
}

function SayItNow({ route }: { route: NonNullable<ReturnType<typeof resolveRoute>> }) {
  const [revealed, setRevealed] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const declarationRef = useRef<HTMLDivElement>(null);
  const declaration = DECLARATIONS[route.storm];
  const href = outboundUrl(route);

  useEffect(() => {
    if (!revealed) return;
    declarationRef.current?.focus();
    const t = setTimeout(() => setCtaVisible(true), DECLARATION_HOLD_MS);
    return () => clearTimeout(t);
  }, [revealed]);

  return (
    <section className="mt-14" aria-label="Say it now">
      {!revealed ? (
        <button
          type="button"
          onClick={() => {
            setRevealed(true);
            track({ event: "audit_declaration_revealed", properties: { storm: route.storm } });
          }}
          className="min-h-[56px] w-full rounded-full bg-gold text-base font-semibold text-[#1A264D] transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/50"
        >
          Say it out loud
        </button>
      ) : (
        <div ref={declarationRef} tabIndex={-1} className="audit-reveal text-center outline-none" aria-live="polite">
          <p className="text-[1.75rem] font-semibold leading-snug text-white">{declaration.text}</p>
          <p className="mt-3 text-sm font-semibold tracking-wide text-gold">{declaration.ref}</p>
          <p className="mt-6 text-white/60">{SAY_IT_UNDERLINE}</p>
        </div>
      )}

      {/* No CTA until this route's Branch link exists. See BRANCH_LINKS. */}
      {revealed && href && (
        <div className={`mt-10 transition-opacity duration-700 ${ctaVisible ? "opacity-100" : "pointer-events-none opacity-0"}`} aria-hidden={!ctaVisible}>
          <a
            href={href}
            tabIndex={ctaVisible ? 0 : -1}
            onClick={() => track({ event: "audit_cta_tapped", properties: { storm: route.storm, ob: route.ob } })}
            className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-gold px-8 text-base font-semibold tracking-tight text-[#1A264D] transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/50"
          >
            Start 7 Days Free
          </a>
        </div>
      )}
    </section>
  );
}
