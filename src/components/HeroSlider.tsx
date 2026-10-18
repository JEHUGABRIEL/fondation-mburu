"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";

const slides = [
  {
    kicker: "Programme Elles & Nous",
    light: "Former les filles",
    strong: "qui feront demain.",
    text: "À Bangui, la Fondation Mbûrü accompagne des lycéennes au fort potentiel : mentorat, ateliers, informatique, santé et estime de soi.",
    cta: "Découvrir le programme",
    href: "/programmes#elles-et-nous",
    image: "/images/ecole-fille.webp",
    alt: "Jeune fille en uniforme scolaire",
    position: "center 30%",
  },
  {
    kicker: "Projet Sara Savon",
    light: "Un savoir-faire,",
    strong: "un revenu, une dignité.",
    text: "À Mbaïki, des groupements de femmes rurales produisent et vendent leur savon artisanal grâce aux kits et au suivi de la Fondation.",
    cta: "Voir le projet",
    href: "/programmes#sara-savon",
    image: "/images/savonnerie.webp",
    alt: "Atelier de fabrication de savon",
    position: "center",
  },
  {
    kicker: "Femme résiliente, femme debout",
    light: "Comme le palmier,",
    strong: "la femme tient debout.",
    text: "Mbûrü veut dire palmier. Notre fondation soutient la force des femmes centrafricaines par l'éducation, l'autonomie et la santé.",
    cta: "Découvrir la Fondation",
    href: "/a-propos",
    image: "/images/femmes-paoua.webp",
    alt: "Femmes réunies lors d'une rencontre communautaire",
    position: "center",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (paused || stopped) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, stopped]);

  return (
    <section
      className="hero"
      aria-roledescription="carrousel"
      aria-label="Présentation de la Fondation Mbûrü"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((slide, slideIndex) => {
        const active = slideIndex === index;
        return (
          <div
            className={`hslide${active ? " on" : ""}`}
            key={slide.href}
            aria-hidden={!active}
            role="group"
            aria-roledescription="diapositive"
            aria-label={`${slideIndex + 1} sur ${slides.length}`}
          >
            <div className="hero-left">
              <div className="hero-card">
                <p className="kicker light">{slide.kicker}</p>
                <h1>
                  <span className="lt">{slide.light}</span>{" "}
                  <span className="hd">{slide.strong}</span>
                </h1>
                <p className="hero-txt">{slide.text}</p>
                <Link href={slide.href} className="btn btn-sky" tabIndex={active ? 0 : -1}>
                  {slide.cta}
                  <Icon name="arrow-right" size={20} />
                </Link>
              </div>
            </div>
            <div className="hero-right">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={slideIndex === 0}
                sizes="(max-width: 980px) 100vw, 54vw"
                style={{ objectPosition: slide.position }}
                className="cover"
              />
            </div>
          </div>
        );
      })}

      <div className="dots" role="group" aria-label="Choisir une diapositive">
        <button
          type="button"
          className="dots-toggle"
          aria-label={stopped ? "Reprendre le défilement" : "Mettre en pause le défilement"}
          onClick={() => setStopped((value) => !value)}
        >
          <Icon name={stopped ? "play" : "pause"} size={16} />
        </button>
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.href}
            type="button"
            className={slideIndex === index ? "on" : undefined}
            aria-label={`Afficher : ${slide.kicker}`}
            aria-current={slideIndex === index ? "true" : undefined}
            onClick={() => setIndex(slideIndex)}
          />
        ))}
      </div>
    </section>
  );
}
