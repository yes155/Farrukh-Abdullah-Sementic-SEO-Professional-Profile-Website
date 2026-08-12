import type { MetadataRoute } from "next";
import { getInsightsArticles } from "@/sanity/posts";
import { LOCAL_NICHES } from "@/lib/localNiches";

const SITE_URL = "https://farrukh.top";

const US_CITIES = [
  "austin",
  "chicago",
  "denver",
  "houston",
  "dallas",
  "phoenix",
  "miami",
  "seattle",
  "san-francisco",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services/semantic-seo`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services/ai-seo-consulting`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services/local-seo`, changeFrequency: "monthly", priority: 0.9 },
    ...LOCAL_NICHES.map((n) => ({
      url: `${SITE_URL}/services/${n.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/case-studies`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/case-studies/windcave`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/local-seo-systems`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/case-studies/azuno`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/locations`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/locations/lahore`, changeFrequency: "monthly", priority: 0.7 },
    ...US_CITIES.map((city) => ({
      url: `${SITE_URL}/locations/${city}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/insights`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  let articleRoutes: MetadataRoute.Sitemap = [];
  try {
    const articles = await getInsightsArticles();
    articleRoutes = articles
      .filter((a) => !a.noIndex)
      .map((a) => ({
        url: `${SITE_URL}/insights/${a.id}`,
        lastModified: a.date ? new Date(a.date) : undefined,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
  } catch {
    // If Sanity is unreachable at build time, still ship the static routes.
    articleRoutes = [];
  }

  return [...staticRoutes, ...articleRoutes];
}
