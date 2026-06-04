import type { Metadata } from "next";
import { buildStaticMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildStaticMetadata(
  "Contact CursiveGenerator.live - Cursive Tool Support",
  "Contact CursiveGenerator.live with questions, feedback, bug reports, or advertising inquiries about our free cursive text tools.",
  "/contact"
);

export default function ContactPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <article className="prose" style={{ maxWidth: "720px" }}>
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you. Whether you found a bug, have a feature suggestion, or want to
            discuss advertising or partnership opportunities, here is how to reach us.
          </p>

          <h2>Email</h2>
          <p>
            The best way to reach us: <strong>hello@cursivegenerator.live</strong>
          </p>
          <p>
            We aim to respond within 1–2 business days. If you do not hear back within 48 hours, please
            check your spam folder or send a follow-up message.
          </p>

          <h2>Common Topics</h2>
          <ul>
            <li><strong>Bug reports</strong> — If something is not working as expected, let us know what browser and device you are using.</li>
            <li><strong>Feature requests</strong> — Have an idea for a new cursive style or a new tool? We are always listening.</li>
            <li><strong>Platform questions</strong> — Need help using cursive text on Instagram, TikTok, Discord, or another platform?</li>
            <li><strong>Advertising</strong> — Interested in advertising on CursiveGenerator.live? Reach out for rate and placement details.</li>
            <li><strong>Privacy concerns</strong> — Questions about how we handle data? See our Privacy Policy or contact us directly.</li>
          </ul>
        </article>
      </div>
    </main>
  );
}
