// Données de départ, insérées une seule fois par `npm run db:seed`.
// Ensuite, le contenu se gère dans le back-office (/admin).
// Sources : publications de la page Facebook de la Fondation Mbûrü.

export const formations = [
  {
    slug: "elles-et-nous",
    title: "Elles & Nous, programme d'excellence",
    kicker: "Lycéennes de Bangui",
    price: "",
    description:
      "Un accompagnement sur plusieurs années pour des lycéennes au fort potentiel : mentorat, ateliers, formations et suivi scolaire, pour former les cadres de demain.",
    image: "/images/mburu/elles-et-nous-affiche.webp",
    alt: "Affiche du programme Elles & Nous",
    program: [
      "Mentorat par des femmes engagées",
      "Club de lecture et prise de parole",
      "Cours d'informatique avec l'Alliance française",
      "Ateliers d'estime de soi (Art d'être soi)",
      "Santé, citoyenneté et prévention des grossesses précoces",
      "Kits scolaires et kits de dignité",
    ],
    benefits: [
      "Réussir sa scolarité",
      "Prendre confiance et s'exprimer",
      "Préparer son avenir professionnel",
    ],
    note: "Les candidates sont présélectionnées dans les lycées partenaires, avec l'accord de leurs parents.",
    badge: "Candidatures",
  },
  {
    slug: "sara-savon",
    title: "Sara Savon, autonomie des femmes rurales",
    kicker: "Mbaïki, Lobaye",
    price: "",
    description:
      "Des groupements de femmes reçoivent un kit de production de savon artisanal, une formation et un suivi, pour créer une activité génératrice de revenus.",
    image: "/images/mburu/sara-savon-3.webp",
    alt: "Femmes du projet Sara Savon à Mbaïki",
    program: [
      "Formation à la saponification",
      "Kit de production de savon artisanal",
      "Organisation en groupements de vingt femmes",
      "Suivi et validation des résultats",
      "Approvisionnement et vente",
    ],
    benefits: [
      "Un revenu régulier",
      "Une activité gérée en groupe",
      "Des dotations remboursées pour aider d'autres femmes",
    ],
    note: "Les groupements s'engagent à rembourser 50 % des dotations pour étendre le projet.",
    badge: "Groupements",
  },
  {
    slug: "devenir-mentor",
    title: "Devenir mentor",
    kicker: "Femmes engagées",
    price: "",
    description:
      "Vous êtes une femme active et souhaitez transmettre votre parcours ? Accompagnez une ou plusieurs bénéficiaires du programme Elles & Nous.",
    image: "/images/mburu/citoyennete-2.webp",
    alt: "Session d'accompagnement du programme Elles & Nous",
    program: [
      "Rencontres régulières avec une bénéficiaire",
      "Participation aux ateliers et événements",
      "Partage d'expérience professionnelle",
    ],
    benefits: ["Transmettre", "Inspirer", "Agir pour l'éducation des filles"],
    note: "Écrivez-nous pour échanger sur votre disponibilité.",
    badge: "Bénévolat",
  },
] as const;

export type Post = {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  category: string;
  excerpt: string;
  image: string;
  alt: string;
  quote?: string;
  body: string[];
  meta?: { label: string; value: string }[];
};

