import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { CASE_SLUGS, getCaseContent } from '@/lib/caseContent';
import { getCollectionSchema } from '@/lib/schemas';

export default function CaseIndex() {
  const cases = CASE_SLUGS.map(slug => getCaseContent(slug)!);
  return <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
    <JsonLd id="case-collection" data={getCollectionSchema('/case-studies', 'SEO case studies', cases.map(study => ({ name: study.name, path: `/case-studies/${study.slug}` })))} />
    <header className="max-w-3xl mb-12 md:mb-16">
      <p className="font-mono text-xs uppercase tracking-widest text-cyan-700 mb-5">Selected work</p>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">SEO case studies</h1>
      <p className="text-lg md:text-xl leading-relaxed text-neutral-600">The business challenge, the work behind it, and the outcomes described by my clients. Explore projects in local search, technical SEO, and content strategy.</p>
    </header>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{cases.map(study => <article key={study.slug} className="border border-neutral-300 p-6 md:p-7 flex flex-col hover:border-black transition-colors">
      <p className="text-xs font-mono text-cyan-700 uppercase tracking-wider mb-5">{study.industry}</p>
      <h2 className="text-2xl font-bold leading-tight mb-3"><Link className="hover:underline underline-offset-4" href={`/case-studies/${study.slug}`}>{study.name}</Link></h2>
      <p className="text-sm text-neutral-500 mb-5">{study.location}</p>
      <p className="text-base text-neutral-600 leading-relaxed mb-7">{study.summary}</p>
      <Link href={`/case-studies/${study.slug}`} className="mt-auto pt-5 border-t border-neutral-200 inline-flex justify-between items-center text-sm font-semibold">Read the case study<span className="sr-only">: {study.name}</span><ArrowUpRight size={18} aria-hidden="true" /></Link>
    </article>)}</div>
  </div>;
}
