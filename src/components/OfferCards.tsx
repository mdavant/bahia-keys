import { ArrowUpRight, KeyRound, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
export function OfferCards() {
  return (
    <div className="offer-grid">
      {["Standard", "Premium"].map((name, i) => (
        <article className={`offer-card ${i ? "premium" : ""}`} key={name}>
          <div className="offer-top">
            {i ? (
              <Sparkles strokeWidth={1.2} />
            ) : (
              <KeyRound strokeWidth={1.2} />
            )}
            <span>BAHIA KEYS</span>
          </div>
          <h3>{name}</h3>
          <p>
            {i
              ? "Pour aller plus loin dans l’accompagnement de votre bien."
              : "Pour organiser la gestion quotidienne de votre location."}
          </p>
          <div className="offer-scope">
            <span>
              {i
                ? "Un suivi à approfondir ensemble"
                : "Les besoins essentiels à définir"}
            </span>
            <p>
              {i
                ? "Échangeons sur vos attentes de suivi et les services complémentaires adaptés à votre logement."
                : "Définissons la gestion des annonces, l’accueil et la préparation dont votre logement a besoin."}
            </p>
          </div>
          <div className="offer-price">
            Une proposition sur mesure
            <small>Prestations et commission définies après échange.</small>
          </div>
          <Link className="offer-link" to={`/contact?formule=${name}`}>
            Échanger sur {name}
            <ArrowUpRight size={20} />
          </Link>
        </article>
      ))}
    </div>
  );
}
