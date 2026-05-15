import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — Finnegan's Wake",
  description:
    "Your message is on its way. We'll be in touch within a day or two — or call (417) 869-1500 if it's urgent.",
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
        <h1>Thank <em>You</em></h1>
        <p>Your note made it to the pub. We&apos;ll read it soon and get back to you — usually within a day or two.</p>
      </section>

      <Breadcrumbs
        trail={[
          { label: "Find Us & Contact", href: "/contact" },
          { label: "Thank You" },
        ]}
      />

      <section className="est-band">
        <span className="eyebrow center">We&apos;ll Be In Touch</span>
        <p className="display">
          Thanks for reaching out. Anne or someone from the team will reply to the email
          you left — and if it&apos;s about a private event or a big group, Anne usually
          handles those <em>personally</em>.
        </p>
        <div className="est-stats" style={{ gridTemplateColumns: "1fr", maxWidth: 420 }}>
          <div className="est-stat" style={{ borderRight: "none" }}>
            <div className="num" style={{ fontSize: 42 }}>
              1–2
            </div>
            <div className="label">Days To Reply</div>
          </div>
        </div>
      </section>

      <section className="featured" style={{ paddingTop: 100, paddingBottom: 120 }}>
        <div className="featured-header" style={{ marginBottom: 56, gridTemplateColumns: "1fr" }}>
          <div className="center reveal">
            <span className="eyebrow center">While You Wait</span>
            <h2 className="h-section" style={{ marginTop: 24 }}>
              Plan Your <em>Visit</em>
            </h2>
          </div>
        </div>

        <div
          className="testi-grid reveal"
          style={{ maxWidth: 900, margin: "0 auto", gridTemplateColumns: "1fr" }}
        >
          <article
            className="testi-card"
            style={{ background: "transparent", borderColor: "var(--rule)", textAlign: "center" }}
          >
            <p style={{ fontSize: 17, color: "var(--stone)", lineHeight: 1.75, maxWidth: 520, margin: "0 auto 32px" }}>
              Need something sooner? Give us a ring at{" "}
              <a href="tel:+14178691500" style={{ color: "var(--green)", fontStyle: "italic" }}>
                (417) 869-1500
              </a>
              . For private events and large groups, ask for Anne when you call.
            </p>
            <div className="visit-actions" style={{ justifyContent: "center", marginTop: 0 }}>
              <Link href="/menu" className="btn btn-gold">
                Browse The Menu
              </Link>
              <Link href="/events" className="btn btn-ghost">
                See What&apos;s On
              </Link>
              <Link href="/" className="btn btn-ghost">
                Back Home
              </Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />
      <Reveal />
    </>
  );
}
