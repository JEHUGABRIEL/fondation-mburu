import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { RegistrationForm } from "@/components/RegistrationForm";
import { SectionHeading } from "@/components/SectionHeading";
import { getFormations } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programmes",
  alternates: { canonical: "/programmes" },
  description:
    "Les programmes de la Fondation Mbûrü : Elles & Nous pour l'excellence des lycéennes de Bangui, Sara Savon pour l'autonomie des femmes rurales de Mbaïki, et le mentorat.",
};

const faqs = [
  {
    question: "Comment les filles d'Elles & Nous sont-elles sélectionnées ?",
    answer:
      "Les élèves sont présélectionnées dans les lycées partenaires selon leur potentiel. Les parents sont réunis pour découvrir le programme et donner leur autorisation, puis les candidates passent un test d'intégration.",
  },
  {
    question: "Les programmes sont-ils payants ?",
    answer:
      "Non. Les programmes de la Fondation sont gratuits pour les bénéficiaires. Pour Sara Savon, les groupements s'engagent à rembourser une partie des dotations afin que d'autres femmes puissent en profiter.",
  },
  {
    question: "Mon lycée n'est pas partenaire. Puis-je candidater ?",
    answer:
      "Écrivez-nous en indiquant votre établissement et votre classe. Nous étudions les demandes au cas par cas, selon les places disponibles.",
  },
  {
    question: "Comment devenir mentor ?",
    answer:
      "Envoyez une demande avec le formulaire ci-dessous en choisissant « Devenir mentor », ou écrivez-nous. Nous vous recontactons pour échanger sur votre parcours et votre disponibilité.",
  },
];

const numberWords = ["Aucun", "Un", "Deux", "Trois", "Quatre", "Cinq", "Six"];

