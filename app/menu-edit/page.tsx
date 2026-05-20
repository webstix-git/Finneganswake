import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import LogoutButton from "@/components/LogoutButton";
import MenuEditor from "@/components/MenuEditor";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { isAdminSession } from "@/lib/adminAuth";
import { getMenuData } from "@/lib/content";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Edit Menu — Finnegan's Wake",
  description: "Inline menu editing for Finnegan's Wake.",
};

export default async function MenuEditPage() {
  const isAdmin = await isAdminSession();
  if (!isAdmin) redirect("/login?next=/menu-edit");

  const menuData = await getMenuData();

  return (
    <>
      <Nav />
      <section
        className="page-hero"
        style={
          {
            "--page-hero-bg": "url('/images/banner-bar.png')",
            "--page-hero-pos": "center 55%",
          } as React.CSSProperties
        }
      >
        <span className="eyebrow center">Admin Editing</span>
        <h1>Edit The <em>Menu</em></h1>
        <p>Make changes here, then view them on the public menu page.</p>
      </section>

      <Breadcrumbs trail={[{ label: "Menu Editor" }]} />

      <section className="menu-preview edit-preview" style={{ paddingTop: 80 }}>
        <div className="menu-bg" />
        <div className="menu-inner">
          <div className="admin-edit-toolbar reveal">
            <Link href="/promotions-edit" className="admin-mini-btn ghost light">
              Edit promotions
            </Link>
            <LogoutButton />
          </div>

          <MenuEditor initialData={menuData} isAdmin />
        </div>
      </section>

      <Footer />
      <Reveal />
    </>
  );
}
