// ── 30 Days of Speaking to Your Storm — the paid PDF guide ────────────────
//
// Checkout runs on Lemon Squeezy (merchant of record: it takes the card,
// collects sales tax and emails the PDF). This site only links to it.
//
// To go live: create the product in Lemon Squeezy, copy its checkout URL and
// set NEXT_PUBLIC_GUIDE_CHECKOUT_URL in Vercel, then redeploy. Until it is set,
// every buy button on /30-day-guide renders as a disabled "Coming soon".

export const GUIDE_TITLE = "30 Days of Speaking to Your Storm";
export const GUIDE_PRICE = 27;
export const GUIDE_PRICE_LABEL = "$27";
export const GUIDE_PAGES = 50;

export const GUIDE_CHECKOUT_URL = process.env.NEXT_PUBLIC_GUIDE_CHECKOUT_URL ?? "";
export const GUIDE_LIVE = GUIDE_CHECKOUT_URL.startsWith("https://");

export type GuideCtaPosition = "guide-hero" | "guide-mid" | "guide-final";
