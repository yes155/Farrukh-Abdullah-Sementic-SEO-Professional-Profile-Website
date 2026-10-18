"use client";
import { useState, type FormEvent } from "react";

export default function SEOAnalyzer({ onBookCallWithUrl }: { onBookCallWithUrl: (url: string) => void }) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  function submit(event: FormEvent) {
    event.preventDefault();
    try {
      const parsed = new URL(/^https?:\/\//i.test(url.trim()) ? url.trim() : `https://${url.trim()}`);
      if (!['https:', 'http:'].includes(parsed.protocol) || !parsed.hostname.includes('.') || parsed.username || parsed.password) throw new Error();
      setError("");
      parsed.hash = "";
      onBookCallWithUrl(parsed.href);
    } catch { setError("Enter a public website address, for example example.com."); }
  }
  return <section className="p-5 md:p-8 space-y-5">
    <h2 className="text-2xl font-black">Request a website review</h2>
    <p className="text-sm text-neutral-700 leading-relaxed">Send your website for a manual review of search visibility, content structure, and possible next steps. This form does not crawl your site or generate an instant score.</p>
    <form onSubmit={submit} className="space-y-4">
      <label htmlFor="review-website" className="block font-semibold text-sm">Website address</label>
      <input id="review-website" value={url} onChange={e => setUrl(e.target.value)} required autoComplete="url" inputMode="url" placeholder="example.com" aria-describedby={error ? "review-error" : undefined} className="w-full border-2 border-black p-3 text-base" />
      {error && <p id="review-error" role="alert" className="text-sm text-red-700">{error}</p>}
      <button className="bg-cyan-400 border-2 border-black p-3 font-bold text-sm" type="submit">Continue to review request</button>
      <p className="text-xs text-neutral-600">Your website is carried into the inquiry form. You choose whether to submit your contact details.</p>
    </form>
  </section>;
}
