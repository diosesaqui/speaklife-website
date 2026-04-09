"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-white/90 text-sm font-semibold tracking-widest uppercase">
          Diosesaqui LLC
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm text-white/70">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/faq" className="hover:text-white transition-colors">About</Link>
          <Link href="/best-christian-affirmation-app" className="hover:text-white transition-colors">Features</Link>
          <Link href="/faq" className="hover:text-white transition-colors">Privacy</Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          <div className="w-5 h-0.5 bg-white mb-1.5"></div>
          <div className="w-5 h-0.5 bg-white mb-1.5"></div>
          <div className="w-5 h-0.5 bg-white"></div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a1f1f]/95 backdrop-blur px-8 py-6 flex flex-col gap-5 text-white text-sm font-medium">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>About</Link>
          <Link href="/best-christian-affirmation-app" onClick={() => setOpen(false)}>Features</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>Privacy</Link>
        </div>
      )}
    </header>
  );
}
