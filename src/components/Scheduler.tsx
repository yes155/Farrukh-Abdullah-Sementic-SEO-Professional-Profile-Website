"use client";

import { useId, useState, useEffect, FormEvent } from "react";
import {
  Mail,
  Link2,
  CheckCircle,
  MessageSquare,
  Phone,
  Send,
  ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SchedulerProps {
  initialUrl?: string;
}

export default function Scheduler({ initialUrl = "" }: SchedulerProps) {
  const fieldId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState(initialUrl);
  const [service, setService] = useState("Semantic SEO & Topical Authority");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Sync url state when initialUrl changes (e.g., from the audit analyzer tool)
  useEffect(() => { if (initialUrl) setUrl(initialUrl); }, [initialUrl]);

  const servicesList = [
    "Semantic SEO & Topical Authority",
    "Generative Engine Optimization (GEO)",
    "Local SEO Systems",
    "Custom Schema Engineering",
    "Other Advisory Inquiry"
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setSubmitError(
        "Form delivery isn't configured yet. Please email f.abdullah79@gmail.com directly using the link on the left."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `SEO Strategy Inquiry from ${name}`,
          from_name: name,
          name,
          email,
          website_url: url || "Not specified",
          service_focus: service,
          message: message || "Not specified",
        }),
      });

      const result = await res.json();

      if (result.success) {
        setStep("confirmed");
      } else {
        setSubmitError("Something went wrong sending your message. Please try again or email directly.");
      }
    } catch {
      setSubmitError("Couldn't reach the server. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="site-card bg-white">


      <AnimatePresence mode="wait">
        {step === "form" ? (
          <motion.div
            key="form-step"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
          >
            {/* Left Column: Direct Contacts */}
            <div className="lg:col-span-4 space-y-6 lg:border-r lg:border-neutral-200 lg:pr-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-cyan-800 uppercase font-bold block mb-1">
                  Advisory Channels
                </span>
                <h3 className="text-lg font-semibold tracking-tight">
                  Direct Contact
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Contact me by email or WhatsApp, or send your project details using the form.
                </p>
              </div>

              <div className="space-y-3">
                {/* Email Channel */}
                <a
                  href="mailto:f.abdullah79@gmail.com"
                  className="block p-4 border border-neutral-300 hover:bg-neutral-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-100 text-cyan-800 border border-black rounded-none shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono font-bold text-neutral-600 uppercase">Direct Email</span>
                      <span className="block text-[11px] font-mono font-bold text-black break-all">f.abdullah79@gmail.com</span>
                    </div>
                  </div>
                </a>

                {/* WhatsApp Channel */}
                <a
                  href="https://wa.me/923346536393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-neutral-300 hover:bg-neutral-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 text-green-600 border border-black rounded-none">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono font-bold text-neutral-600 uppercase">WhatsApp Message</span>
                      <span className="block text-[11px] font-mono font-bold text-black">+92 334 6536393</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="pt-2 border-t border-neutral-100">
                <div className="text-[10px] font-mono text-neutral-500 uppercase leading-relaxed font-bold">
                  <div>Working remotely from Faisalabad</div>
                  <div>09:00–18:00 PKT · UTC+5</div>

                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-8 space-y-4">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-cyan-800 uppercase font-bold block mb-1">
                  Advisory Intake Form
                </span>
                <h3 className="text-xl font-semibold tracking-tight">
                  Describe Your Goals
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono tracking-wider text-neutral-600 uppercase mb-1.5 font-bold" htmlFor={`${fieldId}-name`}>
                    Your Name
                  </label>
                  <input id={`${fieldId}-name`}
                    type="text"
                    required
                    placeholder="e.g., Alexander Mercer"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-neutral-50 border-2 border-black text-black px-3 py-2.5 text-base focus:bg-white focus:bg-white font-mono font-semibold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-wider text-neutral-600 uppercase mb-1.5 font-bold" htmlFor={`${fieldId}-email`}>
                    Email Address
                  </label>
                  <input id={`${fieldId}-email`}
                    type="email"
                    required
                    placeholder="e.g., alex@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-neutral-50 border-2 border-black text-black px-3 py-2.5 text-base focus:bg-white focus:bg-white font-mono font-semibold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-wider text-neutral-600 uppercase mb-1.5 font-bold" htmlFor={`${fieldId}-website`}>
                  Your Website URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-600">
                    <Link2 className="w-3.5 h-3.5" />
                  </div>
                  <input id={`${fieldId}-website`}
                    type="text"
                    placeholder="e.g., enterprise-cybersecurity.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full bg-neutral-50 border-2 border-black text-black pl-9 pr-3 py-2.5 text-base focus:bg-white focus:bg-white font-mono font-semibold transition-colors"
                  />
                </div>
              </div>

              <div>
                <p id={`${fieldId}-service`} className="text-sm font-semibold mb-2">Select focus service</p>
                <div role="group" aria-labelledby={`${fieldId}-service`} className="flex flex-wrap gap-2">
                  {servicesList.map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setService(srv)}
                      aria-pressed={service === srv}
                      className={`px-3 py-2 text-[10px] font-mono border-2 transition-all cursor-pointer font-bold uppercase ${
                        service === srv
                          ? "bg-black text-white border-black shadow-[2px_2px_0px_rgba(34,211,238,1)]"
                          : "bg-neutral-50 border-black text-neutral-700 hover:bg-neutral-100"
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-wider text-neutral-600 uppercase mb-1.5 font-bold" htmlFor={`${fieldId}-goal`}>
                  What are you trying to fix or improve?
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none text-neutral-600">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <textarea id={`${fieldId}-goal`}
                    rows={3}
                    required
                    placeholder="e.g., We recently saw a drop in rankings during Google Core Updates, and want to establish topical authority hubs and ensure citations in Perplexity or ChatGPT Search answers."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-neutral-50 border-2 border-black text-black pl-9 pr-3 py-2.5 text-base focus:bg-white focus:bg-white font-sans font-medium transition-colors resize-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                {submitError && (
                  <div className="mb-3 text-[11px] font-mono font-bold text-red-600 bg-red-50 border-2 border-red-600 p-3">
                    {submitError}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed text-black font-sans text-xs font-black uppercase tracking-wider py-3.5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Inquiry"}</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <span className="block text-[9px] text-neutral-500 font-mono text-center mt-2 uppercase font-bold">
                  This sends your message directly — no email app required
                </span>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="confirmed-step"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-6 space-y-6 max-w-xl mx-auto"
          >
            <div className="w-16 h-16 bg-cyan-50 border-2 border-cyan-500 text-cyan-800 flex items-center justify-center rounded-full mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-cyan-800 uppercase font-bold flex items-center justify-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                MESSAGE SENT
              </span>
              <h3 className="text-2xl font-semibold tracking-tight">
                Thanks, {name}!
              </h3>
              <p className="text-xs text-neutral-600 font-medium max-w-md mx-auto">
                Your message has been sent directly. I typically respond within 12 hours during business days.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setStep("form")}
                className="text-xs font-mono text-neutral-500 hover:text-black uppercase transition-colors font-bold underline"
              >
                ← Send Another Message
              </button>
              <span className="text-neutral-300 hidden sm:inline">|</span>
              <a
                href="https://wa.me/923346536393"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-mono text-green-600 hover:text-green-700 uppercase transition-colors font-bold"
              >
                <span>Or message on WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
