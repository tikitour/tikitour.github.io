import type { MetadataRoute } from "next";
import { TOURS } from "@/lib/data";

export const dynamic = "force-static";

const siteUrl = "https://kh-tikitour.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...TOURS.map((tour) => ({
      url: `${siteUrl}/tours/${tour.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
