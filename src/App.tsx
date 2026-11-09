import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import { Motion } from "./components/Motion";
import { Home } from "./Home";
import { Services, Offers, About, Contact, Legal, NotFound } from "./Pages";
import { pageMeta } from "./content";
export default function App() {
  const { pathname, search } = useLocation();
  const routePath =
    pathname.replace(/\/index\.html$/, "").replace(/\/$/, "") || "/";
  const first = useRef(true);
  useEffect(() => {
    const meta = pageMeta[routePath];
    document.title = `${meta?.title || "Page introuvable"} — Bahia Keys`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        meta?.description ||
          "Retrouvez Bahia Keys, conciergerie locative à Oran.",
      );
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", document.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta?.description || "");
    if (!first.current) {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main")?.focus({ preventScroll: true });
    }
    first.current = false;
  }, [pathname]);
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes location={{ pathname: routePath, search }}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/offres" element={<Offers />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/confidentialite" element={<Legal privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Motion />
    </>
  );
}
