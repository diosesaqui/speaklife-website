import Image from "next/image";

/**
 * A real app screenshot in a device frame.
 *
 * Sources are full, uncropped 1290x2796 iPhone 15 Pro Max captures, served as
 * WebP at 2x the
 * largest rendered size and given explicit width/height so they reserve their
 * space before loading — an unsized hero image is the classic CLS failure, and
 * CLS above 0.1 is a ranking and conversion problem.
 *
 * `priority` is set only on the hero screen, since that's the LCP element.
 */
export default function AppScreen({
  src,
  alt,
  width = 280,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  width?: number;
  priority?: boolean;
  className?: string;
}) {
  // True iPhone 15 Pro Max aspect — 1290 x 2796, uncropped. An earlier pass
  // cropped the status bar and home indicator, which pulled the ratio to
  // 2.00 and made the frame render too wide for its height: it stopped
  // reading as a phone. Keep the source aspect exactly.
  const height = Math.round((width * 2796) / 1290);

  return (
    <div
      className={`phone-frame relative shrink-0 ${className}`}
      style={{ width }}
    >
      {/* Titanium edge: a hairline highlight outside the black band, which is
          what makes a rendered device read as hardware rather than a rounded
          rectangle with a border. */}
      <div className="relative overflow-hidden rounded-[13.5%/6.2%] bg-gradient-to-b from-[#4a4d55] via-[#1b1d22] to-[#3a3d44] p-[2px]">
        <div className="overflow-hidden rounded-[13%/6%] bg-[#0a0b0e] p-[5px]">
          <div className="overflow-hidden rounded-[11.5%/5.4%] bg-black">
      <Image
        src={src}
        alt={alt}
        width={width * 2}
        height={height * 2}
        priority={priority}
        sizes={`${width}px`}
        className="block h-auto w-full"
      />
          </div>
        </div>
      </div>
    </div>
  );
}
