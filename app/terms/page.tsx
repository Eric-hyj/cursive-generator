import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Use | Inkspell - Cursive Text Generator",
  description: "Terms of use for Inkspell cursive text tools. Understand usage conditions, intellectual property, and limitations for our free online tools.",
  alternates: { canonical: `${getSiteUrl()}/terms` }
};

export default function TermsPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <article className="prose" style={{ maxWidth: "720px" }}>
          <h1>Terms of Use</h1>
          <p><strong>Last updated:</strong> June 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Inkspell (cursivegenerator.live), you accept these Terms of Use. If you do
            not agree with any part of these terms, please do not use our site. We may update these terms from
            time to time, and your continued use of the site constitutes acceptance of any changes.
          </p>

          <h2>2. Using Our Tools</h2>
          <p>
            Inkspell provides free online cursive text generation tools. You may use the generated cursive text
            for any personal or commercial purpose without restriction or attribution. Our tools are provided
            &quot;as is&quot; without warranties of any kind, express or implied. We do not guarantee uninterrupted
            availability, but we strive to keep the site accessible and functioning properly.
          </p>

          <h2>3. Acceptable Use</h2>
          <p>
            You agree to use Inkspell responsibly. Prohibited activities include:
          </p>
          <ul>
            <li>Automated scraping, crawling, or excessive automated requests that degrade service for others</li>
            <li>Attempting to disrupt, overload, or compromise the site&apos;s functionality or security</li>
            <li>Using the site to generate or distribute spam, malware, or harmful content</li>
            <li>Any activity that violates applicable laws or regulations</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            The Inkspell name, logo, website design, and original content are our intellectual property.
            The cursive text you generate using our tools <strong>belongs to you</strong> — we claim no
            ownership over any output you create. The underlying Unicode characters used in our conversion
            process are part of the public Unicode Standard.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Inkspell and its operators shall not be liable for any
            direct, indirect, incidental, consequential, or special damages arising from your use of or
            inability to use the site or its tools. This includes but is not limited to damages for loss of
            data, business interruption, or device issues.
          </p>

          <h2>6. External Links</h2>
          <p>
            Our site contains links to third-party websites and services. We are not responsible for the content,
            policies, or practices of any external sites you visit through links on Inkspell.
          </p>

          <h2>7. Contact</h2>
          <p>
            Questions about these terms? Contact us at hello@cursivegenerator.live or visit our
            <a href="/contact"> Contact page</a>.
          </p>
        </article>
      </div>
    </main>
  );
}
