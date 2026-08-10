import { RATING, RATING_COUNT_LABEL } from "@/lib/appstore";

/**
 * Real rating, real count, adjacent to the CTA.
 *
 * Spiegel Research Center: products with reviews show ~270% higher purchase
 * likelihood. Above-fold social proof is worth ~+12%.
 *
 * None of Hallow, Glorify, Calm, Headspace, Abide, Pray.com or YouVersion
 * puts a rating + count next to their primary CTA. This is the open lane.
 */
export default function StarRating({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const text = tone === "light" ? "text-white/75" : "text-[#1A264D]/65";
  const strong = tone === "light" ? "text-white" : "text-[#1A264D]";

  return (
    <div className={`flex items-center justify-center gap-2.5 text-sm ${text} ${className}`}>
      <span className="flex gap-0.5 text-gold" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
          </svg>
        ))}
      </span>
      <span>
        <strong className={`font-semibold ${strong}`}>{RATING}</strong>
        <span className="mx-1.5 opacity-40">·</span>
        {RATING_COUNT_LABEL} ratings on the App Store
      </span>
    </div>
  );
}
