import Link from 'next/link';
import { EXPERIENCE_TIMELINE } from '@/data';
import JsonLd from '@/components/JsonLd';
import Certifications from '@/components/Certifications';
import PublicWorkCards from '@/components/PublicWorkCards';
import { ContactAction } from '@/components/EditorialLayout';
import { getPublicWorkSchema } from '@/lib/publicWork';
import { getBreadcrumbSchema, PERSON_ID } from '@/lib/schemas';

export default function AboutPage() {
  return <div className="site-shell py-6 md:py-8 space-y-6 md:space-y-8">
    <JsonLd id="schema-breadcrumb-about" data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }])} />
    <JsonLd id="schema-person-about" data={{ '@context': 'https://schema.org', '@type': 'ProfilePage', '@id': 'https://farrukh.top/about#page', url: 'https://farrukh.top/about', name: 'About Farrukh Abdullah', mainEntity: { '@id': PERSON_ID } }} />
    <JsonLd id="schema-public-work" data={getPublicWorkSchema()} />

    <header className="grid md:grid-cols-[minmax(0,1fr)_14rem] lg:grid-cols-[minmax(0,1fr)_16rem] gap-6 lg:gap-8 items-start border-b border-neutral-200 pb-6">
      <div className="min-w-0">
        <p className="text-xs font-mono tracking-widest text-cyan-800 mb-3 uppercase">Independent SEO consultant</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">About Farrukh Abdullah</h1>
        <p className="text-base md:text-lg text-neutral-700 leading-relaxed mt-4">I work on content planning, local search, technical implementation, and search visibility measurement. I’m based in Faisalabad, Pakistan, and work remotely with business owners and their teams.</p>
        <ul className="flex flex-wrap gap-2 mt-4">{['Semantic SEO', 'Local search', 'AI-search measurement'].map(label => <li key={label} className="text-xs border border-neutral-200 bg-neutral-50 px-3 py-2">{label}</li>)}</ul>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mt-5">
          <Link href="/contact" className="text-sm font-semibold underline text-cyan-800 underline-offset-4">Discuss your website</Link>
          <a href="https://techbehemoths.com/company/farrukh-abdullah-advisory" target="_blank" rel="noopener" data-techbehemoths-verification="" className="inline-block max-w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-800">
            <img src="https://cdn.techbehemoths.com/public/static/validation/tb-verified-logo.svg" alt="TechBehemoths Verification" width={123} height={40} className="block w-32 max-w-full h-auto" />
          </a>
        </div>
      </div>
      <figure className="w-48 md:w-56 lg:w-64 aspect-[4/5] overflow-hidden border border-black justify-self-center md:justify-self-end">
        <img src="/farrukh-photo-final.jpg" alt="Farrukh Abdullah, independent SEO consultant" className="block w-full h-full object-cover object-top" width={256} height={320} />
      </figure>
    </header>

    <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-4 lg:gap-6 items-start">
      <section id="approach" aria-labelledby="approach-heading" className="min-w-0 border border-neutral-300 p-5 md:p-6 space-y-4 scroll-mt-28">
        <h2 id="approach-heading" className="text-2xl font-bold tracking-tight">How I approach the work</h2>
        <p className="text-base leading-relaxed text-neutral-700">My background includes more than 11 years in corporate sales and market analytics. That experience informs how I plan SEO work: understand the customer, identify the practical problem, and choose an outcome the business can measure.</p>
        <p className="text-base leading-relaxed text-neutral-700">I review what a website already offers before recommending more pages. Each engagement connects page purpose, supporting information, implementation responsibilities, and inquiry or sales measurement.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold"><Link href="/case-studies" className="underline text-cyan-800">Explore the case studies</Link><Link href="/services" className="underline text-cyan-800">See how services are scoped</Link></div>
      </section>
      <section id="experience" aria-labelledby="experience-heading" className="min-w-0 border border-neutral-300 p-5 md:p-6 scroll-mt-28">
        <h2 id="experience-heading" className="text-2xl font-bold tracking-tight mb-4">Professional experience</h2>
        <div className="divide-y divide-neutral-200">{EXPERIENCE_TIMELINE.map(item => <article key={item.id} className="py-4 first:pt-0 last:pb-0">
          <p className="text-sm text-cyan-800 mb-2">{item.period}</p>
          <h3 className="text-lg font-semibold">{item.role}</h3>
          <p className="text-sm text-neutral-600 mt-1 mb-3">{item.company}</p>
          <ul className="list-disc pl-5 space-y-2 text-base text-neutral-700 leading-relaxed">{item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
        </article>)}</div>
      </section>
    </div>

    <section id="research-and-public-work" aria-labelledby="public-work-heading" className="space-y-4 scroll-mt-28">
      <div className="flex flex-wrap items-end justify-between gap-3"><h2 id="public-work-heading" className="text-2xl font-bold tracking-tight">Research, writing, and public work</h2><Link href="/evidence#research-and-writing" className="text-sm font-semibold underline text-cyan-800">Publication context and public references</Link></div>
      <p className="text-base text-neutral-700 leading-relaxed">Explore my research deposit, writing published on Connectively, and implementation records for this website. Each offers a different way to assess my approach.</p>
      <PublicWorkCards compact implementationLinks />
      <Link href="/tools/local-seo-audit-workbook" className="inline-block text-sm font-semibold underline text-cyan-800">Try the audit workbook</Link>
    </section>

    <Certifications compact />
    <ContactAction />
  </div>;
}
