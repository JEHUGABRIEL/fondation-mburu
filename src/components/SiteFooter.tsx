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
      <footer className="footer">
        <div className="wrap foot-grid">
          <div>
            <p className="f-kick">Fondation Mbûrü</p>
            <h4>À propos de nous</h4>
            <p>
              Organisation centrafricaine à but non lucratif pour l&apos;éducation
              des filles, l&apos;autonomie économique et la santé des femmes. Paix,
              sécurité, développement durable.
            </p>
            <Link href="/a-propos" className="f-more">
              En savoir plus
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>

          <div>
            <p className="f-kick">Nos actions</p>
            <h4>Ce que nous faisons</h4>
            <ul>
              {actionLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="f-kick">Navigation</p>
            <h4>Le site</h4>
            <ul>
              {siteLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="f-kick">Contact</p>
            <h4>Nous joindre</h4>
            <ul className="foot-contact">
              <li>
                <Icon name="pin" size={16} />
                <span>
                  {site.address}, {site.location}
                </span>
              </li>
              <li>
                <Icon name="phone" size={16} />
                <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              </li>
              {site.phone2 ? (
                <li>
                  <Icon name="phone" size={16} />
                  <a href={`tel:${site.phone2Href}`}>{site.phone2}</a>
                </li>
              ) : null}
              <li>
                <Icon name="mail" size={16} />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
            {site.orangeMoney ? (
              <div className="foot-om">
                <span>Orange Money</span>
                <strong>{site.orangeMoney}</strong>
              </div>
            ) : null}
            <div className="f-social">
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
        </div>

        <div className="foot-bottom">
          <div className="wrap foot-bottom-in">
            <span>
              © {site.founded} {site.name}. {site.slogan}
            </span>
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
          </div>
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
