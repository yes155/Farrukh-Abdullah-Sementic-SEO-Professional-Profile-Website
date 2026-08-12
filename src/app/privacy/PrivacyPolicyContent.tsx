"use client";

import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schemas";

const sections = [
  {
    heading: "1. Information We Collect",
    body: [
      "When you contact Farrukh Abdullah Advisory through the contact form, email, or WhatsApp, we collect only the information you choose to share: your name, business name, email address, and details about your project or website.",
      "We do not collect payment card details directly. Any billing is handled over email or invoicing channels you approve, and financial details are never stored on this site.",
    ],
  },
  {
    heading: "2. Analytics & Site Data",
    body: [
      "This site may use privacy-respecting analytics to understand aggregate traffic patterns, including pages visited, approximate region, device type, and referral source. This data is used to improve content and structure and is not used to identify individual visitors.",
      "Cookies are limited to functionality needed to operate the site. You can disable cookies in your browser without losing access to core content.",
    ],
  },
  {
    heading: "3. How We Use Your Information",
    body: [
      "Information you provide is used solely to respond to inquiries, prepare proposals, deliver advisory services, and maintain our professional relationship. We do not sell, rent, or share your personal data with third parties for marketing purposes.",
      "Your details may be shared with service providers only when necessary to deliver work you requested (for example, invoicing or scheduling tools), and only under contracts that require them to protect your data.",
    ],
  },
  {
    heading: "4. Data Retention",
    body: [
      "Inquiry and engagement records are retained only as long as needed to fulfill the purpose for which they were collected, fulfill legal or accounting obligations, or resolve disputes. You may request deletion at any time by contacting us.",
    ],
  },
  {
    heading: "5. Your Rights",
    body: [
      "Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data, and to withdraw consent for processing. To exercise any of these rights, contact f.abdullah79@gmail.com and we will respond within a reasonable timeframe.",
    ],
  },
  {
    heading: "6. Third-Party Links",
    body: [
      "This site links to external platforms such as LinkedIn and WhatsApp. This Privacy Policy applies only to this site; we are not responsible for the privacy practices of third-party services.",
    ],
  },
  {
    heading: "7. Updates to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. The latest version will always be available at /privacy, and material changes will be reflected by the date below.",
    ],
  },
];

const lastUpdated = "August 2026";

export function PrivacyPolicyContent() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy" }
  ]);

  return (
    <div className="pt-12 pb-20 px-6 max-w-4xl mx-auto space-y-12">
      <JsonLd id="schema-breadcrumb-privacy" data={breadcrumbs} />

      <div className="border-b-2 border-black pb-10">
        <span className="text-[10px] font-mono tracking-widest text-cyan-600 font-bold block uppercase mb-2">
          Legal & Data Protection
        </span>
        <h1 className="text-4xl md:text-5xl font-black font-sans text-black tracking-tight uppercase leading-[1.1]">
          Privacy Policy
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
          Questions about this policy? Contact{" "}
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
