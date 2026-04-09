import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpeakLife — Christian Declaration App | Speak God's Word Daily",
  description: "SpeakLife helps you speak Scripture-based declarations over your life every morning. Beat anxiety, find your identity, and walk in purpose. 4.9 stars. Free on iOS.",
  metadataBase: new URL("https://www.speaklifebibleaffirmations.com"),
  openGraph: {
    siteName: "SpeakLife",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
