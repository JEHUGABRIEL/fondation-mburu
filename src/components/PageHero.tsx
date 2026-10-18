import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { label: string; href: string };

type PageHeroProps = {
  current: string;
  parents?: Crumb[];
  title: ReactNode;
  intro?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
};

export function PageHero({
  current,
  parents = [],
  title,
  intro,
  image,
  imageAlt = "",
  children,
}: PageHeroProps) {
  return (
    <section className={`lt-hero lt-pagehero${image ? "" : " no-image"}`}>
      <div className="wrap lt-hero-in">
        <div className="lt-band">
          <nav className="crumbs" aria-label="Fil d'Ariane">
            {[{ label: "Accueil", href: "/" }, ...parents].map((crumb) => (
              <span key={crumb.href}>
                <Link href={crumb.href}>{crumb.label}</Link>
                <span className="sep" aria-hidden="true">
                  /
                </span>
              </span>
            ))}
            <span aria-current="page">{current}</span>
          </nav>
          <h1>{title}</h1>
        </div>
        {intro || children ? (
          <div className="lt-hero-below">
            {intro ? <p>{intro}</p> : null}
            {children}
          </div>
        ) : null}
      </div>
      {image ? (
        <div className="lt-hero-media is-single">
          <div className="lt-hero-photo">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 980px) 92vw, 44vw"
              className="cover"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
