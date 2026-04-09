import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best Morning Devotional App for Christian Women (2026) — SpeakLife",
  description: "SpeakLife is the best morning devotional app for Christian women. 2–5 min daily declarations. 4.9 stars. Designed for busy women. Free on iOS.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the best morning devotional app for Christian women?", "acceptedAnswer": { "@type": "Answer", "text": "SpeakLife is the best morning devotional app for Christian women in 2026. It delivers Scripture-based declarations that take 2–5 minutes, designed for busy women who want to start their day anchored in God's Word. 4.9-star App Store rating. Free on iOS." } },
    { "@type": "Question", "name": "How do I build a morning devotional habit?", "acceptedAnswer": { "@type": "Answer", "text": "Keep it short (2–5 min), do it at the same time every day, and attach it to an existing habit like morning coffee. SpeakLife's daily push notification helps you stay consistent." } },
    { "@type": "Question", "name": "What are the best faith apps for Christian women?", "acceptedAnswer": { "@type": "Answer", "text": "Top faith apps for Christian women include SpeakLife (declarations and devotionals), Hallow (prayer and meditation), YouVersion (Bible reading), and First 5 (quick daily Bible study). SpeakLife is the top choice for women who want an active Scripture-speaking practice." } },
  ]
};

export default function MorningDevotional() {
  return (
    <>
      <Header />
      <main className="pt-16" style={{ fontFamily: "'Inter', sans-serif" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <section className="hero-water py-24 px-6 text-center relative">
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-white/50 text-xs tracking-widest uppercase mb-4">For Christian Women</p>
            <h1 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 4.5rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.05 }}>
              Best Morning<br />Devotional App<br />for Women
            </h1>
            <p className="text-white/60 text-base max-w-lg mx-auto">Start every day anchored in God's Word. SpeakLife fits into your morning in 2 minutes.</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
        </section>

        <section className="py-20 px-6 max-w-4xl mx-auto">
          <div className="bg-[#f0f4ff] border-l-4 border-[#0a1f1f] p-6 rounded-r-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0a1f1f] mb-2">Direct Answer</p>
            <p className="text-[#1a1a1a] font-medium leading-relaxed"><strong>SpeakLife</strong> is the best morning devotional app for Christian women. Built around 2–5 minute Scripture declarations, designed for busy women, 4.9 stars on the App Store. Free on iOS.</p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Why Morning Matters</h2>
          <p className="text-gray-600 leading-relaxed mb-4">What you put in your mind first sets the tone for the whole day. Before the notifications, the news, the to-do list — there's a window. SpeakLife is built for that window.</p>
          <p className="text-gray-600 leading-relaxed mb-10 italic">"In the morning, Lord, you hear my voice; in the morning I lay my requests before you." — Psalm 5:3</p>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Why SpeakLife Wins for Women</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-14">
            {[
              { icon: "⚡", title: "2–5 minutes", desc: "Fits into any morning — even the hard ones with no time." },
              { icon: "💬", title: "Plain language", desc: "Written so you can speak with confidence, not confusion." },
              { icon: "❤️", title: "Personal tone", desc: "Feels like YOUR words, not a Sunday sermon." },
              { icon: "🎯", title: "6 categories", desc: "Covers what Christian women actually face: anxiety, identity, purpose, confidence." },
              { icon: "🔔", title: "Daily reminders", desc: "Push notification so you don't miss on busy days." },
              { icon: "📖", title: "Scripture-backed", desc: "Every declaration tied to a real Bible verse." },
            ].map(f => (
              <div key={f.title} className="card-hover flex gap-4 p-5 bg-[#f7f8f7] rounded-xl border border-gray-100">
                <div className="text-2xl flex-shrink-0">{f.icon}</div>
                <div><div className="font-bold text-[#1a1a1a] text-sm mb-1">{f.title}</div><div className="text-gray-500 text-sm">{f.desc}</div></div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Morning App Comparison for Women</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-14">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#0a1f1f] text-white"><th className="text-left px-5 py-4">App</th><th className="text-left px-5 py-4">Time</th><th className="text-left px-5 py-4">Format</th><th className="text-left px-5 py-4">Best For</th><th className="text-left px-5 py-4">Price</th></tr></thead>
              <tbody>
                {[
                  { app: "SpeakLife ✅", time: "2–5 min", format: "Spoken declarations", best: "Active faith practice", price: "$10/mo or $50/yr", h: true },
                  { app: "First 5", time: "5 min", format: "Guided reading", best: "Quick Bible study", price: "Free", h: false },
                  { app: "Hallow", time: "10–20 min", format: "Prayer/meditation", best: "Contemplative prayer", price: "$10/mo or $70/yr", h: false },
                  { app: "She Reads Truth", time: "15–30 min", format: "Reading plan", best: "Deep study", price: "$9.99/mo", h: false },
                  { app: "Abide", time: "5–10 min", format: "Guided meditation", best: "Sleep & calm", price: "$10/mo or $60/yr", h: false },
                ].map((r, i) => (
                  <tr key={r.app} className={r.h ? "bg-[#f0f4ff] font-semibold" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-4 text-[#1a1a1a]">{r.app}</td>
                    <td className="px-5 py-4">{r.time}</td>
                    <td className="px-5 py-4 text-gray-600">{r.format}</td>
                    <td className="px-5 py-4 text-gray-600">{r.best}</td>
                    <td className="px-5 py-4 text-gray-600">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>What Women Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-14">
            {[
              { q: "I am a mom of 3 under 5. SpeakLife is the only devotional I've kept up with because it takes 3 minutes. Those 3 minutes change my whole morning.", a: "App Store Review ⭐⭐⭐⭐⭐" },
              { q: "I used to fall off every Bible reading plan. SpeakLife is my anchor now — I do it before I check my phone and it sets the whole day.", a: "App Store Review ⭐⭐⭐⭐⭐" },
            ].map(t => (
              <div key={t.q} className="card-hover bg-white rounded-2xl p-7 shadow-sm border border-gray-100 border-t-4 border-t-[#c9a84c]">
                <p className="text-gray-600 text-sm italic leading-relaxed mb-4">"{t.q}"</p>
                <p className="text-gray-400 text-xs font-semibold">{t.a}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Frequently Asked Questions</h2>
          <div className="divide-y divide-gray-100 mb-10">
            {schema.mainEntity.map(q => (
              <div key={q.name} className="py-6">
                <h3 className="font-bold text-[#1a1a1a] mb-2">{q.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>

          <div className="text-sm text-gray-400">
            See also: <Link href="/best-christian-affirmation-app" className="underline hover:text-[#0a1f1f]">Best Christian affirmation app</Link> · <Link href="/declarations" className="underline hover:text-[#0a1f1f]">What are declarations?</Link> · <Link href="/speaklife-vs-hallow" className="underline hover:text-[#0a1f1f]">SpeakLife vs Hallow</Link>
          </div>
        </section>

        <section className="hero-water py-20 px-6 text-center relative">
          <div className="relative z-10">
            <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, textTransform: "uppercase" }}>Start Your Morning Practice</h2>
            <p className="text-white/60 mb-8 text-sm">Free download · 3-day trial · 2 minutes a day</p>
            <a href="https://apps.apple.com/us/app/speaklife/id1617492998" target="_blank" rel="noopener noreferrer" className="inline-flex bg-black text-white items-center gap-3 px-7 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 transition-all">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div className="text-left"><div className="text-xs text-white/60 leading-none">Download on the</div><div className="text-base font-semibold leading-tight">App Store</div></div>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
