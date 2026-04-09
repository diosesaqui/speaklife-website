import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SpeakLife vs Hallow: Which Christian App Is Right for You? (2026)",
  description: "SpeakLife vs Hallow — honest comparison. Declarations vs prayer/meditation. Which one fits your faith practice? Full breakdown inside.",
};

const rows = [
  ["Core practice", "Scripture declarations (you speak)", "Guided prayer & meditation"],
  ["Faith tradition", "Non-denominational / Protestant", "Catholic-rooted"],
  ["Daily time", "2–5 minutes", "10–20 minutes"],
  ["Active or passive", "Active — you speak", "Passive — you listen"],
  ["Scripture declarations", "✅ Core feature", "❌"],
  ["Sleep content", "❌", "✅"],
  ["Celebrity voices", "❌", "✅ Mark Wahlberg, etc."],
  ["Monthly price", "$10/mo", "$10/mo"],
  ["Annual price", "$50/yr ✅ cheaper", "$70/yr"],
  ["Free trial", "3-day (annual)", "7-day"],
  ["App Store rating", "⭐ 4.9", "⭐ 4.8"],
  ["Platform", "iOS", "iOS & Android"],
];

export default function VsHallow() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-bg py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-[#c9a84c] text-sm font-bold uppercase tracking-widest mb-4">Comparison</div>
            <h1 className="text-5xl font-black text-white mb-6 leading-tight">SpeakLife vs Hallow:<br />Which Is Right for You?</h1>
            <p className="text-white/70 text-lg">An honest side-by-side so you can choose the one that fits your practice.</p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Verdict */}
            <div className="bg-[#f0f4ff] border-l-4 border-[#1a2744] p-6 rounded-r-2xl mb-14">
              <div className="text-[#1a2744] font-bold text-xs uppercase tracking-widest mb-2">Quick Verdict</div>
              <p className="text-[#1a2744] font-medium">
                <strong>Choose SpeakLife</strong> if you want to actively speak Scripture daily. <strong>Choose Hallow</strong> if you prefer guided Catholic prayer or sleep content. Many Christians use both — they serve completely different spiritual practices.
              </p>
            </div>

            {/* Comparison table */}
            <h2 className="text-3xl font-black text-[#1a2744] mb-6">Full Comparison</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-16">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1a2744] text-white">
                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                    <th className="text-left px-6 py-4 font-semibold text-[#c9a84c]">SpeakLife</th>
                    <th className="text-left px-6 py-4 font-semibold">Hallow</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([feature, speaklife, hallow], i) => (
                    <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 font-medium text-gray-700">{feature}</td>
                      <td className="px-6 py-4 font-semibold text-[#1a2744]">{speaklife}</td>
                      <td className="px-6 py-4 text-gray-500">{hallow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Core difference */}
            <h2 className="text-3xl font-black text-[#1a2744] mb-6">The Core Difference: Active vs. Passive</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-14">
              <div className="bg-[#1a2744] rounded-2xl p-8 text-white">
                <div className="text-[#c9a84c] font-bold text-sm uppercase tracking-widest mb-4">SpeakLife — Active</div>
                <p className="text-white/80 leading-relaxed">In SpeakLife, <strong className="text-white">you are the voice</strong>. You speak God's Word aloud. Romans 10:17: "faith comes by hearing" — when you speak and hear your own voice declaring Scripture, something activates that passive listening doesn't reach.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-4">Hallow — Passive</div>
                <p className="text-gray-600 leading-relaxed">In Hallow, someone else is the voice. You listen to guided prayer, meditation, or sleep sessions. Beautiful and legitimate — but contemplative and receptive rather than active and declarative.</p>
              </div>
            </div>

            {/* Who should choose */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div>
                <h3 className="text-xl font-bold text-[#1a2744] mb-4">Choose SpeakLife If...</h3>
                <ul className="space-y-3">
                  {["You want to speak Scripture over your life daily","You're Protestant or non-denominational","You have 2–5 minutes, not 20","You deal with anxiety, identity struggles, or lack of confidence","You want an active, not passive, faith practice"].map(item => (
                    <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                      <span className="text-[#c9a84c] font-bold mt-0.5">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1a2744] mb-4">Choose Hallow If...</h3>
                <ul className="space-y-3">
                  {["You're Catholic or drawn to Catholic prayer forms","You want guided sleep and bedtime content","You enjoy celebrity-narrated prayer sessions","You have 15–20 minutes for a longer practice","You prefer listening over speaking"].map(item => (
                    <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                      <span className="text-gray-400 font-bold mt-0.5">→</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#f0f4ff] rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-[#1a2744] mb-3">Can You Use Both?</h3>
              <p className="text-gray-600">Absolutely. Many Christians use SpeakLife for 3-minute morning declarations and Hallow for evening prayer or sleep. They're complementary — different moments, different practices.</p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-[#1a2744] text-center">
          <h2 className="text-3xl font-black text-white mb-4">Try SpeakLife Free</h2>
          <p className="text-white/70 mb-8">3-day free trial on annual plan. $20/yr cheaper than Hallow.</p>
          <a href="https://apps.apple.com/us/app/speaklife/id1617492998" className="bg-[#c9a84c] text-[#1a2744] font-black text-lg px-10 py-4 rounded-full hover:bg-[#e8c96a] transition-all">
            Download Free on iOS →
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
