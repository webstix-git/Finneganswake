"use client";

import { useRouter } from "next/navigation";

const FORM_ACTION =
  "https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/0717a6f0-6e4d-457d-bc0c-17f38fe0a4fb";

export default function ContactForm() {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      });
    } catch {
      // redirect to thank-you even if the request fails (e.g. network)
    }
    router.push("/thank-you");
  };

  return (
    <form
      className="contact-form reveal"
      action={FORM_ACTION}
      method="POST"
      onSubmit={onSubmit}
    >
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
