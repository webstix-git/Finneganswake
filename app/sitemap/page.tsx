import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap — Finnegan's Wake",
  description:
    "Every page on the Finnegan's Wake website — menu, promotions and events, gallery, our story, reviews and how to reach us.",
};

const SECTIONS: { heading: string; items: { label: string; href: string; blurb: string }[] }[] = [
  {
    heading: "The Pub",
    items: [
      { label: "Home", href: "/", blurb: "Springfield's oldest Irish pub — the welcome mat." },
      { label: "Our Story", href: "/about", blurb: "Anne, Clayton, twenty years on South Avenue." },
      { label: "Reviews", href: "/testimonials", blurb: "What the regulars say. Pulled from Google." },
    ],
  },
  {
    heading: "Food, Drink & Specials",
    items: [
      { label: "Menu", href: "/menu", blurb: "Apps, mains, and the standing house specials." },
      { label: "Promotions & Events", href: "/events", blurb: "Trivia, Alumni Hour, Finnsmas and more." },
      { label: "Gallery", href: "/gallery", blurb: "A look inside — the room, the regulars, the food." },
    ],
  },
  {
    heading: "Visit & Information",
    items: [
      { label: "Find Us & Contact", href: "/contact", blurb: "Address, hours, phone, and the booking form." },
      { label: "Thank You", href: "/thank-you", blurb: "Confirmation after you send us a message." },
      { label: "Privacy Policy", href: "/privacy", blurb: "How we handle your information." },
      { label: "Sitemap", href: "/sitemap", blurb: "You are here." },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero"
        style={{
          ["--page-hero-bg" as string]: "url('/images/bar-interior.png')",
          ["--page-hero-pos" as string]: "center 55%",
        }}
      >
        <span className="eyebrow center">Find Your Way</span>
        <h1>The <em>Sitemap</em></h1>
        <p>Every corner of the website, laid out plain. Skip past the front page and head wherever you need to go.</p>
      </section>

      <Breadcrumbs trail={[{ label: "Sitemap" }]} />

      <section className="featured" style={{ paddingTop: 100, paddingBottom: 120 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 64 }}>
          {SECTIONS.map((s) => (
            <div key={s.heading} className="reveal">
              <span className="eyebrow" style={{ marginBottom: 18, display: "inline-flex" }}>
                {s.heading}
              </span>
              <ul style={{ listStyle: "none", display: "grid", gap: 4 }}>
                {s.items.map((it) => (
                  <li
                    key={it.href}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "minmax(220px, 1fr) 2fr",
                      gap: 24,
                      alignItems: "baseline",
                      borderTop: "1px solid var(--rule)",
                      padding: "20px 0",
                    }}
                  >
                    <Link
                      href={it.href}
                      style={{
                        fontFamily: "var(--display)",
                        fontStyle: "italic",
                        fontSize: 30,
                        color: "var(--green)",
                        textDecoration: "none",
                      }}
                    >
                      {it.label}
                    </Link>
                    <span style={{ color: "var(--stone)", fontSize: 16, lineHeight: 1.6 }}>
                      {it.blurb}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <Reveal />
    </>
  );
}
