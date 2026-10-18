import Link from "next/link";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

const actionLinks = [
  { label: "Éducation et excellence des filles", href: "/nos-actions#education-excellence" },
  { label: "Autonomisation des femmes rurales", href: "/nos-actions#autonomisation-rurale" },
  { label: "Santé des femmes", href: "/nos-actions#sante-des-femmes" },
  { label: "Nos programmes", href: "/programmes" },
];

const siteLinks = [
  { label: "Qui sommes-nous", href: "/a-propos" },
  { label: "Nos actions", href: "/nos-actions" },
  { label: "Actualités", href: "/actualites" },
  { label: "Nous soutenir", href: "/soutenir" },
];

export function SiteFooter() {
  return (
    <>
      <footer className="lt-foot">
        <div className="wrap lt-foot-top">
          <div className="lt-foot-brand">
            <strong>Fondation Mbûrü</strong>
            <p>{site.slogan}</p>
          </div>
          <nav className="lt-foot-col" aria-label="Nos actions">
            <h4>Nos actions</h4>
            <ul>
              {actionLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="lt-foot-col" aria-label="Le site">
            <h4>La Fondation</h4>
            <ul>
              {siteLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lt-foot-col">
            <h4>Nous joindre</h4>
            <ul>
              <li>
                {site.address}, {site.location}
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              </li>
              {site.phone2 ? (
                <li>
                  <a href={`tel:${site.phone2Href}`}>{site.phone2}</a>
                </li>
              ) : null}
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              {site.orangeMoney ? <li>Orange Money : {site.orangeMoney}</li> : null}
            </ul>
          </div>
        </div>

        <div className="wrap lt-foot-mid">
          <p>
            Organisation centrafricaine à but non lucratif pour l&apos;éducation des
            filles, l&apos;autonomie économique et la santé des femmes.
          </p>
          <div className="lt-foot-social">
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
        </div>

        <div className="wrap lt-foot-bottom">
          <span className="foot-links">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/mentions-legales#confidentialite">Confidentialité</Link>
            <Link href="/conditions">Conditions d&apos;utilisation</Link>
            <Link href="/credits">Crédits photo</Link>
            <a href="#top" className="to-top">
              Retour en haut de page
              <Icon name="arrow-up-right" size={16} />
            </a>
          </span>
          <span>
            © {site.founded} {site.name}
          </span>
        </div>
      </footer>

      <a
        className="fab"
        href={`https://wa.me/${site.phoneHref.replace("+", "")}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="whatsapp" size={20} />
        <span className="fab-txt">Nous contacter</span>
      </a>
    </>
  );
}
