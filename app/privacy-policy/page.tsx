import type { Metadata } from "next";
import { buildStaticMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildStaticMetadata(
  "Privacy Policy | CursiveGenerator.live",
  "Privacy policy for CursiveGenerator.live. Learn how we use cookies, analytics, and advertising on our free cursive generator tools.",
  "/privacy-policy"
);

export default function PrivacyPolicyPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <article className="prose" style={{ maxWidth: "720px" }}>
          <h1>Privacy Policy</h1>
          <p><strong>Last updated:</strong> June 2026</p>

          <h2>1. Overview</h2>
          <p>
            This privacy policy explains how CursiveGenerator.live (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) handles information
            when you visit cursivegenerator.live and use our free cursive text generator tools. We are committed
            to transparency and keeping your data safe.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            CursiveGenerator.live does <strong>not</strong> require user accounts, collect personal information such as names
            or email addresses, or store the text you generate. All cursive text conversion happens directly in
            your browser — the text you type is never sent to or stored on our servers.
          </p>

          <h2>3. Cookies and Analytics</h2>
          <p>
            We use Google Analytics, a web analytics service provided by Google LLC. Google Analytics uses
            cookies to collect anonymous usage data, including:
          </p>
          <ul>
            <li>Pages visited and time spent on each page</li>
            <li>General geographic location (country/city level)</li>
            <li>Device type, browser, and operating system</li>
            <li>How you arrived at our site (search engine, direct visit, referral)</li>
          </ul>
          <p>
            This data helps us understand how people use our tools and improve them over time. We do not track
            the actual text you type into the generator — only anonymous interaction events like when the tool
            is used or when text is copied. You can opt out of Google Analytics by using the
            <a href="https://tools.google.com/dlpage/gaoptout"> Google Analytics Opt-out Browser Add-on</a>.
          </p>

          <h2>4. Advertising</h2>
          <p>
            We plan to display advertisements through Google AdSense. Google and its partners use cookies to
            serve ads based on your prior visits to this site and other websites across the internet. You may
            opt out of personalized advertising by visiting
            <a href="https://www.google.com/settings/ads"> Google&apos;s Ads Settings</a>. For details on how
            Google uses data from partner sites, see the
            <a href="https://policies.google.com/technologies/partner-sites"> Google Privacy &amp; Terms page</a>.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            Our site links to external websites (such as social media platforms mentioned in our guides).
            We are not responsible for the privacy practices or content of those third-party sites.
          </p>

          <h2>6. Children&apos;s Privacy</h2>
          <p>
            Our tools are designed for general audiences. We do not knowingly collect personal information from
            children under 13. If you believe a child has provided personal information through our site, please
            contact us so we can remove it.
          </p>

          <h2>7. Contact</h2>
          <p>
            Questions about this privacy policy? Contact us at hello@cursivegenerator.live or visit our
            <a href="/contact"> Contact page</a>.
          </p>
        </article>
      </div>
    </main>
  );
}
