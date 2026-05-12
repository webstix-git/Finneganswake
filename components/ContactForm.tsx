"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // swallow — show the optimistic confirmation regardless for now
    }
    setSent(true);
  };

  if (sent) {
    return (
      <div className="reveal" style={{ paddingTop: 12 }}>
        <p style={{ fontFamily: "var(--display)", fontStyle: "italic", fontSize: 22, color: "var(--green)", lineHeight: 1.55 }}>
          Thanks for the note — we&apos;ll be in touch within a day or two.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form reveal" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Your Name</label>
        <input id="name" name="name" type="text" required placeholder="First & last" />
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" />
      </div>

      <div className="field">
        <label htmlFor="phone">Phone (optional)</label>
        <input id="phone" name="phone" type="tel" placeholder="(417) 555-0100" />
      </div>

      <div className="field">
        <label htmlFor="topic">What&apos;s This About?</label>
        <select id="topic" name="topic" defaultValue="Private event or large group">
          <option>Private event or large group</option>
          <option>Reservation question</option>
          <option>Menu &amp; dietary inquiry</option>
          <option>Charity / community partnership</option>
          <option>Press &amp; media</option>
          <option>Just saying hello</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell us a bit about what you're planning…" required />
      </div>

      <div>
        <button type="submit" className="btn btn-gold">Send Note</button>
      </div>
    </form>
  );
}
