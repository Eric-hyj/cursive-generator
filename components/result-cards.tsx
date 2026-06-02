"use client";

import { useState } from "react";
import type { GeneratedStyle } from "@/lib/generator";

export function ResultCards({ items }: { items: GeneratedStyle[] }) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  async function handleCopy(id: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
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
            onClick={() => handleCopy(item.id, item.text)}
          >
            {copiedId === item.id ? "✓ Copied" : "Copy"}
          </button>
        </div>
      ))}
    </div>
  );
}
