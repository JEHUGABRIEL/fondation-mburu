import Link from "next/link";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBand({
  eyebrow = "Ensemble, nous pouvons",
  title = "Votre soutien ouvre de nouvelles portes.",
  text = "Devenez partenaire, mentor ou donateur. Chaque geste aide une fille à réussir ou une femme à gagner son autonomie.",
  primaryLabel = "Soutenir nos actions",
  primaryHref = "/soutenir",
  secondaryLabel = "Nous écrire",
  secondaryHref = "/#contact",
}: CtaBandProps) {
  return (
    <section className="section wrap">
      <div className="mb-cta">
        <div>
          <p className="mb-cta-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="mb-actions">
          <Link href={primaryHref} className="btn btn-light">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="btn btn-ghost">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
