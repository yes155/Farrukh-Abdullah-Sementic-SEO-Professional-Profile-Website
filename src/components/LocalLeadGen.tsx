"use client";

import { Check, PhoneCall, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import JsonLd from "./JsonLd";
import { LOCAL_SEO_SERVICE_SCHEMA } from "../lib/schemas";

interface LocalLeadGenProps {
  onServiceClick: (serviceTitle: string) => void;
}

export default function LocalLeadGen({ onServiceClick }: LocalLeadGenProps) {
  const deliverables = [
    "Local map pack visibility",
    "Localized landing page architecture",
    "Google Business Profile optimization",
    "Nested local schema",
    "Call and lead tracking"
  ];

  return (
    <section id="local-lead-gen" className="py-20 px-6 max-w-7xl mx-auto border-t border-neutral-200">
      {/* Dynamic Local SEO Service Schema Injection */}
      <JsonLd id="schema-service-local" data={LOCAL_SEO_SERVICE_SCHEMA} />

      <div className="bg-neutral-50 border-2 border-black p-6 md:p-10 relative overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-500" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-emerald-600 uppercase font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-pulse" />
                Local SEO Services
              </span>
              <h2 className="text-2xl md:text-3xl font-black font-sans text-black tracking-tight uppercase">
                Local SEO Services
              </h2>
              <p className="text-xs md:text-sm font-semibold text-neutral-600 tracking-tight uppercase font-sans">
                A high-performance local program for service businesses who need calls and form-fills.
              </p>
            </div>

            <p className="text-xs md:text-sm leading-relaxed text-neutral-700 font-sans font-medium">
              I design and build localized SEO systems focusing on local map pack visibility, localized landing page architecture, Google Business Profile optimization, nested local schema, and complete call/lead tracking.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-xs text-neutral-750">
                  <div className="w-4 h-4 bg-white border border-neutral-300 text-emerald-600 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-sans text-[11px] font-bold leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right CTA Box */}
          <div className="lg:col-span-5 bg-white border-2 border-black p-6 flex flex-col justify-between h-full relative shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center rounded-full">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="text-sm md:text-base font-black font-sans text-black uppercase tracking-tight">
                Ready to scale local calls?
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans font-medium">
                No complex entity mapping needed here. Just hyper-optimized local pages engineered to rank in map packs and convert local searchers into booked calls.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100">
              <button
                onClick={() => onServiceClick("Local SEO Services")}
                className="w-full flex items-center justify-center gap-1.5 bg-white hover:bg-neutral-50 text-black font-sans text-xs font-bold uppercase tracking-wider py-3 border-2 border-black transition-all cursor-pointer"
              >
                <span>Inquire about Local SEO</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
