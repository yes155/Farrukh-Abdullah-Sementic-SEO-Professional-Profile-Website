"use client";

import { ArrowRight, ArrowDownRight } from "lucide-react";
import {
  STRATEGIST_NAME,
  STRATEGIST_TITLE,
  STRATEGIST_SPECS,
} from "../data";

interface HeroProps {
  onBookClick: () => void;
  onAuditClick: () => void;
}

export default function Hero({ onBookClick, onAuditClick }: HeroProps) {
  return (
    <section id="home" className="pt-6 md:pt-8 pb-16 px-6 max-w-7xl mx-auto flex flex-col gap-12">
      {/* Upper Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Title & Copy (Left) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-500 rounded-full inline-block animate-pulse" />
            {STRATEGIST_TITLE}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-sans text-black leading-[1.1] md:leading-[1.15]">
            You don't rank anymore — <span className="text-cyan-600">you get cited.</span><br />
            I make you the <span className="inline-block bg-cyan-400 text-black px-3 py-0.5 mt-1 border-2 border-black rotate-[-1deg] shadow-[4px_4px_0px_rgba(0,0,0,1)]">answer.</span>
          </h1>

          <p className="text-sm md:text-base leading-relaxed text-neutral-700 max-w-2xl mt-4 font-sans font-medium">
            Semantic SEO specialist helping growing brands and local businesses across the United States get found — and cited — by both Google and AI search engines. I restructure your site into a knowledge graph AI models can trust, cite, and quote first.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-6">
            <button
              onClick={onBookClick}
              className="group flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-bold uppercase tracking-wider py-3.5 px-6 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer"
              id="hero-book-btn"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onAuditClick}
              className="group flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-black text-xs font-bold uppercase tracking-wider py-3.5 px-6 border-2 border-black transition-all cursor-pointer"
              id="hero-audit-btn"
            >
              <span>Run a Free Site Audit</span>
              <ArrowDownRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Strategist Spec Box (Right) */}
        <div className="lg:col-span-5 bg-white border-2 border-black p-6 md:p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all">
          <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase block mb-6 border-b border-neutral-200 pb-3 font-extrabold">
            Strategist profile
          </span>
          <div className="flex flex-col gap-6">
            {STRATEGIST_SPECS.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col gap-2 border-b border-neutral-100 last:border-b-0 pb-4 last:pb-0"
              >
                <span className="text-[10px] md:text-xs font-mono text-neutral-500 font-extrabold uppercase tracking-wider">
                  {spec.label}
                </span>
                <span className="text-xs md:text-sm font-mono text-neutral-900 font-black flex items-center gap-2.5 leading-relaxed">
                  {spec.statusColor && (
                    <span 
                      className="w-3 h-3 rounded-full inline-block animate-pulse shrink-0"
                      style={{ backgroundColor: spec.statusColor }}
                    />
                  )}
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Credentials Summary Line */}
      <div className="mt-8 border-t border-neutral-200 pt-8">
        <span className="text-[11px] font-mono tracking-wider text-neutral-600 uppercase block font-bold leading-relaxed">
          2+ years in semantic SEO and topical authority · 11+ years in sales and data analytics · Certified by IBM, Moz, and BrightLocal
        </span>
      </div>
    </section>
  );
}
