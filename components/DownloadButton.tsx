"use client";

import { track } from "@vercel/analytics";
import { appStoreUrl, type CtaPosition } from "@/lib/appstore";

type Tone = "light" | "dark";

interface Props {
  position: CtaPosition;
  label?: string;
  tone?: Tone;
  className?: string;
  fullWidth?: boolean;
}

/**
 * The single primary action on the page.
 *
 * One label, repeated. Unbounce: 1 CTA converts at 13.5% vs 10.5% for 5+.
 * "Start 7 Days Free" over "Download" — specific-outcome CTAs beat generic
 * verbs by ~31%, "Start {X} Days Free" is the proven winner in large-scale
 * mobile subscription testing, and "Download" names the visitor's cost
 * rather than their gain.
 *
 * Min height 56px: WCAG 2.5.5 wants 44px, and tap accuracy is *worst* at the
 * bottom edge of the screen (where the sticky bar lives), which needs ~46px+.
 */
export default function DownloadButton({
  position,
  label = "Start 7 Days Free",
  tone = "light",
  className = "",
  fullWidth = false,
}: Props) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-8 min-h-[56px] text-base font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/50";

  const tones: Record<Tone, string> = {
    light: "bg-gold text-[#1A264D] hover:bg-gold-light hover:shadow-glow active:scale-[0.98]",
    dark: "bg-[#1A264D] text-white hover:bg-[#26356B] active:scale-[0.98]",
  };

  return (
    <a
      href={appStoreUrl(position)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        track("cta_click", { position, label });
        track("app_store_redirect", { position });
      }}
      className={`${base} ${tones[tone]} ${fullWidth ? "w-full" : ""} ${className}`}
      data-cta={position}
    >
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      {label}
    </a>
  );
}
