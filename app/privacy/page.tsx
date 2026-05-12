import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Finnegan's Wake",
  description:
    "How Finnegan's Wake collects, uses, and protects information submitted through finneganswake.com.",
};

const SECTIONS: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "01 · The Short Version",
    body: (
      <>
        <p>
          Finnegan&apos;s Wake LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;the pub&rdquo;) runs this
          website to share our menu, events, and a way to get in touch. We collect the smallest
          amount of information we need to answer your message or take a booking. We don&apos;t sell
          your information, and we don&apos;t share it with anyone outside the people who help us
          keep the lights on.
        </p>
      </>
    ),
  },
  {
    heading: "02 · What We Collect",
    body: (
      <>
        <p>When you fill in the contact or booking form, we collect the details you choose to give us:</p>
        <ul>
          <li>Your name</li>
          <li>An email address or phone number to reach you on</li>
          <li>The message, group size, or event details you send us</li>
        </ul>
        <p>
          Like most websites, we also receive a small amount of automatic technical information from
          your browser — the page you visited, the time, your approximate location, and an anonymized
          IP address — for security and basic traffic analytics.
        </p>
      </>
    ),
  },
  {
    heading: "03 · How We Use It",
    body: (
      <>
        <p>We use what you send us only for:</p>
        <ul>
          <li>Replying to your enquiry, confirming a booking, or answering a question</li>
          <li>Improving the website and understanding which pages people actually read</li>
          <li>Keeping the site safe from spam and abuse</li>
        </ul>
        <p>
          We do not run advertising trackers, retargeting pixels, or third-party data brokers on this
          site.
        </p>
      </>
    ),
  },
  {
    heading: "04 · Cookies",
    body: (
      <>
        <p>
          This site uses a small number of strictly necessary cookies for things like remembering
          whether you&apos;ve dismissed a banner or completed a form. We may also use a privacy-respecting
          analytics tool to measure traffic. You can disable cookies in your browser without breaking
          the site.
        </p>
      </>
    ),
  },
  {
    heading: "05 · How Long We Keep Things",
    body: (
      <>
        <p>
          Contact and booking enquiries are kept only as long as needed to follow up — typically up
          to twelve months — and then deleted. Aggregate analytics are kept indefinitely in
          anonymized form.
        </p>
      </>
    ),
  },
  {
    heading: "06 · Your Choices",
    body: (
      <>
        <p>
          You can email us at any time to ask what information we hold about you, to correct
          something, or to have it deleted. Drop a note to{" "}
          <a href="mailto:finneganssgf@gmail.com" style={{ color: "var(--green)", fontStyle: "italic" }}>
            finneganssgf@gmail.com
          </a>{" "}
          and we&apos;ll respond within a couple of working days.
        </p>
      </>
    ),
  },
  {
    heading: "07 · Updates To This Policy",
    body: (
      <>
        <p>
          If we change anything substantive, we&apos;ll update this page and the &ldquo;Last revised&rdquo;
          date below. Material changes will also be flagged on the home page for a reasonable period.
        </p>
        <p style={{ color: "var(--stone)", fontStyle: "italic" }}>Last revised: May 2026</p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero"
        style={{
          ["--page-hero-bg" as string]: "url('/images/storefront-pride.png')",
          ["--page-hero-pos" as string]: "center 60%",
        }}
      >
        <span className="eyebrow center">The Small Print</span>
        <h1>Privacy <em>Policy</em>.</h1>
        <p>A short, plain-English explanation of what we collect, what we don&apos;t, and what we do with anything you send us.</p>
      </section>

      <Breadcrumbs trail={[{ label: "Privacy Policy" }]} />

      <section className="featured" style={{ paddingTop: 100, paddingBottom: 120 }}>
        <div
          style={{
            maxWidth: 820,
            margin: "0 auto",
            display: "grid",
            gap: 56,
            fontSize: 17,
            lineHeight: 1.75,
            color: "var(--ink-soft)",
          }}
        >
          {SECTIONS.map((s) => (
            <div key={s.heading} className="reveal">
              <h2
                style={{
                  fontFamily: "var(--display)",
                  fontStyle: "italic",
                  fontSize: 34,
                  color: "var(--green)",
                  marginBottom: 18,
                  letterSpacing: "-.01em",
                }}
              >
                {s.heading}
              </h2>
              <div style={{ display: "grid", gap: 14 }}>{s.body}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <Reveal />
    </>
  );
}
