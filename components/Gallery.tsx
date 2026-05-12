"use client";

import { useCallback, useEffect, useState } from "react";

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

export default function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const go = useCallback(
    (dir: -1 | 1) => {
      setOpenIndex((i) => {
        if (i === null) return i;
        const n = photos.length;
        return (i + dir + n) % n;
      });
    },
    [photos.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, close, go]);

  const active = openIndex !== null ? photos[openIndex] : null;

  return (
    <>
      <div className="gallery-wall reveal">
        {photos.map((p, i) => (
          <button
            key={p.src + i}
            type="button"
            className="gallery-tile"
            onClick={() => setOpenIndex(i)}
            aria-label={`Open photo: ${p.alt}`}
          >
            <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
            {p.caption ? <span className="gallery-caption">{p.caption}</span> : null}
          </button>
        ))}
      </div>

      {active && openIndex !== null ? (
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
          <button
            type="button"
            className="home-gallery-lightbox-close"
            onClick={close}
            aria-label="Close"
          >
            ×
          </button>
          <div className="home-gallery-lightbox-inner">
            <button
              type="button"
              className="home-gallery-lightbox-prev"
              onClick={() => go(-1)}
              aria-label="Previous image"
            >
              ‹
            </button>
            <div className="home-gallery-lightbox-figure">
              <img src={active.src} alt={active.alt} />
            </div>
            <button
              type="button"
              className="home-gallery-lightbox-next"
              onClick={() => go(1)}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
