"use client";

import { CERTIFICATIONS } from "../data";
import { Award, GraduationCap, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Certifications() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto border-t border-neutral-200">
      {/* Title block */}
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-cyan-600" />
          <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-bold">
            ACCREDITATIONS & AUDITED STANDARDS
          </span>
        </div>
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="bg-white border-2 border-black p-5 flex flex-col justify-between hover:border-cyan-500 shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:translate-x-[-2px] transition-all group"
          >
            {/* Upper issuer metadata */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div 
                  className="w-8 h-8 rounded bg-neutral-100 border border-neutral-200 flex items-center justify-center text-white"
                  style={{ color: cert.iconColor }}
                >
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-mono text-neutral-500 font-bold uppercase">
                  VERIFIED — {cert.year}
                </span>
              </div>

              <div className="space-y-1.5">
                <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase font-bold block">
                  {cert.organization}
                </span>
                <h4 className="text-xs font-black font-sans text-black uppercase tracking-tight group-hover:text-cyan-600 transition-colors leading-tight">
                  {cert.title}
                </h4>
              </div>
            </div>

            {/* Bottom confirmation line */}
            <div className="mt-6 pt-3 border-t border-neutral-100">
              {cert.isSelfDirected ? (
                <span className="text-[8px] font-mono text-neutral-500 uppercase font-bold">
                  Independent study program
                </span>
              ) : cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/verify flex items-center justify-between gap-1 text-[8px] font-mono text-neutral-500 hover:text-cyan-600 transition-colors font-bold uppercase"
                >
                  <span className="truncate">
                    {cert.credentialId ? `ID: ${cert.credentialId.slice(0, 16)}` : "Registry Verified"}
                  </span>
                  <ArrowUpRight className="w-2.5 h-2.5 shrink-0" />
                </a>
              ) : (
                <div className="flex items-center justify-between gap-1 text-[8px] font-mono text-neutral-500 uppercase font-bold">
                  <span className="truncate">
                    {cert.credentialId ? `ID: ${cert.credentialId.slice(0, 16)}` : "Registry Verified"}
                  </span>
                  <span className="shrink-0">Credential Active</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
