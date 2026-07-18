"use client";

import Link from "next/link";
import { ArrowRight, Check, HelpCircle, MapPin, Building } from "lucide-react";
import { motion } from "motion/react";
import JsonLd from "@/components/JsonLd";
import { 
  getBreadcrumbSchema 
} from "@/lib/schemas";

export default function LahorePage() {
  const faqItems = [
    {
      q: "Do you offer SEO services specifically for businesses in Lahore?",
      a: "Yes — in addition to global B2B semantic SEO and GEO consulting, dedicated local and regional SEO support is available for Lahore-based businesses. This includes targeting localized search intents, configuring Google Business Profiles, mapping geographical neighborhood content schemas, and outranking competing local agencies."
    }
  ];

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations/lahore" },
    { name: "Lahore", url: "/locations/lahore" }
  ]);

  // Specific local schema for Lahore targeting
  const lahoreLocalSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Farrukh Abdullah SEO Consulting Lahore",
    "image": "https://farrukh.top/farrukh-photo-final.jpg",
    "telephone": "+923346536393",
    "email": "f.abdullah79@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lahore",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "31.5204",
      "longitude": "74.3587"
    },
    "url": "https://farrukh.top/locations/lahore",
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Lahore"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Faisalabad"
      }
    ]
  };

  return (
    <div className="pt-12 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      <JsonLd id="schema-lahore-local" data={lahoreLocalSchema} />
      <JsonLd id="schema-breadcrumb-lahore" data={breadcrumbs} />

      {/* Header Block */}
      <div className="border-b-2 border-black pb-12">
        <span className="text-[10px] font-mono tracking-widest text-cyan-600 font-bold block uppercase mb-2">
          Local Market Presence & Regional Advisory
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans text-black tracking-tight uppercase leading-[1.1]">
          SEO Services in Lahore
        </h1>
        <p className="text-sm md:text-base text-neutral-600 mt-4 max-w-3xl font-semibold leading-relaxed">
          Unlock market-leading search visibility. As a senior semantic SEO expert, I help Lahore's premier brands, B2B companies, and regional service enterprises secure high-intent rankings on Google and citations in AI search engines.
        </p>
      </div>

      {/* Core Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Detailed Explanations */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1: Introduction */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-600" />
              <span>Looking for the Best SEO Expert in Lahore?</span>
            </h2>
            <div className="text-xs md:text-sm text-neutral-700 leading-relaxed font-medium space-y-4 font-sans">
              <p>
                Based in Faisalabad and working across the Faisalabad-Lahore economic corridor, I understand the local Lahore market dynamics deeply. Whether you represent a tech company in Johar Town, a retail manufacturer in Gulberg, or a service brand catering to Defence (DHA), generic monthly SEO packages will not get you results.
              </p>
              <p>
                To genuinely dominate the local and international search results, you need an entity-based SEO strategy. As a certified <strong>best SEO expert in Lahore</strong>, I bypass outdated backlink networks, focusing purely on <strong>Topical Authority</strong>, machine-readable JSON-LD schema architectures, and brand citations in conversational AI search engines.
              </p>
            </div>
          </section>

          {/* Section 2: Core Offerings */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-2">
              <Building className="w-5 h-5 text-cyan-600" />
              <span>SEO Offerings Designed for Lahore Businesses</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-neutral-50 p-5 border-2 border-black">
                <span className="font-sans font-black text-xs text-black uppercase block mb-1">Corporate SEO</span>
                <p className="text-[10px] text-neutral-600 font-medium leading-relaxed">
                  Establish dominant authority hubs to command industry-specific search terms and drive sustainable regional pipelines.
                </p>
              </div>
              <div className="bg-neutral-50 p-5 border-2 border-black">
                <span className="font-sans font-black text-xs text-black uppercase block mb-1">Google 3-Pack</span>
                <p className="text-[10px] text-neutral-600 font-medium leading-relaxed">
                  Put your business directly in front of Lahore customers with Google Business Profile optimizations and coordinate schemas.
                </p>
              </div>
              <div className="bg-neutral-50 p-5 border-2 border-black">
                <span className="font-sans font-black text-xs text-black uppercase block mb-1">AI Citations (GEO)</span>
                <p className="text-[10px] text-neutral-600 font-medium leading-relaxed">
                  Prepare your B2B or consumer brand to be cited by modern AI answers including ChatGPT Search and Perplexity.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Deliverables */}
          <section className="space-y-4 bg-white border-2 border-black p-6 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <h2 className="text-lg md:text-xl font-black font-sans text-black uppercase tracking-tight border-b border-neutral-100 pb-3">
              Core Strategic Focus List
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {[
                "Targeted local Lahore search intent mapping",
                "Google Business Profile optimization audits",
                "Entity SEO and Wikidata connection maps",
                "Localized landing page geographic schemas",
                "Competitor gap analysis for Lahore markets",
                "Crawl and index prioritization via Google API"
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

          {/* Section 4: Local FAQs */}
          <section className="space-y-4 border-t border-neutral-200 pt-8">
            <h2 className="text-xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-1.5">
              <HelpCircle className="w-5 h-5 text-cyan-600" />
              <span>Lahore SEO Specialist FAQs</span>
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
              CAPABILITIES
            </span>
            <h3 className="text-xs font-black uppercase text-black mb-4">Core Channels</h3>
            <div className="space-y-3">
              <Link
                href="/services/semantic-seo"
                className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
              >
                <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-cyan-600 uppercase">Service Channel</span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                  Semantic SEO & Topical Authority
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-black text-white p-6 border-2 border-black shadow-[4px_4px_0px_rgba(34,211,238,1)]">
            <span className="text-[9px] font-mono tracking-widest text-cyan-400 font-bold block mb-1 uppercase">
              LOCAL STRATEGY
            </span>
            <h3 className="text-lg font-black font-sans uppercase tracking-tight text-white mb-2 leading-tight">
              Ready to outrank Lahore agencies?
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-medium">
              Let's stop chasing generic search metrics. We'll audit your physical brand locations, optimize your knowledge maps, and lock down regional authority.
            </p>
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-1.5 bg-cyan-400 hover:bg-cyan-300 text-black font-sans text-xs font-bold uppercase tracking-wider py-3 border-2 border-black transition-all"
            >
              <span>Audit My Lahore Business</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
