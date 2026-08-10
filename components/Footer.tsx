import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1226] px-6 py-14 text-white/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <div className="serif-display text-white/80 text-base font-black uppercase tracking-[0.18em]">
            SpeakLife
          </div>
          <p className="mt-2 text-xs">Victory over every storm.</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-xs tracking-wide">
          <Link href="/features" className="transition-colors hover:text-white/80">Features</Link>
          <Link href="/declarations" className="transition-colors hover:text-white/80">Declarations</Link>
          <Link href="/faq" className="transition-colors hover:text-white/80">FAQ</Link>
          <Link href="/privacy" className="transition-colors hover:text-white/80">Privacy</Link>
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white/80"
          >
            Terms
          </a>
        </nav>

        <div className="flex gap-6 text-xs">
          <a href="https://www.tiktok.com/@speaklifeapp" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white/80">TikTok</a>
          <a href="https://www.instagram.com/speaklifeapp" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white/80">Instagram</a>
          <a href="https://www.facebook.com/speaklifeapp" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white/80">Facebook</a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/5 pt-6 text-center text-[11px] leading-relaxed">
        © {new Date().getFullYear()} DIOSESTAAQUI LLC · SpeakLife · All rights reserved.
        <br className="md:hidden" />
        <span className="md:ml-2 opacity-70">
          Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period. Manage or cancel any time in your App Store account settings.
        </span>
      </div>
    </footer>
  );
}
