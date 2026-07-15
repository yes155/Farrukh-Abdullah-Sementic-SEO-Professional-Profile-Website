"use client";

import { useState } from "react";
import { INSIGHTS_ARTICLES, STRATEGIST_NAME } from "../data";
import { BookOpen, Calendar, Clock, X, ArrowUpRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import JsonLd from "./JsonLd";
import { ARTICLE_SCHEMAS, getBreadcrumbSchema } from "../lib/schemas";

interface InsightsProps {
  selectedArticleId?: string | null;
  onArticleSelect?: (id: string | null) => void;
}

export default function Insights({ selectedArticleId: propSelectedId, onArticleSelect }: InsightsProps = {}) {
  const [localSelectedId, setLocalSelectedId] = useState<string | null>(null);

  const selectedArticleId = propSelectedId !== undefined ? propSelectedId : localSelectedId;
  const setSelectedArticleId = (id: string | null) => {
    if (onArticleSelect) {
      onArticleSelect(id);
    } else {
      setLocalSelectedId(id);
    }
  };

  const activeArticle = INSIGHTS_ARTICLES.find(a => a.id === selectedArticleId);

  // Dynamic schema definitions based on active reading state
  const listBreadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Insights", url: "/#insights" }
  ]);

  const activeBreadcrumb = activeArticle ? getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Insights", url: "/#insights" },
    { name: activeArticle.title, url: `/#insights/${activeArticle.id}` }
  ]) : null;

  const activeArticleSchema = selectedArticleId ? ARTICLE_SCHEMAS[selectedArticleId] : null;

  // Helper to format text with simple HTML-like structures (basic markdown renderer)
  const renderSimpleMarkdown = (text: string) => {
    return text.split("\n\n").map((para, idx) => {
      if (para.startsWith("## ")) {
        return (
          <h3 key={idx} className="text-lg md:text-xl font-black font-sans text-black uppercase tracking-tight mt-8 mb-4 border-b border-neutral-200 pb-2">
            {para.replace("## ", "")}
          </h3>
        );
      }
      if (para.startsWith("### ")) {
        return (
          <h4 key={idx} className="text-sm md:text-base font-black font-sans text-cyan-600 uppercase tracking-wider mt-6 mb-3">
            {para.replace("### ", "")}
          </h4>
        );
      }
      if (para.startsWith("#### ")) {
        return (
          <h5 key={idx} className="text-xs md:text-sm font-extrabold font-mono text-black uppercase tracking-widest mt-4 mb-2">
            {para.replace("#### ", "")}
          </h5>
        );
      }
      if (para.startsWith("- ")) {
        const items = para.split("\n");
        return (
          <ul key={idx} className="space-y-2.5 my-4 pl-5 list-disc text-neutral-700">
            {items.map((li, liIdx) => {
              // Highlight bold items inside list
              const cleanLi = li.replace("- ", "");
              const parts = cleanLi.split("**");
              return (
                <li key={liIdx} className="text-xs md:text-sm leading-relaxed font-medium">
                  {parts.map((part, pIdx) => pIdx % 2 === 1 ? <strong key={pIdx} className="text-black font-extrabold">{part}</strong> : part)}
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

      // Default paragraph handling for bolds
      const parts = para.split("**");
      return (
        <p key={idx} className="text-xs md:text-sm leading-relaxed text-neutral-700 mb-4 font-sans font-medium animate-none">
          {parts.map((part, pIdx) => pIdx % 2 === 1 ? <strong key={pIdx} className="text-black font-extrabold">{part}</strong> : part)}
        </p>
      );
    });
  };

  return (
    <section id="insights" className="py-20 px-6 max-w-7xl mx-auto border-t border-neutral-200">
      <AnimatePresence mode="wait">
        {!selectedArticleId ? (
          /* Grid View of all Articles */
          <motion.div
            key="list-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-12"
          >
            {/* Dynamic Breadcrumbs Schema Injection */}
            <JsonLd id="schema-breadcrumbs" data={listBreadcrumb} />
            {/* Title Block */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-2 font-bold">
                  Insights and strategy
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-black tracking-tight uppercase">
                  Insights and strategy
                </h2>
              </div>
              <p className="text-xs text-neutral-500 max-w-xs md:text-right font-mono uppercase tracking-wider font-bold">
                In-depth analyses on semantic web, entity graphs, and AI search visibility.
              </p>
            </div>

            {/* List Grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {INSIGHTS_ARTICLES.map((article, idx) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  onClick={() => setSelectedArticleId(article.id)}
                  className="bg-white border-2 border-black p-6 md:p-8 flex flex-col justify-between group cursor-pointer hover:border-cyan-500 shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:translate-x-[-2px] transition-all"
                >
                  <div className="space-y-5">
                    {/* Header meta */}
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                      <span className="text-[10px] font-mono text-cyan-600 uppercase tracking-widest font-bold">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-3 text-[9px] font-mono text-neutral-500 uppercase font-bold">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                      </div>
                    </div>

                    {/* Article title & summary */}
                    <div className="space-y-3">
                      <h3 className="text-base md:text-lg font-black font-sans text-black group-hover:text-cyan-600 transition-colors uppercase tracking-tight leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-xs text-neutral-650 leading-relaxed font-sans font-medium line-clamp-3">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  {/* Read Trigger */}
                  <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono font-bold text-neutral-500 group-hover:text-cyan-600 transition-colors">
                    <span>READ ARTICLE</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* Reader View for single selected Article */
          <motion.div
            key="reader-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            {/* Dynamic Article & Breadcrumbs Schema Injection */}
            {activeBreadcrumb && <JsonLd id="schema-breadcrumbs" data={activeBreadcrumb} />}
            {activeArticleSchema && <JsonLd id="schema-article" data={activeArticleSchema} />}
            {/* Back button */}
            <button
              onClick={() => setSelectedArticleId(null)}
              className="group flex items-center gap-2 text-xs font-mono font-bold text-neutral-500 hover:text-black uppercase transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Strategy</span>
            </button>

            {/* Article Header card */}
            <div className="bg-white border-2 border-black p-6 md:p-8 relative shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <span className="text-xs font-mono text-cyan-600 font-extrabold uppercase tracking-widest">
                {activeArticle?.category}
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-black font-sans text-black uppercase tracking-tight mt-2 mb-4 leading-tight">
                {activeArticle?.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500 border-t border-neutral-100 pt-4 font-bold">
                <span>By {STRATEGIST_NAME} • {activeArticle?.date} • {activeArticle?.readTime}</span>
              </div>
            </div>

            {/* Full Markdown Render Content */}
            <div className="bg-white border-2 border-black p-6 md:p-8 relative shadow-[4px_4px_0px_rgba(0,0,0,1)] prose prose-neutral max-w-none">
              {activeArticle?.contentMarkdown && renderSimpleMarkdown(activeArticle.contentMarkdown)}
            </div>

            {/* Bottom Back Button */}
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setSelectedArticleId(null)}
                className="group inline-flex items-center gap-2 bg-black border-2 border-black text-xs font-mono font-bold text-white hover:bg-cyan-400 hover:text-black hover:border-black py-3 px-6 uppercase shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Return to Insights List</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
