import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Finnegan's Wake",
  description:
    "Springfield's oldest Irish pub. The longest-running trivia in town. Where Anne and Clayton met. The story behind Finnegan's Wake.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero"
        style={
          {
            "--page-hero-bg": "url('/images/storefront-pride.png')",
            "--page-hero-pos": "center 60%",
          } as React.CSSProperties
        }
      >
        <span className="eyebrow center">A Quietly Romantic Pub</span>
        <h1>Our <em>Story</em>.</h1>
        <p>Springfield&apos;s oldest Irish pub. The longest-running trivia in town. Twenty years of really good food and the most familiar faces downtown.</p>
      </section>

      <Breadcrumbs trail={[{ label: "Our Story" }]} />

      <section className="est-band">
        <span className="eyebrow center">A Long Story, Briefly</span>
        <p className="display">
          Twenty years on the corner of South &amp; Walnut. The longest-running
          trivia night in the city, a dozen taps, and a kitchen that takes
          a <em>burger</em> very, very seriously.
        </p>
        <div className="est-stats">
          <div className="est-stat"><div className="num">20<sup>yrs</sup></div><div className="label">Years Pouring</div></div>
          <div className="est-stat"><div className="num">832</div><div className="label">Trivia Nights</div></div>
          <div className="est-stat"><div className="num">14</div><div className="label">Local Charities</div></div>
          <div className="est-stat"><div className="num">1</div><div className="label">Famous Burger</div></div>
        </div>
      </section>

      <section className="story">
        <div className="story-inner">
          <div className="story-image-stack reveal">
            <div className="img-back" />
            <div className="img-main">
              <img alt="A packed evening inside Finnegan&apos;s Wake — Anne &amp; Clayton&apos;s pub" src="/images/anne-clayton.png" />
            </div>
            <aside className="story-quote">
              <div className="mark">&ldquo;</div>
              <p>We met on a Tuesday at the corner booth. Bought the place eleven years later. We can&apos;t recommend it enough.</p>
              <cite>— Anne &amp; Clayton</cite>
            </aside>
          </div>

          <div className="story-text reveal">
            <span className="eyebrow">A Love Story, With Burgers</span>
            <h2 className="h-section">Anne &amp; <em>Clayton</em>.</h2>
            <p className="lede">Anne was waiting tables. Clayton was a regular with a suspiciously consistent Wednesday schedule.</p>
            <p>They got married. They bought the bar. Twenty years on, Finnegan&apos;s is still where they show up most days — and, as it turns out, the favorite engagement-photo spot of approximately every couple they&apos;ve ever served. (We&apos;ve lost count of the proposals at the corner booth.)</p>
            <p>We pour for our regulars, we feed the late shift, and we sponsor a different local charity every quarter. If you haven&apos;t been in yet, you&apos;ve got some catching up to do.</p>
            <div className="story-sig">
              <div>
                <div className="sig-name">Anne &amp; Clayton</div>
                <div className="sig-meta">Owners &amp; House Regulars</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="values-inner">
          <div className="values-head reveal">
            <span className="eyebrow center">What Matters</span>
            <h2 className="h-section">Four <em>Things</em> We Care About.</h2>
          </div>

          <div className="values-grid">
            <div className="value reveal">
              <div className="num">01</div>
              <h4>Springfield&apos;s <em>Oldest</em> Irish Pub</h4>
              <p>Since 2006. Twenty years on the corner of South &amp; Walnut, and we plan to be here for the next twenty.</p>
            </div>
            <div className="value reveal">
              <div className="num">02</div>
              <h4>Longest-Running <em>Trivia</em></h4>
              <p>The longest-running trivia night in Springfield. Six rounds, no phones, and a vicious tiebreaker. Wednesday at 7:30.</p>
            </div>
            <div className="value reveal">
              <div className="num">03</div>
              <h4>A Long-Time <em>Supporter</em> of Local Charities</h4>
              <p>A different local cause every quarter. Twenty years in, that&apos;s a lot of pints poured for a lot of good neighbors.</p>
            </div>
            <div className="value reveal">
              <div className="num">04</div>
              <h4>Where Anne &amp; <em>Clayton</em> Met</h4>
              <p>Couples ask to take their engagement photos here — dozens of them. It&apos;s where a lot of stories started, including the owners&apos;.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="featured-header">
          <div className="left reveal">
            <p>A casual downtown social scene with proper pub bones. Familiar faces, friendly service, and a kitchen that runs late.</p>
          </div>
          <div className="center reveal">
            <span className="eyebrow center">The House Vibe</span>
            <h2 className="h-section" style={{ marginTop: 24 }}>A Place To <em>Meet</em>.</h2>
          </div>
          <div className="right reveal">
            <span className="num">20</span>
            <span>years of evenings</span>
          </div>
        </div>

        <div className="testi-grid" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <article className="testi-card reveal" style={{ background: "transparent", borderColor: "var(--rule)" }}>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 32, lineHeight: 1.1, color: "var(--ink)", marginBottom: 20 }}>
              Authentic Irish, <em style={{ color: "var(--green)", fontStyle: "italic" }}>Easy Local</em>
            </h3>
            <p style={{ fontSize: 15, color: "var(--stone)", lineHeight: 1.75 }}>
              Hearty comfort food, a deep beer list, a deeper whiskey shelf, and an honest downtown room. The kind of place that feels like home on the first visit and a second home on the tenth.
            </p>
          </article>

          <article className="testi-card reveal" style={{ background: "transparent", borderColor: "var(--rule)" }}>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 32, lineHeight: 1.1, color: "var(--ink)", marginBottom: 20 }}>
              Built For <em style={{ color: "var(--green)", fontStyle: "italic" }}>Friends</em>
            </h3>
            <p style={{ fontSize: 15, color: "var(--stone)", lineHeight: 1.75 }}>
              Group outings, pub crawls, the after-work table that goes long. Engagement photos and rehearsal dinners. Watching the match. Trivia. Most of our regulars came in once, then never quite stopped.
            </p>
          </article>

          <article className="testi-card reveal" style={{ background: "transparent", borderColor: "var(--rule)" }}>
            <h3 style={{ fontFamily: "var(--display)", fontSize: 32, lineHeight: 1.1, color: "var(--ink)", marginBottom: 20 }}>
              Twenty <em style={{ color: "var(--green)", fontStyle: "italic" }}>Springfield</em> Years
            </h3>
            <p style={{ fontSize: 15, color: "var(--stone)", lineHeight: 1.75 }}>
              Springfield, Missouri — downtown, on the corner of South &amp; Walnut. We opened in 2006 and we&apos;ve kept the same kitchen, same trivia, same idea: take good care of the room.
            </p>
          </article>
        </div>

        <div className="featured-foot reveal">
          <Link href="/contact" className="btn">Come Say Hello</Link>
        </div>
      </section>

      <Footer />
      <Reveal />
    </>
  );
}
