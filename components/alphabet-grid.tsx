"use client";

import { useState } from "react";
import { buildAlphabetRows, generateCursiveStyles } from "@/lib/generator";
import { trackAlphabetCopy } from "@/lib/gtag";

const styleLabels = [
  { key: "classic" as const, label: "Classic Script" },
  { key: "formal" as const, label: "Formal Hand" },
  { key: "airy" as const, label: "Airy Cursive" },
  { key: "studio" as const, label: "Studio Line" },
];

export function AlphabetGrid() {
  const rows = buildAlphabetRows();
  const [copiedLetter, setCopiedLetter] = useState<string | null>(null);

  async function handleCopy(letter: string, styleName: string) {
    try {
      await navigator.clipboard.writeText(letter);
      setCopiedLetter(letter);
      trackAlphabetCopy(styleName);
      setTimeout(() => setCopiedLetter(null), 1200);
    } catch {
      setCopiedLetter(null);
    }
  }

  const exampleWords = generateCursiveStyles("Beautiful");

  return (
    <section className="alphabet-section">
      {/* ── Uppercase Grid ── */}
      <div className="alphabet-block">
        <h2 className="alphabet-block-title">Uppercase Cursive Letters (A–Z)</h2>
        <p className="alphabet-block-desc">
          Click any letter to copy it. Browse all four cursive styles for each uppercase letter.
        </p>
        <div className="alphabet-grid">
          {rows.map((row) => (
            <div key={row.upper} className="alphabet-card">
              <span className="alphabet-latin">{row.upper}</span>
              {styleLabels.map((style) => (
                <button
                  key={style.key}
                  type="button"
                  className={`alphabet-styled-btn${copiedLetter === row[`${style.key}Upper`] ? " copied" : ""}`}
                  onClick={() => handleCopy(row[`${style.key}Upper`], style.label)}
                  title={`Copy ${style.label} "${row.upper}"`}
                >
                  {row[`${style.key}Upper`]}
                </button>
              ))}
              <span className="alphabet-example-word">{row.exampleWord}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lowercase Grid ── */}
      <div className="alphabet-block">
        <h2 className="alphabet-block-title">Lowercase Cursive Letters (a–z)</h2>
        <p className="alphabet-block-desc">
          Compare how lowercase letters flow in each cursive style. Click to copy any single letter.
        </p>
        <div className="alphabet-grid">
          {rows.map((row) => (
            <div key={row.lower} className="alphabet-card">
              <span className="alphabet-latin">{row.lower}</span>
              {styleLabels.map((style) => (
                <button
                  key={style.key}
                  type="button"
                  className={`alphabet-styled-btn${copiedLetter === row[`${style.key}Lower`] ? " copied" : ""}`}
                  onClick={() => handleCopy(row[`${style.key}Lower`], style.label)}
                  title={`Copy ${style.label} "${row.lower}"`}
                >
                  {row[`${style.key}Lower`]}
                </button>
              ))}
              <span className="alphabet-example-word">{row.exampleWord}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Example Words ── */}
      <div className="alphabet-block">
        <h2 className="alphabet-block-title">Example Words in Cursive</h2>
        <p className="alphabet-block-desc">
          See how full words look when all letters flow together in each cursive style.
        </p>
        <div className="alphabet-example-grid">
          {exampleWords.map((word) => (
            <div key={word.id} className="alphabet-example-card">
              <span className="alphabet-example-label">{word.label}</span>
              <span className="alphabet-example-text">{word.text}</span>
              <button
                type="button"
                className={`result-copy-btn${copiedLetter === word.text ? " copied" : ""}`}
                onClick={() => handleCopy(word.text, word.label)}
              >
                {copiedLetter === word.text ? "✓ Copied" : "Copy"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
