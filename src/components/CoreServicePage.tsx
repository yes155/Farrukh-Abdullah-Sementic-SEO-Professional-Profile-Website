import Link from 'next/link';
import EditorialLayout, { ContentSection, ContactAction } from './EditorialLayout';
import JsonLd from './JsonLd';
import { CORE_SERVICES } from '@/lib/serviceContent';
import { getServiceSchema } from '@/lib/schemas';
export default function CoreServicePage({ slug }: { slug: string }) {
 const service = CORE_SERVICES.find(s => s.slug === slug)!;
 return <EditorialLayout title={service.title} intro={service.intro} path={`/services/${slug}`} parent={{name:'Services',url:'/services'}}>
  <JsonLd id="service-schema" data={getServiceSchema(`/services/${slug}`, service.title, service.intro)} />
  <div className="grid md:grid-cols-2 gap-6"><ContentSection title="Who this is for"><p>{service.audience}</p></ContentSection><ContentSection title="Scope and responsibilities"><p>{service.scope}</p></ContentSection></div>
  <ContentSection title="What you receive"><ul className="list-disc pl-6 space-y-3">{service.deliverables.map(d => <li key={d}>{d}</li>)}</ul></ContentSection>
  <ContentSection title="An illustrative deliverable"><p>{service.example}</p><p className="text-sm">This is a planning example, not a claim of completed work or a promised outcome for your business.</p></ContentSection>
  <div className="grid md:grid-cols-2 gap-6"><ContentSection title="Access and implementation"><p>{service.access}</p><p>The written scope identifies who approves and implements each change.</p></ContentSection><ContentSection title="How progress is assessed"><p>{service.measurement}</p></ContentSection></div>
  <ContentSection title="Experience and supporting guidance"><p><Link className="underline" href={service.casePath}>{service.caseLabel}</Link> describes reported work and its evidence limits.</p><p><a className="underline" href={slug==='local-seo' ? 'https://support.google.com/business/answer/7091?hl=en' : 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide'}>Read the relevant Google guidance</a>.</p><p><Link className="underline" href={slug==='local-seo' ? '/insights/local-entity-seo-ai-search' : slug==='semantic-seo' ? '/insights/topical-map-framework' : '/insights/geo-measurement-stack'}>Read the implementation and measurement explanation</Link>.</p></ContentSection>
  <ContentSection title="Related services"><ul className="space-y-2">{CORE_SERVICES.filter(s=>s.slug!==slug).map(s=><li key={s.slug}><Link className="underline" href={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>{slug==='local-seo' && <p><Link className="underline" href="/services">Browse industry services</Link> · <Link className="underline" href="/locations">Remote service areas</Link></p>}</ContentSection>
  <ContactAction />
 </EditorialLayout>;
}