export default async function ProgrammesPage() {
  const formations = await getFormations();
  const count = numberWords[formations.length] ?? String(formations.length);

  return (
    <>
      <PageHero
        current="Programmes"
        title={
          <>
            Des programmes pour <em>grandir et avancer.</em>
          </>
        }
        intro="Elles & Nous pour les lycéennes de Bangui, Sara Savon pour les femmes rurales de Mbaïki, et une place pour les femmes qui veulent transmettre."
        image="/images/savonnerie.webp"
        imageAlt="Atelier de fabrication de savon"
      >
        <div className="cta-actions">
          <Link href="#programmes" className="btn btn-light">
            Voir les programmes
            <Icon name="arrow-right" size={20} />
          </Link>
          <Link href="#candidature" className="btn btn-sky">
            Candidater
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </PageHero>

      <section className="section wrap two align-start">
        <div>
          <div className="st">
            <p className="kicker">Notre approche</p>
            <h2>
              <span className="lt">Accompagner</span>{" "}
              <span className="hd">dans la durée.</span>
            </h2>
          </div>
          <p>
            Nos programmes ne s&apos;arrêtent pas à un atelier. Les bénéficiaires
            d&apos;Elles & Nous sont suivies d&apos;une année sur l&apos;autre, avec
            des mentors, des formations et des évaluations régulières.
          </p>
          <p>
            À Mbaïki, les groupements de Sara Savon reçoivent un kit de production,
            une formation et des missions de suivi, jusqu&apos;à ce que leur activité
            tienne seule.
          </p>
          <Link href="#programmes" className="line-more">
            Découvrir les programmes
          </Link>
        </div>
        <div className="aside-box">
          <h4>Informations pratiques</h4>
          <p>
            <strong>Public</strong>
            <br />
            Lycéennes de Bangui, femmes rurales de Mbaïki, femmes mentors.
          </p>
          <p>
            <strong>Coût</strong>
            <br />
            Gratuit pour les bénéficiaires.
          </p>
          <p>
            <strong>Lieux</strong>
            <br />
            Bangui et Mbaïki (Lobaye).
          </p>
          <p>
            <strong>Contact</strong>
            <br />
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a> ·{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <Link href="#candidature" className="btn btn-brand">
            Envoyer une candidature
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </section>

      <section className="section tint" id="programmes">
        <div className="wrap">
          <SectionHeading
            kicker="Nos programmes"
            title={
              <>
                <span className="lt">
                  {count} programme{formations.length > 1 ? "s" : ""},
                </span>{" "}
                <span className="hd">une même exigence.</span>
              </>
            }
            intro="Chaque programme a son public et sa méthode. Tous visent l'autonomie et la dignité des filles et des femmes."
          />

          <div className="post-list">
            {formations.map((formation) => (
              <article className="post-row" id={formation.slug} key={formation.id}>
                <div className="post-media">
                  <Image
                    src={formation.image}
                    alt={formation.imageAlt}
                    width={340}
                    height={340}
                    sizes="(max-width: 980px) 92vw, 46vw"
                  />
                </div>
                <div className="post-body">
                  <p className="kicker">{formation.kicker}</p>
                  <h2>{formation.title}</h2>
                  {formation.price || formation.duration ? (
                    <p>
                      {formation.price ? <span className="tagpill">{formation.price}</span> : null}{" "}
                      {formation.duration ? (
                        <span className="tagpill">{formation.duration}</span>
                      ) : null}
                    </p>
                  ) : null}
                  <p>{formation.description}</p>
                  <ul className="check">
                    {formation.program.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {formation.benefits.length > 0 ? (
                    <p>
                      <strong>Ce que le programme apporte :</strong>{" "}
                      {formation.benefits.join(" · ")}.
                    </p>
                  ) : null}
                  {formation.note ? <p className="note">{formation.note}</p> : null}
                  <div className="cta-actions">
                    <Link href="#candidature" className="btn btn-brand">
                      Candidater
                      <Icon name="arrow-right" size={16} />
                    </Link>
                    <a
                      href={`https://wa.me/${site.phoneHref.replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sky"
                    >
                      Poser une question
                      <Icon name="whatsapp" size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint" id="candidature">
        <div className="wrap two align-start">
          <div>
            <div className="st">
              <p className="kicker">Candidatures</p>
              <h2>
                <span className="lt">Rejoindre</span>{" "}
                <span className="hd">un programme.</span>
              </h2>
            </div>
            <p>
              Remplissez le formulaire : vous recevez aussitôt un numéro de dossier et
              une page de suivi personnelle. L&apos;équipe étudie chaque demande et
              vous recontacte pour la suite.
            </p>
            <p>
              Pour Elles & Nous, indiquez votre lycée et votre classe dans le
              message. Les parents seront associés à la sélection.
            </p>
            <p>
              <a href={`tel:${site.phoneHref}`}>
                <strong>{site.phone}</strong>
              </a>{" "}
              ·{" "}
              <a
                href={`https://wa.me/${site.phoneHref.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>{" "}
              · <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>
              {site.address}, {site.location}
            </p>
          </div>
          <RegistrationForm
            formations={formations.map((formation) => ({
              slug: formation.slug,
              label: formation.title,
            }))}
          />
        </div>
      </section>

      <section className="section wrap">
        <SectionHeading
          kicker="Questions fréquentes"
          title={
            <>
              <span className="lt">Vous vous demandez</span>{" "}
              <span className="hd">peut-être…</span>
            </>
          }
        />
        {faqs.map((faq) => (
          <details className="faq" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>

      <CtaBand
        eyebrow="Soutenir un programme"
        title="Un kit scolaire, un kit de savon, une journée de santé."
        text="Chaque soutien finance une action concrète pour une fille ou une femme. Écrivez-nous pour choisir ce que vous voulez soutenir."
        primaryLabel="Nous soutenir"
        primaryHref="/soutenir"
        secondaryLabel="Découvrir nos actions"
        secondaryHref="/nos-actions"
      />
    </>
  );
}
