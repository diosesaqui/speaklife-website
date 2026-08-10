"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";

/**
 * Sample the product before installing.
 *
 * Of seven competitors examined (Hallow, Glorify, Calm, Headspace, Abide,
 * Pray.com, YouVersion), only Abide lets you experience the core value on the
 * landing page — an embedded "Today's Meditation" player. It is the single
 * best time-to-value mechanic in the category and almost nobody uses it.
 *
 * This is that idea in SpeakLife's own mechanic: pick the storm you're in,
 * see the lie, speak the truth. Same loop as the app, zero install required.
 */

type Storm = {
  id: string;
  label: string;
  lie: string;
  truth: string;
  verse: string;
  reference: string;
};

const STORMS: Storm[] = [
  {
    id: "anxiety",
    label: "Anxiety",
    lie: "This feeling is never going to stop.",
    truth: "I am not ruled by fear. I asked, He answered, and He took my fears away.",
    verse: "I sought the Lord, and he answered me; he delivered me from all my fears.",
    reference: "Psalm 34:4",
  },
  {
    id: "money",
    label: "Money",
    lie: "There isn’t going to be enough.",
    truth: "My God supplies every need I have. I am provided for, not abandoned.",
    verse: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
    reference: "Philippians 4:19",
  },
  {
    id: "health",
    label: "My body",
    lie: "This is just how my body is now.",
    truth: "By His wounds I am healed. This body carries the wholeness Jesus already paid for.",
    verse: "He himself bore our sins in his body on the cross… by his wounds you have been healed.",
    reference: "1 Peter 2:24",
  },
  {
    id: "sleep",
    label: "3am nights",
    lie: "You’ll be staring at the ceiling again tonight.",
    truth: "I lie down in peace and I sleep. He keeps me safe while I rest.",
    verse: "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.",
    reference: "Psalm 4:8",
  },
  {
    id: "shame",
    label: "Shame",
    lie: "God is disappointed in you.",
    truth: "There is no condemnation for me. I am in Christ, and He is not ashamed of me.",
    verse: "Therefore, there is now no condemnation for those who are in Christ Jesus.",
    reference: "Romans 8:1",
  },
  {
    id: "direction",
    label: "Direction",
    lie: "You’ve already missed your chance.",
    truth: "I trust Him with this. He is making my path straight, even now.",
    verse: "Trust in the Lord with all your heart… and he will make your paths straight.",
    reference: "Proverbs 3:5–6",
  },
];

export default function DeclarationSampler() {
  const [active, setActive] = useState<Storm>(STORMS[0]);

  return (
    <div className="mx-auto max-w-3xl">
      <div
        className="flex flex-wrap justify-center gap-2.5 mb-10"
        role="tablist"
        aria-label="Choose the storm you’re in"
      >
        {STORMS.map((s) => {
          const on = s.id === active.id;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={on}
              onClick={() => {
                setActive(s);
                track("sample_declaration", { storm: s.id });
              }}
              className={`min-h-[48px] rounded-full px-5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/40 ${
                on
                  ? "bg-gold text-[#1A264D] shadow-glow"
                  : "bg-white/[0.06] text-white/70 hover:bg-white/[0.12] hover:text-white border border-white/10"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      <div key={active.id} className="animate-fade-up rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur-sm">
        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-300/70 mb-3">
            Reject the lie
          </p>
          <p className="text-lg md:text-xl text-white/45 line-through decoration-red-400/40 decoration-2">
            “{active.lie}”
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="mt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold mb-4">
            Declare the truth — out loud
          </p>
          <p className="serif-display text-2xl md:text-4xl leading-snug text-white mb-6">
            “{active.truth}”
          </p>
          <blockquote className="border-l-2 border-gold/40 pl-4 text-white/55 text-sm md:text-base leading-relaxed">
            {active.verse}
            <cite className="mt-2 block not-italic text-white/35 text-xs tracking-wide uppercase">
              {active.reference}
            </cite>
          </blockquote>
        </div>
      </div>

      <p className="mt-6 text-center text-white/40 text-sm">
        That’s one. The app has hundreds, and it brings you the right one every morning.
      </p>
    </div>
  );
}
