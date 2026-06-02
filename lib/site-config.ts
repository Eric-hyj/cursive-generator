const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

// Warn at build time if the site URL hasn't been configured
if (siteUrl === "https://example.com") {
  console.warn(
    "\n⚠️  WARNING: NEXT_PUBLIC_SITE_URL is not set.\n" +
    "   Canonical URLs, sitemap, and robots.txt will use 'https://example.com'.\n" +
    "   Set NEXT_PUBLIC_SITE_URL in your .env file to your real domain before deploying.\n"
  );
}

export function getSiteUrl(): string {
  return siteUrl;
}
