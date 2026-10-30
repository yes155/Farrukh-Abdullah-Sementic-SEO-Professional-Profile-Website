"use client";
import { PageFrame } from "@/components/PageFrame";

import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schemas";

const sections = [
  {
    heading: "1. Information We Collect",
    body: [
      "When you request a manual website review or contact Farrukh Abdullah Advisory through the inquiry form, email, or WhatsApp, we collect only the information you choose to share: your name, business name, email address, and details about your project or website.",
      "The website review entry step does not crawl your site. It carries the website address into the inquiry form; contact details are sent only when you submit that form. Form submissions use Web3Forms for delivery. We do not collect payment card details directly. Any billing is handled over email or invoicing channels you approve, and financial details are never stored on this site.",
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
      "Your details may be shared with service providers only when necessary to deliver work you requested (for example, invoicing or scheduling tools), according to the relevant provider’s processing terms.",
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

const lastUpdated = "18 October 2026";

export function PrivacyPolicyContent() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy" }
  ]);

  return (
    <PageFrame>
      <JsonLd id="schema-breadcrumb-privacy" data={breadcrumbs} />

      <div className="page-header">
        <span className="text-[10px] font-mono tracking-widest text-cyan-800 font-bold block uppercase mb-2">
          Legal & Data Protection
        </span>
        <h1 className="page-title">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mt-3 font-bold">
          Last updated: {lastUpdated}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold tracking-tight mb-3">
              {section.heading}
            </h2>
            <div className="space-y-3">
              {section.body.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base text-neutral-700 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="site-panel">
        <p className="text-xs text-neutral-700 leading-relaxed font-sans font-medium">
          Questions about this policy? Contact{" "}
          <a href="mailto:f.abdullah79@gmail.com" className="text-cyan-800 font-bold underline underline-offset-2">
            f.abdullah79@gmail.com
          </a>{" "}
          or via{" "}
          <a
            href="https://wa.me/923346536393"
            className="text-cyan-800 font-bold underline underline-offset-2"
          >
            WhatsApp
          </a>
          .
        </p>
      </div>
    </PageFrame>
  );
}
