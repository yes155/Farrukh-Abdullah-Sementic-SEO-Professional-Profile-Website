import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import InsightsGrid from "@/components/InsightsGrid";
import { getInsightsArticles } from "@/sanity/posts";
import { getBreadcrumbSchema } from "@/lib/schemas";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles on semantic SEO, Generative Engine Optimization (GEO), entity-based content architecture, and schema strategy for growing brands.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights | Semantic SEO, GEO & Entity SEO Articles",
    description:
      "Articles on semantic SEO, Generative Engine Optimization (GEO), entity-based content architecture, and schema strategy for growing brands.",
    url: "/insights",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | Semantic SEO, GEO & Entity SEO Articles",
    description: "Articles on semantic SEO, Generative Engine Optimization (GEO), entity-based content architecture, and schema strategy for growing brands.",
  },
};

export default async function InsightsIndex() {
  const articles = await getInsightsArticles();

  const listBreadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Insights", url: "/insights" }
  ]);

  return (
    <div className="pt-12 pb-20 px-6 max-w-7xl mx-auto space-y-12">
      <JsonLd id="schema-breadcrumbs-insights" data={listBreadcrumb} />

      {/* Title Block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-black pb-8">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-cyan-600 uppercase block mb-2 font-bold">
            Insights and strategy
          </span>
          <h1 className="text-4xl font-extrabold font-sans text-black tracking-tight uppercase leading-none">
            SEO & GEO Insights
          </h1>
        </div>
        <p className="text-xs text-neutral-500 max-w-xs md:text-right font-mono uppercase tracking-wider font-extrabold">
          In-depth analyses on semantic web, entity graphs, and AI search visibility.
        </p>
      </div>

      <InsightsGrid articles={articles} />
    </div>
  );
}
