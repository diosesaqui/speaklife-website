// ── App Store links & campaign attribution ────────────────────────────────
//
// Apple campaign links let you attribute installs back to the exact button a
// visitor tapped. Format:
//   https://apps.apple.com/us/app/<slug>/id<APP_ID>?pt=<PROVIDER_TOKEN>&ct=<CAMPAIGN>&mt=8
//
// Constraints (Apple):
//   • ct  — max 30 alphanumeric chars + spaces; space can't be first or last
//   • 24-hour attribution window from click to download
//   • A campaign only appears in App Analytics after ≥5 first-time downloads
//   • Last click wins if a user hits several campaign links
//
// PROVIDER_TOKEN comes from App Store Connect → Analytics → Campaigns.
// Until it's filled in, links still work — they just won't attribute in
// App Analytics. Set NEXT_PUBLIC_APPLE_PROVIDER_TOKEN in Vercel to enable.

export const APP_ID = "1617492998";
export const APP_SLUG = "speaklife-pray-like-jesus";

const PROVIDER_TOKEN = process.env.NEXT_PUBLIC_APPLE_PROVIDER_TOKEN ?? "";

export type CtaPosition =
  | "web-hero"
  | "web-sticky"
  | "web-mid"
  | "web-final"
  | "web-qr"
  | "web-banner"
  | "web-nav";

export function appStoreUrl(ct: CtaPosition): string {
  const params = new URLSearchParams();
  if (PROVIDER_TOKEN) params.set("pt", PROVIDER_TOKEN);
  params.set("ct", ct);
  params.set("mt", "8");
  return `https://apps.apple.com/us/app/${APP_SLUG}/id${APP_ID}?${params.toString()}`;
}

// ── Verified facts. Do not inflate these. ─────────────────────────────────
// Source: App Store listing, checked 2026-08-10.
// Spiegel Research Center: purchase likelihood peaks at 4.2–4.5 stars, not
// 5.0 — a precise, imperfect number outperforms a vague perfect one.
export const RATING = "4.9";
export const RATING_COUNT = 1500;
export const RATING_COUNT_LABEL = "1,500+";
