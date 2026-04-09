import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SpeakLife FAQ — Everything You Need to Know",
  description: "All your questions about SpeakLife answered — pricing, features, how declarations work, and how it compares to other faith apps.",
};

const faqs = [
  { q: "What is SpeakLife?", a: "SpeakLife is a Christian iOS app that delivers Scripture-based declarations for you to speak aloud every morning. It covers 6 life categories: Anxiety, Joy, Destiny, Wisdom, Identity, and Confidence. Built on Romans 10:17 — faith comes by hearing." },
  { q: "Who is SpeakLife for?", a: "Designed with Christian women aged 25–40 in mind. But men use and love it too. If you want to speak God's Word over your life daily, SpeakLife is for you." },
  { q: "What are Christian declarations?", a: "Declarations are Scripture-based statements you speak aloud over your life. Rooted in Proverbs 18:21 ('death and life are in the power of the tongue') and Romans 10:17 ('faith comes by hearing'). When you speak God's Word, faith activates." },
  { q: "Are declarations biblical?", a: "Yes. Proverbs 18:21, Romans 10:17, Joshua 1:8, and Hebrews 10:23 all support speaking God's Word. This is not positive thinking — it's faith in action." },
  { q: "Is speaking declarations the same as manifestation?", a: "No. New Age manifestation says you create your own reality. Christian declarations agree with what God has already declared in Scripture. The authority is His Word, not your belief in yourself." },
  { q: "Is SpeakLife free?", a: "Free to download. 3-day free trial on the annual plan. After trial: $10/month or $50/year." },
  { q: "How much does SpeakLife cost?", a: "$10/month or $50/year. Annual works out to less than $5/month — the cost of one coffee." },
  { q: "What categories does SpeakLife cover?", a: "Anxiety, Joy, Destiny, Wisdom, Identity, Confidence — every major area of your life covered by God's Word." },
  { q: "How long does it take each day?", a: "2–5 minutes. Designed to fit into a morning routine, not consume it." },
  { q: "Can I create my own declarations?", a: "Yes. SpeakLife lets you write your own personalized declarations on top of the built-in library." },
  { q: "Does SpeakLife have audio?", a: "Yes — audio devotionals you can listen to or speak along with." },
  { q: "Is SpeakLife on Android?", a: "iOS only currently." },
  { q: "How is SpeakLife different from YouVersion?", a: "YouVersion is for reading the Bible. SpeakLife is for speaking it. Both valuable — different practices. Many people use both." },
  { q: "How is SpeakLife different from Hallow?", a: "Hallow is Catholic-rooted and focused on guided prayer and meditation. SpeakLife is non-denominational and focused on active Scripture declarations. SpeakLife is also $20/year cheaper on annual." },
  { q: "What is SpeakLife's App Store rating?", a: "4.9 stars." },
];

export default function FAQ() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-bg py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-[#c9a84c] text-sm font-bold uppercase tracking-widest mb-4">FAQ</div>
            <h1 className="text-5xl font-black text-white mb-4">Everything You Need to Know</h1>
            <p className="text-white/70 text-lg">All your SpeakLife questions, answered.</p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-gray-100">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-7">
                  <h3 className="font-bold text-[#1a2744] text-lg mb-3">{faq.q}</h3>
                  <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-[#1a2744] text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Start?</h2>
          <p className="text-white/70 mb-8">Download SpeakLife free. 3-day trial on annual plan.</p>
          <a href="https://apps.apple.com/us/app/speaklife/id1617492998" className="bg-[#c9a84c] text-[#1a2744] font-black text-lg px-10 py-4 rounded-full hover:bg-[#e8c96a] transition-all">
            Download Free on iOS →
          </a>
        </section>
      </main>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      })}} />
    </>
  );
}
