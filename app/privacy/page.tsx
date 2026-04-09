import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — SpeakLife",
  description: "SpeakLife privacy policy. We are committed to protecting your privacy.",
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="pt-16" style={{ fontFamily: "'Inter', sans-serif" }}>

        <section className="hero-water py-24 px-6 text-center relative">
          <div className="relative z-10">
            <h1
              className="text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 900, letterSpacing: "0.05em", textTransform: "uppercase" }}
            >
              PRIVACY<br />POLICY
            </h1>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
        </section>

        <section className="py-20 px-6 max-w-3xl mx-auto">
          <p className="text-gray-400 text-sm mb-10">Last Updated — January 17, 2024</p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Welcome to SpeakLife ("we", "us", "our"). We are committed to protecting your privacy. This Privacy Policy explains how we handle and treat your data when you use SpeakLife: Bible Affirmations ("App").
          </p>

          {[
            {
              title: "1. Information We Collect",
              body: "As a policy, our App does not collect, store, or process any personal data from our users. We believe in your right to privacy and have designed our App accordingly."
            },
            {
              title: "2. Data Usage",
              body: "Since we do not collect any personal data, there is no usage of such data."
            },
            {
              title: "3. Third-Party Services",
              body: "Our App does integrate third-party services that may collect information about you to help with marketing conversions. These services have their own privacy policies governing the use of such information."
            },
            {
              title: "4. Children's Privacy",
              body: "Our App is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13."
            },
            {
              title: "5. Security",
              body: "We value your trust in using SpeakLife. While we strive to use commercially acceptable means of protecting your information, we cannot guarantee absolute security."
            },
            {
              title: "6. Changes to Our Privacy Policy",
              body: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date."
            },
            {
              title: "7. Contact Us",
              body: "If you have any questions about this Privacy Policy, please contact us at support@speaklife.app."
            },
          ].map(section => (
            <div key={section.title} className="mb-8">
              <h2 className="font-bold text-[#1a1a1a] text-lg mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </section>

      </main>
      <Footer />
    </>
  );
}
