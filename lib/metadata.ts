import type { Metadata } from "next";
import { getPageContent } from "@/content/pages";
import { getSiteUrl } from "@/lib/site-config";

export function buildMetadata(slug: string): Metadata {
  const page = getPageContent(slug);

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `${getSiteUrl()}${page.pathname}`
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${getSiteUrl()}${page.pathname}`,
      siteName: "Inkspell",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description
    }
  };
}
