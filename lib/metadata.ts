import type { Metadata } from "next";
import { getPageContent } from "@/content/pages";
import { getSiteUrl } from "@/lib/site-config";

const siteName = "CursiveGenerator.live";

function withDefaultSocial(metadata: Metadata, pathname: string): Metadata {
  const siteUrl = getSiteUrl();
  const title = String(metadata.title || siteName);
  const description = String(metadata.description || "Free online cursive generator tools.");
  const url = `${siteUrl}${pathname}`;
  const image = `${siteUrl}/og-image.svg`;

  return {
    ...metadata,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "CursiveGenerator.live cursive text generator preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function buildMetadata(slug: string): Metadata {
  const page = getPageContent(slug);

  return withDefaultSocial({
    title: page.title,
    description: page.description,
  }, page.pathname);
}

export function buildStaticMetadata(title: string, description: string, pathname: string): Metadata {
  return withDefaultSocial({ title, description }, pathname);
}
