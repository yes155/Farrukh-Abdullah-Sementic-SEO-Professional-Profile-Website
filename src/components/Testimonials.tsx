"use client";

import Link from "next/link";
import { Quote, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "@/data";

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-neutral-200">
      <div className="mb-12">
        <span className="text-[10px] font-mono tracking-widest text-cyan-600 uppercase block mb-2 font-bold">
          Client Feedback
        </span>
        <h2 className="text-3xl md:text-4xl font-black font-sans text-black tracking-tight uppercase">
          What Clients Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="bg-white border-2 border-black p-6 md:p-8 flex flex-col justify-between shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            <div>
              <Quote className="w-8 h-8 text-cyan-500 mb-4" />
              <p className="text-sm md:text-base text-neutral-800 font-medium leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-black font-sans">
                  {t.name}
                </p>
                <p className="text-xs text-neutral-500 font-mono">
                  {t.role}, {t.company}
                </p>
              </div>

              {t.linkedCaseStudyPath && (
                <Link
                  href={t.linkedCaseStudyPath}
                  className="flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-cyan-600 hover:text-black transition-colors shrink-0"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
