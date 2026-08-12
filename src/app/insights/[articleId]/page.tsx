import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { STRATEGIST_NAME } from "@/data";
import { getInsightsArticles } from "@/sanity/posts";
import { ARTICLE_SCHEMAS, getBreadcrumbSchema } from "@/lib/schemas";
import { CITIES } from "@/lib/locations";
import { LOCAL_NICHES } from "@/lib/localNiches";

interface PageProps {
  params: Promise<{ articleId: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { articleId } = await params;
  const articles = await getInsightsArticles();
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return { title: "Article Not Found" };
  }

  const title = article.metaTitle || article.title;
  const description = article.metaDescription || article.summary;

  return {
    title,
    description,
    alternates: { canonical: article.canonicalUrl || `/insights/${articleId}` },
    robots: article.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url: `/insights/${articleId}`,
      type: "article",
      images: article.featuredImageUrl ? [{ url: article.featuredImageUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: article.featuredImageUrl ? [article.featuredImageUrl] : undefined,
    },
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { articleId } = await params;
  const articles = await getInsightsArticles();
  const activeArticle = articles.find(a => a.id === articleId);

  if (!activeArticle) {
    return (
      <div className="pt-12 pb-20 px-6 max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-2xl font-black uppercase text-black font-sans">Article Not Found</h1>
        <p className="text-xs text-neutral-500 font-medium font-sans">
          The requested strategy article does not exist or has been relocated.
        </p>
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 bg-black border-2 border-black text-xs font-mono font-bold text-white hover:bg-cyan-400 hover:text-black hover:border-black py-3 px-6 uppercase shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Insights Index</span>
        </Link>
      </div>
    );
  }

  const activeBreadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Insights", url: "/insights" },
    { name: activeArticle.title, url: `/insights/${activeArticle.id}` }
  ]);

  const activeArticleSchema = articleId ? ARTICLE_SCHEMAS[articleId] : null;

