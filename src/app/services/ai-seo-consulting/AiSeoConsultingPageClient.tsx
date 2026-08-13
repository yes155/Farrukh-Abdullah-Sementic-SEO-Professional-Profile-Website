"use client";

import Link from "next/link";
import { ArrowRight, Check, HelpCircle, ArrowUpRight, BrainCircuit, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import JsonLd from "@/components/JsonLd";
import { 
  AI_SEO_SERVICE_SCHEMA, 
  getBreadcrumbSchema 
} from "@/lib/schemas";

export default function AiSeoConsultingPage() {
  const faqItems = [
    {
      q: "How does Generative Engine Optimization (GEO) help brands get cited by AI search engines?",
      a: "GEO restructures your content so AI models like ChatGPT, Perplexity, and Google AI Overviews can extract, verify, and cite it directly in generated answers. This includes answer-first content structure, clean JSON-LD schema, unambiguous factual assertions, and clear entity relationships — the signals AI systems use to decide which sources are trustworthy enough to reference by name."
    },
    {
      q: "What's the difference between GEO and AEO?",
      a: "Generative Engine Optimization (GEO) is the broader discipline of making a brand visible and citable across all AI-driven search — including chat-based tools and AI Overviews. Answer Engine Optimization (AEO) is a more specific practice within GEO, focused on structuring content in direct, answer-first formats optimized for extraction by voice assistants and AI answer boxes. In practice, most engagements use both together."
    }
  ];

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "AI SEO Consulting", url: "/services/ai-seo-consulting" }
  ]);

  return (
    <div className="pt-12 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      <JsonLd id="schema-service-ai-seo" data={AI_SEO_SERVICE_SCHEMA} />
      <JsonLd id="schema-breadcrumb-ai-seo" data={breadcrumbs} />

      {/* Header Block */}
      <div className="border-b-2 border-black pb-12">
        <span className="text-[10px] font-mono tracking-widest text-cyan-600 font-bold block uppercase mb-2">
          AI & Generative Search Engineering
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans text-black tracking-tight uppercase leading-[1.1]">
          AI SEO Consulting
        </h1>
        <p className="text-sm md:text-base text-neutral-600 mt-4 max-w-3xl font-semibold leading-relaxed">
          AI-driven search engines do not just link pages — they summarize them and cite sources. This service covers <strong>Generative Engine Optimization (GEO)</strong> and technical AI-crawler accessibility: optimizing your content's structure, syntax, and schema signatures to establish your brand as the primary cited answer in ChatGPT Search, Perplexity, and Google AI Overviews.
        </p>
      </div>

      {/* Core Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Detailed Explanations */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1: What It Is */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-cyan-600" />
              <span>What is Generative Engine Optimization (GEO)?</span>
            </h2>
            <div className="text-xs md:text-sm text-neutral-700 leading-relaxed font-medium space-y-4 font-sans">
              <p>
                As users shift their searching habits from Google's standard blue links to conversational interfaces like <strong>ChatGPT</strong>, <strong>Perplexity</strong>, and <strong>Google AI Overviews</strong>, the goals of search marketing have evolved. Traditional indexing is no longer enough; your brand must secure persistent <strong>AI citations</strong>.
              </p>
              <p>
                Generative Engine Optimization is a technical and semantic framework that designs, structures, and formats your domain's information so Large Language Models can easily retrieve, parse, verify, and reference your business in generated responses.
              </p>
            </div>
          </section>

          {/* Section 2: How It Works */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-600" />
              <span>The Citation Engine Blueprint</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-neutral-50 p-5 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <span className="font-mono text-xs font-bold text-cyan-600 block mb-1">STRATEGY 01</span>
                <span className="font-sans font-black text-xs text-black uppercase block mb-2">Answer-First Syntactic Loops</span>
                <p className="text-[11px] text-neutral-600 font-medium leading-relaxed">
                  We rewrite key information chunks into direct, highly-informative assertions and tables that match the retrieval constraints of conversational LLM encoders.
                </p>
              </div>
              <div className="bg-neutral-50 p-5 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <span className="font-mono text-xs font-bold text-cyan-600 block mb-1">STRATEGY 02</span>
                <span className="font-sans font-black text-xs text-black uppercase block mb-2">Co-Citation Diagnostics</span>
                <p className="text-[11px] text-neutral-600 font-medium leading-relaxed">
                  We monitor your brand's share-of-voice across AI query models, structuring external authority links to increase co-citation weight within AI corpora.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Deliverables */}
          <section className="space-y-4 bg-white border-2 border-black p-6 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <h2 className="text-lg md:text-xl font-black font-sans text-black uppercase tracking-tight border-b border-neutral-100 pb-3">
              Core GEO Deliverables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {[
                "AI citation share-of-voice diagnostics",
                "Syntactic restructuring for LLM chunking",
                "Nested relational schema injection",
                "Table construction for numerical citations",
                "AI crawler capability & robots.txt audits",
                "Co-citation mapping across PR directories"
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
                Case Study: Azuno (+120% Organic Traffic in 4 Months)
              </h3>
              <p className="text-[11px] text-neutral-600 font-medium mt-1">
                Learn how semantic structuring and AI/LLM content alignment drove a San Francisco SaaS analytics platform to top 3 local rankings and stronger AI-search discoverability.
              </p>
            </div>
            <Link
              href="/case-studies/azuno"
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
              <span>Generative Search FAQs</span>
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
                href="/insights/geo-chatgpt-search-perplexity"
                className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
              >
                <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-cyan-600 uppercase">Article</span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                  Secure Brand Citations in ChatGPT & Perplexity
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
                href="/services/semantic-seo"
                className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
              >
                <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-cyan-600 uppercase">Related Service</span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                  Semantic SEO & Topical Authority
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-black text-white p-6 border-2 border-black shadow-[4px_4px_0px_rgba(34,211,238,1)]">
            <span className="text-[9px] font-mono tracking-widest text-cyan-400 font-bold block mb-1 uppercase">
              GET CITED
            </span>
            <h3 className="text-lg font-black font-sans uppercase tracking-tight text-white mb-2 leading-tight">
              Ready to secure your AI citation portfolio?
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-medium">
              We'll audit your current citations in Perplexity and ChatGPT, analyze your data assets, and construct direct factual models.
            </p>
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-1.5 bg-cyan-400 hover:bg-cyan-300 text-black font-sans text-xs font-bold uppercase tracking-wider py-3 border-2 border-black transition-all"
            >
              <span>Secure Citations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
