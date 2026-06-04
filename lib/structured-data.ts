import type { FaqItem, PageContent } from "@/content/pages";
import { getSiteUrl } from "@/lib/site-config";

const categoryLabels: Record<string, string> = {
  font: "Fonts",
  name: "Names",
  signature: "Signatures",
  copy: "Copy & Paste",
  alphabet: "Alphabet",
  text: "Text",
  home: "Home",
};

export function buildFaqSchema(faqs: FaqItem[]) {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(page: PageContent) {
  const siteUrl = getSiteUrl();

  if (page.slug === "home") {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteUrl,
        },
      ],
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": categoryLabels[page.category] || "Tools",
        "item": `${siteUrl}/#${page.category}`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": page.h1,
        "item": `${siteUrl}${page.pathname}`,
      },
    ],
  };
}

export function buildWebApplicationSchema(page: PageContent) {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": page.h1,
    "url": `${siteUrl}${page.pathname}`,
    "description": page.description,
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires a modern browser with Unicode support",
    "isAccessibleForFree": true,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "publisher": {
      "@type": "Organization",
      "name": "CursiveGenerator.live",
      "url": siteUrl,
    },
  };
}
