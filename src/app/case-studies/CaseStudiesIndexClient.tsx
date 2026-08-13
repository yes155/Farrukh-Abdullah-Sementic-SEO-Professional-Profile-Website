"use client";

import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { FEATURED_PROJECTS } from "@/data";
import { getPublishedNicheCaseStudies } from "@/lib/caseStudies";
import { getNicheBySlug } from "@/lib/localNiches";
import { CLIENT_CASE_STUDIES } from "@/lib/clientCaseStudies";

export default function CaseStudiesIndex() {
  const nicheStudies = getPublishedNicheCaseStudies().map((s, i) => {
    const niche = getNicheBySlug(s.nicheSlug);
    return {
      id: s.slug,
      title: `${niche ? `Local SEO for ${niche.industry}` : s.headline} — ${s.city}`,
      industry: niche ? niche.industry : "Local SEO",
      challenge: s.challenge || `${s.city}, ${s.state} service-area local SEO system.`,
      results: s.results,
      imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      path: `/case-studies/${s.slug}`,
      technologies: s.technologies
    };
  });

  const clientStudies = CLIENT_CASE_STUDIES.map((c) => ({
    id: c.slug,
    title: `${c.headline} — ${c.location}`,
    industry: c.industry,
    challenge: c.challengeShort,
    results: c.results,
    imageSrc: c.imageSrc,
    path: `/case-studies/${c.slug}`,
    technologies: c.technologies
  }));

  const caseStudies = [...clientStudies,
    {
      id: "windcave",
      title: "Semantic SEO structuring & entity clustering — Windcave",
      industry: FEATURED_PROJECTS[0].industry,
      challenge: FEATURED_PROJECTS[0].challenge,
      results: FEATURED_PROJECTS[0].results,
      imageSrc: FEATURED_PROJECTS[0].imageSrc,
      path: "/case-studies/windcave",
      technologies: FEATURED_PROJECTS[0].technologies
    },
    {
      id: "local-seo-systems",
      title: "Local SEO systems for competitive service niches",
      industry: FEATURED_PROJECTS[1].industry,
      challenge: FEATURED_PROJECTS[1].challenge,
      results: FEATURED_PROJECTS[1].results,
      imageSrc: FEATURED_PROJECTS[1].imageSrc,
      path: "/case-studies/local-seo-systems",
      technologies: FEATURED_PROJECTS[1].technologies
    },
    {
      id: "azuno",
      title: "Semantic SEO & AI/LLM alignment — Azuno",
      industry: FEATURED_PROJECTS[2].industry,
      challenge: FEATURED_PROJECTS[2].challenge,
      results: FEATURED_PROJECTS[2].results,
      imageSrc: FEATURED_PROJECTS[2].imageSrc,
      path: "/case-studies/azuno",
      technologies: FEATURED_PROJECTS[2].technologies
    },
    ...nicheStudies
  ];

  return (
    <div className="pt-12 pb-20 px-6 max-w-7xl mx-auto space-y-12">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <span className="text-[10px] font-mono tracking-widest text-cyan-600 font-bold block uppercase mb-2">
          Advisory Proof of Concept
        </span>
        <h1 className="text-4xl md:text-5xl font-black font-sans text-black tracking-tight uppercase">
          SEO Case Studies & Results
        </h1>
        <p className="text-sm text-neutral-600 mt-3 font-semibold leading-relaxed">
          I tie search optimization directly to real business pipeline outcomes. Here are detailed breakdowns of semantic and local SEO campaigns — what changed, what we engineered, and what it moved.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, idx) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white border-2 border-black p-6 md:p-8 flex flex-col justify-between hover:border-cyan-500 shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:shadow-[7px_7px_0px_rgba(0,0,0,1)] transition-all group"
          >
            <div className="space-y-6">
              {/* Image box */}
              <div className="border-2 border-black aspect-video overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-300">
                <span className="absolute top-0 left-0 bg-black text-white font-mono text-[8px] font-bold px-2 py-1 border-r-2 border-b-2 border-black uppercase z-10">
                  {study.industry}
                </span>
                <img
                  src={study.imageSrc}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <span className="text-[9px] font-mono text-cyan-600 font-bold block uppercase tracking-widest">
                  CASE STUDY NO. 0{idx + 1}
                </span>
                <h2 className="text-xl font-black font-sans text-black uppercase tracking-tight mt-1 leading-tight group-hover:text-cyan-600 transition-colors">
                  {study.title}
                </h2>
              </div>

              <div className="space-y-2">
                <span className="text-[9px] font-mono text-neutral-400 font-bold block uppercase">
                  THE CHALLENGE
                </span>
                <p className="text-xs text-neutral-750 font-medium leading-relaxed font-sans line-clamp-3">
                  {study.challenge}
                </p>
              </div>

              {/* Quick Results Panel */}
              <div className="bg-neutral-50 border border-neutral-200 p-4 space-y-2">
                <span className="text-[8px] font-mono text-neutral-400 font-bold block uppercase">
                  MEASURED PIPELINE IMPACT
                </span>
                <div className="space-y-1.5">
                  {study.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-bold text-neutral-900 leading-tight">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {study.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-[8px] font-mono bg-neutral-100 text-neutral-500 px-1.5 py-0.5 uppercase">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={study.path}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-black text-cyan-600 hover:text-black uppercase underline transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
