#!/usr/bin/env python3
"""Production HTTP regression checks. Run against a built local server, never a public submit flow."""
import argparse, concurrent.futures, csv, io, json, pathlib, re, urllib.request, urllib.error, urllib.parse, xml.etree.ElementTree as ET
from html.parser import HTMLParser
class Page(HTMLParser):
 def __init__(self, body):
  super().__init__(); self.stack=[];self.h1=[];self.title=[];self.headings=[];self.canon=[];self.descriptions=[];self.links=[];self.schemas=[];self.schema_blocks=[];self.script_location=None;self.script=None;self.heading=None;self.ids=set();self.dom_text=[];self.main_images=[];self.times=[];self.feed(body)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if a.get('id'):self.ids.add(a['id'])
  if tag=='time' and a.get('datetime'):self.times.append(a['datetime'])
  if tag=='img' and 'main' in self.stack:self.main_images.append(a.get('src'))
  if tag=='link' and a.get('rel')=='canonical':self.canon.append(a.get('href'))
  if tag=='meta' and a.get('name')=='description':self.descriptions.append(a.get('content'))
  if tag=='a' and a.get('href'):self.links.append((a['href'],'main' in self.stack))
  if tag=='script' and a.get('type')=='application/ld+json':self.script=[];self.script_location='head' if 'head' in self.stack else 'body'
  if re.fullmatch('h[1-6]',tag):self.heading=[tag,[]]
  if tag not in ['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']:self.stack.append(tag)
 def handle_endtag(self,tag):
  if tag=='script' and self.script is not None:
   data=json.loads(''.join(self.script));self.schema_blocks.append((self.script_location,data));self.schemas.extend(data.get('@graph',[data]));self.script=None
  if self.heading and tag==self.heading[0]:
   text=' '.join(''.join(self.heading[1]).split());self.headings.append((tag,text))
   if tag=='h1':self.h1.append(text)
   self.heading=None
  if tag in self.stack:self.stack=self.stack[:len(self.stack)-1-self.stack[::-1].index(tag)]
 def handle_data(self,data):
  if 'script' not in self.stack and 'style' not in self.stack:self.dom_text.append(data)
  if self.script is not None:self.script.append(data)
  if self.heading:self.heading[1].append(data)
  if 'title' in self.stack:self.title.append(data)
class NoRedirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,*args,**kwargs):return None

