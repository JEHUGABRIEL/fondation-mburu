"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";

type Photo = { src: string; alt: string };

/** Hero photos shown one at a time, cross-fading every few seconds. */
export function HeroCarousel({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (paused || stopped || photos.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % photos.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, stopped, photos.length]);

  return (
    <div
      className="lt-hero-media is-carousel"
      aria-roledescription="carrousel"
      aria-label="Photos de la Fondation"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {photos.map((photo, photoIndex) => (
        <div
          className={`lt-hero-slide${photoIndex === index ? " on" : ""}`}
          key={photo.src}
          aria-hidden={photoIndex !== index}
          role="group"
          aria-roledescription="diapositive"
          aria-label={`${photoIndex + 1} sur ${photos.length}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority={photoIndex === 0}
            sizes="(max-width: 980px) 100vw, 50vw"
            className="cover"
          />
        </div>
      ))}
      <div className="lt-hero-dots" role="group" aria-label="Choisir une photo">
        <button
          type="button"
          className="lt-hero-toggle"
          aria-label={stopped ? "Reprendre le défilement" : "Mettre en pause le défilement"}
          onClick={() => setStopped((value) => !value)}
        >
          <Icon name={stopped ? "play" : "pause"} size={16} />
        </button>
        {photos.map((photo, photoIndex) => (
          <button
            key={photo.src}
            type="button"
            className={photoIndex === index ? "is-active" : undefined}
            aria-label={`Afficher la photo ${photoIndex + 1}`}
            aria-current={photoIndex === index}
            onClick={() => setIndex(photoIndex)}
          />
        ))}
      </div>
    </div>
  );
}
