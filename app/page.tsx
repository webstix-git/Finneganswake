import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import HomeGallery from "@/components/HomeGallery";
import Link from "next/link";

const HOME_REVIEWS = [
  {
    initial: "C",
    name: "Cami Ward",
    quote:
      "Points for sass, quirky, and old-world pub feel. Even though it was St. Patrick's Day, the staff was friendly and attentive and the food was delicious. The corned beef was amazing and so was the cabbage. If you like pickles you absolutely need to try the Civil Pickle shot. We will be back!",
  },
  {
    initial: "L",
    name: "Leigha McKinney",
    quote:
      "My best friend and I have been going to this bar for over 6 years now. The bartenders are very knowledgeable and pour great drinks. Overall — great pub atmosphere, very cheap bar food that is tasty, and good drinks!",
  },
  {
    initial: "C",
    name: "Chester Flake",
    quote:
      "All I have to say is… BUBBLE HOCKEY! What a great pastime and bar game. It's like \u201cHockey Foosball,\u201d folks — and if you want to play actual foosball, well, they have that too. Darts and a pool table round off this cool-guy hangout. Looks like a fun place to watch the game and play some games.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <Nav />

      <section className="hero" id="top">
        <div className="hero-bg" />

        <div className="hero-content">
          <div className="hero-eyebrow">Springfield, Missouri · Since 2006</div>

          <h1>
            Finnegan&apos;s
            <span className="ital">Wake</span>
          </h1>

          <p className="hero-tagline">
            &ldquo;Lots of fun at Finnegan&apos;s Wake.&rdquo; — twenty years of really good food,
            hard-fought trivia, and the most familiar faces in downtown.
          </p>

          <div className="hero-cta">
            <Link href="/menu" className="btn btn-gold">See The Menu</Link>
            <Link href="/contact" className="btn btn-ghost-light">Find Us Downtown</Link>
          </div>
        </div>
      </section>

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

      <section className="featured" id="menu">
        <div className="featured-header">
          <div className="left reveal">
            <p>Three plates we&apos;d stake the place on. The kitchen has been
            sharpening these since the year Twitter launched.</p>
          </div>
          <div className="center reveal">
            <span className="eyebrow center">The House Specialties</span>
            <h2 className="h-section" style={{ marginTop: 24 }}>Really Good <em>Food</em></h2>
          </div>
          <div className="right reveal">
            <span className="num">03</span>
            <span>plates worth the trip</span>
          </div>
        </div>

        <div className="dishes">
          <article className="dish reveal">
            <div className="dish-frame">
              <span className="dish-num">i.</span>
              <span className="dish-badge">House Favourite</span>
              <img alt="The Finnegan Burger with fries at Finnegan&apos;s Wake" src="/images/dish-spicy-burger.png" />
            </div>
            <div className="dish-info">
              <div className="kind">Smashed · Double Patty</div>
              <h3>The <em>Finnegan</em><br />Burger</h3>
              <p>Two thin patties, smashed hard on a flat-top, with American, dill chips, house sauce, and a soft brioche bun. The reason people keep coming back.</p>
            </div>
          </article>

          <article className="dish reveal">
            <div className="dish-frame">
              <span className="dish-num">ii.</span>
              <span className="dish-badge">On Marble Rye</span>
              <img alt="The Reuben with fries at Finnegan&apos;s Wake" src="/images/dish-reuben.png" />
            </div>
            <div className="dish-info">
              <div className="kind">Guinness-Braised · Grilled Hard</div>
              <h3>The Reuben, <em>Properly</em></h3>
              <p>House corned beef, kraut, Russian, marble rye, and a flat-top finish until the cheese runs. Hand-cut fries on the side.</p>
            </div>
          </article>

          <article className="dish reveal">
            <div className="dish-frame">
              <span className="dish-num">iii.</span>
              <span className="dish-badge">Irish Classic</span>
              <img alt="Bangers and mash at Finnegan&apos;s Wake" src="/images/dish-bangers.png" />
            </div>
            <div className="dish-info">
              <div className="kind">Grilled · Guinness Gravy</div>
              <h3>Bangers &amp; <em>Mash</em></h3>
              <p>Grilled sausages on a bed of homemade mashed potatoes, caramelized onions, and Guinness gravy — the sort of plate that keeps you through winter.</p>
            </div>
          </article>
        </div>

        <div className="featured-foot reveal">
          <Link href="/menu" className="btn">Browse The Full Menu</Link>
        </div>
      </section>

      <section className="events" id="events">
        <div className="events-header reveal">
          <span className="eyebrow center" style={{ color: "var(--gold-soft)" }}>Recurring &amp; Seasonal</span>
          <h2 className="h-section">Reasons to be <em>Here</em></h2>
          <p>Three events that have, between them, sold more burgers, started more arguments, and welcomed more strangers than we have any business admitting.</p>
        </div>

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
            <p className="event-desc">We provide bartending services for Live From Downtown — every Saturday from May through September. Local songwriters, fiddlers and bands play the square; we keep the pints moving.</p>
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

      <section className="story" id="story">
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
            <span className="eyebrow">A Quietly Romantic Pub</span>
            <h2 className="h-section">A Love <em>Story</em>, With Burgers</h2>
            <p className="lede">Anne was waiting tables. Clayton was a regular with a suspiciously consistent Wednesday schedule.</p>
            <p>They got married. They bought the bar. Twenty years on, Finnegan&apos;s is still where they show up most days — and, as it turns out, the favorite engagement-photo spot of approximately every couple they&apos;ve ever served.</p>
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

      <section className="menu-preview" id="menu-preview">
        <div className="menu-bg" />
        <div className="menu-inner">
          <div className="menu-head reveal">
            <span className="eyebrow center" style={{ color: "var(--gold-soft)" }}>Standing Invitations</span>
            <h2 className="h-section">The House <em>Specials</em></h2>
          </div>

          <div className="specials-grid" style={{ marginTop: 56 }}>
            <article className="special-card reveal">
              <span className="special-eyebrow">A Standing Invitation</span>
              <h3 className="special-title">Alumni <em>Hour</em></h3>
              <p className="special-when">Tuesday – Sunday · 4 to 6 p.m.</p>
              <div className="special-rule"><span /></div>
              <ul className="special-list">
                <li><span className="perk">Every App on the Menu</span><span className="value">$6</span></li>
                <li><span className="perk">Wells</span><span className="value">½ off</span></li>
                <li><span className="perk">Draft Beer</span><span className="value">½ off</span></li>
                <li><span className="perk">Call Drinks</span><span className="value">½ off</span></li>
              </ul>
            </article>

            <article className="special-card reveal">
              <span className="special-eyebrow">Wednesdays, Sharp</span>
              <h3 className="special-title">Finn&apos;s <em>Trivia</em></h3>
              <p className="special-when">Every Wednesday · 7 p.m.</p>
              <div className="special-rule"><span /></div>
              <ul className="special-list">
                <li><span className="perk">Buy-In</span><span className="value">Free</span></li>
                <li><span className="perk">Boulevard Brewing Cans &amp; Drafts</span><span className="value">$3.50</span></li>
                <li><span className="perk">Rounds, With Prizes</span><span className="value">×4</span></li>
                <li><span className="perk">Grand Prizes</span><span className="value">1 · 2 · 3</span></li>
              </ul>
            </article>
          </div>

          <div className="menu-foot reveal">
            <Link href="/menu" className="btn btn-gold">See The Full Menu</Link>
          </div>
        </div>
      </section>

      <section className="home-reviews" id="reviews">
        <div className="home-reviews-head reveal">
          <span className="eyebrow center">Word On The Street</span>
          <h2 className="h-section">
            What <em>Regulars</em> Say
          </h2>
        </div>
        <div className="testi-grid">
          {HOME_REVIEWS.map((r) => (
            <article key={r.name} className="testi-card reveal">
              <div className="stars">★ ★ ★ ★ ★</div>
              <blockquote>{r.quote}</blockquote>
              <div className="testi-foot">
                <div className="testi-avatar">{r.initial}</div>
                <div>
                  <div className="testi-name">{r.name}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="featured-foot reveal" style={{ marginTop: 48 }}>
          <Link href="/testimonials" className="btn btn-gold">
            Read More Reviews
          </Link>
        </div>
      </section>

      <HomeGallery />

      <Footer />
      <Reveal />
    </>
  );
}
