"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import JsonLd from "@/components/JsonLd";
import { LOCAL_NICHES } from "@/lib/localNiches";
import { 
  SEMANTIC_SEO_SERVICE_SCHEMA, 
  AI_SEO_SERVICE_SCHEMA,
  LOCAL_SEO_SERVICE_SCHEMA
} from "@/lib/schemas";

export default function ServicesIndex() {
  const serviceCards = [
    {
      id: "semantic-seo",
      title: "Semantic SEO & Topical Authority",
      description: "Turn scattered web pages into a fully-connected topical authority structure that search engines can't ignore, mapped to verified knowledge graphs and Wikidata coordinates.",
      path: "/services/semantic-seo",
      deliverables: [
        "Entity mapping against Wikidata and Wikipedia",
        "Topical authority and content gap analysis",
        "Internal linking structured around topic clusters",
        "Content rewritten for semantic density, not keyword count",
        "Indexing and crawl audits via Search Console"
      ]
    },
    {
      id: "ai-seo-consulting",
      title: "AI SEO Consulting",
      description: "AI SEO consulting covering Generative Engine Optimization (GEO) and technical AI-crawler accessibility — get cited by ChatGPT Search, Perplexity AI, and Google AI Overviews by restructuring content for how LLM transformers actually retrieve and summarize information.",
      path: "/services/ai-seo-consulting",
      deliverables: [
        "AI citation share-of-voice diagnostic",
        "Content restructured for how LLMs actually parse pages",
        "JSON-LD structured data implementation",
        "Answer-first copy formatted for AI extraction",
        "AI crawler accessibility checks"
      ]
    },
    {
      id: "local-seo",
      title: "Local SEO Services",
      description: "Design and build localized search systems focusing on local map pack visibility, localized landing page architecture, Google Business Profile optimization, nested local schema, and complete call/lead tracking.",
      path: "/services/local-seo",
      deliverables: [
        "Local map pack visibility systems",
        "Localized landing page architecture",
        "Google Business Profile optimization",
        "Nested local schema markup",
        "Call and lead tracking configurations"
      ]
    }
  ];

  return (
    <div className="pt-12 pb-20 px-6 max-w-7xl mx-auto space-y-12">
      <JsonLd id="schema-services-semantic" data={SEMANTIC_SEO_SERVICE_SCHEMA} />
      <JsonLd id="schema-services-ai-seo" data={AI_SEO_SERVICE_SCHEMA} />
      <JsonLd id="schema-services-local" data={LOCAL_SEO_SERVICE_SCHEMA} />

      <div className="mb-12 text-center max-w-3xl mx-auto">
        <span className="text-[10px] font-mono tracking-widest text-cyan-600 font-bold block uppercase mb-2">
          Strategic Focus Areas
        </span>
        <h1 className="text-4xl md:text-5xl font-black font-sans text-black tracking-tight uppercase">
          Semantic SEO & AI Optimization Services
        </h1>
        <p className="text-sm text-neutral-600 mt-3 font-semibold leading-relaxed">
          I design, structure, and optimize your web presence so search engines and AI models understand exactly who you are, what you offer, and why you should be the primary cited answer.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {serviceCards.map((srv, idx) => (
          <motion.div
            key={srv.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white border-2 border-black p-6 md:p-8 flex flex-col justify-between hover:border-cyan-500 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all group"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-cyan-600 font-bold block uppercase">
                  Service / Plan 0{idx + 1}
                </span>
                <h2 className="text-xl font-black font-sans text-black uppercase tracking-tight group-hover:text-cyan-600 transition-colors">
                  {srv.title}
                </h2>
              </div>

              <p className="text-xs leading-relaxed text-neutral-700 font-medium">
                {srv.description}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-neutral-100">
                <span className="text-[9px] font-mono text-neutral-500 tracking-wider uppercase block font-bold">
                  Core Deliverables
                </span>
                <div className="space-y-2">
                  {srv.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-neutral-700">
                      <div className="w-4 h-4 bg-neutral-100 border border-neutral-200 text-cyan-600 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-sans text-[11px] font-bold leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <Link
                href={srv.path}
                className="w-full flex items-center justify-center gap-1.5 bg-cyan-400 hover:bg-cyan-300 text-black font-sans text-xs font-bold uppercase tracking-wider py-3 border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Explore Deliverables</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Local SEO by Industry */}
      <section className="border-t border-neutral-200 pt-12">
        <div className="mb-8">
          <span className="text-[10px] font-mono tracking-widest text-emerald-600 font-bold block uppercase mb-2">
            Local Lead Generation
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-sans text-black tracking-tight uppercase">
            Local SEO by Industry
          </h2>
          <p className="text-xs md:text-sm text-neutral-600 mt-2 max-w-2xl font-semibold">
            Dedicated local search systems for service businesses that need map pack rankings, phone calls, and booked appointments — not blog posts. Priced by market and scope, so affordable local SEO services near you stay proportional to what your city actually requires.
          </p>
          <p className="text-[11px] md:text-xs text-neutral-500 mt-2 max-w-2xl font-medium">
            Every industry page below explains what local SEO includes and what it costs in your market — no retainer for work the local bar doesn't require.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {LOCAL_NICHES.map((n) => (
            <Link
              key={n.slug}
              href={`/services/${n.slug}`}
              className="group bg-white border-2 border-black p-5 shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <span className="text-[8px] font-mono tracking-widest text-neutral-400 font-bold block uppercase mb-1.5">
                SEO for
              </span>
              <span className="block text-sm font-black font-sans text-black uppercase tracking-tight group-hover:text-emerald-600 transition-colors">
                {n.industry}
              </span>
              <span className="inline-flex items-center gap-1 mt-3 text-[10px] font-mono font-bold text-emerald-600 uppercase">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
