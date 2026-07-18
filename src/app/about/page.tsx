import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Faisalabad-based semantic SEO and Generative Engine Optimization strategist. IBM, Moz, and BrightLocal certified, with a background in data-driven sales and analytics.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Farrukh Abdullah | Semantic SEO & GEO Strategist",
    description:
      "Faisalabad-based semantic SEO and Generative Engine Optimization strategist. IBM, Moz, and BrightLocal certified, with a background in data-driven sales and analytics.",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Farrukh Abdullah | Semantic SEO & GEO Strategist",
    description: "Faisalabad-based semantic SEO and Generative Engine Optimization strategist. IBM, Moz, and BrightLocal certified, with a background in data-driven sales and analytics.",
  },
};

export default function Page() {
  return <AboutPageClient />;
}
