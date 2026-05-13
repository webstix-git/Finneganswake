import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Visit — Finnegan's Wake",
  description:
    "305 South Avenue, Springfield, MO. Call (417) 869-1500 or email finneganssgf@gmail.com. For private events ask for Anne.",
};

export default function ContactPage() {
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
        <span className="eyebrow center">Come On In</span>
        <h1>Find <em>Us</em></h1>
        <p>305 South Avenue, on the corner of South &amp; Walnut. Call ahead for groups, ask for Anne for private events.</p>
      </section>

      <Breadcrumbs trail={[{ label: "Find Us & Contact" }]} />

      <section className="visit">
        <div className="visit-inner">
          <div className="visit-info reveal">
            <span className="eyebrow" style={{ color: "var(--gold-soft)" }}>Come On In</span>
            <h2>Find Us On <em>South Avenue</em></h2>

            <div className="visit-block">
              <div className="label">Address</div>
              <div className="content">
                305 South Avenue<br />
                <em>Springfield, Missouri 65806</em>
                <small>Corner of South &amp; Walnut · Downtown</small>
              </div>
            </div>

            <div className="visit-block">
              <div className="label">Hours</div>
              <div className="content">
                <em>Tue – Thu</em> 4 pm – Midnight<br />
                <em>Fri – Sat</em> 4 pm – 2 am<br />
                <em>Sunday</em> 11 am – 10 pm
                <small>Closed Mondays. Kitchen until 30 min before close.</small>
              </div>
            </div>

            <div className="visit-block">
              <div className="label">Reach Us</div>
              <div className="content">
                <a href="tel:+14178691500"><em>(417) 869-1500</em></a><br />
                <a href="mailto:finneganssgf@gmail.com">finneganssgf@gmail.com</a>
                <small>For private events &amp; large groups, ask for Anne.</small>
              </div>
            </div>

            <div className="visit-block">
              <div className="label">Social</div>
              <div className="content">
                <a href="https://www.instagram.com/finneganssgf/" target="_blank" rel="noopener noreferrer"><em>@finneganssgf</em></a> · Instagram<br />
                <a href="https://www.facebook.com/finneganssgf/" target="_blank" rel="noopener noreferrer">/finneganssgf</a> · Facebook
                <small>Follow along for the night&apos;s specials and upcoming events.</small>
              </div>
            </div>

            <div className="visit-actions">
              <a href="https://maps.google.com/?q=305+South+Ave+Springfield+MO" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get Directions</a>
              <a href="tel:+14178691500" className="btn btn-ghost-light">Call The Pub</a>
            </div>
          </div>

          <div className="visit-map" aria-hidden="true">
            <div className="visit-pin">
              <div className="visit-pin-mark"><span>F</span></div>
              <div className="visit-pin-label">305 South Ave</div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-wrap">
        <div className="contact-form-inner">
          <div className="lead reveal">
            <span className="eyebrow">Drop A Line</span>
            <h2 className="h-section">Get In <em>Touch</em></h2>
            <p>For private events, large groups, or just to say hello — leave us a note. We&apos;ll get back within a day or two.</p>
            <div className="story-sig" style={{ marginTop: 32 }}>
              <div>
                <div className="sig-name">— Anne</div>
                <div className="sig-meta">For Bookings &amp; Events</div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
      <Reveal />
    </>
  );
}
