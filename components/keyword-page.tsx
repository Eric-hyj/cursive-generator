import Link from "next/link";
import { pages, type PageContent } from "@/content/pages";
import { AdSlot } from "@/components/ad-slot";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CursiveWorkbench } from "@/components/cursive-workbench";
import { AlphabetGrid } from "@/components/alphabet-grid";
import { buildFaqSchema, buildBreadcrumbSchema, buildWebApplicationSchema } from "@/lib/structured-data";
import { RelatedLinkCard } from "@/components/related-link-card";

const categoryLabels: Record<string, string> = {
  font: "Fonts", name: "Names", signature: "Signatures",
  copy: "Copy & Paste", alphabet: "Alphabet", text: "Text",
};

function buildBreadcrumbs(page: PageContent) {
  if (page.pathname === "/") {
    return [{ label: "Home" }];
  }
  return [
    { label: "Home", href: "/" },
    { label: categoryLabels[page.category] || "Tools" },
    { label: page.h1 }
  ];
}

export function KeywordPage({ slug }: { slug: string }) {
  const page = pages[slug];

  return (
    <main className="page">
      <div className="page-inner">
        <Breadcrumbs items={buildBreadcrumbs(page)} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(page)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(page.faqs)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebApplicationSchema(page)) }}
        />

        <CursiveWorkbench page={page} slug={slug} />

        {/* ═══ 字母表专属：A-Z 字母展示 ═══ */}
        {slug === "cursive-alphabet-generator" && <AlphabetGrid />}

        {/* ═══ 落地页内容区 ═══ */}
        <section className="landing-section">
          <div className="landing-card">
            <h2>{page.infoSections[0]?.title || "How to use this tool"}</h2>
            <div className="prose">
              <p>{page.infoSections[0]?.body || page.intro}</p>
            </div>
          </div>
          <div className="landing-card">
            <h2>{page.infoSections[1]?.title || "Where to use it"}</h2>
            <div className="prose">
              <p>{page.infoSections[1]?.body || page.heroDescription}</p>
              <ul>
                {page.useCases.map((uc) => (
                  <li key={uc}>{uc}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <AdSlot note="After content, before FAQ" />

        {/* ═══ 更多信息区 ═══ */}
        {page.infoSections.length > 2 && (
          <section className="info-section">
            <div className="info-grid">
              {page.infoSections.slice(2).map((section) => (
                <div key={section.title} className="info-card">
                  <h3>{section.title}</h3>
                  <div className="prose"><p>{section.body}</p></div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ═══ FAQ ═══ */}
        <section className="faq-section">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid">
            {page.faqs.map((faq) => (
              <article key={faq.question} className="faq-item">
                <strong>{faq.question}</strong>
                <div className="prose"><p>{faq.answer}</p></div>
              </article>
            ))}
          </div>
        </section>

        <AdSlot note="After FAQ, before related links" />

        {/* ═══ 内链推荐 ═══ */}
        <section className="related-section">
          <div className="related-header">
            <h2>Related Pages</h2>
          </div>
          <div className="related-grid">
            {page.related.map((item) => {
              const href = item.slug === "home" ? "/" : pages[item.slug]?.pathname;
              return (
                <RelatedLinkCard
                  key={item.label}
                  href={href}
                  label={item.label}
                  description={item.description}
                  pageSlug={slug}
                />
              );
            })}
          </div>
        </section>

        <AdSlot note="Bottom of page" />
      </div>
    </main>
  );
}

export function SiteHeader() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/cursive-text-generator", label: "Cursive Text" },
    { href: "/text-to-cursive-generator", label: "Text to Cursive" },
    { href: "/cursive-font-generator", label: "Cursive Fonts" },
    { href: "/cursive-signature-generator", label: "Signatures" },
    { href: "/cursive-name-generator", label: "Names" },
    { href: "/cursive-alphabet-generator", label: "Alphabet" },
    { href: "/cursive-text-generator-copy-and-paste", label: "Copy & Paste" },
  ];

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="brand">
          <Link href="/" className="brand-mark">CursiveGenerator.live</Link>
          <div className="brand-copy">cursive tools for names, text & signatures</div>
        </div>
        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
