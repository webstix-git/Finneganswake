import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promotions & Events — Finnegan's Wake",
  description:
    "Wednesday trivia, Live From Downtown, Finnsmas, charity nights and private bookings at Finnegan's Wake in Springfield, MO.",
};

export default function EventsPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero"
        style={
          {
            "--page-hero-bg": "url('/images/banner-events.png')",
            "--page-hero-pos": "center 45%",
          } as React.CSSProperties
        }
      >
        <span className="eyebrow center">Recurring &amp; Seasonal</span>
        <h1>Reasons to be <em>Here</em></h1>
        <p>Three events that have, between them, sold more burgers, started more arguments, and welcomed more strangers than we have any business admitting.</p>
      </section>

      <Breadcrumbs trail={[{ label: "Promotions & Events" }]} />

      <section className="events">
        <div className="events-grid">
          <article className="event-card feature reveal">
            <span className="event-tag">Wednesdays · Weekly</span>
            <h3 className="event-title">Pub <em>Trivia</em></h3>
            <p className="event-when">Every Wednesday, 7:30 p.m. sharp.</p>
            <p className="event-desc">The longest-running trivia night in Springfield. Six rounds, no phones, vicious tiebreakers. House teams have been losing the same final question for fourteen years and counting.</p>
            <div className="event-foot">
              <div className="stat"><strong>Held since 2010</strong>832 nights · 5,000+ players</div>
              <span className="event-arrow">↗</span>
            </div>
          </article>

          <article className="event-card reveal">
            <span className="event-tag">May – September</span>
            <h3 className="event-title">Live From <em>Downtown</em></h3>
            <p className="event-when">Saturdays on The Square.</p>
            <p className="event-desc">We provide the bartending services for Live From Downtown, every Saturday May through September. Local songwriters, fiddlers, and small bands take the square. Pints kept moving.</p>
            <div className="event-foot">
              <div className="stat"><strong>This Season</strong>21 acts booked</div>
              <span className="event-arrow">↗</span>
            </div>
          </article>

          <article className="event-card reveal">
            <span className="event-tag">November – January</span>
            <h3 className="event-title"><em>Finnsmas</em></h3>
            <p className="event-when">A holiday pop-up, top to bottom.</p>
            <p className="event-desc">We hang every lit thing we own and let the bar lean into the season. Hot toddies, a rotating holiday menu, and a tree in every corner that has corners.</p>
            <div className="event-foot">
              <div className="stat"><strong>Returns</strong>Friday after Thanksgiving</div>
              <span className="event-arrow">↗</span>
            </div>
          </article>
        </div>
      </section>

      <section className="featured" style={{ paddingTop: 120, paddingBottom: 60 }}>
        <div className="featured-header">
          <div className="left reveal">
            <p>Aside from the big three, there&apos;s plenty going on through the week. Stop by, or follow along on Instagram for the night&apos;s specials.</p>
          </div>
          <div className="center reveal">
            <span className="eyebrow center">Throughout The Week</span>
            <h2 className="h-section" style={{ marginTop: 24 }}>Around <em>The Pub</em></h2>
          </div>
          <div className="right reveal">
            <span className="num">04</span>
            <span>reasons to drop in</span>
          </div>
        </div>

        <div className="dishes" style={{ gridTemplateColumns: "repeat(2,1fr)", maxWidth: 980, gap: 48, margin: "0 auto" }}>
          <article className="dish reveal">
            <div className="dish-frame" style={{ aspectRatio: "16/10" }}>
              <span className="dish-num">i.</span>
              <span className="dish-badge">Sundays</span>
              <img alt="Irish coffee–style drink at Finnegan&apos;s Wake" src="/images/drink-baileys-mug.png" />
            </div>
            <div className="dish-info">
              <div className="kind">Sunday Funday · 11 a.m.</div>
              <h3>Sunday <em>Brunch</em></h3>
              <p>A relaxed Sunday open. Brunch plates from the kitchen, the game on the screens, and a slower pour. The way it should be.</p>
              <div className="dish-meta">
                <span className="dish-price">11 — 10</span>
                <Link className="dish-link" href="/menu">See Menu</Link>
              </div>
            </div>
          </article>

          <article className="dish reveal">
            <div className="dish-frame" style={{ aspectRatio: "16/10" }}>
              <span className="dish-num">ii.</span>
              <span className="dish-badge">Match Days</span>
              <img alt="Pool table and match night at the pub" src="/images/pool-table-night.png" />
            </div>
            <div className="dish-info">
              <div className="kind">Sports Viewing · All Season</div>
              <h3>Watch The <em>Match</em></h3>
              <p>Premier League openers, college Saturdays, and the big games. Get here early — the corner booth fills up.</p>
              <div className="dish-meta">
                <span className="dish-price">walk-in</span>
                <Link className="dish-link" href="/contact">Find Us</Link>
              </div>
            </div>
          </article>

          <article className="dish reveal">
            <div className="dish-frame" style={{ aspectRatio: "16/10" }}>
              <span className="dish-num">iii.</span>
              <span className="dish-badge">Charity Nights</span>
              <img alt="Guests gathered at Finnegan&apos;s Wake" src="/images/group-long-table.png" />
            </div>
            <div className="dish-info">
              <div className="kind">Quarterly · Local Causes</div>
              <h3>Local <em>Charity</em> Nights</h3>
              <p>We pick a different local charity every quarter and pour for them. Twenty years in, that&apos;s a lot of pints for a lot of good causes.</p>
              <div className="dish-meta">
                <span className="dish-price">4 / yr</span>
                <Link className="dish-link" href="/contact">Get Involved</Link>
              </div>
            </div>
          </article>

          <article className="dish reveal">
            <div className="dish-frame" style={{ aspectRatio: "16/10" }}>
              <span className="dish-num">iv.</span>
              <span className="dish-badge">Private Events</span>
              <img alt="Large group celebrating at Finnegan&apos;s Wake" src="/images/large-group-table.png" />
            </div>
            <div className="dish-info">
              <div className="kind">By Appointment · Anne Hosts</div>
              <h3>Private <em>Bookings</em></h3>
              <p>Engagement parties, retirements, birthdays, wakes (yes, really). We&apos;ve got the room and the kitchen for it. Ask for Anne.</p>
              <div className="dish-meta">
                <span className="dish-price">inquire</span>
                <Link className="dish-link" href="/contact">Get In Touch</Link>
              </div>
            </div>
          </article>
        </div>

        <div className="featured-foot reveal">
          <Link href="/contact" className="btn btn-gold">Plan A Visit</Link>
        </div>
      </section>

      <Footer />
      <Reveal />
    </>
  );
}
