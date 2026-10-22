'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import styles from './ElectricianLanding.module.css';

export default function ElectricianInquiry() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'draft'>('idle');
  const [error, setError] = useState('');
  const [draft, setDraft] = useState('');
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (form.get('botcheck')) return;
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const website = String(form.get('website') || '').trim();
    const area = String(form.get('area') || '').trim();
    const goal = String(form.get('goal') || '').trim();
    const message = `Electrician SEO project inquiry\n\nName: ${name}\nEmail: ${email}\nWebsite: ${website}\nService area: ${area}\nMain goal: ${goal}\n\nSource: https://farrukh.top/services/seo-for-electricians`;
    setDraft(`mailto:f.abdullah79@gmail.com?subject=${encodeURIComponent('Electrician SEO project inquiry')}&body=${encodeURIComponent(message)}`);
    setError('');
    if (!accessKey) { setStatus('draft'); return; }
    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ access_key: accessKey, subject: `Electrician SEO inquiry from ${name}`, from_name: name, name, email, website_url: website, service_focus: 'Electrician SEO', message }) });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error('Delivery failed');
      setStatus('sent');
    } catch {
      setError('Your inquiry could not be delivered. You can open the prepared email below and send it directly.');
      setStatus('draft');
    }
  }
  if (status === 'sent') return <div className={styles.inquiryFeedback} role="status"><h3>Thank you. Your inquiry was sent.</h3><p>I’ll review your website and goals before discussing the appropriate scope.</p><button className={styles.textButton} onClick={() => setStatus('idle')}>Write another inquiry</button></div>;
  return <form onSubmit={submit} method="post" className={styles.inquiryForm}>
    <noscript><p>To discuss your electrician website, email <a href="mailto:f.abdullah79@gmail.com">f.abdullah79@gmail.com</a>. JavaScript is needed to prepare or send this form.</p></noscript>
    <div className={styles.formPair}><div className={styles.field}><label htmlFor="electrician-name">Your name</label><input id="electrician-name" name="name" required autoComplete="name" maxLength={120} /></div><div className={styles.field}><label htmlFor="electrician-email">Email address</label><input id="electrician-email" name="email" type="email" required autoComplete="email" maxLength={254} /></div></div>
    <div className={styles.field}><label htmlFor="electrician-website">Business website</label><input id="electrician-website" name="website" type="url" required autoComplete="url" placeholder="https://your-business.com" maxLength={400} /></div>
    <div className={styles.field}><label htmlFor="electrician-area">Your service area</label><input id="electrician-area" name="area" required placeholder="City or region your business serves" maxLength={250} /></div>
    <div className={styles.field}><label htmlFor="electrician-goal">What would you like to improve?</label><textarea id="electrician-goal" name="goal" required rows={3} maxLength={2000} placeholder="For example: more relevant EV charger installation inquiries." /></div>
    <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className={styles.honeypot} aria-hidden="true" />
    <p className={styles.small}>Your details are used to respond to this inquiry. <Link href="/privacy">Privacy policy</Link>.</p>
    <button type="submit" disabled={status === 'sending'} className={styles.primaryButton}>{status === 'sending' ? 'Sending…' : accessKey ? 'Send project inquiry' : 'Prepare email inquiry'}<span aria-hidden="true">↗</span></button>
    {!accessKey && <p className={styles.small}>Prepare a draft, then open your email app to review and send it.</p>}
    {status === 'draft' && <div className={styles.inquiryFeedback} role="status">{error ? <p>{error}</p> : <p>Your email draft is ready. Open it in your email app, review it, and send it.</p>}<a href={draft} className={styles.secondaryButton}>Open email draft <span aria-hidden="true">↗</span></a><p className={styles.small}>Prefer to write directly? Email <a href="mailto:f.abdullah79@gmail.com">f.abdullah79@gmail.com</a>.</p></div>}
  </form>;
}
