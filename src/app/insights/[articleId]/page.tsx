import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import MarkdownContent from "@/components/MarkdownContent";
import { getInsightsArticles } from "@/sanity/posts";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/schemas";
import { getNicheBySlug } from "@/lib/localNiches";
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
 const niches = (article.relatedIndustrySlugs || []).map(getNicheBySlug).filter(n => !!n);
 return <article className="max-w-4xl mx-auto px-6 py-12 space-y-8">
  <JsonLd id="article-schema" data={getArticleSchema(article)} />
  <JsonLd id="article-breadcrumb" data={getBreadcrumbSchema([{name:'Home',url:'/'},{name:'Insights',url:'/insights'},{name:article.title,url:`/insights/${article.id}`}])} />
  <Link href="/insights" className="text-sm underline">All Insights</Link>
  <header className="border-2 border-black p-6 md:p-8 space-y-4">
   <p className="text-xs font-mono text-cyan-800 uppercase">{article.category}</p>
   <h1 className="text-3xl md:text-4xl font-black tracking-tight">{article.title}</h1>
   <p className="text-sm text-neutral-600">By <Link href="/about" className="underline">Farrukh Abdullah</Link> · Published <time dateTime={validISODate(article.date)}>{displayDate(article.date)}</time>{article.modifiedDate && <> · Updated <time dateTime={validISODate(article.modifiedDate)}>{displayDate(article.modifiedDate)}</time></>}</p>
   <p className="text-base text-neutral-700">{article.summary}</p>
  </header>
  {article.featuredImageUrl && <img src={article.featuredImageUrl} alt={article.featuredImageAlt || article.title} className="w-full h-auto border-2 border-black" />}
  <div className="border-2 border-black p-6 md:p-8"><MarkdownContent content={article.contentMarkdown || ''} /></div>
  {niches.length > 0 && <section className="border-2 p-6 space-y-3"><h2 className="text-xl font-bold">Related industry services</h2><p className="text-sm text-neutral-700">These services apply the topic to specific customer and inquiry journeys.</p><ul className="space-y-2">{niches.map(n => <li key={n.slug}><Link className="underline text-cyan-800" href={`/services/${n.slug}`}>SEO for {n.industry}</Link></li>)}</ul></section>}
  <section className="border-2 border-black bg-neutral-50 p-6 space-y-4">
   <h2 className="text-xl font-bold">Continue with this topic</h2>
   <ul className="space-y-3">
    {article.relatedServicePath && <li><Link href={article.relatedServicePath} className="underline text-cyan-800">{article.relatedServiceName || 'Related service'}</Link></li>}
    {article.relatedCaseStudyPath && <li><Link href={article.relatedCaseStudyPath} className="underline text-cyan-800">{article.relatedCaseStudyName || 'Related case study'}</Link></li>}
    {related.map(a => <li key={a.id}><Link href={`/insights/${a.id}`} className="underline text-cyan-800">{a.title}</Link></li>)}
   </ul>
  </section>
 </article>;
}
