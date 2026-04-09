"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#1a2744]">Speak<span className="text-[#c9a84c]">Life</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/declarations" className="hover:text-[#1a2744] transition-colors">Declarations</Link>
          <Link href="/best-christian-affirmation-app" className="hover:text-[#1a2744] transition-colors">Affirmations</Link>
          <Link href="/speaklife-vs-hallow" className="hover:text-[#1a2744] transition-colors">vs Hallow</Link>
          <Link href="/faq" className="hover:text-[#1a2744] transition-colors">FAQ</Link>
        </nav>

        <a
          href="https://apps.apple.com/us/app/speaklife/id1617492998"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#1a2744] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#243358] transition-colors"
        >
          Download Free
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-700"></div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/declarations" onClick={() => setOpen(false)}>Declarations</Link>
          <Link href="/best-christian-affirmation-app" onClick={() => setOpen(false)}>Affirmations</Link>
          <Link href="/speaklife-vs-hallow" onClick={() => setOpen(false)}>vs Hallow</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          <a href="https://apps.apple.com/us/app/speaklife/id1617492998" className="bg-[#1a2744] text-white text-center py-3 rounded-full font-semibold">Download Free on iOS</a>
        </div>
      )}
    </header>
  );
}
