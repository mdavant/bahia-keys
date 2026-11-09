import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Download,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import {
  PageIntro,
  Photo,
  Button,
  CloseSection,
  ServiceIcon,
} from "./components/UI";
import { OfferCards } from "./components/OfferCards";
import { brand, services, faqs } from "./content";
export function Services() {
  return (
    <>
      <PageIntro
        title="Le soin de votre bien, à chaque étape."
        text="Notre conciergerie organise le quotidien de votre location courte durée à Oran. Découvrez ce que nous pouvons prendre en charge avec vous."
      />
      <div className="container services-detail">
        {services.map((s, i) => (
          <section className="detail-row" key={s.short}>
            <div className="detail-title">
              <ServiceIcon name={s.icon} />
              <h2>{s.title}</h2>
            </div>
            <div className="detail-body">
              <p>{s.detail}</p>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>
                    <Check size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {i === 1 && (
              <div className="detail-image">
                <Photo name="city" />
              </div>
            )}
          </section>
        ))}
      </div>
      <section className="container tailored">
        <h2>Votre logement a ses particularités.</h2>
        <p>
          Les services complémentaires et les modalités d’intervention sont
          définis ensemble, selon votre bien et la formule retenue.
        </p>
        <Button>Parlons de votre bien</Button>
      </section>
      <CloseSection />
    </>
  );
}
export function Offers() {
  return (
    <>
      <PageIntro
        title="La bonne formule commence par vous."
        text="Ce que vous souhaitez déléguer, le suivi dont vous avez besoin et les particularités de votre logement guident notre proposition."
      />
      <section className="container offers-page">
        <OfferCards />
        <p className="offer-disclaimer">
          Ces formules présentent deux niveaux d’accompagnement. Le détail des
          prestations, les éventuels services complémentaires et la commission
          sont précisés dans votre proposition avant tout engagement.
        </p>
      </section>
      <section className="container faq-section">
        <h2>
          Vos questions,
          <br />
          <em>avant de nous confier les clés.</em>
        </h2>
        <div className="faq-list">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <ChevronDown size={18} />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <CloseSection />
    </>
  );
}
export function About() {
  return (
    <>
      <PageIntro
        title="La proximité ne se mesure pas en kilomètres."
        text="Bahia Keys est née d’une conviction : un propriétaire doit pouvoir compter sur une présence locale pour son bien, où qu’il vive."
      />
      <section className="about-image container">
        <Photo eager />
        <div>
          <h2>
            Vous êtes loin,
            <br />
            <em>on est là.</em>
          </h2>
        </div>
      </section>
      <section className="container about-story">
        <h2>
          Une conciergerie
          <br />
          ancrée à <em>Oran.</em>
        </h2>
        <div>
          <p className="lead">
            Notre rôle : faire le lien entre votre logement, vos voyageurs et
            vous.
          </p>
          <p>
            Nous accompagnons les propriétaires dans la gestion de leurs
            locations courte durée, avec une attention portée à l’accueil, à la
            préparation des logements et au suivi sur place.
          </p>
          <p>
            La qualité de service se construit dans les gestes du quotidien :
            transmettre une information claire, préparer une arrivée, vérifier
            un logement et vous tenir informé.
          </p>
        </div>
      </section>
      <section className="values-section">
        <div className="container">
          <h2>Ce qui guide notre travail.</h2>
          <div className="values-grid">
            <article>
              <h3>La présence.</h3>
              <p>
                Un relais à Oran pour assurer la coordination opérationnelle de
                votre location.
              </p>
            </article>
            <article>
              <h3>Le soin.</h3>
              <p>
                Une attention portée au logement et aux conditions d’accueil des
                voyageurs.
              </p>
            </article>
            <article>
              <h3>Le dialogue.</h3>
              <p>
                Des échanges avec vous pour définir les prestations et garder le
                lien avec votre bien.
              </p>
            </article>
          </div>
        </div>
      </section>
      <CloseSection />
    </>
  );
}
type Fields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  property: string;
  district: string;
  message: string;
  consent: boolean;
};
const empty: Fields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  property: "",
  district: "",
  message: "",
  consent: false,
};
export function Contact() {
  const [params] = useSearchParams();
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<
    "idle" | "loading" | "success" | "error" | "prepared"
  >("idle");
  const [serverError, setServerError] = useState("");
  const [offer, setOffer] = useState("");
  const [interactive, setInteractive] = useState(false);
  useEffect(() => {
    setInteractive(true);
    setOffer(
      ["Standard", "Premium"].includes(params.get("formule") || "")
        ? params.get("formule") || ""
        : "",
    );
  }, [params]);
  const set = (key: keyof Fields, value: string | boolean) => {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
    if (state !== "loading") setState("idle");
  };
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    for (const [key, label] of [
      ["firstName", "votre prénom"],
      ["lastName", "votre nom"],
      ["district", "le quartier du logement"],
      ["property", "le type de logement"],
    ] as const)
      if (!fields[key].trim()) next[key] = `Indiquez ${label}.`;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      next.email = "Indiquez une adresse email valide.";
    if (fields.phone && !/^[+\d\s().-]{7,25}$/.test(fields.phone))
      next.phone = "Vérifiez le numéro de téléphone (7 à 25 caractères).";
    if (!fields.consent)
      next.consent =
        "Veuillez accepter l’utilisation de vos informations pour cette demande.";
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(Object.keys(next)[0])?.focus();
      return;
    }
    if (!brand.endpoint) {
      setState("prepared");
      return;
    }
    setState("loading");
    try {
      const response = await fetch(brand.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, offer, source: "bahia-keys" }),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) throw new Error("send");
      setState("success");
      setFields(empty);
    } catch {
      setServerError(
        "Votre demande n’a pas pu être envoyée. Vos informations sont conservées dans ce formulaire. Réessayez dans un instant.",
      );
      setState("error");
    }
  };
  const download = () => {
    const text = `DEMANDE PROPRIÉTAIRE — BAHIA KEYS\n\nPrénom : ${fields.firstName}\nNom : ${fields.lastName}\nEmail : ${fields.email}\nTéléphone : ${fields.phone}\nLogement : ${fields.property}\nQuartier : ${fields.district}\nFormule : ${offer || "À définir"}\n\n${fields.message}\n\nCe document a été préparé localement. Aucune demande n’a été transmise.`;
    const url = URL.createObjectURL(
      new Blob([text], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "mon-projet-bahia-keys.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  const input = (
    key: keyof Fields,
    label: string,
    type = "text",
    autoComplete?: string,
  ) => (
    <div className="field">
      <label htmlFor={key}>
        {label}
        {["firstName", "lastName", "email", "district"].includes(key) && (
          <span> *</span>
        )}
      </label>
      <input
        id={key}
        name={key}
        type={type}
        autoComplete={autoComplete}
        value={String(fields[key])}
        onChange={(e) => set(key, e.target.value)}
        aria-invalid={!!errors[key]}
        aria-describedby={errors[key] ? `${key}-error` : undefined}
        maxLength={key === "email" ? 254 : 120}
      />
      {errors[key] && (
        <span className="field-error" id={`${key}-error`}>
          {errors[key]}
        </span>
      )}
    </div>
  );
  return (
    <>
      <div className="contact-layout container">
        <aside className="contact-intro">
          <h1>
            Parlons de
            <br />
            <em>votre bien.</em>
          </h1>
          <p>
            Un appartement à Oran, un projet de location, une question ?
            Présentez-nous votre logement et ce que vous souhaitez déléguer.
          </p>
          <div className="contact-location">
            <MapPin size={21} />
            <div>
              <strong>Une équipe locale</strong>
              <span>Oran, Algérie</span>
            </div>
          </div>
          {brand.email && (
            <a className="contact-line" href={`mailto:${brand.email}`}>
              <Mail size={18} />
              {brand.email}
            </a>
          )}
          {brand.phone && (
            <a className="contact-line" href={`tel:${brand.phone}`}>
              <Phone size={18} />
              {brand.phone}
            </a>
          )}
          {brand.whatsapp ? (
            <a
              className="text-link"
              href={`https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={20} />
              Échanger sur WhatsApp
              <ArrowUpRight size={18} />
            </a>
          ) : (
            <p className="contact-availability">
              Le contact WhatsApp sera disponible à l’ouverture du service.
            </p>
          )}
          <div className="contact-photo">
            <Photo name="city" />
          </div>
        </aside>
        <div className="form-wrap">
          <h2>Votre projet commence ici.</h2>
          <p>Les champs marqués d’un astérisque sont obligatoires.</p>
          {offer && (
            <div className="selected-offer">
              Votre intérêt : <strong>Bahia Keys {offer}</strong>
            </div>
          )}
          {!brand.endpoint && (
            <div className="form-notice">
              <strong>
                Les demandes en ligne ne sont pas encore ouvertes.
              </strong>
              <p>
                Vous pouvez préparer et télécharger votre projet. Aucune
                information ne sera envoyée.
              </p>
            </div>
          )}
          <noscript>
            <p>
              Activez JavaScript pour préparer une demande avec ce formulaire.
            </p>
          </noscript>
          <form onSubmit={submit} noValidate aria-busy={state === "loading"}>
            <div className="form-grid">
              {input("firstName", "Prénom", "text", "given-name")}
              {input("lastName", "Nom", "text", "family-name")}
              {input("email", "Email", "email", "email")}
              {input("phone", "Téléphone (facultatif)", "tel", "tel")}
              <div className="field">
                <label htmlFor="property">Type de logement *</label>
                <select
                  id="property"
                  name="property"
                  value={fields.property}
                  onChange={(e) => set("property", e.target.value)}
                  aria-invalid={!!errors.property}
                  aria-describedby={
                    errors.property ? "property-error" : undefined
                  }
                >
                  <option value="">Sélectionnez votre logement</option>
                  <option>Studio</option>
                  <option>Appartement</option>
                  <option>Maison ou villa</option>
                  <option>Autre logement</option>
                </select>
                {errors.property && (
                  <span className="field-error" id="property-error">
                    {errors.property}
                  </span>
                )}
              </div>
              {input("district", "Quartier du logement")}
            </div>
            <div className="field">
              <label htmlFor="message">Votre projet (facultatif)</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={3000}
                value={fields.message}
                placeholder="Votre logement, vos attentes, ce que vous aimeriez nous confier…"
                onChange={(e) => set("message", e.target.value)}
              />
            </div>
            <div className="consent">
              <input
                type="checkbox"
                id="consent"
                checked={fields.consent}
                onChange={(e) => set("consent", e.target.checked)}
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? "consent-error" : undefined}
              />
              <label htmlFor="consent">
                J’accepte l’utilisation de mes informations pour traiter ma
                demande, selon la{" "}
                <Link to="/confidentialite">politique de confidentialité</Link>.
                *
              </label>
            </div>
            {errors.consent && (
              <span className="field-error" id="consent-error">
                {errors.consent}
              </span>
            )}
            <button
              type="submit"
              className="button"
              disabled={state === "loading" || !interactive}
            >
              {state === "loading"
                ? "Envoi en cours…"
                : brand.endpoint
                  ? "Envoyer ma demande"
                  : "Préparer ma demande"}
              <ArrowUpRight size={18} />
            </button>
            <div className="form-feedback" role="status" aria-live="polite">
              {state === "success" && (
                <p className="success">
                  <Check size={20} />
                  Votre demande a bien été envoyée. Merci de nous avoir présenté
                  votre projet.
                </p>
              )}
              {state === "error" && (
                <p className="field-error">{serverError}</p>
              )}
              {state === "prepared" && (
                <div>
                  <p>
                    Votre projet est prêt à télécharger. Il n’a pas été envoyé à
                    Bahia Keys.
                  </p>
                  <button
                    type="button"
                    className="text-link"
                    onClick={download}
                  >
                    <Download size={18} />
                    Télécharger ma demande
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export function Legal({ privacy = false }: { privacy?: boolean }) {
  return (
    <div className="legal container">
      <h1>{privacy ? "Confidentialité" : "Mentions légales & crédits"}</h1>
      {privacy ? (
        <>
          <h2>Le formulaire de contact</h2>
          <p>
            Lorsque l’envoi est désactivé, les informations saisies restent dans
            votre navigateur pendant votre visite. La préparation d’une demande
            produit un fichier texte sur votre appareil et ne transmet aucune
            donnée à Bahia Keys.
          </p>
          <p>
            Lorsque le service d’envoi sera activé, les coordonnées et
            informations de votre projet serviront à traiter votre demande. Le
            responsable du traitement, le prestataire d’envoi, les durées de
            conservation et le contact pour exercer vos droits devront être
            précisés avant l’ouverture des demandes.
          </p>
          <h2>Votre navigation</h2>
          <p>
            Ce site n’intègre aucun outil publicitaire ni mesure d’audience. Les
            polices et photographies sont hébergées avec le site. Les liens vers
            des services externes vous conduisent vers leurs propres sites et
            politiques.
          </p>
          <h2>État de cette page</h2>
          <p>
            Cette page décrit la version de présentation du site. Elle doit être
            complétée avec les informations définitives de l’éditeur avant sa
            mise en ligne commerciale.
          </p>
        </>
      ) : (
        <>
          <h2>Bahia Keys</h2>
          <p>
            Site de présentation d’une conciergerie locative à Oran, Algérie.
            Conception et développement : NetVision.
          </p>
          <p>
            Les informations légales de l’éditeur, le responsable de
            publication, les coordonnées professionnelles et les informations de
            l’hébergeur doivent être complétés avant publication commerciale.
            Cette version ne constitue pas une notice légale définitive.
          </p>
          <h2>Photographies d’Oran</h2>
          <p>
            Photographies de Bernard Gagnon, prises le 22 octobre 2025 et
            diffusées sous licence{" "}
            <a href="https://creativecommons.org/licenses/by/4.0/">
              Creative Commons Attribution 4.0 International
            </a>
            . Les fichiers ont été redimensionnés, recadrés à l’affichage et
            convertis en WebP.
          </p>
          <ul>
            <li>
              <a href="https://commons.wikimedia.org/wiki/File:Vue_d%27Oran_01.jpg">
                Vue d’Oran 01 — panorama depuis Santa Cruz
              </a>
            </li>
            <li>
              <a href="https://commons.wikimedia.org/wiki/File:Vue_d%27Oran_03.jpg">
                Vue d’Oran 03 — ville et port
              </a>
            </li>
          </ul>
          <h2>Identité et typographies</h2>
          <p>
            Monogramme BK fourni par le client, utilisé sans redessin. Playfair
            Display et Inter sont distribuées sous licence SIL Open Font
            License, disponible avec les fichiers du site.
          </p>
        </>
      )}
      <Button to="/contact">Parlons de votre bien</Button>
    </div>
  );
}
export function NotFound() {
  return (
    <section className="not-found container">
      <span>404</span>
      <h1>
        Cette page a pris
        <br />
        une autre direction.
      </h1>
      <p>
        Retrouvez nos services ou revenez à l’accueil pour poursuivre votre
        visite.
      </p>
      <Button to="/">Revenir à l’accueil</Button>
    </section>
  );
}
