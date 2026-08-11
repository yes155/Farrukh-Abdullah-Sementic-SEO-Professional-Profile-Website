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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "Dentists", path: "/services/seo-for-dentists" },
            { name: "Plumbers", path: "/services/seo-for-plumbers" },
            { name: "Salons", path: "/services/seo-for-salons" },
            { name: "Pest Control", path: "/services/seo-for-pest-control" },
            { name: "Roofers", path: "/services/seo-for-roofers" },
            { name: "HVAC", path: "/services/seo-for-hvac" }
          ].map((n, idx) => (
            <motion.div
              key={n.path}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <Link
                href={n.path}
                className="group flex flex-col bg-white border-2 border-black p-5 h-full shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <span className="text-[8px] font-mono tracking-widest text-neutral-400 font-bold block uppercase mb-1.5">
                  SEO for
                </span>
                <span className="block text-sm font-black font-sans text-black uppercase tracking-tight group-hover:text-emerald-600 transition-colors">
                  {n.name}
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
