import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Features — SpeakLife | Christian Declaration App",
  description: "Explore SpeakLife features — daily declarations, audio devotionals, 6 life categories, personalized content, and more.",
};

const features = [
  {
    n: "01",
    title: "DAILY DECLARATIONS",
    desc: "Start each day with fresh Scripture-based declarations. Written clearly so you can speak them with confidence — no theology degree required.",
    detail: "New declarations every morning across 6 life categories. Speak them aloud, let your faith grow.",
  },
  {
    n: "02",
    title: "PRAYERS / DEVOTIONALS",
    desc: "SpeakLife encourages not just the renewal of the mind but the nurturing of a personal and intimate relationship with Jesus through prayer and daily devotionals.",
    detail: "Audio devotionals you can listen to or speak along with. Perfect for morning routines, commutes, or quiet moments.",
  },
  {
    n: "03",
    title: "THEMES / LIFE SITUATIONS",
    desc: "From the colors, images and fonts within your theme to the selection of categories — SpeakLife tailors your spiritual journey to you.",
    detail: "6 categories: Anxiety, Joy, Destiny, Wisdom, Identity, Confidence. Whatever you're walking through, there's a declaration for it.",
  },
  {
    n: "04",
    title: "CREATE YOUR OWN",
    desc: "New content is constantly being added. Plus you have the ability to write your own personalized affirmations to further engage in the power of God's Word.",
    detail: "Your story, your words, rooted in His truth. Write declarations that speak directly to your situation.",
  },
  {
    n: "05",
    title: "DAILY REMINDERS",
    desc: "Consistent daily practice is where transformation happens. SpeakLife sends gentle push notifications to keep you anchored to your morning routine.",
    detail: "The most powerful declarations are the ones you actually speak. We help make sure you don't miss a day.",
  },
  {
    n: "06",
    title: "SHARE THE WORD",
    desc: "When a declaration moves you, share it. Beautiful branded cards let you send God's Word to the people you love.",
    detail: "Built-in sharing so every user becomes a carrier of the Word.",
  },
];

export default function Features() {
  return (
    <>
      <Header />
      <main className="pt-16" style={{ fontFamily: "'Inter', sans-serif" }}>

        <section className="hero-water py-24 px-6 text-center relative">
          <div className="relative z-10">
            <p className="text-white/50 text-xs tracking-widest uppercase mb-4">What We Offer</p>
            <h1
              className="text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 900, letterSpacing: "0.05em", textTransform: "uppercase", lineHeight: 0.95 }}
            >
              FEATURES
            </h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl mb-20">
              Start each day with uplifting scriptures and affirmations that bring peace, strength and positivity to your life. From personalized content to guided prayer sessions — receive constant inspiration throughout the day.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {features.map(f => (
                <div key={f.n} className="card-hover border-t border-gray-100 pt-8">
                  <div
                    className="text-6xl font-black mb-4 text-gray-100"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >{f.n}</div>
                  <h2 className="text-sm font-bold tracking-widest text-[#1a1a1a] mb-3">{f.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{f.desc}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="hero-water py-24 px-6 text-center relative">
          <div className="relative z-10 max-w-xl mx-auto">
            <h2
              className="text-white mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, letterSpacing: "0.05em", textTransform: "uppercase" }}
            >
              READY?
            </h2>
            <p className="text-white/60 mb-10 text-sm leading-relaxed">Experience all of this for yourself. Download SpeakLife free.</p>
            <a
              href="https://apps.apple.com/us/app/speaklife/id1617492998"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-black text-white items-center gap-3 px-7 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 transition-all"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-white/60 leading-none">Download on the</div>
                <div className="text-base font-semibold leading-tight">App Store</div>
              </div>
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
