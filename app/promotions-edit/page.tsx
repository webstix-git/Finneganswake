import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import LogoutButton from "@/components/LogoutButton";
import Nav from "@/components/Nav";
import PromotionsEditor from "@/components/PromotionsEditor";
import Reveal from "@/components/Reveal";
import { isAdminSession } from "@/lib/adminAuth";
import { getPromotionsData } from "@/lib/content";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Edit Promotions — Finnegan's Wake",
  description: "Inline promotion editing for Finnegan's Wake.",
};

export default async function PromotionsEditPage() {
  const isAdmin = await isAdminSession();
  if (!isAdmin) redirect("/login?next=/promotions-edit");

  const promotionsData = await getPromotionsData();

  return (
    <>
      <Nav />
      <section
        className="page-hero"
        style={
          {
            "--page-hero-bg": "url('/images/banner-events.png')",
            "--page-hero-pos": "center 45%",
          } as React.CSSProperties
        }
      >
        <span className="eyebrow center">Admin Editing</span>
        <h1>Edit <em>Promotions</em></h1>
        <p>Make changes here, then view them on the public promotions page.</p>
      </section>

      <Breadcrumbs trail={[{ label: "Promotions Editor" }]} />

      <section className="events edit-preview">
        <div className="admin-edit-toolbar reveal">
          <Link href="/menu-edit" className="admin-mini-btn ghost light">
            Edit menu
          </Link>
          <LogoutButton />
        </div>

        <PromotionsEditor initialData={promotionsData} isAdmin />
      </section>

      <Footer />
      <Reveal />
    </>
  );
}
