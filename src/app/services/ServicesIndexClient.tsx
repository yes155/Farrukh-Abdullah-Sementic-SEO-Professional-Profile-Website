import Link from 'next/link';
import { PageNavigation } from '@/components/PageFrame';
import EditorialLayout,{ContentSection, ContactAction} from '@/components/EditorialLayout';
import JsonLd from '@/components/JsonLd';
import {CORE_SERVICES} from '@/lib/serviceContent';
import {LOCAL_NICHES} from '@/lib/localNiches';
import {getCollectionSchema} from '@/lib/schemas';
export default function ServicesIndex(){
 return <EditorialLayout title="SEO consulting services" intro="Choose work by the problem your website needs to solve. Scope, implementation responsibilities, and measurement are agreed before an engagement." path="/services" headerAside={<PageNavigation title="Choose your next step" items={[{label:'Core consulting services',href:'#core-services'},{label:'Local SEO by industry',href:'#industry-services'},{label:'Prepare a project brief',href:'/tools/seo-project-planner'}]} />} >
  <JsonLd id="services-collection" data={getCollectionSchema('/services','SEO consulting services',[...CORE_SERVICES.map(s=>({name:s.title,path:`/services/${s.slug}`})),...LOCAL_NICHES.map(n=>({name:n.headline,path:`/services/${n.slug}`}))])}/>
  <div id="core-services" className="grid md:grid-cols-3 gap-4 scroll-mt-28">{CORE_SERVICES.map(s=><article key={s.slug} className="site-card"><ContentSection title={s.title}><p>{s.intro}</p><p>{s.audience}</p><Link className="underline font-bold" href={`/services/${s.slug}`}>Scope and deliverables</Link></ContentSection></article>)}</div>
  <ContentSection id="industry-services" title="Local SEO by industry"><p>Choose the industry that reflects your services and customers. Each page explains its buying decisions, operating constraints, and inquiry measurements.</p><div className="grid md:grid-cols-3 gap-4">{[
    {title:'Health and personal care',slugs:['seo-for-dentists','seo-for-orthodontists','seo-for-dermatologists','seo-for-therapists','seo-for-salons']},
    {title:'Trades and home services',slugs:['seo-for-plumbers','seo-for-hvac','seo-for-electricians','seo-for-contractors','seo-for-roofers','seo-for-fence-contractors','seo-for-landscapers','seo-for-pest-control']},
    {title:'Property services',slugs:['seo-for-real-estate-agents','seo-for-estate-agents']},
  ].map(group=><section key={group.title} className="site-panel"><h3 className="text-lg font-semibold text-black mb-3">{group.title}</h3><ul className="space-y-3">{LOCAL_NICHES.filter(n=>group.slugs.includes(n.slug)).map(n=><li key={n.slug}><Link className="underline text-cyan-800 text-sm" href={`/services/${n.slug}`}>{n.headline}</Link></li>)}</ul></section>)}</div></ContentSection>
  <ContactAction />
 </EditorialLayout>;
}
