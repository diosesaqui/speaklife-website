import type { Metadata } from "next";
import AuditResult from "@/components/audit/AuditResult";

// Personal result, rendered from session state. Nothing here to index.
export const metadata: Metadata = {
  title: "Your Storm Audit | SpeakLife",
  robots: { index: false, follow: false },
};

export default function AuditResultPage() {
  return <AuditResult />;
}
