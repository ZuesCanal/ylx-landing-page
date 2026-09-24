import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.phylx.ai"),
  title: "Refrnce Trace — Context Before Action",
  description:
    "Refrnce Trace links on-chain events, entities, accounts, and assets to source evidence for institutional digital-asset decisions.",
  icons: { icon: "/favicon.png" },
  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    url: "https://www.phylx.ai/",
    siteName: "Refrnce",
    title: "Refrnce Trace — Context Before Action",
    description:
      "Establish what happened on-chain, how it connects, and what source evidence supports the decision.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refrnce Trace — Context Before Action",
    description:
      "Source-linked evidence and investigation context for institutional digital-asset decisions.",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Refrnce",
    url: "https://www.phylx.ai/",
    logo: "https://www.phylx.ai/refrnce-logo.png",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Refrnce",
    url: "https://www.phylx.ai/",
  },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-canvas font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
