"use client";

import Link from "next/link";
import { trackRelatedLinkClick } from "@/lib/gtag";

type RelatedLinkCardProps = {
  href: string;
  label: string;
  description: string;
  pageSlug: string;
};

export function RelatedLinkCard({ href, label, description, pageSlug }: RelatedLinkCardProps) {
  return (
    <Link
      href={href}
      className="related-link-card"
      onClick={() => trackRelatedLinkClick(pageSlug, href)}
    >
      <strong>{label}</strong>
      <p>{description}</p>
    </Link>
  );
}
