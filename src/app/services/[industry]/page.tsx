import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCAL_NICHES, getNicheBySlug } from "@/lib/localNiches";
import LocalNichePageClient from "@/components/LocalNichePageClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCAL_NICHES.map((n) => ({ industry: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const { industry } = await params;
  const niche = getNicheBySlug(industry);
  if (!niche) return { title: "Service Not Found" };

  const title = `Local SEO for ${niche.industry}`;
  const primaryKeyword = niche.focusKeywords[0] || `local seo for ${niche.industry.toLowerCase()}`;
  const description = `${primaryKeyword.charAt(0).toUpperCase() + primaryKeyword.slice(1)} — Google Business Profile optimization, ${niche.singular.toLowerCase()} schema markup, service-area landing pages, and call tracking built to win map pack rankings and new customers in your market.`;

  return {
    title,
    description,
    keywords: niche.focusKeywords.join(", "),
    alternates: {
      canonical: `/services/${niche.slug}`,
    },
    openGraph: {
      title: `Local SEO for ${niche.industry} | Farrukh Abdullah`,
      description,
      url: `/services/${niche.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Local SEO for ${niche.industry} | Farrukh Abdullah`,
      description,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const niche = getNicheBySlug(industry);
  if (!niche) notFound();
  return <LocalNichePageClient niche={niche} />;
}
