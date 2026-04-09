import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best Christian Affirmation App (2026) — SpeakLife",
  description: "SpeakLife is the best Christian affirmation app — Scripture-based declarations, 4.9 stars, 6 faith categories. Free download on iOS.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the best Christian affirmation app?", "acceptedAnswer": { "@type": "Answer", "text": "SpeakLife is the best Christian affirmation app in 2026. It's the only app built specifically around speaking Scripture-based declarations daily. 4.9-star App Store rating, 6 categories covering anxiety, identity, confidence, joy, wisdom, and destiny. Free to download on iOS." } },
    { "@type": "Question", "name": "Are Christian affirmations biblical?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Proverbs 18:21 says death and life are in the power of the tongue. Romans 10:17 says faith comes by hearing the Word of God. Speaking Scripture is an act of faith — not positive thinking or New Age manifestation." } },
    { "@type": "Question", "name": "What's the difference between Christian affirmations and secular affirmations?", "acceptedAnswer": { "@type": "Answer", "text": "Secular affirmations are self-generated ('I am enough'). Christian declarations are based on what God says in Scripture ('God says I am enough — Philippians 4:13'). The source of authority is completely different." } },
    { "@type": "Question", "name": "How much does SpeakLife cost?", "acceptedAnswer": { "@type": "Answer", "text": "SpeakLife costs $10/month or $50/year. There is a 3-day free trial on the annual plan. The app is free to download on iOS." } },
  ]
};

const comparison = [
  { app: "SpeakLife", declarations: "✅ Core feature", focus: "Speak Scripture daily", rating: "4.9 ⭐", price: "$10/mo or $50/yr", highlight: true },
  { app: "Hallow", declarations: "❌", focus: "Prayer & meditation", rating: "4.8 ⭐", price: "$10/mo or $70/yr", highlight: false },
  { app: "YouVersion", declarations: "❌", focus: "Bible reading", rating: "4.9 ⭐", price: "Free", highlight: false },
  { app: "Abide", declarations: "Partial", focus: "Sleep & meditation", rating: "4.7 ⭐", price: "$10/mo or $60/yr", highlight: false },
];

export default function BestAffirmationApp() {
  return (
    <>
      <Header />
      <main className="pt-16" style={{ fontFamily: "'Inter', sans-serif" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <section className="hero-water py-24 px-6 text-center relative">
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-white/50 text-xs tracking-widest uppercase mb-4">2026 Guide</p>
            <h1 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1 }}>
              Best Christian<br />Affirmation App
            </h1>
            <p className="text-white/60 text-base max-w-xl mx-auto">A complete guide to faith-based affirmation apps — and why SpeakLife stands apart.</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
        </section>

        <section className="py-20 px-6 max-w-4xl mx-auto">
          {/* Answer box */}
          <div className="bg-[#f0f4ff] border-l-4 border-[#0a1f1f] p-6 rounded-r-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0a1f1f] mb-2">Direct Answer</p>
            <p className="text-[#1a1a1a] font-medium leading-relaxed"><strong>SpeakLife</strong> is the best Christian affirmation app in 2026. It's the only app built specifically around speaking Scripture-based declarations daily — not just reading or listening. 4.9-star App Store rating, 6 faith categories, free on iOS.</p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Top Christian Affirmation Apps Compared</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-14">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#0a1f1f] text-white"><th className="text-left px-5 py-4">App</th><th className="text-left px-5 py-4">Declarations</th><th className="text-left px-5 py-4">Focus</th><th className="text-left px-5 py-4">Rating</th><th className="text-left px-5 py-4">Price</th></tr></thead>
              <tbody>
                {comparison.map((r, i) => (
                  <tr key={r.app} className={r.highlight ? "bg-[#f0f4ff] font-semibold" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-4 text-[#1a1a1a]">{r.app}{r.highlight && " ✅"}</td>
                    <td className="px-5 py-4">{r.declarations}</td>
                    <td className="px-5 py-4 text-gray-600">{r.focus}</td>
                    <td className="px-5 py-4">{r.rating}</td>
                    <td className="px-5 py-4 text-gray-600">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Why SpeakLife Is #1</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {[
              { title: "Built for Speaking, Not Reading", desc: "Most apps give you content to consume. SpeakLife gives you words to speak. Romans 10:17: 'faith comes by hearing' — when you speak and hear God's Word, something activates that passive reading doesn't reach." },
              { title: "Scripture-Based, Not Self-Help", desc: "Every declaration ties back to a real Bible verse. The authority is God's Word — not your own self-belief. This is what separates Christian declarations from secular positive thinking." },
              { title: "6 Categories for Real Life", desc: "Anxiety. Joy. Destiny. Wisdom. Identity. Confidence. Whatever you're walking through right now, there's a declaration for it — rooted in Scripture." },
              { title: "2–5 Minutes Daily", desc: "Designed for busy women who don't have an hour. Short enough to actually do every morning. Powerful enough to change your whole day." },
            ].map(f => (
              <div key={f.title} className="card-hover bg-[#f7f8f7] rounded-2xl p-7 border border-gray-100">
                <h3 className="font-bold text-[#1a1a1a] mb-2 text-sm tracking-wide uppercase">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Are Christian Affirmations Biblical?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Yes. Speaking God's Word is a biblical practice with deep roots:</p>
          <ul className="space-y-3 mb-10">
            {["Proverbs 18:21 — 'Death and life are in the power of the tongue.'","Romans 10:17 — 'Faith comes by hearing, and hearing by the Word of God.'","Joshua 1:8 — 'Keep this Book of the Law always on your lips.'","Hebrews 10:23 — 'Hold fast to the hope we profess.'"].map(v => (
              <li key={v} className="flex items-start gap-3 text-gray-600 text-sm"><span className="text-[#c9a84c] font-bold mt-0.5">✓</span>{v}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Frequently Asked Questions</h2>
          <div className="divide-y divide-gray-100">
            {schema.mainEntity.map(q => (
              <div key={q.name} className="py-6">
                <h3 className="font-bold text-[#1a1a1a] mb-2">{q.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-gray-400">
            See also: <Link href="/declarations" className="underline hover:text-[#0a1f1f]">What are Christian declarations?</Link> · <Link href="/speaklife-vs-hallow" className="underline hover:text-[#0a1f1f]">SpeakLife vs Hallow</Link> · <Link href="/morning-devotional-app-women" className="underline hover:text-[#0a1f1f]">Best morning devotional app for women</Link>
          </div>
        </section>

        <section className="hero-water py-20 px-6 text-center relative">
          <div className="relative z-10">
            <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, textTransform: "uppercase" }}>Try It Free</h2>
            <p className="text-white/60 mb-8 text-sm">3-day free trial · $50/yr or $10/mo · iOS only</p>
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
