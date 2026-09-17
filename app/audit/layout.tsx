import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "The Storm Audit | SpeakLife",
  description:
    "Eight questions, two minutes. Name the storm you are standing in, see the three gaps keeping it loud, and get a plan built on what God says about it.",
  alternates: { canonical: "https://www.speaklifebibleaffirmations.com/audit" },
  openGraph: {
    title: "The Storm Audit",
    description: "Eight questions. Name your storm and get a plan built on what God says about it.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1226",
};

/** Dark ground for the whole audit, matching the app's onboarding. */
export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="audit-ground min-h-[100dvh] text-white">
      {children}
    </div>
  );
}
