import type { MetadataRoute } from 'next';
import {getInsightsArticles} from '@/sanity/posts';
import {LOCAL_NICHES} from '@/lib/localNiches';
import {CITIES} from '@/lib/locations';
import {CORE_SERVICES} from '@/lib/serviceContent';
import {CASE_SLUGS} from '@/lib/caseContent';
import {EDITORIAL_UPDATED,validISODate} from '@/lib/contentMetadata';
export default async function sitemap():Promise<MetadataRoute.Sitemap>{
 const paths=['/','/about','/services','/case-studies','/locations','/locations/lahore','/insights','/contact','/privacy','/terms','/tools/seo-project-planner',...CORE_SERVICES.map(s=>`/services/${s.slug}`),...LOCAL_NICHES.map(n=>`/services/${n.slug}`),...CITIES.map(c=>`/locations/${c.slug}`),...CASE_SLUGS.map(s=>`/case-studies/${s}`)];
 const articles=await getInsightsArticles();
 return [...paths.map(path=>({url:new URL(path,'https://farrukh.top').href,lastModified:['/privacy','/terms'].includes(path)?'2026-10-18T18:18:45Z':EDITORIAL_UPDATED})),...articles.filter(a=>!a.noIndex&&(!a.canonicalUrl||new URL(a.canonicalUrl,'https://farrukh.top').href===`https://farrukh.top/insights/${a.id}`)).map(a=>({url:`https://farrukh.top/insights/${a.id}`,lastModified:validISODate(a.modifiedDate||a.date)}))];
}
