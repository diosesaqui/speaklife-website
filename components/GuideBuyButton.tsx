"use client";

import { track } from "@vercel/analytics";
import {
  GUIDE_CHECKOUT_URL,
  GUIDE_LIVE,
  GUIDE_PRICE_LABEL,
  type GuideCtaPosition,
} from "@/lib/guide";

interface Props {
  position: GuideCtaPosition;
  tone?: "light" | "dark";
  fullWidth?: boolean;
}

/**
 * The one action on /30-day-guide. Same label in every position so clicks
 * aggregate to one metric, mirroring DownloadButton on the app pages.
 * Renders disabled until NEXT_PUBLIC_GUIDE_CHECKOUT_URL is set.
 */
export default function GuideBuyButton({ position, tone = "light", fullWidth = false }: Props) {
  const label = `Get the Guide · ${GUIDE_PRICE_LABEL}`;
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-full px-8 min-h-[56px] text-base font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/50";
  const width = fullWidth ? "w-full" : "";

  if (!GUIDE_LIVE) {
    return (
      <span
        aria-disabled="true"
        className={`${base} ${width} cursor-not-allowed ${tone === "dark" ? "bg-[#1A264D]/10 text-[#1A264D]/60" : "bg-white/15 text-white/70"}`}
      >
        Coming soon
      </span>
    );
  }

  const tones = {
    light: "bg-gold text-[#1A264D] hover:bg-gold-light hover:shadow-glow active:scale-[0.98]",
    dark: "bg-[#1A264D] text-white hover:bg-[#26356B] active:scale-[0.98]",
  };

  return (
    <a
      href={GUIDE_CHECKOUT_URL}
      onClick={() => track("guide_checkout_click", { position, label })}
      className={`${base} ${tones[tone]} ${width}`}
      data-cta={position}
    >
      {label}
    </a>
  );
}
