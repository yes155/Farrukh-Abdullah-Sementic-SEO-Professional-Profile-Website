import type { Metadata } from "next";
import CaseStudiesIndexClient from "./CaseStudiesIndexClient";

export const metadata: Metadata = {
  title: "SEO Case Studies",
  description:
    "Verified SEO case studies: semantic SEO entity structuring, AI-search alignment, and a localized SEO system that generated 1,200+ inbound calls and 340% ROI across US service niches.",
  keywords:
    "seo case studies, local seo case study, semantic seo results, map pack results, local seo systems, ai search optimization case study",
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
