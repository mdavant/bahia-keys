import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, MapPin } from "lucide-react";
import { navigation, brand } from "../content";
import { Mark, Button } from "./UI";
export function Header() {
  const [open, setOpen] = useState(false);
  const modal = useRef<HTMLDialogElement>(null);
  const location = useLocation();
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    modal.current?.close();
  }, [location.pathname]);
  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <header className="header">
        <div className="container header-inner">
          <Mark />
          <nav className="desktop-nav" aria-label="Navigation principale">
            {navigation.map(([url, label]) => (
              <NavLink key={url} to={url} end>
                {label}
              </NavLink>
            ))}
          </nav>
          <Button className="header-cta">Confier mon bien</Button>
          <button
            className="menu-trigger icon-button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            ref={trigger}
            onClick={() => {
              modal.current?.showModal();
              setOpen(true);
              document.body.style.overflow = "hidden";
            }}
          >
            <Menu />
          </button>
        </div>
      </header>
      <dialog
        className="mobile-menu"
        id="mobile-navigation"
        ref={modal}
        onClose={() => {
          setOpen(false);
          document.body.style.overflow = "";
          trigger.current?.focus();
        }}
      >
        <div className="mobile-menu-top">
          <Mark />
          <button
            className="icon-button"
            onClick={() => modal.current?.close()}
            aria-label="Fermer le menu"
          >
            <X />
          </button>
        </div>
        <nav aria-label="Navigation mobile">
          {navigation.map(([url, label]) => (
            <NavLink key={url} to={url} end>
              {label}
              <ArrowUpRight aria-hidden="true" size={26} />
            </NavLink>
          ))}
        </nav>
        <p>
          Votre bien à Oran,
          <br />
          entre de bonnes mains.
        </p>
        <span className="mobile-menu-location">
          <MapPin size={16} /> Oran, Algérie
        </span>
      </dialog>
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Mark footer />
            <p>
              La conciergerie locative
              <br />
              qui garde le lien avec Oran.
            </p>
          </div>
          <nav aria-label="Navigation de pied de page">
            {navigation.slice(1).map(([url, label]) => (
              <Link key={url} to={url}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="footer-contact">
            <span>Présents à Oran.</span>
            <Link to="/contact">
              Parlons de votre projet <ArrowUpRight size={16} />
            </Link>
            {brand.email && <a href={`mailto:${brand.email}`}>{brand.email}</a>}
            {brand.instagram && (
              <a href={brand.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Bahia Keys</span>
          <div>
            <Link to="/mentions-legales">Mentions légales & crédits</Link>
            <Link to="/confidentialite">Confidentialité</Link>
          </div>
          <span>
            Conception par <strong>NetVision</strong>
          </span>
        </div>
        <p className="photo-credit">
          Photographies d’Oran :{" "}
          <a
            href="https://commons.wikimedia.org/wiki/User:Bgag"
            target="_blank"
            rel="noreferrer"
          >
            Bernard Gagnon
          </a>
          ,{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            CC BY 4.0
          </a>{" "}
          — recadrées et optimisées.
        </p>
      </div>
    </footer>
  );
}
