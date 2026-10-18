import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { photoCredits } from "@/lib/credits";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Crédits photo",
  alternates: { canonical: "/credits" },
  description:
    "Crédits et licences des photographies d'illustration utilisées sur le site de la Fondation Mbûrü.",
};

export default function CreditsPage() {
  return (
    <>
      <PageHero
        current="Crédits photo"
        title={
          <>
            Crédits photo <em>& remerciements.</em>
          </>
        }
        intro="Les photos des actions de la Fondation proviennent de sa page Facebook. Trois photographies d'illustration proviennent de Wikimedia Commons, sous licence Creative Commons."
      />

      <section className="section wrap">
        <div className="st">
          <p className="kicker">Transparence</p>
          <h2>
            <span className="lt">Des images</span>{" "}
            <span className="hd">et leurs auteurs.</span>
          </h2>
        </div>
        <p>
          Les photos des programmes, des ateliers et des événements ont été prises
          lors des activités de la Fondation Mbûrü et publiées sur sa page Facebook.
          Le logo et les contenus de la Fondation lui appartiennent.
        </p>
        <p>
          Les trois images ci-dessous sont des photographies d&apos;illustration :
          elles ne représentent pas des activités de la Fondation et ont été
          choisies pour évoquer l&apos;école et l&apos;artisanat en Afrique centrale.
        </p>

        <div className="gallery" style={{ marginTop: "2rem" }}>
          {photoCredits.map((photo) => (
            <figure key={photo.slug}>
              <Image
                src={photo.file}
                alt={photo.alt}
                width={800}
                height={600}
                sizes="(max-width: 640px) 92vw, 30vw"
              />
              <figcaption>
                <span>{photo.license}</span>
                {photo.title}
                <br />
                Photo : {photo.artist} -{" "}
                <a href={photo.source} target="_blank" rel="noopener noreferrer">
                  Wikimedia Commons
                </a>
              </figcaption>
            </figure>
          ))}
        </div>

        <p style={{ marginTop: "2rem" }}>
          Vous constatez une erreur d&apos;attribution ou souhaitez nous signaler un
          contenu ? <a href={`mailto:${site.email}`}>Contactez-nous</a> : nous
          corrigerons rapidement.
        </p>
        <p>
          Les icônes du site sont des dessins SVG originaux inspirés de formes
          simples et libres d&apos;utilisation.
        </p>
      </section>
    </>
  );
}
