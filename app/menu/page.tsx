import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import MenuEditor from "@/components/MenuEditor";
import Link from "next/link";
import type { Metadata } from "next";
import { getMenuData } from "@/lib/content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Menu — Finnegan's Wake · Springfield, Missouri",
  description:
    "The full Finnegan's Wake menu — smashed burgers, Nashville hot chicken, Irish pub classics, small plates, and a rotating bar.",
};

export default async function MenuPage() {
  const menuData = await getMenuData();

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
        <p>Smashed burgers, Nashville heat, beer-battered cod, and a table of apps built for sharing. Kitchen open Tue – Sun.</p>
      </section>

      <Breadcrumbs trail={[{ label: "Menu" }]} />

      <section className="menu-preview" style={{ paddingTop: 120 }}>
        <div className="menu-bg" />
        <div className="menu-inner">

          <MenuEditor initialData={menuData} isAdmin={false} />

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
