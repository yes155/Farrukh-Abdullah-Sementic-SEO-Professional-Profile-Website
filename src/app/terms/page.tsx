import type { Metadata } from "next";
import { TermsOfAdvisoryContent } from "./TermsOfAdvisoryContent";

export const metadata: Metadata = {
  title: "Terms of Advisory",
  description:
    "Terms of Advisory for Farrukh Abdullah Advisory — scope of work, engagement terms, deliverables, payment, confidentiality, and liability for SEO consulting engagements.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Advisory | Farrukh Abdullah",
    description:
      "Scope of work, engagement terms, deliverables, payment, confidentiality, and liability for SEO consulting engagements with Farrukh Abdullah Advisory.",
    url: "/terms",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Advisory | Farrukh Abdullah",
    description:
      "Scope of work, engagement terms, deliverables, payment, confidentiality, and liability for SEO consulting engagements with Farrukh Abdullah Advisory.",
  },
};

export default function Page() {
  return <TermsOfAdvisoryContent />;
}