  // Helper to format text with simple HTML-like structures (basic markdown renderer)
  const renderInline = (text: string) => {
    // Tokenize **bold** and [text](url) into ordered React nodes.
    const tokenPattern = /(\*\*.*?\*\*|\[[^\]]*?\]\([^)]*?\))/g;
    const tokens = text.split(tokenPattern).filter(Boolean);
    return tokens.map((tok, idx) => {
      if (tok.startsWith("**") && tok.endsWith("**")) {
        return <strong key={idx} className="text-black font-extrabold">{tok.slice(2, -2)}</strong>;
      }
      const linkMatch = tok.match(/^\[([^\]]*?)\]\(([^)]*?)\)$/);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        return (
          <Link
            key={idx}
            href={href}
            className="text-cyan-700 font-bold underline decoration-2 underline-offset-2 hover:text-black transition-colors"
          >
            {label}
          </Link>
        );
      }
      return <span key={idx}>{tok}</span>;
    });
  };

  const renderSimpleMarkdown = (text: string) => {
    return text.split("\n\n").map((para, idx) => {
      if (para.startsWith("## ")) {
        return (
          <h2 key={idx} className="text-lg md:text-xl font-black font-sans text-black uppercase tracking-tight mt-8 mb-4 border-b border-neutral-200 pb-2">
            {para.replace("## ", "")}
          </h2>
        );
      }
      if (para.startsWith("### ")) {
        return (
          <h3 key={idx} className="text-sm md:text-base font-black font-sans text-cyan-600 uppercase tracking-wider mt-6 mb-3">
            {para.replace("### ", "")}
          </h3>
        );
      }
      if (para.startsWith("#### ")) {
        return (
          <h4 key={idx} className="text-xs md:text-sm font-extrabold font-mono text-black uppercase tracking-widest mt-4 mb-2">
            {para.replace("#### ", "")}
          </h4>
        );
      }
      if (para.startsWith("- ")) {
        const items = para.split("\n");
        return (
          <ul key={idx} className="space-y-2.5 my-4 pl-5 list-disc text-neutral-700">
            {items.map((li, liIdx) => {
              // Highlight bold items inside list
              const cleanLi = li.replace("- ", "");
              return (
                <li key={liIdx} className="text-xs md:text-sm leading-relaxed font-medium">
                  {renderInline(cleanLi)}
                </li>
              );
            })}
          </ul>
        );
      }
      if (para.startsWith("`")) {
        return (
          <pre key={idx} className="bg-neutral-50 border-2 border-black p-4 font-mono text-xs text-cyan-700 font-bold overflow-x-auto my-6 rounded-none">
            <code>{para.replace(/`/g, "")}</code>
          </pre>
        );
      }

      // Inline image: ![alt text](url)
      const imageMatch = para.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imageMatch) {
        const [, alt, url] = imageMatch;
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={idx}
            src={url}
            alt={alt || "Article image"}
            className="w-full h-auto border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] my-6"
          />
        );
      }

      // Table: lines starting with | and a header divider row like |---|---|
      if (para.startsWith("|") && para.includes("\n")) {
        const rows = para.split("\n").filter((r) => r.trim().startsWith("|"));
        const isDivider = (row: string) => /^\|?[\s:|-]+\|?$/.test(row);
        const headerRow = rows[0];
        const bodyRows = rows.slice(1).filter((r) => !isDivider(r));

        const parseCells = (row: string) =>
          row
            .trim()
            .replace(/^\|/, "")
            .replace(/\|$/, "")
            .split("|")
            .map((c) => c.trim());

        const headers = parseCells(headerRow);

        return (
          <div key={idx} className="overflow-x-auto my-6 border-2 border-black">
            <table className="w-full text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-black">
                  {headers.map((h, hIdx) => (
                    <th key={hIdx} className="text-left text-white font-mono uppercase font-bold px-3 py-2 border-r border-neutral-700 last:border-r-0">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className="border-t border-neutral-200 even:bg-neutral-50">
                    {parseCells(row).map((cell, cIdx) => (
                      <td key={cIdx} className="px-3 py-2 text-neutral-700 font-medium border-r border-neutral-100 last:border-r-0">
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      // Default paragraph handling for bolds
      return (
        <p key={idx} className="text-xs md:text-sm leading-relaxed text-neutral-700 mb-4 font-sans font-normal">
          {renderInline(para)}
        </p>
      );
    });
  };

  return (
    <div className="pt-12 pb-20 px-6 max-w-3xl mx-auto space-y-8">
      {activeBreadcrumb && <JsonLd id="schema-breadcrumbs-detail" data={activeBreadcrumb} />}
      {activeArticleSchema && <JsonLd id="schema-article-detail" data={activeArticleSchema} />}

      {/* Back button */}
      <div>
        <Link
          href="/insights"
          className="group inline-flex items-center gap-2 text-xs font-mono font-bold text-neutral-500 hover:text-black uppercase transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Insights</span>
        </Link>
      </div>

      {/* Article Header card */}
      <div className="bg-white border-2 border-black p-6 md:p-8 relative shadow-[4px_4px_0px_rgba(0,0,0,1)]">
        <span className="text-xs font-mono text-cyan-600 font-extrabold uppercase tracking-widest">
          {activeArticle.category}
        </span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-black font-sans text-black uppercase tracking-tight mt-2 mb-4 leading-tight">
          {activeArticle.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500 border-t border-neutral-100 pt-4 font-bold">
          <span>By {STRATEGIST_NAME} • {activeArticle.date} • {activeArticle.readTime}</span>
        </div>
      </div>

      {activeArticle.featuredImageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={activeArticle.featuredImageUrl}
          alt={activeArticle.featuredImageAlt || activeArticle.title}
          className="w-full h-auto border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
        />
      )}

      {/* Full Markdown Render Content */}
      <div className="bg-white border-2 border-black p-6 md:p-8 relative shadow-[4px_4px_0px_rgba(0,0,0,1)] prose prose-neutral max-w-none">
        {activeArticle.contentMarkdown && renderSimpleMarkdown(activeArticle.contentMarkdown)}
      </div>

      {/* Contextual bridges for local SEO topics */}
      {activeArticle.category === "Local SEO" && (
        <div className="bg-white border-2 border-black p-6 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] space-y-6">
          <h2 className="text-sm font-black font-sans text-black uppercase tracking-wider border-b border-neutral-200 pb-3">
            Apply This to Your Market
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="block group p-3 border border-neutral-200 hover:border-black bg-neutral-50 transition-all"
              >
                <span className="block text-[9px] font-mono font-bold text-neutral-400 group-hover:text-cyan-600 uppercase tracking-widest mb-0.5">
                  {c.stateName}
                </span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight group-hover:underline">
                  SEO Services in {c.name}, {c.state}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-1 border-t border-neutral-100">
            {LOCAL_NICHES.slice(0, 8).map((n) => (
              <Link
                key={n.slug}
                href={`/services/${n.slug}`}
                className="text-[10px] font-mono font-bold bg-neutral-50 text-black border border-neutral-200 px-2.5 py-1 uppercase hover:bg-cyan-50 hover:border-cyan-500 transition-colors"
              >
                SEO for {n.industry}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Related content — internal linking to keep topical clusters connected */}
      {(() => {
        const relatedIds = activeArticle.relatedArticleIds && activeArticle.relatedArticleIds.length > 0
          ? activeArticle.relatedArticleIds
          : articles
              .filter((a) => a.id !== activeArticle.id && a.category === activeArticle.category)
              .slice(0, 3)
              .map((a) => a.id);

        const relatedArticles = relatedIds
          .map((id) => articles.find((a) => a.id === id))
          .filter((a): a is NonNullable<typeof a> => Boolean(a));

        const hasRelated =
          relatedArticles.length > 0 ||
          activeArticle.relatedServicePath ||
          activeArticle.relatedCaseStudyPath;

        if (!hasRelated) return null;

        return (
          <div className="bg-neutral-50 border-2 border-black p-6 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] space-y-6">
            <h2 className="text-sm font-black font-sans text-black uppercase tracking-wider border-b border-neutral-200 pb-3">
              Continue Reading
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeArticle.relatedServicePath && (
                <Link
                  href={activeArticle.relatedServicePath}
                  className="group block p-4 border border-neutral-200 hover:border-black bg-white transition-all"
                >
                  <span className="block text-[9px] font-mono font-bold text-cyan-600 uppercase tracking-widest mb-1">
                    Related Service
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-black uppercase leading-tight group-hover:underline">
                    {activeArticle.relatedServiceName || "View Service"}
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </span>
                </Link>
              )}

              {activeArticle.relatedCaseStudyPath && (
                <Link
                  href={activeArticle.relatedCaseStudyPath}
                  className="group block p-4 border border-neutral-200 hover:border-black bg-white transition-all"
                >
                  <span className="block text-[9px] font-mono font-bold text-cyan-600 uppercase tracking-widest mb-1">
                    Related Case Study
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-black uppercase leading-tight group-hover:underline">
                    {activeArticle.relatedCaseStudyName || "View Case Study"}
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </span>
                </Link>
              )}

              {relatedArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/insights/${article.id}`}
                  className="group block p-4 border border-neutral-200 hover:border-black bg-white transition-all"
                >
                  <span className="block text-[9px] font-mono font-bold text-cyan-600 uppercase tracking-widest mb-1">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-black uppercase leading-tight group-hover:underline">
                    {article.title}
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        );
      })()}

      {/* Bottom Back Button */}
      <div className="flex justify-center pt-4">
        <Link
          href="/insights"
          className="group inline-flex items-center gap-2 bg-black border-2 border-black text-xs font-mono font-bold text-white hover:bg-cyan-400 hover:text-black hover:border-black py-3 px-6 uppercase shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Insights Index</span>
        </Link>
      </div>
    </div>
  );
}
