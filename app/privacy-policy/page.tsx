import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | Inkspell",
  description: "Privacy policy for Inkspell cursive generator. Learn how we handle data, cookies, and advertising on our site.",
  alternates: { canonical: `${getSiteUrl()}/privacy-policy` }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <article className="prose" style={{ maxWidth: "720px" }}>
          <h1>Privacy Policy</h1>
          <p><strong>Last updated:</strong> June 2026</p>

          <h2>1. Information We Collect</h2>
          <p>
            Inkspell does not require user accounts or collect personal information such as names, email addresses,
            or passwords. The cursive text you generate is processed entirely in your browser and is never sent to
            our servers.
          </p>

          <h2>2. Cookies and Analytics</h2>
          <p>
            We use Google Analytics to understand how visitors use our site. Google Analytics uses cookies to collect
            anonymous usage data such as page views, time on site, and general location. This information helps us
            improve the tool and create better content. You can opt out of Google Analytics tracking by using the
            Google Analytics Opt-out Browser Add-on.
          </p>

          <h2>3. Advertising</h2>
          <p>
            We display advertisements through Google AdSense. Google uses cookies to serve ads based on your prior
            visits to this site and other websites. You may opt out of personalized advertising by visiting
            Google&apos;s Ads Settings. For more information about how Google uses data, see the
            Google Privacy &amp; Terms page.
          </p>

          <h2>4. Third-Party Links</h2>
          <p>
            Our site may link to external websites. We are not responsible for the privacy practices or content of
            those sites.
          </p>

          <h2>5. Contact</h2>
          <p>
            If you have questions about this privacy policy, please reach out through our
            Contact page.
          </p>
        </article>
      </div>
    </main>
  );
}
