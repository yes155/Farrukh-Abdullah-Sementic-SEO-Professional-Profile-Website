import Link from 'next/link';
import EditorialLayout, { ContentSection, ContactAction } from './EditorialLayout';
import PageQuestions from './PageQuestions';
import JsonLd from './JsonLd';
import { getServiceSchema } from '@/lib/schemas';
import { CITIES, type City } from '@/lib/locations';
import { getNicheBySlug } from '@/lib/localNiches';
export default function CitySeoPageClient({ city }: { city: City }) {
  const niches = city.relatedNiches.map(getNicheBySlug).filter(niche => !!niche);
  return <EditorialLayout title={`Remote SEO services for ${city.name} businesses`} intro={`SEO consulting for businesses serving ${city.name}: clearer service pages, accurate business profiles, and a practical plan for measuring inquiries.`} path={`/locations/${city.slug}`} parent={{ name: 'Service areas', url: '/locations' }} attributes={['Remote consulting', 'Based in Faisalabad', 'Work scoped to your business']} overview={{ title: 'Where we start', items: ['Your actual services and customer area', 'Website and Business Profile priorities', 'Implementation and qualified-inquiry measurement'] }} action={{ label: 'Discuss your website', href: '/contact' }}>
    <JsonLd id="city-service-schema" data={getServiceSchema(`/locations/${city.slug}`, `Remote SEO services for ${city.name}`, city.blurb, { '@type': 'City', name: city.name, containedInPlace: { '@type': 'State', name: city.stateName } })} />
    <ContentSection title={`Plan around your ${city.name} customers`}><p>{city.planningExample}</p><p className="text-sm text-neutral-500">Planning example; current search competition is assessed during the review.</p></ContentSection>
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8"><ContentSection title="The review"><ul className="list-disc pl-6 space-y-3"><li>Your actual premises, services, and operating area.</li><li>The questions customers ask before contacting you.</li><li>Relevant page, profile, and contact-path problems.</li><li>Dated observations of the searches that matter to the business.</li></ul></ContentSection><ContentSection title="The implementation plan"><p>The proposal identifies deliverables, the person responsible for each change, required access, fees, and how to assess qualified inquiries. It follows your business needs rather than a standard city package.</p></ContentSection></div>
    <ContentSection title="Relevant project experience"><p><Link className="underline text-cyan-800" href={city.relatedCaseStudyPath}>{city.relatedCaseStudyName}</Link> explains a related engagement.{city.relatedCaseStudyPath.endsWith('local-seo-systems') ? ' This is a portfolio example across service markets, rather than a campaign specific to this city.' : ''}</p><p><Link className="underline text-cyan-800" href={`/insights/${city.relatedInsight}`}>Read the market review method</Link> · <a className="underline text-cyan-800" href="https://support.google.com/business/answer/7091?hl=en">Google local ranking guidance</a></p></ContentSection>
    <ContentSection title="Services for your business"><ul className="space-y-3">{niches.map(niche => <li key={niche.slug}><Link className="underline text-cyan-800" href={`/services/${niche.slug}`}>{niche.headline}</Link></li>)}</ul><p><Link className="underline text-cyan-800" href="/services">See all SEO services</Link> or <Link className="underline text-cyan-800" href="/tools/seo-project-planner">prepare your project brief</Link>.</p></ContentSection>
    <PageQuestions items={[
      { q: `Do you have an office in ${city.name}?`, a: `I deliver this service remotely from Faisalabad, Pakistan. We can work on your ${city.name} business website and profiles without representing my consultancy as a local office.` },
      { q: 'How do we plan location pages?', a: 'Start with the areas your business genuinely serves and the information a customer needs. A new city page should add useful detail rather than only replace a city name.' },
      { q: 'How are fees and timing decided?', a: 'They follow the website review and agreed deliverables. The proposal identifies implementation responsibilities, access, and the measures used to review progress.' },
    ]} />
    <ContentSection title="Other service areas"><ul className="flex flex-wrap gap-x-6 gap-y-3">{CITIES.filter(item => item.slug !== city.slug).map(item => <li key={item.slug}><Link className="underline text-cyan-800" href={`/locations/${item.slug}`}>{item.name}, {item.state}</Link></li>)}</ul></ContentSection>
    <ContactAction text={`Discuss your ${city.name} website`} />
  </EditorialLayout>;
}
