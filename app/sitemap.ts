import type { MetadataRoute } from "next";
import { pages } from "@/content/pages";
import { getSiteUrl } from "@/lib/site-config";

const staticPages = [
  { path: "/privacy-policy", changeFreq: "monthly" as const, priority: 0.3 },
  { path: "/terms", changeFreq: "monthly" as const, priority: 0.3 },
  { path: "/contact", changeFreq: "monthly" as const, priority: 0.3 },
  { path: "/about", changeFreq: "monthly" as const, priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  const toolPages = Object.values(pages).map((page) => ({
    url: `${siteUrl}${page.pathname}`,
    changeFrequency: (page.slug === "home" ? "daily" : "weekly") as "daily" | "weekly",
    priority: page.pathname === "/" ? 1 : 0.8,
  }));

  const legalPages = staticPages.map((p) => ({
    url: `${siteUrl}${p.path}`,
    changeFrequency: p.changeFreq,
    priority: p.priority,
  }));

  return [...toolPages, ...legalPages];
}
