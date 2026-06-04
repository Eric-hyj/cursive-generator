"use client";

import { useMemo, useRef, useState } from "react";
import { generateCursiveStyles } from "@/lib/generator";
import { trackGeneratorInput, trackGeneratorCopy, trackExampleClick } from "@/lib/gtag";

type GeneratorPanelProps = {
  initialPrompt: string;
  examples: string[];
  showAsResults?: boolean;
  pageSlug?: string;
  value?: string;
  onValueChange?: (value: string) => void;
};

export function GeneratorPanel({
  initialPrompt,
  examples,
  showAsResults,
  pageSlug = "",
  value: controlledValue,
  onValueChange,
}: GeneratorPanelProps) {
  const [internalValue, setInternalValue] = useState(initialPrompt);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const inputTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const value = controlledValue ?? internalValue;
  const results = useMemo(() => generateCursiveStyles(value), [value]);

  function updateValue(text: string) {
    if (onValueChange) {
      onValueChange(text);
      return;
    }
    setInternalValue(text);
  }

  function handleInput(text: string) {
    updateValue(text);
    // Debounce input tracking to avoid flooding GA
    if (inputTimer.current) clearTimeout(inputTimer.current);
    inputTimer.current = setTimeout(() => {
      if (text.trim()) trackGeneratorInput(pageSlug, text.length);
    }, 800);
  }

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

  function handleExampleClick(example: string) {
    updateValue(example);
    trackExampleClick(pageSlug, example);
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
              onClick={() => handleCopy(result.id, result.label, result.text)}
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
        onChange={(e) => handleInput(e.target.value)}
        placeholder="Write something elegant..."
        aria-label="Input text to convert to cursive"
      />

      <div className="gen-chips">
        {examples.map((example) => (
          <button
            key={example}
            type="button"
            className="gen-chip"
            onClick={() => handleExampleClick(example)}
          >
            {example}
          </button>
        ))}
      </div>

      <div className="gen-actions-row">
        <button type="button" className="gen-clear" onClick={() => updateValue(initialPrompt)}>
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
              onClick={() => handleCopy(result.id, result.label, result.text)}
            >
              {copiedId === result.id ? "✓ Copied" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
