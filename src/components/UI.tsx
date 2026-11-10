import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  House,
  KeyRound,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import type { ReactNode } from "react";
export function Button({
  children,
  to = "/contact",
  secondary = false,
  className = "",
}: {
  children: ReactNode;
  to?: string;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      className={`button ${secondary ? "button-secondary" : ""} ${className}`}
      to={to}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function TextLink({
  children,
  to,
}: {
  children: ReactNode;
  to: string;
}) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function Mark({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      to="/"
      className={`brand ${footer ? "brand-footer" : ""}`}
      aria-label="Bahia Keys — Accueil"
    >
      <img src="/media/bahia-monogram.webp?v=2" width="76" height="50" alt="" />
      <span>
        BAHIA KEYS<small>CONCIERGERIE À ORAN</small>
      </span>
    </Link>
  );
}
export function ServiceIcon({ name }: { name: string }) {
  const Icon =
    name === "home"
      ? House
      : name === "key"
        ? KeyRound
        : name === "sparkles"
          ? Sparkles
          : ShieldCheck;
  return <Icon strokeWidth={1.25} size={30} aria-hidden="true" />;
}
export function Photo({
  name = "panorama",
  className = "",
  eager = false,
}: {
  name?: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      className={className}
      src={`/media/oran-${name}.webp`}
      srcSet={`/media/oran-${name}-small.webp 850w, /media/oran-${name}.webp 1920w`}
      sizes="(max-width: 760px) 100vw, 65vw"
      width="1920"
      height={name === "panorama" ? 1023 : 1129}
      alt={
        name === "panorama"
          ? "La chapelle de Santa Cruz dominant la baie et la ville d’Oran"
          : "La ville et le port d’Oran vus depuis les hauteurs de Santa Cruz"
      }
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
    />
  );
}
export function CloseSection() {
  return (
    <section className="closing">
      <div className="container closing-inner">
        <span className="small-location">Oran, Algérie</span>
        <h2>
          Vous êtes loin,
          {" "}<br />
          <em>on est là.</em>
        </h2>
        <div>
          <p>
            Votre logement mérite une présence.
            {" "}<br />
            Parlons de celle dont vous avez besoin.
          </p>
          <Button>Parlons de votre bien</Button>
        </div>
      </div>
    </section>
  );
}
export function PageIntro({ title, text }: { title: string; text: string }) {
  return (
    <div className="page-intro container">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
