"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/Icon";

type Item = { id: number | string; name: string; role: string | null; message: string };

/** Placeholder quotes shown until the first real testimonial is approved in the back office. */
const examples: Item[] = [
  {
    id: "ex-1",
    name: "Grâce, 17 ans",
    role: "Lycéenne, programme Elles & Nous",
    message:
      "Avant, je n'osais pas prendre la parole en classe. Avec ma mentore et le club de lecture, j'ai appris à défendre mes idées.",
  },
  {
    id: "ex-2",
    name: "Maman Odette",
    role: "Groupement Sara Savon, Mbaïki",
    message:
      "Le savon que nous fabriquons se vend au marché. Avec le revenu, j'ai pu payer la rentrée de mes enfants.",
  },
  {
    id: "ex-3",
    name: "Sylvie",
    role: "Mentore",
    message:
      "Accompagner une jeune fille une fois par mois, c'est peu de temps pour moi et beaucoup pour elle. Je la vois grandir.",
  },
  {
    id: "ex-4",
    name: "Monsieur Ndakala",
    role: "Parent d'élève, Bangui",
    message:
      "Ma fille a reçu son kit scolaire et suit les cours d'informatique. Elle parle maintenant de devenir ingénieure.",
  },
];

export function TestimonialSlider({ items }: { items: Item[] }) {
  const isExample = items.length === 0;
  const slides = isExample ? examples : items;
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [pages, setPages] = useState(slides.length);
  const [paused, setPaused] = useState(false);

  // Distance between two slide starts, gap included.
  const step = () => {
    const list = track.current;
    const [first, second] = list ? Array.from(list.children as HTMLCollectionOf<HTMLElement>) : [];
    if (!first) return 1;
    return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
  };

  const goTo = useCallback(
    (index: number) => {
      const list = track.current;
      if (!list) return;
      const target = ((index % pages) + pages) % pages;
      list.scrollTo({ left: target * step(), behavior: "smooth" });
    },
    [pages],
  );

  // Several slides can be visible at once, so only some start positions are reachable.
  useEffect(() => {
    const list = track.current;
    if (!list) return;
    const measure = () => {
      setPages(Math.round((list.scrollWidth - list.clientWidth) / step()) + 1);
      setActive(Math.round(list.scrollLeft / step()));
    };
    measure();
    list.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      list.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (paused || pages < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => goTo(active + 1), 6000);
    return () => window.clearInterval(timer);
  }, [active, paused, goTo, pages]);

  return (
    <div
      className="mb-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <ul className="mb-slides" ref={track} aria-roledescription="carrousel" aria-label="Témoignages">
        {slides.map((item, index) => (
          <li
            key={item.id}
            className="mb-slide"
            aria-roledescription="diapositive"
            aria-label={`${index + 1} sur ${slides.length}`}
          >
            <Icon name="quote" size={20} />
            <blockquote>{item.message}</blockquote>
            <p>
              <strong>{item.name}</strong>
              {item.role ? <span>{item.role}</span> : null}
            </p>
          </li>
        ))}
      </ul>
      <div className="mb-slider-nav">
        <button type="button" onClick={() => goTo(active - 1)} aria-label="Témoignage précédent">
          <Icon name="arrow-right" size={20} />
        </button>
        <div className="mb-dots">
          {Array.from({ length: pages }, (_, index) => (
            <button
              type="button"
              key={index}
              className={index === active ? "is-active" : undefined}
              onClick={() => goTo(index)}
              aria-label={`Afficher le témoignage ${index + 1}`}
              aria-current={index === active}
            />
          ))}
        </div>
        <button type="button" onClick={() => goTo(active + 1)} aria-label="Témoignage suivant">
          <Icon name="arrow-right" size={20} />
        </button>
      </div>
      {isExample ? (
        <p className="mb-slider-note">
          Témoignages d&apos;exemple, remplacés automatiquement par ceux de nos
          bénéficiaires dès leur publication.
        </p>
      ) : null}
    </div>
  );
}
