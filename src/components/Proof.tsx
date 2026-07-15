"use client";

import { METRIC_CARDS } from "../data";
import { motion } from "motion/react";

export default function Proof() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto border-t border-neutral-200">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-1.5 h-1.5 bg-cyan-500" />
        <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-bold">
          Proof, not adjectives
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border-2 border-black">
        {METRIC_CARDS.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white p-6 md:p-8 flex flex-col justify-between group hover:bg-neutral-50 transition-colors duration-250 relative"
          >
            {/* Top Stat */}
            <div className="space-y-3">
              <span className="block text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-black font-mono tracking-tight text-black group-hover:text-cyan-600 transition-colors break-words leading-tight">
                {card.value}
              </span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                {card.title}
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans font-medium">
                {card.description}
              </p>
            </div>

            {/* Tags Bottom */}
            <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-neutral-100">
              {card.tags?.map((t) => (
                <span
                  key={t}
                  className="text-[9px] font-mono bg-neutral-100 text-neutral-600 border border-neutral-200 px-2 py-0.5 uppercase font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
