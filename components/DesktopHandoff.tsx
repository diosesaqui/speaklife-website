"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import { appStoreUrl } from "@/lib/appstore";

/**
 * Desktop → mobile handoff.
 *
 * A desktop visitor tapping an App Store badge lands on a web page they can't
 * install from — a dead end. Branch's 10M-install dataset puts smart banners
 * at 37.84% click-to-install and "text me the app" at 9.70%; a QR sits in
 * between and costs nothing. Hallow attributes ~9% of total growth to QR.
 *
 * Shown/hidden purely in CSS (width + pointer type) rather than by sniffing
 * the user agent in an effect — no hydration mismatch, no flash of the wrong
 * thing, and it still works before JS loads.
 */
export default function DesktopHandoff() {
  return (
    <div className="desktop-only mt-10 hidden items-center gap-5 rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-sm md:flex">
      <a
        href={appStoreUrl("web-qr")}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("cta_click", { position: "web-qr", label: "QR" })}
        className="shrink-0 rounded-xl bg-white p-2"
        aria-label="Open SpeakLife on the App Store"
      >
        <Image
          src="/qr-appstore.svg"
          alt="QR code to download SpeakLife on the App Store"
          width={92}
          height={92}
          className="block"
        />
      </a>
      <div className="text-left">
        <p className="text-sm font-semibold text-white">Point your phone camera here</p>
        <p className="mt-1 text-sm leading-relaxed text-white/50">
          SpeakLife lives on your iPhone, where you’ll actually use it. Scan to
          install in a few seconds.
        </p>
      </div>
    </div>
  );
}
