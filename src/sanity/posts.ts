import { getSanityClient } from "./client";
import imageUrlBuilder from "@sanity/image-url";
import { INSIGHTS_ARTICLES } from "@/data";
import type { Insight } from "@/types";

const POSTS_QUERY = `*[_type == "post"] | order(publishedDate desc) {
  "id": slug.current,
  title,
  category,
  readTime,
  "date": publishedDate,
  summary,
  contentMarkdown,
  featuredImage,
  metaTitle,
  metaDescription,
  canonicalUrl,
  noIndex
}`;

function formatDate(isoDate: string): string {
  try {
    return new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return isoDate;
  }
}

interface SanityPost {
  id: string;
  title: string;
  category: string;
  readTime?: string;
  date: string;
  summary: string;
  contentMarkdown: string;
  featuredImage?: { asset?: { _ref: string }; alt?: string } | null;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

/**
 * Fetches published posts from Sanity and merges them with the
 * local INSIGHTS_ARTICLES array. Sanity posts take priority if an
 * id/slug collides with a local article. Falls back silently to
 * local-only articles if Sanity isn't configured yet or the fetch fails.
 */
export async function getInsightsArticles(): Promise<Insight[]> {
  const client = getSanityClient();
  if (!client) {
    return INSIGHTS_ARTICLES;
  }

  try {
    const builder = imageUrlBuilder(client);
    const sanityPosts = await client.fetch<SanityPost[]>(POSTS_QUERY, {}, { cache: "no-store" });

    const formatted: Insight[] = sanityPosts.map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      readTime: p.readTime || "5 min read",
      date: formatDate(p.date),
      summary: p.summary,
      contentMarkdown: p.contentMarkdown,
      featuredImageUrl: p.featuredImage?.asset
        ? builder.image(p.featuredImage).width(1600).url()
        : undefined,
      featuredImageAlt: p.featuredImage?.alt,
      metaTitle: p.metaTitle,
      metaDescription: p.metaDescription,
      canonicalUrl: p.canonicalUrl,
      noIndex: p.noIndex,
    }));

    const sanityIds = new Set(formatted.map((a) => a.id));
    const localOnly = INSIGHTS_ARTICLES.filter((a) => !sanityIds.has(a.id));

    return [...formatted, ...localOnly];
  } catch (err) {
    console.error("Sanity fetch failed, falling back to local articles:", err);
    return INSIGHTS_ARTICLES;
  }
}
