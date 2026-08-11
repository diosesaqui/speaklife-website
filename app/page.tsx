import type { Metadata } from "next";
import { cookies } from "next/headers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";
import StarRating from "@/components/StarRating";
import AppScreen from "@/components/AppScreen";
import StickyCTA from "@/components/StickyCTA";
import DesktopHandoff from "@/components/DesktopHandoff";
import DeclarationSampler from "@/components/DeclarationSampler";
import FAQ from "@/components/FAQ";
import { FAQ_ITEMS } from "@/lib/faq";
import PageAnalytics from "@/components/PageAnalytics";
import { APP_ID, APP_SLUG, RATING, RATING_COUNT } from "@/lib/appstore";

/* ─────────────────────────────────────────────────────────────────────────
   A/B TEST — headline only.
   Only headline, hero, CTA and offer tests are worth running: they produce
   winners ~24% of the time, versus <6% for cosmetic changes, and 78% of all
   A/B tests come back inconclusive. One variable at a time.
   Assignment happens in middleware.ts (cookie `ab-hero`, 30-day sticky).
   ───────────────────────────────────────────────────────────────────────── */
const heroVariants: Record<string, { headline: string; sub: string }> = {
  a: {
    headline: "The storm doesn’t get the last word.",
    sub: "Two minutes a day speaking God’s promises out loud — over anxiety, fear, money, and whatever storm you’re standing in right now.",
  },
  b: {
    headline: "Speak to your storm.",
    sub: "Jesus didn’t pray about the storm. He spoke to it. Two minutes a day declaring God’s promises over anxiety, fear, money — whatever you’re facing.",
  },
};

export const metadata: Metadata = {
  title: "SpeakLife — Speak God’s Word Over Every Storm | Christian Declaration App",
  description:
    "Reject the lie, declare the truth. Two minutes a day speaking God’s promises out loud over anxiety, fear, money and every storm. 4.9 stars from 1,500+ ratings. Free on iPhone.",
  alternates: { canonical: "https://www.speaklifebibleaffirmations.com" },
};

/* ── Real App Store reviews. Verbatim, real usernames, real dates. ────────
   Deliberately NOT included: the two reviews posted from the founder's own
   accounts (Franchiz.king, King.Franchiz). They are the strongest stories in
   the corpus, but publishing your own reviews as third-party testimonials is
   an FTC endorsement-disclosure problem. Retell them as founder story instead.
   ──────────────────────────────────────────────────────────────────────── */
const reviews = [
  {
    title: "Amazing",
    body: "This has been life-changing. It gives you affirmations to speak out loud. Also meditations on different things like Psalm 91, anxiety, your identity in Christ. I fully recommend this to anyone who is looking to grow their relationship with Jesus.",
    author: "Heather L Compton",
    date: "Aug 22, 2025",
  },
  {
    title: "The best app ever made!",
    body: "Second to the Bible, this app is my favorite. It brings me such joy and encouragement and every time I’ve read something I just feel lighter, more encouraged and excited what God has in store for my day.",
    author: "chevonne818",
    date: "Jun 29",
  },
  {
    title: "Transforming",
    body: "I love the different episodes about how our words matter. Our words can change the course of our life, good or bad. I just wanted to say thank you for all your encouragement each day.",
    author: "KathyAnn1434",
    date: "Mar 1",
  },
  {
    title: "Amazing!!",
    body: "The scripture says we should renew our mind through the word. This app is the epitome of tech designed to accomplish that purpose. Words can’t express how grateful I am to the creators of this app.",
    author: "Tripp7777777",
    date: "May 16",
  },
  {
    title: "Worth the Download!",
    body: "Everything I’ve read has been rooted in Scripture — my requirement in my recent lifelong commitment to Jesus Christ. I highly recommend getting this app to ensure you are firmly rooted in the Truth.",
    author: "HippyChick867",
    date: "Dec 31, 2024",
  },
  {
    title: "Love this glorious App",
    body: "It beautifully speaks life to my very soul with God’s Holy Word. Thank you from the bottom of my heart.",
    author: "mama and grandma for Jesus",
    date: "Feb 17, 2025",
  },
];

