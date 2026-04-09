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
  { quote: "I've tried every Bible app out there. SpeakLife is the only one that actually changed how I start my day. Speaking the declarations out loud feels different — more powerful.", author: "Sarah M." },
  { quote: "I was waking up at 3am with anxiety every night. After two weeks of morning declarations, I sleep through the night. God's Word is working.", author: "Keisha T." },
  { quote: "As a busy mom I don't have an hour for devotionals. SpeakLife gives me 2 minutes of faith that carries me through the whole day.", author: "Rachel D." },
];

const features = [
  { emoji: "📖", title: "Daily Declarations", desc: "Fresh Scripture-based declarations every morning. Written clearly so you can speak with confidence." },
  { emoji: "🎧", title: "Audio Devotionals", desc: "Listen and speak along. Perfect for morning routines, commutes, or quiet moments mid-day." },
  { emoji: "🔔", title: "Daily Reminders", desc: "Push notifications keep you consistent. The most powerful declarations are the ones you actually say." },
  { emoji: "✝️", title: "6 Life Categories", desc: "Anxiety. Joy. Destiny. Wisdom. Identity. Confidence. Every area of life covered by God's Word." },
  { emoji: "📱", title: "Bible Verses", desc: "Every declaration is rooted in Scripture. You always know where it comes from and why it carries power." },
  { emoji: "✍️", title: "Create Your Own", desc: "Write your own personalized declarations on top of our library. Make your practice fully yours." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero-bg min-h-screen flex items-center pt-16">
          <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-2 rounded-full mb-8">
                <span>⭐⭐⭐⭐⭐</span>
                <span>Rated 4.9 on the App Store</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.1] mb-6">
                Speak God's Word.<br />
                <span className="gold-gradient">Change Your Life.</span>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-md">
                SpeakLife gives you Scripture-based declarations to speak over your life every morning. Beat anxiety, find your identity, walk in purpose — 2 minutes a day.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://apps.apple.com/us/app/speaklife/id1617492998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c9a84c] text-[#1a2744] font-bold text-base px-8 py-4 rounded-full hover:bg-[#e8c96a] transition-all hover:scale-105"
                >
                  Download Free on iOS →
                </a>
                <Link
                  href="/faq"
                  className="border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <p className="text-white/40 text-sm mt-5">3-day free trial · $10/mo or $50/yr · iOS only</p>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative w-72 h-[560px]">
                {/* Phone frame */}
                <div className="absolute inset-0 bg-[#0d1b2e] rounded-[44px] border-4 border-white/20 shadow-2xl overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-[#0d1b2e] h-10 flex items-center justify-between px-8 pt-2">
                    <span className="text-white/60 text-xs font-medium">9:41</span>
                    <div className="w-24 h-5 bg-black rounded-full"></div>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                    </div>
                  </div>
                  {/* App content */}
                  <div className="bg-gradient-to-b from-[#1a2744] to-[#0d1420] h-full px-6 pt-6 pb-10 flex flex-col items-center">
                    <div className="text-white/60 text-xs uppercase tracking-widest mb-2">Daily Declaration</div>
                    <div className="text-[#c9a84c] text-xs font-semibold mb-6">IDENTITY</div>
                    <div className="bg-white/8 rounded-2xl p-5 mb-6 text-center border border-white/10">
                      <p className="text-white text-base leading-relaxed font-medium italic">
                        "I am not defined by my past. God says I am a new creation. I walk in that truth today."
                      </p>
                      <p className="text-white/40 text-xs mt-3">2 Corinthians 5:17</p>
                    </div>
                    <button className="bg-[#c9a84c] text-[#1a2744] font-bold text-sm px-8 py-3 rounded-full w-full">
                      Speak This Declaration
                    </button>
                    <div className="flex gap-6 mt-6">
                      {["😰","😊","🎯","🧠","👑","💪"].map((e, i) => (
                        <div key={i} className="text-xl">{e}</div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Glow */}
                <div className="absolute inset-0 rounded-[44px] bg-[#c9a84c]/10 blur-2xl scale-105 -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-[#f8f9ff] border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-10 text-sm font-semibold text-[#1a2744]">
            <div className="flex items-center gap-2">⭐ 4.9 App Store Rating</div>
            <div className="flex items-center gap-2">✝️ Scripture-Based</div>
            <div className="flex items-center gap-2">⚡ 2–5 Min Daily</div>
            <div className="flex items-center gap-2">🙏 6 Faith Categories</div>
          </div>
        </section>

        {/* Problem/Why */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-[#c9a84c] text-sm font-bold uppercase tracking-widest mb-4">The Difference</div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a2744] mb-6 leading-tight">
              You Read the Bible.<br />But Are You Speaking It?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Reading Scripture is powerful. But when you speak it over your life — out loud, in first person, with faith — something shifts.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Proverbs 18:21 says death and life are in the power of the tongue. Romans 10:17 says faith comes by hearing.
            </p>
            <p className="text-[#1a2744] font-semibold text-lg">
              SpeakLife is built on this truth. You open the app. You speak. You go into your day with God's Word on your lips.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 px-6 bg-[#1a2744]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-[#c9a84c] text-sm font-bold uppercase tracking-widest mb-3">How It Works</div>
              <h2 className="text-4xl font-black text-white">Your 2-Minute Morning Practice</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { n: "01", emoji: "🌅", title: "Open SpeakLife", desc: "Your daily declarations are waiting. Fresh every morning, written at a level you can speak with confidence." },
                { n: "02", emoji: "🗣️", title: "Speak Them Aloud", desc: "Say the words out loud — in first person. Your ears hear it. Your heart receives it. Faith activates." },
                { n: "03", emoji: "☀️", title: "Go Into Your Day", desc: "2–5 minutes total. God's Word is now the first thing your heart heard. That changes everything." },
              ].map((step) => (
                <div key={step.n} className="bg-white/8 rounded-2xl p-8 border border-white/10">
                  <div className="text-[#c9a84c]/40 text-6xl font-black mb-4">{step.n}</div>
                  <div className="text-4xl mb-4">{step.emoji}</div>
                  <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-[#c9a84c] text-sm font-bold uppercase tracking-widest mb-3">Content</div>
              <h2 className="text-4xl font-black text-[#1a2744]">Declarations for Every Area of Life</h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">Whatever you're walking through, there's a declaration for it.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {categories.map((cat) => (
                <div key={cat.name} className="card-hover bg-gradient-to-br from-[#f8f9ff] to-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <div className="text-4xl mb-3">{cat.emoji}</div>
                  <div className="font-bold text-[#1a2744] text-lg mb-1">{cat.name}</div>
                  <div className="text-gray-500 text-sm">{cat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-6 bg-[#f8f9ff]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-[#c9a84c] text-sm font-bold uppercase tracking-widest mb-3">Features</div>
              <h2 className="text-4xl font-black text-[#1a2744]">Everything You Need to Declare Daily</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="card-hover bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                  <div className="text-3xl mb-4">{f.emoji}</div>
                  <h3 className="font-bold text-[#1a2744] text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-[#c9a84c] text-sm font-bold uppercase tracking-widest mb-3">Reviews</div>
              <h2 className="text-4xl font-black text-[#1a2744]">Women Are Waking Up to This</h2>
              <div className="flex items-center justify-center gap-1 mt-4 text-2xl">⭐⭐⭐⭐⭐ <span className="text-gray-400 text-base ml-2">4.9 on App Store</span></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.author} className="card-hover bg-white rounded-2xl p-8 shadow-md border border-gray-100 border-t-4 border-t-[#c9a84c]">
                  <p className="text-gray-600 leading-relaxed italic mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#f8f9ff] rounded-full flex items-center justify-center text-[#1a2744] font-bold">
                      {t.author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-[#1a2744] text-sm">{t.author}</div>
                      <div className="text-xs text-gray-400">App Store Review ⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-[#1a2744]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Start Speaking Life Today</h2>
            <p className="text-white/70 text-lg mb-10">Join thousands of women who begin every morning with God's Word on their lips.</p>
            <a
              href="https://apps.apple.com/us/app/speaklife/id1617492998"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c9a84c] text-[#1a2744] font-black text-lg px-10 py-5 rounded-full hover:bg-[#e8c96a] transition-all hover:scale-105"
            >
              Download Free on iOS →
            </a>
            <p className="text-white/30 text-sm mt-5">3-day free trial on annual plan · $10/mo or $50/yr · iOS only</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
