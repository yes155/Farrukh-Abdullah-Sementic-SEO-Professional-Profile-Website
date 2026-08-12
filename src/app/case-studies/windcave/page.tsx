import type { Metadata } from "next";
import WindcavePageClient from "./WindcavePageClient";

export const metadata: Metadata = {
  title: "Windcave Case Study: Semantic SEO for FinTech",
  description:
    "How semantic SEO structuring and entity clustering resolved a search visibility plateau and fragmented domain equity for payment platform Windcave.",
  alternates: {
    canonical: "/case-studies/windcave",
  },
  openGraph: {
    title: "Windcave Case Study | Semantic SEO for FinTech & Payments",
    description:
      "How semantic SEO structuring and entity clustering resolved a search visibility plateau and fragmented domain equity for payment platform Windcave.",
    url: "/case-studies/windcave",
  },
  twitter: {
    card: "summary_large_image",
    title: "Windcave Case Study | Semantic SEO for FinTech & Payments",
    description: "How semantic SEO structuring and entity clustering resolved a search visibility plateau and fragmented domain equity for payment platform Windcave.",
  },
};

export default function Page() {
  return <WindcavePageClient />;
}
