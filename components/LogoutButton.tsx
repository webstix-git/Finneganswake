"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  async function logout() {
    setSaving(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <button type="button" className="admin-mini-btn ghost light" onClick={logout} disabled={saving}>
      {saving ? "Logging out..." : "Logout"}
    </button>
  );
}
