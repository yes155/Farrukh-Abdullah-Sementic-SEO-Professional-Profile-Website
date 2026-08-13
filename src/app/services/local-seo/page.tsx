import type { Metadata } from "next";
import LocalSeoPageClient from "./LocalSeoPageClient";

export const metadata: Metadata = {
  title: "Local SEO Services | Map Pack & GBP",
  description:
    "National local SEO services for service businesses anywhere in the United States — Google Business Profile optimization, local schema, service-area landing pages, citation building, and call tracking. For niches including dentists, plumbers, HVAC, roofers, and salons nationwide.",
  keywords:
    "national local seo services, local seo for plumbers, local seo for dentists, local seo for hvac, local seo for roofers, local seo for salons, map pack optimization, google business profile optimization, service area landing pages, local lead generation",
  alternates: {
    canonical: "/services/local-seo",
  },
  openGraph: {
    title: "Local SEO Services | Farrukh Abdullah",
    description:
      "Local SEO systems for service businesses anywhere in the United States — Google Business Profile optimization, local schema, service-area landing pages, citation building, and call tracking.",
    url: "/services/local-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Services | Farrukh Abdullah",
    description: "Local SEO systems for service businesses anywhere in the United States — Google Business Profile optimization, local schema, service-area landing pages, citation building, and call tracking.",
  },
};

export default function Page() {
  return <LocalSeoPageClient />;
}
