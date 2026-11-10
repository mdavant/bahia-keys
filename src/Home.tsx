import { useState } from "react";
import { ArrowDown, ArrowUpRight, MapPin, Plus } from "lucide-react";
import {
  Button,
  TextLink,
  Photo,
  ServiceIcon,
  CloseSection,
} from "./components/UI";
import { KeySculpture } from "./components/Motion";
import { OfferCards } from "./components/OfferCards";
import { services, steps } from "./content";
export function Home() {
  const [step, setStep] = useState(0);
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <div className="hero-category">
            <span />
            Conciergerie locative à Oran
          </div>
          <h1>
            <span className="hero-line">
              <span>Votre bien à Oran,</span>
            </span>
            <span className="hero-line">
              <span>entre de</span>
            </span>
            <span className="hero-line">
              <span>bonnes mains.</span>
            </span>
          </h1>
          <p>
            Confiez votre location courte durée à une équipe locale. Nous
            prenons soin de votre logement et de vos voyageurs, vous gardez
            l’esprit libre.
          </p>
          <div className="hero-actions">
            <Button>Confier mon bien</Button>
            <TextLink to="/services">Nos services</TextLink>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>
              Une présence sur place.
              {" "}<br />
              Un lien, même à distance.
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <Photo eager />
          </div>
          <span className="location-tag">
            <MapPin size={14} /> La baie d’Oran, depuis Santa Cruz
          </span>
          <div className="hero-stamp">
            <span>Votre bien.</span>
            <strong>
              Notre
              {" "}<br />
              attention.
            </strong>
            <ArrowUpRight size={23} />
          </div>
        </div>
        <a className="scroll-cue" href="#introduction">
          <ArrowDown size={16} /> L’esprit Bahia Keys
        </a>
      </section>
      <section className="intro container" id="introduction">
        <div className="intro-heading">
          <h2>
            Votre tranquillité
            {" "}<br />
            commence <em>ici.</em>
          </h2>
        </div>
        <div className="intro-copy">
          <p className="lead">
            Un logement à Oran.
            {" "}<br />
            Une vie, parfois ailleurs.
          </p>
          <p>
            Gérer une location à distance demande plus qu’une annonce en ligne.
            Il faut une présence, du soin et quelqu’un sur qui compter au
            quotidien.
          </p>
          <p>
            Bahia Keys fait le lien entre vous, votre bien et vos voyageurs. Une
            conciergerie locale, attentive à ce qui compte pour vous.
          </p>
          <TextLink to="/a-propos">Rencontrer Bahia Keys</TextLink>
        </div>
      </section>
      <section className="services-section">
        <div className="container">
          <div className="section-heading">
            <h2>
              Tout ce que vous
              {" "}<br />
              pouvez nous <em>confier.</em>
            </h2>
            <p>
              De la première annonce au prochain séjour,
              {" "}<br />
              chaque étape mérite la même attention.
            </p>
          </div>
          <div className="service-list">
            {services.map((s) => (
              <details className="service-disclosure" key={s.short}>
                <summary className="service-row">
                <ServiceIcon name={s.icon} />
                <h3>{s.short}</h3>
                <p>{s.text}</p>
                <span className="service-open">
                  <Plus size={20} aria-hidden="true" />
                </span>
                </summary>
                <div className="service-detail">
                  <p>{s.detail}</p>
                  <ul>{s.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </details>
            ))}
          </div>
          <TextLink to="/services">Voir le détail des services</TextLink>
        </div>
      </section>
      <section className="experience">
        <div className="container experience-grid">
          <div className="experience-photo">
            <Photo name="city" />
          </div>
          <div className="experience-content">
            <h2>
              À distance,
              {" "}<br />
              mais jamais
              {" "}<br />
              <em>déconnectés.</em>
            </h2>
            <p>
              Une arrivée à coordonner. Un logement à préparer. Un détail à
              vérifier. Nous sommes sur place pour prendre le relais.
            </p>
            <p>
              Vous gardez votre bien. Nous en prenons soin, avec une attention
              qui se voit dans chaque séjour.
            </p>
            <TextLink to="/a-propos">Notre façon d’accompagner</TextLink>
            <KeySculpture />
          </div>
        </div>
      </section>
      <section className="process container">
        <div className="section-heading">
          <h2>
            Une relation simple,
            {" "}<br />
            dès le <em>premier échange.</em>
          </h2>
          <p>
            Quatre étapes pour mettre en place
            {" "}<br />
            une gestion qui vous correspond.
          </p>
        </div>
        <div className="process-grid">
          <div
            className="step-list"
            aria-label="Les étapes de votre accompagnement"
          >
            {steps.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setStep(i)}
                className={step === i ? "selected" : ""}
                aria-expanded={step === i}
                aria-controls="step-panel"
              >
                <span>0{i + 1}</span>
                {s.label}
                <ArrowUpRight size={20} />
              </button>
            ))}
          </div>
          <div className="step-panel" id="step-panel" aria-live="polite">
            <span className="step-number" aria-hidden="true">
              0{step + 1}
            </span>
            <div key={step} className="step-content">
              <h3>{steps[step].title}</h3>
              <p>{steps[step].text}</p>
              <TextLink to="/contact">Parlons de votre bien</TextLink>
            </div>
          </div>
        </div>
      </section>
      <section className="offers-section">
        <div className="container">
          <div className="section-heading">
            <h2>
              Votre bien.
              {" "}<br />
              Votre façon de <em>déléguer.</em>
            </h2>
            <div>
              <p>
                Deux formules à construire autour de vos besoins.
                {" "}<br />
                Un même soin porté à votre logement.
              </p>
              <TextLink to="/offres">Comparer nos offres</TextLink>
            </div>
          </div>
          <OfferCards />
        </div>
      </section>
      <section className="oran-section">
        <Photo />
        <div className="oran-shade" />
        <div className="container oran-content">
          <MapPin size={24} strokeWidth={1.2} />
          <h2>
            Oran, une ville.
            {" "}<br />
            <em>Notre point d’ancrage.</em>
          </h2>
          <p>
            De Santa Cruz au front de mer, une ville ouverte sur la
            Méditerranée. C’est ici que nous accompagnons votre logement et
            accueillons ses voyageurs.
          </p>
          <TextLink to="/a-propos">Une conciergerie d’ici</TextLink>
        </div>
      </section>
      <CloseSection />
    </>
  );
}
