# Vérifications — 9 novembre 2026

- TypeScript : contrôle sans erreur.
- Build Vite et pré-rendu : huit pages HTML générées, ressources de production environ 1,9 Mo.
- Accès HTTP local : accueil, services, offres, à propos, contact, mentions et confidentialité renvoient 200 ; URL inconnue renvoie 404.
- Titres et descriptions spécifiques ; un H1 par page. Pages rendues côté build, contenu présent dans le HTML.
- Navigateur : accueil inspecté à 1440 et 390 px ; absence de débordement horizontal mesurée à 320, 390 et 768 px.
- Menu mobile et navigation contact vérifiés. Étapes interactives et FAQ vérifiées.
- Formulaire : erreurs des champs obligatoires et préparation locale validées ; aucune transmission sans endpoint. Le service d'envoi réel reste à configurer et tester.
- Les tests ont été effectués sur l'aperçu local, pas sur Hostinger. Pas de score Lighthouse ni de mesure terrain annoncés.

## Contrôles des skills

Les cinq ressources demandées ont été consultées et leurs choix applicables documentés dans DESIGN.md. Le chargeur Impeccable est indisponible sur cet environnement faute de binaire Windows ARM64. La revue navigateur a été réalisée directement, sans certification indépendante Impeccable.

Le gate Taste a été exécuté. Il ne valide pas ce site : plusieurs règles imposent son propre template (.wrap, sections de hauteur fixe, absence de ScrollTrigger sur un site de services), incompatibles avec le brief sur mesure. Ses résultats ne sont pas présentés comme un contrôle réussi. Les observations utiles sur la navigation mobile et le focus ont été intégrées. Les captures et rapports bruts restent locaux, hors dépôt.

## Avant ouverture commerciale

Compléter les coordonnées, WhatsApp, domaine final, informations légales et politique de confidentialité ; valider les prestations et commissions ; connecter la réception du formulaire. Vérifier les accès directs et HTTPS sur Hostinger. Les photographies authentiques et leurs licences sont documentées dans ASSETS.md.
