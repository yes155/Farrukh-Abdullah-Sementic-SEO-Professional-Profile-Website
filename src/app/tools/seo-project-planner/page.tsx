import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectPlanner from './ProjectPlanner';
import PageQuestions from '@/components/PageQuestions';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schemas';
export const metadata: Metadata = { title: 'Free SEO Project Planner', description: 'Build an SEO project brief from your business type and goals. Choose priorities, copy your brief, and prepare for a website review. Free, with no sign-up.', alternates: { canonical: '/tools/seo-project-planner' } };
export default function PlannerPage() {
  return <div className="site-shell py-8 md:py-12 space-y-8">
    <JsonLd id="planner-schema" data={{ '@context': 'https://schema.org', '@type': 'WebApplication', name: 'SEO Project Planner', url: 'https://farrukh.top/tools/seo-project-planner', applicationCategory: 'BusinessApplication', operatingSystem: 'Any', browserRequirements: 'Requires JavaScript', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, description: 'A browser-based project brief planner using business type and the visitor’s selected SEO goal.' }} />
    <JsonLd id="planner-breadcrumb" data={getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'SEO project planner', url: '/tools/seo-project-planner' }])} />
    <header><Link href="/services" className="text-sm text-cyan-800 hover:underline">SEO consulting services</Link><h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">Free SEO project planner</h1><p className="text-base md:text-lg leading-relaxed text-neutral-600 mt-4 max-w-3xl">Turn your main SEO goal into a practical brief for a website review.</p><ul className="flex flex-wrap gap-2 mt-5" aria-label="Tool features">{['Free to use', 'No sign-up', 'Runs in your browser'].map(item => <li key={item} className="text-xs border border-neutral-200 bg-neutral-50 px-3 py-2">{item}</li>)}</ul></header>
    <ProjectPlanner />
    <div className="max-w-3xl pt-6"><PageQuestions title="Using your project brief" items={[{ q: 'Does this tool analyze my website?', a: 'No. It organizes a starting brief from your selected business type and goal. A website review is needed to confirm actual problems and implementation priorities.' }, { q: 'Is my website address sent anywhere?', a: 'The planner has no submission or website-crawling service. Your inputs are held in the page while you use it. Copying the brief lets you choose where to share it.' }, { q: 'What should I do next?', a: 'Copy the brief, add relevant context, and use it when talking to your team or consultant. Include current access, implementation capacity, and any available inquiry or sales data.' }]} /><p className="mt-8 text-base"><Link href="/contact" className="underline text-cyan-800">Discuss your project with Farrukh Abdullah</Link>.</p></div>
  </div>;
}
