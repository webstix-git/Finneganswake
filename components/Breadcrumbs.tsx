import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol className="crumbs-inner">
        <li>
          <Link href="/">Home</Link>
        </li>
        {trail.map((c, idx) => {
          const isLast = idx === trail.length - 1;
          return (
            <li key={`${c.label}-${idx}`} style={{ display: "contents" }}>
              <span className="crumbs-sep" aria-hidden>
                /
              </span>
              {isLast || !c.href ? (
                <span className="crumbs-current" aria-current="page">
                  {c.label}
                </span>
              ) : (
                <Link href={c.href}>{c.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
