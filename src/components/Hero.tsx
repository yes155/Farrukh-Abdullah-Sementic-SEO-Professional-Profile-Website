'use client';
import { PageHeader } from './PageFrame';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
export default function Hero({ onBookClick, onAuditClick }: { onBookClick: () => void; onAuditClick: () => void }) {
  const startingPoints = [
    { problem: 'Your pages overlap or miss customer questions', service: 'Content structure & semantic SEO', path: '/services/semantic-seo' },
    { problem: 'Nearby customers struggle to find your business', service: 'Local SEO & business profiles', path: '/services/local-seo' },
    { problem: 'AI answers miss or misrepresent your business', service: 'AI-search access & measurement', path: '/services/ai-seo-consulting' },
  ];
  return <section className="site-shell page-frame">
    <PageHeader title="Semantic SEO and local SEO consulting for growing businesses." eyebrow="Farrukh Abdullah · SEO consultant"
      intro="I help you organize useful content, improve local discovery, and measure search visibility. Based in Faisalabad, Pakistan, working remotely with your business and team."
      attributes={['Independent consultant', 'Strategy & implementation', 'Remote delivery']}
      metadata={<>2+ years in semantic SEO · 11+ years in sales and data analytics · <Link href="/about" className="underline underline-offset-4">About Farrukh</Link></>}
      aside={<aside className="site-panel">
        <h2 className="text-xl font-semibold mb-2">Where should we start?</h2><p className="text-sm text-neutral-600 leading-relaxed mb-6">Choose the problem your website needs to solve.</p>
        <ul className="divide-y divide-neutral-200">{startingPoints.map(item => <li key={item.path} className="py-3 first:pt-0"><Link href={item.path} className="group block"><span className="block text-base text-neutral-800 leading-relaxed">{item.problem}</span><span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-800 mt-2 group-hover:underline">{item.service}<ArrowUpRight size={15} aria-hidden="true" /></span></Link></li>)}</ul>
        <Link href="/tools/seo-project-planner" className="block border-t border-neutral-300 pt-5 text-sm font-semibold underline underline-offset-4">Not sure? Use the free project planner</Link>
      </aside>}>
      <div className="flex flex-wrap items-center gap-5 mt-5"><button onClick={onBookClick} className="site-button" id="hero-book-btn">Discuss your project<ArrowRight size={17} aria-hidden="true" /></button><button onClick={onAuditClick} className="text-sm font-semibold underline underline-offset-4" id="hero-audit-btn">Request a website review</button></div>
    </PageHeader>
  </section>;
}