const storms = [
  { name: "Anxiety", line: "for the mornings that start with dread" },
  { name: "Fear", line: "for the news you didn’t want to hear" },
  { name: "Provision", line: "for the month that’s longer than the money" },
  { name: "Identity", line: "for when you forget whose you are" },
  { name: "Healing", line: "for the body that isn’t cooperating" },
  { name: "Purpose", line: "for when the road ahead went quiet" },
];

const rhythm = [
  {
    n: "01",
    title: "Hear",
    tab: "Audio",
    body: "A three-to-five minute devotional. About the length of one song in the car.",
    shot: "/screenshots/audio.webp",
    alt: "SpeakLife Audio tab showing short devotionals including Founder's Testimony and The Power of Speaking Life",
  },
  {
    n: "02",
    title: "Speak",
    tab: "Speak",
    body: "Today's promise, full screen. Say it out loud. Not wishing. Not begging. Speaking what's already true.",
    shot: "/screenshots/speak.webp",
    alt: "SpeakLife Speak tab showing Jeremiah 30:17 over a night sky",
  },
  {
    n: "03",
    title: "Ask",
    tab: "Bible Chat",
    body: "Anxiety, marriage, forgiveness, doubt — bring it to Bible Chat and get a Scripture-rooted answer in seconds.",
    shot: "/screenshots/biblechat.webp",
    alt: "SpeakLife Bible Chat asking What's weighing on you tonight, with topics for anxiety, fear, love, marriage and forgiveness",
  },
  {
    n: "04",
    title: "Today",
    tab: "Today",
    body: "Your streak, your seven-day plan, and what's next. Two minutes, and the day is yours.",
    shot: "/screenshots/today.webp",
    alt: "SpeakLife Today tab showing a streak, today's progress and a seven-day healing plan",
  },
];

/* ── Structured data. Numbers match the App Store exactly. ───────────────
   The previous build shipped reviewCount 2400 and a $10/mo · $50/yr price
   that were both wrong. Inflated aggregateRating is a Google rich-results
   violation and can get your snippets suppressed.
   ─────────────────────────────────────────────────────────────────────── */
