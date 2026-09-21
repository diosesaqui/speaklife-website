"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { appStoreUrl } from "@/lib/appstore";

const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/declarations", label: "Declarations" },
  { href: "/faq", label: "FAQ" },
] as const;

const CTA_LABEL = "Start 7 Days Free";

/**
 * Minimal header.
 *
 * Mobile: a hamburger at the right opens a slide-down panel with Features,
 * Declarations, FAQ and the CTA. Mobile nav was removed at one point to keep
 * the page single-action, but that left visitors no way to reach those pages;
 * it is back as a collapsed menu so it stays out of the way until asked for.
 * The CTA is still the primary action — it is the last, gold item in the panel
 * and the sticky bottom bar keeps carrying it. Below the hero the whole header
 * slides away on mobile, except while the menu is open.
 *
 * The panel closes on link selection, Escape, and route change.
 *
 * On desktop it becomes solid on scroll and keeps "Start 7 Days Free" reachable —
 * same label as every other button on the page, so clicks aggregate to one
 * metric instead of fragmenting.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close on route change (state adjusted during render, not in an effect).
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? `${open ? "translate-y-0 bg-[#1A264D]" : "-translate-y-full"} md:translate-y-0 md:border-b md:border-white/10 md:bg-[#1A264D]/90 md:backdrop-blur-md`
          : `translate-y-0 ${open ? "bg-[#1A264D] md:bg-transparent" : ""}`
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
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={appStoreUrl("web-nav")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("cta_click", { position: "web-nav", label: CTA_LABEL })}
          className={`hidden items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all md:inline-flex ${
            scrolled
              ? "bg-gold text-[#1A264D] hover:bg-gold-light"
              : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
          }`}
        >
          {CTA_LABEL}
        </a>

        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a84c] md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-white/10 bg-[#1A264D] shadow-lg transition-all duration-300 md:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-5 pt-2 pb-5">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`flex min-h-11 items-center border-b border-white/10 py-3 text-base transition-colors hover:text-white ${
                pathname === l.href ? "text-[#c9a84c]" : "text-white/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={appStoreUrl("web-nav")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              track("cta_click", { position: "web-nav", label: CTA_LABEL });
              close();
            }}
            className="mt-4 flex min-h-12 items-center justify-center rounded-full bg-gold px-5 py-3 text-base font-semibold text-[#1A264D] transition-colors hover:bg-gold-light"
          >
            {CTA_LABEL}
          </a>
        </nav>
      </div>
    </header>
  );
}
