"use client";

import { motion } from "motion/react";
import { Quote, ChevronRight, Binary, MapPin } from "lucide-react";
import { EXPERIENCE_TIMELINE } from "@/data";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schemas";

export default function AboutPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" }
  ]);

  // Profile metadata
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Farrukh Abdullah",
    "jobTitle": "Semantic SEO Specialist & GEO Consultant",
    "knowsAbout": ["Semantic SEO", "Entity SEO", "Generative Engine Optimization", "Topical Authority"],
    "worksFor": {
      "@type": "Organization",
      "name": "Independent SEO Consultant"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Faisalabad",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    }
  };

  return (
    <div className="pt-12 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      <JsonLd id="schema-breadcrumb-about" data={breadcrumbs} />
      <JsonLd id="schema-person-about" data={profileSchema} />

      {/* Header block */}
      <div className="border-b-2 border-black pb-12">
        <span className="text-[10px] font-mono tracking-widest text-cyan-600 font-bold block uppercase mb-2">
          Co-pilot & Senior Consultant
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans text-black tracking-tight uppercase leading-[1.1]">
          About Farrukh Abdullah
        </h1>
        <p className="text-sm md:text-base text-neutral-600 mt-4 max-w-3xl font-semibold leading-relaxed">
          I am a specialized search strategist and authority architect. I take web properties with stalled search engines presence and transform their content into structured knowledge structures that AI models and Google can trust and cite.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Profile Photo & Key Credentials */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
          <div className="border-2 border-black p-2 bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] max-w-xs md:max-w-sm overflow-hidden">
            <img
              src="/farrukh-photo-final.jpg"
              alt="Farrukh Abdullah - Semantic SEO Specialist"
              className="w-full h-auto object-cover border border-black grayscale hover:grayscale-0 transition-all duration-300"
              referrerPolicy="no-referrer"
              id="farrukh-photo-about-img"
            />
          </div>

          <div className="bg-neutral-50 border-2 border-black p-6 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            <span className="text-[9px] font-mono text-neutral-400 font-extrabold block mb-3 uppercase">
              STRATEGIST SPECIFICATIONS
            </span>
            <div className="space-y-3.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="block font-black uppercase text-black">Location</span>
                  <span className="text-neutral-600 font-semibold">Faisalabad, Pakistan (working globally)</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Binary className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="block font-black uppercase text-black">Core Specialties</span>
                  <span className="text-neutral-600 font-semibold">Semantic SEO, GEO, Entity Mapping, Local Search Packs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Professional History */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Binary className="w-4 h-4 text-cyan-600" />
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-bold">
                Professional Bio & Methodological Rigor
              </span>
            </div>
            <div className="text-xs md:text-sm text-neutral-700 leading-relaxed font-medium font-sans space-y-4">
              <p>
                My background in corporate sales and market analytics spans over 11 years. Turning raw data trends, forecasts, and performance numbers into actionable business revenue is the exact logical framework I now apply to modern Search Engine Optimization.
              </p>
              <p>
                I founded this advisory to solve a common B2B and corporate growth obstacle: search results stagnating due to outdated keyword density techniques. By rebuilding web properties from the database-level schema registries upwards, we ensure our clients' expertise is perfectly clear to automated crawlers and language models.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block border-b border-neutral-200 pb-2 font-bold">
              PROFESSIONAL EXPERIENCE TIMELINE
            </span>
            {EXPERIENCE_TIMELINE.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border-2 border-black p-6 shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:border-cyan-500 hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-100 pb-3 mb-4">
                  <div>
                    <span className="text-[9px] font-mono text-cyan-600 uppercase tracking-widest block font-bold">
                      {item.period}
                    </span>
                    <h3 className="text-sm md:text-base font-black font-sans text-black uppercase tracking-tight mt-0.5">
                      {item.role}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono bg-neutral-100 text-neutral-600 border border-neutral-200 px-2 py-0.5 uppercase tracking-wide self-start sm:self-center font-bold">
                    {item.company}
                  </span>
                </div>

                <ul className="space-y-2 text-xs text-neutral-700 font-sans mb-4 font-medium">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-[11px] text-neutral-600 italic font-mono leading-relaxed mt-2 border-t border-neutral-100 pt-3">
                  {item.analyticalAngle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate Endorsement */}
      <div className="mt-12 p-6 md:p-8 lg:p-10 bg-white border-2 border-black relative shadow-[4px_4px_0px_rgba(0,0,0,1)] w-full">
        <div className="absolute top-6 right-6 text-cyan-600/10">
          <Quote className="w-16 h-16" />
        </div>
        <p className="text-sm md:text-base lg:text-xl text-neutral-900 italic leading-relaxed font-sans font-bold pr-12">
          "Farrukh took our stalled search performance and turned it around. He reorganized our content and site structure in a way that actually made sense for both search engines and our team, and we saw real, measurable growth in visibility and leads within a few months."
        </p>
        <span className="block text-[10px] md:text-xs font-mono uppercase tracking-widest text-neutral-500 mt-6 font-bold">
          — Senior Digital Manager, Windcave (windcave.com)
        </span>
      </div>
    </div>
  );
}
