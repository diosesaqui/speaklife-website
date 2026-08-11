import type { Metadata } from "next";
import ComparisonPage, { type ComparisonData } from "@/components/ComparisonPage";

/* Pray.com figures verified against its App Store listing on 2026-08-11:
   4.8 stars / 193,000 ratings, published by Pray, Inc., subtitle "Christian
   Meditation & Sleep". Its IAP tiers span $1.99–$109.99 and don't map cleanly
   to a single monthly/annual pair, so the table says so rather than guessing. */

export const metadata: Metadata = {
  title: "SpeakLife vs Pray.com: Which Christian App Is Right for You? (2026)",
  description:
    "SpeakLife vs Pray.com — honest comparison. Spoken Scripture declarations vs daily prayer, bedtime Bible stories and sleep audio. Features, pricing and who each suits.",
  alternates: { canonical: "https://www.speaklifebibleaffirmations.com/speaklife-vs-pray" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between SpeakLife and Pray.com?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SpeakLife is built around speaking Scripture-based declarations out loud over a specific situation. Pray.com is built around listening — daily prayers, guided Christian meditation, bedtime Bible stories and audio Bible narration. SpeakLife is a 2–5 minute active morning practice; Pray.com is largely audio you receive.",
      },
    },
    {
      "@type": "Question",
      name: "Is SpeakLife or Pray.com better for anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They approach it differently. Pray.com offers guided prayer and sleep audio to calm anxiety. SpeakLife gives you a specific declaration to speak against the anxious thought, drawing on 2 Corinthians 10:5, plus a seven-day Daily Burst built around what you're facing.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pray.com have Scripture declarations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pray.com focuses on prayer, meditation and audio Bible content rather than spoken declarations. Speaking Scripture aloud over your own life is SpeakLife's core mechanic.",
      },
    },
  ],
};

const data: ComparisonData = {
  competitor: "Pray.com",
  headline: "SpeakLife vs Pray.com:\nWhich Is Right for You?",
  subhead:
    "One hands you words to say. The other gives you audio to rest in. That difference decides it.",
  verdict: (
    <>
      <strong>Choose SpeakLife</strong>{" "}if you want to speak Scripture over a
      specific fight and want a plan around it. <strong>Choose Pray.com</strong>{" "}
      if you want a deep audio library — daily prayer, Bedtime Bible Stories and
      narrated Scripture to listen to. Pray.com has the bigger library;
      SpeakLife gives you something to do with it.
    </>
  ),
  rows: [
    ["Core practice", "Scripture declarations (you speak)", "Prayer & audio (you listen)"],
    ["Active or passive", "Active — you are the voice", "Passive — narrated"],
    ["Daily time", "2–5 minutes", "5–30 minutes"],
    ["Best moment", "Morning", "Bedtime & commute"],
    ["Scripture declarations", "✅ Core feature", "❌"],
    ["7-day targeted plans", "✅ Daily Burst", "Prayer plans"],
    ["AI Scripture chat", "✅ Bible Chat", "❌"],
    ["Bedtime Bible stories", "❌", "✅ Hundreds"],
    ["Audio Bible narration", "Devotionals only", "✅ 250+ stories"],
    ["Life categories", "50 + all 66 Bible books", "Themed prayer plans"],
    ["Streaks & strength score", "✅", "Partial"],
    ["Pricing", "$12/mo · $49/yr", "Tiers from $1.99–$109.99"],
    ["Free trial", "✅ 7-day", "✅"],
    ["App Store rating", "⭐ 4.9 (1,500+)", "⭐ 4.8 (193,000)"],
    ["Platform", "iOS", "iOS & Android"],
  ],
  coreDiffHeading: "The Core Difference: Declaring vs. Listening",
  usTitle: "SpeakLife — You speak",
  usBody:
    "You are the voice. You say God's promise out loud over the diagnosis, the debt, the marriage. Romans 10:17 — faith comes by hearing — and the voice you hear is your own.",
  themTitle: "Pray.com — You listen",
  themBody:
    "A vast, beautifully produced audio library: daily prayers, guided meditation, narrated Bible stories to fall asleep to. Excellent at what it does, and built for reception rather than declaration.",
  chooseUs: [
    "You want to speak Scripture, not only hear it",
    "You're in a specific fight and want seven days built around it",
    "You want your exact situation named — grief, debt, fertility, divorce",
    "You want to ask hard questions and get a Scripture-rooted answer",
    "You have 2–5 minutes in the morning",
  ],
  chooseThem: [
    "You want a huge library of narrated audio",
    "You fall asleep to Bible stories",
    "You want celebrity-narrated and produced content",
    "You're on Android",
    "You prefer listening to speaking",
  ],
  bothHeading: "Can You Use Both?",
  bothBody:
    "Yes, and plenty do. SpeakLife in the morning to set your mouth for the day, Pray.com at night to fall asleep in the Word. Different hours, different jobs.",
  ctaSub: "7-day free trial · Cancel any time",
};

export default function VsPray() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ComparisonPage data={data} />
    </>
  );
}
