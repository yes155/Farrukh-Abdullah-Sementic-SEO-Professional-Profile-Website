"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Proof from "@/components/Proof";
import Philosophy from "@/components/Philosophy";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import { LOCAL_NICHES } from "@/lib/localNiches";
import { CITIES } from "@/lib/locations";
import { INSIGHTS_ARTICLES, FEATURED_PROJECTS } from "@/data";
import Scheduler from "@/components/Scheduler";
import SEOAnalyzer from "@/components/SEOAnalyzer";
import { motion, AnimatePresence } from "motion/react";

export default function Page() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditUrl, setAuditUrl] = useState("");

  const condensedServices = [
    {
      title: "Semantic SEO & Topical Authority",
      description: "Entity mapping, topical authority architecture, and semantic content restructuring that turns scattered pages into an authority search engines can't ignore.",
      path: "/services/semantic-seo"
    },
    {
      title: "AI SEO Consulting",
      description: "Get cited by ChatGPT Search, Perplexity, and Google AI Overviews. Generative Engine Optimization (GEO) plus technical AI-crawler signals to secure machine-readable citations.",
      path: "/services/ai-seo-consulting"
    },
    {
      title: "Local SEO Systems",
      description: "Localized search networks built for calls and form-fills — map pack visibility, Google Business Profile systems, and geographic landing pages.",
      path: "/services/local-seo"
    }
  ];

  return (
    <div className="space-y-4">
      {/* Hero Section */}
      <Hero 
        onBookClick={() => setIsBookModalOpen(true)} 
        onAuditClick={() => setIsAuditModalOpen(true)} 
      />

      {/* Expertise Ticker */}
      <Marquee />

      {/* Proof Section */}
      <Proof />

      {/* Philosophy Section */}
      <Philosophy />

      {/* Condensed Services Overview */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-neutral-200">
        <div className="mb-12">
          <span className="text-[10px] font-mono tracking-widest text-cyan-600 uppercase block mb-2 font-bold">
            Advisory Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-sans text-black tracking-tight uppercase">
            Our Core Strategic Channels
          </h2>
          <p className="text-xs md:text-sm text-neutral-600 mt-2 max-w-2xl font-semibold">
            I restructure how search engines and AI models understand your site — showing up as a trusted, cited answer, rather than a generic monthly blog post list.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {condensedServices.map((srv, idx) => (
            <motion.div
              key={srv.path}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-white border-2 border-black p-6 flex flex-col justify-between hover:border-cyan-500 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all group"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-cyan-600 font-bold block uppercase">
                  Service Channel 0{idx + 1}
                </span>
                <h3 className="text-lg font-black font-sans text-black uppercase tracking-tight group-hover:text-cyan-600 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                  {srv.description}
                </p>
              </div>
              <div className="pt-6">
                <Link
                  href={srv.path}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-neutral-900 hover:bg-black text-white font-sans text-xs font-bold uppercase tracking-wider py-3 border-2 border-black transition-all cursor-pointer"
                >
                  <span>Explore Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Local SEO by Industry */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-neutral-200">
        <div className="mb-8">
          <span className="text-[10px] font-mono tracking-widest text-emerald-600 uppercase block mb-2 font-bold">
            Local SEO Systems
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-sans text-black tracking-tight uppercase">
            Built for Service Businesses
          </h2>
          <p className="text-xs md:text-sm text-neutral-600 mt-2 max-w-2xl font-semibold">
            Map pack visibility, Google Business Profile systems, and service-area landing pages for the industries where local search wins the call.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {LOCAL_NICHES.map((n, idx) => (
            <motion.div
              key={n.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (idx % 8) * 0.05 }}
            >
              <Link
                href={`/services/${n.slug}`}
                className="group flex flex-col bg-white border-2 border-black p-5 h-full shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <span className="text-[8px] font-mono tracking-widest text-neutral-400 font-bold block uppercase mb-1.5">
                  SEO for
                </span>
                <span className="block text-sm font-black font-sans text-black uppercase tracking-tight group-hover:text-emerald-600 transition-colors">
                  {n.industry}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-600 uppercase">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Markets, Proof & Research distribution */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-neutral-200">
        <div className="mb-8">
          <span className="text-[10px] font-mono tracking-widest text-cyan-600 uppercase block mb-2 font-bold">
            Markets, Proof & Research
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-sans text-black tracking-tight uppercase">
            Local SEO Everywhere You Compete
          </h2>
          <p className="text-xs md:text-sm text-neutral-600 mt-2 max-w-2xl font-semibold">
            Service-area systems built for real US metros — with verified results, market research, and the entity strategy that wins both the map pack and AI answers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured Cities */}
          <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold block mb-2 uppercase">
              Featured Markets
            </span>
            <div className="space-y-2.5">
              {CITIES.slice(0, 5).map((c) => (
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
                  All Local SEO Locations
                </span>
              </Link>
            </div>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] flex flex-col">
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold block mb-2 uppercase">
              Verified Results
            </span>
            <div className="flex-1">
              <span className="block text-sm font-black font-sans text-black uppercase tracking-tight mb-2">
                {FEATURED_PROJECTS[1].title}
              </span>
              <ul className="space-y-1.5 mb-4">
                {FEATURED_PROJECTS[1].results.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-[11px] text-neutral-700 font-semibold leading-snug">
                    <span className="w-1.5 h-1.5 bg-emerald-500 shrink-0 mt-1" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/case-studies/local-seo-systems"
              className="inline-flex items-center justify-center gap-1.5 bg-neutral-900 hover:bg-black text-white font-sans text-xs font-bold uppercase tracking-wider py-3 border-2 border-black transition-all"
            >
              <span>Review Case Study</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Featured Insights */}
          <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <span className="text-[9px] font-mono tracking-widest text-neutral-400 font-bold block mb-2 uppercase">
              Latest Research
            </span>
            <div className="space-y-2.5">
              {INSIGHTS_ARTICLES.filter((a) => a.category === "Local SEO").slice(0, 3).map((a) => (
                <Link
                  key={a.id}
                  href={`/insights/${a.id}`}
                  className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
                >
                  <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-cyan-600 uppercase">{a.category} · {a.readTime}</span>
                  <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                    {a.title}
                  </span>
                </Link>
              ))}
              <Link
                href="/insights"
                className="block group p-3 border border-neutral-200 hover:border-black transition-all bg-neutral-50"
              >
                <span className="block text-[8px] font-mono font-bold text-neutral-400 group-hover:text-cyan-600 uppercase">All Insights</span>
                <span className="block text-[11px] font-bold text-black uppercase leading-tight mt-1 group-hover:underline">
                  Browse All Strategy Articles
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Block */}
      <Certifications />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Interactive FAQ Block */}
      <Faq />

      {/* Modals Container */}
      <AnimatePresence>
        {/* Book Strategy Call Modal */}
        {isBookModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-4xl bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] z-10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsBookModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-neutral-100 hover:bg-black hover:text-white border-2 border-black transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="p-1">
                <Scheduler initialUrl={auditUrl} />
              </div>
            </motion.div>
          </div>
        )}

        {/* Free Audit Modal */}
        {isAuditModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAuditModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-4xl bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] z-10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsAuditModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-neutral-100 hover:bg-black hover:text-white border-2 border-black transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="p-4">
                <SEOAnalyzer 
                  onBookCallWithUrl={(url) => {
                    setAuditUrl(url);
                    setIsAuditModalOpen(false);
                    setIsBookModalOpen(true);
                  }} 
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