const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SpeakLife: Pray Like Jesus",
  operatingSystem: "iOS 17.0 or later",
  applicationCategory: "LifestyleApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RATING,
    ratingCount: String(RATING_COUNT),
    bestRating: "5",
    worstRating: "1",
  },
  description:
    "SpeakLife is a Christian iOS app built on one mechanic — reject the lie, declare the truth (2 Corinthians 10:5). Speak Scripture-based declarations out loud over anxiety, fear, provision, healing, identity and purpose.",
  url: `https://apps.apple.com/us/app/${APP_SLUG}/id${APP_ID}`,
  publisher: { "@type": "Organization", name: "DIOSESTAAQUI LLC" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SpeakLife",
  url: "https://www.speaklifebibleaffirmations.com",
  sameAs: [`https://apps.apple.com/us/app/${APP_SLUG}/id${APP_ID}`],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default async function Home() {
  const cookieStore = await cookies();
  const variant = cookieStore.get("ab-hero")?.value === "b" ? "b" : "a";
  const hero = heroVariants[variant];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageAnalytics />
      <Header />

      <main>
        {/* ═══ HERO ═══════════════════════════════════════════════════════
            Everything a visitor needs to decide, in the first viewport:
            proof, headline, mechanism, action, risk reversal, product.
            57% of viewing time is above the fold and 64% of mobile visitors
            never scroll past it. Roughly 7 seconds to land this.
            ═══════════════════════════════════════════════════════════════ */}
        <section id="hero" className="hero-water grain relative pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
              {/* Left — the pitch */}
              <div className="text-center md:text-left">
                <div className="animate-fade-up">
                  <StarRating className="justify-center md:justify-start" />
                </div>

                <h1
                  className="serif-display animate-fade-up delay-1 mt-6 text-balance text-white"
                  style={{
                    fontSize: "clamp(2.6rem, 7.5vw, 4.4rem)",
                    fontWeight: 900,
                    lineHeight: 1.02,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {hero.headline}
                </h1>

                <p className="animate-fade-up delay-2 mt-6 text-pretty text-lg leading-relaxed text-white/65 md:max-w-lg">
                  {hero.sub}
                </p>

                <div className="animate-fade-up delay-3 mt-9 flex flex-col items-center gap-4 md:items-start">
                  <DownloadButton position="web-hero" className="w-full sm:w-auto" />
                  <p className="text-sm text-white/40">
                    7 days free · Cancel any time · No payment due now
                  </p>
                </div>

                <div className="animate-fade-up delay-4">
                  <DesktopHandoff />
                </div>
              </div>

              {/* Right — the product.
                  The real Daily Victory screen, not a mockup: it shows the
                  exact action the headline promises, and the app's own line
                  ("God's power flows when you speak") makes the argument
                  better than any copy I could write around it. */}
              <div className="flex justify-center md:justify-end">
                <AppScreen
                  src="/screenshots/daily-victory.webp"
                  alt="SpeakLife showing today's declaration — By His wounds I am healed, this body carries the wholeness Jesus already paid for, 1 Peter 2:24 — with a Speak this truth aloud prompt"
                  width={272}
                  priority
                  className="animate-fade-up delay-3"
                />
              </div>
            </div>
          </div>

        </section>

        {/* ═══ PROOF STRIP ══════════════════════════════════════════════ */}
        <section id="proof" className="border-b border-black/[0.06] bg-white py-8">
          <div className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-black/[0.07] px-5 text-center">
            {[
              { big: RATING, small: "App Store rating" },
              { big: "1,500+", small: "ratings and counting" },
              { big: "2 min", small: "is a real day" },
            ].map((s) => (
              <div key={s.small} className="px-2">
                <div className="serif-display text-3xl font-black text-[#1A264D] md:text-4xl">{s.big}</div>
                <div className="mt-1.5 text-xs leading-tight text-[#1A264D]/45 md:text-sm">{s.small}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ PROBLEM ══════════════════════════════════════════════════
            PAS. This audience is problem-aware — they arrive already anxious,
            already tired. Naming it in their own words earns the next scroll.
            ═════════════════════════════════════════════════════════════ */}
        <section id="storm" className="bg-white px-5 py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A264D]/35">
              You already know this part
            </p>
            <h2 className="serif-display text-balance text-3xl font-bold leading-tight text-[#1A264D] md:text-5xl">
              The storm talks first. And it’s loud.
            </h2>
            <div className="mx-auto mt-9 max-w-xl space-y-4 text-lg leading-relaxed text-[#1A264D]/60">
              <p>
                It wakes you at 3am. It does the math on your account before you’re
                out of bed. It replays the thing you said, the diagnosis, the layoff,
                the silence from someone you love.
              </p>
              <p>
                You read a verse. You feel better for an hour. Then the storm starts
                talking again — and it never stopped believing what it was saying.
              </p>
              <p className="font-medium text-[#1A264D]">
                Reading God’s Word is how you learn it. Speaking it is how you use it.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ MECHANISM ════════════════════════════════════════════════
            The differentiator nobody else in the category has. Hallow sells
            peace, Abide sells meditation, Glorify sells habit — none of them
            has a named mechanic. SpeakLife does, and it wasn't on the site.
            ═════════════════════════════════════════════════════════════ */}
        <section id="mechanism" className="hero-water grain relative px-5 py-24 md:py-32">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              How SpeakLife works
            </p>
            <h2 className="serif-display text-balance text-3xl font-bold leading-tight text-white md:text-5xl">
              Reject the lie.
              <br />
              Declare the truth.
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/60">
              Every storm arrives carrying a sentence it wants you to believe.
              SpeakLife finds that sentence, puts the Word of God against it, and
              hands you the exact thing to say out loud.
            </p>
            <p className="serif-display mt-8 text-2xl text-gold md:text-3xl">
              God’s power flows when you speak.
            </p>
            <p className="mt-8 inline-block border-t border-white/15 pt-6 text-sm italic leading-relaxed text-white/45">
              “We demolish arguments and every pretension that sets itself up against
              the knowledge of God, and we take captive every thought to make it
              obedient to Christ.”
              <span className="mt-2 block not-italic text-xs uppercase tracking-wide text-white/30">
                2 Corinthians 10:5
              </span>
            </p>
          </div>
        </section>

        {/* ═══ SAMPLE THE PRODUCT ═══════════════════════════════════════
            Of seven competitors examined, only Abide lets you experience the
            core value before installing. Highest-upside idea on this page.
            ═════════════════════════════════════════════════════════════ */}
        <section id="try" className="bg-[#111B3A] px-5 py-24 md:py-32">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Try it right now
            </p>
            <h2 className="serif-display text-balance text-3xl font-bold leading-tight text-white md:text-5xl">
              Which storm are you in?
            </h2>
            <p className="mt-5 text-white/50">
              Pick one. Read the truth out loud, where you are, right now. No
              download needed for this part.
            </p>
          </div>
          <DeclarationSampler />
        </section>

        {/* ═══ DAILY RHYTHM ═════════════════════════════════════════════
            Show the ritual, don't list the features. For a habit product the
            visitor needs to picture the loop they're signing up for.
            ═════════════════════════════════════════════════════════════ */}
        <section id="rhythm" className="bg-white px-5 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A264D]/35">
                Your morning
              </p>
              <h2 className="serif-display text-balance text-3xl font-bold leading-tight text-[#1A264D] md:text-5xl">
                Four steps. Under five minutes.
              </h2>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {rhythm.map((r) => (
                <div key={r.n} className="flex flex-col items-center text-center">
                  <AppScreen src={r.shot} alt={r.alt} width={196} />
                  <div className="serif-display mt-7 text-3xl font-black text-gold/50">{r.n}</div>
                  <h3 className="mt-1 text-lg font-semibold text-[#1A264D]">{r.title}</h3>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A264D]/35">
                    {r.tab} tab
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#1A264D]/55">{r.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <DownloadButton position="web-mid" tone="dark" />
              <div className="mt-5">
                <StarRating tone="dark" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ THE SIX STORMS ═══════════════════════════════════════════ */}
        <section id="areas" className="bg-[#f4f6fb] px-5 py-24 md:py-32">
          <div className="mx-auto max-w-5xl">
            <h2 className="serif-display mb-14 text-center text-3xl font-bold leading-tight text-[#1A264D] md:text-5xl">
              Six storms. Hundreds of promises.
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {storms.map((s) => (
                <div
                  key={s.name}
                  className="card-hover rounded-2xl border border-black/[0.06] bg-white p-7"
                >
                  <div className="serif-display text-xl font-bold text-[#1A264D]">{s.name}</div>
                  <div className="mt-2 text-sm leading-relaxed text-[#1A264D]/50">{s.line}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FOUNDER STORY ════════════════════════════════════════════
            The Bell's palsy account is the strongest story in the review
            corpus — but it was posted from the founder's own App Store
            account, so it cannot run as a third-party testimonial (FTC
            endorsement disclosure). Told in first person and clearly labelled
            as the founder's, it's both honest and considerably more powerful.
            Framed as testimony, never as medical claim.
            ═════════════════════════════════════════════════════════════ */}
        <section id="founder" className="bg-white px-5 py-24 md:py-32">
          <div className="mx-auto max-w-2xl">
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#1A264D]/35">
              Why this exists
            </p>
            <h2 className="serif-display text-balance text-center text-3xl font-bold leading-tight text-[#1A264D] md:text-5xl">
              I built this because it worked on me.
            </h2>

            <div className="mt-10 rounded-3xl border border-black/[0.07] bg-[#f4f6fb] p-8 md:p-12">
              <div className="space-y-5 text-lg leading-relaxed text-[#1A264D]/70">
                <p>
                  In 2020 I woke up with Bell’s palsy. Half my face was stuck. I
                  went to the emergency room and a doctor told me it might never
                  fully come back.
                </p>
                <p>
                  I didn’t have a strategy. I had a handful of healing promises.
                  I saved five of them and said them out loud three to ten times
                  a day, whether I felt like it or not.
                </p>
                <p className="font-medium text-[#1A264D]">
                  My face came back a little more every morning. Today it’s
                  fully healed. All praise to the Most High.
                </p>
                <p>
                  That’s the whole reason SpeakLife exists. Not as medicine — as
                  the thing I reached for when I had nothing else to say.
                </p>
              </div>

              <div className="mt-9 flex items-center gap-4 border-t border-black/[0.07] pt-7">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#1A264D] text-lg font-bold text-gold">
                  F
                </div>
                <div>
                  <div className="font-semibold text-[#1A264D]">Franchiz</div>
                  <div className="text-sm text-[#1A264D]/50">Founder, SpeakLife</div>
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-xs text-[#1A264D]/40">
              Founder’s personal testimony. SpeakLife is not a medical treatment
              and isn’t a substitute for care from your doctor.
            </p>
          </div>
        </section>

        {/* ═══ REAL REVIEWS ═════════════════════════════════════════════ */}
        <section id="reviews" className="hero-water grain relative px-5 py-24 md:py-32">
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Straight from the App Store
              </p>
              <h2 className="serif-display text-balance text-3xl font-bold leading-tight text-white md:text-5xl">
                {RATING} stars, and here’s why
              </h2>
              <div className="mt-6">
                <StarRating />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure
                  key={r.author}
                  className="card-hover flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7"
                >
                  <div className="mb-3 flex gap-0.5 text-gold" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-3 font-semibold text-white">{r.title}</p>
                  <blockquote className="flex-1 text-sm leading-relaxed text-white/60">
                    {r.body}
                  </blockquote>
                  <figcaption className="mt-5 border-t border-white/10 pt-4 text-xs text-white/35">
                    {r.author} <span className="mx-1.5 opacity-50">·</span> {r.date}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FAQ ══════════════════════════════════════════════════════ */}
        <section id="faq" className="bg-white px-5 py-24 md:py-32">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="serif-display text-balance text-3xl font-bold leading-tight text-[#1A264D] md:text-5xl">
              Before you tap
            </h2>
          </div>
          <FAQ />
        </section>

        {/* ═══ FINAL CTA ════════════════════════════════════════════════ */}
        <section id="start" className="hero-water grain relative px-5 py-28 text-center md:py-36">
          <div className="relative z-10 mx-auto max-w-xl">
            <h2
              className="serif-display text-balance text-white"
              style={{
                fontSize: "clamp(2.4rem, 7vw, 4rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Tomorrow morning, speak first.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/60">
              The storm is going to say something. Make sure it isn’t the only
              voice in the room.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <DownloadButton position="web-final" className="w-full sm:w-auto" />
              <p className="text-sm text-white/40">
                7 days free · Cancel any time · No payment due now
              </p>
              <div className="mt-3">
                <StarRating />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
      {/* Sticky bar clearance so it never covers the footer's last line. */}
      <div className="h-24 bg-[#0B1226] md:hidden" aria-hidden="true" />
    </>
  );
}
