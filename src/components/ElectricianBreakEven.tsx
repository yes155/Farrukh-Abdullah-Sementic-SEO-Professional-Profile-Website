'use client';

import { useState } from 'react';
import { calculateElectricianBreakEven } from '@/lib/electricianBreakEven';
import styles from './ElectricianLanding.module.css';

const money = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);
const fields = [
  { key: 'campaign', label: 'Total campaign cost', hint: 'Include consulting, content, development, and tracking.' },
  { key: 'revenue', label: 'Collected revenue per job', hint: 'Use a representative completed and paid job.' },
  { key: 'directCost', label: 'Direct delivery cost per job', hint: 'Include labor, materials, and other direct job costs.' },
] as const;

export default function ElectricianBreakEven() {
  const [values, setValues] = useState({ campaign: '1500', revenue: '1000', directCost: '600' });
  const complete = fields.every(({ key }) => values[key].trim() !== '');
  const result = complete ? calculateElectricianBreakEven(Number(values.campaign), Number(values.revenue), Number(values.directCost)) : { valid: false as const, message: 'Enter all three amounts to calculate the jobs needed.' };
  return <><noscript><p className={styles.small}>Enable JavaScript to update this calculator. The displayed result uses the sample amounts below.</p></noscript><div className={styles.calculator}>
    <div className={styles.calculatorInputs}>
      <p className={styles.eyebrow}>Your inputs · USD</p>
      <p id="electrician-calculator-help" className={styles.small}>Use costs and job contribution from the same comparison period. Change the sample amounts to your own figures.</p>
      {fields.map(({ key, label, hint }) => <div key={key} className={styles.field}>
        <label htmlFor={`electrician-${key}`}>{label}</label>
        <div className={styles.moneyField}><span aria-hidden="true">$</span><input id={`electrician-${key}`} type="number" inputMode="decimal" min="0" max="100000000" step="0.01" value={values[key]} aria-describedby={`electrician-${key}-hint electrician-calculator-help`} onChange={event => setValues({ ...values, [key]: event.target.value })} /></div>
        <p id={`electrician-${key}-hint`} className={styles.small}>{hint}</p>
      </div>)}
      <button type="button" className={styles.textButton} onClick={() => setValues({ campaign: '1500', revenue: '1000', directCost: '600' })}>Reset sample amounts</button>
    </div>
    <div className={styles.calculatorResult} role="status" aria-live="polite" aria-atomic="true">
      <p className={styles.eyebrow}>Break-even estimate</p>
      {result.valid ? <>
        <p className={styles.resultNumber}><output data-testid="break-even-jobs">{result.jobs.toLocaleString('en-US')}</output><span>additional paid {result.jobs === 1 ? 'job' : 'jobs'}</span></p>
        <p>to cover the campaign cost with contribution from completed work.</p>
        <dl className={styles.resultDetails}><div><dt>Contribution per job</dt><dd data-testid="job-contribution">{money(result.contribution)}</dd></div><div><dt>Contribution left after campaign cost</dt><dd>{money(result.remaining)}</dd></div></dl>
        <p className={styles.small}>Before fixed overhead and tax. Whole jobs round up.</p>
      </> : <p className={styles.resultError}>{result.message}</p>}
      <p className={styles.resultFormula}>Jobs needed = campaign cost ÷ (collected revenue − direct job cost), rounded up.</p>
    </div>
  </div></>;
}
