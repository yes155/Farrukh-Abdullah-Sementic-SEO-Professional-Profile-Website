"use client";

import Link from "next/link";
import { ArrowRight, Check, HelpCircle, MapPin, Building } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, CANONICAL_DOMAIN } from "@/lib/schemas";
import type { City } from "@/lib/locations";
import { CITIES } from "@/lib/locations";
import { LOCAL_NICHES } from "@/lib/localNiches";

export default function CitySeoPageClient({ city }: { city: City }) {
  const faqItems = [
    {
      q: `Do you provide local SEO services for businesses in ${city.name}?`,
      a: `Yes — in addition to global semantic SEO and GEO consulting, dedicated local SEO systems are available for ${city.name}, ${city.stateName} businesses. This includes Google Business Profile optimization, ${city.state}-specific citation alignment, service-area landing pages for ${city.neighborhoods.join(", ")}, and call tracking built to generate leads from local search.`
    },
    {
      q: `Can you compete with local agencies already ranking in ${city.name}?`,
      a: `Yes. Most ${city.name} agencies sell generic monthly packages. I build entity-based local systems — nested LocalBusiness schema, per-neighborhood landing pages, and verified citation networks — which are the signals both Google's map pack and AI answer engines weight most heavily for local trust.`
    },
    {
      q: `How much does local SEO cost for a ${city.name} business?`,
      a: `Local SEO is priced by market and scope, not by keyword count. A complete system — Google Business Profile optimization, local schema, service-area landing pages for ${city.neighborhoods.join(", ")}, citations, and call tracking — typically runs in the low-to-mid four figures per month. ${city.name}'s competitive position sets the bar: the fundamentals matter most in less crowded markets, while denser markets require more review and citation work.`
    },
    {
      q: `Are there affordable local SEO services near me in ${city.name}?`,
      a: `Yes — affordable local SEO services start with the fundamentals competitors skip: a complete Google Business Profile, consistent NAP data, and service-area pages. I keep the scope tight and proportional to what the ${city.name} market actually requires, so you see calls come in before scaling the investment.`
    }
  ];

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations" },
    { name: city.name, url: `/locations/${city.slug}` }
  ]);

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `Farrukh Abdullah SEO Consulting ${city.name}`,
    "image": `${CANONICAL_DOMAIN}/farrukh-photo-final.jpg`,
    "telephone": "+923346536393",
    "email": "f.abdullah79@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.state,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.latitude,
      "longitude": city.longitude
    },
    "url": `${CANONICAL_DOMAIN}/locations/${city.slug}`,
    "priceRange": "$$",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${city.name}, ${city.stateName}`
    }
  };

  const highlighted = LOCAL_NICHES.filter((n) =>
    city.industries.some((i) => n.industry === i)
  );

  const otherCities = CITIES.filter((c) => c.slug !== city.slug);

  return (
    <div className="pt-12 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      <JsonLd id={`schema-city-${city.slug}`} data={citySchema} />
      <JsonLd id={`schema-breadcrumb-${city.slug}`} data={breadcrumbs} />
      <JsonLd
        id={`schema-faq-${city.slug}`}
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map((item) => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a }
          }))
        }}
      />

      {/* Header Block */}
      <div className="border-b-2 border-black pb-12">
        <span className="text-[10px] font-mono tracking-widest text-cyan-600 font-bold block uppercase mb-2">
          Local SEO Services &middot; {city.region} &middot; {city.stateName}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans text-black tracking-tight uppercase leading-[1.1]">
          SEO Services in {city.name}, {city.state}
        </h1>
        <p className="text-sm md:text-base text-neutral-600 mt-4 max-w-3xl font-semibold leading-relaxed">
          {city.blurb}
        </p>
      </div>

      {/* Core Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Detailed Content */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1: Intro */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-600" />
              <span>Local SEO That Wins in {city.name}</span>
            </h2>
            <div className="text-xs md:text-sm text-neutral-700 leading-relaxed font-medium space-y-4 font-sans">
              <p>
                Generic monthly SEO packages don't work in a market as competitive as {city.name}, {city.state}. Ranking locally requires a system built around {city.name}&apos;s neighborhoods, service patterns, and competitors — not city-name keywords stuffed into boilerplate copy.
              </p>
              <p>
                My local SEO systems treat each service area as its own verified entity: nested LocalBusiness schema, Google Business Profile alignment, service-area landing pages, and consistent citations. That structure is what both Google&apos;s map pack and AI answer engines use to decide who is the trusted provider near the searcher.
              </p>
            </div>
          </section>

          {/* Section 2: Industries */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-2">
              <Building className="w-5 h-5 text-cyan-600" />
              <span>Local SEO by Industry in {city.name}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {highlighted.map((n) => (
                <Link
                  key={n.slug}
                  href={`/services/${n.slug}`}
                  className="bg-neutral-50 p-5 border-2 border-black hover:border-cyan-500 transition-colors"
                >
                  <span className="font-sans font-black text-xs text-black uppercase block mb-1">SEO for {n.industry}</span>
                  <p className="text-[10px] text-neutral-600 font-medium leading-relaxed">
                    {n.intro.split(".")[0]}.
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 3: Deliverables */}
          <section className="space-y-4 bg-white border-2 border-black p-6 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <h2 className="text-lg md:text-xl font-black font-sans text-black uppercase tracking-tight border-b border-neutral-100 pb-3">
              Included {city.name} Local SEO Deliverables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {[
                `Google Business Profile optimization for ${city.name}, ${city.state}`,
                "Nested schema.org LocalBusiness markups with geo-coordinates",
                `Service-area landing pages for ${city.neighborhoods.join(", ")}`,
                `${city.state}-specific citation and directory alignment`,
                "Neighborhood-level content structured for AI and map pack extraction",
                "Inbound call and form lead-generation tracking"
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

          {/* Section 4: FAQs */}
          <section className="space-y-4 border-t border-neutral-200 pt-8">
            <h2 className="text-xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-1.5">
              <HelpCircle className="w-5 h-5 text-cyan-600" />
              <span>{city.name} SEO Specialist FAQs</span>
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq, idx) => (
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
              MORE MARKETS
            </span>
            <h3 className="text-xs font-black uppercase text-black mb-4">Local SEO Locations</h3>
            <div className="space-y-3">
              {otherCities.slice(0, 5).map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.slug}`}
                  className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
                >
                  <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-cyan-600 uppercase">{c.stateName}</span>
                  <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                    SEO Services in {c.name}, {c.state}
                  </span>
                </Link>
              ))}
              <Link
                href="/locations"
                className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
              >
                <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-cyan-600 uppercase">All Markets</span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                  All Locations
                </span>
              </Link>
              <Link
                href="/insights/us-cities-local-seo-opportunity"
                className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
              >
                <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-cyan-600 uppercase">Local SEO Research</span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                  US Cities: 2026 Opportunity Data
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-black text-white p-6 border-2 border-black shadow-[4px_4px_0px_rgba(34,211,238,1)]">
            <span className="text-[9px] font-mono tracking-widest text-cyan-400 font-bold block mb-1 uppercase">
              LOCAL STRATEGY
            </span>
            <h3 className="text-lg font-black font-sans uppercase tracking-tight text-white mb-2 leading-tight">
              Ready to rank in {city.name}?
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-medium">
              We'll audit your local search presence in {city.name}, review your Google Business Profile, and map a lead-gen system for your service areas.
            </p>
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-1.5 bg-cyan-400 hover:bg-cyan-300 text-black font-sans text-xs font-bold uppercase tracking-wider py-3 border-2 border-black transition-all"
            >
              <span>Audit My {city.name} Presence</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
