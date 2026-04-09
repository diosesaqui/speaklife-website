import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Scripture Declarations for Confidence — SpeakLife",
  description: "Speak God's Word to build confidence. Scripture declarations for boldness, courage, and identity. SpeakLife delivers them daily. 4.9 stars. Free on iOS.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What are Scripture declarations for confidence?", "acceptedAnswer": { "@type": "Answer", "text": "Scripture declarations for confidence are Bible-based statements you speak out loud to replace self-doubt with God's truth about your identity and ability. Based on verses like 2 Timothy 1:7 ('God has not given us a spirit of fear'), Philippians 4:13 ('I can do all things through Christ'), and Joshua 1:9 ('Be strong and courageous')." } },
    { "@type": "Question", "name": "How do I build confidence as a Christian?", "acceptedAnswer": { "@type": "Answer", "text": "Biblical confidence isn't self-confidence — it's God-confidence. Build it by speaking Scripture declarations daily, reminding yourself what God says about you. 2 Timothy 1:7 is foundational: God gave you power, love, and a sound mind — not fear. Speak it until you believe it." } },
    { "@type": "Question", "name": "What app helps with Scripture declarations for confidence?", "acceptedAnswer": { "@type": "Answer", "text": "SpeakLife has a dedicated Confidence category with Scripture-based declarations for boldness, courage, and identity. 4.9 stars on the App Store. Free on iOS." } },
  ]
};

const declarations = [
  { text: "God did not give me a spirit of fear. He gave me power, love, and a sound mind. I walk in that today.", ref: "2 Timothy 1:7" },
  { text: "I can do everything God calls me to do. Christ is my strength — not my own ability.", ref: "Philippians 4:13" },
  { text: "I am strong and courageous. God is with me wherever I go. I will not be afraid.", ref: "Joshua 1:9" },
  { text: "I am more than a conqueror through Christ who loves me. Nothing can separate me from that.", ref: "Romans 8:37-39" },
  { text: "I approach God's throne with confidence to receive grace and mercy in my time of need.", ref: "Hebrews 4:16" },
  { text: "I can do this. God is working in me — giving me both the desire and the power to do what pleases Him.", ref: "Philippians 2:13" },
];

export default function ConfidenceDeclarations() {
  return (
    <>
      <Header />
      <main className="pt-16" style={{ fontFamily: "'Inter', sans-serif" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <section className="hero-water py-24 px-6 text-center relative">
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-white/50 text-xs tracking-widest uppercase mb-4">God-Given Boldness</p>
            <h1 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 4.5rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.05 }}>
              Scripture<br />Declarations for<br />Confidence
            </h1>
            <p className="text-white/60 text-base max-w-lg mx-auto">God didn't give you a spirit of fear. Speak His Word until you walk in the boldness He already placed in you.</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
        </section>

        <section className="py-20 px-6 max-w-4xl mx-auto">
          <div className="bg-[#f0f4ff] border-l-4 border-[#0a1f1f] p-6 rounded-r-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0a1f1f] mb-2">Key Verse</p>
            <p className="text-[#1a1a1a] font-medium leading-relaxed italic">"For God has not given us a spirit of fear, but of power and of love and of a sound mind." — <strong>2 Timothy 1:7</strong></p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Biblical Confidence vs Self-Confidence</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Self-confidence says "I believe in myself." Biblical confidence says "I believe in who God says I am." The source is completely different — and it matters.</p>
          <p className="text-gray-600 leading-relaxed mb-10">Self-confidence runs out. God-confidence doesn't. When you declare Scripture over yourself, you're not trying to talk yourself into something — you're agreeing with what God has already established as true.</p>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>6 Declarations to Speak for Confidence</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-14">
            {declarations.map(d => (
              <div key={d.ref} className="card-hover bg-[#0a1f1f] rounded-2xl p-6 border-t-2 border-t-[#c9a84c]">
                <p className="text-white/90 italic text-sm leading-relaxed mb-4">"{d.text}"</p>
                <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">{d.ref}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>How to Use These Declarations</h2>
          <div className="space-y-4 mb-14">
            {[
              { n: "01", t: "Speak them out loud", d: "Not in your head — out loud. Romans 10:17: faith comes by hearing. Your ears need to hear your voice declare it." },
              { n: "02", t: "Do it in the morning", d: "Before the day tells you who you are, let God's Word go first. 2–3 minutes every morning changes the whole day." },
              { n: "03", t: "Personalize them", d: "Swap 'I' for your name. 'God did not give [your name] a spirit of fear.' More specific = more powerful." },
              { n: "04", t: "Repeat the ones that resist", d: "The declarations that feel hardest to believe are usually the ones you need most. Speak those again." },
            ].map(s => (
              <div key={s.n} className="flex gap-5 p-5 bg-[#f7f8f7] rounded-xl border border-gray-100">
                <div className="text-3xl font-black text-gray-100 flex-shrink-0" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{s.n}</div>
                <div><div className="font-bold text-[#1a1a1a] text-sm mb-1">{s.t}</div><div className="text-gray-500 text-sm leading-relaxed">{s.d}</div></div>
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
            See also: <Link href="/christian-app-for-anxiety" className="underline hover:text-[#0a1f1f]">Christian app for anxiety</Link> · <Link href="/bible-affirmations-for-women" className="underline hover:text-[#0a1f1f]">Bible affirmations for women</Link> · <Link href="/declarations" className="underline hover:text-[#0a1f1f]">What are Christian declarations?</Link>
          </div>
        </section>

        <section className="hero-water py-20 px-6 text-center relative">
          <div className="relative z-10">
            <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, textTransform: "uppercase" }}>Walk in the Boldness He Gave You</h2>
            <p className="text-white/60 mb-8 text-sm">Free download · Confidence category included · iOS only</p>
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
