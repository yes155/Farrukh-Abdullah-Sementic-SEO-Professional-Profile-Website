import { cache } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { getSanityClient } from "./client";
import { EDITORIAL_ARTICLES } from "@/lib/articles";
import type { Insight } from "@/types";

const POSTS_QUERY = `*[_type == "post" && !(_id in path("drafts.**")) && defined(slug.current)] | order(publishedDate desc) {
 "id": slug.current, title, category, readTime, "date": publishedDate,
 "modifiedDate": coalesce(modifiedDate, _updatedAt), "cmsUpdatedAt": _updatedAt, summary, contentMarkdown,
 featuredImage, metaTitle, metaDescription, canonicalUrl, noIndex,
 relatedArticleIds, relatedServicePath, relatedServiceName, relatedCaseStudyPath, relatedCaseStudyName, relatedIndustrySlugs
}`;
type SanityPost = Insight & { featuredImage?: { asset?: { _ref: string }; alt?: string } };
const categories = new Set(['AI Search', 'Semantic SEO', 'Local SEO', 'Entity SEO', 'Topical Authority']);
export function normalizeCategory(value: string): string {
 if (categories.has(value)) return value;
 if (/local/i.test(value)) return 'Local SEO';
 if (/semantic|sementic/i.test(value)) return 'Semantic SEO';
 if (/entity/i.test(value)) return 'Entity SEO';
 if (/topical/i.test(value)) return 'Topical Authority';
 return 'AI Search';
}
export function mergeArticles(local: Insight[], remote: Insight[]): Insight[] {
 const merged = new Map(local.map(a => [a.id, a]));
 for (const article of remote) {
  if (!article.id || !article.title || !article.contentMarkdown) continue;
  const revision = merged.get(article.id);
  // Preserve the approved corrections until a later CMS edit supersedes them.
  const useRevision = revision && Date.parse(revision.modifiedDate || revision.date) > Date.parse(article.cmsUpdatedAt || article.modifiedDate || article.date);
  merged.set(article.id, useRevision ? { ...article, ...revision, featuredImageUrl: article.featuredImageUrl, featuredImageAlt: article.featuredImageAlt, noIndex: article.noIndex, canonicalUrl: article.canonicalUrl } : { ...article, category: normalizeCategory(article.category) });
 }
 return [...merged.values()].sort((a,b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0));
}
export const getInsightsArticles = cache(async (): Promise<Insight[]> => {
 const client = getSanityClient();
 if (!client) return mergeArticles(EDITORIAL_ARTICLES, []);
 try {
  const builder = imageUrlBuilder(client);
  const posts = await client.fetch<SanityPost[]>(POSTS_QUERY, {}, { cache: 'no-store' });
  return mergeArticles(EDITORIAL_ARTICLES, posts.map(p => ({ ...p, category: normalizeCategory(p.category), readTime: p.readTime || '5 min read', featuredImageUrl: p.featuredImage?.asset ? builder.image(p.featuredImage).width(1600).url() : undefined, featuredImageAlt: p.featuredImage?.alt })));
 } catch (error) {
  console.error('Unable to load CMS articles; serving maintained local records.');
  return mergeArticles(EDITORIAL_ARTICLES, []);
 }
});
