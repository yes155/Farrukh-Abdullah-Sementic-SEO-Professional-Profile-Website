"use client";

import Link from "next/link";
import { ArrowLeft, Cpu, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import JsonLd from "@/components/JsonLd";
import { FEATURED_PROJECTS } from "@/data";
import { getBreadcrumbSchema } from "@/lib/schemas";

export default function WindcavePage() {
  const project = FEATURED_PROJECTS[0];

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" },
    { name: "Windcave", url: "/case-studies/windcave" }
  ]);

  // Connect this case study to the PaymentGateway entity schema
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Semantic SEO Case Study: Windcave | +112% Organic Lead Growth",
    "description": "How implementing an entity-based topical authority architecture and structured payment schemas resulted in +112% organic lead registrations.",
    "about": [
      { "@type": "Thing", "name": "Semantic SEO" },
      { "@type": "Thing", "name": "Payment Gateway" }
    ],
    "author": {
      "@type": "Person",
      "name": "Farrukh Abdullah"
    }
  };

  return (
    <div className="pt-12 pb-20 px-6 max-w-5xl mx-auto space-y-12">
      <JsonLd id="schema-breadcrumb-windcave" data={breadcrumbs} />
      <JsonLd id="schema-case-windcave" data={caseStudySchema} />

      {/* Back button */}
      <div>
        <Link 
          href="/case-studies"
          className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase text-neutral-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Case Studies</span>
        </Link>
      </div>

      {/* Title block */}
      <div className="border-b-2 border-black pb-8">
        <span className="text-[10px] font-mono tracking-widest text-cyan-600 font-bold block uppercase mb-1.5">
          FINTECH & PAYMENTS ADVISORY
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-sans text-black uppercase tracking-tight leading-tight">
          Semantic SEO Case Study: Windcave
        </h1>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-[9px] font-mono bg-neutral-100 text-neutral-600 border border-neutral-200 px-2 py-0.5 uppercase font-bold">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Main Image */}
      <div className="border-2 border-black overflow-hidden relative aspect-video shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-neutral-100">
        <img
          src={project.imageSrc}
          alt="Windcave Case Study"
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Core Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4">
        {/* Left: Challenge and Strategy */}
        <div className="md:col-span-8 space-y-8 font-sans text-neutral-700 font-medium text-xs md:text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-black uppercase text-black font-sans tracking-tight">
              The Client Challenge
            </h2>
            <p>{project.challenge}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-black uppercase text-black font-sans tracking-tight">
              Strategic SEO Solution
            </h2>
            <p>{project.strategy}</p>
          </section>

          <section className="space-y-3 bg-neutral-50 border-2 border-black p-6 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            <h3 className="text-sm font-black uppercase text-black font-sans tracking-tight">
              Tactical Execution Plan
            </h3>
            <ul className="space-y-3 pt-2">
              {project.execution.map((exc, i) => (
                <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-neutral-800 leading-normal font-semibold">
                  <Cpu className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                  <span>{exc}</span>
                </li>
              ))}
            </ul>
          </section>

          {project.methodology && (
            <section className="space-y-3">
              <h2 className="text-lg font-black uppercase text-black font-sans tracking-tight">
                The Methodology
              </h2>
              <ol className="space-y-3 pt-1">
                {project.methodology.map((step, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-800 leading-normal">
                    <span className="w-5 h-5 bg-black text-cyan-400 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="font-medium">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {project.keyLearnings && (
            <section className="space-y-3">
              <h2 className="text-lg font-black uppercase text-black font-sans tracking-tight">
                Key Learnings
              </h2>
              <ul className="space-y-3 pt-1">
                {project.keyLearnings.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-neutral-800 leading-normal font-medium">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right: Results Box */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-white border-2 border-black p-6 shadow-[5px_5px_0px_rgba(34,211,238,1)]">
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold block mb-2 uppercase">
              MEASURABLE PIPELINE ROI
            </span>
            <h3 className="text-xs font-black uppercase text-black border-b border-neutral-100 pb-2 mb-4">
              Proven Results
            </h3>
            <div className="space-y-4">
              {project.results.map((res, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 bg-emerald-50 border border-emerald-250 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 rounded-full">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-sans font-extrabold text-neutral-950 uppercase tracking-tight leading-tight">
                    {res}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black text-white p-6 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <span className="text-[9px] font-mono tracking-widest text-cyan-400 font-bold block mb-1.5 uppercase">
              STRATEGIC ALIGNMENT
            </span>
            <h4 className="text-xs font-black uppercase text-white mb-2 font-sans">
              Deploy this methodology
            </h4>
            <p className="text-[11px] text-neutral-400 leading-normal mb-5 font-medium">
              This case study proves that structuring sites around entity-relationship nodes is the key to outranking raw competitors.
            </p>
            <div className="space-y-2.5">
              <Link
                href="/services/semantic-seo"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-cyan-400 hover:bg-cyan-300 text-black font-sans text-[10px] font-bold uppercase tracking-wider py-2.5 border-2 border-black"
              >
                <span>Semantic SEO Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/services/ai-seo-consulting"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-white font-sans text-[10px] font-bold uppercase tracking-wider py-2.5 border border-white"
              >
                <span>AI SEO / GEO Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/insights/entity-based-content-architecture"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-transparent hover:bg-neutral-900 text-white font-sans text-[10px] font-bold uppercase tracking-wider py-2.5 border border-neutral-600"
              >
                <span>Read: Entity-Based Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
