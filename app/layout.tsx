import type { ReactNode } from "react";
import { Cormorant_Garamond, IBM_Plex_Sans, Sacramento } from "next/font/google";
import Link from "next/link";
import { SiteHeader } from "@/components/keyword-page";
import { GoogleAnalytics } from "@/components/google-analytics";
import { pages } from "@/content/pages";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"]
});

const scriptFont = Sacramento({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400"
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} ${scriptFont.variable}`}>
        <GoogleAnalytics />
        <div className="site-shell">
          <SiteHeader />
          {children}
          <footer className="footer">
            <div className="footer-inner">
              <p style={{ marginBottom: ".5rem" }}>
                Free cursive tools for names, signatures, social bios, and copy-ready text styles.
              </p>
              <nav className="footer-tool-links" aria-label="Cursive tool navigation">
                {Object.values(pages).map((page) => (
                  <Link key={page.slug} href={page.pathname}>
                    {page.h1}
                  </Link>
                ))}
              </nav>
              <nav className="footer-links" aria-label="Footer navigation">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/terms">Terms of Use</Link>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
