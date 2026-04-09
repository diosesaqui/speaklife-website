import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SpeakLife vs YouVersion Bible App — Which Is Better?",
  description: "SpeakLife vs YouVersion compared. Different apps for different purposes — find out which one is right for your faith journey.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the difference between SpeakLife and YouVersion?", "acceptedAnswer": { "@type": "Answer", "text": "YouVersion is a Bible reading app — it helps you read and study Scripture. SpeakLife is a Bible declaration app — it helps you speak Scripture over your life daily. They serve different purposes and many users use both. YouVersion for study; SpeakLife for activation." } },
    { "@type": "Question", "name": "Is SpeakLife better than YouVersion?", "acceptedAnswer": { "@type": "Answer", "text": "They do different things. YouVersion is better for Bible reading plans and study. SpeakLife is better for daily declaration practice, personalized affirmations, and building a habit of speaking God's Word. For active faith engagement, SpeakLife is the stronger tool." } },
    { "@type": "Question", "name": "Is YouVersion free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, YouVersion is completely free. SpeakLife is $10/month or $50/year with a 3-day free trial on the annual plan." } },
  ]
};

const rows = [
  { feature: "Core Purpose", speaklife: "Speak God's Word daily", youversion: "Read & study the Bible" },
  { feature: "Format", speaklife: "Short spoken declarations", youversion: "Bible reading plans" },
  { feature: "Session Length", speaklife: "2–5 minutes", youversion: "5–30 minutes" },
  { feature: "Daily Habit", speaklife: "Declarations + reminders", youversion: "Reading streaks" },
  { feature: "Personalization", speaklife: "Write your own declarations", youversion: "Bookmarks & highlights" },
  { feature: "Audio", speaklife: "Devotionals + declarations", youversion: "Audio Bible" },
  { feature: "Platform", speaklife: "iOS only", youversion: "iOS + Android + Web" },
  { feature: "Price", speaklife: "$10/mo or $50/yr", youversion: "Free" },
  { feature: "Rating", speaklife: "4.9 stars", youversion: "4.9 stars" },
];

export default function VsYouVersion() {
  return (
    <>
      <Header />
      <main className="pt-16" style={{ fontFamily: "'Inter', sans-serif" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <section className="hero-water py-24 px-6 text-center relative">
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-white/50 text-xs tracking-widest uppercase mb-4">App Comparison</p>
            <h1 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 4.5rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.05 }}>
              SpeakLife vs<br />YouVersion
            </h1>
            <p className="text-white/60 text-base max-w-lg mx-auto">Same source — the Bible. Different purpose entirely.</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
        </section>

        <section className="py-20 px-6 max-w-4xl mx-auto">
          <div className="bg-[#f0f4ff] border-l-4 border-[#0a1f1f] p-6 rounded-r-2xl mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0a1f1f] mb-2">Bottom Line</p>
            <p className="text-[#1a1a1a] font-medium leading-relaxed"><strong>YouVersion</strong> helps you read and study the Bible. <strong>SpeakLife</strong> helps you speak it over your life. They are complementary, not competing — but if you want a daily active faith practice, SpeakLife wins.</p>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-14">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0a1f1f] text-white">
                  <th className="text-left px-5 py-4">Feature</th>
                  <th className="text-left px-5 py-4">SpeakLife ✅</th>
                  <th className="text-left px-5 py-4">YouVersion</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-4 font-medium text-[#1a1a1a] text-xs uppercase tracking-wide">{r.feature}</td>
                    <td className="px-5 py-4 text-gray-700 font-medium">{r.speaklife}</td>
                    <td className="px-5 py-4 text-gray-400">{r.youversion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Reading vs Declaring — What's the Difference?</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <div className="bg-[#f7f8f7] rounded-2xl p-7 border border-gray-100">
              <h3 className="font-bold text-[#1a1a1a] text-sm uppercase tracking-wide mb-3">YouVersion Approach</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">Open the Bible, follow a reading plan, highlight verses, take notes. Excellent for study, knowledge, and understanding context. 500M+ users worldwide.</p>
              <p className="text-gray-400 text-xs">Best for: Bible study, reading plans, devotional content</p>
            </div>
            <div className="bg-[#0a1f1f] rounded-2xl p-7 border-t-2 border-t-[#c9a84c]">
              <h3 className="font-bold text-white text-sm uppercase tracking-wide mb-3">SpeakLife Approach</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-3">Open the app, speak declarations out loud over your day. Romans 10:17 — "faith comes by hearing." When you hear your own voice declare Scripture, it activates differently than reading it silently.</p>
              <p className="text-[#c9a84c] text-xs">Best for: Daily declarations, identity, anxiety, confidence</p>
            </div>
          </div>

          <div className="bg-[#f0f4ff] rounded-2xl p-7 mb-14">
            <h3 className="font-bold text-[#1a1a1a] mb-3">Our Recommendation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Use both. YouVersion for reading and study. SpeakLife for daily declaration. They're not competing — they're complementary. Think of YouVersion as your study Bible and SpeakLife as your daily spoken confession. Many users do YouVersion reading plans in the evening and SpeakLife declarations in the morning.</p>
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
            See also: <Link href="/speaklife-vs-hallow" className="underline hover:text-[#0a1f1f]">SpeakLife vs Hallow</Link> · <Link href="/best-christian-affirmation-app" className="underline hover:text-[#0a1f1f]">Best Christian affirmation app</Link> · <Link href="/declarations" className="underline hover:text-[#0a1f1f]">What are declarations?</Link>
          </div>
        </section>

        <section className="hero-water py-20 px-6 text-center relative">
          <div className="relative z-10">
            <h2 className="text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, textTransform: "uppercase" }}>Add Declarations to Your Practice</h2>
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
