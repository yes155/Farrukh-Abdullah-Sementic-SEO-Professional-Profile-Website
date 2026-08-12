import type { Metadata } from "next";
import LocalSeoPageClient from "./LocalSeoPageClient";

export const metadata: Metadata = {
  title: "Local SEO Services | Map Pack & GBP",
  description:
    "Local SEO services — map pack visibility, Google Business Profile optimization, service-area landing pages, nested local schema, and call tracking. For service businesses in Austin, Chicago, Houston, Dallas, Phoenix, Miami, Denver, Seattle, and San Francisco.",
  keywords:
    "local seo services, local seo for plumbers, local seo for dentists, local seo for roofers, map pack optimization, google business profile optimization, service area landing pages, local lead generation",
  alternates: {
    canonical: "/services/local-seo",
  },
  openGraph: {
    title: "Local SEO Services | Farrukh Abdullah",
    description:
      "Design and build localized search systems focused on local map pack visibility, localized landing page architecture, Google Business Profile optimization, nested local schema, and call/lead tracking.",
    url: "/services/local-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Services | Farrukh Abdullah",
    description: "Design and build localized search systems focused on local map pack visibility, localized landing page architecture, Google Business Profile optimization, nested local schema, and call/lead tracking.",
  },
};

export default function Page() {
  return <LocalSeoPageClient />;
}
