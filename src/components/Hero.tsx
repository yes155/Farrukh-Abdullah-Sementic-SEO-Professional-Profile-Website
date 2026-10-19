'use client';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
export default function Hero({ onBookClick, onAuditClick }: { onBookClick: () => void; onAuditClick: () => void }) {
  const startingPoints = [
    { problem: 'Your pages overlap or miss customer questions', service: 'Content structure & semantic SEO', path: '/services/semantic-seo' },
    { problem: 'Nearby customers struggle to find your business', service: 'Local SEO & business profiles', path: '/services/local-seo' },
    { problem: 'AI answers miss or misrepresent your business', service: 'AI-search access & measurement', path: '/services/ai-seo-consulting' },
  ];
  return <section className="site-shell pt-8 md:pt-12 pb-12 md:pb-16">
    <div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
      <div><p className="text-xs font-mono uppercase tracking-widest text-cyan-800 mb-5">Farrukh Abdullah · SEO consultant</p>
        <h1 className="text-4xl md:text-5xl xl:text-[56px] font-bold tracking-tight leading-[1.1]">Semantic SEO and local SEO consulting for growing businesses.</h1>
        <p className="text-lg leading-relaxed text-neutral-600 max-w-2xl mt-6">I help you organize useful content, improve local discovery, and measure search visibility. Based in Faisalabad, Pakistan, working remotely with your business and team.</p>
        <ul aria-label="Consulting details" className="flex flex-wrap gap-2 mt-6">{['Independent consultant', 'Strategy & implementation', 'Remote delivery'].map(item => <li key={item} className="text-xs px-3 py-2 border border-neutral-200 bg-neutral-50 text-neutral-700">{item}</li>)}</ul>
        <div className="flex flex-wrap items-center gap-6 mt-8"><button onClick={onBookClick} className="inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-black border border-black px-6 py-4 font-semibold text-sm" id="hero-book-btn">Discuss your project<ArrowRight size={17} aria-hidden="true" /></button><button onClick={onAuditClick} className="text-sm font-semibold underline underline-offset-4" id="hero-audit-btn">Request a website review</button></div>
        <p className="text-sm text-neutral-500 leading-relaxed mt-7">2+ years in semantic SEO · 11+ years in sales and data analytics · <Link href="/about" className="underline underline-offset-4">About Farrukh</Link></p>
      </div>
      <aside className="border border-black bg-neutral-50 p-6 md:p-8 shadow-[4px_4px_0px_#00d3f2]">
        <h2 className="text-xl font-semibold mb-2">Where should we start?</h2><p className="text-sm text-neutral-600 leading-relaxed mb-6">Choose the problem your website needs to solve.</p>
        <ul className="divide-y divide-neutral-200">{startingPoints.map(item => <li key={item.path} className="py-5 first:pt-0"><Link href={item.path} className="group block"><span className="block text-base text-neutral-800 leading-relaxed">{item.problem}</span><span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-800 mt-2 group-hover:underline">{item.service}<ArrowUpRight size={15} aria-hidden="true" /></span></Link></li>)}</ul>
        <Link href="/tools/seo-project-planner" className="block border-t border-neutral-300 pt-5 text-sm font-semibold underline underline-offset-4">Not sure? Use the free project planner</Link>
      </aside>
    </div>
  </section>;
}
