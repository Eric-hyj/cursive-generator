"use client";

import { useMemo, useState } from "react";
import { generateCursiveStyles } from "@/lib/generator";

type GeneratorPanelProps = {
  initialPrompt: string;
  examples: string[];
  showAsResults?: boolean;
};

export function GeneratorPanel({ initialPrompt, examples, showAsResults }: GeneratorPanelProps) {
  const [value, setValue] = useState(initialPrompt);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const results = useMemo(() => generateCursiveStyles(value), [value]);

  async function handleCopy(id: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch {
      setCopiedId(null);
    }
  }

  if (showAsResults) {
    return (
      <div className="results-grid">
        {results.map((result) => (
          <div key={result.id} className="result-card">
            <div className="result-card-header">
              <span className="result-style-name">{result.label}</span>
              <span className="result-char-count">{result.text.length} chars</span>
            </div>
            <div className="result-preview">{result.text}</div>
            <button
              type="button"
              className={`result-copy-btn${copiedId === result.id ? " copied" : ""}`}
              onClick={() => handleCopy(result.id, result.text)}
            >
              {copiedId === result.id ? "✓ Copied" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="generator-form">
      <label className="gen-label" htmlFor="cursive-input">
        Type or paste your text
      </label>
      <textarea
        id="cursive-input"
        className="gen-textarea"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write something elegant..."
        aria-label="Input text to convert to cursive"
      />

      <div className="gen-chips">
        {examples.map((example) => (
          <button
            key={example}
            type="button"
            className="gen-chip"
            onClick={() => setValue(example)}
          >
            {example}
          </button>
        ))}
      </div>

      <div className="gen-actions-row">
        <button type="button" className="gen-clear" onClick={() => setValue(initialPrompt)}>
          Reset
        </button>
        <span style={{fontSize:".8rem",color:"var(--ink-muted)"}}>
          {value.length} chars
        </span>
      </div>

      <div className="results-grid" style={{padding:0, gridTemplateColumns:"1fr"}}>
        {results.map((result) => (
          <div key={result.id} className="result-card">
            <div className="result-card-header">
              <span className="result-style-name">{result.label}</span>
              <span className="result-char-count">{result.text.length} chars</span>
            </div>
            <div className="result-preview">{result.text}</div>
            <button
              type="button"
              className={`result-copy-btn${copiedId === result.id ? " copied" : ""}`}
              onClick={() => handleCopy(result.id, result.text)}
            >
              {copiedId === result.id ? "✓ Copied" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
