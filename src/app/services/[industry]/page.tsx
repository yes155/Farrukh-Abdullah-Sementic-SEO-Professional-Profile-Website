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

  const title = niche.metaTitle || `Local SEO for ${niche.industry}`;
  const description = niche.metaDescription || niche.intro;

  return {
    title,
    description,
    keywords: niche.focusKeywords.join(", "),
    alternates: {
      canonical: `/services/${niche.slug}`,
    },
    openGraph: {
      title: `${title} | Farrukh Abdullah`,
      description,
      url: `/services/${niche.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Farrukh Abdullah`,
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
