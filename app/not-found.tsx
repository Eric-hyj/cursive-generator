import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page">
      <div className="page-inner">
        <section className="not-found-card">
          <div className="hero-eyebrow">404 · Page not found</div>
          <h1>That cursive page slipped off the line.</h1>
          <p>
            The page you opened does not exist, but the generator is still ready. Start from the homepage
            or jump into one of the most popular cursive tools below.
          </p>
          <div className="not-found-actions">
            <Link href="/" className="result-copy-btn">Go Home</Link>
            <Link href="/cursive-text-generator" className="hero-quick-link">Cursive Text Generator</Link>
            <Link href="/cursive-name-generator" className="hero-quick-link">Cursive Name Generator</Link>
            <Link href="/cursive-alphabet-generator" className="hero-quick-link">Cursive Alphabet</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
