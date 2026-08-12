import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITIES, getCityBySlug } from "@/lib/locations";
import CitySeoPageClient from "@/components/CitySeoPageClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) return { title: "Location Not Found" };

  const title = `Local SEO Services in ${cityData.name}, ${cityData.state}`;
  const description = `Local SEO systems for ${cityData.name}, ${cityData.stateName} businesses — Google Business Profile optimization, service-area landing pages for ${cityData.neighborhoods.slice(0, 3).join(", ")}, ${cityData.state}-specific citations, and call tracking built to win map pack rankings and new local customers.`;
  const keywords = [
    `local seo ${cityData.name}`,
    `local seo for plumbers ${cityData.name}`,
    `local seo for dentists ${cityData.name}`,
    `local seo for roofers ${cityData.name}`,
    `local seo for pest control ${cityData.name}`,
    ...cityData.neighborhoods.map((n) => `local seo ${cityData.name.toLowerCase()} ${n.toLowerCase()}`)
  ].join(", ");

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/locations/${cityData.slug}`,
    },
    openGraph: {
      title: `Local SEO Services in ${cityData.name}, ${cityData.state} | Farrukh Abdullah`,
      description,
      url: `/locations/${cityData.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `Local SEO Services in ${cityData.name}, ${cityData.state} | Farrukh Abdullah`,
      description,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityData = getCityBySlug(city);
  if (!cityData) notFound();
  return <CitySeoPageClient city={cityData} />;
}
