import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getNicheCaseStudyBySlug,
  getPublishedNicheCaseStudies
} from "@/lib/caseStudies";
import NicheCaseStudyPageClient from "@/components/NicheCaseStudyPageClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedNicheCaseStudies().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getNicheCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study Not Found" };

  const title = `${study.headline} | ${study.clientName || study.city}, ${study.state}`;
  const description = `Local SEO case study for ${study.clientName ? `${study.clientName}, ` : ""}${study.city}, ${study.state} (${study.zipCode}) — ${study.challenge.split(".")[0] || "a service-area local SEO system"} — map pack rankings, Google Business Profile optimization, and call tracking.`;

  return {
    title,
    description,
    alternates: { canonical: `/case-studies/${study.slug}` },
    robots: study.published ? undefined : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url: `/case-studies/${study.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getNicheCaseStudyBySlug(slug);
  if (!study || !study.published) notFound();
  return <NicheCaseStudyPageClient study={study} />;
}
