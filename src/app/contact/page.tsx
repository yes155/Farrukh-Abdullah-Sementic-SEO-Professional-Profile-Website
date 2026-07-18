import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free strategy call or site audit. Semantic SEO, GEO, and local SEO consulting — remote engagements from Faisalabad, Pakistan, serving clients globally.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Farrukh Abdullah",
    description:
      "Book a free strategy call or site audit. Semantic SEO, GEO, and local SEO consulting — remote engagements from Faisalabad, Pakistan, serving clients globally.",
    url: "/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Farrukh Abdullah",
    description: "Book a free strategy call or site audit. Semantic SEO, GEO, and local SEO consulting — remote engagements from Faisalabad, Pakistan, serving clients globally.",
  },
};

export default function Page() {
  return <ContactPageClient />;
}
