import type { MetadataRoute } from "next";

// Single-page site: section anchors (#about, #projects...) are not separate
// URLs, so the sitemap lists only the canonical home page.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://luizsoc.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
