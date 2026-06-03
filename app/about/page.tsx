import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Inkspell - Free Cursive Text Generator Tools",
  description: "Learn about Inkspell, our free online cursive generator tools. Create elegant cursive text for social media, names, signatures, and creative projects.",
  alternates: { canonical: `${getSiteUrl()}/about` }
};

export default function AboutPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <article className="prose" style={{ maxWidth: "720px" }}>
          <h1>About Inkspell</h1>

          <h2>What We Do</h2>
          <p>
            Inkspell is a collection of free online cursive text tools. We convert plain text into elegant,
            flowing cursive writing that you can copy and paste anywhere — social media bios, profile names,
            email signatures, creative projects, and more. Our tools work instantly without downloads,
            sign-ups, or payments.
          </p>

          <h2>Our Tools</h2>
          <ul>
            <li><strong>Cursive Text Generator</strong> — Turn any phrase or sentence into cursive.</li>
            <li><strong>Cursive Font Generator</strong> — Compare multiple cursive styles side by side.</li>
            <li><strong>Cursive Signature Generator</strong> — Create elegant handwritten signature styles.</li>
            <li><strong>Cursive Name Generator</strong> — Style names, nicknames, and usernames in cursive.</li>
            <li><strong>Cursive Alphabet</strong> — Browse every cursive letter A to Z.</li>
            <li><strong>Copy and Paste Cursive</strong> — Streamlined tool optimized for speed.</li>
          </ul>

          <h2>How It Works</h2>
          <p>
            Our tools convert plain text into Unicode math script characters — special characters that look
            like cursive handwriting and display natively on iPhones, Android devices, Windows PCs, and Macs.
            No font files to download, no software to install. Just type your text, pick a style, and copy
            the result.
          </p>

          <h2>Why Free?</h2>
          <p>
            We believe simple, useful tools should be free. Inkspell is supported by advertising, which keeps
            the core text generation tools free for everyone. We do not require accounts, store your text, or
            charge for usage.
          </p>

          <h2>Contact</h2>
          <p>
            Questions, feedback, or feature ideas? Reach out through our <a href="/contact">Contact page</a>.
          </p>
        </article>
      </div>
    </main>
  );
}
