import type { Metadata } from "next";
import { getInsightsArticles } from "@/sanity/posts";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Semantic SEO & Local SEO Consultant",
  description:
    "Independent SEO consulting with Farrukh Abdullah: content architecture, local business information, implementation, and search visibility measurement.",
  keywords:
    "semantic seo consultant, generative engine optimization, national local seo consultant, local seo for plumbers, local seo for dentists, local seo for hvac, local seo for roofers, entity SEO, AI search optimization, map pack optimization, GEO consultant",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Semantic SEO & Generative Engine Optimization (GEO) Consultant | Farrukh Abdullah",
    description:
      "Independent SEO consulting with Farrukh Abdullah: content architecture, local business information, implementation, and search visibility measurement.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Semantic SEO & Generative Engine Optimization (GEO) Consultant | Farrukh Abdullah",
    description: "Independent SEO consulting: content planning, local search, implementation, and visibility measurement.",
  },
};

export default async function Page() {
  const articles = (await getInsightsArticles()).filter(a => !a.noIndex).slice(0, 8);
  return <HomePageClient articles={articles} />;
}
