import Link from 'next/link';
import EditorialLayout,{ContentSection} from '@/components/EditorialLayout';
import JsonLd from '@/components/JsonLd';
import {CORE_SERVICES} from '@/lib/serviceContent';
import {LOCAL_NICHES} from '@/lib/localNiches';
import {getCollectionSchema} from '@/lib/schemas';
export default function ServicesIndex(){
 return <EditorialLayout title="SEO consulting services" intro="Choose work by the problem your website needs to solve. Scope, implementation responsibilities, and measurement are agreed before an engagement." path="/services">
  <JsonLd id="services-collection" data={getCollectionSchema('/services','SEO consulting services',[...CORE_SERVICES.map(s=>({name:s.title,path:`/services/${s.slug}`})),...LOCAL_NICHES.map(n=>({name:n.headline,path:`/services/${n.slug}`}))])}/>
  <div className="grid md:grid-cols-3 gap-6">{CORE_SERVICES.map(s=><ContentSection title={s.title} key={s.slug}><p>{s.intro}</p><p>{s.audience}</p><Link className="underline font-bold" href={`/services/${s.slug}`}>Scope and deliverables</Link></ContentSection>)}</div>
  <ContentSection title="Local SEO by industry"><p>These pages explain different buying decisions, operating constraints, and inquiry measurements. Examples are planning illustrations unless a specific reported engagement is identified.</p><ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">{LOCAL_NICHES.map(n=><li key={n.slug}><Link className="underline" href={`/services/${n.slug}`}>{n.headline}</Link></li>)}</ul></ContentSection>
 </EditorialLayout>;
}
