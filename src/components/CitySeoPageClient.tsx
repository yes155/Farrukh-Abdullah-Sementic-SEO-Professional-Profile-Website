"use client";

import Link from "next/link";
import { ArrowRight, Check, HelpCircle, MapPin, Building, Landmark, Crosshair } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, CANONICAL_DOMAIN } from "@/lib/schemas";
import type { City } from "@/lib/locations";
import { CITIES, getCityBySlug } from "@/lib/locations";
import { getNicheBySlug } from "@/lib/localNiches";

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
    { name: "Services", url: "/services" },
    { name: "Local SEO", url: "/services/local-seo" },
    { name: city.name, url: `/locations/${city.slug}` }
  ]);

  const citySchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${CANONICAL_DOMAIN}/locations/${city.slug}#localbusiness`,
    "name": `Farrukh Abdullah SEO Consulting ${city.name}`,
    "description": `Local SEO services for businesses in ${city.name}, ${city.stateName} — Google Business Profile optimization, service-area landing pages for ${city.neighborhoods.slice(0, 3).join(", ")}, ${city.state}-specific citations, and call tracking.`,
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
    "hasMap": `https://www.google.com/maps?q=${city.latitude},${city.longitude}`,
    "url": `${CANONICAL_DOMAIN}/locations/${city.slug}`,
    "priceRange": "$$",
    "sameAs": ["https://www.linkedin.com/in/farrukh-abdullah-5a218424/"],
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": `${city.name}, ${city.stateName}`
      },
      ...city.neighborhoods.map((neighborhood) => ({
        "@type": "AdministrativeArea",
        "name": `${neighborhood}, ${city.name}`
      }))
    ]
  };

  const highlighted = city.relatedNiches
    .map((slug) => getNicheBySlug(slug))
    .filter((n): n is NonNullable<typeof n> => Boolean(n));

  const siblingCities = city.relatedCities
    .map((slug) => getCityBySlug(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const remainingCities = CITIES.filter(
    (c) => c.slug !== city.slug && !city.relatedCities.includes(c.slug)
  );

  const INSIGHT_LABELS: Record<string, { label: string }> = {
    "ins-04": { label: "Local Entity SEO: How AI Search Understands Local Businesses" },
    "local-businesses-ai-search": { label: "Local Businesses in AI Search: Being the Entity AI Names" },
    "us-cities-local-seo-opportunity": { label: "Local SEO Opportunity by US City — 2026 Data" },
    "entity-first-geo": { label: "Entity-First GEO: How Semantic SEO Wins AI Citations" },
    "geo-measurement-stack": { label: "The GEO Measurement Stack: Citation SOV & Answer Share" }
  };

  const insightLabel = INSIGHT_LABELS[city.relatedInsight]?.label ?? "Local SEO Strategy";

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
        <div className="flex flex-wrap gap-2 mt-6">
          {city.zipCodes.map((zip) => (
            <span key={zip} className="text-[9px] font-mono bg-neutral-100 text-neutral-600 border border-neutral-200 px-2 py-0.5 uppercase font-bold">
              ZIP {zip}
            </span>
          ))}
        </div>
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

          {/* Section 3: Local Market Intelligence */}
          <section className="space-y-4 bg-white border-2 border-black p-6 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <h2 className="text-lg md:text-xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-2 border-b border-neutral-100 pb-3">
              <Crosshair className="w-5 h-5 text-cyan-600" />
              <span>{city.name} Local Market Intelligence</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-3">
                <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold block uppercase">
                  Service-Area ZIP Codes
                </span>
                <div className="flex flex-wrap gap-2">
                  {city.zipCodes.map((zip) => (
                    <span key={zip} className="text-[10px] font-mono font-bold bg-cyan-50 border border-cyan-200 text-cyan-700 px-2 py-1 uppercase">
                      {zip}
                    </span>
                  ))}
                </div>

                <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold block uppercase pt-3">
                  Landmarks & Districts
                </span>
                <ul className="space-y-1.5">
                  {city.landmarks.map((lm) => (
                    <li key={lm} className="flex items-start gap-2 text-xs text-neutral-700 font-semibold">
                      <Landmark className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                      {lm}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold block uppercase">
                  Key Streets & Corridors
                </span>
                <ul className="space-y-1.5">
                  {city.streets.map((st) => (
                    <li key={st} className="flex items-start gap-2 text-xs text-neutral-700 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                      {st}
                    </li>
                  ))}
                </ul>

                <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold block uppercase pt-3">
                  Citation Directories
                </span>
                <div className="flex flex-wrap gap-2">
                  {city.directories.map((d) => (
                    <span key={d} className="text-[10px] font-mono font-bold bg-neutral-50 border border-neutral-200 text-neutral-700 px-2 py-1 uppercase">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Verified Local Facts */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-2">
              <Landmark className="w-5 h-5 text-cyan-600" />
              <span>Verified {city.name} Service-Area Facts</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {city.localFacts.map((fact) => (
                <div key={fact.label} className="bg-neutral-50 p-5 border-2 border-black">
                  <span className="font-mono text-xs font-bold text-cyan-600 block mb-1 uppercase">{fact.label}</span>
                  <p className="text-[11px] text-neutral-600 font-medium leading-relaxed">{fact.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] font-mono text-neutral-400 font-bold uppercase">
              Operational detail like this is what Google&apos;s local algorithm and AI answer engines extract to verify a real {city.name} business — boilerplate never matches it.
            </p>
          </section>

          {/* Section 5: Deliverables */}
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
                `Neighborhood-level content structured for ${city.zipCodes.join(", ")} and ${city.landmarks[0].toLowerCase()}`,
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

          {/* Section 6: Case Study + Article Bridge */}
          <section className="bg-cyan-50 border-2 border-black p-6 shadow-[3px_3px_0px_rgba(0,0,0,1)] space-y-3">
            <span className="text-[8px] font-mono tracking-wider bg-cyan-100 text-cyan-800 font-bold px-2 py-0.5 border border-cyan-300 uppercase block w-max">
              Local Results
            </span>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black font-sans text-black uppercase">
                  Case Study: 1,200+ Calls from Local Service Niches
                </h3>
                <p className="text-[11px] text-neutral-600 font-medium mt-1">
                  The same localized system architecture I apply to {city.name} ranked 12 separate assets inside map packs and captured verified inbound calls in competitive US service niches.
                </p>
              </div>
              <Link
                href={city.relatedCaseStudyPath}
                className="flex items-center gap-1 text-xs font-mono font-bold bg-white text-black border-2 border-black py-2.5 px-4 uppercase hover:bg-neutral-50 shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Explore Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="border-t border-cyan-200 pt-3 mt-1">
              <Link
                href={`/insights/${city.relatedInsight}`}
                className="text-xs font-bold text-cyan-800 underline decoration-2 underline-offset-2 hover:text-black transition-colors"
              >
                Read: {insightLabel} &rarr;
              </Link>
            </div>
          </section>

          {/* Section 7: FAQs */}
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
              NEARBY MARKETS
            </span>
            <h3 className="text-xs font-black uppercase text-black mb-4">Local SEO Locations</h3>
            <div className="space-y-3">
              {siblingCities.map((c) => (
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
              {remainingCities.slice(0, 2).map((c) => (
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
                href="/services/local-seo"
                className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
              >
                <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-cyan-600 uppercase">Service Hub</span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                  Local SEO Services Overview
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold block mb-2 uppercase">
              LOCAL INDUSTRIES
            </span>
            <h3 className="text-xs font-black uppercase text-black mb-4">SEO by Industry</h3>
            <div className="space-y-3">
              {highlighted.map((n) => (
                <Link
                  key={n.slug}
                  href={`/services/${n.slug}`}
                  className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
                >
                  <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-cyan-600 uppercase">Local Niche</span>
                  <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                    SEO for {n.industry}
                  </span>
                </Link>
              ))}
              <Link
                href="/services/local-seo"
                className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
              >
                <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-cyan-600 uppercase">Service Hub</span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                  All Local SEO Services
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
