import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bible Affirmations for Women — SpeakLife App",
  description: "Scripture-based affirmations for Christian women. SpeakLife delivers daily Bible affirmations for identity, confidence, anxiety, and purpose. 4.9 stars. Free on iOS.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What are the best Bible affirmations for women?", "acceptedAnswer": { "@type": "Answer", "text": "The best Bible affirmations for women are Scripture-based declarations that speak directly to identity, worth, purpose, and strength. Examples: 'I am fearfully and wonderfully made' (Psalm 139:14), 'I can do all things through Christ' (Philippians 4:13), 'God has plans to prosper me' (Jeremiah 29:11). SpeakLife delivers fresh ones daily across 6 categories." } },
    { "@type": "Question", "name": "What app has Bible affirmations for women?", "acceptedAnswer": { "@type": "Answer", "text": "SpeakLife is the top app for Bible affirmations for women. It's designed specifically for Christian women who want Scripture-based declarations for their daily life. 4.9-star App Store rating. Free on iOS." } },
    { "@type": "Question", "name": "What does the Bible say about a woman's identity?", "acceptedAnswer": { "@type": "Answer", "text": "The Bible says women are fearfully and wonderfully made (Psalm 139:14), chosen and dearly loved (Colossians 3:12), daughters of the King (Galatians 3:26), and equipped with power, love, and a sound mind (2 Timothy 1:7). These truths form the foundation of SpeakLife's Identity category." } },
  ]
};

const affirmations = [
  { cat: "Identity", text: "I am fearfully and wonderfully made. God knit me together with intention and purpose.", ref: "Psalm 139:14" },
  { cat: "Confidence", text: "I have everything I need. God did not give me a spirit of fear — He gave me power, love, and a clear mind.", ref: "2 Timothy 1:7" },
  { cat: "Worth", text: "I am chosen, holy, and dearly loved. That is not based on what I do — it is who God says I am.", ref: "Colossians 3:12" },
  { cat: "Purpose", text: "God has good plans for me. Plans for a future, not for harm. I walk forward in that confidence.", ref: "Jeremiah 29:11" },
  { cat: "Strength", text: "I can do everything God calls me to do. Christ is my strength — not my own ability.", ref: "Philippians 4:13" },
  { cat: "Peace", text: "I am not anxious. I bring my cares to God and His peace — beyond anything I can understand — guards my mind.", ref: "Philippians 4:6-7" },
];

export default function BibleAffirmationsWomen() {
  return (
    <>
      <Header />
      <main className="pt-16" style={{ fontFamily: "'Inter', sans-serif" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <section className="hero-water py-24 px-6 text-center relative">
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-white/50 text-xs tracking-widest uppercase mb-4">Scripture for Her</p>
            <h1 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1 }}>
              Bible Affirmations<br />for Women
            </h1>
            <p className="text-white/60 text-base max-w-lg mx-auto">Daily Scripture-based affirmations for Christian women — identity, confidence, purpose, and peace.</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
        </section>

        <section className="py-20 px-6 max-w-4xl mx-auto">
          <div className="bg-[#f0f4ff] border-l-4 border-[#0a1f1f] p-6 rounded-r-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0a1f1f] mb-2">Direct Answer</p>
            <p className="text-[#1a1a1a] font-medium leading-relaxed"><strong>SpeakLife</strong> is the best app for Bible affirmations for women. Designed for Christian women 25–40, it delivers daily Scripture-based declarations across identity, confidence, anxiety, joy, wisdom, and destiny. 4.9 stars. Free on iOS.</p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>What God Says About You</h2>
          <p className="text-gray-600 leading-relaxed mb-10">The world tells women who to be every single day — through ads, social media, comparison. Bible affirmations do the opposite: they anchor your identity in what God has already declared over you. These are not opinions. They are facts in Scripture.</p>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Daily Affirmations from SpeakLife</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-14">
            {affirmations.map(a => (
              <div key={a.ref} className="card-hover bg-[#0a1f1f] rounded-2xl p-6 border-t-2 border-t-[#c9a84c]">
                <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-3">{a.cat}</p>
                <p className="text-white/90 italic text-sm leading-relaxed mb-4">"{a.text}"</p>
                <p className="text-white/30 text-xs">{a.ref}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Why Women Love SpeakLife</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {[
              { stat: "4.9★", label: "App Store rating" },
              { stat: "2 min", label: "Average daily session" },
              { stat: "6", label: "Life categories covered" },
            ].map(s => (
              <div key={s.label} className="text-center bg-[#f7f8f7] rounded-2xl p-8 border border-gray-100">
                <div className="text-4xl font-black text-[#0a1f1f] mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{s.stat}</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-14">
            {[
              { q: "I'm a working mom. I have 3 minutes in the morning before chaos starts. SpeakLife is the only thing I've been consistent with.", a: "App Store ⭐⭐⭐⭐⭐" },
              { q: "I struggled with my identity for years. Speaking these declarations every morning has genuinely changed how I see myself.", a: "App Store ⭐⭐⭐⭐⭐" },
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
            See also: <Link href="/morning-devotional-app-women" className="underline hover:text-[#0a1f1f]">Best morning devotional for women</Link> · <Link href="/christian-app-for-anxiety" className="underline hover:text-[#0a1f1f]">Christian app for anxiety</Link> · <Link href="/declarations" className="underline hover:text-[#0a1f1f]">What are declarations?</Link>
          </div>
        </section>

        <section className="hero-water py-20 px-6 text-center relative">
          <div className="relative z-10">
            <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, textTransform: "uppercase" }}>Speak His Truth Over Your Life</h2>
            <p className="text-white/60 mb-8 text-sm">Free download · 3-day trial · iOS only</p>
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
