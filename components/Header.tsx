"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import { appStoreUrl } from "@/lib/appstore";

/**
 * Minimal header.
 *
 * Mobile nav is gone entirely — removing competing navigation on mobile
 * roughly doubles conversions, and links compete with the one action that
 * matters. Below the hero the whole header slides away on mobile, because the
 * sticky bottom bar is already carrying the CTA and a transparent bar floating
 * over body copy is just noise.
 *
 * On desktop it becomes solid on scroll and keeps "Start Free" reachable —
 * same label as every other button on the page, so clicks aggregate to one
 * metric instead of fragmenting.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "-translate-y-full md:translate-y-0 md:border-b md:border-white/10 md:bg-[#1A264D]/90 md:backdrop-blur-md"
          : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="serif-display text-lg font-black uppercase tracking-[0.18em] text-white"
        >
          SpeakLife
        </Link>

        <nav className="hidden items-center gap-9 text-sm text-white/60 md:flex">
          <Link href="/features" className="transition-colors hover:text-white">Features</Link>
          <Link href="/declarations" className="transition-colors hover:text-white">Declarations</Link>
          <Link href="/faq" className="transition-colors hover:text-white">FAQ</Link>
        </nav>

        <a
          href={appStoreUrl("web-nav")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("cta_click", { position: "web-nav", label: "Start Free" })}
          className={`hidden items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all md:inline-flex ${
            scrolled
              ? "bg-gold text-[#1A264D] hover:bg-gold-light"
              : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
          }`}
        >
          Start Free
        </a>
      </div>
    </header>
  );
}
