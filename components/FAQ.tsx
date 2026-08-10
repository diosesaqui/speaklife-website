"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { FAQ_ITEMS } from "@/lib/faq";

/**
 * Objection handling in accordions (+9% on mobile).
 *
 * These are the questions that actually cost installs. `faq_open` is tracked
 * per question because it is the highest-value qualitative signal on the page:
 * it tells you what people are really afraid of before they tap.
 */



export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-2xl divide-y divide-black/[0.07] border-y border-black/[0.07]">
      {FAQ_ITEMS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <h3>
              <button
                onClick={() => {
                  const next = isOpen ? null : i;
                  setOpen(next);
                  if (next !== null) track("faq_open", { question: f.q });
                }}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left min-h-[56px] group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/40 rounded-lg"
              >
                <span className="text-[#1A264D] font-medium text-base md:text-lg leading-snug group-hover:text-[#26356B] transition-colors">
                  {f.q}
                </span>
                <span
                  className={`shrink-0 grid place-items-center w-8 h-8 rounded-full border border-black/10 text-[#1A264D] transition-transform duration-300 ${
                    isOpen ? "rotate-45 bg-gold border-gold" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 1v12M1 7h12" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-7 pr-12 text-[#1A264D]/65 leading-relaxed">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
