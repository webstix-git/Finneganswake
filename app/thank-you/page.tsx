import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — Finnegan's Wake",
  description:
    "Thank you for reaching out to Finnegan's Wake Irish Pub. We'll be in touch soon.",
};

export default function ThankYouPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero"
        style={
          {
            "--page-hero-bg": "url('/images/hero-exterior.png')",
            "--page-hero-pos": "center 65%",
          } as React.CSSProperties
        }
      >
        <span className="eyebrow center">Message Received</span>
        <h1>Thank <em>You</em>.</h1>
        <p>We&apos;ve got your message and will be in touch shortly.</p>
      </section>

      <Breadcrumbs trail={[{ label: "Thank You" }]} />

      <section className="thank-you-content">
        <div className="thank-you-inner">
          <div className="thank-you-card reveal">
            <div className="thank-you-icon">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>

            <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>
              We&apos;ve Got It
            </span>
            <h2 className="h-section">
              Your Message Is <em>On Its Way</em>.
            </h2>

            <p className="thank-you-text">
              Thanks for reaching out to Finnegan&apos;s Wake. Whether you&apos;re
              planning a private event, booking a table, or just saying hello —
              we appreciate you taking the time.
            </p>

            <p className="thank-you-text">
              We typically respond within <strong>24–48 hours</strong>. In the
              meantime, feel free to give us a ring or swing by the pub.
            </p>

            <div className="thank-you-details">
              <div className="detail-item">
                <div className="detail-label">Call Us</div>
                <a href="tel:+14178691500" className="detail-value">
                  (417) 869-1500
                </a>
              </div>
              <div className="detail-item">
                <div className="detail-label">Find Us</div>
                <span className="detail-value">
                  305 South Avenue, Springfield
                </span>
              </div>
              <div className="detail-item">
                <div className="detail-label">Hours</div>
                <span className="detail-value">Tue–Sun, 4 pm onwards</span>
              </div>
            </div>

            <div className="story-sig" style={{ marginTop: 40 }}>
              <div>
                <div className="sig-name">— The Finnegan&apos;s Team</div>
                <div className="sig-meta">We&apos;ll be in touch soon</div>
              </div>
            </div>

            <div className="thank-you-actions">
              <Link href="/" className="btn btn-gold">
                Back to Home
              </Link>
              <Link href="/menu" className="btn btn-ghost">
                Browse the Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-preview">
        <div className="menu-bg" />
        <div className="menu-inner">
          <div className="menu-head reveal">
            <span className="eyebrow center" style={{ color: "var(--gold-soft)" }}>
              While You Wait
            </span>
            <h2 className="h-section">
              A Few <em>Suggestions</em>
            </h2>
          </div>

          <div className="specials-grid" style={{ marginTop: 56 }}>
            <article className="special-card reveal">
              <span className="special-eyebrow">A Standing Invitation</span>
              <h3 className="special-title">
                Alumni <em>Hour</em>
              </h3>
              <p className="special-when">Tuesday – Sunday · 4 to 6 p.m.</p>
              <div className="special-rule">
                <span />
              </div>
              <ul className="special-list">
                <li>
                  <span className="perk">Every App on the Menu</span>
                  <span className="value">$6</span>
                </li>
                <li>
                  <span className="perk">Wells</span>
                  <span className="value">½ off</span>
                </li>
                <li>
                  <span className="perk">Draft Beer</span>
                  <span className="value">½ off</span>
                </li>
                <li>
                  <span className="perk">Call Drinks</span>
                  <span className="value">½ off</span>
                </li>
              </ul>
            </article>

            <article className="special-card reveal">
              <span className="special-eyebrow">Wednesdays, Sharp</span>
              <h3 className="special-title">
                Finn&apos;s <em>Trivia</em>
              </h3>
              <p className="special-when">Every Wednesday · 7 p.m.</p>
              <div className="special-rule">
                <span />
              </div>
              <ul className="special-list">
                <li>
                  <span className="perk">Buy-In</span>
                  <span className="value">Free</span>
                </li>
                <li>
                  <span className="perk">Boulevard Brewing Cans &amp; Drafts</span>
                  <span className="value">$3.50</span>
                </li>
                <li>
                  <span className="perk">Rounds, With Prizes</span>
                  <span className="value">×4</span>
                </li>
                <li>
                  <span className="perk">Grand Prizes</span>
                  <span className="value">1 · 2 · 3</span>
                </li>
              </ul>
            </article>
          </div>

          <div className="menu-foot reveal">
            <Link href="/events" className="btn btn-gold">
              See All Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <Reveal />
    </>
  );
}
