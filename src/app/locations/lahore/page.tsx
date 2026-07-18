import type { Metadata } from "next";
import LahorePageClient from "./LahorePageClient";

export const metadata: Metadata = {
  title: "Local SEO Services in Lahore",
  description:
    "Local SEO support for Lahore-based businesses — local search visibility, Google Business Profile setup, and localized content strategy, alongside global semantic SEO and GEO consulting.",
  alternates: {
    canonical: "/locations/lahore",
  },
  openGraph: {
    title: "Local SEO Services in Lahore | Farrukh Abdullah",
    description:
      "Local SEO support for Lahore-based businesses — local search visibility, Google Business Profile setup, and localized content strategy, alongside global semantic SEO and GEO consulting.",
    url: "/locations/lahore",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Services in Lahore | Farrukh Abdullah",
    description: "Local SEO support for Lahore-based businesses — local search visibility, Google Business Profile setup, and localized content strategy, alongside global semantic SEO and GEO consulting.",
  },
};

export default function Page() {
  return <LahorePageClient />;
}
