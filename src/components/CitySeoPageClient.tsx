import Link from 'next/link';
import EditorialLayout, { ContentSection, ContactAction } from './EditorialLayout';
import JsonLd from './JsonLd';
import { getServiceSchema } from '@/lib/schemas';
import { CITIES, type City } from '@/lib/locations';
import { getNicheBySlug } from '@/lib/localNiches';
export default function CitySeoPageClient({ city }: { city: City }) {
 const niches=city.relatedNiches.map(getNicheBySlug).filter(n=>!!n);
 return <EditorialLayout title={`Remote SEO services for ${city.name} businesses`} intro={city.blurb} path={`/locations/${city.slug}`} parent={{name:'Service areas',url:'/locations'}}>
  <JsonLd id="city-service-schema" data={getServiceSchema(`/locations/${city.slug}`,`Remote SEO services for ${city.name}`,city.blurb,{ '@type':'City', name:city.name, containedInPlace:{'@type':'State',name:city.stateName} })} />
  <ContentSection title="Remote delivery and actual coverage"><p>I provide consulting remotely from Faisalabad, Pakistan. This page describes availability to {city.name} businesses; it does not represent an office in {city.name}.</p><p>Before proposing location content, I confirm the client’s real premises, service radius, accepted work, hours, and customer contact routes. Neighborhood names are not evidence of a staffed location or a separate service.</p></ContentSection>
  <ContentSection title={`${city.name}: an illustrative planning decision`}><p>{city.planningExample}</p><p>This is a scope example, not a measured market study or a claim that any neighborhood is easier to rank in. Current competitive observations would be dated and documented during an engagement.</p></ContentSection>
  <ContentSection title="What a market review records"><ul className="list-disc pl-6 space-y-2"><li>The service and customer question being assessed.</li><li>Actual operating coverage and lead-handling capacity.</li><li>Date, location, query set, and source for competitive observations.</li><li>Relevant website/profile problems and the evidence for each.</li><li>Changes, ownership, costs, and qualified-inquiry measurements.</li></ul><p>Google describes local ranking through relevance, distance, and prominence. Schema and extra location pages do not guarantee a map position.</p></ContentSection>
  <ContentSection title="Relevant experience"><p><Link className="underline" href={city.relatedCaseStudyPath}>{city.relatedCaseStudyName}</Link> describes reported work and evidence limits. {city.relatedCaseStudyPath.endsWith('local-seo-systems') ? 'It is a mixed portfolio example, not a documented campaign for this city.' : 'The engagement described there does not predict results for another business.'}</p><p><Link className="underline" href={`/insights/${city.relatedInsight}`}>Read the market research method</Link> · <a className="underline" href="https://support.google.com/business/answer/7091?hl=en">Google local ranking guidance</a></p></ContentSection>
  <ContentSection title="Service fit and fees"><p>Choose the work by the actual business problem. The written scope defines deliverables, profile/site access, implementation responsibilities, measurement, and fees. No standard city price or universal results timeline is advertised.</p><ul className="space-y-2">{niches.map(n=><li key={n.slug}><Link className="underline" href={`/services/${n.slug}`}>{n.headline}</Link></li>)}</ul></ContentSection>
  <ContentSection title="Other remote service areas"><ul className="grid sm:grid-cols-3 gap-3">{CITIES.filter(c=>c.slug!==city.slug).map(c=><li key={c.slug}><Link className="underline" href={`/locations/${c.slug}`}>{c.name}, {c.state}</Link></li>)}</ul></ContentSection>
  <ContactAction text={`Discuss your ${city.name} website`} />
 </EditorialLayout>;
}
