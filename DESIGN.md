# Bahia Keys — système visuel

Kind: service. Mode : Persuade. Identité fournie, conservée.

## Direction

Ivoire #F8F5F0, sable #E6D6C6, beige rosé #D2B29C, moka #8B6A57, bleu profond #1F3B59. Texte #40352E et action #765540 pour assurer la lisibilité. Playfair Display pour les titres, Inter pour les contenus. Monogramme officiel raster recadré sans redessin.

## Composition

Hero en deux parties : promesse à gauche, baie réelle d'Oran à droite dans une arche architecturale. Le titre reste du texte. Les sections alternent composition éditoriale, liste de services, photo et fond bleu, étapes interactives, deux offres, panorama et slogan final. Les marges communes relient les sections sans imposer des hauteurs fixes susceptibles de couper le contenu.

```
LOGO                    NAVIGATION                   CONTACT
PROMESSE / ACTION       PHOTO D'ORAN EN ARCHE
INTRODUCTION            EXPLICATION DU RELAIS LOCAL
SERVICES EN LIGNES : ICÔNE / INTITULÉ / CONTENU / LIEN
PHOTO                   PRÉSENCE LOCALE + CLÉ EN RELIEF
ÉTAPES CLIQUABLES        DÉTAIL DE L'ÉTAPE
STANDARD                PREMIUM
PANORAMA ORAN + ANCRAGE LOCAL
SLOGAN                  CONTACT
```

## Tokens et interactions

Marges desktop fluides 24–88px, largeur maximale 1536px, sections 76–128px. Surfaces 16px, boutons arrondis. Easing cubic-bezier(.23,1,.32,1), feedback press 160ms, liens 180–200ms, menu 250ms. Entrée orchestrée GSAP, texte 1.05s avec décalage 80ms, image 1.3s. Une séquence de profondeur au défilement sur l'expérience : photographie et clé CSS 3D, aucun WebGL ni scroll détourné. Préférence reduced-motion prise en charge dès le montage. Contenu pré-rendu et visible sans JavaScript.

## Skills appliqués et arbitrages

- Anthropic frontend-design : sujet réel, plan puis réalisation, composition distincte, typographies prescrites conservées.
- UI UX Pro Max : recherche exécutée deux fois. Résultats de style (Liquid Glass/Glassmorphism) écartés car incompatibles avec le brief ; recommandations d'accessibilité et de feedback retenues.
- Emil Kowalski design engineering / animate : animations avec but explicite, entrée exceptionnelle, feedback court, hover conditionnel, contrôle natif pour dialog/details/select.
- Impeccable : références new-work et craft-floor ; chargeur indisponible faute de binaire Windows ARM64. Travail à partir du contexte client. Pas de tour de validation conceptuelle supplémentaire : le client a fixé l'identité et demandé de commencer immédiatement avec autonomie.
- Taste Skill : vérité des contenus, photos authentiques et crédits, alignements, cohérence des contrôles, contrôles navigateur. Ses règles de template à hauteurs fixes, palette aléatoire et coordonnées .example cèdent au brief explicite (composants sur mesure, responsive, marque validée, aucun faux contact). Le contrôle propriétaire sera tenté et son état consigné.

Voix : française, humaine et professionnelle, phrases concrètes, vocabulaire du logement, des voyageurs et de la présence à Oran. Aucun faux prix, rendement ou avis.
