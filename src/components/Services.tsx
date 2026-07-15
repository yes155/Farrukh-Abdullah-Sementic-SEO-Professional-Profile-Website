"use client";

import { SERVICES } from "../data";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import JsonLd from "./JsonLd";
import { 
  SEMANTIC_SEO_SERVICE_SCHEMA, 
  GEO_SERVICE_SCHEMA
} from "../lib/schemas";

interface ServicesProps {
  onServiceClick: (serviceTitle: string) => void;
}

export default function Services({ onServiceClick }: ServicesProps) {
  return (
    <section id="services" className="py-20 px-6 max-w-7xl mx-auto border-t border-neutral-200">
      {/* Dynamic SEO/GEO Service Schemas Injection */}
      <JsonLd id="schema-service-semantic" data={SEMANTIC_SEO_SERVICE_SCHEMA} />
      <JsonLd id="schema-service-geo" data={GEO_SERVICE_SCHEMA} />

      {/* Title block */}
      <div className="mb-12">
        <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-2 font-bold">
          What I do
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-black tracking-tight uppercase">
          What I do
        </h2>
        <p className="text-xs md:text-sm text-neutral-600 mt-2 max-w-2xl font-semibold">
          I don't do standard monthly blog copywriting. I restructure how search engines and AI models understand your site — so you show up as a source, not just a link.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((srv, idx) => (
          <motion.div
            key={srv.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white border-2 border-black p-6 md:p-8 flex flex-col justify-between hover:border-cyan-500 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all group"
            id={`service-card-${srv.id}`}
          >
            {/* Upper Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-cyan-600 font-bold block uppercase">
                  Service / Plan 0{idx + 1}
                </span>
                <h3 className="text-lg md:text-xl font-black font-sans text-black uppercase tracking-tight group-hover:text-cyan-600 transition-colors">
                  {srv.title}
                </h3>
              </div>

              <p className="text-xs leading-relaxed text-neutral-700 font-medium">
                {srv.description}
              </p>

              {/* Deliverables List */}
              <div className="space-y-2.5 pt-4 border-t border-neutral-100">
                <span className="text-[9px] font-mono text-neutral-500 tracking-wider uppercase block font-bold">
                  Core Deliverables
                </span>
                <div className="space-y-2">
                  {srv.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-neutral-700">
                      <div className="w-4 h-4 bg-neutral-100 border border-neutral-200 text-cyan-600 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-sans text-[11px] font-bold leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="mt-8 pt-4">
              <button
                onClick={() => onServiceClick(srv.title)}
                className="w-full flex items-center justify-center gap-1.5 bg-white hover:bg-neutral-50 text-black font-sans text-xs font-bold uppercase tracking-wider py-3 border-2 border-black transition-all cursor-pointer"
                id={`service-btn-${srv.id}`}
              >
                <span>{srv.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
