/**
 * Mobile rendering for any comparison table.
 *
 * A 3-column table overflows a 390px viewport by ~70px, and a 5- or 6-column
 * one is far worse. The container scrolls, but there's no affordance saying
 * so, so on a phone the competitor columns simply appear to be missing — on
 * pages whose entire purpose is comparison, and where most of the traffic is.
 *
 * Pair with `hidden md:block` on the table itself.
 *
 * `headers[0]` labels the row key (e.g. "Feature" or "App"); each row's first
 * cell becomes the card title and the rest are labelled by headers[1..].
 * Column 1 is treated as SpeakLife and highlighted.
 */
export default function CompareCards({
  headers,
  rows,
  highlightFirst = true,
}: {
  headers: string[];
  rows: string[][];
  /** False for tables that list one row per app rather than us-vs-them. */
  highlightFirst?: boolean;
}) {
  return (
    <div className="space-y-3 md:hidden">
      {rows.map((row) => (
        <div key={row[0]} className="rounded-2xl border border-gray-200 bg-white p-4">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
            {row[0]}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {row.slice(1).map((cell, i) => {
              const isUs = highlightFirst && i === 0;
              return (
                <div
                  key={headers[i + 1] ?? i}
                  className={`rounded-xl p-3 ${isUs ? "bg-[#f0f4ff]" : "bg-gray-50"}`}
                >
                  <div
                    className={`mb-1 text-[10px] font-bold uppercase tracking-wide ${
                      isUs ? "text-[#1A264D]/50" : "text-gray-400"
                    }`}
                  >
                    {headers[i + 1]}
                  </div>
                  <div
                    className={`text-sm leading-snug ${
                      isUs ? "font-semibold text-[#1A264D]" : "text-gray-500"
                    }`}
                  >
                    {cell}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
