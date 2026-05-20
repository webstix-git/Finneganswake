"use client";

import { useState } from "react";
import EditableTitleText from "@/components/EditableTitleText";
import type { EditableTitle, PromotionData, PromotionsData } from "@/lib/content";

type Draft = Omit<PromotionData, "id"> & { id?: string };

const emptyTitle: EditableTitle = { before: "", emphasis: "", after: "" };

const blankDraft: Draft = {
  tag: "",
  title: emptyTitle,
  when: "",
  desc: "",
  statLabel: "",
  statValue: "",
  featured: false,
};

export default function PromotionsEditor({
  initialData,
  isAdmin,
}: {
  initialData: PromotionsData;
  isAdmin: boolean;
}) {
  const [data, setData] = useState(initialData);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function saveDraft(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!draft) return;

    setSaving(true);
    setError("");

    const res = await fetch("/api/promotions", {
      method: draft.id ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draft.id ? { id: draft.id, promotion: draft } : { promotion: draft }),
    });
    const next = await res.json();
    setSaving(false);

    if (!res.ok) {
      setError(next.error ?? "Unable to save promotion.");
      return;
    }

    setData(next);
    setDraft(null);
  }

  async function deletePromotion(id: string) {
    if (!window.confirm("Delete this promotion?")) return;

    const res = await fetch("/api/promotions", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const next = await res.json();
    if (res.ok) setData(next);
    else setError(next.error ?? "Unable to delete promotion.");
  }

  return (
    <>
      {isAdmin ? (
        <div className="admin-control-bar events-admin-bar">
          <button type="button" className="admin-mini-btn" onClick={() => setDraft(blankDraft)}>
            Add promotion
          </button>
        </div>
      ) : null}

      <div className="events-grid">
        {data.promotions.map((promotion) => (
          <article className={`event-card${promotion.featured ? " feature" : ""} reveal admin-card-wrap`} key={promotion.id}>
            <span className="event-tag">{promotion.tag}</span>
            <h3 className="event-title">
              <EditableTitleText title={promotion.title} />
            </h3>
            <p className="event-when">{promotion.when}</p>
            <p className="event-desc">{promotion.desc}</p>
            <div className="event-foot">
              <div className="stat">
                <strong>{promotion.statLabel}</strong>
                {promotion.statValue}
              </div>
              <span className="event-arrow">↗</span>
            </div>
            {isAdmin ? (
              <div className="admin-floating-actions card-actions" aria-label={`Controls for ${promotion.title.emphasis || promotion.title.before}`}>
                <button type="button" onClick={() => setDraft(promotion)}>
                  Edit
                </button>
                <button type="button" onClick={() => deletePromotion(promotion.id)}>
                  Delete
                </button>
              </div>
            ) : null}
          </article>
        ))}
      </div>

      {draft ? (
        <div className="admin-modal" role="dialog" aria-modal="true" aria-label={draft.id ? "Edit promotion" : "Add promotion"}>
          <button className="admin-modal-backdrop" type="button" aria-label="Close editor" onClick={() => setDraft(null)} />
          <form className="admin-modal-card" onSubmit={saveDraft}>
            <div className="admin-modal-head">
              <h3>{draft.id ? "Edit Promotion" : "Add Promotion"}</h3>
              <button type="button" onClick={() => setDraft(null)} aria-label="Close editor">
                ×
              </button>
            </div>

            <div className="admin-form-grid">
              <label>
                Tag
                <input value={draft.tag} onChange={(event) => setDraft({ ...draft, tag: event.target.value })} />
              </label>
              <label>
                When
                <input value={draft.when} onChange={(event) => setDraft({ ...draft, when: event.target.value })} />
              </label>
              <label>
                Title before italic
                <input value={draft.title.before} onChange={(event) => setDraft({ ...draft, title: { ...draft.title, before: event.target.value } })} />
              </label>
              <label>
                Italic title text
                <input value={draft.title.emphasis} onChange={(event) => setDraft({ ...draft, title: { ...draft.title, emphasis: event.target.value } })} />
              </label>
              <label>
                Title after italic
                <input value={draft.title.after} onChange={(event) => setDraft({ ...draft, title: { ...draft.title, after: event.target.value } })} />
              </label>
              <label>
                Stat label
                <input value={draft.statLabel} onChange={(event) => setDraft({ ...draft, statLabel: event.target.value })} />
              </label>
              <label>
                Stat value
                <input value={draft.statValue} onChange={(event) => setDraft({ ...draft, statValue: event.target.value })} />
              </label>
              <label className="admin-checkbox">
                <input type="checkbox" checked={Boolean(draft.featured)} onChange={(event) => setDraft({ ...draft, featured: event.target.checked })} />
                Featured card
              </label>
            </div>

            <label>
              Description
              <textarea value={draft.desc} onChange={(event) => setDraft({ ...draft, desc: event.target.value })} />
            </label>

            {error ? <p className="admin-error">{error}</p> : null}

            <div className="admin-modal-actions">
              <button type="button" className="admin-mini-btn ghost" onClick={() => setDraft(null)}>
                Cancel
              </button>
              <button type="submit" className="admin-mini-btn" disabled={saving}>
                {saving ? "Saving..." : "Save promotion"}
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
