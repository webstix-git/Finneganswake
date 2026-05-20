"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setSaving(false);
    if (!res.ok) {
      setError("That password did not work.");
      return;
    }

    const next = new URLSearchParams(window.location.search).get("next");
    router.push(next || "/menu-edit");
    router.refresh();
  }

  return (
    <form className="login-card" onSubmit={submit}>
      <span className="eyebrow center">Admin Login</span>
      <h1>Inline <em>Editing</em></h1>
      <p>Sign in to edit menu items and promotion cards directly on the public pages.</p>
      <label>
        Password
        <input
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </label>
      {error ? <p className="admin-error">{error}</p> : null}
      <button className="btn btn-gold" type="submit" disabled={saving}>
        {saving ? "Signing In" : "Sign In"}
      </button>
    </form>
  );
}
