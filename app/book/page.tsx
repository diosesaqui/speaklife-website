import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";

// Only the title and link are confirmed. Do not add a price, page count,
// rating or blurb here without checking the Apple Books listing first.
const BOOK_TITLE = "100 Days of Power Declarations";
const BOOK_URL =
  "https://books.apple.com/us/book/100-days-of-power-declarations/id1616288315";

export const metadata: Metadata = {
  title: `${BOOK_TITLE} | The SpeakLife Book`,
  description:
    "100 days of speaking God's Word out loud over your life. The book from the founder of SpeakLife, on Apple Books.",
  alternates: { canonical: "/book" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: BOOK_TITLE,
  url: BOOK_URL,
  bookFormat: "https://schema.org/EBook",
};

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        <section className="hero-water relative px-6 py-24">
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:items-center">
            {/* Typographic cover. Swap for the real cover art when it is in /public. */}
            <div
              aria-hidden="true"
              className="flex aspect-[2/3] w-48 shrink-0 flex-col justify-between rounded-md border border-[#c9a84c]/40 bg-[#1A264D] p-5 shadow-2xl md:w-64"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c9a84c]">SpeakLife</span>
              <span className="serif-display text-[19px] font-black uppercase leading-tight text-white md:text-[24px]">
                100 Days of Power Declarations
              </span>
              <span className="h-px w-12 bg-[#c9a84c]" />
            </div>

            <div className="text-center md:text-left">
              <p className="mb-4 text-xs uppercase tracking-widest text-white/50">The SpeakLife Book</p>
              <h1
                className="serif-display mb-5 text-white"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1 }}
              >
                {BOOK_TITLE}
              </h1>
              <p className="mx-auto mb-8 max-w-md text-base text-white/70 md:mx-0">
                One hundred days of speaking God&rsquo;s Word out loud over your life. Written by the founder of SpeakLife.
              </p>
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-full bg-gold px-8 text-base font-semibold tracking-tight text-[#1A264D] transition-all duration-200 hover:bg-gold-light hover:shadow-glow active:scale-[0.98]"
              >
                Get it on Apple Books
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="serif-display mb-4 text-2xl font-bold text-[#1a1a1a]">Keep it going every morning</h2>
          <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-gray-500">
            The SpeakLife app gives you fresh, Scripture-rooted declarations every day, so the habit you build in the book never stops.
          </p>
          <DownloadButton position="web-final" tone="dark" />
        </section>
      </main>
      <Footer />
    </>
  );
}
