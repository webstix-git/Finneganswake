import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login — Finnegan's Wake",
  description: "Password login for inline content editing.",
};

export default function LoginPage() {
  return (
    <>
      <Nav />
      <div className="nav-spacer" />
      <Breadcrumbs trail={[{ label: "Login" }]} />
      <section className="login-section">
        <LoginForm />
      </section>
      <Footer />
      <Reveal />
    </>
  );
}
