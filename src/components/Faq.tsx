"use client";

import { useState } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import JsonLd from "./JsonLd";
import { FAQ_QUESTIONS_DATA, FAQ_PAGE_SCHEMA } from "../lib/schemas";

export default function Faq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-6 max-w-4xl mx-auto border-t border-neutral-200 scroll-mt-20">
      {/* Dynamic FAQ Schema Injection */}
      <JsonLd id="schema-faq" data={FAQ_PAGE_SCHEMA} />

      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <HelpCircle className="w-4 h-4 text-cyan-600" />
          <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase font-bold">
            FAQ / Advisory Context
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-black font-sans text-black uppercase tracking-tight">
          Frequently Asked Questions
        </h3>
        <p className="text-xs text-neutral-600 mt-1 max-w-lg mx-auto font-medium">
          Clear, unambiguous answers on how semantic SEO, modern markup, and Generative Engine Optimization align with your pipeline.
        </p>
      </div>

      <div className="space-y-4">
        {FAQ_QUESTIONS_DATA.map((item, idx) => {
          const isOpen = openFaqIndex === idx;
          return (
            <div 
              key={idx} 
              className="border-2 border-black bg-white transition-all duration-200"
              id={`faq-item-${idx}`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-5 text-left font-sans font-bold text-xs md:text-sm uppercase tracking-tight text-black hover:bg-neutral-50 select-none transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="pr-4">{item.question}</span>
                <div className="w-6 h-6 border-2 border-black bg-neutral-100 flex items-center justify-center shrink-0">
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 border-t-2 border-dashed border-black font-sans text-neutral-700 text-xs md:text-sm leading-relaxed font-medium">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
