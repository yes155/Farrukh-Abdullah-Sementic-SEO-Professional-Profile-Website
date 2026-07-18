import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Semantic SEO & Generative Engine Optimization (GEO) Consultant",
  description:
    "Semantic SEO specialist helping brands get cited by Google AI Overviews, ChatGPT Search, and Perplexity. Entity SEO, topical authority, and local SEO systems for growing businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Semantic SEO & Generative Engine Optimization (GEO) Consultant | Farrukh Abdullah",
    description:
      "Semantic SEO specialist helping brands get cited by Google AI Overviews, ChatGPT Search, and Perplexity. Entity SEO, topical authority, and local SEO systems for growing businesses.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Semantic SEO & Generative Engine Optimization (GEO) Consultant | Farrukh Abdullah",
    description: "Semantic SEO specialist helping brands get cited by Google AI Overviews, ChatGPT Search, and Perplexity. Entity SEO, topical authority, and local SEO systems for growing businesses.",
  },
};

export default function Page() {
  return <HomePageClient />;
}
