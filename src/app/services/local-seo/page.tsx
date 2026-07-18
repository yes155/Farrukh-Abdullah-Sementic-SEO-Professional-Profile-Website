import type { Metadata } from "next";
import LocalSeoPageClient from "./LocalSeoPageClient";

export const metadata: Metadata = {
  title: "Local SEO Services | Map Pack Visibility & GBP Optimization",
  description:
    "Design and build localized search systems focused on local map pack visibility, localized landing page architecture, Google Business Profile optimization, nested local schema, and call/lead tracking.",
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
