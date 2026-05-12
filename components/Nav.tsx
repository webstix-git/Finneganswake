"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import logoMark from "@/public/logo.png";

const LEFT = [
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Promotions & Events" },
  { href: "/gallery", label: "Gallery" },
];

const RIGHT = [
  { href: "/testimonials", label: "Reviews" },
  { href: "/about", label: "About" },
];

const ALL_LINKS = [...LEFT, ...RIGHT, { href: "/contact", label: "Find Us" }];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="nav-side left">
          <ul className="nav-links left">
            {LEFT.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={pathname === l.href ? "active" : ""}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`nav-toggle${mobileOpen ? " is-open" : ""}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <Link href="/" className="logo" aria-label="Finnegan's Wake — Home">
          <span className="logo-frame">
            <Image
              src={logoMark}
              alt="Finnegan's Wake — Springfield, Missouri · Est. 2006"
              width={200}
              height={200}
              priority
            />
          </span>
        </Link>

        <div className="nav-side right">
          <ul className="nav-links right">
            {RIGHT.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={pathname === l.href ? "active" : ""}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="btn btn-gold nav-reserve">
                Reserve Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`nav-mobile${mobileOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className="nav-mobile-backdrop"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        />
        <div className="nav-mobile-panel">
          <button
            type="button"
            className="nav-mobile-close"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            ×
          </button>
          <span className="nav-mobile-eyebrow">Finnegan&apos;s Wake</span>
          <ul className="nav-mobile-links">
            {ALL_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={pathname === l.href ? "active" : ""}
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="btn btn-gold nav-mobile-cta"
            onClick={() => setMobileOpen(false)}
          >
            Reserve Now
          </Link>
          <p className="nav-mobile-foot">
            305 South Avenue · Springfield, Missouri
            <br />
            <a href="tel:+14178691500">(417) 869-1500</a>
          </p>
        </div>
      </div>
    </>
  );
}
