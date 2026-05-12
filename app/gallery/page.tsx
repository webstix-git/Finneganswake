import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import Gallery, { type GalleryPhoto } from "@/components/Gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Finnegan's Wake",
  description:
    "A look inside Finnegan's Wake — the place, the people, and twenty years of evenings in Springfield, Missouri.",
};

const PHOTOS: GalleryPhoto[] = [
  { src: "/images/bar-interior.png", alt: "Inside Finnegan's Wake at the bar", caption: "The bar on a busy night — taps, chalkboards, and the usual suspects." },
  { src: "/images/dish-bangers.png", alt: "Bangers and mash on the bar", caption: "Bangers & mash — gravy, mash, and a proper pour alongside." },
  { src: "/images/bartender.png", alt: "Bartender pouring a drink", caption: "From the rail — slow pours and fast jokes." },
  { src: "/images/pool-table-night.png", alt: "Pool table and friends at the pub", caption: "Pool, neon, and a Wednesday that got away from you." },
  { src: "/images/trivia-night.png", alt: "Trivia night at the pub", caption: "Answer sheets, pitchers, and the whiteboard of doom." },
  { src: "/images/dish-corned-beef.png", alt: "Corned beef and cabbage plate", caption: "Corned beef & cabbage — the long-braised kind." },
  { src: "/images/dish-spicy-burger.png", alt: "Spicy smashburger with fries", caption: "The flat-top smash — jalapeños, onion straws, and fries." },
  { src: "/images/community-long-table.png", alt: "Guests around a long table", caption: "The long table — birthdays, reunions, and one more round." },
  { src: "/images/cocktail-green-cup.png", alt: "Green cocktail in a Finnegan's Wake cup", caption: "Holiday green over crushed ice — St. Patrick's in a cup." },
  { src: "/images/finnsmas-room.png", alt: "Finnsmas decorations inside the pub", caption: "Finnsmas — every lit thing we own, hanging at once." },
  { src: "/images/dish-reuben.png", alt: "The Reuben sandwich with fries", caption: "The Reuben, properly — rye, kraut, and a stack of fries." },
  { src: "/images/banner-events.png", alt: "Christmas wrapped gifts hanging from the ceiling", caption: "Finnsmas night — gifts on the ceiling, a full room below." },
  { src: "/images/group-long-table.png", alt: "Friends at the long table", caption: "A whole table, a whole evening." },
  { src: "/images/three-at-bar.png", alt: "Three regulars at the bar", caption: "Three at the bar — the standing arrangement." },
  { src: "/images/holiday-drinks.png", alt: "Holiday drinks on the bar", caption: "Hot toddies and the December menu." },
  { src: "/images/storefront-st-patricks.png", alt: "Storefront on St. Patrick's Day", caption: "St. Patrick's morning, before the crowd." },
];

export default function GalleryPage() {
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
        <span className="eyebrow center">A Look Inside</span>
        <h1>The <em>Place</em>, The People.</h1>
        <p>A familiar amber light, the back patio in July, and the bar after closing — twenty years of evenings, in pictures.</p>
      </section>

      <Breadcrumbs trail={[{ label: "Gallery" }]} />

      <section className="gallery">
        <Gallery photos={PHOTOS} />

        <div className="featured-foot reveal" style={{ marginTop: 64 }}>
          <a
            href="https://www.instagram.com/finneganssgf/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Follow @finneganssgf on Instagram
          </a>
        </div>
      </section>

      <Footer />
      <Reveal />
    </>
  );
}
