import type { Metadata } from "next";
import SemanticSeoPageClient from "./SemanticSeoPageClient";

export const metadata: Metadata = {
  title: "Semantic SEO Consulting",
  description:
    "Turn scattered web pages into a fully-connected topical authority structure that search engines can't ignore, mapped to verified knowledge graphs and Wikidata coordinates.",
  alternates: {
    canonical: "/services/semantic-seo",
  },
  openGraph: {
    title: "Semantic SEO & Topical Authority Consulting | Farrukh Abdullah",
    description:
      "Turn scattered web pages into a fully-connected topical authority structure that search engines can't ignore, mapped to verified knowledge graphs and Wikidata coordinates.",
    url: "/services/semantic-seo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Semantic SEO & Topical Authority Consulting | Farrukh Abdullah",
    description: "Turn scattered web pages into a fully-connected topical authority structure that search engines can't ignore, mapped to verified knowledge graphs and Wikidata coordinates.",
  },
};

export default function Page() {
  return <SemanticSeoPageClient />;
}
