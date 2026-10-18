import { FEATURED_PROJECTS } from '@/data';
import { CLIENT_CASE_STUDIES } from './clientCaseStudies';
export function getCaseContent(slug: string) {
 const client = CLIENT_CASE_STUDIES.find(s=>s.slug===slug);
 if (client) return { slug, title: client.h1, name: client.clientName, location: client.location, challenge: client.challenge, strategy: client.strategy, execution: client.execution, results: client.results, image: client.imageSrc, quote: client.testimonialQuote, attribution: `${client.ownerName}, ${client.ownerRole}`, services: [client.servicesPrimary, client.servicesSecondary], insight: client.insightLink };
 const index = ['windcave','local-seo-systems','azuno'].indexOf(slug);
 if(index<0) return undefined;
 const project=FEATURED_PROJECTS[index];
 const names=['Windcave','Local lead-generation portfolio','Azuno'];
 return { slug, title: `${names[index]}: SEO engagement overview`, name:names[index], location:index===1?'Mixed US service niches':index===2?'San Francisco, as described in the engagement':'Global business', challenge:project.challenge, strategy:project.strategy, execution:project.execution, results:project.results, image:project.imageSrc, quote:'',attribution:'',services:[{path:index===1?'/services/local-seo':'/services/semantic-seo',label:index===1?'Local SEO services':'Semantic SEO consulting'},{path:'/services/ai-seo-consulting',label:'AI SEO consulting'}],insight:{path:index===1?'/insights/local-entity-seo-ai-search':'/insights/entity-based-content-architecture',label:'Read the supporting implementation guide'}};
}
export const CASE_SLUGS=['windcave','local-seo-systems','azuno',...CLIENT_CASE_STUDIES.map(s=>s.slug)];
