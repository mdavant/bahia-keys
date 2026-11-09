# Bahia Keys

Site de conciergerie locative à Oran, conçu pour un hébergement statique Hostinger. React, TypeScript, Vite, React Router, GSAP et CSS sur mesure. Les pages sont pré-rendues en HTML pendant le build : leur contenu ne dépend pas de JavaScript pour apparaître.

## Démarrer

Prérequis : Node.js 22+ et npm ou pnpm.

```sh
npm install
npm run dev
npm run build
node scripts/serve.mjs
```

Le serveur de développement utilise normalement `http://127.0.0.1:5173`. L'aperçu de production utilise `http://127.0.0.1:4173`. Arrêt : Ctrl+C. Le dossier à publier est **dist/**, généré par `npm run build`. Aucun serveur Node permanent n'est nécessaire sur Hostinger. `pnpm-lock.yaml` conserve les versions installées ; avec pnpm, utiliser `pnpm install --frozen-lockfile`.

Dans l'environnement Codex de création, npm n'est pas exposé dans PATH. Les commandes équivalentes sont :

```powershell
node node_modules/typescript/bin/tsc --noEmit
node node_modules/vite/bin/vite.js build
node scripts/prerender.mjs
node scripts/serve.mjs
```

## Organisation

- `src/content.ts` : marque, métadonnées, navigation, services, étapes et questions fréquentes.
- `src/Home.tsx` : les huit sections de l'accueil.
- `src/Pages.tsx` : services, offres, à propos, contact, mentions, confidentialité et 404.
- `src/components/` : header, menu mobile natif, footer, boutons, images, offres et animations.
- `src/styles.css` : tokens et styles responsive.
- `scripts/render.tsx` : pré-rendu, SEO par page, robots et sitemap.
- `public/.htaccess` : routage Apache/LiteSpeed et vraie page d'erreur 404.
- `ASSETS.md` : sources, auteurs et licences.
- `DESIGN.md` : système graphique et application des cinq skills demandés.
- `QA.md` : contrôles et limites de validation.

## Configuration avant publication

Copier `.env.example` vers `.env.production`, compléter les valeurs disponibles, puis reconstruire. Toutes les variables `VITE_` sont **publiques**, intégrées dans le JavaScript : ne jamais y placer un secret.

| Variable | Usage |
| --- | --- |
| `VITE_SITE_URL` | Domaine final HTTPS sans slash final. Active le sitemap, les URL canoniques, l'image Open Graph absolue et l'indexation. Vide : robots bloque l'indexation de cette préproduction. |
| `VITE_FORM_ENDPOINT` | Endpoint acceptant un POST JSON. Vide : préparation et téléchargement locaux uniquement. |
| `VITE_CONTACT_EMAIL` | Adresse de contact validée ; masquée si vide. |
| `VITE_CONTACT_PHONE` | Téléphone professionnel validé ; masqué si vide. |
| `VITE_WHATSAPP_NUMBER` | Numéro international, chiffres sans +. Active le vrai lien WhatsApp. |
| `VITE_INSTAGRAM_URL` | URL du compte officiel, masquée si vide. |

L'adresse, la raison sociale, les mentions et la politique de confidentialité sont volontairement non finalisées. Remplacer les paragraphes de préparation dans `Legal` par les informations validées avant une mise en ligne commerciale. Les tarifs et les inclusions exactes de Standard/Premium ne sont pas inventés : compléter `OfferCards.tsx` après validation commerciale.

## Brancher la réception du formulaire

Le frontend envoie les champs `firstName`, `lastName`, `email`, `phone`, `property`, `district`, `message`, `consent`, `offer`, `source` en JSON. Le backend doit :

1. Valider les données et le consentement côté serveur, limiter les tailles et les tentatives.
2. Envoyer l'email via SMTP/API côté serveur ou enregistrer durablement la demande.
3. Renvoyer un code 2xx **uniquement après acceptation effective**, et un 4xx/5xx sinon.
4. Autoriser le domaine réel par CORS si l'endpoint est externe, sans exposer de clé privée.
5. Définir rétention, accès et contact de confidentialité dans la notice avant ouverture.

Un endpoint PHP sur le même hébergement Hostinger, ou un service de formulaires compatible JSON, convient. La livraison ne prétend pas inclure un service d'envoi connecté. Le frontend gère validation, attente, succès après réponse HTTP 2xx, échec et délai maximal de 15 secondes. Sans endpoint, aucun appel réseau n'est effectué et le message indique que la demande n'a pas été transmise. Le bouton est inactif sans JavaScript pour éviter un envoi GET accidentel.

## Publier sur Hostinger

1. Configurer le domaine et les coordonnées, compléter les textes légaux et valider les offres.
2. Exécuter `npm run build`.
3. Dans hPanel > Fichiers > Gestionnaire de fichiers, ouvrir le `public_html` du domaine choisi. Sauvegarder l'ancien site s'il existe.
4. Téléverser **le contenu de dist**, pas le dossier parent. Inclure le fichier caché `.htaccess`.
5. Activer le certificat SSL dans Hostinger et utiliser HTTPS.
6. Vérifier `/`, `/services/`, `/offres/`, `/a-propos/`, `/contact/` par accès direct et après actualisation. Chaque page possède son `index.html`.
7. Vérifier une URL inexistante : réponse 404 avec la page dédiée. Tester aussi les liens internes, le formulaire réellement connecté, WhatsApp, robots et sitemap.

La configuration cible la racine d'un domaine. Pour une installation en sous-dossier, adapter `base`, `basename`, les liens de ressources et les chemins `.htaccess` avant de reconstruire. Le déploiement Hostinger n'a pas été exécuté dans cette tâche.

## Animations, accessibilité et vérifications

Entrée GSAP orchestrée, image révélée par masque, profondeur au scroll sur la section bleue, clé CSS 3D décorative, états hover/press, menu natif et FAQ native. `prefers-reduced-motion` désactive les mouvements ; les contenus pré-rendus restent visibles sans moteur d'animation. Aucun scroll détourné, vidéo automatique ou animation infinie.

Les polices et images sont locales ; les photos non critiques utilisent le chargement différé. Les liens, formulaires, états de focus et erreurs sont nommés. Le contrôle TypeScript est inclus au build. Les tests de réception réelle, des métriques terrain et de l'hébergement définitif exigent la configuration finale.
