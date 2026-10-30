import { PageFrame, PageHeader, PageNavigation } from '@/components/PageFrame';
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import InsightsGrid from "@/components/InsightsGrid";
import { getInsightsArticles } from "@/sanity/posts";
import { getCollectionSchema, getBreadcrumbSchema } from "@/lib/schemas";

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
  const articles = (await getInsightsArticles()).filter(a => !a.noIndex);

  const listBreadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Insights", url: "/insights" }
  ]);

  return (
    <PageFrame>
      <JsonLd id="schema-breadcrumbs-insights" data={listBreadcrumb} />
      <JsonLd id="insights-collection" data={getCollectionSchema("/insights", "SEO and AI search guides", articles.map(a => ({ name:a.title,path:`/insights/${a.id}` })))} />

      <PageHeader title="SEO and AI-search guides" eyebrow="Insights and strategy"
        intro="Practical explanations, implementation examples, and primary sources. Explore content planning, local search, and AI-search measurement."
        aside={<PageNavigation title="Put the guidance to work" items={[{label:'SEO services and deliverables',href:'/services'},{label:'Local SEO audit workbook',href:'/tools/local-seo-audit-workbook'},{label:'Research and implementation evidence',href:'/evidence'}]} />} />

      <InsightsGrid articles={articles} />
    </PageFrame>
  );
}
