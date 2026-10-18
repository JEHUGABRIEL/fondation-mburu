import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { NewsRail } from "@/components/NewsRail";
import { ReviewDialog } from "@/components/ReviewDialog";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { formatDate, getPartners, getPosts, getTestimonials } from "@/lib/content";
import { presidentMessage, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const heroPhotos = [
  { src: "/images/mburu/informatique-groupe.webp", alt: "Les lycéennes d'Elles & Nous au cours d'informatique" },
  { src: "/images/mburu/sara-savon-1.webp", alt: "Un groupement de femmes de Sara Savon à Mbaïki" },
  { src: "/images/mburu/presidente-lancement.webp", alt: `${site.president} au lancement du programme de Mbaïki` },
  { src: "/images/mburu/fecadd-1.webp", alt: "Une lauréate du prix FECADD 2025" },
];

/** Staggered photo tiles, three columns, in the programmes band. */
const mosaic = [
  [
    { label: "Elles & Nous", href: "/programmes#elles-et-nous", image: "informatique-salle", h: 120 },
    { label: "Club de lecture", href: "/actualites/club-de-lecture-8-mars", image: "club-lecture", h: 210 },
    { label: "Santé", href: "/actualites/sante-institut-pasteur", image: "pasteur-1", h: 150 },
  ],
  [
    { label: "Sara Savon", href: "/programmes#sara-savon", image: "sara-savon-3", h: 210 },
    { label: "Estime de soi", href: "/actualites/art-d-etre-soi-bootcamp", image: "art-etre-soi", h: 170 },
    { label: "Citoyenneté", href: "/actualites/elles-et-nous-citoyennete-kits-2026", image: "citoyennete-2", h: 150 },
  ],
  [
    { label: "Devenir mentor", href: "/programmes#devenir-mentor", image: "elles-et-nous-parents", h: 120 },
    { label: "Prix FECADD", href: "/actualites/prix-fecadd-2025", image: "fecadd-2", h: 210 },
    { label: "Octobre Rose", href: "/actualites/octobre-rose-2026", image: "octobre-rose", h: 150 },
  ],
];

const axes = [
  {
    icon: "book" as const,
    tone: "t1",
    title: "Éducation des filles",
    text: "Des lycéennes de Bangui accompagnées vers l'excellence par des mentors, des ateliers et des cours.",
    href: "/nos-actions#education-excellence",
  },
  {
    icon: "sprout" as const,
    tone: "t2",
    title: "Autonomie des femmes",
    text: "À Mbaïki, des groupements de femmes rurales produisent et vendent leur savon artisanal.",
    href: "/nos-actions#autonomisation-rurale",
  },
  {
    icon: "heart" as const,
    tone: "t3",
    title: "Santé des femmes",
    text: "Sensibilisation, dépistage et kits de dignité, avec l'Institut Pasteur et nos partenaires.",
    href: "/nos-actions#sante-des-femmes",
  },
  {
    icon: "users" as const,
    tone: "t4",
    title: "Mentorat",
    text: "Des femmes actives partagent leur parcours avec une jeune fille du programme Elles & Nous.",
    href: "/programmes#devenir-mentor",
  },
];

const figures = [
  { value: "500", label: "femmes visées par Sara Savon à Mbaïki" },
  { value: "5", label: "lycées partenaires d'Elles & Nous" },
  { value: "3", label: "lauréates du prix FECADD 2025" },
];

export default async function HomePage() {
  const [posts, partners, testimonials] = await Promise.all([
    getPosts(),
    getPartners(),
    getTestimonials(),
  ]);

  return (
    <>
      <section className="lt-hero">
        <div className="wrap lt-hero-in">
          <div className="lt-band">
            <h1>Femme résiliente, femme debout.</h1>
          </div>
          <div className="lt-hero-below">
            <p>
              Mbûrü veut dire palmier. À Bangui et à Mbaïki, la Fondation accompagne
              les lycéennes vers l&apos;excellence et les femmes rurales vers
              l&apos;autonomie.
            </p>
            <div className="mb-actions">
              <Link href="/programmes" className="btn btn-brand">
                <Icon name="sprout" size={20} />
                Découvrir nos programmes
              </Link>
              <Link href="/soutenir" className="btn btn-soft">
                <Icon name="heart" size={20} />
                Nous soutenir
              </Link>
            </div>
            <dl className="lt-figures">
              {figures.map((figure) => (
                <div key={figure.label}>
                  <dt>{figure.value}</dt>
                  <dd>{figure.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="lt-hero-media">
          {heroPhotos.map((photo, index) => (
            <div className="lt-hero-photo" key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority={index < 2}
                sizes="(max-width: 980px) 50vw, 25vw"
                className="cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <h2 className="lt-title">Les dernières actualités</h2>
        <NewsRail
          posts={posts.slice(0, 5).map((post) => ({
            id: post.id,
            slug: post.slug,
            title: post.title,
            category: post.category,
            image: post.image,
            publishedAt: post.publishedAt,
            date: formatDate(post.publishedAt),
          }))}
        />
        <Link href="/actualites" className="line-more">
          Toutes les actualités
        </Link>
      </section>

      <section className="wrap">
        <div className="lt-occasions">
          <div className="lt-mosaic" aria-label="Nos programmes en images">
            {mosaic.map((column, index) => (
              <div className="lt-mosaic-col" key={index}>
                {column.map((tile) => (
                  <Link href={tile.href} className="lt-tile" key={tile.label} style={{ height: tile.h }}>
                    <Image
                      src={`/images/mburu/${tile.image}.webp`}
                      alt=""
                      fill
                      sizes="(max-width: 760px) 30vw, 160px"
                      className="cover"
                    />
                    <span>{tile.label}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="lt-occasions-copy">
            <p className="lt-kicker">Pour chaque fille, pour chaque femme</p>
            <h2>Trois programmes, une même exigence.</h2>
            <p>
              Elles &amp; Nous accompagne des lycéennes de Bangui, Sara Savon aide les
              femmes de Mbaïki à créer un revenu, et nos mentors transmettent leur
              parcours. La participation est gratuite.
            </p>
            <Link href="/programmes" className="btn btn-brand">
              Découvrir nos programmes
            </Link>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <h2 className="lt-title">Ce que nous faisons</h2>
        <div className="lt-axes">
          {axes.map((axis) => (
            <Link href={axis.href} className="lt-axis" key={axis.title}>
              <span className={`lt-axis-art ${axis.tone}`} aria-hidden="true">
                <Icon name={axis.icon} size={56} />
              </span>
              <strong>{axis.title}</strong>
              <span>{axis.text}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-founder">
        <div className="wrap mb-founder-in">
          <div>
            <p className="kicker">Le mot de la présidente</p>
            <blockquote>
              « Comme le palmier, la femme fait mille choses à la fois. Notre
              fondation est née pour que cette force soit reconnue et soutenue. »
            </blockquote>
            <div className="mb-founder-text">
              {presidentMessage.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <p className="mb-cite">
              <strong>{site.president}</strong>
              <span>Présidente fondatrice</span>
            </p>
            <Link href="/a-propos" className="line-more">
              Découvrir la Fondation
            </Link>
          </div>
          <Image
            src="/images/mburu/club-lecture.webp"
            alt="Les bénéficiaires du programme Elles & Nous avec l'équipe de la Fondation"
            width={346}
            height={382}
            sizes="(max-width: 980px) 80vw, 420px"
            className="mb-founder-photo"
          />
        </div>
      </section>

      <section className="section wrap" id="temoignages">
        <div className="mb-head">
          <h2>Ils et elles en parlent.</h2>
        </div>
        <TestimonialSlider items={testimonials} />
        <div className="mb-review">
          <p>
            Vous êtes bénéficiaire, parent, mentor ou partenaire de la Fondation ?
            Racontez-nous ce que nos actions ont changé pour vous.
          </p>
          <ReviewDialog />
        </div>
      </section>

      {partners.length > 0 ? (
        <section className="section wrap">
          <div className="mb-head">
            <h2>Ils nous accompagnent.</h2>
          </div>
          <div className="mb-partners">
            {partners.map((partner) =>
              partner.logo ? (
                <span className="mb-partner" key={partner.id} title={partner.name}>
                  <Image src={partner.logo} alt={partner.name} width={160} height={80} />
                </span>
              ) : (
                <span className="mb-partner" key={partner.id}>
                  {partner.name}
                </span>
              ),
            )}
          </div>
        </section>
      ) : null}

      <section className="mb-contact-sec" id="contact">
        <div className="wrap">
          <div className="mb-contact-top">
            <div>
              <div className="mb-head">
                <h2>Nous écrire.</h2>
              </div>
              <p>
                Une question sur nos programmes, une envie de devenir mentor, un projet
                de partenariat ? Nous revenons vers vous sous 48 h.
              </p>
            </div>
            <ul className="mb-contact">
              <li>
                <Icon name="phone" size={20} />
                <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              </li>
              <li>
                <Icon name="mail" size={20} />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <Icon name="whatsapp" size={20} />
                <a
                  href={`https://wa.me/${site.phoneHref.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Écrire sur WhatsApp
                </a>
              </li>
              <li>
                <Icon name="pin" size={20} />
                <span>
                  {site.address}, {site.location}
                </span>
              </li>
            </ul>
          </div>
          <div className="mb-contact-form">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="mb-cta">
          <div>
            <h2>Une fille qui réussit, une femme qui entreprend.</h2>
            <p>Mentor, partenaire ou donateur : votre geste compte.</p>
          </div>
          <Link href="/soutenir" className="btn btn-light">
            Nous soutenir
          </Link>
        </div>
      </section>
    </>
  );
}
