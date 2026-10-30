import { PageFrame, PageHeader } from '@/components/PageFrame';
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import MarkdownContent from "@/components/MarkdownContent";
import { getInsightsArticles } from "@/sanity/posts";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/schemas";
import { getNicheBySlug } from "@/lib/localNiches";
import { getArticleHeadings } from "@/lib/articleHeadings";
import { displayDate, validISODate } from "@/lib/contentMetadata";
export const dynamic = "force-dynamic";
type Props = { params: Promise<{ articleId: string }> };
async function resolveArticle(id: string) {
 const articles = await getInsightsArticles();
 const article = articles.find(a => a.id === id);
 if (!article) notFound();
 return { article, articles };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { article } = await resolveArticle((await params).articleId);
 const title = article.metaTitle || article.title;
 const description = article.metaDescription || article.summary;
 return { title, description, alternates: { canonical: article.canonicalUrl || `/insights/${article.id}` }, robots: article.noIndex ? { index: false, follow: true } : undefined,
  openGraph: { title, description, type: 'article', url: `/insights/${article.id}`, publishedTime: validISODate(article.date), modifiedTime: validISODate(article.modifiedDate || article.date), ...(article.featuredImageUrl ? { images: [{ url: article.featuredImageUrl }] } : {}) } };
}
export default async function InsightPage({ params }: Props) {
 const { article, articles } = await resolveArticle((await params).articleId);
 const ids = article.relatedArticleIds?.length ? article.relatedArticleIds : articles.filter(a => a.id !== article.id && a.category === article.category).slice(0,3).map(a => a.id);
 const related = ids.map(id => articles.find(a => a.id === id && !a.noIndex)).filter(a => !!a);
 const headings = getArticleHeadings(article.contentMarkdown || '');
 const niches = (article.relatedIndustrySlugs || []).map(getNicheBySlug).filter(n => !!n);
 return <PageFrame as="article">
  <JsonLd id="article-schema" data={getArticleSchema(article)} />
  <JsonLd id="article-breadcrumb" data={getBreadcrumbSchema([{name:'Home',url:'/'},{name:'Insights',url:'/insights'},{name:article.title,url:`/insights/${article.id}`}])} />
  <PageHeader title={article.title} intro={article.summary} eyebrow={article.category} parent={{name:'All Insights',url:'/insights'}}
    metadata={<>By <Link href="/about" className="underline">Farrukh Abdullah</Link> · Published <time dateTime={validISODate(article.date)}>{displayDate(article.date)}</time>{article.modifiedDate && <> · Updated <time dateTime={validISODate(article.modifiedDate)}>{displayDate(article.modifiedDate)}</time></>}</>} />
  {article.featuredImageUrl && <img src={article.featuredImageUrl} alt={article.featuredImageAlt || article.title} className="w-full h-auto border-2 border-black" />}
  <div className={headings.length > 0 ? 'reading-layout' : ''}>{headings.length > 0 && <nav aria-label="Article contents" className="reading-nav site-panel"><p className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-4">In this guide</p><ul className="space-y-3">{headings.map(item => <li key={item.id}><a href={`#${item.id}`} className="text-sm text-neutral-600 hover:text-cyan-800 hover:underline">{item.text}</a></li>)}</ul></nav>}<div className="reading-content"><MarkdownContent content={article.contentMarkdown || ''} /></div></div>
  {niches.length > 0 && <section className="border-t border-neutral-200 pt-8 space-y-3"><h2 className="text-xl font-bold">Related industry services</h2><p className="text-sm text-neutral-700">These services apply the topic to specific customer and inquiry journeys.</p><ul className="space-y-2">{niches.map(n => <li key={n.slug}><Link className="underline text-cyan-800" href={`/services/${n.slug}`}>SEO for {n.industry}</Link></li>)}</ul></section>}
  <section className="border-t border-neutral-200 pt-8 space-y-4">
   <h2 className="text-xl font-bold">Continue with this topic</h2>
   <ul className="space-y-3">
    {article.relatedServicePath && <li><Link href={article.relatedServicePath} className="underline text-cyan-800">{article.relatedServiceName || 'Related service'}</Link></li>}
    {article.relatedCaseStudyPath && <li><Link href={article.relatedCaseStudyPath} className="underline text-cyan-800">{article.relatedCaseStudyName || 'Related case study'}</Link></li>}
    {related.map(a => <li key={a.id}><Link href={`/insights/${a.id}`} className="underline text-cyan-800">{a.title}</Link></li>)}
   </ul>
  </section>
 </PageFrame>;
}
