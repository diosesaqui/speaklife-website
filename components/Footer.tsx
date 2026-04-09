import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="max-w-xs">
            <div className="text-2xl font-bold text-white mb-3">Speak<span className="text-[#c9a84c]">Life</span></div>
            <p className="text-sm leading-relaxed">Speak God's Word over your life every morning. 2 minutes. Scripture-based. Life-changing.</p>
            <a
              href="https://apps.apple.com/us/app/speaklife/id1617492998"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-[#c9a84c] text-[#1a2744] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#e8c96a] transition-colors"
            >
              Download Free on iOS →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <div className="text-white font-semibold mb-4">Pages</div>
              <div className="flex flex-col gap-3">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <Link href="/best-christian-affirmation-app" className="hover:text-white transition-colors">Best Affirmation App</Link>
                <Link href="/declarations" className="hover:text-white transition-colors">Declarations</Link>
                <Link href="/morning-devotional-app-women" className="hover:text-white transition-colors">Morning Devotional</Link>
              </div>
            </div>
            <div>
              <div className="text-white font-semibold mb-4">More</div>
              <div className="flex flex-col gap-3">
                <Link href="/speaklife-vs-hallow" className="hover:text-white transition-colors">SpeakLife vs Hallow</Link>
                <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
                <a href="https://apps.apple.com/us/app/speaklife/id1617492998" className="hover:text-white transition-colors">App Store</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 SpeakLife. All rights reserved.</p>
          <p>4.9 ⭐ on the App Store · iOS only</p>
        </div>
      </div>
    </footer>
  );
}
