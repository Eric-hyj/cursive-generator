import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us | Inkspell",
  description: "Contact the Inkspell team with questions, feedback, or inquiries about our free cursive text generator tools.",
  alternates: { canonical: `${getSiteUrl()}/contact` }
};

export default function ContactPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <article className="prose" style={{ maxWidth: "720px" }}>
          <h1>Contact Us</h1>
          <p>
            Have feedback, a question, or a feature request? We would love to hear from you.
          </p>

          <h2>Email</h2>
          <p>
            Reach us at <strong>hello@inkspell.site</strong>. We aim to respond within 1&ndash;2 business days.
          </p>

          <h2>What to Contact Us About</h2>
          <ul>
            <li>Bug reports or issues with the cursive generator tool</li>
            <li>Suggestions for new cursive styles or features</li>
            <li>Questions about using cursive text on specific platforms</li>
            <li>Advertising and partnership inquiries</li>
            <li>Privacy or data concerns</li>
          </ul>

          <h2>Response Time</h2>
          <p>
            We typically reply within 48 hours on business days. If you do not hear back within that window,
            please check your spam folder or send a follow-up.
          </p>
        </article>
      </div>
    </main>
  );
}
