export const site = {
  name: "Fondation Mbûrü",
  shortName: "Mbûrü",
  fullName: "Fondation Mbûrü",
  /** Motto under the logo. */
  tagline: "Paix • Sécurité • Développement durable",
  slogan: "Femme résiliente, femme debout !",
  description:
    "La Fondation Mbûrü est une organisation centrafricaine à but non lucratif basée à Bangui. Elle accompagne les jeunes filles vers l'excellence scolaire et les femmes vers l'autonomie économique et une meilleure santé.",
  phone: "+236 75 08 27 77",
  phoneHref: "+23675082777",
  /** Second line, if any. Empty strings are not displayed. */
  phone2: "",
  phone2Href: "",
  email: "fondationmburu@gmail.com",
  address: "Avenue David Dacko, immeuble Jean Marie Nguengoa, 3e étage",
  location: "Bangui, République centrafricaine",
  facebook: "https://www.facebook.com/profile.php?id=61567199480811",
  /** Orange Money number for donations. Empty: the site asks donors to contact the team. */
  orangeMoney: "",
  founded: "2024",
  president: "Amanda Grâce Soufos Caracosta",
  presidentRole: "Présidente fondatrice de la Fondation Mbûrü",
  /** Search used by the Google Maps embed on the "À propos" page. */
  mapQuery: "Avenue David Dacko, Bangui, République centrafricaine",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fondation-mburu.vercel.app",
  hosting: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    url: "https://vercel.com",
  },
} as const;

/**
 * "Mot de la présidente" on the À propos page, built from the founder's speech at the
 * launch in Mbaïki (Facebook, 29 October 2024). To be validated by her before publication.
 */
export const presidentMessage = [
  "Mbûrü veut dire palmier. Du palmier, on tire l'huile, le vin de palme, de quoi décorer la maison et même de quoi se nourrir. La femme lui ressemble : elle éduque les enfants, tient la maison, soigne, conseille. Mbûrü est le symbole de cette richesse et de cette diversité.",
  "Notre fondation est née pour que cette force soit reconnue et soutenue : à Mbaïki, où le projet Sara Savon aide les femmes rurales à créer un revenu, et à Bangui, où le programme Elles & Nous prépare des lycéennes à devenir les cadres de demain.",
  "Je remercie les autorités, les établissements scolaires, nos partenaires et nos mentors qui avancent avec nous. Femme résiliente, femme debout !",
];

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Nos actions", href: "/nos-actions" },
  { label: "Programmes", href: "/programmes" },
  { label: "Actualités", href: "/actualites" },
] as const;

export const actions = [
  {
    slug: "education-excellence",
    title: "Éducation et excellence des filles",
    kicker: "Programme Elles & Nous",
    description:
      "Des lycéennes de Bangui, sélectionnées pour leur potentiel, sont accompagnées tout au long de leur scolarité par des mentors, des ateliers et des sessions de formation.",
    details: [
      "Lycées partenaires : Bimbo, Miskine, Martyrs, Marie Jeanne Caron, Rapides",
      "Club de lecture, cours d'informatique avec l'Alliance française",
      "Prévention des grossesses en milieu scolaire, citoyenneté, estime de soi",
    ],
    image: "/images/mburu/informatique-groupe.webp",
    alt: "Bénéficiaires du programme Elles & Nous lors des cours d'informatique",
  },
  {
    slug: "autonomisation-rurale",
    title: "Autonomisation des femmes rurales",
    kicker: "Projet Sara Savon",
    description:
      "À Mbaïki, dans la Lobaye, les femmes regroupées en groupements reçoivent des kits de production de savon artisanal et un accompagnement pour vendre leur production.",
    details: [
      "Objectif : renforcer les capacités de 500 femmes de la commune",
      "Cinq groupements de vingt femmes dans le 5e arrondissement",
      "Remboursement de 50 % des dotations pour étendre le projet à d'autres villes",
    ],
    image: "/images/mburu/sara-savon-2.webp",
    alt: "Femmes bénéficiaires du projet Sara Savon à Mbaïki",
  },
  {
    slug: "sante-des-femmes",
    title: "Santé des femmes et des filles",
    kicker: "Prévention & dépistage",
    description:
      "Sensibilisation à la santé féminine avec l'Institut Pasteur de Bangui et participation à Octobre Rose pour encourager le dépistage précoce du cancer du sein.",
    details: [
      "Journée santé et bien-être avec l'Institut Pasteur de Bangui",
      "Octobre Rose aux côtés de la Fondation Ô fil des femmes (OFIDEF)",
      "Kits de dignité distribués aux bénéficiaires",
    ],
    image: "/images/mburu/pasteur-1.webp",
    alt: "Participantes à la journée de sensibilisation avec l'Institut Pasteur",
  },
] as const;

export const values = [
  {
    title: "Résilience",
    text: "Comme le palmier qui tient debout dans la tempête, nous croyons en la capacité des femmes à se relever et à avancer.",
    icon: "sprout" as const,
  },
  {
    title: "Excellence",
    text: "Nous demandons beaucoup à nos bénéficiaires parce que nous croyons en elles : l'éducation est le premier levier de l'autonomie.",
    icon: "book" as const,
  },
  {
    title: "Dignité",
    text: "Chaque fille et chaque femme mérite d'apprendre, de s'épanouir et de construire son avenir dans le respect.",
    icon: "heart" as const,
  },
  {
    title: "Solidarité",
    text: "Mentors, familles, établissements, partenaires : nos actions reposent sur une communauté qui avance ensemble.",
    icon: "users" as const,
  },
] as const;
