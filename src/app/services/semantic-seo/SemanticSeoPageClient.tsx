"use client";

import Link from "next/link";
import { ArrowRight, Check, HelpCircle, ArrowUpRight, Layers, Compass } from "lucide-react";
import { motion } from "motion/react";
import JsonLd from "@/components/JsonLd";
import { 
  SEMANTIC_SEO_SERVICE_SCHEMA, 
  getBreadcrumbSchema 
} from "@/lib/schemas";

export default function SemanticSeoPage() {
  const faqItems = [
    {
      q: "What is Semantic SEO and how does it differ from traditional SEO?",
      a: "Traditional SEO optimizes for keywords and backlinks. Semantic SEO optimizes for entities and relationships — structuring your content so search engines and AI models understand what your business actually is, what it does, and how it connects to other verified concepts (people, places, products, organizations). Instead of chasing keyword density, semantic SEO builds a knowledge graph around your brand that both Google and AI search engines can trust and cite."
    },
    {
      q: "How long does semantic SEO or GEO work take to show results?",
      a: "Most engagements run on a 90-day structured cycle, with early technical and schema improvements often visible within 4–6 weeks, and meaningful ranking or citation movement typically appearing between month two and three, depending on your site's starting technical health and competitive landscape."
    }
  ];

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Semantic SEO", url: "/services/semantic-seo" }
  ]);

  return (
    <div className="pt-12 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      <JsonLd id="schema-service-semantic" data={SEMANTIC_SEO_SERVICE_SCHEMA} />
      <JsonLd id="schema-breadcrumb-semantic" data={breadcrumbs} />

      {/* Header Block */}
      <div className="border-b-2 border-black pb-12">
        <span className="text-[10px] font-mono tracking-widest text-cyan-600 font-bold block uppercase mb-2">
          Service Page & Strategy Blueprint
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans text-black tracking-tight uppercase leading-[1.1]">
          Semantic SEO & Topical Authority
        </h1>
        <p className="text-sm md:text-base text-neutral-600 mt-4 max-w-3xl font-semibold leading-relaxed">
          Keywords are surface expressions. Entities and relationships represent the deep structure. I transform scattered web pages into a fully-connected topical authority matrix that search crawlers and AI models can't ignore.
        </p>
      </div>

      {/* Core Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Detailed Explanations */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1: What It Is */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-600" />
              <span>What is Semantic SEO?</span>
            </h2>
            <div className="text-xs md:text-sm text-neutral-700 leading-relaxed font-medium space-y-4 font-sans">
              <p>
                In the era of modern search engine algorithms and Large Language Models, simple keyword stuffing is obsolete. Search engines do not match text strings anymore; they map real-world <strong>entities</strong> (people, places, things, organizations) and calculate their relationships using machine-readable Knowledge Graphs.
              </p>
              <p>
                Semantic SEO is the discipline of structuring your content around verified conceptual nodes, disambiguating your topics with custom JSON-LD schema layouts, and mapping nested content networks to establish unbreakable topical authority.
              </p>
            </div>
          </section>

          {/* Section 2: How It Works */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-2">
              <Compass className="w-5 h-5 text-cyan-600" />
              <span>How the Strategy Works</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-neutral-50 p-5 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <span className="font-mono text-xs font-bold text-cyan-600 block mb-1">STAGE 01</span>
                <span className="font-sans font-black text-xs text-black uppercase block mb-2">Entity Mapping</span>
                <p className="text-[11px] text-neutral-600 font-medium leading-relaxed">
                  We discover and identify core subject entities relevant to your niche, linking them explicitly to verified coordinates inside Wikidata, DBpedia, and Wikipedia.
                </p>
              </div>
              <div className="bg-neutral-50 p-5 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <span className="font-mono text-xs font-bold text-cyan-600 block mb-1">STAGE 02</span>
                <span className="font-sans font-black text-xs text-black uppercase block mb-2">Authority Clustering</span>
                <p className="text-[11px] text-neutral-600 font-medium leading-relaxed">
                  We design an interconnected site hierarchy built around core pillar guides, logical parent/child pages, and contextual internal link paths.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Deliverables */}
          <section className="space-y-4 bg-white border-2 border-black p-6 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <h2 className="text-lg md:text-xl font-black font-sans text-black uppercase tracking-tight border-b border-neutral-100 pb-3">
              Included Deliverables & Strategy Assets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {[
                "Wikidata disambiguation linking",
                "Topical gap analysis and density auditing",
                "Internal link maps for optimal crawling",
                "Rewriting copy for semantic entity richness",
                "Knowledge panel trigger schemas",
                "Search Console crawl/index priority audits"
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-neutral-700">
                  <div className="w-4 h-4 bg-cyan-50 border border-cyan-200 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Proof / Case Study Link */}
          <section className="bg-cyan-50 border-2 border-black p-6 shadow-[3px_3px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[8px] font-mono tracking-wider bg-cyan-100 text-cyan-800 font-bold px-2 py-0.5 border border-cyan-300 uppercase block w-max mb-1.5">
                Proof of Concept
              </span>
              <h3 className="text-base font-black font-sans text-black uppercase">
                Case Study: Windcave (+112% Organic Lead Growth)
              </h3>
              <p className="text-[11px] text-neutral-600 font-medium mt-1">
                Learn how we successfully deployed entity-based SEO and structured semantic grids for an enterprise-level global payment processor.
              </p>
            </div>
            <Link
              href="/case-studies/windcave"
              className="flex items-center gap-1 text-xs font-mono font-bold bg-white text-black border-2 border-black py-2.5 px-4 uppercase hover:bg-neutral-50 shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Review Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </section>

          {/* Section 5: FAQs */}
          <section className="space-y-4 border-t border-neutral-200 pt-8">
            <h2 className="text-xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-1.5">
              <HelpCircle className="w-5 h-5 text-cyan-600" />
              <span>Semantic SEO FAQs</span>
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq, idx) => (
                <div key={idx} className="bg-neutral-50 p-5 border-2 border-black">
                  <span className="block text-xs font-extrabold uppercase font-sans text-black mb-1.5">
                    {faq.q}
                  </span>
                  <p className="text-xs text-neutral-600 font-medium leading-relaxed font-sans">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Sidebar Sidebar / CTA Block */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold block mb-2 uppercase">
              RESOURCES & INSIGHTS
            </span>
            <h3 className="text-xs font-black uppercase text-black mb-4">Supporting Publications</h3>
            <div className="space-y-3">
              <Link
                href="/insights/entity-based-content-architecture"
                className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
              >
                <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-cyan-600 uppercase">Article</span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                  Moving Beyond Keywords: Entity-Based Architecture
                </span>
              </Link>
              <Link
                href="/insights/topical-map-framework"
                className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
              >
                <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-cyan-600 uppercase">Article</span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                  How to Build a Topical Map
                </span>
              </Link>
              <Link
                href="/insights/schema-strategy-growth-brands"
                className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
              >
                <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-cyan-600 uppercase">Article</span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                  A Schema Strategy for Growth Brands
                </span>
              </Link>
              <Link
                href="/services/ai-seo-consulting"
                className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
              >
                <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-cyan-600 uppercase">Related Service</span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                  AI SEO Consulting (GEO)
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-black text-white p-6 border-2 border-black shadow-[4px_4px_0px_rgba(34,211,238,1)]">
            <span className="text-[9px] font-mono tracking-widest text-cyan-400 font-bold block mb-1 uppercase">
              GET AN AUDIT
            </span>
            <h3 className="text-lg font-black font-sans uppercase tracking-tight text-white mb-2 leading-tight">
              Is your content structured for entities?
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-medium">
              We'll map your site's target topics, look up your Wikidata disambiguation indexes, and design an airtight cluster layout for your domain.
            </p>
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-1.5 bg-cyan-400 hover:bg-cyan-300 text-black font-sans text-xs font-bold uppercase tracking-wider py-3 border-2 border-black transition-all"
            >
              <span>Book Strategy Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
