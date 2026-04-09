import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060f0f] text-white/40 py-12 px-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-wider">
        <div className="font-semibold text-white/60 uppercase">Diosesaqui LLC</div>
        <div className="flex gap-8">
          <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
          <Link href="/faq" className="hover:text-white/80 transition-colors">About</Link>
          <Link href="/best-christian-affirmation-app" className="hover:text-white/80 transition-colors">Features</Link>
          <Link href="/faq" className="hover:text-white/80 transition-colors">Privacy</Link>
        </div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white/80 transition-colors">TikTok</a>
          <a href="#" className="hover:text-white/80 transition-colors">Facebook</a>
          <a href="#" className="hover:text-white/80 transition-colors">Instagram</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs">
        © 2026 Diosesaqui LLC · SpeakLife · All rights reserved
      </div>
    </footer>
  );
}
