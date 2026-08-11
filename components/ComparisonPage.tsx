import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";
import CompareCards from "@/components/CompareCards";

/**
 * Shared layout for the /speaklife-vs-* comparison pages.
 *
 * Every competitor figure passed in here must be verified against that app's
 * own App Store listing or help centre before publishing — a wrong price or
 * rating on a competitor page is the kind of claim that draws a complaint.
 * The site previously listed Abide at $60/yr (actually $39.99) and 4.7 stars
 * (actually 4.9), which is exactly the mistake this note exists to prevent.
 */

export type ComparisonData = {
  competitor: string;
  headline: string;
  subhead: string;
  verdict: React.ReactNode;
  rows: string[][];
  usTitle: string;
  usBody: string;
  themTitle: string;
  themBody: string;
  coreDiffHeading: string;
  chooseUs: string[];
  chooseThem: string[];
  bothHeading: string;
  bothBody: string;
  ctaSub: string;
};

export default function ComparisonPage({ data }: { data: ComparisonData }) {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-water grain relative px-6 py-24 text-center">
          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">Comparison</div>
            <h1 className="serif-display mb-6 text-4xl font-black leading-tight text-white md:text-5xl">
              {data.headline}
            </h1>
            <p className="text-lg text-white/70">{data.subhead}</p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-14 rounded-r-2xl border-l-4 border-[#1A264D] bg-[#f0f4ff] p-6">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#1A264D]">
                Quick Verdict
              </div>
              <p className="font-medium text-[#1A264D]">{data.verdict}</p>
            </div>

            <h2 className="mb-6 text-3xl font-black text-[#1A264D]">Full Comparison</h2>

            {/* Desktop: a real table. Mobile: stacked cards.
                A 3-column table at 390px overflows its container by ~70px, so
                the competitor column sat off-screen with no scroll affordance
                — on a phone the comparison simply looked missing, which is
                most of the traffic on a page whose entire job is comparing. */}
            <div className="mb-16 hidden overflow-x-auto rounded-2xl border border-gray-200 md:block">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1A264D] text-white">
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left font-semibold text-gold">SpeakLife</th>
                    <th className="px-6 py-4 text-left font-semibold">{data.competitor}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.rows.map(([feature, us, them], i) => (
                    <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 font-medium text-gray-700">{feature}</td>
                      <td className="px-6 py-4 font-semibold text-[#1A264D]">{us}</td>
                      <td className="px-6 py-4 text-gray-500">{them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mb-16">
              <CompareCards headers={["Feature", "SpeakLife", data.competitor]} rows={data.rows} />
            </div>

            <h2 className="mb-6 text-3xl font-black text-[#1A264D]">{data.coreDiffHeading}</h2>
            <div className="mb-14 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-[#1A264D] p-8 text-white">
                <div className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">
                  {data.usTitle}
                </div>
                <p className="leading-relaxed text-white/80">{data.usBody}</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
                <div className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-400">
                  {data.themTitle}
                </div>
                <p className="leading-relaxed text-gray-600">{data.themBody}</p>
              </div>
            </div>

            <div className="mb-16 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-bold text-[#1A264D]">Choose SpeakLife If…</h3>
                <ul className="space-y-3">
                  {data.chooseUs.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-0.5 font-bold text-gold">✓</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-[#1A264D]">
                  Choose {data.competitor} If…
                </h3>
                <ul className="space-y-3">
                  {data.chooseThem.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-0.5 font-bold text-gray-400">→</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-[#f0f4ff] p-8 text-center">
              <h3 className="mb-3 text-xl font-bold text-[#1A264D]">{data.bothHeading}</h3>
              <p className="text-gray-600">{data.bothBody}</p>
            </div>
          </div>
        </section>

        <section className="hero-water grain relative px-6 py-20 text-center">
          <div className="relative z-10">
            <h2 className="serif-display mb-4 text-3xl font-black text-white">Try SpeakLife Free</h2>
            <p className="mb-8 text-white/70">{data.ctaSub}</p>
            <div className="flex justify-center">
              <DownloadButton position="web-final" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
