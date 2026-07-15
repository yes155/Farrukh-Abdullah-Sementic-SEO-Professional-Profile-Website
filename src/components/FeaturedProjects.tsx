"use client";

import { FEATURED_PROJECTS } from "../data";
import { ArrowUpRight, TrendingUp, CheckCircle, Cpu } from "lucide-react";
import { motion } from "motion/react";

interface FeaturedProjectsProps {
  onCaseClick: (caseTitle: string) => void;
}

export default function FeaturedProjects({ onCaseClick }: FeaturedProjectsProps) {
  return (
    <section id="case-studies" className="py-20 px-6 max-w-7xl mx-auto border-t border-neutral-200">
      {/* Title */}
      <div className="mb-14">
        <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-2 font-bold">
          Selected case studies
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-black tracking-tight uppercase">
          What changed, and what it moved
        </h2>
        <p className="text-xs md:text-sm text-neutral-600 mt-2 max-w-2xl font-semibold">
          Detailed breakdowns of semantic and local SEO work — what changed, and what it moved.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-16">
        {FEATURED_PROJECTS.map((project, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 md:p-8 border-2 border-black relative shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:border-cyan-500 transition-colors"
            >
              {/* Image Frame (Alternating Order on Desktop) */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"} relative overflow-hidden group border-2 border-black aspect-video`}>
                <div className="absolute top-0 left-0 bg-black text-[10px] font-mono tracking-widest text-white uppercase font-bold py-1 px-3 z-10 border-r-2 border-b-2 border-black">
                  {project.industry}
                </div>
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text Core (Alternating Order on Desktop) */}
              <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col gap-5`}>
                <div>
                  <span className="text-[9px] font-mono text-cyan-600 font-bold uppercase tracking-widest">
                    CASE STUDY NO. 0{idx + 1}
                  </span>
                  <h3 className="text-lg md:text-xl font-black font-sans text-black uppercase tracking-tight mt-1 leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Grid of Diagnostics */}
                <div className="space-y-3 font-sans text-xs">
                  <div>
                    <strong className="text-neutral-500 uppercase text-[9px] font-mono tracking-wider block font-bold">Challenge:</strong>
                    <p className="text-neutral-700 leading-relaxed mt-0.5 font-medium">{project.challenge}</p>
                  </div>

                  <div>
                    <strong className="text-neutral-500 uppercase text-[9px] font-mono tracking-wider block font-bold">SEO Strategy:</strong>
                    <p className="text-neutral-700 leading-relaxed mt-0.5 font-medium">{project.strategy}</p>
                  </div>
                </div>

                {/* High Value Columns: Execution & Results */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-neutral-100 pt-4">
                  {/* Execution */}
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-neutral-500 tracking-wider uppercase block font-bold">
                      Tactical Execution
                    </span>
                    <ul className="space-y-1">
                      {project.execution.map((exc, i) => (
                        <li key={i} className="text-[10px] text-neutral-600 flex items-start gap-1.5 leading-tight font-semibold">
                          <Cpu className="w-3 h-3 text-cyan-600 shrink-0 mt-0.5" />
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-neutral-500 tracking-wider uppercase block font-bold">
                      Measurable Results
                    </span>
                    <ul className="space-y-1">
                      {project.results.map((res, i) => (
                        <li key={i} className="text-[10px] text-neutral-900 flex items-start gap-1.5 font-extrabold leading-tight">
                          <TrendingUp className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech & CTA Bottom */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100 items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono bg-neutral-100 text-neutral-600 border border-neutral-200 px-2 py-0.5 uppercase font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onCaseClick(project.title)}
                    className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-cyan-600 hover:text-black uppercase transition-colors cursor-pointer"
                  >
                    <span>{project.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
