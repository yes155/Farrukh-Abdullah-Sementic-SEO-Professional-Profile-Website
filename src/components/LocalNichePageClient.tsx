import Link from 'next/link';
import ElectricianLandingPage from './ElectricianLandingPage';
import EditorialLayout, { ContentSection, ContactAction } from './EditorialLayout';
import PageQuestions from './PageQuestions';
import JsonLd from './JsonLd';
import { getServiceSchema } from '@/lib/schemas';
import { LOCAL_NICHES, type Niche } from '@/lib/localNiches';
import { getCityBySlug } from '@/lib/locations';
import IndustryWorkExample from './IndustryWorkExample';
import { getPriorityServiceContent } from '@/lib/priorityServiceContent';
const groups = [
  ['seo-for-dentists', 'seo-for-orthodontists', 'seo-for-dermatologists', 'seo-for-therapists'],
  ['seo-for-plumbers', 'seo-for-hvac', 'seo-for-electricians', 'seo-for-contractors', 'seo-for-roofers', 'seo-for-fence-contractors', 'seo-for-landscapers', 'seo-for-pest-control'],
  ['seo-for-salons', 'seo-for-real-estate-agents'],
];
export default function LocalNichePageClient({ niche }: { niche: Niche }) {
  if (niche.slug === 'seo-for-electricians') return <ElectricianLandingPage niche={niche} />;
  const workExample = getPriorityServiceContent(niche.slug);
  const cities = niche.relatedCities.map(getCityBySlug).filter(city => !!city);
  const group = groups.find(items => items.includes(niche.slug)) || [];
  const related = LOCAL_NICHES.filter(item => item.slug !== niche.slug && group.includes(item.slug)).slice(0, 3);
  return <EditorialLayout title={niche.headline} intro={niche.intro} path={`/services/${niche.slug}`} parent={{ name: 'Local SEO services', url: '/services/local-seo' }} attributes={['Business Profile review', 'Service-page planning', 'Inquiry measurement']} overview={{ title: 'Your project, in brief', items: niche.deliverables.slice(0, 3) }} action={{ label: 'Discuss your website', href: '/contact' }}>
    <JsonLd id="industry-service-schema" data={getServiceSchema(`/services/${niche.slug}`, niche.headline, niche.intro)} />
    {workExample ? <IndustryWorkExample content={workExample} /> : <>
    <ContentSection title="Start with the customer decision"><p>{niche.example}</p><p className="text-sm text-neutral-500">This example illustrates the planning approach for a {niche.singular.toLowerCase()}.</p></ContentSection>
    <div className="grid md:grid-cols-2 gap-10"><ContentSection title="Work we can prioritize"><ul className="list-disc pl-6 space-y-3">{niche.deliverables.map(item => <li key={item}>{item}</li>)}</ul></ContentSection><ContentSection title="What progress means"><p>{niche.measurement}</p><p>{niche.limitations}</p></ContentSection></div>
    </>}
    <ContentSection title="Agree the scope before work begins"><p>I review the website, business profile, service coverage, and contact process. You receive priorities, required access, implementation responsibilities, and a proposed fee. Timing depends on the work and who implements it.</p><p><Link href="/tools/seo-project-planner" className="underline text-cyan-800">Prepare a brief with the free project planner</Link>.</p></ContentSection>
    <ContentSection title="Related project experience"><p><Link href={niche.relatedCaseStudyPath} className="underline text-cyan-800">{niche.relatedCaseStudyName}</Link> shows the planning and implementation approach across a service-business portfolio. The portfolio covers multiple industries; see its project descriptions for the scope of each engagement.</p><p><Link href={`/insights/${niche.relatedInsight}`} className="underline text-cyan-800">Read the supporting method</Link> · <a className="underline text-cyan-800" href="https://support.google.com/business/answer/7091?hl=en">Google’s local ranking guidance</a></p></ContentSection>
    <PageQuestions items={[...niche.faqs, ...niche.keywords.map(item => ({ q: item.question, a: item.answer }))]} />
    <ContentSection title="Working remotely"><p>I work from Faisalabad, Pakistan, with businesses in their actual customer markets. We agree communication, access, and implementation responsibilities as part of the scope.</p><ul className="flex flex-wrap gap-x-6 gap-y-3">{cities.map(city => <li key={city.slug}><Link className="underline text-cyan-800" href={`/locations/${city.slug}`}>Consulting for {city.name} businesses</Link></li>)}</ul></ContentSection>
    {related.length > 0 && <ContentSection title="Related industry services"><ul className="space-y-3">{related.map(item => <li key={item.slug}><Link className="underline text-cyan-800" href={`/services/${item.slug}`}>{item.headline}</Link></li>)}</ul></ContentSection>}
    <ContactAction text={`Discuss your ${niche.singular.toLowerCase()} website`} />
  </EditorialLayout>;
}
