import { PageFrame, PageHeader } from './PageFrame';
import { ContactAction } from './EditorialLayout';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';
import JsonLd from './JsonLd';
import { getCaseContent } from '@/lib/caseContent';
import { CANONICAL_DOMAIN, PERSON_ID, ORGANIZATION_ID, getBreadcrumbSchema } from '@/lib/schemas';
import { displayDate, getPageUpdated } from '@/lib/contentMetadata';


export default function CaseStudyPage({ slug }: { slug: string }) {
  const study = getCaseContent(slug);
  if (!study) notFound();
  const UPDATED = getPageUpdated(`/case-studies/${slug}`);
  const url = `${CANONICAL_DOMAIN}/case-studies/${slug}`;
  const sections = [['challenge', 'The challenge'], ['approach', 'The approach'], ['delivery', 'Work delivered'], ['outcome', 'The outcome'], ['evidence', 'Evidence and context']];

  return <PageFrame as="article">
    <JsonLd id="case-article" data={{ '@context': 'https://schema.org', '@type': 'Article', '@id': `${url}#article`, headline: study.name, description: study.summary, mainEntityOfPage: url, author: { '@id': PERSON_ID, url: `${CANONICAL_DOMAIN}/about` }, publisher: { '@id': ORGANIZATION_ID }, dateModified: UPDATED }} />
    <JsonLd id="page-breadcrumb" data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Case studies', url: '/case-studies' }, { name: study.name, url: `/case-studies/${slug}` }])} />
    <PageHeader title={study.name} intro={study.summary}
      parent={{name:'All case studies',url:'/case-studies'}}
      eyebrow={`${study.services[0].label.replace(/ services| consulting/ig, '')} · Case study`}
      attributes={study.focus.slice(0,3)}
      metadata={<>By <Link href="/about" className="underline underline-offset-4">Farrukh Abdullah</Link> · <time dateTime={UPDATED}>{displayDate(UPDATED)}</time></>}
      aside={<aside aria-label="Project overview" className="site-panel">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">Project overview</h2>
        <dl className="space-y-5 text-sm">
          <div><dt className="text-neutral-500 mb-1">Client</dt><dd className="font-semibold text-base">{study.name}</dd></div>
          <div><dt className="text-neutral-500 mb-1">Industry</dt><dd className="font-medium">{study.industry}</dd></div>
          <div><dt className="text-neutral-500 mb-1">{slug === 'simulithic' ? 'Company' : 'Market'}</dt><dd className="font-medium">{study.location}</dd></div>
          <div className="border-t border-neutral-200 pt-5"><dt className="text-neutral-500 mb-1">Service</dt><dd><Link href={study.services[0].path} className="font-semibold inline-flex items-center gap-2 hover:underline underline-offset-4">{study.services[0].label}<ArrowRight size={14} aria-hidden="true" /></Link></dd></div>
        </dl>
      </aside>} />

    <div className="reading-layout">
      <aside className="reading-nav self-start">
        <nav aria-label="On this page" className="block">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-5">Inside the project</p>
          <ol className="space-y-4">{sections.map(([id, label], i) => <li key={id}><a href={`#${id}`} className="inline-flex gap-3 text-sm text-neutral-600 hover:text-black"><span className="text-neutral-400 font-mono text-xs">0{i + 1}</span>{label}</a></li>)}</ol>
        </nav>
        <div className="lg:mt-10 lg:pt-6 lg:border-t border-neutral-200">
          <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-4">Scope of work</h2>
          <ul className="flex flex-wrap gap-2 lg:gap-3 lg:block lg:space-y-3">{study.focus.map(item => <li key={item} className="text-xs lg:text-sm text-neutral-700 bg-neutral-100 px-3 py-2 lg:bg-transparent lg:p-0">{item}</li>)}</ul>
        </div>
      </aside>
      <div className="reading-content site-stack">
        <section id="challenge" className="scroll-mt-28">
          <h2 className="section-title mb-5">The challenge</h2>
          <p className="text-base leading-relaxed text-neutral-700">{study.challenge}</p>
        </section>
        <section id="approach" className="scroll-mt-28">
          <h2 className="section-title mb-5">The approach</h2>
          <p className="text-base leading-relaxed text-neutral-700">{study.strategy}</p>
        </section>
        <section id="delivery" className="scroll-mt-28">
          <h2 className="section-title mb-3">Work delivered</h2>
          <ol className="divide-y divide-neutral-200">{study.execution.map((item, i) => <li key={item} className="flex gap-5 py-5"><span className="font-mono text-sm text-cyan-700 pt-1 shrink-0">0{i + 1}</span><p className="text-base leading-relaxed text-neutral-700">{item}</p></li>)}</ol>
        </section>
        <section id="outcome" className="scroll-mt-28">
          <h2 className="section-title mb-4">The outcome</h2>
          <p className="text-sm leading-relaxed text-neutral-500 mb-6">{study.quote ? 'The engagement account and client feedback describe the following changes.' : 'The following outcomes are described in the engagement account.'}</p>
          <ul className="space-y-4">{study.results.map(item => <li key={item} className="flex gap-3 text-base leading-relaxed text-neutral-700"><Check className="shrink-0 mt-1 text-cyan-700" size={18} aria-hidden="true" /><span>{item}</span></li>)}</ul>
          {study.quote && <figure className="mt-9 border-l-4 border-cyan-400 bg-cyan-50 p-6 md:p-8">
            <blockquote className="text-lg md:text-xl leading-relaxed font-display text-neutral-900">“{study.quote}”</blockquote>
            <figcaption className="mt-5 text-sm text-neutral-600">{study.attribution}</figcaption>
          </figure>}
        </section>
        <section id="evidence" className="scroll-mt-28 border border-neutral-300 bg-neutral-50 p-6 md:p-8">
          <h2 className="section-title mb-5">Evidence and context</h2>
          <dl className="space-y-5 text-sm leading-relaxed"><div><dt className="font-semibold text-neutral-900">Source of the account</dt><dd className="text-neutral-600 mt-2">{study.quote ? 'Engagement description and attributed client feedback, including the quotation above.' : 'Engagement description and the reported scope of work.'}</dd></div><div><dt className="font-semibold text-neutral-900">Published with this case</dt><dd className="text-neutral-600 mt-2">The challenge, implementation approach, work delivered, and reported outcomes. Campaign dates and underlying analytics exports are not published with this account.</dd></div></dl>
          <p className="text-sm text-neutral-600 leading-relaxed mt-5">Results are specific to this project.{slug === 'simulithic' && ' This account does not publish a quantified ranking, traffic, or citation result.'}{slug === 'local-seo-systems' && ' The reported portfolio ROI has no published calculation or comparison period.'}</p>
          <p className="mt-5 text-sm"><Link href="/evidence#case-evidence" className="underline text-cyan-800">How to assess the project evidence</Link> · <Link href="/tools/local-seo-audit-workbook" className="underline text-cyan-800">Try the audit workbook</Link></p>
        </section>
      </div>
    </div>
    <ContactAction text="Discuss a similar project" />
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-7 text-sm"><Link href={study.insight.path} className="underline underline-offset-4 text-cyan-800">{study.insight.label}</Link><Link href="/case-studies" className="underline underline-offset-4">More case studies</Link>{study.services.map(service => <Link key={service.path} href={service.path} className="text-neutral-600 hover:text-black underline underline-offset-4">{service.label}</Link>)}</div>
  </PageFrame>;
}
