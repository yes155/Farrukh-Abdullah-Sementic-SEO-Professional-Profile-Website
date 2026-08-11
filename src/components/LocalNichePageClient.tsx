"use client";

import Link from "next/link";
import { ArrowRight, Check, HelpCircle, MapPin, ArrowUpRight, Home } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, ORGANIZATION_ID, CANONICAL_DOMAIN } from "@/lib/schemas";
import type { Niche } from "@/lib/localNiches";
import { LOCAL_NICHES } from "@/lib/localNiches";
import { CITIES } from "@/lib/locations";

export default function LocalNichePageClient({ niche }: { niche: Niche }) {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Local SEO", url: "/services/local-seo" },
    { name: niche.industry, url: `/services/${niche.slug}` }
  ]);

  const costKeywords: { question: string; answer: string }[] = [
    {
      question: `How much does local SEO for ${niche.industry.toLowerCase()} cost?`,
      answer: `Local SEO for ${niche.industry.toLowerCase()} is priced by market and scope, not by the number of keywords. A complete system — Google Business Profile optimization, ${niche.singular.toLowerCase()} schema, service-area landing pages, citations, and call tracking — typically runs in the low-to-mid four figures per month. The biggest cost driver is your market: a dense metro with established incumbents costs more than an underserved area where the fundamentals alone move rankings. I scope to the market you compete in, so you're not paying for work the local bar doesn't require.`
    },
    {
      question: `Where can I find affordable local SEO services near me for ${niche.industry.toLowerCase()}?`,
      answer: `Affordable local SEO for ${niche.industry.toLowerCase()} starts with the fundamentals competitors skip: a complete Google Business Profile, consistent NAP data, and service-area pages. Most businesses pay for "affordable local SEO services near me" and get a retainer for work that never moves the map pack. I keep the scope tight — the deliverables that actually rank a ${niche.singular.toLowerCase()} in your service areas — so the monthly investment stays proportional to what your market requires, and you can see calls come in before scaling.`
    }
  ];

  const extendedKeywords = [...niche.keywords, ...costKeywords];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL_DOMAIN}/services/${niche.slug}/#service`,
    "name": `Local SEO for ${niche.industry}`,
    "serviceType": `Local SEO for ${niche.industry}`,
    "provider": {
      "@id": ORGANIZATION_ID
    },
    "areaServed": {
      "@id": ORGANIZATION_ID
    },
    "description": niche.intro,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Core Deliverables",
      "itemListElement": niche.deliverables.map((d) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": d
        }
      }))
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ...niche.faqs.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      })),
      ...niche.keywords.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      })),
      ...costKeywords.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    ]
  };

  return (
    <div className="pt-12 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      <JsonLd id={`schema-service-${niche.slug}`} data={serviceSchema} />
      <JsonLd id={`schema-breadcrumb-${niche.slug}`} data={breadcrumbs} />
      <JsonLd id={`schema-faq-${niche.slug}`} data={faqSchema} />

      {/* Header Block */}
      <div className="border-b-2 border-black pb-12">
        <span className="text-[10px] font-mono tracking-widest text-emerald-600 font-bold block uppercase mb-2">
          {niche.eyebrow}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans text-black tracking-tight uppercase leading-[1.1]">
          {niche.headline}
        </h1>
        <p className="text-sm md:text-base text-neutral-600 mt-4 max-w-3xl font-semibold leading-relaxed">
          {niche.intro}
        </p>
      </div>

      {/* Core Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Detailed Content */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1: Strategies */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span>Local Search Strategy</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {niche.strategies.map((s, idx) => (
                <div key={idx} className="bg-neutral-50 p-5 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  <span className="font-mono text-xs font-bold text-emerald-600 block mb-1">STRATEGY 0{idx + 1}</span>
                  <span className="font-sans font-black text-xs text-black uppercase block mb-2">{s.title}</span>
                  <p className="text-[11px] text-neutral-600 font-medium leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Deliverables */}
          <section className="space-y-4 bg-white border-2 border-black p-6 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <h2 className="text-lg md:text-xl font-black font-sans text-black uppercase tracking-tight border-b border-neutral-100 pb-3">
              Included {niche.singular} SEO Deliverables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {niche.deliverables.map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-neutral-700">
                  <div className="w-4 h-4 bg-emerald-50 border border-emerald-250 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Long-tail keyword cluster */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span>What {niche.industry} SEO Actually Covers</span>
            </h2>
            <div className="space-y-4">
              {extendedKeywords.map((k, idx) => (
                <div key={idx} className="bg-white border-2 border-black p-6 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                  <h3 className="font-sans font-black text-sm text-black uppercase tracking-tight mb-2">
                    {k.question}
                  </h3>
                  <p className="text-xs text-neutral-600 font-medium leading-relaxed">{k.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Proof / Case Study Link */}
          <section className="bg-emerald-50 border-2 border-black p-6 shadow-[3px_3px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[8px] font-mono tracking-wider bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 border border-emerald-300 uppercase block w-max mb-1.5">
                Local Results
              </span>
              <h3 className="text-base font-black font-sans text-black uppercase">
                Case Study: 1,200+ Calls from Local Service Niches
              </h3>
              <p className="text-[11px] text-neutral-600 font-medium mt-1">
                How a localized SEO system ranked 12 separate assets inside map packs and captured verified inbound calls in competitive US service niches.
              </p>
            </div>
            <Link
              href="/case-studies/local-seo-systems"
              className="flex items-center gap-1 text-xs font-mono font-bold bg-white text-black border-2 border-black py-2.5 px-4 uppercase hover:bg-neutral-50 shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Explore Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </section>

          {/* Section 5: FAQs */}
          <section className="space-y-4 border-t border-neutral-200 pt-8">
            <h2 className="text-xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-1.5">
              <HelpCircle className="w-5 h-5 text-emerald-600" />
              <span>{niche.industry} SEO FAQs</span>
            </h2>
            <div className="space-y-4">
              {niche.faqs.map((faq, idx) => (
                <div key={idx} className="bg-neutral-50 p-5 border-2 border-black">
                  <span className="block text-xs font-extrabold uppercase font-sans text-black mb-1.5">{faq.q}</span>
                  <p className="text-xs text-neutral-600 font-medium leading-relaxed font-sans">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold block mb-2 uppercase">
              LOCAL INDUSTRIES
            </span>
            <h3 className="text-xs font-black uppercase text-black mb-4">SEO by Industry</h3>
            <div className="space-y-3">
              {LOCAL_NICHES.filter((n) => n.slug !== niche.slug).map((n) => (
                <Link
                  key={n.slug}
                  href={`/services/${n.slug}`}
                  className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
                >
                  <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-emerald-600 uppercase">Local Niche</span>
                  <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                    SEO for {n.industry}
                  </span>
                </Link>
              ))}
              <Link
                href="/services/local-seo"
                className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
              >
                <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-emerald-600 uppercase">All Local SEO</span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                  Local SEO Services Overview
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold block mb-2 uppercase">
              US MARKETS
            </span>
            <h3 className="text-xs font-black uppercase text-black mb-4">Local SEO by City</h3>
            <div className="space-y-3">
              <Link
                href="/"
                className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
              >
                <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-emerald-600 uppercase">Home</span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                  <span className="inline-flex items-center gap-1"><Home className="w-3 h-3" /> Farrukh Abdullah</span>
                </span>
              </Link>
              {CITIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.slug}`}
                  className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
                >
                  <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-emerald-600 uppercase">{c.stateName}</span>
                  <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                    {c.name}, {c.state}
                  </span>
                </Link>
              ))}
              <Link
                href="/locations"
                className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
              >
                <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-emerald-600 uppercase">All Markets</span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                  All Locations
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-black text-white p-6 border-2 border-black shadow-[4px_4px_0px_rgba(52,211,153,1)]">
            <span className="text-[9px] font-mono tracking-widest text-emerald-400 font-bold block mb-1 uppercase">
              CAPTURE LOCAL DEMAND
            </span>
            <h3 className="text-lg font-black font-sans uppercase tracking-tight text-white mb-2 leading-tight">
              Ready to rank for {niche.industry.toLowerCase()} searches in your area?
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-medium">
              We'll audit your local search visibility, review your Google Business Profile, and map a local lead-gen campaign for your market.
            </p>
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-1.5 bg-emerald-400 hover:bg-emerald-300 text-black font-sans text-xs font-bold uppercase tracking-wider py-3 border-2 border-black transition-all"
            >
              <span>Audit My Local Presence</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
