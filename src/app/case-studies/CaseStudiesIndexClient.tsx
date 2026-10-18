import Link from 'next/link';
import EditorialLayout,{ContentSection} from '@/components/EditorialLayout';
import JsonLd from '@/components/JsonLd';
import {CASE_SLUGS,getCaseContent} from '@/lib/caseContent';
import {getCollectionSchema} from '@/lib/schemas';
export default function CaseIndex(){const cases=CASE_SLUGS.map(s=>getCaseContent(s)!);return <EditorialLayout title="SEO case studies and reported work" intro="Engagement descriptions, attributed feedback, and reported outcomes. Each page states the evidence available and the limits of its numerical claims." path="/case-studies">
 <JsonLd id="case-collection" data={getCollectionSchema('/case-studies','SEO case studies',cases.map(s=>({name:s.name,path:`/case-studies/${s.slug}`})))}/>
 <ContentSection title="How to read these accounts"><p>Campaign analytics and baseline exports are not published here. Assess each account by the stated role, work, outcome definition, and available evidence. Reported results are not a guarantee for another engagement.</p></ContentSection>
 <div className="grid md:grid-cols-2 gap-6">{cases.map(s=><ContentSection title={s.name} key={s.slug}><p>{s.location}</p><p>{s.challenge}</p><Link className="underline font-bold" href={`/case-studies/${s.slug}`}>Work, outcomes, and evidence limits</Link></ContentSection>)}</div>
 </EditorialLayout>;}
