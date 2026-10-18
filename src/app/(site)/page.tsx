import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { PalmIllustration } from "@/components/PalmIllustration";
import { ReviewDialog } from "@/components/ReviewDialog";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { formatDate, getFormations, getPartners, getPosts, getTestimonials } from "@/lib/content";
import { presidentMessage, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const figures = [
  { value: "500", label: "femmes visées par Sara Savon à Mbaïki" },
  { value: "5", label: "lycées partenaires d'Elles & Nous" },
  { value: "3", label: "lauréates du prix FECADD 2025" },
];

export default async function HomePage() {
  const [formations, posts, partners, testimonials] = await Promise.all([
    getFormations(),
    getPosts(),
    getPartners(),
    getTestimonials(),
  ]);

  return (
    <>
      <section className="mb-hero">
        <div className="wrap mb-hero-in">
          <div className="mb-hero-card">
            <PalmIllustration className="mb-palm" />
            <Image
              src="/images/mburu/presidente-lancement.webp"
              alt={`${site.president}, présidente fondatrice, au lancement du programme de Mbaïki`}
              width={335}
              height={336}
              priority
              sizes="(max-width: 980px) 60vw, 300px"
              className="mb-hero-photo"
            />
          </div>
          <div className="mb-hero-copy">
            <h1>
              Femme résiliente, <mark>femme debout.</mark>
            </h1>
            <p>
              Mbûrü veut dire palmier. À Bangui et à Mbaïki, la Fondation accompagne
              les lycéennes vers l&apos;excellence et les femmes rurales vers
              l&apos;autonomie.
            </p>
            <div className="mb-actions">
              <Link href="/programmes" className="btn btn-brand">
                Découvrir nos programmes
              </Link>
              <Link href="/soutenir" className="btn btn-outline">
                Nous soutenir
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-band">
        <div className="wrap mb-figures">
          {figures.map((figure) => (
            <div className="mb-figure" key={figure.label}>
              <b>{figure.value}</b>
              <span>{figure.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <div className="mb-head">
          <h2>Des programmes pour grandir et gagner son autonomie.</h2>
          <Link href="/programmes" className="btn btn-outline">
            Tous les programmes
          </Link>
        </div>
        <div className="mb-programs">
          {formations.map((formation, index) => (
            <article
              className={`mb-program ${index % 2 === 0 ? "is-deep" : "is-soft"}`}
              key={formation.id}
            >
              <div className="mb-program-media">
                <Image
                  src={formation.image}
                  alt={formation.imageAlt}
                  fill
                  sizes="(max-width: 760px) 92vw, 33vw"
                  className="cover"
                />
              </div>
              <div className="mb-program-body">
                {formation.kicker ? <small>{formation.kicker}</small> : null}
                <h3>{formation.title}</h3>
                <p>{formation.description}</p>
                <Link href={`/programmes#${formation.slug}`} className="btn">
                  En savoir plus
                </Link>
              </div>
            </article>
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

      <section className="mb-grey">
        <div className="wrap section-in">
          <div className="mb-head">
            <h2>Actualités</h2>
            <Link href="/actualites" className="btn btn-outline">
              Toutes les actualités
            </Link>
          </div>
          <div className="mb-news">
            {posts.slice(0, 3).map((post) => (
              <article className="mb-news-card" key={post.id}>
                <Link href={`/actualites/${post.slug}`} className="mb-news-media" tabIndex={-1} aria-hidden="true">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 760px) 92vw, 33vw"
                    className="cover"
                  />
                </Link>
                <div className="mb-news-body">
                  <span className="mb-tag">{post.category}</span>
                  <h3>
                    <Link href={`/actualites/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </div>
              </article>
            ))}
          </div>
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
