import Image from "next/image";

/**
 * A real app screenshot in a device frame.
 *
 * Sources are 1290x2796 iPhone captures, cropped to remove the iOS status bar
 * and home indicator, then served as WebP at 2x the
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
  // Aspect of the processed assets: 600 x 1201, i.e. the iPhone screen with
  // the iOS status bar and home indicator cropped off.
  const height = Math.round((width * 1201) / 600);

  return (
    <div
      className={`phone-shadow relative shrink-0 overflow-hidden rounded-[13%/6%] border-[6px] border-[#12141c] bg-[#12141c] ${className}`}
      style={{ width }}
    >
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
  );
}
