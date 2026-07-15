"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import type { Insight } from "@/types";

export default function InsightsGrid({ articles }: { articles: Insight[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article, idx) => (
        <motion.div
          key={article.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.08 }}
          className="bg-white border-2 border-black p-6 md:p-8 flex flex-col justify-between group shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:translate-x-[-2px] transition-all"
        >
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <span className="text-[10px] font-mono text-cyan-600 uppercase tracking-widest font-bold">
                {article.category}
              </span>
              <div className="flex items-center gap-3 text-[9px] font-mono text-neutral-500 uppercase font-bold">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-base md:text-lg font-black font-sans text-black group-hover:text-cyan-600 transition-colors uppercase tracking-tight leading-tight">
                {article.title}
              </h2>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans font-medium line-clamp-3">
                {article.summary}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-neutral-100">
            <Link
              href={`/insights/${article.id}`}
              className="flex items-center justify-between text-[10px] font-mono font-bold text-neutral-500 group-hover:text-cyan-600 transition-colors uppercase"
            >
              <span>READ ARTICLE</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
