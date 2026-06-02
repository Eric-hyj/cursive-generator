import type { ReactNode } from "react";
import { Cormorant_Garamond, IBM_Plex_Sans, Sacramento } from "next/font/google";
import Link from "next/link";
import { SiteHeader } from "@/components/keyword-page";
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
        <div className="site-shell">
          <SiteHeader />
          {children}
          <footer className="footer">
            <div className="footer-inner">
              <p style={{ marginBottom: ".5rem" }}>
                Built as a keyword-cluster-ready tool site: one keyword, one page, with shared logic and HTML-first landing copy.
              </p>
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
