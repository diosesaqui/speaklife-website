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
          {/* Real handles, supplied by the owner. Instagram deliberately
             omitted — a wrong URL in the footer 404s in production, which is
             what the invented placeholders here were doing. */}
          <a href="https://www.tiktok.com/@speaklife.app" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white/80">TikTok</a>
          <a href="https://www.facebook.com/Speaklife.bibleapp" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white/80">Facebook</a>
        </div>
      </div>

      {/* The comparison and AEO pages were orphans — no internal link from
          anywhere on the site, so they were reachable only by direct URL or
          search. That hurts discovery for visitors and crawl priority for
          search engines. */}
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/5 pt-8">
        <div className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30 md:text-left">
          Compare
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs tracking-wide md:justify-start">
          <Link href="/speaklife-vs-hallow" className="transition-colors hover:text-white/80">vs Hallow</Link>
          <Link href="/speaklife-vs-abide" className="transition-colors hover:text-white/80">vs Abide</Link>
          <Link href="/speaklife-vs-pray" className="transition-colors hover:text-white/80">vs Pray.com</Link>
          <Link href="/speaklife-vs-haven" className="transition-colors hover:text-white/80">vs Haven</Link>
          <Link href="/speaklife-vs-youversion" className="transition-colors hover:text-white/80">vs YouVersion</Link>
          <Link href="/best-christian-affirmation-app" className="transition-colors hover:text-white/80">Best affirmation app</Link>
          <Link href="/christian-app-for-anxiety" className="transition-colors hover:text-white/80">For anxiety</Link>
          <Link href="/bible-affirmations-for-women" className="transition-colors hover:text-white/80">For women</Link>
          <Link href="/morning-devotional-app-women" className="transition-colors hover:text-white/80">Morning devotionals</Link>
          <Link href="/scripture-declarations-for-confidence" className="transition-colors hover:text-white/80">For confidence</Link>
        </nav>
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
