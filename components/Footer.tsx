import Image from "next/image";
import Link from "next/link";
import logoMark from "@/public/logo.png";
import BackToTop from "@/components/BackToTop";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=305+South+Avenue+Springfield+MO+65806";

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.11a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconGoogle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.35 11.1H12v2.73h5.35c-.23 1.45-1.7 4.25-5.35 4.25-3.22 0-5.84-2.66-5.84-5.93 0-3.27 2.62-5.93 5.84-5.93 1.83 0 3.06.78 3.76 1.45l2.56-2.48A9.58 9.58 0 0 0 12 3C7.03 3 3 7.03 3 12s4.03 9 9 9c5.2 0 8.65-3.65 8.65-8.73 0-.59-.05-1.04-.3-1.17Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="foot-top">
          <div className="foot-brand">
            <Image
              className="foot-logo"
              src={logoMark}
              alt="Finnegan's Wake"
              width={220}
              height={220}
            />
            <p>
              Springfield&apos;s oldest Irish pub. Twenty years of really good food,
              familiar faces, and the longest-running trivia in town.
            </p>
            <div className="foot-socials">
              <a className="foot-soc" href="https://www.instagram.com/finneganssgf/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <IconInstagram className="foot-soc-icon" />
              </a>
              <a className="foot-soc" href="https://www.facebook.com/finneganssgf/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <IconFacebook className="foot-soc-icon" />
              </a>
              <a className="foot-soc" href="https://www.google.com/search?q=Finnegan%27s+Wake+Springfield+MO" aria-label="Google reviews" target="_blank" rel="noopener noreferrer">
                <IconGoogle className="foot-soc-icon" />
              </a>
            </div>
          </div>

          <div className="foot-col">
            <h5>Visit</h5>
            <ul>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Reservations</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Hours</h5>
            <div className="foot-hours">
              <span className="day">Mon</span>
              <span>Closed</span>
              <span className="day">Tue – Thu</span>
              <span>4 — 12</span>
              <span className="day">Fri – Sat</span>
              <span>4 — 2</span>
              <span className="day">Sun</span>
              <span>11 — 10</span>
            </div>
          </div>

          <div className="foot-col">
            <h5>Find Us</h5>
            <div className="foot-find">
              <a className="foot-find-row" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                <IconMapPin className="foot-find-icon" />
                <span className="foot-find-text">
                  <span className="foot-find-line">305 South Avenue</span>
                  <span className="foot-find-line">Springfield, MO 65806</span>
                </span>
              </a>
              <a className="foot-find-row" href="tel:+14178691500">
                <IconPhone className="foot-find-icon" />
                <span className="foot-find-text">(417) 869-1500</span>
              </a>
              <a className="foot-find-row" href="mailto:finneganssgf@gmail.com">
                <IconMail className="foot-find-icon" />
                <span className="foot-find-text">finneganssgf@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="foot-bot">
          <div className="foot-bot-copy">© 2026 Finnegan&apos;s Wake LLC. All rights reserved.</div>
          <div className="meta">
            <Link href="/sitemap">Sitemap</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}
