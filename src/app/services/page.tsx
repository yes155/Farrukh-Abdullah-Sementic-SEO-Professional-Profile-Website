import type { Metadata } from "next";
import ServicesIndexClient from "./ServicesIndexClient";

export const metadata: Metadata = {
  title: "SEO & GEO Services",
  description:
    "Three core strategic channels: Semantic SEO & Topical Authority, Generative Engine Optimization (GEO), and Local SEO Systems built for calls and form-fills.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "SEO & GEO Services | Farrukh Abdullah",
    description:
      "Three core strategic channels: Semantic SEO & Topical Authority, Generative Engine Optimization (GEO), and Local SEO Systems built for calls and form-fills.",
    url: "/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & GEO Services | Farrukh Abdullah",
    description: "Three core strategic channels: Semantic SEO & Topical Authority, Generative Engine Optimization (GEO), and Local SEO Systems built for calls and form-fills.",
  },
};

export default function Page() {
  return <ServicesIndexClient />;
}
