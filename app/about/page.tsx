import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Inkspell - Free Cursive Text Generator",
  description: "Learn about Inkspell, our free online cursive generator. We help you create beautiful cursive text for social media, signatures, names, and creative projects.",
  alternates: { canonical: `${getSiteUrl()}/about` }
};

export default function AboutPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <article className="prose" style={{ maxWidth: "720px" }}>
          <h1>About Inkspell</h1>
          <p>
            Inkspell is a free online cursive text generator built to make stylish, flowing text accessible to
            everyone. Whether you are styling a social media bio, designing a signature, or just exploring
            beautiful letterforms, our tool gives you instant cursive text you can copy and paste anywhere.
          </p>

          <h2>How It Works</h2>
          <p>
            Our generator converts plain text into cursive using Unicode math script and script-like characters.
            These special characters look like cursive handwriting and display natively on iPhones, Android
            devices, Windows PCs, and Macs — no font downloads or installations needed. You type, we convert,
            you copy.
          </p>

          <h2>Why We Built This</h2>
          <p>
            We noticed that most cursive text tools online were cluttered, slow, or tried to sell you fonts.
            We wanted something simpler: a clean, fast generator that does one thing well and gets out of
            your way. Inkspell is the result — a tool-first site where you can generate beautiful cursive
            text in seconds and get back to creating.
          </p>

          <h2>Our Approach</h2>
          <p>
            We believe good tools should be free, fast, and focused. Inkspell does not require sign-ups,
            does not store your text, and works entirely in your browser. We support the site through
            advertising so the core tool remains free for everyone.
          </p>
        </article>
      </div>
    </main>
  );
}
