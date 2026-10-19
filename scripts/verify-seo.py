#!/usr/bin/env python3
"""Production HTTP regression checks. Run against a built local server, never a public submit flow."""
import argparse, concurrent.futures, json, re, urllib.request, urllib.error, urllib.parse, xml.etree.ElementTree as ET
from html.parser import HTMLParser
class Page(HTMLParser):
 def __init__(self, body):
  super().__init__(); self.stack=[];self.h1=[];self.title=[];self.headings=[];self.canon=[];self.descriptions=[];self.links=[];self.schemas=[];self.script=None;self.heading=None;self.ids=set();self.dom_text=[];self.main_images=[];self.feed(body)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if a.get('id'):self.ids.add(a['id'])
  if tag=='img' and 'main' in self.stack:self.main_images.append(a.get('src'))
  if tag=='link' and a.get('rel')=='canonical':self.canon.append(a.get('href'))
  if tag=='meta' and a.get('name')=='description':self.descriptions.append(a.get('content'))
  if tag=='a' and a.get('href'):self.links.append((a['href'],'main' in self.stack))
  if tag=='script' and a.get('type')=='application/ld+json':self.script=[]
  if re.fullmatch('h[1-6]',tag):self.heading=[tag,[]]
  if tag not in ['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']:self.stack.append(tag)
 def handle_endtag(self,tag):
  if tag=='script' and self.script is not None:self.schemas.append(json.loads(''.join(self.script)));self.script=None
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
 assert len(paths)==66,(len(paths),'65 audited pages plus the SEO project planner')
 assert all(e.get('lastmod') for e in entries),'Missing content modification dates'
 assert len(paths)==len(set(paths)),'Duplicate sitemap URLs'
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
     assert u.path in paths,(path,'Internal destination absent from sitemap',href)
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
 planner=results['/tools/seo-project-planner']
 assert {'planner-website','planner-business','planner-goal'}<=planner.ids
 assert any(s.get('@type')=='WebApplication' and s['offers']['price']=='0' for s in planner.schemas)
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
 print(json.dumps({'pages':len(paths),'articles':len(articles),'case_studies':len(cases),'faq_and_fragment_checks':'passed','priority_service_walkthroughs':'3/3','primary_sources':'20/20','article_schema':'20/20','missing_routes':'3 paths × 2 user agents return 404','redirects':2,'status':'passed'},indent=2))
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--base-url',default='http://127.0.0.1:4317');run(parser.parse_args().base_url.rstrip('/'))
