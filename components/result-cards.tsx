"use client";

import { useState } from "react";
import type { GeneratedStyle } from "@/lib/generator";
import { trackGeneratorCopy } from "@/lib/gtag";

type ResultCardsProps = {
  items: GeneratedStyle[];
  pageSlug?: string;
};

export function ResultCards({ items, pageSlug = "" }: ResultCardsProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function handleCopy(id: string, label: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      trackGeneratorCopy(pageSlug, label);
      setTimeout(() => setCopiedId(null), 1500);
    } catch {
      setCopiedId(null);
    }
  }

  return (
    <div className="results-grid">
      {items.map((item) => (
        <div key={item.id} className="result-card">
          <div className="result-card-header">
            <span className="result-style-name">{item.label}</span>
            <span className="result-char-count">{item.text.length} chars</span>
          </div>
          <div className="result-preview">{item.text}</div>
          <button
            type="button"
            className={`result-copy-btn${copiedId === item.id ? " copied" : ""}`}
            onClick={() => handleCopy(item.id, item.label, item.text)}
          >
            {copiedId === item.id ? "✓ Copied" : "Copy"}
          </button>
        </div>
      ))}
    </div>
  );
}
