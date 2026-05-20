"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const PREVIEW_PHOTOS = [
  { alt: "Inside Finnegan's Wake bar with guests seated", src: "/images/gallery-bar-interior-new.png" },
  { alt: "Bangers and mash on the bar", src: "/images/dish-bangers.png" },
  { alt: "Bartender pouring a drink", src: "/images/bartender.png" },
  { alt: "Pool table and friends at the pub", src: "/images/pool-table-night.png" },
  { alt: "Trivia night at the pub", src: "/images/trivia-night.png" },
  { alt: "Corned beef and cabbage plate", src: "/images/dish-corned-beef.png" },
] as const;

export default function HomeGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const go = useCallback((dir: -1 | 1) => {
    setOpenIndex((i) => {
      if (i === null) return i;
      const n = PREVIEW_PHOTOS.length;
      return (i + dir + n) % n;
    });
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openIndex, close, go]);

  return (
    <section className="home-gallery-section" id="gallery">
      <div className="home-gallery-head reveal">
        <span className="eyebrow center">From The Room</span>
        <h2 className="h-section">
          A <em>Glimpse</em> Inside
        </h2>
      </div>

      <div className="home-gallery-grid">
        {PREVIEW_PHOTOS.map((p, i) => (
          <button
            key={p.src}
            type="button"
            className="home-gallery-thumb reveal"
            onClick={() => setOpenIndex(i)}
            aria-label={`Open photo: ${p.alt}`}
          >
            <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
          </button>
        ))}
      </div>

      <div className="featured-foot reveal" style={{ marginTop: 48 }}>
        <Link href="/gallery" className="btn btn-gold">
          View Full Gallery
        </Link>
      </div>

      {openIndex !== null && (
        <div
          className="home-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
        >
          <button
            type="button"
            className="home-gallery-lightbox-backdrop"
            onClick={close}
            aria-label="Close gallery"
          />
          <button type="button" className="home-gallery-lightbox-close" onClick={close} aria-label="Close">
            ×
          </button>
          <div className="home-gallery-lightbox-inner">
            <button type="button" className="home-gallery-lightbox-prev" onClick={() => go(-1)} aria-label="Previous image">
              ‹
            </button>
            <div className="home-gallery-lightbox-figure">
              <img src={PREVIEW_PHOTOS[openIndex].src} alt={PREVIEW_PHOTOS[openIndex].alt} />
            </div>
            <button type="button" className="home-gallery-lightbox-next" onClick={() => go(1)} aria-label="Next image">
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
