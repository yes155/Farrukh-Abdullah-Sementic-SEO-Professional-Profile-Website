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

  const title = `Local SEO Services in ${cityData.name}, ${cityData.state} | Map Pack & GBP`;
  const description = `Local SEO systems for ${cityData.name}, ${cityData.stateName} businesses — Google Business Profile optimization, service-area landing pages, ${cityData.state}-specific citations, and call tracking built to win map pack rankings and new local customers.`;

  return {
    title,
    description,
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
