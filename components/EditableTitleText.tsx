import type { EditableTitle } from "@/lib/content";

export default function EditableTitleText({ title }: { title: EditableTitle }) {
  return (
    <>
      {title.before}
      {title.before && title.emphasis ? " " : ""}
      {title.emphasis ? <em>{title.emphasis}</em> : null}
      {(title.before || title.emphasis) && title.after ? " " : ""}
      {title.after}
    </>
  );
}
