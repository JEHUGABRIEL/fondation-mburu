"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { navigation, site } from "@/lib/site";

type NavListProps = { variant: "bar" | "drawer"; onNavigate?: () => void };

function NavList({ variant, onNavigate, pathname }: NavListProps & { pathname: string | null }) {
  const isActive = (href: string) =>
    pathname === null ? false : href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <ul>
      {navigation.map((item) => {
        const active = isActive(item.href);
        const link = (
          <Link
            href={item.href}
            className={variant === "bar" && active ? "on" : undefined}
            aria-current={active ? "page" : undefined}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        );
        return variant === "bar" ? (
          <li key={item.href}>{link}</li>
        ) : (
          <li key={item.href} className={active ? "on" : undefined}>
            <div className="mrow">{link}</div>
          </li>
        );
      })}
    </ul>
  );
}

function ActiveNavList(props: NavListProps) {
  return <NavList {...props} pathname={usePathname()} />;
}

/**
 * The current path is request data on dynamic routes, so it is read inside a
 * Suspense boundary; the fallback renders the same links without highlighting.
 */
function Nav(props: NavListProps) {
  return (
    <Suspense fallback={<NavList {...props} pathname={null} />}>
      <ActiveNavList {...props} />
    </Suspense>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`site-head${stuck ? " stuck" : ""}`}>
      <div className="head-in">
        <Link href="/" className="brand" aria-label={`${site.name} - accueil`}>
          <Image
            src="/images/logo.png"
            alt="Logo de la Fondation Mbûrü"
            width={512}
            height={512}
            className="brand-img"
            priority
          />
          <span className="brand-word">
            <strong>Fondation Mbûrü</strong>
          </span>
        </Link>

        <nav className="navbar" aria-label="Navigation principale">
          <Nav variant="bar" />
        </nav>

        <Link href="/soutenir" className="nav-cta">
          Nous soutenir
        </Link>

        <button
          type="button"
          className={`burger${open ? " on" : ""}`}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mback${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <nav
        id="mobile-menu"
        className={`mmenu${open ? " open" : ""}`}
        aria-label="Navigation mobile"
        inert={!open}
      >
        <div className="mmenu-head">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Logo de la Fondation Mbûrü"
              width={500}
              height={500}
              className="brand-img"
            />
            <span className="brand-word">
              <strong>Mbûrü</strong>
              <small>Fondation</small>
            </span>
          </Link>
          <button
            type="button"
            className="mclose"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <div className="mmenu-social">
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook - Fondation Mbûrü"
          >
            <Icon name="facebook" size={20} />
          </a>
          <a
            href={`https://wa.me/${site.phoneHref.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp - Fondation Mbûrü"
          >
            <Icon name="whatsapp" size={20} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Envoyer un e-mail à la Fondation Mbûrü">
            <Icon name="mail" size={20} />
          </a>
        </div>

        <div className="mmenu-list">
          <Nav variant="drawer" onNavigate={() => setOpen(false)} />
          <div className="mmenu-foot">
            <Link href="/soutenir" className="btn btn-light" onClick={() => setOpen(false)}>
              Nous soutenir
              <Icon name="heart" size={16} />
            </Link>
            <div className="mmenu-contact">
              <a href={`tel:${site.phoneHref}`}>
                <Icon name="phone" size={16} />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`}>
                <Icon name="mail" size={16} />
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
