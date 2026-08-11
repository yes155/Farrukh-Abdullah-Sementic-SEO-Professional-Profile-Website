import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schemas";
import { CITIES } from "@/lib/locations";
import { LOCAL_NICHES } from "@/lib/localNiches";

export const metadata: Metadata = {
  title: "Local SEO Locations | Service Areas & Markets",
  description:
    "Local SEO service markets served remotely from Faisalabad, Pakistan — dedicated local SEO systems for businesses in Lahore, Austin, Chicago, Denver, Houston, Dallas, Phoenix, Miami, Seattle, and San Francisco, across 16 service industries.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Local SEO Locations | Farrukh Abdullah",
    description:
      "Local SEO systems for businesses in Lahore, Austin, Chicago, Denver, Houston, Dallas, Phoenix, Miami, Seattle, and San Francisco — Google Business Profile optimization, map pack visibility, and service-area landing pages.",
    url: "/locations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Locations | Farrukh Abdullah",
    description:
      "Local SEO systems for businesses in Lahore, Austin, Chicago, Denver, Houston, Dallas, Phoenix, Miami, Seattle, and San Francisco.",
  },
};

const breadcrumbs = getBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Locations", url: "/locations" }
]);

export default function LocationsPage() {
  return (
    <div className="pt-12 pb-20 px-6 max-w-7xl mx-auto space-y-12">
      <JsonLd id="schema-breadcrumb-locations" data={breadcrumbs} />

      {/* Header Block */}
      <div className="border-b-2 border-black pb-10">
        <span className="text-[10px] font-mono tracking-widest text-cyan-600 font-bold block uppercase mb-2">
          Local Market Coverage
        </span>
        <h1 className="text-4xl md:text-5xl font-black font-sans text-black tracking-tight uppercase leading-[1.1]">
          Local SEO Locations
        </h1>
        <p className="text-sm md:text-base text-neutral-600 mt-4 max-w-3xl font-semibold leading-relaxed">
          Dedicated local SEO systems, delivered remotely from Faisalabad, Pakistan and working with businesses worldwide. Each market below gets its own service-area structure, citation alignment, and Google Business Profile strategy.
        </p>
      </div>

      {/* Lahore feature */}
      <Link
        href="/locations/lahore"
        className="block group bg-white border-2 border-black p-6 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-[9px] font-mono tracking-widest text-cyan-600 font-bold block uppercase mb-1.5">
              Dedicated Market &middot; Pakistan
            </span>
            <h2 className="text-xl md:text-2xl font-black font-sans text-black uppercase tracking-tight group-hover:text-cyan-600 transition-colors">
              SEO Services in Lahore, Pakistan
            </h2>
            <p className="text-xs text-neutral-600 font-medium mt-2 max-w-2xl leading-relaxed">
              Local and regional SEO for Lahore-based businesses — Google Business Profile setup, localized content strategy, and neighborhood schemas, alongside global semantic SEO and GEO consulting.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold bg-cyan-400 text-black border-2 border-black py-2.5 px-4 uppercase shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            <span>Visit Lahore Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>

      {/* US cities grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CITIES.map((city) => (
          <Link
            key={city.slug}
            href={`/locations/${city.slug}`}
            className="group bg-white border-2 border-black p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-cyan-600" />
              <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold uppercase">
                {city.region}
              </span>
            </div>
            <h2 className="text-lg font-black font-sans text-black uppercase tracking-tight group-hover:text-cyan-600 transition-colors">
              SEO in {city.name}, {city.state}
            </h2>
            <p className="text-xs text-neutral-600 font-medium mt-2 leading-relaxed line-clamp-3">
              {city.blurb}
            </p>
            <span className="inline-flex items-center gap-1 mt-4 text-[11px] font-mono font-bold text-cyan-600 uppercase group-hover:text-black transition-colors">
              <span>Explore Market</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>

      {/* Industry cross-links */}
      <section className="border-t border-neutral-200 pt-10">
        <h2 className="text-lg font-black font-sans text-black uppercase tracking-tight mb-4">
          Local SEO by Industry
        </h2>
        <div className="flex flex-wrap gap-3">
          {LOCAL_NICHES.map((n) => (
            <Link
              key={n.slug}
              href={`/services/${n.slug}`}
              className="text-xs font-mono font-bold bg-neutral-50 text-black border-2 border-black px-4 py-2 uppercase hover:bg-cyan-400 transition-colors"
            >
              SEO for {n.industry}
            </Link>
          ))}
        </div>
      </section>

      {/* Research link */}
      <section className="border-t border-neutral-200 pt-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border-2 border-black p-6 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
          <div>
            <span className="text-[9px] font-mono tracking-widest text-cyan-600 font-bold block uppercase mb-1.5">
              Market Research
            </span>
            <h2 className="text-lg font-black font-sans text-black uppercase tracking-tight">
              Where Local SEO Opportunity Actually Sits in US Cities
            </h2>
            <p className="text-xs text-neutral-600 font-medium mt-2 max-w-2xl leading-relaxed">
              Competition density, map pack benchmarks, and the AI-answer layer across the nine US markets we cover — with the data behind every city page.
            </p>
          </div>
          <Link
            href="/insights/us-cities-local-seo-opportunity"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold bg-cyan-400 text-black border-2 border-black py-2.5 px-4 uppercase shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            <span>Read the Research</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
