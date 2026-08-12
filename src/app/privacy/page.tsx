import type { Metadata } from "next";
import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Farrukh Abdullah Advisory — how personal data is collected, used, and protected across consultations, contact forms, and site analytics.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Farrukh Abdullah",
    description:
      "How Farrukh Abdullah Advisory collects, uses, and protects personal data across consultations, contact forms, and site analytics.",
    url: "/privacy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Farrukh Abdullah",
    description:
      "How Farrukh Abdullah Advisory collects, uses, and protects personal data across consultations, contact forms, and site analytics.",
  },
};

export default function Page() {
  return <PrivacyPolicyContent />;
}
