import type { Metadata } from "next";
import AzunoPageClient from "./AzunoPageClient";

export const metadata: Metadata = {
  title: "Azuno Case Study: Semantic SEO for SaaS",
  description:
    "How a semantic SEO framework and AI/LLM content alignment drove +120% organic traffic growth and top 3 local rankings for a San Francisco SaaS analytics platform.",
  alternates: {
    canonical: "/case-studies/azuno",
  },
  openGraph: {
    title: "Azuno Case Study | Semantic SEO & AI/LLM Alignment for SaaS",
    description:
      "How a semantic SEO framework and AI/LLM content alignment drove +120% organic traffic growth and top 3 local rankings for a San Francisco SaaS analytics platform.",
    url: "/case-studies/azuno",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azuno Case Study | Semantic SEO & AI/LLM Alignment for SaaS",
    description:
      "How a semantic SEO framework and AI/LLM content alignment drove +120% organic traffic growth and top 3 local rankings for a San Francisco SaaS analytics platform.",
  },
};

export default function Page() {
  return <AzunoPageClient />;
}
