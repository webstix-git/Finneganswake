"use client";

import { useState } from "react";
import EditableTitleText from "@/components/EditableTitleText";
import MenuItem from "@/components/MenuItem";
import type { EditableTitle, MenuData, MenuItemData } from "@/lib/content";

type Draft = {
  id?: string;
  sectionId: string;
  columnId: string;
  title: EditableTitle;
  desc: string;
  price: string;
};

const emptyTitle: EditableTitle = { before: "", emphasis: "", after: "" };

function blankDraft(data: MenuData): Draft {
  const firstSection = data.sections[0];
  const firstColumn = firstSection?.columns[0];

  return {
    sectionId: firstSection?.id ?? "",
    columnId: firstColumn?.id ?? "",
    title: emptyTitle,
    desc: "",
    price: "",
  };
}

function itemToDraft(item: MenuItemData, sectionId: string, columnId: string): Draft {
  return {
    id: item.id,
    sectionId,
    columnId,
    title: item.title,
    desc: item.desc,
    price: item.price,
  };
}

export default function MenuEditor({
  initialData,
  isAdmin,
}: {
  initialData: MenuData;
  isAdmin: boolean;
}) {
  const [data, setData] = useState(initialData);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const selectedSection = data.sections.find((section) => section.id === draft?.sectionId);
  const columns = selectedSection?.columns ?? [];

  async function saveDraft(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!draft) return;

    setSaving(true);
    setError("");

    const res = await fetch("/api/menu", {
      method: draft.id ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        draft.id
          ? { id: draft.id, item: draft }
          : { sectionId: draft.sectionId, columnId: draft.columnId, item: draft },
      ),
    });

    const next = await res.json();
    setSaving(false);

    if (!res.ok) {
      setError(next.error ?? "Unable to save menu item.");
      return;
    }

    setData(next);
    setDraft(null);
  }

  async function deleteItem(id: string) {
    if (!window.confirm("Delete this menu item?")) return;

    const res = await fetch("/api/menu", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const next = await res.json();
    if (res.ok) setData(next);
    else setError(next.error ?? "Unable to delete menu item.");
  }

  return (
    <>
      {data.sections.map((section, sectionIndex) => (
        <div className="menu-section" key={section.id}>
          <div className="menu-head reveal" style={{ marginBottom: section.id === "specials" ? 56 : 40 }}>
            <span className="eyebrow center" style={{ color: "var(--gold-soft)" }}>
              {section.eyebrow}
            </span>
            <h2 className="h-section">
              <EditableTitleText title={section.title} />
            </h2>
            {section.intro ? (
              <p style={{ fontFamily: "var(--display)", fontStyle: "italic", color: "rgba(244,236,216,.7)", fontSize: 18, marginTop: 18 }}>
                {section.intro}
              </p>
            ) : null}
            {isAdmin ? (
              <div className="admin-control-bar">
                <button type="button" className="admin-mini-btn" onClick={() => setDraft(blankDraft({ sections: [section] }))}>
                  Add item
                </button>
              </div>
            ) : null}
          </div>

          <div className="menu-cols">
            {section.columns.map((column) => (
              <div className="menu-col reveal" key={column.id}>
                <h4>
                  {column.heading} <span>{column.subheading}</span>
                </h4>
                {column.items.map((item) => (
                  <div className={isAdmin ? "admin-editable-wrap" : undefined} key={item.id}>
                    <MenuItem name={<EditableTitleText title={item.title} />} desc={item.desc} price={item.price} />
                    {isAdmin ? (
                      <div className="admin-floating-actions" aria-label={`Controls for ${item.title.emphasis || item.title.before}`}>
                        <button type="button" onClick={() => setDraft(itemToDraft(item, section.id, column.id))}>
                          Edit
                        </button>
                        <button type="button" onClick={() => deleteItem(item.id)}>
                          Delete
                        </button>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {section.note ? (
            <p
              className="note"
              style={{
                textAlign: "center",
                marginTop: 36,
                fontFamily: "var(--display)",
                fontStyle: "italic",
                color: "rgba(244,236,216,.65)",
              }}
            >
              {section.note}
            </p>
          ) : null}

          {isAdmin && sectionIndex === data.sections.length - 1 ? (
            <div className="admin-control-bar">
              <button type="button" className="admin-mini-btn" onClick={() => setDraft(blankDraft(data))}>
                Add new item
              </button>
            </div>
          ) : null}
        </div>
      ))}

      {draft ? (
        <div className="admin-modal" role="dialog" aria-modal="true" aria-label={draft.id ? "Edit menu item" : "Add menu item"}>
          <button className="admin-modal-backdrop" type="button" aria-label="Close editor" onClick={() => setDraft(null)} />
          <form className="admin-modal-card" onSubmit={saveDraft}>
            <div className="admin-modal-head">
              <h3>{draft.id ? "Edit Menu Item" : "Add Menu Item"}</h3>
              <button type="button" onClick={() => setDraft(null)} aria-label="Close editor">
                ×
              </button>
            </div>

            <div className="admin-form-grid">
              <label>
                Section
                <select
                  value={draft.sectionId}
                  disabled={Boolean(draft.id)}
                  onChange={(event) => {
                    const section = data.sections.find((s) => s.id === event.target.value);
                    setDraft({ ...draft, sectionId: event.target.value, columnId: section?.columns[0]?.id ?? "" });
                  }}
                >
                  {data.sections.map((section) => (
                    <option key={section.id} value={section.id}>
                      {section.title.emphasis || section.title.before}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Column
                <select value={draft.columnId} disabled={Boolean(draft.id)} onChange={(event) => setDraft({ ...draft, columnId: event.target.value })}>
                  {columns.map((column) => (
                    <option key={column.id} value={column.id}>
                      {column.heading}
                    </option>
                  ))}
                </select>
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
                Price
                <input value={draft.price} onChange={(event) => setDraft({ ...draft, price: event.target.value })} />
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
                {saving ? "Saving..." : "Save item"}
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
