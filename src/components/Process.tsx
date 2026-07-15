"use client";

import { WORKING_PROCESS } from "../data";
import { CheckCircle2, ChevronRight, Activity } from "lucide-react";
import { motion } from "motion/react";

export default function Process() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-neutral-200">
      {/* Title block */}
      <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-2 font-bold">
            How we'll work together
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-black tracking-tight uppercase">
            How we'll work together
          </h2>
        </div>
        <p className="text-xs text-neutral-500 max-w-xs md:text-right font-mono uppercase tracking-wider font-bold">
          A structured process, typically run over 90 days.
        </p>
      </div>

      {/* Process Columns Grid */}
      <div className="relative border-l-2 border-neutral-200 ml-3 md:ml-6 pl-6 md:pl-10 space-y-12">
        {WORKING_PROCESS.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Circle Bullet */}
            <div className="absolute -left-[45px] md:-left-[61px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-black text-neutral-700 group-hover:border-cyan-600 group-hover:text-cyan-600 flex items-center justify-center font-mono text-xs font-black transition-all">
              {step.number}
            </div>

            {/* Step Card */}
            <div className="bg-white border-2 border-black p-6 hover:border-cyan-500 shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:translate-x-[-2px] transition-all max-w-4xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-3 mb-4">
                <h3 className="text-base md:text-lg font-black font-sans text-black uppercase tracking-tight">
                  Phase {step.number} — {step.title}
                </h3>
              </div>

              <p className="text-xs text-neutral-700 leading-relaxed font-sans font-medium mb-4">
                {step.description}
              </p>

              {/* Step Checklist Bullets */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-600 uppercase tracking-tight font-bold">
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-600" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
