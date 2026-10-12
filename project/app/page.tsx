import type { Metadata } from "next";
import HomePageContent from "@/components/HomePageContent";

export const metadata: Metadata = {
  title: "Koh Rong Sanloem Boat Tours | Tiki Tour Cambodia",
  description:
    "Explore Koh Rong Sanloem with private skippered boat tours. Discover hidden coves, snorkel clear waters, and enjoy small-group island adventures from Saracen Bay.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Koh Rong Sanloem Boat Tours | Tiki Tour Cambodia",
    description:
      "Explore Koh Rong Sanloem with private skippered boat tours. Discover hidden coves, snorkel clear waters, and enjoy small-group island adventures from Saracen Bay.",
    url: "/",
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
    title: "Koh Rong Sanloem Boat Tours | Tiki Tour Cambodia",
    description:
      "Explore Koh Rong Sanloem with private skippered boat tours. Discover hidden coves, snorkel clear waters, and enjoy small-group island adventures from Saracen Bay.",
    images: [
      "https://images.unsplash.com/photo-1616421310226-7453165b353e?w=1200&h=630&fit=crop&auto=format",
    ],
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
