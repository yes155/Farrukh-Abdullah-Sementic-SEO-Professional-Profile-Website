'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AUDIT_CHECKS, AUDIT_INDUSTRIES, AUDIT_STATUSES, createAuditDraft, emptyAuditEntry, exportAuditCsv, restoreAuditDraft, type AuditDraft, type AuditEntry, type AuditIndustry } from '@/lib/auditWorkbook';
const STORAGE_KEY = 'farrukh-local-seo-audit-v1';
const control = 'w-full min-w-0 border border-neutral-300 bg-white px-3 py-3 text-base text-neutral-900 rounded-sm';
export default function AuditWorkbook() {
  const [draft,setDraft] = useState<AuditDraft>(createAuditDraft);
  const [ready,setReady] = useState(false);
  const [storage,setStorage] = useState('Loading saved entries…');
  const [confirmClear,setConfirmClear] = useState(false);
  useEffect(() => {
    try { const stored=localStorage.getItem(STORAGE_KEY); if(stored) { const parsed=restoreAuditDraft(JSON.parse(stored)); if(parsed) setDraft(parsed); else setStorage('Saved data could not be restored. Start a new review or export the current entries.'); } }
    catch { setStorage('Browser storage is unavailable. Export your entries before leaving.'); }
    setReady(true);
  },[]);
  useEffect(() => { if(!ready)return; try {localStorage.setItem(STORAGE_KEY,JSON.stringify(draft));setStorage('Saved in this browser.');}catch{setStorage('Could not save in this browser. Export your entries before leaving.');} },[draft,ready]);
  function update(id: string, value: Partial<AuditEntry>) {setDraft(current=>({...current,entries:{...current.entries,[id]:{...(current.entries[id]||emptyAuditEntry()),...value}}}));}
  function download() {const url=URL.createObjectURL(new Blob([exportAuditCsv(draft)],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='local-seo-audit-workbook.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  const reviewed=AUDIT_CHECKS.filter(check=>draft.entries[check.id] && draft.entries[check.id].status!=='Not reviewed').length;
  const changes=AUDIT_CHECKS.filter(check=>draft.entries[check.id]?.status==='Needs work').length;
  const industry=AUDIT_INDUSTRIES[draft.industry];
  return <section aria-label="Local SEO audit workbook" className="border border-neutral-300 bg-neutral-50 p-5 md:p-8 min-w-0">
    <noscript><p className="mb-6">Enable JavaScript for the interactive workbook, or <a href="/resources/local-seo-audit-template.csv" className="underline">download the blank CSV template</a>.</p></noscript>
    <div className="grid md:grid-cols-3 gap-5">
      <div><label htmlFor="audit-industry" className="block text-sm font-semibold mb-2">Business type</label><select id="audit-industry" className={control} value={draft.industry} onChange={e=>setDraft({...draft,industry:e.target.value as AuditIndustry})}>{Object.entries(AUDIT_INDUSTRIES).map(([id,item])=><option key={id} value={id}>{item.name}</option>)}</select></div>
      <div><label htmlFor="audit-website" className="block text-sm font-semibold mb-2">Website reviewed</label><input id="audit-website" className={control} type="url" maxLength={400} placeholder="https://your-business.com" value={draft.website} onChange={e=>setDraft({...draft,website:e.target.value})} /></div>
      <div><label htmlFor="audit-date" className="block text-sm font-semibold mb-2">Review date</label><input id="audit-date" className={control} type="date" value={draft.reviewDate} onChange={e=>setDraft({...draft,reviewDate:e.target.value})} /></div>
    </div>
    <div className="mt-6 p-5 bg-white border border-neutral-200"><p className="font-semibold">Review context: {industry.name.toLowerCase()}</p><p className="text-sm text-neutral-600 mt-2 leading-relaxed">{industry.examples} {industry.evidence}</p><p className="mt-3 text-sm"><Link href={industry.service} className="underline text-cyan-800">See the relevant service example</Link></p><p className="text-xs text-neutral-600 mt-3">Changing the business type updates this guidance and keeps your review entries.</p></div>
    <div className="flex flex-wrap gap-4 items-center justify-between mt-6 py-5 border-y border-neutral-300"><p className="text-sm" aria-live="polite"><strong data-testid="audit-reviewed">{reviewed}</strong> of {AUDIT_CHECKS.length} checks reviewed · <strong data-testid="audit-changes">{changes}</strong> marked for work</p><button type="button" onClick={download} className="bg-cyan-400 hover:bg-cyan-300 border border-black px-5 py-3 font-semibold text-sm">Export workbook CSV</button></div>
    <p className="text-xs text-neutral-600 mt-4" role="status">{storage} Entries are not sent to this site. Record public URLs and non-sensitive findings; keep credentials and customer records in your own systems.</p>
    <div className="mt-8 space-y-9">{['Business profile','Service pages','Technical access','Measurement'].map(group=><section key={group}><h3 className="text-xl font-semibold mb-4">{group}</h3><div className="space-y-4">{AUDIT_CHECKS.filter(check=>check.group===group).map(check=>{
      const entry=draft.entries[check.id]||emptyAuditEntry();return <article key={check.id} className="border border-neutral-300 bg-white p-5 md:p-6 min-w-0" data-audit-check={check.id}>
        <div className="grid md:grid-cols-[minmax(0,1fr)_200px] gap-4 items-start"><div><p className="text-xs text-cyan-800 font-semibold mb-2">{check.priority}</p><h4 className="text-base font-semibold">{check.title}</h4><p className="text-sm text-neutral-600 leading-relaxed mt-3">{check.review}</p></div><div><label className="block text-xs font-semibold mb-2" htmlFor={`audit-status-${check.id}`}>Review status</label><select className={control} id={`audit-status-${check.id}`} value={entry.status} onChange={e=>update(check.id,{status:e.target.value as AuditEntry['status']})}>{AUDIT_STATUSES.map(status=><option key={status}>{status}</option>)}</select></div></div>
        <details className="mt-4 border-t border-neutral-200 pt-4"><summary className="text-sm font-semibold cursor-pointer">Record evidence and next action</summary><div className="grid gap-4 mt-5"><div><label htmlFor={`audit-evidence-${check.id}`} className="block text-sm mb-2 font-medium">Evidence URL or public reference</label><input id={`audit-evidence-${check.id}`} className={control} maxLength={1000} value={entry.evidence} onChange={e=>update(check.id,{evidence:e.target.value})} /></div><div><label htmlFor={`audit-notes-${check.id}`} className="block text-sm mb-2 font-medium">Finding</label><textarea id={`audit-notes-${check.id}`} className={control} rows={2} maxLength={1500} value={entry.notes} onChange={e=>update(check.id,{notes:e.target.value})} /></div><div><label htmlFor={`audit-action-${check.id}`} className="block text-sm mb-2 font-medium">Next action, owner, and completion check</label><textarea id={`audit-action-${check.id}`} className={control} rows={2} maxLength={1500} placeholder={check.action} value={entry.action} onChange={e=>update(check.id,{action:e.target.value})} /></div><a href={check.source} className="text-sm underline text-cyan-800 w-fit">Read the supporting guidance</a></div></details>
      </article>;
    })}</div></section>)}</div>
    <div className="mt-8 pt-6 border-t border-neutral-300"><button type="button" onClick={download} className="bg-cyan-400 hover:bg-cyan-300 border border-black px-5 py-3 font-semibold text-sm mb-5">Export completed workbook CSV</button><div>{confirmClear?<div role="alert"><p className="text-sm mb-4">Clear this workbook and its saved entries? Export a copy first if you want to keep the review.</p><div className="flex flex-wrap gap-4"><button type="button" className="border border-black px-4 py-2 text-sm" onClick={()=>{setDraft(createAuditDraft());setConfirmClear(false);}}>Clear this workbook</button><button type="button" className="underline text-sm" onClick={()=>setConfirmClear(false)}>Keep entries</button></div></div>:<button type="button" onClick={()=>setConfirmClear(true)} className="text-sm underline text-neutral-600">Start a new review</button>}</div></div>
  </section>;
}
