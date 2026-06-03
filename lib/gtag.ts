// GA event tracking helper — safe to call even when GA is not loaded
type GtagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
};

export function trackEvent(event: GtagEvent) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", event.action, {
      event_category: event.category || "tool",
      event_label: event.label || "",
      value: event.value,
      ...event,
    });
  }
}

export function trackGeneratorInput(slug: string, inputLength: number) {
  trackEvent({
    action: "generator_input",
    page_slug: slug,
    input_length: inputLength,
  });
}

export function trackGeneratorCopy(slug: string, styleName: string) {
  trackEvent({
    action: "generator_copy",
    page_slug: slug,
    style_name: styleName,
  });
}

export function trackExampleClick(slug: string, exampleText: string) {
  trackEvent({
    action: "example_click",
    page_slug: slug,
    example_text: exampleText,
  });
}

export function trackAlphabetCopy(styleName: string) {
  trackEvent({
    action: "alphabet_copy",
    style_name: styleName,
  });
}

export function trackRelatedLinkClick(slug: string, targetUrl: string) {
  trackEvent({
    action: "related_link_click",
    page_slug: slug,
    target_url: targetUrl,
  });
}
