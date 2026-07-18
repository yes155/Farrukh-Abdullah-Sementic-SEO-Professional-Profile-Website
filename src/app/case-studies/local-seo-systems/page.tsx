import type { Metadata } from "next";
import LocalSeoSystemsPageClient from "./LocalSeoSystemsPageClient";

export const metadata: Metadata = {
  title: "Local SEO Systems Case Study | US Service Niches",
  description:
    "How a localized SEO system delivered rapid map pack traction and 1,200+ inbound calls for new brand entrants in hyper-competitive local service niches.",
  alternates: {
    canonical: "/case-studies/local-seo-systems",
  },
  openGraph: {
    title: "Local SEO Systems Case Study | Farrukh Abdullah",
    description:
      "How a localized SEO system delivered rapid map pack traction and 1,200+ inbound calls for new brand entrants in hyper-competitive local service niches.",
    url: "/case-studies/local-seo-systems",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Systems Case Study | Farrukh Abdullah",
    description: "How a localized SEO system delivered rapid map pack traction and 1,200+ inbound calls for new brand entrants in hyper-competitive local service niches.",
  },
};

export default function Page() {
  return <LocalSeoSystemsPageClient />;
}
