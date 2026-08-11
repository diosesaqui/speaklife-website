<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# SpeakLife website — context

## Where things are

- **This repo is the marketing site**, `speaklifebibleaffirmations.com`. It is NOT on the owner's Mac; work from a fresh clone.
- **Deploys to Vercel automatically on push to `main`.** Branch pushes get a preview URL; the production domain only changes when `main` does.
- The **iOS app** is a separate repo (`diosesaqui/SpeakLife`), Android is `diosesaqui/speaklife-android`. Neither is in this repo.
- App Store ID `1617492998`, slug `speaklife-pray-like-jesus`.

## Verified facts — do not restate these from memory, and never inflate them

| Fact | Value |
|---|---|
| App Store rating | **4.9** |
| Rating count | **1,500+** (was wrongly published as 2,400) |
| Free trial | **7 days** (was wrongly published as 3 days on 6 pages) |
| Price | **$12/month or $49/year** |
| Brand colour | **SLBlue `#1A264D`** — from the iOS app's `Constants.SLBlue`, `rgb(0.1, 0.15, 0.3)` |
| Accent | Gold `#c9a84c` |
| Tab bar | Today · Speak · Bible Chat · Audio · Profile |
| Positioning | Storm → victory. "Reject the Lie. Declare the Truth." (2 Cor 10:5) |

Inflated `aggregateRating` in structured data is a Google rich-results violation. Check `lib/appstore.ts` — rating and count live there as constants.

## Rules learned the hard way

1. **Never invent testimonials.** Use verbatim App Store reviews with real usernames. A previous build shipped three fabricated ones ("Sarah M.", "Keisha T.", "Rachel D.").
2. **The founder's own App Store reviews (`Franchiz.king`, `King.Franchiz`) must never run as customer testimonials** — FTC endorsement disclosure. The Bell's palsy story (2020) runs as a clearly labelled founder story instead.
3. **Never invent URLs.** The confirmed social handles are:
   TikTok `@speaklife.app` · Instagram `speaklifeapp` · Facebook
   `Speaklife.bibleapp`. Do not change these without asking — an earlier pass
   removed a working Instagram link on the assumption it was a placeholder.
   Note the iOS app links to `instagram.com/speaklife.affirmationsapp`, which
   is a different account; the website uses `speaklifeapp`.
4. **A claim on one page is on all of them.** Trial length, price and rating appear across the homepage, `/faq`, and the AEO pages. Grep the whole repo before declaring a fix done — some live inside FAQPage JSON-LD, where Google can surface a wrong number as a rich result.
5. **Verify competitor pricing before publishing it.** Hallow $9.99/mo · $69.99/yr. Abide $9.99/mo · $39.99/yr (was wrongly listed as $60/yr). `She Reads Truth $9.99/mo` is still unverified.
6. **No fake urgency**, no countdown timers. The brand promise is peace.

## Conversion architecture (don't undo these)

- **One CTA label everywhere**: "Start 7 Days Free". Single-CTA pages convert materially better, and one label means clicks aggregate to one metric.
- Every App Store link goes through `appStoreUrl(ct)` in `lib/appstore.ts`, which tags an Apple campaign token per position (`web-hero`, `web-sticky`, `web-mid`, `web-final`, `web-qr`, `web-banner`, `web-nav`). Set `NEXT_PUBLIC_APPLE_PROVIDER_TOKEN` in Vercel or none of it attributes.
- Above the fold must contain: rating + count, benefit headline, subhead, one CTA, risk-reversal microcopy. Verify the CTA is above the fold at 375px height 667 before shipping hero changes.
- Fonts are self-hosted in `app/fonts/`. Do not reintroduce a Google Fonts `<link>` — it blocks first paint.
- Homepage A/B test lives in `proxy.ts` (Next 16 renamed `middleware` → `proxy`), cookie `ab-hero`, variants in `heroVariants` in `app/page.tsx`.
