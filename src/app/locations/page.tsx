import type {Metadata} from 'next';
import Link from 'next/link';
import EditorialLayout,{ContentSection} from '@/components/EditorialLayout';
import JsonLd from '@/components/JsonLd';
import {CITIES} from '@/lib/locations';
import {getCollectionSchema} from '@/lib/schemas';
export const metadata:Metadata={title:'Remote SEO service areas',description:'SEO consulting delivered remotely from Faisalabad to US businesses and Lahore clients. Geographic pages describe availability, not local offices.',alternates:{canonical:'/locations'}};
export default function Locations(){return <EditorialLayout title="Remote SEO service areas" intro="Based in Faisalabad, Pakistan, I provide remote consulting. Each engagement is scoped around the client’s actual customers, operations, and implementation needs." path="/locations">
 <JsonLd id="locations-collection" data={getCollectionSchema('/locations','Remote SEO service areas',[...CITIES.map(c=>({name:c.name,path:`/locations/${c.slug}`})),{name:'Lahore',path:'/locations/lahore'}])}/>
 <ContentSection title="US markets"><p>Explore the approach for businesses in these markets. Consulting is delivered remotely from Faisalabad, with each project based on the client’s actual services and customer area.</p><ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">{CITIES.map(c=><li key={c.slug}><Link className="underline font-bold" href={`/locations/${c.slug}`}>{c.name}, {c.state}</Link></li>)}</ul></ContentSection>
 <ContentSection title="Pakistan"><p><Link className="underline" href="/locations/lahore">Consulting for Lahore businesses</Link> is delivered remotely from Faisalabad.</p></ContentSection>
 <ContentSection title="Other locations"><p>Location alone does not determine a campaign scope or price. <Link className="underline" href="/contact">Discuss your website and customer area</Link> before planning additional geographic content.</p></ContentSection>
 </EditorialLayout>;}
