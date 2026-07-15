"use client";

import Link from "next/link";
import { ArrowRight, Check, HelpCircle, ArrowUpRight, MapPin, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import JsonLd from "@/components/JsonLd";
import { 
  LOCAL_SEO_SERVICE_SCHEMA, 
  getBreadcrumbSchema 
} from "@/lib/schemas";

export default function LocalSeoPage() {
  const faqItems = [
    {
      q: "Do you provide Local SEO services for regional brands?",
      a: "Yes. Local SEO Services is a separate offering focused on local map pack visibility, Google Business Profile optimization, and localized landing page architecture — built for service businesses that need calls and form-fills, not enterprise knowledge graph work."
    }
  ];

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Local SEO", url: "/services/local-seo" }
  ]);

  return (
    <div className="pt-12 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      <JsonLd id="schema-service-local" data={LOCAL_SEO_SERVICE_SCHEMA} />
      <JsonLd id="schema-breadcrumb-local" data={breadcrumbs} />

      {/* Header Block */}
      <div className="border-b-2 border-black pb-12">
        <span className="text-[10px] font-mono tracking-widest text-emerald-600 font-bold block uppercase mb-2">
          Local Lead Generation & Map Pack Optimization
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans text-black tracking-tight uppercase leading-[1.1]">
          Local SEO Services
        </h1>
        <p className="text-sm md:text-base text-neutral-600 mt-4 max-w-3xl font-semibold leading-relaxed">
          I design and build localized search networks focusing on Google Business Profile optimization, local map pack visibility, and custom localized landing page systems engineered to turn organic traffic into phone calls and form-fills.
        </p>
      </div>

      {/* Core Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Detailed Explanations */}
        <div className="lg:col-span-8 space-y-12">
          {/* Section 1: What It Is */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span>A High-Performance Local Program</span>
            </h2>
            <div className="text-xs md:text-sm text-neutral-700 leading-relaxed font-medium space-y-4 font-sans">
              <p>
                For regional service brands, local medical practices, and multi-location businesses, search visibility isn't about international traffic — it's about localized geographic intent. If your business is not ranking inside the Google 3-Pack, you are losing leads to competitors.
              </p>
              <p>
                My local SEO systems are engineered purely for client acquisition. Instead of general blog copywriting, we deploy highly structured, geo-targeted localized landing pages, manage directory alignments, and optimize your Google Business Profiles.
              </p>
            </div>
          </section>

          {/* Section 2: Core Strategy Blocks */}
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-black font-sans text-black uppercase tracking-tight flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-emerald-600" />
              <span>Engineered for Calls & Conversions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-neutral-50 p-5 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <span className="font-mono text-xs font-bold text-emerald-600 block mb-1">STRATEGY 01</span>
                <span className="font-sans font-black text-xs text-black uppercase block mb-2">Map Pack Optimization</span>
                <p className="text-[11px] text-neutral-600 font-medium leading-relaxed">
                  We structure and optimize Google Business Profiles with accurate category modeling, nested citation networks, and geographic validation markers.
                </p>
              </div>
              <div className="bg-neutral-50 p-5 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <span className="font-mono text-xs font-bold text-emerald-600 block mb-1">STRATEGY 02</span>
                <span className="font-sans font-black text-xs text-black uppercase block mb-2">Localized Landing Pages</span>
                <p className="text-[11px] text-neutral-600 font-medium leading-relaxed">
                  We deploy hyper-local neighborhood landing pages embedded with coordinates, geographic schema, and clear call-to-action touchpoints.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Deliverables */}
          <section className="space-y-4 bg-white border-2 border-black p-6 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <h2 className="text-lg md:text-xl font-black font-sans text-black uppercase tracking-tight border-b border-neutral-100 pb-3">
              Included Local SEO Deliverables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {[
                "Google Business Profile categories and description audit",
                "Hyper-nested schema.org LocalBusiness markups",
                "Localized landing page layout & copy optimization",
                "Geo-coordinate nesting and neighborhood mapping",
                "Aggressive map pack citation directory alignment",
                "Inbound call and form lead-generation tracking set up"
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-neutral-700">
                  <div className="w-4 h-4 bg-emerald-50 border border-emerald-250 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-bold">{item}</span>
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
                Case Study: 1,200+ Calls, 340% ROI Portfolio
              </h3>
              <p className="text-[11px] text-neutral-600 font-medium mt-1">
                Discover the actual localized system setup that ranked 12 separate assets inside map packs and captured verified inbound calls in competitive service niches.
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
              <span>Local SEO FAQs</span>
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
              LOCAL CONNECTIONS
            </span>
            <h3 className="text-xs font-black uppercase text-black mb-4">Target Markets</h3>
            <div className="space-y-3">
              <Link
                href="/locations/lahore"
                className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
              >
                <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-emerald-600 uppercase">Dedicated City</span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                  SEO Services in Lahore, Pakistan
                </span>
              </Link>
            </div>
          </div>

          <div className="bg-black text-white p-6 border-2 border-black shadow-[4px_4px_0px_rgba(52,211,153,1)]">
            <span className="text-[9px] font-mono tracking-widest text-emerald-400 font-bold block mb-1 uppercase">
              BOOST PHONE CALLS
            </span>
            <h3 className="text-lg font-black font-sans uppercase tracking-tight text-white mb-2 leading-tight">
              Ready to capture local searchers?
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-medium">
              We'll audit your local search visibility, look up Google map pack coordinates, and formulate a local lead gen campaign.
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
