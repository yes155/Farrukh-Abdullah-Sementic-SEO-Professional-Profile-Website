import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {createRequire} from 'node:module';
import ts from 'typescript';
const require=createRequire(import.meta.url), root=process.cwd(),cache=new Map();
function load(relative){
 const filename=path.resolve(root,relative);if(cache.has(filename))return cache.get(filename);
 const module={exports:{}};cache.set(filename,module.exports);
 const compiled=ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
 const localRequire=id=>{
  if(id.startsWith('@/')||id.startsWith('.')) {let f=id.startsWith('@/')?path.join(root,'src',id.slice(2)):path.resolve(path.dirname(filename),id);if(!path.extname(f))f+='.ts';return load(f);}
  return require(id);
 };
 vm.runInNewContext(compiled,{module,exports:module.exports,require:localRequire,process,console,URL,Map,Set,Date},{filename});
 cache.set(filename,module.exports);return module.exports;
}

const {CORE_SERVICES}=load('src/lib/serviceContent.ts');
const {LOCAL_NICHES}=load('src/lib/localNiches.ts');
const {getPriorityServiceContent}=load('src/lib/priorityServiceContent.ts');
const {CITIES}=load('src/lib/locations.ts');
const {CASE_SLUGS,getCaseContent}=load('src/lib/caseContent.ts');
const {EDITORIAL_ARTICLES}=load('src/lib/articles.ts');
const rows=[];
const add=(url,cluster,intent,task,headings,variants='Cover close wording variants within the same page')=>rows.push({url,cluster,intent,page_decision:'QDP: retain distinct page',primary_task:task,heading_decisions:headings.map(x=>'QDH: '+x).join(' | '),variant_decision:'QDS: '+variants});
add('/','Business identity','Commercial','Choose an SEO consultant',['Services','Selected work','Client feedback','Engagement questions']);
add('/about','Business identity','Trust','Understand the consultant and relevant experience',['Approach','Professional experience','Training']);
add('/services','Services','Directory','Choose the right SEO service',['Core services','Industry services']);
add('/case-studies','Case studies','Directory','Find relevant project experience',['Client projects']);
add('/locations','Service areas','Directory','Understand remote availability',['US markets','Pakistan','Other locations']);
add('/locations/lahore','Service areas','Commercial','Assess remote SEO consulting for a Lahore business',['Remote delivery','Work in scope']);
add('/insights','Insights','Directory','Find a practical SEO explanation',['Article topics']);
add('/contact','Business identity','Conversion','Describe a project and choose a contact route',['Project details','Contact options']);
add('/privacy','Policies','Policy','Understand data handling',['Inquiry information','Privacy terms']);
add('/terms','Policies','Policy','Understand advisory terms',['Engagement terms']);
add('/tools/seo-project-planner','Planning tools','Utility','Prepare an SEO project brief',['Business type','Goal','Suggested review priorities','Using the brief']);
for(const service of CORE_SERVICES)add('/services/'+service.slug,'Core services','Commercial',service.title,['Service fit',...service.deliverables,'Access','Progress','Engagement questions']);
for(const niche of LOCAL_NICHES){
 const example=getPriorityServiceContent(niche.slug);
 const headings=example?[example.journeyTitle,'What I would deliver for your business','Public-site walkthrough: '+example.publicExample.business,'An example implementation brief','Measure inquiries and booking outcomes']:['Customer decision'];
 if(niche.slug==='seo-for-electricians')headings.push('Electrician SEO audit checklist','How I choose SEO keywords for electricians','Electrician SEO cost: compare the scope first','A worked example: when does electrician SEO break even?');
 add('/services/'+niche.slug,'Industry services','Commercial',niche.headline,[...headings,...niche.faqs.map(item=>item.q),...niche.keywords.map(item=>item.question)],'Industry synonyms and narrower wording belong on the existing service page unless they introduce a distinct customer task');
}
for(const city of CITIES)add('/locations/'+city.slug,'Service areas','Commercial','Assess remote SEO work for a '+city.name+' business',['Customer area','Planning example','Relevant project','Office and delivery questions'],'Address variants answered by the actual remote-delivery statement; no invented city office');
for(const slug of CASE_SLUGS){const study=getCaseContent(slug);add('/case-studies/'+slug,'Case studies','Trust','Evaluate the '+study.name+' engagement',['Challenge','Approach','Work delivered','Outcome','Client feedback where supplied']);}
for(const article of EDITORIAL_ARTICLES)add('/insights/'+article.id,article.category,'Informational',article.title,article.contentMarkdown.split('\n').filter(line=>line.startsWith('## ')).map(line=>line.slice(3)));
assert.equal(rows.length,66);
assert.equal(new Set(rows.map(item=>item.url)).size,66);
const columns=Object.keys(rows[0]);const csv=[columns.join(','),...rows.map(row=>columns.map(key=>'"'+String(row[key]).replaceAll('"','""')+'"').join(','))].join('\n')+'\n';
fs.writeFileSync('docs/CONTENT-MAP.csv',csv);
console.log('Exported 66 distinct page purposes and their heading/variant decisions.');
