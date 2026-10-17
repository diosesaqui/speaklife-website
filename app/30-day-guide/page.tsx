import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideBuyButton from "@/components/GuideBuyButton";
import {
  GUIDE_CHECKOUT_URL,
  GUIDE_LIVE,
  GUIDE_PAGES,
  GUIDE_PRICE,
  GUIDE_PRICE_LABEL,
  GUIDE_TITLE,
} from "@/lib/guide";

export const metadata: Metadata = {
  title: `${GUIDE_TITLE} — A 30-Day Declaration Guide | SpeakLife`,
  description:
    "A 30-day guide to speaking God's promises out loud over fear, money, your body and who you are. One verse, one teaching, one declaration and one action a day. 50-page PDF by SpeakLife founder Franchiz Washington.",
  alternates: { canonical: "/30-day-guide" },
};

const WEEKS = [
  { label: "Week 1", days: "Days 1–7", name: "Speak to Fear", line: "Jesus slept through the storm, then told it to be still. You'll learn to speak to fear instead of managing it." },
  { label: "Week 2", days: "Days 8–14", name: "Speak to Lack", line: "Jesus gave thanks over five loaves before there was enough. Peace about money, without prosperity gospel." },
  { label: "Week 3", days: "Days 15–21", name: "Speak to Your Body", line: "Jesus rebuked a fever. Speak to the symptom and the report with the Word that outranks both." },
  { label: "Week 4", days: "Days 22–28", name: "Speak Who You Are", line: "Jesus heard “beloved” before a single miracle. Settle your identity so the next storm has nothing to grab." },
  { label: "Final Days", days: "Days 29–30", name: "Take More Ground", line: "What you say after the guide ends, when the storm comes back for a second round." },
];

const DAY_PARTS = [
  ["He did it first", "The moment Jesus did the exact thing you're about to do."],
  ["The verse", "King James Version, quoted exactly."],
  ["The teaching", "A short word from someone who has lived it."],
  ["The declaration", "Two sentences to say out loud, morning and night."],
  ["Today's move", "One action that matches what you're saying."],
  ["Journal", "One honest question and room to answer it."],
];

const EXTRAS = [
  ["Name Your Mountains", "Write down the four storms you're facing before Day 1. You come back to it on Day 28."],
  ["4 weekly check-ins", "Guided pages to see what moved and where you wanted to quit."],
  ["Storm Cards", "Eight declarations for the moment it hits: 3am, the bank app, the doctor's report. Screenshot and keep."],
  ["All 30 declarations", "Two printable pages. Tape them to the mirror."],
];

