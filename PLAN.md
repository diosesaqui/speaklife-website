# SpeakLife Landing Page — Conversion Rebuild Plan

**Page:** https://www.speaklifebibleaffirmations.com
**App:** SpeakLife: Pray Like Jesus — *Victory Over Every Storm* (4.9 ★, 1.5K ratings)
**Stack:** Next.js 16 / React 19 / Tailwind, deployed on Vercel
**Positioning chosen:** Storm → Victory
**Pricing on page:** No. Trial framing only.

---

## 1. Diagnosis — what the current page is doing wrong

Ranked by cost.

### 1.1 The first viewport sells nothing
The hero is a full-screen `SPEAK LIFE` wordmark at `clamp(5rem, 18vw, 14rem)` with the value proposition pushed below it. That is the single most expensive mistake on the page.

- **57%** of total viewing time on a page happens above the fold, and **>65% of that** is in the *top half* of the viewport (NN/g eye-tracking). The top half of your phone screen is currently occupied by a logo.
- **64% of mobile visitors never scroll past the first viewport.** Average mobile above-fold dwell is ~7 seconds.
- A visitor who arrives from a Facebook ad, reads `SPEAK LIFE`, and bounces has learned nothing about what the app does, who it's for, or why it works.

A wordmark is not a headline. Brand recognition is something you earn *after* the value proposition lands, not a substitute for it.

### 1.2 Your best asset is invisible
You have **4.9 stars from 1,500+ ratings**. It appears nowhere above the fold. The homepage shows a decorative `⭐⭐⭐⭐⭐` emoji row deep in the testimonials section with no number attached.

- Northwestern's Spiegel Research Center: products with reviews show **~270% higher purchase likelihood** — and purchase likelihood **peaks at 4.2–4.5 stars, not 5.0**, because perfect scores read as fabricated. Your real 4.9 with a real count is more persuasive than five decorative stars.
- Social proof in the first viewport is worth roughly **+12%**.
- **None of Hallow, Glorify, Calm, Headspace, Abide, Pray.com or YouVersion puts a star rating + review count next to their primary CTA.** This is an open lane in your entire category.

### 1.3 Factually wrong claims (fix immediately — this is a risk, not just a CRO issue)

| Location | Current claim | Reality |
|---|---|---|
| Hero variant B | "4.9 stars · **2,400+ reviews**" | **1.5K ratings** |
| `appSchema` JSON-LD | `"reviewCount": "2400"` | 1.5K |
| `appSchema` JSON-LD | `price: 10.00/mo, 50.00/yr` | Actual tiers: $4.99 wk, $6.99 mo, $9.99–$69.99 yr |
| Final CTA | "3-day free trial · **$10/mo or $50/yr**" | Not your current pricing |

Inflated `aggregateRating` in structured data is a Google rich-results violation and can get your snippets suppressed. Stale pricing on the page that contradicts the App Store creates a trust break at the exact moment of highest hesitation.

### 1.4 Testimonials are unattributable
The three homepage testimonials ("Sarah M.", "Keisha T.", "Rachel D.") do not correspond to any App Store review. You have **ten real five-star reviews**, two of which are extraordinary storm-to-victory stories. Real reviews with real usernames are both more credible and defensible.

> ⚠️ **Two of your real reviews are posted from `Franchiz.king` and `King.Franchiz`.** Those are your own accounts. The Bell's Palsy healing story and the layoff→2x-salary story are the two strongest pieces of copy in your entire review corpus — but publishing your own reviews as third-party customer testimonials is an FTC endorsement-disclosure problem. **I have not used them as testimonials.** Recommendation: retell the Bell's Palsy story as *your own founder story*, clearly labelled as the founder's. It's more powerful that way anyway, and it's honest.

### 1.5 Too many exits, no single path
- Header nav (Home / About / Features / Privacy) + footer nav + social links + inline links. Unbounce: **1 CTA = 13.5% conversion, 2–4 = 11.9%, 5+ = 10.5%.** Removing nav on mobile roughly doubles conversions.
- Three different CTA labels on one page: "App Store", "Start Free Trial", "Download". Clicks fragment across three events, so you can't measure any of them properly.

### 1.6 "Download" is the wrong verb
"Download on the App Store" describes *the visitor's cost*. Specific-outcome CTAs beat generic verbs by **~31%**; in large-scale mobile subscription testing, "Start for Free" / "Start X Days Free" consistently beat "Subscribe" and "Join". One named case study swapping "Book A Demo" → "Get Started" saw **+111%**.

### 1.7 No mobile conversion mechanics
- **No sticky CTA.** Sticky mobile CTA bars are worth **~+14%** (independently corroborated at +20.4% and +7.17%).
- **No device detection.** A desktop visitor sees an App Store badge that opens a web page they can't install from. Dead end.
- **No Apple Smart App Banner.** Free, one meta tag, **17.25% click-to-install** (Branch, 10M+ installs).
- **No QR handoff for desktop.** Hallow attributes ~9% of total growth to QR codes.

### 1.8 Performance
Google Fonts loaded via a render-blocking `<link>` in `<head>` — two families, nine weights. Every 1s of delay costs ~**7%** of conversions; **53% of mobile visits are abandoned past 3s**. This is a free fix via `next/font`.

### 1.9 Copy is feature-led and abstract
"THEMES / LIFE SITUATIONS", "CREATE YOUR OWN", "an innovative Bible affirmation app designed to deepen your understanding" — this is product-speak. Benefit-led headlines beat feature-led by **~27%**; customer vocabulary beats marketer vocabulary by **~19%**; and pages written at a **5th–7th grade reading level convert 11.1% vs 5.3%** for college-level prose. That last one is a **2.1x gap** for zero cost.

