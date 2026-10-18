import Link from 'next/link';
import EditorialLayout, { ContentSection, ContactAction } from './EditorialLayout';
import JsonLd from './JsonLd';
import { getServiceSchema } from '@/lib/schemas';
import { LOCAL_NICHES, type Niche } from '@/lib/localNiches';
import { getCityBySlug } from '@/lib/locations';
export default function LocalNichePageClient({ niche }: { niche: Niche }) {
 const cities=niche.relatedCities.map(getCityBySlug).filter(c=>!!c);
 return <EditorialLayout title={niche.headline} intro={niche.intro} path={`/services/${niche.slug}`} parent={{name:'Local SEO services',url:'/services/local-seo'}}>
  <JsonLd id="industry-service-schema" data={getServiceSchema(`/services/${niche.slug}`,niche.headline,niche.intro)} />
  <ContentSection title="The customer decision"><p>{niche.example}</p><p>This planning example describes how the work would be scoped. It does not claim a result for an unnamed client in this industry.</p></ContentSection>
  <div className="grid md:grid-cols-2 gap-6"><ContentSection title="Included in the review"><ul className="list-disc pl-6 space-y-3">{niche.deliverables.map(d=><li key={d}>{d}</li>)}</ul></ContentSection><ContentSection title="Measurement and limits"><p>{niche.measurement}</p><p>{niche.limitations}</p><p>Google describes local ranking through relevance, distance, and prominence. Profiles, useful pages, and accurate business information support the work; no schema pattern guarantees a map position.</p></ContentSection></div>
  <ContentSection title="Scope, access, and fees"><p>The initial review identifies the current website/profile state, actual service coverage, contact handling, and measurement access. The written proposal specifies deliverables, implementation responsibilities, approval, and fees before work begins.</p><p>Pricing and timing depend on that scope. There is no universal industry retainer or guaranteed lead-volume timeline.</p></ContentSection>
  <ContentSection title="Related experience"><p><Link href={niche.relatedCaseStudyPath} className="underline">{niche.relatedCaseStudyName}</Link> describes reported work across a mixed portfolio. It is not evidence of a {niche.industry.toLowerCase()} campaign or a forecast for your business.</p><p><Link href={`/insights/${niche.relatedInsight}`} className="underline">Read the supporting method and sources</Link> · <a className="underline" href="https://support.google.com/business/answer/7091?hl=en">Google local ranking guidance</a></p></ContentSection>
  <ContentSection title="Questions before an engagement">{niche.faqs.map(f=><div key={f.q}><h3 className="font-bold text-black">{f.q}</h3><p>{f.a}</p></div>)}</ContentSection>
  <ContentSection title="Relevant service areas"><p>Consulting is delivered remotely from Faisalabad, Pakistan. These links describe general services available to businesses in the named markets.</p><ul>{cities.map(c=><li key={c.slug}><Link className="underline" href={`/locations/${c.slug}`}>Remote SEO services for {c.name} businesses</Link></li>)}</ul></ContentSection>
  <ContentSection title="Other industry services"><ul className="grid sm:grid-cols-2 gap-2">{LOCAL_NICHES.filter(n=>n.slug!==niche.slug).map(n=><li key={n.slug}><Link className="underline" href={`/services/${n.slug}`}>{n.headline}</Link></li>)}</ul></ContentSection>
  <ContactAction text={`Discuss your ${niche.singular.toLowerCase()} website`} />
 </EditorialLayout>;
}
