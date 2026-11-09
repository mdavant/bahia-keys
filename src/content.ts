const env =
  import.meta.env ||
  (globalThis as { process?: { env: Record<string, string | undefined> } })
    .process?.env ||
  {};
export const brand = {
  name: "Bahia Keys",
  slogan: "Vous êtes loin, on est là.",
  email: env.VITE_CONTACT_EMAIL || "",
  phone: env.VITE_CONTACT_PHONE || "",
  whatsapp: env.VITE_WHATSAPP_NUMBER || "",
  endpoint: env.VITE_FORM_ENDPOINT || "",
  instagram: env.VITE_INSTAGRAM_URL || "",
};
export const navigation = [
  ["/", "Accueil"],
  ["/services", "Nos services"],
  ["/offres", "Nos offres"],
  ["/a-propos", "À propos"],
  ["/contact", "Contact"],
];
export const pageMeta: Record<string, { title: string; description: string }> =
  {
    "/": {
      title: "Conciergerie locative à Oran",
      description:
        "Votre bien à Oran, entre de bonnes mains. Bahia Keys prend en charge votre location courte durée, des annonces à l’accueil des voyageurs.",
    },
    "/services": {
      title: "Nos services de conciergerie à Oran",
      description:
        "Annonces Airbnb et Booking, accueil des voyageurs, ménage et suivi du logement : découvrez les services Bahia Keys à Oran.",
    },
    "/offres": {
      title: "Nos offres Standard et Premium",
      description:
        "Échangez sur les formules Standard et Premium Bahia Keys. Un accompagnement défini selon votre logement à Oran et vos besoins.",
    },
    "/a-propos": {
      title: "Une présence locale à Oran",
      description:
        "Découvrez la vision Bahia Keys : proximité, qualité d’accueil et attention portée aux propriétaires et aux voyageurs à Oran.",
    },
    "/contact": {
      title: "Parlons de votre bien à Oran",
      description:
        "Présentez votre appartement, votre quartier et votre projet de location courte durée à Bahia Keys.",
    },
    "/mentions-legales": {
      title: "Mentions légales",
      description:
        "Informations éditoriales et crédits photographiques du site Bahia Keys.",
    },
    "/confidentialite": {
      title: "Confidentialité",
      description:
        "Informations sur les données du formulaire de contact et le fonctionnement du site Bahia Keys.",
    },
  };
export const services = [
  {
    title: "Votre annonce, mise en valeur.",
    short: "Gestion des annonces",
    icon: "home",
    text: "Une présentation soignée de votre logement sur Airbnb et Booking.com. Nous préparons les informations utiles et suivons les réservations.",
    items: [
      "Création et gestion des annonces",
      "Présentation des équipements et du logement",
      "Suivi des réservations",
    ],
    detail:
      "La première impression commence avant le séjour. Une annonce claire permet aux voyageurs de comprendre votre logement et de préparer leur arrivée.",
  },
  {
    title: "Un accueil qui fait la différence.",
    short: "Accueil des voyageurs",
    icon: "key",
    text: "Des échanges avant l’arrivée jusqu’au départ. Une présence à Oran pour accompagner chaque étape du séjour.",
    items: [
      "Communication avec les voyageurs",
      "Coordination des arrivées et des départs",
      "Informations pratiques pour le séjour",
    ],
    detail:
      "Nous coordonnons les arrivées et les départs et transmettons les informations pratiques. Les voyageurs disposent d’un relais local pendant leur séjour.",
  },
  {
    title: "Le soin du détail, entre chaque séjour.",
    short: "Ménage et entretien",
    icon: "sparkles",
    text: "La préparation du logement et la coordination du ménage pour accueillir les prochains voyageurs dans de bonnes conditions.",
    items: [
      "Coordination du ménage",
      "Préparation avant l’arrivée",
      "Signalement des besoins d’entretien",
    ],
    detail:
      "Le ménage et la préparation s’organisent entre les séjours. Les interventions d’entretien sont définies avec vous selon les besoins du logement.",
  },
  {
    title: "Votre logement garde toute votre attention.",
    short: "Suivi du logement",
    icon: "shield",
    text: "Un suivi opérationnel sur place et des échanges avec vous pour garder une vue sur votre bien, même à distance.",
    items: [
      "Vérification de l’état du bien",
      "Suivi opérationnel local",
      "Échanges avec le propriétaire",
    ],
    detail:
      "Nous suivons l’état de votre logement et vous informons des points qui nécessitent votre décision. Le rythme et les modalités du suivi sont convenus ensemble.",
  },
];
export const steps = [
  {
    title: "Faisons connaissance",
    text: "Vous nous présentez votre logement, sa localisation et vos attentes. Nous prenons le temps de comprendre votre projet.",
    label: "Votre bien",
  },
  {
    title: "Préparons votre logement",
    text: "Nous définissons ensemble les prestations, puis préparons le logement et sa présentation pour sa mise en location.",
    label: "La préparation",
  },
  {
    title: "Accueillons vos voyageurs",
    text: "Annonces, échanges, arrivées et coordination du ménage : l’organisation quotidienne prend place à Oran.",
    label: "La gestion",
  },
  {
    title: "Gardez le lien",
    text: "Vous suivez votre activité et échangez avec votre interlocuteur local. Les décisions sur votre bien restent les vôtres.",
    label: "Votre suivi",
  },
];
export const faqs = [
  [
    "Puis-je confier mon bien si je vis à l’étranger ?",
    "Oui. Bahia Keys s’adresse notamment aux propriétaires qui vivent à distance. Nous échangeons avec vous pour organiser une gestion locale adaptée à votre situation.",
  ],
  [
    "Quels logements pouvez-vous accompagner ?",
    "Présentez-nous le type de logement, son quartier à Oran et ses équipements. Nous étudierons avec vous les conditions de sa mise en location.",
  ],
  [
    "Quelle est la commission de gestion ?",
    "La proposition est établie selon votre bien et le périmètre retenu. Les tarifs et les prestations sont précisés avant tout engagement.",
  ],
  [
    "Comment choisir entre Standard et Premium ?",
    "Nous partons de ce que vous souhaitez déléguer. L’échange initial permet de préciser la formule, les services complémentaires et les modalités de suivi.",
  ],
  [
    "Est-ce possible de conserver des séjours personnels ?",
    "Indiquez-nous les périodes que vous souhaitez réserver pour vous. Les modalités d’occupation personnelle seront définies ensemble dans votre proposition.",
  ],
];
