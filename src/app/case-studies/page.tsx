import type { Metadata } from "next";
import CaseStudiesIndexClient from "./CaseStudiesIndexClient";

export const metadata: Metadata = {
  title: "SEO Case Studies",
  description:
    "Real client case studies across semantic SEO, AI-search alignment, and localized local SEO systems — from an Austin coffee roaster to a YC-backed AI startup.",
  keywords:
    "seo case studies, local seo case study, semantic seo results, map pack results, local seo systems, ai search optimization case study, law firm seo, hotel seo, ecommerce seo",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | Farrukh Abdullah",
    description:
      "Real results from semantic SEO and local SEO engagements across coffee, law, hospitality, merchandising, fitness, and AI-native SaaS — with named clients and measured outcomes.",
    url: "/case-studies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Farrukh Abdullah",
    description: "Real results from semantic SEO and local SEO engagements across coffee, law, hospitality, merchandising, fitness, and AI-native SaaS.",
  },
};

export default function Page() {
  return <CaseStudiesIndexClient />;
}
