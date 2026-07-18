import type { Metadata } from "next";
import AiSeoConsultingPageClient from "./AiSeoConsultingPageClient";

export const metadata: Metadata = {
  title: "AI SEO Consulting | Generative Engine Optimization (GEO)",
  description:
    "AI SEO consulting covering Generative Engine Optimization (GEO) and technical AI-crawler accessibility. Get cited by ChatGPT Search, Perplexity AI, and Google AI Overviews.",
  alternates: {
    canonical: "/services/ai-seo-consulting",
  },
  openGraph: {
    title: "AI SEO Consulting | Farrukh Abdullah",
    description:
      "AI SEO consulting covering Generative Engine Optimization (GEO) and technical AI-crawler accessibility. Get cited by ChatGPT Search, Perplexity AI, and Google AI Overviews.",
    url: "/services/ai-seo-consulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SEO Consulting | Farrukh Abdullah",
    description:
      "AI SEO consulting covering Generative Engine Optimization (GEO) and technical AI-crawler accessibility. Get cited by ChatGPT Search, Perplexity AI, and Google AI Overviews.",
  },
};

export default function Page() {
  return <AiSeoConsultingPageClient />;
}
