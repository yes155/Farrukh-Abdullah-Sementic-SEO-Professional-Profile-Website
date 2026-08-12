import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Semantic SEO & GEO Consultant",
  description:
    "Semantic SEO & local SEO consultant — entity SEO, topical authority, map pack systems, and GEO. Rank in Google AI Overviews, ChatGPT Search, and Perplexity across Austin, Chicago, Houston, Dallas, Phoenix, Miami, Denver, Seattle, and San Francisco.",
  keywords:
    "semantic seo consultant, generative engine optimization, local seo for plumbers, local seo for dentists, entity SEO, AI search optimization, map pack optimization, GEO consultant",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Semantic SEO & Generative Engine Optimization (GEO) Consultant | Farrukh Abdullah",
    description:
      "Semantic SEO & local SEO consultant — entity SEO, topical authority, map pack systems, and GEO. Get cited by Google AI Overviews, ChatGPT Search, and Perplexity.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Semantic SEO & Generative Engine Optimization (GEO) Consultant | Farrukh Abdullah",
    description: "Semantic SEO & local SEO consultant — entity SEO, topical authority, map pack systems, and GEO. Get cited by Google AI Overviews, ChatGPT Search, and Perplexity.",
  },
};

export default function Page() {
  return <HomePageClient />;
}