const GUIDE_FAQ = [
  {
    q: "What exactly do I get?",
    a: `A ${GUIDE_PAGES}-page PDF, sent to your email the moment you check out. Read it on your phone or print it on standard letter paper. It has journal lines on every day.`,
  },
  {
    q: "Do I need the SpeakLife app?",
    a: "No. The guide stands on its own. The app is where you keep going after Day 30, with a fresh declaration every morning.",
  },
  {
    q: "Which Bible translation does it use?",
    a: "The King James Version, quoted word for word. Every day cites the exact chapter and verse.",
  },
  {
    q: "Is this prosperity gospel or name-it-claim-it?",
    a: "No. There's no formula and no guaranteed outcome. You speak what Scripture already says, from grace and the finished work of Jesus, and you pair it with action every day.",
  },
  {
    q: "How long does each day take?",
    a: "About ten minutes. Read the verse out loud, read the short teaching, speak the declaration, do the move, write one line.",
  },
  {
    q: "What if I miss a day?",
    a: "Pick up where you left off. Don't start over. This is grace, not a streak.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GUIDE_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// Product schema only once checkout exists. An offer that can't be bought
// is a structured-data claim the page can't back up.
const productSchema = GUIDE_LIVE
  ? {
      "@context": "https://schema.org",
      "@type": "Product",
      name: GUIDE_TITLE,
      description: metadata.description,
      brand: { "@type": "Brand", name: "SpeakLife" },
      offers: {
        "@type": "Offer",
        price: GUIDE_PRICE.toFixed(2),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: GUIDE_CHECKOUT_URL,
      },
    }
  : null;

function Cover() {
  return (
    <div className="relative mx-auto w-[240px] md:w-[300px]" aria-hidden="true">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-black/30 blur-md" />
      <div
        className="relative flex aspect-[8.5/11] flex-col justify-between rounded-2xl border border-white/10 p-6 md:p-7"
        style={{ background: "radial-gradient(ellipse at 70% 15%, #2f4386 0%, #1A264D 55%, #111a38 100%)" }}
      >
        <div className="serif-display text-sm font-bold text-white">SpeakLife</div>
        <div>
          <div className="text-[9px] font-bold uppercase tracking-[0.22em] text-gold">A 30-Day Declaration Guide</div>
          <div className="serif-display mt-2 text-[28px] font-black leading-[1.05] text-white md:text-[34px]">
            30 Days of Speaking to <em className="text-gold">Your Storm</em>
          </div>
          <div className="mt-4 h-[2px] w-10 bg-gold" />
        </div>
        <div className="text-[8px] uppercase tracking-[0.2em] text-white/70">Franchiz Washington · Founder of SpeakLife</div>
      </div>
    </div>
  );
}

export default function ThirtyDayGuide() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "'Inter', sans-serif" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        {productSchema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
        )}

        {/* Hero — headline, price, one CTA and what you get all above the fold. */}
        <section className="hero-water px-5 pb-20 pt-24 md:pt-32">
          <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">The 30-Day Guide</p>
              <h1 className="serif-display text-[2.6rem] font-black leading-[1.02] text-white md:text-6xl">
                Stop reading about the storm. Start speaking to it.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                Jesus didn&apos;t pray about the wind. He spoke to it. This guide walks you through 30 days of doing
                the same, over fear, money, your body and who you are.
              </p>
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <GuideBuyButton position="guide-hero" />
                <span className="text-sm text-white/55">
                  {GUIDE_PAGES}-page PDF · Instant download · Print or read on your phone
                </span>
              </div>
            </div>
            <Cover />
          </div>
        </section>

        {/* The problem */}
        <section className="px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="serif-display text-3xl font-bold leading-tight text-[#1A264D] md:text-4xl">
              Most of us were taught to read the Bible. Almost nobody taught us to speak it.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#1A264D]/70">
              So we read our promises on calm mornings, and then the storm hits at 3am and the only voice in the room
              is the worry. Faith comes by hearing. This guide puts God&apos;s Word in your mouth, where your own ears
              can hear it, every day for 30 days.
            </p>
          </div>
        </section>

        {/* What's inside */}
        <section className="bg-[#F2F0EA] px-5 py-20">
          <div className="mx-auto max-w-5xl">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#1A264D]/60">What&apos;s inside</p>
            <h2 className="serif-display mt-3 text-center text-3xl font-bold text-[#1A264D] md:text-4xl">Four storms. One way to answer them.</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {WEEKS.map((w) => (
                <div key={w.name} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {w.label} · {w.days}
                  </div>
                  <div className="serif-display mt-2 text-2xl font-bold text-[#1A264D]">{w.name}</div>
                  <p className="mt-2 leading-relaxed text-[#1A264D]/65">{w.line}</p>
                </div>
              ))}
              <div className="rounded-2xl bg-[#1A264D] p-6 text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Plus</div>
                <ul className="mt-3 space-y-3">
                  {EXTRAS.map(([t, d]) => (
                    <li key={t}>
                      <span className="font-semibold">{t}.</span> <span className="text-white/65">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sample day */}
        <section className="px-5 py-20">
          <div className="mx-auto grid max-w-5xl items-start gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1A264D]/60">Every day, six parts</p>
              <h2 className="serif-display mt-3 text-3xl font-bold text-[#1A264D] md:text-4xl">Ten minutes. Out loud.</h2>
              <ol className="mt-8 space-y-4">
                {DAY_PARTS.map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <span className="serif-display w-6 shrink-0 text-2xl leading-none text-gold">{i + 1}</span>
                    <span>
                      <span className="font-semibold text-[#1A264D]">{t}.</span>{" "}
                      <span className="text-[#1A264D]/65">{d}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl border border-black/[0.07] p-6 shadow-sm md:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Preview · Day 01</div>
              <div className="serif-display mt-2 text-3xl font-bold text-[#1A264D]">Say It to the Storm</div>
              <p className="mt-2 text-sm text-[#1A264D]/60">
                <span className="font-semibold uppercase tracking-[0.12em] text-gold">He did it first </span>
                The disciples talked to Jesus about the storm. Jesus talked to the storm.
              </p>
              <div className="mt-5 rounded-2xl bg-[#F2F0EA] p-5">
                <p className="serif-display italic leading-relaxed text-[#1A264D]">
                  &ldquo;And he arose, and rebuked the wind, and said unto the sea, Peace, be still. And the wind ceased,
                  and there was a great calm.&rdquo;
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-gold">Mark 4:39 · KJV</p>
              </div>
              <div className="mt-4 rounded-2xl bg-[#1A264D] p-5 text-white">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Say it out loud</div>
                <p className="serif-display mt-2 text-lg font-semibold leading-snug">
                  The voice that told the sea to be still lives in me. Storm, you do not get the last word in my house.
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#1A264D]/65">
                <span className="font-semibold text-[#1A264D]">Today&apos;s move: </span>
                Write your storm down in one sentence. Then go somewhere you can be heard and say the declaration to it
                out loud.
              </p>
            </div>
          </div>
        </section>

        {/* Founder story — the founder's own, labelled as his. */}
        <section className="hero-water px-5 py-20">
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">From the founder</p>
            <h2 className="serif-display mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
              I wrote this from inside the storm, not after it.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-white/75">
              <p>
                During Covid I lost my job. I found God&apos;s promises about provision and said them out loud on walks
                while the news ran on fear. I ended up doubling my salary.
              </p>
              <p>
                Then half my face stopped working. Bell&apos;s palsy. The doctors told me I might not recover. I declared
                healing every day. The first month showed almost nothing. I kept going, and two months later I was fully
                restored. God gets all the credit for both.
              </p>
              <p>This guide is the practice that carried me through, written so you can do it too.</p>
            </div>
            <p className="serif-display mt-6 text-2xl italic text-white">Franchiz</p>
            <p className="text-xs uppercase tracking-[0.18em] text-white/50">Founder, SpeakLife</p>
          </div>
        </section>

        {/* Mid CTA */}
        <section className="px-5 py-16 text-center">
          <h2 className="serif-display text-3xl font-bold text-[#1A264D]">Thirty days. {GUIDE_PRICE_LABEL}.</h2>
          <p className="mx-auto mt-3 max-w-md text-[#1A264D]/65">
            Less than a dollar a day to stop rehearsing the worry and start speaking the promise.
          </p>
          <div className="mt-7">
            <GuideBuyButton position="guide-mid" tone="dark" />
          </div>
        </section>

        {/* FAQ — native <details> so it works without client JS. */}
        <section className="bg-[#F2F0EA] px-5 py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="serif-display text-center text-3xl font-bold text-[#1A264D]">Questions</h2>
            <div className="mt-10 divide-y divide-black/[0.07] border-y border-black/[0.07]">
              {GUIDE_FAQ.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-[#1A264D]">
                    {f.q}
                    <span className="text-2xl text-gold transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 pr-10 leading-relaxed text-[#1A264D]/65">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="hero-water px-5 py-24 text-center">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="serif-display text-4xl font-black leading-tight text-white md:text-5xl">
              Every day it stays on the page is a day it isn&apos;t in your mouth.
            </h2>
            <p className="mt-5 text-lg text-white/65">Start Day 1 tonight.</p>
            <div className="mt-8">
              <GuideBuyButton position="guide-final" />
            </div>
            <p className="mt-4 text-sm text-white/45">{GUIDE_PAGES}-page PDF · KJV · Delivered to your email instantly</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
