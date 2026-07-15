import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { PERSON_SCHEMA, ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Professional SEO Portfolio | Farrukh Abdullah",
  description: "Semantic SEO and Data Analytics Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen font-sans selection:bg-cyan-400 selection:text-black flex flex-col">
        {/* Sitewide / Homepage Core JSON-LD Schemas */}
        <JsonLd id="schema-person" data={PERSON_SCHEMA} />
        <JsonLd id="schema-organization" data={ORGANIZATION_SCHEMA} />
        <JsonLd id="schema-website" data={WEBSITE_SCHEMA} />

        {/* Sticky Translucent Navbar with integrated Top Banner */}
        <Navbar />

        <main className="min-h-[60vh] flex-grow pt-20">
          {children}
        </main>

        {/* Compact Corporate Footer */}
        <Footer />
      </body>
    </html>
  );
}
