"use client";

import { PHILOSOPHY_STATEMENTS } from "../data";
import { motion } from "motion/react";
import { BrainCircuit } from "lucide-react";

export default function Philosophy() {
  return (
    <section className="bg-neutral-50 border-y border-neutral-200 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Label Header */}
        <div className="flex items-center gap-2 mb-10">
          <BrainCircuit className="w-4 h-4 text-cyan-600" />
          <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-bold">
            Why keyword-stuffed pages fail
          </span>
        </div>

        {/* Big Editorial Quote Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-sans text-black leading-tight tracking-tight">
              The machine<br />
              wants<br />
              knowledge,<br />
              <span className="text-cyan-600">not strings.</span>
            </h2>
            <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider mt-4 leading-relaxed font-bold">
              Why keyword-stuffed pages fail under modern NLP and AI models.
            </p>
          </div>

          {/* Philosophy Statements List */}
          <div className="lg:col-span-8 space-y-12">
            {PHILOSOPHY_STATEMENTS.map((stmt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="space-y-3 max-w-3xl"
              >
                <h3 className="text-lg md:text-xl font-black font-sans text-black uppercase tracking-tight flex items-baseline gap-2.5">
                  <span className="text-xs font-mono text-cyan-600 font-bold">0{idx + 1} /</span>
                  <span>{stmt.lead}</span>
                </h3>
                <p className="text-xs md:text-sm text-neutral-700 leading-relaxed font-sans font-medium pl-0 md:pl-10">
                  {stmt.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
