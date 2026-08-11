"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import DownloadButton from "./DownloadButton";
import { RATING, RATING_COUNT_LABEL } from "@/lib/appstore";

/**
 * Sticky mobile CTA bar. Worth ~+14% (independently corroborated at +20.4%
 * and +7.17% in separate A/B case studies).
 *
 * Appears once the hero CTA is off-screen, so it never competes with the
 * primary above-fold button. Desktop is excluded — the desktop path is the QR
 * handoff plus the header CTA, not a thumb tap.
 *
 * Uses scroll position rather than an IntersectionObserver on a zero-height
 * sentinel: a 1px element can be skipped by a fast fling scroll on iOS, which
 * leaves the bar stuck off-screen.
 */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const trigger = window.innerHeight * 0.9;
      setVisible((prev) => {
        const next = window.scrollY > trigger;
        if (next && !prev) track("sticky_cta_shown");
        return next;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="border-t border-white/10 bg-[#1A264D]/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md">
        <DownloadButton position="web-sticky" fullWidth />
        <p className="mt-2 text-center text-[11px] text-white/45">
          ★ {RATING} · {RATING_COUNT_LABEL} ratings · 7 days free
        </p>
      </div>
    </div>
  );
}
