"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { PageContent } from "@/content/pages";
import { GeneratorPanel } from "@/components/generator-panel";
import { ResultCards } from "@/components/result-cards";
import { generateCursiveStyles } from "@/lib/generator";

type CursiveWorkbenchProps = {
  page: PageContent;
  slug: string;
};

export function CursiveWorkbench({ page, slug }: CursiveWorkbenchProps) {
  const [value, setValue] = useState(page.samplePrompt);
  const heroParts = page.heroTitle.startsWith("Cursive ")
    ? { lead: "Cursive", tail: page.heroTitle.replace(/^Cursive\s+/, "") }
    : null;
  const results = useMemo(() => generateCursiveStyles(value), [value]);
  const resultLabel = value.trim() || page.samplePrompt;

  return (
    <>
      <section className="hero-tool">
        <div className="hero-tool-copy">
          <div className="hero-eyebrow">{page.eyebrow}</div>
          <h1 className="hero-title">
            {heroParts ? (
              <><em>{heroParts.lead}</em> {heroParts.tail}</>
            ) : (
              page.heroTitle
            )}
          </h1>
          <p className="hero-desc">{page.heroDescription}</p>
          <div className="hero-tags">
            <span className="hero-tag">Instant preview</span>
            <span className="hero-tag">One-click copy</span>
            <span className="hero-tag">Multiple styles</span>
          </div>

          {slug === "home" && (
            <div className="hero-quick-links">
              <span className="hero-quick-label">Popular tools</span>
              <div className="hero-quick-grid">
                <Link href="/cursive-text-generator" className="hero-quick-link">Cursive Text</Link>
                <Link href="/cursive-font-generator" className="hero-quick-link">Cursive Fonts</Link>
                <Link href="/cursive-signature-generator" className="hero-quick-link">Signature Generator</Link>
                <Link href="/cursive-name-generator" className="hero-quick-link">Name Generator</Link>
                <Link href="/cursive-text-generator-copy-and-paste" className="hero-quick-link">Copy &amp; Paste</Link>
                <Link href="/cursive-alphabet-generator" className="hero-quick-link">Alphabet A-Z</Link>
              </div>
            </div>
          )}
        </div>
        <div className="hero-tool-panel">
          <GeneratorPanel
            initialPrompt={page.samplePrompt}
            examples={page.examples}
            pageSlug={slug}
            value={value}
            onValueChange={setValue}
          />
        </div>
      </section>

      <section className="results-section">
        <div className="results-header">
          <h2>Cursive Styles for &ldquo;{resultLabel}&rdquo;</h2>
          <span className="results-hint">Click any style to copy</span>
        </div>
        <ResultCards items={results} pageSlug={slug} />
      </section>
    </>
  );
}
