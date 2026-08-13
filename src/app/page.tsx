import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Semantic SEO & GEO Consultant",
  description:
    "Semantic SEO & local SEO consultant helping service businesses across the United States get found — and cited — by Google and AI search engines. Entity SEO, topical authority, map pack systems, and GEO for niches including dentists, plumbers, HVAC, and roofing companies nationwide.",
  keywords:
    "semantic seo consultant, generative engine optimization, national local seo consultant, local seo for plumbers, local seo for dentists, local seo for hvac, local seo for roofers, entity SEO, AI search optimization, map pack optimization, GEO consultant",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Semantic SEO & Generative Engine Optimization (GEO) Consultant | Farrukh Abdullah",
    description:
      "Semantic SEO & local SEO consultant helping service businesses across the United States get found — and cited — by Google and AI search engines. Entity SEO, topical authority, map pack systems, and GEO for niches including dentists, plumbers, HVAC, and roofing companies nationwide.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Semantic SEO & Generative Engine Optimization (GEO) Consultant | Farrukh Abdullah",
    description: "Semantic SEO & local SEO consultant helping service businesses across the United States get found — and cited — by Google and AI search engines. Entity SEO, topical authority, map pack systems, and GEO nationwide.",
  },
};

export default function Page() {
  return <HomePageClient />;
}