export const posts: Post[] = [
  {
    slug: "elles-et-nous-citoyennete-kits-2026",
    title: "Citoyenneté et kits de dignité pour les filles d'Elles & Nous",
    date: "17 octobre 2026",
    isoDate: "2026-10-17",
    category: "Elles & Nous",
    excerpt:
      "Une session de sensibilisation à la citoyenneté, une micro-évaluation du programme et la remise de kits scolaires et de kits de dignité.",
    image: "/images/mburu/citoyennete-2.webp",
    alt: "Session de sensibilisation à la citoyenneté avec les bénéficiaires",
    quote: "Parce que chaque fille mérite d'apprendre, de s'épanouir et de construire son avenir dans la dignité.",
    body: [
      "Le samedi 17 octobre 2026, la Fondation Mbûrü a réuni les filles bénéficiaires du programme Elles & Nous autour de la citoyenneté.",
      "La rencontre a rappelé l'importance des valeurs citoyennes, du respect des droits et des devoirs, de la responsabilité individuelle et de la participation à la vie de la communauté.",
      "La session a aussi permis une micro-évaluation du programme : faire le point sur le parcours de chaque bénéficiaire, mesurer les acquis et mieux identifier les besoins.",
      "Pour clôturer la journée, des kits scolaires et des kits de dignité ont été distribués afin de soutenir le parcours éducatif et le bien-être des filles.",
    ],
  },
  {
    slug: "octobre-rose-2026",
    title: "Octobre Rose 2026 : diagnostiquer pour mieux sauver",
    date: "1er octobre 2026",
    isoDate: "2026-10-01",
    category: "Santé des femmes",
    excerpt:
      "Aux côtés de la Fondation Ô fil des femmes (OFIDEF), la Fondation Mbûrü s'engage pour le dépistage précoce du cancer du sein.",
    image: "/images/mburu/octobre-rose.webp",
    alt: "Affiche Octobre Rose 2026",
    quote: "Ensemble, sensibilisons. Ensemble, dépistons. Ensemble, sauvons des vies.",
    body: [
      "Du 1er au 31 octobre 2026, la campagne Octobre Rose mobilise pour la prévention du cancer du sein en République centrafricaine.",
      "La Fondation Mbûrü s'associe à la Fondation Ô fil des femmes (OFIDEF) pour promouvoir le dépistage précoce et encourager chaque femme à prendre soin de sa santé.",
      "À travers cette collaboration, nous réaffirmons notre engagement en faveur de la prévention, de l'information et de la santé des femmes.",
    ],
    meta: [{ label: "Période", value: "Du 1er au 31 octobre 2026" }],
  },
  {
    slug: "sante-institut-pasteur",
    title: "Santé des jeunes filles : une journée avec l'Institut Pasteur",
    date: "28 mai 2026",
    isoDate: "2026-05-28",
    category: "Santé des femmes",
    excerpt:
      "Lycéennes, commerçantes et ménagères ont échangé sur la prévention, le dépistage et l'éducation à la santé féminine.",
    image: "/images/mburu/pasteur-2.webp",
    alt: "Participantes à la journée santé avec l'Institut Pasteur de Bangui",
    body: [
      "En partenariat avec l'Institut Pasteur de Bangui, la Fondation Mbûrü a organisé une activité de sensibilisation consacrée à la santé et au bien-être des jeunes filles et des femmes, dans le cadre du programme Elles & Nous.",
      "Des élèves des lycées de Bimbo, de Miskine, des Martyrs, Marie Jeanne Caron et des Rapides y ont participé, aux côtés de femmes commerçantes et ménagères.",
      "Le directeur général de l'Institut Pasteur de Bangui a souligné l'importance de la prévention, du dépistage et de l'éducation à la santé féminine.",
      "La Fondation remercie les participantes, les responsables d'établissements, les partenaires et les mentors qui ont rendu cette journée possible.",
    ],
  },
  {
    slug: "cours-informatique-alliance-francaise",
    title: "Les filles d'Elles & Nous se forment à l'informatique",
    date: "10 avril 2026",
    isoDate: "2026-04-10",
    category: "Elles & Nous",
    excerpt:
      "En partenariat avec l'Alliance française, des cours d'informatique pour doter les bénéficiaires de compétences numériques essentielles.",
    image: "/images/mburu/informatique-salle.webp",
    alt: "Cours d'informatique à l'Alliance française",
    quote: "Investir dans une fille, c'est investir dans l'avenir.",
    body: [
      "Dans le cadre du renforcement des capacités des jeunes filles, la Fondation Mbûrü a lancé des cours d'informatique pour les bénéficiaires du programme Elles & Nous, en partenariat avec l'Alliance française.",
      "Ces compétences numériques sont devenues incontournables dans les études comme dans la vie professionnelle. Elles renforcent l'autonomie et la confiance des filles et élargissent leurs perspectives.",
    ],
  },
  {
    slug: "club-de-lecture-8-mars",
    title: "Un club de lecture pour les jeunes filles",
    date: "4 mars 2026",
    isoDate: "2026-03-04",
    category: "Elles & Nous",
    excerpt:
      "Pour le 8 mars, la Fondation lance un club de lecture : un espace d'inspiration, de partage et de formation pour des jeunes filles ambitieuses.",
    image: "/images/mburu/club-lecture.webp",
    alt: "Bénéficiaires du programme Elles & Nous",
    quote: "Ensemble, cultivons l'intelligence, la confiance et le leadership féminin.",
    body: [
      "À l'occasion du 8 mars, la Fondation Mbûrü organise un club de lecture pour les jeunes filles du programme Elles & Nous.",
      "Des rencontres régulières, interactives et formatrices pour favoriser l'éloquence, le développement intellectuel et l'aisance à l'oral.",
    ],
  },
  {
    slug: "art-d-etre-soi-bootcamp",
    title: "Art d'être soi : deux jours pour booster son identité",
    date: "21 février 2026",
    isoDate: "2026-02-21",
    category: "Elles & Nous",
    excerpt:
      "Sport, prise de parole, danse, chant et partages d'expérience : un bootcamp consacré à l'estime de soi des jeunes filles.",
    image: "/images/mburu/art-etre-soi.webp",
    alt: "Séance de sport pendant l'atelier Art d'être soi",
    body: [
      "Les 21 et 22 février 2026, les filles du programme Elles & Nous ont participé à l'atelier Art d'être soi, Bootcamp : Booste ton identité.",
      "Au programme : séances de sport, espaces d'échange et d'écoute, exercices de prise de parole en public, ateliers de danse et de chant, séances sur l'image de soi et partages d'expériences inspirantes.",
      "La Fondation est fière de l'engagement des bénéficiaires tout au long de l'atelier, et remercie Mme Leslie et le programme Art d'être soi pour leur invitation.",
    ],
    meta: [{ label: "Dates", value: "21 et 22 février 2026" }],
  },
  {
    slug: "zero-grossesse-en-milieu-scolaire",
    title: "Zéro grossesse en milieu scolaire",
    date: "18 février 2026",
    isoDate: "2026-02-18",
    category: "Éducation",
    excerpt:
      "Au lycée Marie Jeanne Caron, une séance de sensibilisation pour qu'aucune grossesse n'interrompe un parcours scolaire.",
    image: "/images/mburu/zero-grossesse-1.webp",
    alt: "Séance de sensibilisation au lycée Marie Jeanne Caron",
    quote: "Non aux grossesses en milieu scolaire, oui à l'avenir, à l'éducation et à l'espoir.",
    body: [
      "Le 18 février 2026, à travers son axe Éducation et le programme Elles & Nous, la Fondation Mbûrü a organisé une séance de sensibilisation au lycée Marie Jeanne Caron.",
      "Animée par Nellie Yapande, la rencontre a rappelé aux élèves l'importance de faire des choix éclairés, de se protéger et de placer l'éducation au cœur de leurs priorités.",
      "Parler de zéro grossesse en milieu scolaire, c'est défendre le droit à l'éducation et interpeller toute la communauté éducative : élèves, parents, enseignants et leaders communautaires.",
      "Nous remercions l'administration du lycée pour son accueil et les élèves pour leur participation.",
    ],
  },
  {
    slug: "prix-fecadd-2025",
    title: "Trois lauréates d'Elles & Nous au prix FECADD 2025",
    date: "11 août 2025",
    isoDate: "2025-08-11",
    category: "Elles & Nous",
    excerpt:
      "À l'hémicycle de l'Assemblée nationale, trois bénéficiaires du programme ont reçu le prix des meilleures élèves de l'année académique.",
    image: "/images/mburu/fecadd-1.webp",
    alt: "Remise du prix FECADD 2025",
    body: [
      "À l'occasion de la 3e édition du prix d'excellence des meilleurs élèves de l'année académique 2024-2025, organisé par l'association des Femmes Centrafricaines Dévouées et Déterminées (FECADD) à l'hémicycle de l'Assemblée nationale, trois bénéficiaires du programme Elles & Nous ont été récompensées.",
      "Ce résultat confirme l'ambition du programme : former les élites de demain. Soyons fiers de nos futurs cadres !",
    ],
  },
  {
    slug: "suivi-sara-savon-mbaiki",
    title: "Sara Savon : cinq mois après le lancement à Mbaïki",
    date: "28 mars 2025",
    isoDate: "2025-03-28",
    category: "Autonomisation",
    excerpt:
      "Mission de suivi auprès des cinq groupements de femmes du 5e arrondissement de Mbaïki, qui produisent et vendent leur savon.",
    image: "/images/mburu/sara-savon-1.webp",
    alt: "Mission de suivi du projet Sara Savon à Mbaïki",
    body: [
      "Cinq mois après le lancement officiel du projet d'autonomisation des femmes dans la préfecture de la Lobaye, la Fondation Mbûrü a mené une mission de suivi et de validation des résultats à Mbaïki.",
      "Les femmes du 5e arrondissement, regroupées en cinq groupements de vingt, ont pris le projet à bras le corps : les ventes réalisées grâce aux kits de production témoignent de leur dynamisme, et elles ont pu se réapprovisionner en matières premières.",
      "Pour que le projet profite à d'autres villes, les bénéficiaires se sont engagées à rembourser 50 % des dotations reçues.",
    ],
    meta: [
      { label: "Lieu", value: "Mbaïki, préfecture de la Lobaye" },
      { label: "Bénéficiaires", value: "Cinq groupements de vingt femmes" },
    ],
  },
  {
    slug: "lancement-elles-et-nous",
    title: "Lancement du programme Elles & Nous",
    date: "19 novembre 2024",
    isoDate: "2024-11-19",
    category: "Elles & Nous",
    excerpt:
      "À l'Alliance française de Bangui, les parents des élèves présélectionnées découvrent le programme et donnent leur accord.",
    image: "/images/mburu/elles-et-nous-parents.webp",
    alt: "Réunion des parents à l'Alliance française de Bangui",
    quote: "L'éducation est l'arme la plus puissante que l'on puisse utiliser pour changer le monde.",
    body: [
      "Le processus de lancement du programme Elles & Nous s'est poursuivi le 19 novembre 2024 avec la réunion des parents des élèves présélectionnées pour leur potentiel.",
      "La rencontre, organisée à l'Alliance française de Bangui, a présenté le programme aux familles et recueilli les autorisations parentales nécessaires avant le test d'intégration. Des femmes mentors ont présenté leur rôle auprès des filles.",
      "Les établissements concernés sont les lycées de Bimbo, de Miskine, Marie Jeanne Caron, des Martyrs et le lycée d'État des Rapides.",
    ],
  },
  {
    slug: "lancement-autonomisation-mbaiki",
    title: "Lancement du programme d'autonomisation des femmes à Mbaïki",
    date: "29 octobre 2024",
    isoDate: "2024-10-29",
    category: "Autonomisation",
    excerpt:
      "Dans la Lobaye, la Fondation lance Sara Savon, un projet de saponification pour renforcer les capacités de 500 femmes rurales.",
    image: "/images/mburu/lancement-mbaiki.webp",
    alt: "Lancement du programme à Mbaïki",
    body: [
      "Lors du lancement officiel du programme d'autonomisation de la femme en milieu rural dans la préfecture de la Lobaye, la présidente fondatrice a remercié les autorités locales, la population de Mbaïki et le représentant du ministère du Genre.",
      "Le projet de saponification, Sara Savon, a été choisi avec la population de Mbaïki comme projet à impact rapide, pour renforcer progressivement les capacités de 500 femmes de la commune.",
      "Elle a aussi expliqué le nom de la fondation : Mbûrü signifie palmier. Comme le palmier, la femme fait mille choses à la fois. Mbûrü est le symbole de la richesse et de la diversité de la femme.",
    ],
    meta: [{ label: "Lieu", value: "Mbaïki, préfecture de la Lobaye" }],
  },
];

/** Partners named in the Fondation's posts. Without a logo they stay hidden on the site. */
export const featuredPartners = [
  { short: "Institut Pasteur", name: "Institut Pasteur de Bangui", type: "Santé", logo: "" },
  { short: "Alliance française", name: "Alliance française de Bangui", type: "Culture et éducation", logo: "" },
  { short: "OFIDEF", name: "Fondation Ô fil des femmes (OFIDEF)", type: "Santé des femmes", logo: "" },
  { short: "Art d'être soi", name: "Art d'être soi, programme éducatif international", type: "Éducation", logo: "" },
] as const;

export const otherPartners: readonly string[] = [];
