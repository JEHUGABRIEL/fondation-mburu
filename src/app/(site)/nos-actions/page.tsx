import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { actions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nos actions",
  alternates: { canonical: "/nos-actions" },
  description:
    "Les actions de la Fondation Mbûrü : éducation et excellence des filles (Elles & Nous), autonomisation des femmes rurales (Sara Savon) et santé des femmes.",
};

const beneficiaries = [
  {
    title: "Les lycéennes",
    text: "Élèves des lycées de Bimbo, de Miskine, des Martyrs, Marie Jeanne Caron et des Rapides, sélectionnées pour leur potentiel.",
  },
  {
    title: "Les femmes rurales",
    text: "Femmes de Mbaïki organisées en groupements, qui créent une activité génératrice de revenus.",
  },
  {
    title: "Les familles",
    text: "Parents associés dès la sélection des élèves, et communauté éducative mobilisée autour des filles.",
  },
  {
    title: "Les femmes de Bangui",
    text: "Commerçantes, ménagères et mères de famille, concernées par nos journées de prévention et de santé.",
  },
];

export default function ActionsPage() {
  return (
    <>
      <PageHero
        current="Nos actions"
        title={
          <>
            Éduquer, rendre autonome, <em>protéger la santé.</em>
          </>
        }
        intro="Trois axes d'action complémentaires, menés à Bangui et à Mbaïki avec les familles, les établissements scolaires et nos partenaires."
        image="/images/ecole-fille.webp"
        imageAlt="Jeune fille en uniforme scolaire"
      >
        <div className="cta-actions">
          <Link href="/programmes" className="btn btn-light">
            Voir nos programmes
            <Icon name="arrow-right" size={20} />
          </Link>
          <Link href="/soutenir" className="btn btn-sky">
            Nous soutenir
            <Icon name="heart" size={16} />
          </Link>
        </div>
      </PageHero>

      <section className="section wrap">
        <SectionHeading
          kicker="Nos programmes"
          title={
            <>
              <span className="lt">Trois axes,</span>{" "}
              <span className="hd">une même ambition.</span>
            </>
          }
          intro="Une fille qui réussit ses études, une femme qui gagne son revenu, une femme en bonne santé : chacune devient plus libre de construire sa vie."
        />
        <div className="post-list">
          {actions.map((action) => (
            <article className="post-row" id={action.slug} key={action.slug}>
              <div className="post-media">
                <Image
                  src={action.image}
                  alt={action.alt}
                  width={340}
                  height={255}
                  sizes="(max-width: 980px) 92vw, 46vw"
                />
              </div>
              <div className="post-body">
                <p className="kicker">{action.kicker}</p>
                <h2>{action.title}</h2>
                <p>{action.description}</p>
                <ul className="list-plain">
                  {action.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <Link href="/soutenir" className="line-more">
                  Soutenir cette action
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHeading
            kicker="Pour qui nous agissons"
            title={
              <>
                <span className="lt">Des femmes, des filles,</span>{" "}
                <span className="hd">des communautés.</span>
              </>
            }
            intro="Nos actions s'adressent d'abord aux filles et aux femmes qui ont le plus besoin d'un coup de pouce pour avancer."
          />
          <div className="values">
            {beneficiaries.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap two">
        <div>
          <div className="st">
            <p className="kicker">Notre méthode</p>
            <h2>
              <span className="lt">Sélectionner, accompagner,</span>{" "}
              <span className="hd">évaluer.</span>
            </h2>
          </div>
          <p>
            Chaque action est préparée avec les personnes concernées : les parents
            pour Elles & Nous, la population de Mbaïki pour Sara Savon. Ensuite, nous
            suivons les bénéficiaires et mesurons les acquis.
          </p>
          <ul className="list-plain">
            <li>Présélection et accord des familles</li>
            <li>Mentorat et ateliers réguliers</li>
            <li>Missions de suivi sur le terrain</li>
            <li>Micro-évaluations pour ajuster nos actions</li>
          </ul>
          <Link href="/a-propos" className="btn btn-brand">
            Découvrir notre organisation
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
        <Image
          src="/images/mburu/sara-savon-1.webp"
          alt="Mission de suivi du projet Sara Savon à Mbaïki"
          width={338}
          height={336}
          sizes="(max-width: 980px) 92vw, 46vw"
          className="rounded r-tl"
        />
      </section>

      <CtaBand
        eyebrow="Agir avec nous"
        title="Une lycéenne, un groupement, une campagne de santé."
        text="Institutions, entreprises, associations : soutenez une action précise et suivez ses résultats sur le terrain."
        primaryLabel="Nous soutenir"
        primaryHref="/soutenir"
        secondaryLabel="Nous écrire"
        secondaryHref="/#contact"
      />
    </>
  );
}
