import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import MenuItem from "@/components/MenuItem";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — Finnegan's Wake · Springfield, Missouri",
  description:
    "The full Finnegan's Wake menu — smashed burgers, Nashville hot chicken, Irish pub classics, small plates, and a rotating bar.",
};

export default function MenuPage() {
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
        <span className="eyebrow center">From The Kitchen &amp; Bar</span>
        <h1>The <em>Menu</em></h1>
        <p>Smashed burgers, Nashville heat, beer-battered cod, and a table of apps built for sharing. Kitchen open daily, 4–9 pm.</p>
      </section>

      <Breadcrumbs trail={[{ label: "Menu" }]} />

      <section className="menu-preview" style={{ paddingTop: 120 }}>
        <div className="menu-bg" />
        <div className="menu-inner">

          <div className="menu-section">
            <div className="menu-head reveal" style={{ marginBottom: 40 }}>
              <span className="eyebrow center" style={{ color: "var(--gold-soft)" }}>Section i.</span>
              <h2 className="h-section"><em>Apps</em></h2>
            </div>

            <div className="menu-cols">
              <div className="menu-col reveal">
                <h4>Snacks &amp; Bites <span>To start the table</span></h4>
                <MenuItem name={<>Pub <em>Pretzels</em></>} desc="Served with beer cheese." price="$8" />
                <MenuItem name={<>Fried Green <em>Beans</em></>} desc="Served with choice of sauce." price="$8" />
                <MenuItem name={<>Mozzarella <em>Sticks</em></>} desc="Served with marinara." price="$8" />
                <MenuItem name={<>Toasted <em>Ravioli</em></>} desc="Served with marinara." price="$10" />
                <MenuItem name={<>Blackened Corn <em>Ribs</em></>} desc="Served with chipotle aïoli." price="$8" />
              </div>

              <div className="menu-col reveal">
                <h4>Wings &amp; Salad <span>From the fryer &amp; the cooler</span></h4>
                <MenuItem name={<>Jumbo Wings · <em>6</em></>} desc="Choice of sauce or dry rub." price="$10" />
                <MenuItem name={<>Jumbo Wings · <em>12</em></>} desc="Choice of sauce or dry rub." price="$15" />
                <MenuItem name={<>Side <em>Salad</em></>} desc="Iceberg, tomatoes, onion straws, parmesan, ranch." price="$4" />
                <MenuItem name={<>Regular <em>Salad</em></>} desc="The same, full size." price="$6" />
                <MenuItem name={<>Add Fried <em>Chicken</em></>} desc="To any salad." price="+$4" />
              </div>
            </div>

            <p
              className="note"
              style={{
                textAlign: "center",
                marginTop: 36,
                fontFamily: "var(--display)",
                fontStyle: "italic",
                color: "rgba(244,236,216,.65)",
              }}
            >
              Sauces: Chipotle Aïoli · Ranch · Buffalo · Fry Sauce · BBQ · Nashville Hot
            </p>
          </div>

          <div className="menu-section">
            <div className="menu-head reveal" style={{ marginBottom: 40 }}>
              <span className="eyebrow center" style={{ color: "var(--gold-soft)" }}>Section ii.</span>
              <h2 className="h-section"><em>Mains</em></h2>
              <p style={{ fontFamily: "var(--display)", fontStyle: "italic", color: "rgba(244,236,216,.7)", fontSize: 18, marginTop: 18 }}>
                All entrées served with choice of fries or sweet potato fries. Sub side salad $1.50, add side salad $3.
              </p>
            </div>

            <div className="menu-cols">
              <div className="menu-col reveal">
                <h4>Burgers <span>Smashed on the flat-top</span></h4>
                <MenuItem name={<>½ Lb. <em>Smashburger</em></>} desc="Two homemade patties, choice of American or Pepperjack cheese." price="$12" />
                <MenuItem name={<>Spicy <em>Smashburger</em></>} desc="Two homemade patties, Pepperjack, fried onion straws, pickled jalapeños, chipotle aïoli." price="$13" />
              </div>

              <div className="menu-col reveal">
                <h4>Chicken &amp; Fish <span>Fried hot, served fast</span></h4>
                <MenuItem name={<>Fried <em>Chicken</em> Sandwich</>} desc="Choice of American or Pepperjack, lettuce, tomato, pickles, mayo." price="$13" />
                <MenuItem name={<>Nashville <em>Hot</em> Chicken Sandwich</>} desc="Fried chicken tossed in Nashville hot, lettuce, tomato, pickles." price="$14" />
                <MenuItem name={<>Fish &apos;n <em>Chips</em></>} desc="Served with house-made fry sauce." price="$12" />
                <MenuItem name={<>Chicken <em>Strips</em></>} desc="Served with choice of sauce." price="$12" />
              </div>
            </div>
          </div>

          <div className="menu-section">
            <div className="menu-head reveal" style={{ marginBottom: 56 }}>
              <span className="eyebrow center" style={{ color: "var(--gold-soft)" }}>Section iii.</span>
              <h2 className="h-section">The <em>Specials</em></h2>
              <p style={{ fontFamily: "var(--display)", fontStyle: "italic", color: "rgba(244,236,216,.7)", fontSize: 18, marginTop: 18 }}>
                A standing happy hour and the longest-running trivia in the city. Both are part of the deal.
              </p>
            </div>

            <div className="specials-grid">
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
          </div>

          <div className="menu-foot reveal">
            <p className="note">Kitchen open daily, 4–9 pm. 21 &amp; over — ID at the door, every time.</p>
            <Link href="/contact" className="btn btn-gold">Find Us &amp; Visit</Link>
          </div>
        </div>
      </section>

      <Footer />
      <Reveal />
    </>
  );
}