def run(base):
 def fetch(path,ua='Mozilla/5.0'):
  req=urllib.request.Request(base+path,headers={'User-Agent':ua})
  try:
   with urllib.request.urlopen(req,timeout=30) as r:return r.status,r.read().decode()
  except urllib.error.HTTPError as e:return e.code,e.read().decode()
 status,xml=fetch('/sitemap.xml');assert status==200,status
 entries=[{c.tag.split('}')[-1]:c.text for c in e} for e in ET.fromstring(xml)]
 paths=[urllib.parse.urlparse(e['loc']).path for e in entries]
 assert len(paths)==68,(len(paths),'66 existing pages plus evidence and audit workbook')
 assert all(e.get('lastmod') for e in entries),'Missing content modification dates'
 assert len(paths)==len(set(paths)),'Duplicate sitemap URLs'
 modification_dates={urllib.parse.urlparse(e['loc']).path:e['lastmod'] for e in entries}
 assert modification_dates['/evidence'].startswith('2026-10-29')
 assert modification_dates['/services/seo-for-electricians'].startswith('2026-10-28')
 assert modification_dates['/services/seo-for-fence-contractors'].startswith('2026-10-28')
 assert modification_dates['/about'].startswith('2026-10-29')
 results={}
 with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
  for path,result in zip(paths,pool.map(fetch,paths)):
   status,body=result;assert status==200,(path,status)
   p=Page(body);results[path]=p
   assert len(p.h1)==1,(path,p.h1)
   assert p.title and p.descriptions,(path,'Missing metadata')
   expected='https://farrukh.top'+('' if path=='/' else path)
   assert len(p.canon)==1 and p.canon[0].rstrip('/')==expected.rstrip('/'),(path,p.canon)
   for s in p.schemas:
    if s.get('@type')=='Service':assert s.get('areaServed')!={'@id':'https://farrukh.top/#organization'},path
   text=' '.join(' '.join(p.dom_text).split())
   for schema in p.schemas:
    if schema.get('@type')=='FAQPage':
     for question in schema['mainEntity']:
      assert ' '.join(question['name'].split()) in text,(path,'FAQ question absent from rendered HTML')
      assert ' '.join(question['acceptedAnswer']['text'].split()) in text,(path,'FAQ answer absent from rendered HTML')
   assert 'main-content' in p.ids and any(href=='#main-content' for href,_ in p.links),(path,'Missing skip link')
   for href,main in p.links:
    u=urllib.parse.urlparse(href)
    if not u.scheme and not u.netloc and not u.path and u.fragment:assert urllib.parse.unquote(u.fragment) in p.ids,(path,'Broken in-page anchor',href)
    if u.scheme in ('','http','https') and (not u.netloc or u.netloc=='farrukh.top') and u.path and not u.path.startswith('/studio'):
     assert u.path in paths or u.path in ['/resources/local-seo-audit-template.csv','/resources/ai-search-observation-template.csv'],(path,'Internal destination absent from sitemap',href)
 assert len({''.join(p.title) for p in results.values()})==len(paths),'Duplicate titles'
 articles={k:p for k,p in results.items() if k.startswith('/insights/')}
 assert len(articles)==20
 for path,p in articles.items():
  assert any(main and href.startswith('https://') and 'farrukh.top' not in urllib.parse.urlparse(href).netloc for href,main in p.links),(path,'No primary-source link')
  assert all(len(text.split())<=35 and '](' not in text for tag,text in p.headings),(path,'Broken heading rendering')
  article=[s for s in p.schemas if s.get('@type')=='Article'];assert len(article)==1,path
  assert article[0]['author']['@id']=='https://farrukh.top/#person'
  assert article[0].get('datePublished') and article[0].get('dateModified'),path
  assert any(href=='/about' and main for href,main in p.links),path
 cases={path:p for path,p in results.items() if path.startswith('/case-studies/')}
 assert len(cases)==9
 for path,p in cases.items():
  assert not p.main_images,(path,'Unrelated image returned in case-study template')
  article=[s for s in p.schemas if s.get('@type')=='Article'];assert len(article)==1 and article[0]['headline']==p.h1[0],path
 priority={
  '/services/seo-for-electricians':('Mr. Electric','EV charger installation page brief','https://mrelectric.com/residential/electric-vehicles/ev-charger-installation-replacement','/services/ev-charger-installation'),
  '/services/seo-for-fence-contractors':('Long Fence','Wood fence installation page brief','https://www.longfence.com/repair/','/fencing/wood-fence-installation'),
  '/services/seo-for-orthodontists':('Diamond Braces','Clear-aligner consultation page brief','https://www.diamondbraces.com/pages/free-virtual-consultation','/treatments/clear-aligner-consultation'),
 }
 for path,(business,brief,source,example_url) in priority.items():
  p=results[path];text=' '.join(' '.join(p.dom_text).split());headings=[text for _,text in p.headings]
  assert 'Public-site walkthrough: '+business in headings,(path,'Missing independent walkthrough')
  assert brief in headings and 'Sample deliverable' in text,(path,'Missing original implementation brief')
  assert 'Not a client case study' in text,(path,'Example could be confused with client work')
  assert any(href==source and main for href,main in p.links),(path,'Missing primary-source link')
  assert not any(href==example_url for href,_ in p.links),(path,'Illustrative business URL became a broken site link')
  assert 'Measure inquiries and booking outcomes' in headings,(path,'Missing outcome definitions')
  assert len(p.descriptions[0])<=170,(path,'Service description too long')
  service=[schema for schema in p.schemas if schema.get('@type')=='Service']
  assert len(service)==1 and service[0]['name']==p.h1[0],(path,'Service schema and visible title differ')
  assert any(href==path and main for href,main in results['/services/local-seo'].links),(path,'Not linked from parent service')
  for guide in ['local-entity-seo-ai-search','us-cities-local-seo-opportunity']:
   assert any(href==path and main for href,main in results['/insights/'+guide].links),(path,'Missing guide link')
 for path,p in results.items():
  if path.startswith('/services/seo-for-') and path not in priority:
   assert not any('Public-site walkthrough:' in text for _,text in p.headings),(path,'Wrong industry example leaked onto another service')
 electrician_path='/services/seo-for-electricians'
 electrician=results[electrician_path]
 detail_headings={'Electrician SEO audit checklist','How I choose SEO keywords for electricians','Electrician SEO cost: compare the scope first','When does electrician SEO break even?'}
 assert detail_headings<={text for _,text in electrician.headings},'Missing approved electrician buyer information'
 assert '2026-10-28' in electrician.times,'Visible electrician revision date differs from sitemap'
 electrician_text=' '.join(' '.join(electrician.dom_text).split())
 assert 'Illustrative business example' in electrician_text and 'not my fees or a client result' in electrician_text,'Financial example could be mistaken for pricing or client evidence'
 assert {'electrician-inquiry','electrician-sample-audit','electrician-wireframe-caption','electrician-campaign','electrician-revenue','electrician-directCost'}<=electrician.ids,'Missing accessible inquiry, sample, or calculator'
 for path,p in results.items():
  if path!=electrician_path:
   assert not detail_headings.intersection(text for _,text in p.headings),(path,'Electrician-only additions leaked onto another page')
 assert '2026-10-19' in results['/services/seo-for-dentists'].times,'Unchanged service revision date was advanced'
 planner=results['/tools/seo-project-planner']
 assert {'planner-website','planner-business','planner-goal'}<=planner.ids
 assert any(s.get('@type')=='WebApplication' and s['offers']['price']=='0' for s in planner.schemas)
 workbook=results['/tools/local-seo-audit-workbook'];evidence=results['/evidence']
 assert {'audit-industry','audit-website','audit-date','audit-status-eligibility','audit-status-ownership'}<=workbook.ids
 assert any(schema.get('@type')=='WebApplication' and schema['offers']['price']=='0' for schema in workbook.schemas)
 assert any(href=='https://clutch.co/profile/farrukh-abdullah-geo-semantic-seo-consultant' and main for href,main in evidence.links)
 for path in ['/', '/about', '/services/local-seo', '/services/seo-for-electricians', '/services/seo-for-fence-contractors', '/services/seo-for-orthodontists', *cases.keys()]:
  assert any(href=='/tools/local-seo-audit-workbook' and main for href,main in results[path].links),(path,'Missing contextual workbook link')
 for path,p in cases.items():
  assert 'evidence' in p.ids and '2026-10-28' in p.times,(path,'Missing project evidence context')
 status,template=fetch('/resources/local-seo-audit-template.csv');assert status==200 and 'Review guidance' in template and 'Confirm profile eligibility' in template,'Missing usable audit template'
 expected_identity=json.loads((pathlib.Path(__file__).resolve().parents[1]/'src/lib/identityGraph.json').read_text())
 for path in ['/about','/evidence']:
  p=results[path];visible=' '.join(' '.join(p.dom_text).split())
  works=[node for node in p.schemas if node.get('@type') in ['CreativeWork','Article','SoftwareSourceCode']]
  assert len(works)==3,(path,'Missing or duplicate public works')
  for work in works:
   assert work['author']['@id']=='https://farrukh.top/#person',(path,'Work author disconnected')
   assert any(href==work['url'] and main for href,main in p.links),(path,'Work source not linked')
   assert work['name'] in visible,(path,'Work title absent from visible content')
   if work.get('datePublished'):assert work['datePublished'] in p.times,(path,'Work date absent from visible content')
  assert not any('overleaf.com' in href for href,_ in p.links),(path,'Private project-sharing link exposed')
 assert any(href=='https://techbehemoths.com/company/farrukh-abdullah-advisory' and main for href,main in results['/about'].links),'Existing verification link lost'
 for path,p in results.items():
  graphs=[(location,data) for location,data in p.schema_blocks if '@graph' in data and any(node.get('@id')=='https://farrukh.top/#person' for node in data['@graph'])]
  assert len(graphs)==1 and graphs[0][0]=='head',(path,'Identity graph must appear once in the server-rendered head')
  assert graphs[0][1]==expected_identity,(path,'Published graph differs from shared identity data')
  for identity in ['https://farrukh.top/#person','https://farrukh.top/#organization']:
   assert len([node for node in p.schemas if node.get('@id')==identity])==1,(path,'Duplicate identity entity',identity)
  website=[node for node in p.schemas if node.get('@type')=='WebSite']
  assert len(website)==1 and website[0]['publisher']['@id']=='https://farrukh.top/#organization',(path,'Disconnected website publisher')
 status,llms=fetch('/llms.txt');assert status==200 and llms.startswith('# Farrukh Abdullah'),('llms.txt',status)
 llms_links=re.findall(r'\]\((https://farrukh\.top/[^)]+)\)',llms)
 assert len(llms_links)==len(set(llms_links)),'Duplicate AI navigation entries'
 for href in llms_links:
  path=urllib.parse.urlparse(href).path
  assert path in paths or path=='/resources/ai-search-observation-template.csv',('AI navigation destination missing',href)
 for path,p in articles.items():
  headline=next(s['headline'] for s in p.schemas if s.get('@type')=='Article')
  assert f'[{headline}](https://farrukh.top{path})' in llms,(path,'AI navigation and live article title disagree')
 for resource in ['/evidence','/tools/local-seo-audit-workbook','/resources/ai-search-observation-template.csv']:assert resource in llms
 assert 'Campaign dates and underlying analytics exports are not currently published' in llms
 for stale in ['+112%','1,200+','340%','secure citations','The Exact Passage Structure']:assert stale not in llms,stale
 status,observations=fetch('/resources/ai-search-observation-template.csv');assert status==200
 rows=list(csv.DictReader(io.StringIO(observations)))
 assert len(rows)==10 and len({row['question_id'] for row in rows})==10,'Missing or duplicate observation questions'
 assert all(len(row)==15 and row['exact_question'] for row in rows),'Malformed observation template'
 assert all(not row[key] for row in rows for key in row if key not in ['question_id','exact_question']),'Template contains invented observations'
 assert 'ai-measurement' in evidence.ids and any(href=='/resources/ai-search-observation-template.csv' and main for href,main in evidence.links)
 status,robots=fetch('/robots.txt');assert status==200
 # This site's single wildcard group permits public paths and excludes Studio.
 # urllib.robotparser uses first-match rules, unlike the longest-match behavior
 # used by search crawlers, so it misreads Allow: / before Disallow: /studio.
 rules=[line.strip().lower() for line in robots.splitlines() if line.strip()]
 assert [line for line in rules if line.startswith('user-agent:')]==['user-agent: *'],'Crawler-specific policy needs an explicit review'
 assert 'allow: /' in rules and [line for line in rules if line.startswith('disallow:')]==['disallow: /studio'],'Public access or Studio exclusion changed'
 for ua in ['OAI-SearchBot','PerplexityBot','Googlebot']:
  status,body=fetch('/',ua);assert status==200 and len(Page(body).h1)==1,(ua,status)
 about=results['/about'];assert len([s for s in about.schemas if s.get('@type')=='Person'])==1
 lahore=results['/locations/lahore'];assert len([s for s in lahore.schemas if s.get('@type')=='ProfessionalService'])==1
 assert not any(s.get('geo') for s in lahore.schemas),'Unverified Lahore coordinates'
 for path in ['/audit-missing-test','/services/audit-missing-test','/insights/audit-missing-test']:
  for ua in ['Mozilla/5.0','Googlebot']:
   status,_=fetch(path,ua);assert status==404,(path,ua,status)
 opener=urllib.request.build_opener(NoRedirect())
 for old,new in [('/services/seo-for-estate-agents','/services/seo-for-real-estate-agents'),('/services/seo-for-tradies','/services/seo-for-contractors')]:
  try:opener.open(base+old,timeout=10);raise AssertionError('Missing redirect: '+old)
  except urllib.error.HTTPError as e:
   assert e.code in (301,308),(old,e.code)
   assert urllib.parse.urlparse(e.headers['Location']).path==new,(old,e.headers['Location'])
 print(json.dumps({'pages':len(paths),'articles':len(articles),'case_studies':len(cases),'workbook_evidence_and_links':'passed','public_work_sources_and_author_relationships':'2/2 pages','identity_graph_head_and_deduplication':f'{len(paths)}/{len(paths)}','ai_navigation_and_observation_template':'passed','crawler_policy_and_user_agent_responses':'3/3','faq_and_fragment_checks':'passed','priority_service_walkthroughs':'3/3','electrician_sections_and_revision_dates':'passed','primary_sources':'20/20','article_schema':'20/20','missing_routes':'3 paths × 2 user agents return 404','redirects':2,'status':'passed'},indent=2))
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--base-url',default='http://127.0.0.1:4317');run(parser.parse_args().base_url.rstrip('/'))
