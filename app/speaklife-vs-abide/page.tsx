import type { Metadata } from "next";
import ComparisonPage, { type ComparisonData } from "@/components/ComparisonPage";

/* Abide figures verified on 2026-08-11 against its App Store listing (4.9
   stars / 122,000 ratings, published by Guideposts) and Abide's own help
   centre for pricing ($9.99/mo, $39.99/yr). The site previously published
   $60/yr and 4.7 stars — both wrong. */

export const metadata: Metadata = {
  title: "SpeakLife vs Abide: Which Christian App Is Right for You? (2026)",
  description:
    "SpeakLife vs Abide — honest comparison. Spoken Scripture declarations vs guided Christian meditation and Bible sleep stories. Prices, features and who each one suits.",
  alternates: { canonical: "https://www.speaklifebibleaffirmations.com/speaklife-vs-abide" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between SpeakLife and Abide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpeakLife is built around speaking Scripture out loud — you declare God's promises over your own life. Abide is built around listening: guided Christian meditation, bedtime Bible stories and sleep content. SpeakLife is active and takes 2–5 minutes; Abide is receptive and often used to fall asleep.",
      },
    },
    {
      "@type": "Question",
      name: "Is SpeakLife or Abide cheaper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpeakLife is $12 per month or $49 per year. Abide is $9.99 per month or $39.99 per year. Both are free to download and both offer a free trial. SpeakLife includes Bible Chat and seven-day Daily Burst plans, which Abide does not.",
      },
    },
    {
      "@type": "Question",
      name: "Can you use SpeakLife and Abide together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. They serve different moments — SpeakLife for speaking declarations in the morning, Abide for meditation or sleep at night. Many Christians use both.",
      },
    },
  ],
};

const data: ComparisonData = {
  competitor: "Abide",
  headline: "SpeakLife vs Abide:\nWhich Is Right for You?",
  subhead:
    "One asks you to speak. The other asks you to listen. That single difference decides which one fits you.",
  verdict: (
    <>
      <strong>Choose SpeakLife</strong>{" "}if you want to actively declare Scripture
      over a specific fight. <strong>Choose Abide</strong>{" "}if you want to be
      calmed — guided meditation and Bible sleep stories to fall asleep to.
      They aren&rsquo;t really competitors; they&rsquo;re different halves of
      a day.
    </>
  ),
  rows: [
    ["Core practice", "Scripture declarations (you speak)", "Guided meditation (you listen)"],
    ["Active or passive", "Active — you are the voice", "Passive — you receive"],
    ["Daily time", "2–5 minutes", "2–15 minutes"],
    ["Best moment", "Morning", "Bedtime"],
    ["Scripture declarations", "✅ Core feature", "Partial"],
    ["Sleep & bedtime stories", "❌", "✅ 365+ stories"],
    ["AI Scripture chat", "✅ Bible Chat", "❌"],
    ["7-day targeted plans", "✅ Daily Burst", "❌"],
    ["Life categories", "50 + all 66 Bible books", "Themed meditation library"],
    ["Streaks & strength score", "✅", "Partial"],
    ["Monthly price", "$12/mo", "$9.99/mo"],
    ["Annual price", "$49/yr", "$39.99/yr"],
    ["Free trial", "✅ 7-day", "✅"],
    ["App Store rating", "⭐ 4.9 (1,500+)", "⭐ 4.9 (122,000)"],
    ["Platform", "iOS", "iOS & Android"],
  ],
  coreDiffHeading: "The Core Difference: Speaking vs. Receiving",
  usTitle: "SpeakLife — You speak",
  usBody:
    "You are the voice. You say God's Word out loud over the thing in front of you. Romans 10:17 — faith comes by hearing — and something happens when the voice you hear is your own.",
  themTitle: "Abide — You receive",
  themBody:
    "A narrator guides you into stillness with Scripture, music and sleep stories. Genuinely good at what it does, and deliberately designed so you drift off rather than stand up.",
  chooseUs: [
    "You want to speak Scripture over your life, not just hear it",
    "You're facing something specific and want a plan around it",
    "You have 2–5 minutes in the morning, not 20 at night",
    "You want an AI you can ask hard questions at 3am",
    "You want your exact situation named — grief, debt, fertility, divorce",
  ],
  chooseThem: [
    "You struggle to fall asleep and want Scripture to help",
    "You prefer being guided over speaking",
    "You want a large meditation library to work through",
    "You're on Android",
    "Annual price is your deciding factor",
  ],
  bothHeading: "Can You Use Both?",
  bothBody:
    "Easily. SpeakLife in the morning to set your mouth for the day, Abide at night to quiet it. Different practices, different hours.",
  ctaSub: "7-day free trial · Cancel any time",
};

export default function VsAbide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ComparisonPage data={data} />
    </>
  );
}
