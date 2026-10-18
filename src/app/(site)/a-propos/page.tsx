import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { presidentMessage, site, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  alternates: { canonical: "/a-propos" },
  description:
    "Découvrez la Fondation Mbûrü, le sens de son nom, sa présidente fondatrice, ses valeurs et son siège à Bangui.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        current="À propos"
        title={
          <>
            Comme le palmier, <em>la femme tient debout.</em>
          </>
        }
        intro="La Fondation Mbûrü accompagne les jeunes filles vers l'excellence et les femmes vers l'autonomie, à Bangui et en province. Paix, sécurité, développement durable."
        image="/images/femmes-paoua.webp"
        imageAlt="Femmes réunies lors d'une rencontre communautaire en Centrafrique"
      >
        <div className="cta-actions">
          <Link href="/nos-actions" className="btn btn-light">
            Nos actions
            <Icon name="arrow-right" size={20} />
          </Link>
          <a href={`mailto:${site.email}`} className="btn btn-sky">
            Nous rencontrer
            <Icon name="mail" size={16} />
          </a>
        </div>
      </PageHero>

      <section className="section wrap two">
        <div>
          <div className="st">
            <p className="kicker">Qui sommes-nous</p>
            <h2>
              <span className="lt">Une fondation</span>{" "}
              <span className="hd">au service des femmes.</span>
            </h2>
          </div>
          <p>
            La <strong>Fondation Mbûrü</strong> est une organisation centrafricaine
            à but non lucratif, installée à Bangui, avenue David Dacko. Elle agit
            pour l&apos;éducation et l&apos;excellence des jeunes filles,
            l&apos;autonomie économique des femmes rurales et la santé des femmes.
          </p>
          <p>
            Son nom est une image : <strong>Mbûrü veut dire palmier</strong>. Du
            palmier, on tire l&apos;huile, le vin de palme, de quoi décorer la maison
            et se nourrir. Comme lui, la femme fait mille choses à la fois :
            éduquer, entretenir le foyer, soigner, conseiller.
          </p>
          <p className="lead">« Femme résiliente, femme debout ! »</p>
          <p>
            À Bangui, le programme Elles & Nous accompagne des lycéennes de cinq
            établissements publics. À Mbaïki, dans la Lobaye, le projet Sara Savon
            aide des groupements de femmes à créer un revenu. Nos actions sont
            menées avec les familles, les écoles, les autorités et des partenaires
            comme l&apos;Institut Pasteur de Bangui et l&apos;Alliance française.
          </p>
        </div>
        <Image
          src="/images/mburu/lancement-mbaiki.webp"
          alt="Lancement du programme d'autonomisation des femmes à Mbaïki"
          width={336}
          height={222}
          sizes="(max-width: 980px) 92vw, 46vw"
          className="rounded r-br"
        />
      </section>

      <section className="section tint" id="presidente">
        <div className="wrap president">
          <figure className="president-photo">
            <Image
              src="/images/mburu/presidente-lancement.webp"
              alt={`${site.president}, présidente fondatrice de la Fondation Mbûrü`}
              width={335}
              height={336}
              sizes="(max-width: 980px) 70vw, 360px"
            />
          </figure>
          <div>
            <SectionHeading
              kicker="Mot de la présidente"
              title={
                <>
                  <span className="lt">Une conviction</span>{" "}
                  <span className="hd">qui nous rassemble.</span>
                </>
              }
            />
            <blockquote className="president-text">
              {presidentMessage.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </blockquote>
            <p className="president-sign">
              <strong>{site.president}</strong>
              <span>{site.presidentRole}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <SectionHeading
          kicker="Nos valeurs"
            title={
              <>
                <span className="lt">Ce qui nous</span>{" "}
                <span className="hd">fait avancer.</span>
              </>
            }
          intro="Nos valeurs se lisent dans notre façon d'écouter, de former et d'accompagner, à Bangui comme en province."
        />
        <div className="values">
          {values.map((value) => (
            <div key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section tint" id="nous-trouver">
        <div className="wrap two align-start">
          <div>
            <SectionHeading
              kicker="Nous trouver"
              title={
                <>
                  <span className="lt">Notre siège</span>{" "}
                  <span className="hd">à Bangui.</span>
                </>
              }
            />
            <ul className="visit-list">
              <li>
                <Icon name="pin" size={20} />
                <span>
                  {site.address}
                  <br />
                  {site.location}
                </span>
              </li>
              <li>
                <Icon name="phone" size={20} />
                <span>
                  <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                  {site.phone2 ? (
                    <>
                      {" · "}
                      <a href={`tel:${site.phone2Href}`}>{site.phone2}</a>
                    </>
                  ) : null}
                </span>
              </li>
              <li>
                <Icon name="mail" size={20} />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <Icon name="calendar" size={20} />
                <span>Visites sur rendez-vous.</span>
              </li>
            </ul>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-brand"
            >
              Ouvrir dans Google Maps
              <Icon name="external" size={16} />
            </a>
          </div>
          <div className="map-frame">
            <iframe
              title={`Carte : ${site.mapQuery}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=13&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Écrivons la suite ensemble"
        title="Une idée, un projet, une envie de vous engager ?"
        text="Mentors, partenaires, établissements, familles : la Fondation Mbûrü avance avec celles et ceux qui croient en la force des femmes."
        primaryLabel="Nous soutenir"
        primaryHref="/soutenir"
        secondaryLabel="Nous contacter"
        secondaryHref="/#contact"
      />
    </>
  );
}
