"use client";

import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schemas";

const sections = [
  {
    heading: "1. Scope of Services",
    body: [
      "Farrukh Abdullah Advisory provides search engine optimization, Generative Engine Optimization (GEO), semantic SEO, and local SEO consulting services. The specific scope of work — deliverables, timelines, and success criteria — is defined in a written proposal or statement of work agreed upon before the engagement begins.",
      "Services are provided remotely unless a separate agreement states otherwise.",
    ],
  },
  {
    heading: "2. Client Responsibilities",
    body: [
      "The client agrees to provide timely access to websites, analytics accounts, search console properties, and relevant business information required to perform the work. Delays in providing access may extend agreed timelines.",
    ],
  },
  {
    heading: "3. Deliverables & Approvals",
    body: [
      "Deliverables are produced in agreed phases. The client will be given a reasonable review window for each phase; if no feedback is provided, the phase is considered approved and work proceeds to the next step.",
    ],
  },
  {
    heading: "4. Fees & Payment",
    body: [
      "Fees are set in the proposal and invoiced according to the agreed payment schedule. Invoices are payable within the stated terms. Late payments may pause active work until settled. Fees cover the stated deliverables only; third-party costs (tools, advertising, directories) are billed separately unless agreed otherwise.",
    ],
  },
  {
    heading: "5. Intellectual Property",
    body: [
      "Upon full payment, the client owns the final deliverables produced specifically for their engagement. Farrukh Abdullah Advisory retains the right to reuse general frameworks, methodologies, and non-client-confidential experience in other engagements.",
    ],
  },
  {
    heading: "6. Confidentiality",
    body: [
      "Both parties agree to keep confidential any non-public business information shared during the engagement. This obligation survives the end of the engagement. Nothing in this clause prevents either party from describing the general nature of work performed, subject to the client's approval where results are referenced publicly.",
    ],
  },
  {
    heading: "7. Results Disclaimer",
    body: [
      "Search engine rankings and AI citations are influenced by many factors outside our control, including competitor activity and algorithm changes. While every engagement is executed to professional standards, we do not guarantee specific rankings, traffic volumes, or revenue outcomes. Case study figures reflect results achieved for specific clients under specific conditions.",
    ],
  },
  {
    heading: "8. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, liability under this agreement is limited to the total fees paid for the specific engagement giving rise to the claim. Neither party is liable for indirect, incidental, or consequential damages, including lost profits or lost business opportunities.",
    ],
  },
  {
    heading: "9. Termination",
    body: [
      "Either party may terminate an ongoing engagement with written notice in accordance with the notice period in the proposal. Fees for work completed up to the termination date remain payable. Recurring engagements may be ended at the end of the current billing cycle with written notice.",
    ],
  },
  {
    heading: "10. Governing Law",
    body: [
      "These terms are governed by the laws of the Islamic Republic of Pakistan, without regard to conflict-of-law provisions. Any disputes will be resolved through good-faith negotiation before any legal proceeding is initiated.",
    ],
  },
];

const lastUpdated = "August 2026";

export function TermsOfAdvisoryContent() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Terms of Advisory", url: "/terms" }
  ]);

  return (
    <div className="pt-12 pb-20 px-6 max-w-4xl mx-auto space-y-12">
      <JsonLd id="schema-breadcrumb-terms" data={breadcrumbs} />

      <div className="border-b-2 border-black pb-10">
        <span className="text-[10px] font-mono tracking-widest text-cyan-600 font-bold block uppercase mb-2">
          Engagement Terms
        </span>
        <h1 className="text-4xl md:text-5xl font-black font-sans text-black tracking-tight uppercase leading-[1.1]">
          Terms of Advisory
        </h1>
        <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mt-3 font-bold">
          Last updated: {lastUpdated}
        </p>
      </div>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-sm md:text-base font-black font-sans text-black uppercase tracking-tight border-l-4 border-cyan-600 pl-3 mb-3">
              {section.heading}
            </h2>
            <div className="space-y-3">
              {section.body.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-xs md:text-sm text-neutral-700 leading-relaxed font-sans font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="bg-neutral-50 border-2 border-black p-6 shadow-[3px_3px_0px_rgba(0,0,0,1)]">
        <p className="text-xs text-neutral-700 leading-relaxed font-sans font-medium">
          Questions about these terms? Contact{" "}
          <a href="mailto:f.abdullah79@gmail.com" className="text-cyan-600 font-bold underline underline-offset-2">
            f.abdullah79@gmail.com
          </a>{" "}
          or via{" "}
          <a
            href="https://wa.me/923346536393"
            className="text-cyan-600 font-bold underline underline-offset-2"
          >
            WhatsApp
          </a>
          .
        </p>
      </div>
    </div>
  );
}
