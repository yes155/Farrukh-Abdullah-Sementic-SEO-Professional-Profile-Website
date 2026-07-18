import type { Metadata } from "next";
import CaseStudiesIndexClient from "./CaseStudiesIndexClient";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from semantic SEO and local SEO engagements, including a fintech organic lead-growth turnaround and a localized SEO system generating 1,200+ inbound calls.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | Farrukh Abdullah",
    description:
      "Real results from semantic SEO and local SEO engagements, including a fintech organic lead-growth turnaround and a localized SEO system generating 1,200+ inbound calls.",
    url: "/case-studies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Farrukh Abdullah",
    description: "Real results from semantic SEO and local SEO engagements, including a fintech organic lead-growth turnaround and a localized SEO system generating 1,200+ inbound calls.",
  },
};

export default function Page() {
  return <CaseStudiesIndexClient />;
}
