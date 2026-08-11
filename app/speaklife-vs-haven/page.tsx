import type { Metadata } from "next";
import ComparisonPage, { type ComparisonData } from "@/components/ComparisonPage";

/* Haven — Bible Chat figures verified against its App Store listing on
   2026-08-11: 4.9 stars / 146,000 ratings, published by E12 Holdings,
   subtitle "Daily Guidance, Study & Prayer". Its IAP tiers run $4.99–$19.99
   and aren't labelled monthly vs annual on the listing, so the table states
   the range rather than inventing a monthly price. */

export const metadata: Metadata = {
  title: "SpeakLife vs Haven: Which Christian App Is Right for You? (2026)",
  description:
    "SpeakLife vs Haven (Bible Chat) — honest comparison. Both have AI Scripture chat and streaks. The difference is whether you study the Word or speak it. Features and pricing.",
  alternates: { canonical: "https://www.speaklifebibleaffirmations.com/speaklife-vs-haven" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between SpeakLife and Haven?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both offer AI Scripture chat, daily verses and streaks. Haven is built for study and guidance — you ask, it answers. SpeakLife is built for declaration — it hands you a specific Scripture to speak out loud over your situation, and builds a seven-day Daily Burst around the thing you're believing for.",
      },
    },
    {
      "@type": "Question",
      name: "Does SpeakLife have an AI Bible chat like Haven?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SpeakLife includes Bible Chat, which answers questions about anxiety, relationships, doubt, marriage and forgiveness with Scripture-rooted responses. In SpeakLife it sits alongside the declaration practice rather than being the whole app.",
      },
    },
    {
      "@type": "Question",
      name: "Which app is better for anxiety?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Haven will explain what Scripture says about anxiety. SpeakLife gives you the declaration to speak against the anxious thought and a seven-day plan to keep speaking it. If you want understanding, Haven; if you want a daily practice, SpeakLife.",
      },
    },
  ],
};

const data: ComparisonData = {
  competitor: "Haven",
  headline: "SpeakLife vs Haven:\nWhich Is Right for You?",
  subhead:
    "The closest comparison on this site — both have AI Scripture chat, daily verses and streaks. The split is study versus declaration.",
  verdict: (
    <>
      <strong>Choose SpeakLife</strong> if you want a daily practice — Scripture
      you speak out loud, with a seven-day plan built around what you&rsquo;re
      facing. <strong>Choose Haven</strong> if you mainly want to understand the
      Bible better and have a conversational study companion. Haven is the
      bigger, more established app; SpeakLife is the one that asks something of
      you every morning.
    </>
  ),
  rows: [
    ["Core practice", "Speaking declarations aloud", "Chat-led Bible study & guidance"],
    ["Active or passive", "Active — you speak it", "Conversational — you read"],
    ["AI Scripture chat", "✅ Bible Chat", "✅ Core feature"],
    ["Daily verse", "✅", "✅"],
    ["Streaks", "✅ + 0–100 strength score", "✅"],
    ["7-day targeted plans", "✅ Daily Burst", "❌"],
    ["Declarations to speak", "✅ Core feature", "❌"],
    ["Audio devotionals", "✅ 3–5 min", "Partial"],
    ["Life categories", "50 + all 66 Bible books", "Topical guidance"],
    ["Write your own declarations", "✅", "❌"],
    ["Home screen widget", "✅", "Partial"],
    ["Pricing", "$12/mo · $49/yr", "Tiers from $4.99–$19.99"],
    ["Free trial", "7-day", "✅"],
    ["App Store rating", "⭐ 4.9 (1,500+)", "⭐ 4.9 (146,000)"],
    ["Platform", "iOS", "iOS & Android"],
  ],
  coreDiffHeading: "The Core Difference: Understanding vs. Declaring",
  usTitle: "SpeakLife — You speak it",
  usBody:
    "SpeakLife assumes you already believe it and asks you to say it. Reject the lie, declare the truth (2 Corinthians 10:5). The app's job is to hand you the right sentence for today and make sure you actually speak it.",
  themTitle: "Haven — You ask it",
  themBody:
    "Haven is a conversational study companion. You bring a question, it answers with Scripture and context. Genuinely useful for learning — but understanding a promise and declaring it are two different acts.",
  chooseUs: [
    "You already know the verses and want to start using them",
    "You want a seven-day plan around one specific fight",
    "You want your exact situation named — grief, debt, fertility, divorce",
    "You want to write your own declarations",
    "You want a practice, not a reference",
  ],
  chooseThem: [
    "You're newer to the Bible and want things explained",
    "You mainly want a study and guidance companion",
    "You want the larger, longer-established app",
    "You're on Android",
    "You prefer reading answers to speaking words",
  ],
  bothHeading: "Can You Use Both?",
  bothBody:
    "They overlap more than most pairs on this site, so most people settle on one. If you use both, the natural split is Haven to understand a passage and SpeakLife to speak it over your life.",
  ctaSub: "7-day free trial · Cancel any time",
};

export default function VsHaven() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ComparisonPage data={data} />
    </>
  );
}
