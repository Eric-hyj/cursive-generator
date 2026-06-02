import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { KeywordPage } from "@/components/keyword-page";
import { pages } from "@/content/pages";

export function generateStaticParams() {
  return Object.values(pages)
    .filter((p) => p.slug !== "home")
    .map((p) => ({ slug: [p.slug] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const pageSlug = slug[0];
  if (!pages[pageSlug]) return {};
  return buildMetadata(pageSlug);
}

export default async function KeywordSlugPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const pageSlug = slug[0];

  if (!pages[pageSlug]) notFound();

  return <KeywordPage slug={pageSlug} />;
}
