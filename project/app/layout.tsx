import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kh-tikitour.com"),
  title: {
    default: "Tiki Tour Cambodia | Koh Rong Sanloem Boat Tours",
    template: "%s | Tiki Tour Cambodia",
  },
  description:
    "Discover Koh Rong Sanloem by sea with private skippered boat tours in Cambodia. Explore hidden coves, snorkel clear waters, and enjoy small-group island adventures.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kh-tikitour.com/",
    siteName: "Tiki Tour Cambodia",
    title: "Tiki Tour Cambodia | Koh Rong Sanloem Boat Tours",
    description:
      "Discover Koh Rong Sanloem by sea with private skippered boat tours in Cambodia. Explore hidden coves, snorkel clear waters, and enjoy small-group island adventures.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1616421310226-7453165b353e?w=1200&h=630&fit=crop&auto=format",
        width: 1200,
        height: 630,
        alt: "Tropical island coastline in Cambodia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiki Tour Cambodia | Koh Rong Sanloem Boat Tours",
    description:
      "Discover Koh Rong Sanloem by sea with private skippered boat tours in Cambodia. Explore hidden coves, snorkel clear waters, and enjoy small-group island adventures.",
    images: [
      "https://images.unsplash.com/photo-1616421310226-7453165b353e?w=1200&h=630&fit=crop&auto=format",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tiki Tour Cambodia",
    url: "https://kh-tikitour.com/",
    description:
      "Private skippered boat tours around Koh Rong Sanloem, Cambodia.",
    areaServed: {
      "@type": "Place",
      name: "Koh Rong Sanloem, Cambodia",
    },
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="bg-[#f5f0e8] text-[#1a1a2e] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
