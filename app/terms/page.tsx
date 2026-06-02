import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Use | Inkspell",
  description: "Terms of use for Inkspell cursive generator. Understand the conditions for using our free online cursive text tools.",
  alternates: { canonical: `${getSiteUrl()}/terms` }
};

export default function TermsPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <article className="prose" style={{ maxWidth: "720px" }}>
          <h1>Terms of Use</h1>
          <p><strong>Last updated:</strong> June 2026</p>

          <h2>1. Accepting These Terms</h2>
          <p>
            By using Inkspell, you agree to these terms. If you do not agree, please do not use the site.
            We may update these terms from time to time, and continued use of the site after changes means
            you accept the updated terms.
          </p>

          <h2>2. Using the Tool</h2>
          <p>
            Inkspell provides free cursive text generation tools. You may use the generated text for personal and
            commercial purposes without attribution. The tool itself is provided &quot;as is&quot; without warranties
            of any kind. We strive to keep the site available and accurate but cannot guarantee uninterrupted service.
          </p>

          <h2>3. Acceptable Use</h2>
          <p>
            You agree not to misuse the site in ways that could harm, disrupt, or overburden our systems.
            Automated scraping, excessive requests, or any activity that degrades the experience for other
            users is not allowed.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            The Inkspell name, logo, and site design are our property. The cursive text you generate belongs to
            you — we claim no ownership over your output. The underlying Unicode conversion logic produces
            stylized characters from the public Unicode standard.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            Inkspell and its operators are not liable for any damages arising from your use of the site.
            This includes direct, indirect, incidental, or consequential damages.
          </p>
        </article>
      </div>
    </main>
  );
}
