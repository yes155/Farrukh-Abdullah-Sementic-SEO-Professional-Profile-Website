import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Farrukh Abdullah, a Faisalabad-based SEO consultant. Explore his background, training, research deposit, published writing, and public implementation work.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Farrukh Abdullah | Semantic SEO & GEO Strategist",
    description:
      "Meet Farrukh Abdullah, a Faisalabad-based SEO consultant. Explore his background, training, research deposit, published writing, and public implementation work.",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Farrukh Abdullah | Semantic SEO & GEO Strategist",
    description: "Meet Farrukh Abdullah, a Faisalabad-based SEO consultant. Explore his background, training, research deposit, published writing, and public implementation work.",
  },
};

export default function Page() {
  return <AboutPageClient />;
}
