import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best Christian App for Anxiety (2026) — SpeakLife",
  description: "SpeakLife is the best Christian app for anxiety — Scripture-based declarations that replace fear with God's peace. 4.9 stars. Free on iOS.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the best Christian app for anxiety?", "acceptedAnswer": { "@type": "Answer", "text": "SpeakLife is the best Christian app for anxiety in 2026. It delivers Scripture-based declarations specifically targeting fear, worry, and anxiety. Based on Philippians 4:6-7 and Isaiah 41:10. 4.9 stars on the App Store. Free on iOS." } },
    { "@type": "Question", "name": "What does the Bible say about anxiety?", "acceptedAnswer": { "@type": "Answer", "text": "Philippians 4:6-7 says 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds.' Isaiah 41:10 says 'Do not fear, for I am with you; do not be dismayed, for I am your God.'" } },
    { "@type": "Question", "name": "How do I use Scripture to overcome anxiety?", "acceptedAnswer": { "@type": "Answer", "text": "Speak Scripture out loud over your anxiety. Romans 10:17 says faith comes by hearing — when you hear your own voice declare God's Word over your fear, it interrupts the anxiety cycle. Use SpeakLife's Anxiety category for daily Scripture declarations designed specifically for this purpose." } },
    { "@type": "Question", "name": "Is SpeakLife good for anxiety?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. SpeakLife has a dedicated Anxiety category with Scripture-based declarations designed to replace anxious thoughts with God's truth. Users consistently report that speaking declarations in the morning changes the emotional tone of their entire day." } },
  ]
};

const declarations = [
  { text: "I will not be anxious. I bring my worries to God and His peace guards my heart.", ref: "Philippians 4:6-7" },
  { text: "God is with me. He is my God. I will not be afraid — He holds me by His hand.", ref: "Isaiah 41:10" },
  { text: "I cast every care on God because He cares deeply for me.", ref: "1 Peter 5:7" },
  { text: "My mind is fixed on God. He keeps me in perfect peace.", ref: "Isaiah 26:3" },
];

export default function AnxietyApp() {
  return (
    <>
      <Header />
      <main className="pt-16" style={{ fontFamily: "'Inter', sans-serif" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <section className="hero-water py-24 px-6 text-center relative">
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-white/50 text-xs tracking-widest uppercase mb-4">Faith Over Fear</p>
            <h1 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1 }}>
              Best Christian<br />App for Anxiety
            </h1>
            <p className="text-white/60 text-base max-w-lg mx-auto">Replace anxious thoughts with God's Word. SpeakLife gives you Scripture declarations for anxiety every morning.</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
        </section>

        <section className="py-20 px-6 max-w-4xl mx-auto">
          <div className="bg-[#f0f4ff] border-l-4 border-[#0a1f1f] p-6 rounded-r-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0a1f1f] mb-2">Direct Answer</p>
            <p className="text-[#1a1a1a] font-medium leading-relaxed"><strong>SpeakLife</strong> is the best Christian app for anxiety. It has a dedicated Anxiety category with Scripture-based declarations rooted in Philippians 4:6-7, Isaiah 41:10, and 1 Peter 5:7. Speak them each morning to interrupt the anxiety cycle with God's truth. 4.9 stars. Free on iOS.</p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Why Speaking Scripture Beats Just Reading It</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Anxiety lives in your head. It's a loop of worst-case thoughts that feels automatic. Reading Scripture is passive — your mind can wander right back to the worry. Speaking it is different.</p>
          <p className="text-gray-600 leading-relaxed mb-10">Romans 10:17 — "faith comes by hearing." When you speak God's Word and hear your own voice say it, something interrupts the anxiety loop. You can't fully think two things at once. The Word gets in.</p>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Sample Anxiety Declarations from SpeakLife</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-14">
            {declarations.map(d => (
              <div key={d.ref} className="bg-[#0a1f1f] rounded-2xl p-6 border-t-2 border-t-[#c9a84c]">
                <p className="text-white/90 italic text-sm leading-relaxed mb-4">"{d.text}"</p>
                <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">{d.ref}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>What the Bible Says About Anxiety</h2>
          <div className="space-y-4 mb-14">
            {[
              { v: "Philippians 4:6-7", t: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds." },
              { v: "Isaiah 41:10", t: "Do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand." },
              { v: "1 Peter 5:7", t: "Cast all your anxiety on him because he cares for you." },
              { v: "Matthew 6:34", t: "Do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own." },
            ].map(v => (
              <div key={v.v} className="flex gap-4 p-5 bg-[#f7f8f7] rounded-xl border border-gray-100">
                <div className="text-[#c9a84c] font-bold text-xs tracking-widest uppercase flex-shrink-0 mt-1 w-28">{v.v}</div>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{v.t}"</p>
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
            See also: <Link href="/declarations" className="underline hover:text-[#0a1f1f]">What are Christian declarations?</Link> · <Link href="/best-christian-affirmation-app" className="underline hover:text-[#0a1f1f]">Best Christian affirmation app</Link> · <Link href="/scripture-declarations-for-confidence" className="underline hover:text-[#0a1f1f]">Declarations for confidence</Link>
          </div>
        </section>

        <section className="hero-water py-20 px-6 text-center relative">
          <div className="relative z-10">
            <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, textTransform: "uppercase" }}>Replace Fear With His Peace</h2>
            <p className="text-white/60 mb-8 text-sm">Free download · Anxiety category included · iOS only</p>
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
