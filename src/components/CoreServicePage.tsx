import Link from 'next/link';
import EditorialLayout, { ContentSection, ContactAction } from './EditorialLayout';
import PageQuestions from './PageQuestions';
import JsonLd from './JsonLd';
import { CORE_SERVICES } from '@/lib/serviceContent';
import { getServiceSchema } from '@/lib/schemas';

const questions: Record<string, { q: string; a: string }[]> = {
  'semantic-seo': [
    { q: 'Do I need a separate page for every keyword?', a: 'No. A separate page makes sense when the visitor has a different task or needs a substantially different answer. Close variants can usually be covered with headings or a short explanation on an existing page.' },
    { q: 'What does a topic map include?', a: 'A topic map connects customer questions to existing or proposed pages. It records page purpose, supporting evidence, internal links, and decisions to retain, improve, or combine content.' },
    { q: 'Can you work with my writer or developer?', a: 'Yes. The scope can include page briefs and implementation instructions for your team, or agreed changes that I carry out with the appropriate access.' },
  ],
  'local-seo': [
    { q: 'Can a service-area business use local SEO?', a: 'Yes. The review starts with the real service area, business eligibility, and how customers contact the business. Pages and profiles should describe that operation accurately.' },
    { q: 'What should we measure besides rankings?', a: 'Track relevant calls, forms, booked appointments, and lead quality when those records are available. Keep ranking observations separate from confirmed business outcomes.' },
    { q: 'What access do you need?', a: 'Business Profile access, the website, accurate service and location information, and any available Search Console or inquiry records. Access is agreed for the work in scope.' },
  ],
  'ai-seo-consulting': [
    { q: 'Can you guarantee a citation in an AI answer?', a: 'No. The work improves access, factual information, and useful supporting content. A platform decides which sources it uses, and answers can vary by question, time, and user context.' },
    { q: 'How do you measure AI-search visibility?', a: 'Use the Search Console Generative AI performance report where it is available, alongside overall search data. Keep dated observations on other platforms, referral visits, and qualified inquiries as separate measures.' },
    { q: 'Do I need special AI markup?', a: 'Google does not require special AI markup or an llms.txt file for its generative search features. Start with accessible pages, accurate information, and useful content.' },
  ],
};
export default function CoreServicePage({ slug }: { slug: string }) {
  const service = CORE_SERVICES.find(item => item.slug === slug)!;
  return <EditorialLayout title={service.title} intro={service.intro} path={`/services/${slug}`} parent={{ name: 'Services', url: '/services' }} attributes={['Independent consultant', 'Remote delivery', 'Agreed implementation scope']} overview={{ title: 'What you receive', items: service.deliverables.slice(0, 3) }} action={{ label: 'Discuss your project', href: '/contact' }}>
    <JsonLd id="service-schema" data={getServiceSchema(`/services/${slug}`, service.title, service.intro)} />
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8"><ContentSection title="Is this the right fit?"><p>{service.audience}</p></ContentSection><ContentSection title="How the engagement works"><p>{service.scope}</p></ContentSection></div>
    <ContentSection title="Deliverables"><ul className="list-disc pl-6 space-y-3">{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul></ContentSection>
    <ContentSection title="What the work looks like"><p>{service.example}</p><p className="text-sm text-neutral-500">Planning example; the final brief follows a review of your website.</p></ContentSection>
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8"><ContentSection title="What I need from you"><p>{service.access}</p></ContentSection><ContentSection title="How we assess progress"><p>{service.measurement}</p></ContentSection></div>
    <ContentSection title="See the approach in practice"><p><Link className="underline text-cyan-800" href={service.casePath}>{service.caseLabel}</Link> explains the business challenge, the work, and the outcomes described in the engagement.</p><p><Link className="underline text-cyan-800" href={slug === 'local-seo' ? '/insights/local-entity-seo-ai-search' : slug === 'semantic-seo' ? '/insights/topical-map-framework' : '/insights/geo-measurement-stack'}>Read the implementation guide</Link> or <a className="underline text-cyan-800" href={slug === 'local-seo' ? 'https://support.google.com/business/answer/7091?hl=en' : 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide'}>Google’s related guidance</a>.</p></ContentSection>
    {slug === 'local-seo' && <ContentSection title="See industry-specific planning examples"><p>Explore how the service map, evidence, and inquiry process change for each business:</p><ul className="space-y-3"><li><Link className="underline text-cyan-800" href="/services/seo-for-electricians">Electrician SEO</Link> — urgent calls, planned installations, and booked jobs.</li><li><Link className="underline text-cyan-800" href="/services/seo-for-fence-contractors">Fence contractor SEO</Link> — material research, repairs, and estimate requests.</li><li><Link className="underline text-cyan-800" href="/services/seo-for-orthodontists">Orthodontist SEO</Link> — treatment information and consultation bookings.</li></ul><p>Each page includes an independent public-site walkthrough and a sample implementation brief.</p></ContentSection>}
    <ContentSection title="Inspect the method and evidence"><p><Link href="/evidence" className="underline text-cyan-800">Public implementation records and project evidence</Link> show how to assess the work and the context behind reported outcomes.</p>{slug==='local-seo' && <p><Link href="/tools/local-seo-audit-workbook" className="underline text-cyan-800">Use the free local SEO audit workbook</Link> to record findings, sources, and next actions for your team.</p>}</ContentSection>
    <PageQuestions items={questions[slug]} />
    <ContentSection title="Related services"><ul className="space-y-3">{CORE_SERVICES.filter(item => item.slug !== slug).map(item => <li key={item.slug}><Link className="underline text-cyan-800" href={`/services/${item.slug}`}>{item.title}</Link></li>)}</ul>{slug === 'local-seo' && <p><Link className="underline text-cyan-800" href="/services">Local SEO by industry</Link> · <Link className="underline text-cyan-800" href="/locations">Remote service areas</Link></p>}<p><Link className="underline text-cyan-800" href="/tools/seo-project-planner">Use the free SEO project planner</Link> to prepare your brief.</p></ContentSection>
    <ContactAction />
  </EditorialLayout>;
}
