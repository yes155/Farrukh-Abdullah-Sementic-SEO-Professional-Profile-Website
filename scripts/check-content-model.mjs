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
const {mergeArticles,normalizeCategory}=load('src/sanity/posts.ts');
const {EDITORIAL_ARTICLES}=load('src/lib/articles.ts');
const local=EDITORIAL_ARTICLES[0];
const older={...local,title:'Old unsupported CMS content',modifiedDate:'2026-01-01T00:00:00Z'};
assert.equal(mergeArticles([local],[older])[0].title,local.title);
const newer={...local,title:'Later approved CMS edit',modifiedDate:'2027-01-01T00:00:00Z'};
assert.equal(mergeArticles([local],[newer])[0].title,newer.title);
const newerEditWithOlderDisplayDate={...older,title:'New CMS edit with a retained display date',cmsUpdatedAt:'2027-01-02T00:00:00Z'};
assert.equal(mergeArticles([local],[newerEditWithOlderDisplayDate])[0].title,newerEditWithOlderDisplayDate.title);
assert.equal(normalizeCategory('AI Search, Sementic SEO'),'Semantic SEO');
const {getArticleSchema}=load('src/lib/schemas.ts');
for(const article of EDITORIAL_ARTICLES){const s=getArticleSchema(article);assert.equal(s.headline,article.title);assert.ok(s.datePublished&&s.dateModified);assert.ok(article.contentMarkdown.includes('https://'));}
console.log('Content-model checks passed: revision precedence, category normalization, and schema/title/date consistency across 20 articles.');

const {CASE_SLUGS,getCaseContent}=load('src/lib/caseContent.ts');
assert.equal(CASE_SLUGS.length,9);
for(const slug of CASE_SLUGS){const study=getCaseContent(slug);assert.ok(study.name&&study.summary&&study.challenge&&study.strategy);assert.ok(study.execution.length&&study.results.length&&study.focus.length);}
const {createProjectBrief}=load('src/lib/projectPlanner.ts');
const localCatalog=createProjectBrief('local','catalog','example.com');
assert.match(localCatalog.fitNote,/eligibility/);
assert.match(localCatalog.text,/example.com/);
assert.equal(localCatalog.path,'/services/local-seo');
const content=createProjectBrief('content','online-business');
assert.equal(content.path,'/services/semantic-seo');assert.match(content.text,/To be supplied/);
const ai=createProjectBrief('ai','local-service');assert.match(ai.measure,/Search Console/);
console.log('All nine case records are complete; planner briefs preserve inputs, choose the relevant service, and flag local-profile eligibility.');

const {calculateElectricianBreakEven: breakEven}=load('src/lib/electricianBreakEven.ts');
let result=breakEven(1500,1000,600);
assert.equal(result.valid,true);assert.equal(result.jobs,4);assert.equal(result.contribution,400);assert.equal(result.remaining,100);
assert.equal(breakEven(1200,1000,600).jobs,3);
assert.equal(breakEven(0,1000,600).jobs,0);
assert.equal(breakEven(.30,.20,.10).jobs,3); // cents must not round a whole-job threshold up incorrectly
assert.equal(breakEven(.31,.20,.10).jobs,4);
for (const amounts of [[1500,600,600],[1500,500,600],[-1,1000,600],[1500,Infinity,600],[NaN,1000,600],[100000001,1000,600]]) assert.equal(breakEven(...amounts).valid,false);
console.log('Electrician break-even checks passed: contribution, whole-job rounding, cents, zero spending, and invalid inputs.');
