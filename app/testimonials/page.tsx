import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials — Finnegan's Wake",
  description: "Word on the street. Google reviews of Finnegan's Wake in Springfield, MO.",
};

const REVIEWS = [
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
  {
    initial: "K",
    name: "Kelsey Contreras",
    quote:
      "Visited on a Thursday night and it was popping with college kids. The place is nice and has a pool table amongst other activities. The best part was the $8.50 pitcher of beer. Food, service and atmosphere — five stars across the board.",
  },
  {
    initial: "N",
    name: "Natalie Ruiz",
    quote:
      "Perfect place to go for a drink and food under $20. It's nice inside and, of course, loud like a college bar should be. Drinks were strong and cheap. The food prices were great too. Service and atmosphere — five stars.",
  },
  {
    initial: "J",
    name: "Jayde Campbell",
    quote:
      "It was very friendly — kind staff even when it got chaotic. There were a few tables to sit at if you wanted to be further from the crowds, and they also had pool and darts to play. A great place to go and hang with friends.",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero"
        style={
          {
            "--page-hero-bg": "url('/images/banner-bar.png')",
            "--page-hero-pos": "center 55%",
          } as React.CSSProperties
        }
      >
        <span className="eyebrow center">Word On The Street</span>
        <h1>What The <em>Regulars</em> Say</h1>
        <p>Pulled from Google. Twenty years of evenings, in the words of the people who keep coming back.</p>
      </section>

      <Breadcrumbs trail={[{ label: "Reviews" }]} />

      <section className="testi" style={{ borderTop: "none" }}>
        <div className="testi-head reveal">
          <span className="eyebrow center">Google Reviews</span>
          <h2 className="h-section">A Quiet <em>Average</em></h2>
          <div className="stars">★ ★ ★ ★ ★</div>
          <div className="rating"><strong>4.8</strong> &nbsp;·&nbsp; 1,247 Google reviews</div>
        </div>

        <div className="testi-grid">
          {REVIEWS.map((r) => (
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

        <div className="featured-foot reveal" style={{ marginTop: 64 }}>
          <a
            href="https://www.google.com/search?q=Finnegan%27s+Wake+Springfield+MO+reviews"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-gold"
          >Read All Google Reviews</a>
        </div>
      </section>

      <Footer />
      <Reveal />
    </>
  );
}
