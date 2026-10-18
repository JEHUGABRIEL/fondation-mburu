import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { CtaBand } from "@/components/CtaBand";
import { FormationCatalog } from "@/components/FormationCatalog";
import { HeroSlider } from "@/components/HeroSlider";
import { Icon } from "@/components/Icon";
import { TestimonialForm } from "@/components/TestimonialForm";
import { getFormations, getPartners, getPosts, getTestimonials } from "@/lib/content";
import { actions, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const shortMonth = new Intl.DateTimeFormat("fr-FR", { month: "short", timeZone: "UTC" });

/** "2026-10-16" -> { day: "16", month: "OCT" } */
function dateParts(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00Z`);
  return {
    day: String(date.getUTCDate()),
    month: shortMonth.format(date).replace(".", "").toUpperCase(),
  };
}

const figures = [
  { value: "500", label: "femmes visées à Mbaïki", text: "par le projet Sara Savon, groupement après groupement." },
  { value: "5", label: "lycées partenaires", text: "à Bangui pour le programme d'excellence Elles & Nous." },
  { value: "3", label: "lauréates en 2025", text: "du prix des meilleures élèves FECADD, issues d'Elles & Nous." },
];

export default async function HomePage() {
  const [formations, posts, partners, testimonials] = await Promise.all([
    getFormations(),
    getPosts(),
    getPartners(),
    getTestimonials(),
  ]);
  const [featured, ...rest] = posts.slice(0, 3);

  return (
    <>
      <HeroSlider />

      <section className="section wrap two">
        <div>
          <div className="st">
            <p className="kicker">Fondation Mbûrü</p>
            <h2>
              <span className="lt">Qui</span> <span className="hd">sommes-nous ?</span>
            </h2>
          </div>
          <p>
            La Fondation Mbûrü est une organisation centrafricaine à but non
            lucratif, basée à Bangui. Elle accompagne les jeunes filles vers
            l&apos;excellence scolaire et les femmes vers l&apos;autonomie
            économique, avec une attention constante à leur santé et à leur dignité.
          </p>
          <p>
            Mbûrü veut dire <strong>palmier</strong>. Du palmier, on tire
            l&apos;huile, le vin, de quoi décorer la maison : comme la femme, il fait
            mille choses à la fois. Le nom dit notre conviction : la femme est une
            richesse, et sa force mérite d&apos;être soutenue.
          </p>
          <Link href="/a-propos" className="btn btn-brand">
            En savoir plus
          </Link>
        </div>
        <Image
          src="/images/mburu/club-lecture.webp"
          alt="Les bénéficiaires du programme Elles & Nous avec l'équipe de la Fondation"
          width={346}
          height={382}
          sizes="(max-width: 980px) 92vw, 48vw"
          className="rounded r-br"
        />
      </section>

      <section className="section wrap">
        <div className="icon-row figures">
          {figures.map((figure) => (
            <article key={figure.label}>
              <p className="figure-value">{figure.value}</p>
              <h3>{figure.label}</h3>
              <p>{figure.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="st">
            <p className="kicker">Nos domaines d&apos;action</p>
            <h2>
              <span className="lt">Ce que nous</span>{" "}
              <span className="hd">faisons.</span>
            </h2>
          </div>
          <div className="svc-grid">
            {actions.map((action) => (
              <article className="svc" key={action.slug}>
                <Image
                  src={action.image}
                  alt={action.alt}
                  width={340}
                  height={255}
                  sizes="(max-width: 1024px) 46vw, 33vw"
                  className="svc-img"
                />
                <h3>{action.title}</h3>
                <p>{action.description}</p>
                <Link href={`/nos-actions#${action.slug}`} className="line-more">
                  {action.kicker}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="st">
          <p className="kicker">Nos programmes</p>
          <h2>
            <span className="lt">Des programmes</span>{" "}
            <span className="hd">qui font grandir.</span>
          </h2>
        </div>
        <FormationCatalog formations={formations} />
      </section>

      <section className="why">
        <div className="why-img">
          <Image
            src="/images/mburu/sara-savon-3.webp"
            alt="Femmes bénéficiaires du projet Sara Savon à Mbaïki"
            fill
            sizes="(max-width: 980px) 100vw, 50vw"
            className="cover"
          />
        </div>
        <div className="why-txt">
          <div className="st light">
            <p className="kicker light">Pourquoi Mbûrü</p>
            <h2>
              <span className="lt">Femme résiliente,</span>{" "}
              <span className="hd">femme debout.</span>
            </h2>
          </div>
          <div className="why-list">
            <p>
              <strong>Sur le terrain.</strong> À Bangui comme à Mbaïki, nos actions
              sont construites avec les familles, les établissements scolaires et
              les autorités locales.
            </p>
            <p>
              <strong>Dans la durée.</strong> Les filles d&apos;Elles & Nous sont
              suivies année après année, et les groupements de Sara Savon sont
              accompagnés après le lancement.
            </p>
            <p>
              <strong>Avec exigence.</strong> Mentors, ateliers, évaluations : nous
              mesurons les acquis pour renforcer l&apos;impact de chaque action.
            </p>
            <p>
              <strong>En réseau.</strong> Institut Pasteur, Alliance française,
              OFIDEF, lycées de Bangui : nous avançons avec des partenaires engagés.
            </p>
          </div>
          <Link href="/#contact" className="btn btn-sky">
            Contactez-nous
          </Link>
        </div>
      </section>

      <section className="section wrap">
        <div className="st center">
          <p className="kicker">Nos actualités</p>
          <h2>
            <span className="lt">Nos dernières</span>{" "}
            <span className="hd">actualités</span>
          </h2>
        </div>
        <div className="news-grid">
          {featured ? (
            <article className="ncard feature">
              <span className="date">
                <b>{dateParts(featured.publishedAt).day}</b>
                <span>{dateParts(featured.publishedAt).month}</span>
              </span>
              <div className="ncard-in">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 45vw"
                  className="cover"
                />
                <span className="shade" />
                <div className="nc-body">
                  <span className="chip">{featured.category}</span>
                  <h3>
                    <Link href={`/actualites/${featured.slug}`}>{featured.title}</Link>
                  </h3>
                  <p>{featured.excerpt}</p>
                  <Link href={`/actualites/${featured.slug}`} className="more">
                    Lire la suite
                    <Icon name="arrow-up-right" size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ) : null}

          {rest.map((post) => (
            <article className="ncard" key={post.slug}>
              <span className="date">
                <b>{dateParts(post.publishedAt).day}</b>
                <span>{dateParts(post.publishedAt).month}</span>
              </span>
              <div className="ncard-in">
                <p className="nc-kick">{post.category}</p>
                <h3>
                  <Link href={`/actualites/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <Link href={`/actualites/${post.slug}`} className="more">
                  Lire la suite
                  <Icon name="arrow-up-right" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="center-cta">
          <Link href="/actualites" className="btn btn-brand">
            Toutes les actualités
          </Link>
        </div>
      </section>

      <section className="section reviews">
        <div className="wrap">
          <div className="st">
            <p className="kicker">Ce qui nous guide</p>
            <h2>
              <span className="lt">Nos</span> <span className="hd">convictions.</span>
            </h2>
          </div>
          <div className="rev-grid">
            <article className="rev">
              <span className="g">
                <Icon name="quote" size={28} />
              </span>
              <h3>Investir dans une fille, c&apos;est investir dans l&apos;avenir.</h3>
              <p>
                Les filles d&apos;Elles & Nous sont accompagnées pour réussir leurs
                études et devenir les cadres de demain.
              </p>
              <p className="who">- Programme Elles & Nous</p>
            </article>
            <article className="rev">
              <span className="g">
                <Icon name="quote" size={28} />
              </span>
              <h3>L&apos;éducation est l&apos;arme la plus puissante.</h3>
              <p>
                « L&apos;éducation est l&apos;arme la plus puissante que l&apos;on
                puisse utiliser pour changer le monde. »
              </p>
              <p className="who">- Nelson Mandela, devise du programme</p>
            </article>
            <article className="rev">
              <span className="g">
                <Icon name="quote" size={28} />
              </span>
              <h3>Femme résiliente, femme debout !</h3>
              <p>
                Comme le palmier, la femme fait mille choses à la fois. Mbûrü est le
                symbole de sa richesse et de sa diversité.
              </p>
              <p className="who">- Fondation Mbûrü</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section wrap" id="temoignages">
        <div className="st">
          <p className="kicker">Témoignages</p>
          <h2>
            <span className="lt">Elles et ils</span> <span className="hd">en parlent.</span>
          </h2>
        </div>
        {testimonials.length > 0 ? (
          <ul className="testi-list">
            {testimonials.map((testimonial) => (
              <li key={testimonial.id}>
                <figure>
                  <blockquote>« {testimonial.message} »</blockquote>
                  <figcaption>
                    <strong>{testimonial.name}</strong>
                    {testimonial.role ? `, ${testimonial.role}` : ""}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          <p className="testi-empty">
            Les premiers témoignages de nos bénéficiaires, de leurs familles et de
            nos partenaires seront publiés ici.
          </p>
        )}
        <div className="two align-start">
          <div>
            <p>
              Vous êtes bénéficiaire, parent, mentor ou partenaire de la Fondation
              Mbûrü ? Racontez-nous ce que nos actions ont changé pour vous. Votre
              témoignage est relu par l&apos;équipe avant d&apos;être publié.
            </p>
          </div>
          <TestimonialForm />
        </div>
      </section>

      {partners.length > 0 ? (
        <section className="partners-band">
          <div className="wrap">
            <div className="st light center">
              <p className="kicker light">Nos partenaires</p>
              <h2>
                <span className="lt">Ils nous</span>{" "}
                <span className="hd">font confiance</span>
              </h2>
            </div>
          </div>
          <div className="p-marquee">
            <div className="p-track">
              {[false, true].map((duplicate) =>
                partners.map((partner) =>
                  partner.logo ? (
                    <span
                      className="p-chip p-chip-logo"
                      key={`${duplicate ? "dup-" : ""}${partner.id}`}
                      aria-hidden={duplicate || undefined}
                      title={partner.name}
                    >
                      <Image
                        src={partner.logo}
                        alt={duplicate ? "" : partner.name}
                        width={180}
                        height={90}
                        sizes="180px"
                      />
                    </span>
                  ) : (
                    <span
                      className="p-chip"
                      key={`${duplicate ? "dup-" : ""}${partner.id}`}
                      aria-hidden={duplicate || undefined}
                    >
                      {partner.name}
                    </span>
                  ),
                ),
              )}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section tint" id="contact">
        <div className="wrap two align-start">
          <div>
            <div className="st">
              <p className="kicker">Formulaire</p>
              <h2>
                <span className="lt">Nous</span>{" "}
                <span className="hd">contacter</span>
              </h2>
            </div>
            <p>
              Une question sur nos programmes, une envie de devenir mentor, un projet
              de partenariat ? Écrivez-nous : nous revenons vers vous sous{" "}
              <strong>48 h</strong>.
            </p>
            <div className="info-grid">
              <div className="info">
                <span className="icircle soft">
                  <Icon name="phone" size={28} />
                </span>
                <div>
                  <h4>Téléphone</h4>
                  <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                  {site.phone2 ? <p>{site.phone2}</p> : null}
                </div>
              </div>
              <div className="info">
                <span className="icircle soft">
                  <Icon name="mail" size={28} />
                </span>
                <div>
                  <h4>E-mail</h4>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                  <p>Réponse sous 48 h ouvrées.</p>
                </div>
              </div>
              <div className="info">
                <span className="icircle soft">
                  <Icon name="pin" size={28} />
                </span>
                <div>
                  <h4>Nous trouver</h4>
                  <p>{site.address}</p>
                  <p>{site.location}</p>
                </div>
              </div>
              <div className="info">
                <span className="icircle soft">
                  <Icon name="whatsapp" size={28} />
                </span>
                <div>
                  <h4>WhatsApp</h4>
                  <a
                    href={`https://wa.me/${site.phoneHref.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discuter avec l&apos;équipe
                  </a>
                  <p>Réponse sous 48 h.</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <CtaBand
        eyebrow="Agir avec nous"
        title="Chaque fille, chaque femme mérite sa chance."
        text="Mentor, partenaire, donateur ou bénévole : votre engagement aide une lycéenne à réussir ou une femme à créer son revenu."
        primaryLabel="Nous soutenir"
        primaryHref="/soutenir"
        secondaryLabel="Nous contacter"
        secondaryHref="/#contact"
      />
    </>
  );
}
