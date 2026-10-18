import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nous soutenir",
  alternates: { canonical: "/soutenir" },
  description:
    "Soutenez la Fondation Mbûrü : dons, kits scolaires et de dignité, mécénat, mentorat et partenariats pour les filles et les femmes de Centrafrique.",
};

const impact = [
  {
    title: "Une lycéenne, un avenir",
    text: "Kits scolaires, cours d'informatique, ateliers : votre soutien accompagne une fille du programme Elles & Nous.",
    icon: "book" as const,
  },
  {
    title: "Un groupement, un revenu",
    text: "Un kit de production de savon permet à un groupement de vingt femmes de Mbaïki de lancer son activité.",
    icon: "sprout" as const,
  },
  {
    title: "Une femme, sa santé",
    text: "Kits de dignité, journées de sensibilisation et campagnes de dépistage pour la santé des femmes.",
    icon: "heart" as const,
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        current="Nous soutenir"
        title={
          <>
            Votre soutien change <em>des vies.</em>
          </>
        }
        intro="Un kit scolaire, un kit de savon, une heure de mentorat : chaque geste aide une fille à réussir ou une femme à gagner son autonomie."
        image="/images/ecole-fille.webp"
        imageAlt="Jeune fille en uniforme scolaire"
      >
        <div className="cta-actions">
          <Link href="#don" className="btn btn-light">
            Faire un don
            <Icon name="heart" size={20} />
          </Link>
          <Link href="#partenariat" className="btn btn-sky">
            Devenir partenaire
            <Icon name="briefcase" size={16} />
          </Link>
        </div>
      </PageHero>

      <section className="section wrap two align-start" id="don">
        <div className="aside-box brand">
          <p className="f-kick">Faire un don</p>
          <h4>Un geste simple, un impact direct.</h4>
          <p>
            Pour faire un don à la Fondation, contactez l&apos;équipe : nous vous
            indiquons les modalités et vous informons de l&apos;usage de votre
            contribution.
          </p>
          {site.orangeMoney ? (
            <div className="give-box">
              <span className="give-box-label">Numéro Orange Money</span>
              <strong className="give-box-value">{site.orangeMoney}</strong>
              <small>
                Après votre versement, contactez-nous pour nous indiquer l&apos;objet
                de votre soutien.
              </small>
            </div>
          ) : null}
          <a
            href={`https://wa.me/${site.phoneHref.replace("+", "")}?text=${encodeURIComponent(
              "Bonjour la Fondation Mbûrü, je souhaite faire un don. Pouvez-vous m'indiquer les modalités ?",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Faire un don
            <Icon name="whatsapp" size={20} />
          </a>
        </div>

        <div>
          <SectionHeading
            kicker="Ce que votre soutien permet"
            title={
              <>
                <span className="lt">Des résultats concrets,</span>{" "}
                <span className="hd">au plus près des besoins.</span>
              </>
            }
          />
          <ul className="list-plain">
            <li>
              <strong>Équiper une lycéenne</strong> - kit scolaire, kit de dignité,
              accès aux cours d&apos;informatique.
            </li>
            <li>
              <strong>Lancer un groupement</strong> - kit de production de savon
              artisanal et suivi des femmes de Mbaïki.
            </li>
            <li>
              <strong>Financer une journée</strong> - sensibilisation à la santé,
              prévention des grossesses précoces, atelier d&apos;estime de soi.
            </li>
            <li>
              <strong>Devenir mentor</strong> - accompagner une fille d&apos;Elles &
              Nous et partager votre parcours.
            </li>
          </ul>
          <a href={`mailto:${site.email}`} className="btn btn-brand">
            Écrire à l&apos;équipe
            <Icon name="mail" size={20} />
          </a>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHeading
            kicker="Votre impact"
            title={
              <>
                <span className="lt">Ce que nous construisons</span>{" "}
                <span className="hd">ensemble.</span>
              </>
            }
            intro="Nos actions sont suivies et évaluées. Nous vous tenons informé·e de ce que votre soutien a permis."
          />
          <div className="icon-row">
            {impact.map((item) => (
              <article key={item.title}>
                <div className="irow-head">
                  <span className="icircle">
                    <Icon name={item.icon} size={28} />
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap two align-start" id="partenariat">
        <div>
          <SectionHeading
            kicker="Partenariat & bénévolat"
            title={
              <>
                <span className="lt">Agissons</span>{" "}
                <span className="hd">ensemble.</span>
              </>
            }
          />
          <p>
            Vous représentez une entreprise, une institution, une association ou
            vous souhaitez offrir un peu de votre temps ? Nous construisons des
            partenariats adaptés à vos moyens et aux besoins du terrain.
          </p>
          <ul className="list-plain">
            <li>Mécénat financier ou en nature (kits, matériel informatique)</li>
            <li>Partage de compétences et mentorat</li>
            <li>Accueil d&apos;ateliers et d&apos;événements</li>
            <li>Co-construction de programmes</li>
          </ul>
        </div>
        <div className="aside-box">
          <h4>Un projet de soutien à construire ?</h4>
          <p>
            Écrivez-nous à <a href={`mailto:${site.email}`}>{site.email}</a> ou
            appelez le <a href={`tel:${site.phoneHref}`}>{site.phone}</a>. Nous vous
            répondrons avec plaisir.
          </p>
          <p>
            <Icon name="pin" size={16} /> {site.address}, {site.location}
          </p>
          <Link href="/#contact" className="btn btn-brand">
            Nous contacter
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </section>

      <CtaBand
        eyebrow="Merci"
        title="Chaque geste compte, chaque rencontre transforme."
        text="Merci aux familles, aux établissements, aux mentors et aux partenaires qui croient en la force des filles et des femmes centrafricaines."
        primaryLabel="Nous contacter"
        primaryHref="/#contact"
        secondaryLabel="Découvrir nos actions"
        secondaryHref="/nos-actions"
      />
    </>
  );
}
