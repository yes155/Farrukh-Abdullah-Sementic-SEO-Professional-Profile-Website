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
