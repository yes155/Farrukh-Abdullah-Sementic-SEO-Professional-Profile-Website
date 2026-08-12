"use client";

import Link from "next/link";
import { ArrowLeft, Cpu, TrendingUp, ArrowRight, MapPin } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schemas";
import type { NicheCaseStudy } from "@/lib/caseStudies";
import { getNicheBySlug } from "@/lib/localNiches";
import { getCityBySlug } from "@/lib/locations";

export default function NicheCaseStudyPageClient({ study }: { study: NicheCaseStudy }) {
  const niche = getNicheBySlug(study.nicheSlug);
  const citySlug =
    study.city.toLowerCase() === "austin" ? "austin" :
    study.city.toLowerCase() === "chicago" ? "chicago" :
    study.city.toLowerCase() === "denver" ? "denver" :
    study.city.toLowerCase() === "phoenix" ? "phoenix" :
    study.city.toLowerCase() === "houston" ? "houston" :
    study.city.toLowerCase() === "miami" ? "miami" :
    study.city.toLowerCase() === "dallas" ? "dallas" :
    study.city.toLowerCase() === "seattle" ? "seattle" :
    study.city.toLowerCase() === "san francisco" ? "san-francisco" : undefined;
  const city = citySlug ? getCityBySlug(citySlug) : undefined;

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" },
    { name: study.headline, url: `/case-studies/${study.slug}` }
  ]);

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": study.headline,
    "description": study.challenge,
    "about": [
      { "@type": "Thing", "name": niche ? niche.industry : "Local SEO" },
      { "@type": "Thing", "name": "Local Lead Generation" }
    ],
    "author": { "@type": "Person", "name": "Farrukh Abdullah" }
  };

  return (
    <div className="pt-12 pb-20 px-6 max-w-5xl mx-auto space-y-12">
      <JsonLd id={`schema-breadcrumb-${study.slug}`} data={breadcrumbs} />
      <JsonLd id={`schema-case-${study.slug}`} data={caseStudySchema} />

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
        <span className="text-[10px] font-mono tracking-widest text-emerald-600 font-bold block uppercase mb-1.5">
          {study.eyebrow}
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black font-sans text-black uppercase tracking-tight leading-tight">
          {study.headline}
        </h1>
        <div className="flex flex-wrap gap-2 mt-4">
          {study.technologies.map((tech) => (
            <span key={tech} className="text-[9px] font-mono bg-neutral-100 text-neutral-600 border border-neutral-200 px-2 py-0.5 uppercase font-bold">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Client / Market block */}
      <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold block uppercase mb-1">
              Market
            </span>
            <span className="block text-sm font-black uppercase text-black">
              {study.city}, {study.state}
            </span>
            <span className="block text-[11px] font-mono font-bold text-neutral-500 uppercase mt-0.5">
              ZIP {study.zipCode}
            </span>
          </div>
          {study.clientName && (
            <div>
              <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold block uppercase mb-1">
                Client
              </span>
              <span className="block text-sm font-black uppercase text-black">
                {study.clientName}
              </span>
              {study.ownerName && (
                <span className="block text-[11px] font-mono font-bold text-neutral-500 uppercase mt-0.5">
                  {study.ownerName}
                </span>
              )}
            </div>
          )}
          <div>
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold block uppercase mb-1">
              Service Areas
            </span>
            <span className="block text-xs font-bold text-black uppercase leading-relaxed">
              {study.neighborhoods.join(", ")}
            </span>
          </div>
        </div>
      </div>

      {/* Core Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4">
        {/* Left: Challenge and Strategy */}
        <div className="md:col-span-8 space-y-8 font-sans text-neutral-700 font-medium text-xs md:text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-black uppercase text-black font-sans tracking-tight">
              The Client Challenge
            </h2>
            <p>{study.challenge}</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-black uppercase text-black font-sans tracking-tight">
              Localized SEO Strategy
            </h2>
            <p>{study.strategy}</p>
          </section>

          <section className="space-y-3 bg-neutral-50 border-2 border-black p-6 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            <h3 className="text-sm font-black uppercase text-black font-sans tracking-tight">
              Tactical Execution Plan
            </h3>
            <ul className="space-y-3 pt-2">
              {study.execution.map((exc, i) => (
                <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-neutral-800 leading-normal font-semibold">
                  <Cpu className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{exc}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right: Results Box */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-white border-2 border-black p-6 shadow-[5px_5px_0px_rgba(52,211,153,1)]">
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold block mb-2 uppercase">
              LEAD GENERATION REVENUE
            </span>
            <h3 className="text-xs font-black uppercase text-black border-b border-neutral-100 pb-2 mb-4">
              Campaign Returns
            </h3>
            <div className="space-y-4">
              {study.results.map((res, i) => (
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
            <span className="text-[9px] font-mono tracking-widest text-emerald-400 font-bold block mb-1.5 uppercase">
              STRATEGIC ALIGNMENT
            </span>
            <h4 className="text-xs font-black uppercase text-white mb-2 font-sans">
              {niche ? `SEO for ${niche.industry}` : "Local lead scale"}
            </h4>
            <p className="text-[11px] text-neutral-400 leading-normal mb-5 font-medium">
              {niche?.intro.split(".")[0]}.
            </p>
            <div className="space-y-2.5">
              {niche && (
                <Link
                  href={`/services/${niche.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-emerald-400 hover:bg-emerald-300 text-black font-sans text-[10px] font-bold uppercase tracking-wider py-2.5 border-2 border-black"
                >
                  <span>{niche.industry} SEO Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
              {city && (
                <Link
                  href={`/locations/${city.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-white font-sans text-[10px] font-bold uppercase tracking-wider py-2.5 border border-white"
                >
                  <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> SEO in {city.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
              <Link
                href="/insights/local-businesses-ai-search"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-transparent hover:bg-neutral-900 text-white font-sans text-[10px] font-bold uppercase tracking-wider py-2.5 border border-neutral-600"
              >
                <span>Read: Local Businesses in AI Search</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
