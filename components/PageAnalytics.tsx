"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Scroll depth + section visibility.
 *
 * GA4's built-in Enhanced Measurement only fires a scroll event at 90%, so
 * 25/50/75 are invisible by default. Vercel Analytics has no scroll tracking
 * at all. This fires all four, plus a `section_view` per section, so you can
 * see which parts of the page actually get read versus scrolled past.
 */
export default function PageAnalytics() {
  useEffect(() => {
    const fired = new Set<number>();
    const marks = [25, 50, 75, 90];

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = (window.scrollY / scrollable) * 100;
      for (const m of marks) {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          track("scroll_depth", { percent: m });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const seen = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const id = e.target.id;
          if (e.isIntersecting && id && !seen.has(id)) {
            seen.add(id);
            track("section_view", { section: id });
          }
        }
      },
      { threshold: 0.4 }
    );

    document.querySelectorAll("section[id]").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return null;
}
