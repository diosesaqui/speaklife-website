import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import { APP_ID } from "@/lib/appstore";
import "./globals.css";

/**
 * Fonts are self-hosted variable woff2 files served from our own origin — no
 * render-blocking request to fonts.googleapis.com, no third-party connection,
 * and automatic size-adjust fallbacks so there's no layout shift while they
 * load. Two files, ~60KB total, covering every weight we use.
 *
 * The previous <link rel="stylesheet"> to Google Fonts blocked first paint on
 * every visit. Every second of delay costs ~7% of conversions, and 53% of
 * mobile visits are abandoned past 3s.
 */
const inter = localFont({
  src: "./fonts/inter-var.woff2",
  display: "swap",
  variable: "--font-inter",
  weight: "100 900",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

const playfair = localFont({
  src: "./fonts/playfair-var.woff2",
  display: "swap",
  variable: "--font-playfair",
  weight: "400 900",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  title: "SpeakLife — Speak God’s Word Over Every Storm | Christian Declaration App",
  description:
    "Two minutes a day speaking God’s promises out loud — over anxiety, fear, money and every storm. 4.9 stars from 1,500+ ratings. Free on iPhone.",
  metadataBase: new URL("https://www.speaklifebibleaffirmations.com"),
  openGraph: {
    siteName: "SpeakLife",
    type: "website",
    locale: "en_US",
    title: "The storm doesn’t get the last word.",
    description:
      "Two minutes a day speaking God’s promises out loud. 4.9 stars from 1,500+ ratings on the App Store.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The storm doesn’t get the last word.",
    description: "Speak God’s Word over anxiety, fear and every storm. Free on iPhone.",
  },
  // Apple Smart App Banner — free, one tag, 17.25% click-to-install
  // (Branch, 10M+ installs). iOS Safari only.
  itunes: {
    appId: APP_ID,
    appArgument: "https://www.speaklifebibleaffirmations.com?ct=web-banner",
  },
  verification: {
    google: "Bx6-MZp74W31CaAHUCKj8LdIY7fYAXWzKXgKpVgpF4Q",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A264D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
