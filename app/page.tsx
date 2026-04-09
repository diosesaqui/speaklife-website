import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SpeakLife — Speak God's Word Daily | Christian Declaration App",
  description: "SpeakLife is the #1 Christian declaration app. Speak Scripture-based affirmations over anxiety, identity, confidence, and purpose. 4.9 stars. Free on iOS.",
};

const categories = [
  { emoji: "😰", name: "Anxiety", desc: "Peace, trust, releasing worry" },
  { emoji: "😊", name: "Joy", desc: "Gratitude, contentment, delight" },
  { emoji: "🎯", name: "Destiny", desc: "Purpose, calling, direction" },
  { emoji: "🧠", name: "Wisdom", desc: "Decisions, clarity, discernment" },
  { emoji: "👑", name: "Identity", desc: "Who God says you are" },
  { emoji: "💪", name: "Confidence", desc: "Courage, boldness, strength" },
];

const testimonials = [
  { quote: "I've tried every Bible app. SpeakLife is the only one that actually changed how I start my day. Speaking the declarations out loud feels different — more powerful.", author: "Sarah M." },
  { quote: "I was waking up at 3am with anxiety. After two weeks of morning declarations, I sleep through the night. God's Word is working.", author: "Keisha T." },
  { quote: "As a busy mom I don't have an hour for devotionals. SpeakLife gives me 2 minutes of faith that carries me through the whole day.", author: "Rachel D." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>

        {/* ── HERO ── */}
        <section className="hero-water min-h-screen flex flex-col items-center justify-center relative pt-16" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
            <h1
              className="text-white leading-none mb-8 animate-fade-up"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(5rem, 18vw, 14rem)",
                fontWeight: 900,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                lineHeight: 0.9,
              }}
            >
              SPEAK<br />LIFE
            </h1>

            <p className="text-white/70 text-base md:text-lg max-w-md leading-relaxed mb-10 animate-fade-up delay-1">
              Experience the power of daily devotionals and Bible affirmations through the SpeakLife App. Start using your weapons that God gave you and join us on this spiritual journey today!
            </p>

            <a
              href="https://apps.apple.com/us/app/speaklife/id1617492998"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up delay-2"
            >
              <div className="bg-black text-white flex items-center gap-3 px-7 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 transition-all">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white/60 leading-none">Download on the</div>
                  <div className="text-base font-semibold leading-tight">App Store</div>
                </div>
              </div>
            </a>
          </div>

          {/* Subtle bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        </section>

        {/* ── ABOUT / PHONE MOCKUPS ── */}
        <section className="py-24 px-6 bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div className="max-w-sm">
              <div className="w-14 h-14 rounded-2xl mb-8 overflow-hidden shadow-lg"
                style={{ background: "linear-gradient(135deg, #5b8dee, #3b6fd4)" }}>
                <div className="w-full h-full flex items-center justify-center text-2xl">✝️</div>
              </div>

              <h2
                className="text-4xl md:text-5xl text-[#1a1a1a] mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}
              >
                SPEAK<br />GOD'S<br />WORD.
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                SpeakLife is an innovative Bible affirmation app designed to deepen your understanding of Jesus' profound love and His desire for a personal relationship with you. In the midst of life's storms, SpeakLife serves as a beacon of divine love — offering daily declarations of Jesus' presence and unwavering affection through Scripture.
              </p>

              <a
                href="https://apps.apple.com/us/app/speaklife/id1617492998"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gray-300 text-gray-700 text-sm px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors tracking-wide"
              >
                Download
              </a>
            </div>

            {/* Right — Phone mockups */}
            <div className="relative flex justify-center items-end gap-4 h-[480px]">
              {/* Phone 1 */}
              <div className="phone-shadow relative w-44 h-[380px] rounded-[32px] overflow-hidden border-4 border-gray-800 bg-[#0a1f1f] flex-shrink-0 translate-y-8">
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a3535] to-[#0a1515]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <p className="text-white text-xs font-medium italic leading-relaxed">
                    "I trample upon lions and cobras and crush them under my feet."
                  </p>
                  <p className="text-white/40 text-xs mt-3">Psalm 91:13</p>
                </div>
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-6">
                  <div className="w-5 h-5 rounded-full bg-white/20"></div>
                  <div className="w-5 h-5 rounded-full bg-white/20"></div>
                </div>
              </div>

              {/* Phone 2 */}
              <div className="phone-shadow relative w-44 h-[380px] rounded-[32px] overflow-hidden border-4 border-gray-800 bg-[#0d1a1a] flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#243545] to-[#0d1820]"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <p className="text-white text-xs font-medium italic leading-relaxed">
                    "I looked for the Lord, and He answered me. And He took away all my fears."
                  </p>
                  <p className="text-white/40 text-xs mt-3">Psalm 34:4</p>
                </div>
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-6">
                  <div className="w-5 h-5 rounded-full bg-white/20"></div>
                  <div className="w-5 h-5 rounded-full bg-white/20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-24 px-6 bg-[#f7f8f7]" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-gray-400 text-xs tracking-widest uppercase mb-3">Features</p>
            <h2
              className="text-center text-3xl md:text-4xl text-[#1a1a1a] mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
            >
              FEATURES
            </h2>
            <p className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-16 leading-relaxed">
              Start each day with uplifting scriptures and affirmations that bring peace, strength and positivity. From personalized content to guided prayer sessions — receive constant inspiration throughout the day.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { n: "01", title: "PRAYERS / DEVOTIONALS", desc: "SpeakLife encourages the renewal of the mind and a personal, intimate relationship with Jesus through prayer and daily devotionals." },
                { n: "02", title: "THEMES / LIFE SITUATIONS", desc: "From colors and images to font choices — SpeakLife tailors your spiritual journey to you, covering 6 life categories." },
                { n: "03", title: "CREATE YOUR OWN", desc: "New content is constantly added. Plus you can write your own personalized affirmations to further engage the power of God's Word." },
              ].map(f => (
                <div key={f.n} className="card-hover">
                  <div
                    className="text-5xl font-black mb-4"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#e0e0e0" }}
                  >{f.n}</div>
                  <h3 className="text-sm font-bold tracking-widest text-[#1a1a1a] mb-3">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CATEGORIES ── */}
        <section className="py-24 px-6 bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-center text-3xl md:text-4xl text-[#1a1a1a] mb-16"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
            >
              Six Areas of Life
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {categories.map(cat => (
                <div key={cat.name} className="card-hover text-center p-8 rounded-2xl bg-[#f7f8f7] border border-gray-100">
                  <div className="text-4xl mb-3">{cat.emoji}</div>
                  <div className="font-bold text-[#1a1a1a] text-sm tracking-wider uppercase mb-1">{cat.name}</div>
                  <div className="text-gray-400 text-xs">{cat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-24 px-6 bg-[#0a1f1f]" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-white/40 text-xs tracking-widest uppercase mb-3">Reviews</p>
            <h2
              className="text-center text-3xl md:text-4xl text-white mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
            >
              ONE OF THE BEST
            </h2>
            <div className="flex justify-center gap-1 mb-16 text-xl">⭐⭐⭐⭐⭐</div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map(t => (
                <div key={t.author} className="card-hover bg-white/5 border border-white/10 rounded-2xl p-8">
                  <p className="text-white/80 text-sm leading-relaxed italic mb-6">"{t.quote}"</p>
                  <div className="text-white/40 text-xs font-semibold tracking-widest uppercase">{t.author}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="hero-water py-32 px-6 text-center relative" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 900,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              START<br />TODAY
            </h2>
            <p className="text-white/60 mb-10 text-base max-w-sm mx-auto leading-relaxed">
              Join thousands of women who begin every morning with God's Word on their lips.
            </p>
            <a
              href="https://apps.apple.com/us/app/speaklife/id1617492998"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="inline-flex bg-black text-white items-center gap-3 px-7 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 transition-all">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white/60 leading-none">Download on the</div>
                  <div className="text-base font-semibold leading-tight">App Store</div>
                </div>
              </div>
            </a>
            <p className="text-white/30 text-xs mt-5">3-day free trial · $10/mo or $50/yr</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
