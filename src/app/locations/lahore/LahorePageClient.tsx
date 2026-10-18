import EditorialLayout, { ContentSection, ContactAction } from '@/components/EditorialLayout';
import JsonLd from '@/components/JsonLd';
import { getServiceSchema } from '@/lib/schemas';
import Link from 'next/link';
export default function LahorePage() {
 return <EditorialLayout title="Remote SEO consulting for Lahore businesses" intro="Content planning, local search reviews, and implementation guidance delivered remotely from Faisalabad, Pakistan." path="/locations/lahore" parent={{name:'Service areas',url:'/locations'}}>
  <JsonLd id="lahore-service" data={getServiceSchema('/locations/lahore','Remote SEO consulting for Lahore businesses','SEO consulting delivered remotely from Faisalabad to businesses in Lahore.',{'@type':'City',name:'Lahore',containedInPlace:{'@type':'Country',name:'Pakistan'}})} />
  <ContentSection title="Service availability"><p>This page describes consulting available to Lahore businesses. It does not claim a Lahore office or assign the city center as a business address.</p><p>A review starts with the actual business premises, customers, services, and contact routes. A local practice and a business serving international clients need different content and measurement plans.</p></ContentSection>
  <ContentSection title="What can be scoped"><ul className="list-disc pl-6"><li><Link className="underline" href="/services/semantic-seo">Content inventory and topic-to-page planning</Link></li><li><Link className="underline" href="/services/local-seo">Accurate business profiles and local inquiry journeys</Link></li><li><Link className="underline" href="/services/ai-seo-consulting">AI search access, accuracy, and measurement</Link></li></ul><p>The written proposal defines deliverables, responsibilities, access, and fees after an initial review. Specific rankings, citations, or revenue are not guaranteed.</p></ContentSection>
  <ContactAction text="Discuss your Lahore business website" />
 </EditorialLayout>;
}
