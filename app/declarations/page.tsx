import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "What Are Christian Declarations? The App That Makes Them Daily — SpeakLife",
  description: "Christian declarations are Scripture-based statements you speak aloud. SpeakLife is the best app for daily declarations. 4.9 stars. Free on iOS.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What are Christian declarations?", "acceptedAnswer": { "@type": "Answer", "text": "Christian declarations are short, Scripture-based statements you speak aloud over your life. Rooted in Proverbs 18:21 ('death and life are in the power of the tongue') and Romans 10:17 ('faith comes by hearing'). When you speak God's Word, faith activates and replaces anxiety, doubt, and fear with biblical truth." } },
    { "@type": "Question", "name": "What app helps you speak Scripture daily?", "acceptedAnswer": { "@type": "Answer", "text": "SpeakLife is the top app for speaking Scripture daily. It provides fresh declarations every morning, audio devotionals, and 6 life categories. Available on iOS with a 4.9-star rating." } },
    { "@type": "Question", "name": "Is speaking declarations the same as positive thinking?", "acceptedAnswer": { "@type": "Answer", "text": "No. Positive thinking is self-generated and has no external authority. Christian declarations are rooted in Scripture — God's Word. The power is not in your belief in yourself, but in God's promises that you are declaring. This is a biblical practice, not New Age philosophy." } },
    { "@type": "Question", "name": "Are declarations the same as manifestation?", "acceptedAnswer": { "@type": "Answer", "text": "No. Manifestation (New Age) assumes you create your own reality through thought. Christian declarations agree with what God has already declared in Scripture. You are not creating truth — you are receiving and declaring it." } },
  ]
};

export default function Declarations() {
  return (
    <>
      <Header />
      <main className="pt-16" style={{ fontFamily: "'Inter', sans-serif" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <section className="hero-water py-24 px-6 text-center relative">
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-white/50 text-xs tracking-widest uppercase mb-4">Biblical Practice</p>
            <h1 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1 }}>
              What Are<br />Christian<br />Declarations?
            </h1>
            <p className="text-white/60 text-base max-w-lg mx-auto">And the app that makes them part of your daily life.</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
        </section>

        <section className="py-20 px-6 max-w-4xl mx-auto">
          <div className="bg-[#f0f4ff] border-l-4 border-[#0a1f1f] p-6 rounded-r-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0a1f1f] mb-2">Direct Answer</p>
            <p className="text-[#1a1a1a] font-medium leading-relaxed">Christian declarations are short, Scripture-based statements you speak aloud over your life. Based on Proverbs 18:21 and Romans 10:17, they are acts of faith — agreeing with God's Word instead of fear or doubt. <strong>SpeakLife</strong> is the leading app for daily Christian declarations.</p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>The Biblical Foundation</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-14">
            {[
              { ref: "Proverbs 18:21", text: '"Death and life are in the power of the tongue."' },
              { ref: "Romans 10:17", text: '"Faith comes by hearing, and hearing by the Word of God."' },
              { ref: "Joshua 1:8", text: '"Keep this Book of the Law always on your lips."' },
              { ref: "Hebrews 10:23", text: '"Hold fast to the hope we profess."' },
            ].map(v => (
              <div key={v.ref} className="bg-[#0a1f1f] rounded-2xl p-6">
                <p className="text-white/90 italic text-sm leading-relaxed mb-3">{v.text}</p>
                <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase">{v.ref}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Reading vs. Declaring Scripture</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-14">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#0a1f1f] text-white"><th className="text-left px-5 py-4">Reading Scripture</th><th className="text-left px-5 py-4">Declaring Scripture</th></tr></thead>
              <tbody>
                {[["Passive intake","Active engagement"],["Intellectual understanding","Personal activation"],["'God said this to someone'","'God is saying this to me'"],["Works through the mind","Works through mouth AND ears"],["Great for study","Great for transformation"]].map(([a, b], i) => (
                  <tr key={a} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-4 text-gray-500">{a}</td>
                    <td className="px-5 py-4 font-semibold text-[#1a1a1a]">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>What SpeakLife Declarations Look Like</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {[
              { cat: "Anxiety", decl: '"I am at peace. God holds my future. I release today\'s worry and rest in His care."', ref: "Philippians 4:6-7" },
              { cat: "Identity", decl: '"I am not defined by my past. God says I am a new creation. I walk in that truth today."', ref: "2 Corinthians 5:17" },
              { cat: "Confidence", decl: '"I can do this. God did not give me a spirit of fear. I move forward with power and a clear mind."', ref: "2 Timothy 1:7" },
            ].map(d => (
              <div key={d.cat} className="card-hover bg-[#0a1f1f] rounded-2xl p-6 border-t-2 border-t-[#c9a84c]">
                <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-3">{d.cat}</p>
                <p className="text-white/90 text-sm italic leading-relaxed mb-4">{d.decl}</p>
                <p className="text-white/30 text-xs">{d.ref}</p>
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
            See also: <Link href="/best-christian-affirmation-app" className="underline hover:text-[#0a1f1f]">Best Christian affirmation app</Link> · <Link href="/morning-devotional-app-women" className="underline hover:text-[#0a1f1f]">Best morning devotional for women</Link> · <Link href="/speaklife-vs-hallow" className="underline hover:text-[#0a1f1f]">SpeakLife vs Hallow</Link>
          </div>
        </section>

        <section className="hero-water py-20 px-6 text-center relative">
          <div className="relative z-10">
            <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, textTransform: "uppercase" }}>Start Declaring Today</h2>
            <p className="text-white/60 mb-8 text-sm">Free download · 2 minutes a day · iOS only</p>
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
