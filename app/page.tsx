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

        <div className="est-stats est-stats--3">
          <div className="est-stat"><div className="num">832</div><div className="label">Trivia Nights</div></div>
          <div className="est-stat"><div className="num">14</div><div className="label">Local Charities</div></div>
          <div className="est-stat"><div className="num">1</div><div className="label">Famous Burger</div></div>
        </div>
      </section>

      <section className="featured" id="menu">
        <div className="featured-header">
          <div className="left reveal">
            <p>Three regulars that never miss: a hot chicken sandwich, a proper cheeseburger, and the apps everyone orders for the table.</p>
          </div>
          <div className="center reveal">
            <span className="eyebrow center">The House Specialties</span>
            <h2 className="h-section" style={{ marginTop: 24 }}>Really Good <em>Food</em></h2>
          </div>
          <div className="right reveal">
            <span className="num">03</span>
            <span>regulars worth the trip</span>
          </div>
        </div>

        <div className="dishes">
          <article className="dish reveal">
            <div className="dish-frame">
              <span className="dish-num">i.</span>
              <span className="dish-badge">Hot Seller</span>
              <img alt="Nashville hot chicken sandwich at Finnegan&apos;s Wake" src="/images/nashville-hot-chicken-sandwich.png" />
            </div>
            <div className="dish-info">
              <div className="kind">Crispy Chicken · Nashville Heat</div>
              <h3>Nashville Hot<br /><em>Chicken Sandwich</em></h3>
              <p>Crispy fried chicken tossed in Nashville hot with pickles, lettuce, and tomato on a toasted bun. Big flavor, just the right kick.</p>
            </div>
          </article>

          <article className="dish reveal">
            <div className="dish-frame">
              <span className="dish-num">ii.</span>
              <span className="dish-badge">House Classic</span>
              <img alt="Spicy cheeseburger and fries at Finnegan&apos;s Wake" src="/images/dish-spicy-burger.png" />
            </div>
            <div className="dish-info">
              <div className="kind">Smashed Patty · Pepperjack Cheese</div>
              <h3>Spicy <em>Cheeseburger</em></h3>
              <p>Smashed beef patty topped with melted pepperjack cheese, crispy fried onion straws, and pickled jalapeños. Served with fries and a side of chipotle aioli.</p>
            </div>
          </article>

          <article className="dish reveal">
            <div className="dish-frame">
              <span className="dish-num">iii.</span>
              <span className="dish-badge">For The Table</span>
              <img alt="Mozzarella sticks and toasted ravioli at Finnegan&apos;s Wake" src="/images/mozzarella-sticks-toasted-ravioli.png" />
            </div>
            <div className="dish-info">
              <div className="kind">Crispy Apps · Marinara On Side</div>
              <h3>Mozzarella Sticks<br />&amp; <em>Toasted Ravioli</em></h3>
              <p>Golden mozzarella sticks and toasted ravs with warm marinara. A classic Midwest bar-table starter for sharing.</p>
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
            <p className="event-when">Every Wednesday, 7 PM sharp.</p>
            <p className="event-desc">The longest-running trivia night in Springfield. Six rounds, no phones, and fierce tiebreakers that keep teams coming back week after week. A local favorite for over fourteen years.</p>
            <div className="event-foot">
              <div className="stat"><strong>Held since 2010</strong>832 nights · 5,000+ players</div>
              <span className="event-arrow">↗</span>
            </div>
          </article>

          <article className="event-card reveal">
            <a href="https://www.livefromdowntownsgf.com/" target="_blank" rel="noopener noreferrer" className="event-card-link">
              <span className="event-tag">May – September</span>
              <h3 className="event-title">Live From <em>Downtown</em></h3>
              <p className="event-when">Saturdays on The Square.</p>
              <p className="event-desc">We provide bartending services for Live From Downtown — every Saturday from May through September. Local songwriters, fiddlers and bands play the square; we keep the pints moving.</p>
              <div className="event-foot">
                <div className="stat"><strong>This Season</strong>21 acts booked</div>
                <span className="event-arrow">↗</span>
              </div>
            </a>
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