### 1.10 Your best differentiator isn't on the page
The App Store listing leads with **"Reject the Lie. Declare the Truth"** (2 Corinthians 10:5) and **"Victory Over Every Storm."** That is a real, ownable mechanism — nobody else in the category has one. The website never mentions it. Hallow sells peace, Abide sells meditation, Glorify sells habit. **You can own the storm.**

### 1.11 No objection handling
No FAQ on the homepage. The questions costing you installs — *Does it cost money? Will I get charged after the trial? Is this for my denomination? How long does it take?* — go unanswered, so they get answered by the visitor's pessimism instead.

---

## 2. The new page

### 2.1 Principles
1. One offer, one CTA label, repeated.
2. Everything a visitor needs to decide is in the first viewport.
3. Real numbers, real reviews, no invented proof.
4. Mobile is the design target; desktop is the adaptation.
5. Show the ritual, don't list the features.
6. Let them experience the product before they install it.

### 2.2 Above the fold
| Element | Content | Why |
|---|---|---|
| Brand mark | Small `SPEAK LIFE` logotype | Brand without eating the viewport |
| Trust line | `★ 4.9 · 1,500+ ratings on the App Store` | +12% above-fold proof; real, verifiable numbers |
| H1 | **"The storm doesn't get the last word."** | Benefit-led, storm positioning, ~5th grade reading level |
| Subhead (10–20 words) | "Two minutes a day speaking God's promises out loud — over anxiety, fear, money, and every storm you're in." | Mechanism + time-to-value. 10–20 word subheads convert ~14% better than one-liners |
| Primary CTA | **"Start Free"** — device-aware | Specific outcome, not "Download" |
| Risk reversal | `Free to download · Cancel anytime · No payment due now` | +9% from benefit clarifiers |
| Visual | Phone showing a real declaration | Product clarity without LCP cost |

### 2.3 Section order
1. **Hero** — self-contained ad
2. **Proof strip** — 4.9 ★ / 1.5K ratings / 6 life areas
3. **Problem** (PAS) — name the storm in the visitor's own words
4. **The mechanism** — *Reject the Lie. Declare the Truth.* (2 Cor 10:5) — your ownable differentiator
5. **Try it now** — interactive: tap a storm, get the real declaration, speak it. *The Abide tactic; nobody else in your category does this.* Highest-upside untested idea on the page.
6. **Your daily rhythm** — the 4-step in-app loop (Glorify's pattern): Hear → Declare → Sit with it → Go deeper
7. **Six storms** — life areas, storm-framed
8. **Real reviews** — verbatim App Store reviews, real usernames, real dates
9. **FAQ** — accordions, real objections (+9% on mobile), `faq_open` instrumented to learn what people actually fear
10. **Final CTA** — same label, same event
11. **Footer** — Privacy / Terms, minimal

### 2.4 Mechanics
- **Sticky mobile CTA**, 56px tall, fades in once the hero leaves the viewport.
- **Device detection** — iOS: App Store. Desktop: inline QR + App Store link. No dead ends.
- **Apple Smart App Banner** meta tag.
- **`next/font`** — self-hosted, preloaded, no render-blocking request.
- **Nav removed on mobile.**

### 2.5 Measurement
Every App Store link carries a distinct Apple campaign token so installs attribute back to the exact button:

| Button | `ct=` |
|---|---|
| Hero | `web-hero` |
| Sticky bar | `web-sticky` |
| Mid-page | `web-mid` |
| Final CTA | `web-final` |
| QR (desktop) | `web-qr` |
| Smart banner | `web-banner` |

Events tracked via Vercel Analytics: `cta_click` (with position + variant), `scroll_depth` (25/50/75/90), `section_view`, `faq_open`, `sample_declaration`, `qr_view`.

Note Apple's constraints: `ct` max 30 chars, **24-hour attribution window**, and campaigns only appear after **≥5 first-time downloads** — so don't panic at low volume.

### 2.6 What I am deliberately NOT doing
- **No countdown timers or fake scarcity.** Non-credible, and actively corrosive to a brand whose promise is peace.
- **No autoplay hero video.** LCP cost with no credible conversion evidence behind it.
- **No inflated numbers.** 4.9 and 1.5K are better than 5.0 and "2,400+", both ethically and empirically.
- **No pricing on the page** (your call) — trial framing only.
- **Not using the founder's own reviews as customer testimonials.**

---

## 3. After launch

**Test in this order** — only headline, hero, CTA and offer are worth testing (they produce winners 24% of the time; cosmetic tests win <6%, and 78% of all A/B tests are inconclusive). One at a time; concurrent tests produce false positives 22% of the time.

1. H1: "The storm doesn't get the last word" vs. a peace-led control
2. CTA: "Start Free" vs. "Get SpeakLife Free"
3. Sample-the-declaration module on vs. off
4. Trial length framing (your app is a *daily habit* product — habits need ~2+ weeks, so a 7-day trial may be leaving money on the table)

**Then fix the App Store page.** At these ratios the landing page converts ~10% of visitors to an App Store tap, and the App Store page converts ~25–30% of those. Your product page is a bigger lever than your landing page. Reference is a low-converting category — Lifestyle converts at 23.3% and Health & Fitness at 30.8%; it's worth checking whether Reference is the right category for you.
