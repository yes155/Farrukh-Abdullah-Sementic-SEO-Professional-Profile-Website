'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Copy, Check } from 'lucide-react';
import { createProjectBrief, PLANNER_GOALS, type PlannerGoal, type BusinessModel } from '@/lib/projectPlanner';
export default function ProjectPlanner() {
  const [goal, setGoal] = useState<PlannerGoal>('content');
  const [model, setModel] = useState<BusinessModel>('local-service');
  const [website, setWebsite] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const brief = createProjectBrief(goal, model, website);
  async function copyBrief() {
    try { await navigator.clipboard.writeText(brief.text); setCopyStatus('Brief copied. You can paste it into an email or inquiry.'); }
    catch { setCopyStatus('Copy is unavailable in this browser. Select and copy the brief below.'); }
  }
  return <section className="border border-black grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]" aria-label="Build your SEO project brief">
    <div className="p-6 md:p-8 space-y-5 bg-neutral-50 border-b lg:border-b-0 lg:border-r border-neutral-200">
      <h2 className="text-xl font-semibold">Your starting point</h2>
      <div><label htmlFor="planner-website" className="block text-sm font-semibold mb-2">Website <span className="font-normal text-neutral-500">(optional)</span></label><input id="planner-website" type="text" inputMode="url" autoComplete="url" maxLength={300} value={website} onChange={event => { setWebsite(event.target.value); setCopyStatus(''); }} placeholder="example.com" className="w-full bg-white border border-neutral-400 px-3 py-3 text-base" /></div>
      <div><label htmlFor="planner-business" className="block text-sm font-semibold mb-2">Business type</label><select id="planner-business" value={model} onChange={event => { setModel(event.target.value as BusinessModel); setCopyStatus(''); }} className="w-full bg-white border border-neutral-400 px-3 py-3 text-base"><option value="local-service">Local service business</option><option value="online-business">Online business or SaaS</option><option value="catalog">Product catalog or online store</option></select></div>
      <div><label htmlFor="planner-goal" className="block text-sm font-semibold mb-2">Main goal</label><select id="planner-goal" value={goal} onChange={event => { setGoal(event.target.value as PlannerGoal); setCopyStatus(''); }} className="w-full bg-white border border-neutral-400 px-3 py-3 text-base">{Object.entries(PLANNER_GOALS).map(([value, item]) => <option key={value} value={value}>{item.label}</option>)}</select></div>
      <p className="text-sm leading-relaxed text-neutral-500">The brief updates from your choices. This tool does not visit or audit your website. Your entries stay in this browser until you choose to copy or share them.</p>
    </div>
    <div className="p-6 md:p-8 space-y-5 min-w-0">
      <div className="flex flex-wrap gap-3 justify-between items-start"><div><p className="text-xs font-mono uppercase tracking-wider text-cyan-800 mb-2">Suggested starting point</p><h2 className="text-xl md:text-2xl font-bold">{brief.service}</h2></div><button type="button" onClick={copyBrief} className="inline-flex gap-2 items-center border border-black px-3 py-2 text-sm font-semibold hover:bg-neutral-50"><Copy size={15} aria-hidden="true" />Copy brief</button></div>
      <ol className="space-y-4">{brief.priorities.map((item, index) => <li key={item} className="flex gap-3 text-base leading-relaxed text-neutral-700"><span className="text-cyan-800 font-mono shrink-0">0{index + 1}</span><span>{item}</span></li>)}</ol>
      <p className="text-sm leading-relaxed text-neutral-600 border-t border-neutral-200 pt-5">{brief.context}</p>
      <p className="text-sm leading-relaxed text-neutral-500">{brief.fitNote}</p>
      <Link href={brief.path} className="inline-flex gap-2 items-center text-sm font-semibold text-cyan-800 underline underline-offset-4">See the service and deliverables<ArrowRight size={15} aria-hidden="true" /></Link>
      <p role="status" className="text-sm text-cyan-900">{copyStatus}</p>
      {copyStatus.startsWith('Copy is unavailable') && <textarea aria-label="Project brief to copy" readOnly value={brief.text} rows={12} className="w-full border p-3 text-sm" />}
    </div>
  </section>;
}
