'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import Hero from '@/components/Hero';
import Certifications from '@/components/Certifications';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Scheduler from '@/components/Scheduler';
import SEOAnalyzer from '@/components/SEOAnalyzer';
import { CORE_SERVICES } from '@/lib/serviceContent';
import { CLIENT_CASE_STUDIES } from '@/lib/clientCaseStudies';
import type { Insight } from '@/types';
export default function HomePage({ articles }: { articles: Insight[] }) {
  const [modal, setModal] = useState<'book' | 'review' | null>(null);
  const [auditUrl, setAuditUrl] = useState('');
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (modal && !dialog.current?.open) dialog.current?.showModal(); else if (!modal && dialog.current?.open) dialog.current?.close(); }, [modal]);
  const work = CLIENT_CASE_STUDIES.filter(item => ['armadillo-coffee-roasters', 'swag-pro', 'simulithic'].includes(item.slug));
  return <div>
    <Hero onBookClick={() => setModal('book')} onAuditClick={() => setModal('review')} />
    <section className="site-shell py-12 md:py-16 border-t border-neutral-200">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">Choose the work your website needs</h2><p className="text-lg text-neutral-600 max-w-3xl mb-9 leading-relaxed">A useful project starts with the problem, the work to do, and the outcome to measure.</p>
      <div className="grid md:grid-cols-3 gap-6">{CORE_SERVICES.map(item => <article key={item.slug} className="border border-neutral-300 p-6 md:p-7 flex flex-col"><h3 className="text-xl font-semibold mb-4">{item.title}</h3><p className="text-base leading-relaxed text-neutral-600 mb-6">{item.intro}</p><Link href={`/services/${item.slug}`} className="mt-auto inline-flex items-center gap-3 text-sm font-semibold text-cyan-800 hover:underline">See scope and deliverables<ArrowRight size={16} aria-hidden="true" /></Link></article>)}</div>
      <p className="mt-7 text-base"><Link href="/services" className="underline text-cyan-800">Explore local SEO by industry</Link> · <Link href="/locations" className="underline text-cyan-800">Remote service areas</Link></p>
    </section>
    <section className="site-shell py-12 md:py-16 border-t border-neutral-200"><div className="flex flex-wrap gap-4 items-end justify-between mb-9"><div><p className="font-mono text-xs uppercase tracking-widest text-cyan-800 mb-3">Selected work</p><h2 className="text-3xl md:text-4xl font-bold tracking-tight">The work behind the case study</h2></div><Link href="/case-studies" className="text-sm font-semibold underline underline-offset-4">All case studies</Link></div>
      <div className="grid md:grid-cols-3 gap-6">{work.map(item => <article key={item.slug} className="border border-neutral-300 p-6 md:p-7 flex flex-col"><p className="text-xs font-mono text-cyan-800 uppercase tracking-wider mb-4">{item.industry}</p><h3 className="text-2xl font-bold mb-4">{item.clientName}</h3><p className="text-base leading-relaxed text-neutral-600 mb-6">{item.challengeShort}</p><Link href={`/case-studies/${item.slug}`} className="inline-flex items-center gap-3 text-sm font-semibold text-cyan-800 mt-auto hover:underline">Read the case study<ArrowRight size={16} aria-hidden="true" /></Link></article>)}</div>
    </section>
    <section className="site-shell py-12 md:py-16 border-t border-neutral-200"><div className="flex flex-wrap gap-4 items-end justify-between mb-9"><h2 className="text-3xl md:text-4xl font-bold tracking-tight">Guides for better SEO decisions</h2><Link href="/insights" className="text-sm font-semibold underline underline-offset-4">All insights</Link></div><div className="grid md:grid-cols-3 gap-8">{articles.filter(item => !item.noIndex).slice(0, 3).map(item => <article key={item.id}><p className="text-xs text-cyan-800 font-mono mb-3">{item.category}</p><h3 className="text-xl font-semibold leading-snug mb-3"><Link href={`/insights/${item.id}`} className="hover:underline underline-offset-4">{item.title}</Link></h3><p className="text-base text-neutral-600 leading-relaxed">{item.summary}</p></article>)}</div></section>
    <Certifications />
    <Testimonials />
    <Faq />
    <dialog ref={dialog} onClose={() => setModal(null)} aria-labelledby="home-dialog-title" className="m-auto w-[calc(100%-2rem)] max-w-4xl max-h-[90vh] overflow-y-auto border border-black p-0 backdrop:bg-black/60"><div className="flex items-center justify-between border-b border-neutral-200 p-4"><h2 id="home-dialog-title" className="text-base font-semibold">{modal === 'review' ? 'Request a website review' : 'Discuss your project'}</h2><button onClick={() => setModal(null)} className="p-2 hover:bg-neutral-100" aria-label="Close dialog"><X size={20} /></button></div>{modal === 'review' ? <SEOAnalyzer onBookCallWithUrl={url => { setAuditUrl(url); setModal('book'); }} /> : modal === 'book' ? <Scheduler initialUrl={auditUrl} /> : null}</dialog>
  </div>;
}
