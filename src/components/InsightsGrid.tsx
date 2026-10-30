import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Insight } from '@/types';
import { displayDate } from '@/lib/contentMetadata';
export default function InsightsGrid({ articles }: { articles: Insight[] }) {
  return <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{articles.map(article => <article key={article.id} className="site-card flex flex-col"><p className="text-xs text-cyan-800 font-mono mb-4">{article.category}</p><h2 className="text-xl font-semibold leading-snug mb-4"><Link className="hover:underline underline-offset-4" href={`/insights/${article.id}`}>{article.title}</Link></h2><p className="text-base leading-relaxed text-neutral-600 mb-5">{article.summary}</p><p className="text-xs text-neutral-600 mb-5">{displayDate(article.modifiedDate || article.date)} · {article.readTime}</p><Link href={`/insights/${article.id}`} className="mt-auto inline-flex items-center justify-between text-sm font-semibold text-cyan-800 border-t border-neutral-200 pt-5 hover:underline">Read the guide<span className="sr-only">: {article.title}</span><ArrowUpRight size={16} aria-hidden="true" /></Link></article>)}</div>;
}
