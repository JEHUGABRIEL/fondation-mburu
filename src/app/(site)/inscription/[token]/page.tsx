import { eq } from "drizzle-orm";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyButton } from "@/components/CopyButton";
import { DeclarePaymentForm } from "@/components/DeclarePaymentForm";
import { Icon } from "@/components/Icon";
import { db } from "@/db";
import { registrations } from "@/db/schema";
import { formatDateTime } from "@/lib/admin/status";
import { paymentMethodLabels } from "@/lib/registration";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Suivi de ma candidature",
  robots: { index: false, follow: false },
};

const paidSteps = [
  { key: "recue", label: "Demande reçue" },
  { key: "declare", label: "Paiement déclaré" },
  { key: "confirme", label: "Place confirmée" },
] as const;

/** Free programmes: no payment step. */
const freeSteps = [
  { key: "recue", label: "Candidature reçue" },
  { key: "etude", label: "Dossier étudié" },
  { key: "confirme", label: "Candidature retenue" },
] as const;

export default async function RegistrationTrackingPage({
  params,
}: PageProps<"/inscription/[token]">) {
  const { token } = await params;
  if (!/^[\w-]{20,40}$/.test(token)) notFound();

  const [file] = await db.select().from(registrations).where(eq(registrations.token, token)).limit(1);
  if (!file || !file.reference) notFound();

  const paid = Boolean(file.amount);
  const steps = paid ? paidSteps : freeSteps;
  const reached: Record<string, boolean> = {
    recue: true,
    declare: file.paymentStatus === "declare" || file.paymentStatus === "confirme",
    etude: file.status !== "nouveau" || file.paymentStatus === "confirme",
    confirme: file.paymentStatus === "confirme",
  };
  const cancelled = file.paymentStatus === "annule";
  const needsPayment = Boolean(file.amount) && !cancelled && file.paymentStatus !== "confirme";
  const whatsapp = `https://wa.me/${site.phoneHref.replace("+", "")}?text=${encodeURIComponent(
    `Bonjour la Fondation Mbûrü, je vous écris au sujet de mon dossier ${file.reference} (${file.formation}).`,
  )}`;

  return (
    <section className="section wrap track">
      <p className="kicker">Suivi de ma candidature</p>
      <h1 className="track-title">
        Dossier <span>{file.reference}</span>
      </h1>
      <p className="track-lead">
        Bonjour {file.name.split(" ")[0]}, conservez cette page dans vos favoris : elle
        indique à tout moment où en est votre candidature.
      </p>

      {cancelled ? (
        <p className="track-alert">
          Votre candidature n&apos;a pas été retenue cette fois-ci. Pour toute
          question, contactez l&apos;équipe avec votre numéro de dossier.
        </p>
      ) : (
        <ol className="track-steps" aria-label="Avancement">
          {steps.map((step) => (
            <li key={step.key} data-done={reached[step.key]}>
              <span aria-hidden="true">{reached[step.key] ? <Icon name="check" size={16} /> : null}</span>
              {step.label}
              <span className="adm-sr">{reached[step.key] ? " (fait)" : " (à venir)"}</span>
            </li>
          ))}
        </ol>
      )}

      <dl className="track-summary">
        <div>
          <dt>Programme</dt>
          <dd>{file.formation}</dd>
        </div>
        {file.amount ? (
          <div>
            <dt>Montant</dt>
            <dd>{file.amount}</dd>
          </div>
        ) : null}
        {paid ? (
          <div>
            <dt>Paiement</dt>
            <dd>{paymentMethodLabels[file.paymentMethod]}</dd>
          </div>
        ) : null}
        <div>
          <dt>Demande envoyée le</dt>
          <dd>{formatDateTime(file.createdAt)}</dd>
        </div>
      </dl>

      {file.paymentStatus === "confirme" ? (
        <div className="track-box track-box-ok">
          <h2>Votre candidature est retenue.</h2>
          <p>
            Félicitations ! L&apos;équipe vous contacte par téléphone ou WhatsApp pour
            vous présenter la suite du programme.
          </p>
        </div>
      ) : null}

      {!paid && !cancelled && file.paymentStatus !== "confirme" ? (
        <div className="track-box">
          <h2>Votre dossier est entre de bonnes mains.</h2>
          <p>
            L&apos;équipe étudie votre candidature et vous recontacte par téléphone ou
            WhatsApp. Les programmes de la Fondation sont gratuits : aucun paiement
            ne vous sera demandé.
          </p>
        </div>
      ) : null}

      {needsPayment && file.paymentMethod === "orange_money" ? (
        <div className="track-pay">
          <div className="track-box">
            <h2>Payer par Orange Money</h2>
            <ol className="track-howto">
              <li>
                Depuis votre menu Orange Money, faites un transfert du montant
                <span className="copy-line">
                  <strong>{file.amount}</strong>
                  <CopyButton value={file.amount.replace(/[^\d]/g, "")} label="le montant" />
                </span>
              </li>
              <li>
                au numéro de la Fondation Mbûrü
                <span className="copy-line">
                  <strong>{site.orangeMoney}</strong>
                  <CopyButton value={site.orangeMoney.replace(/\s/g, "")} label="le numéro Orange Money" />
                </span>
              </li>
              <li>
                Si un motif vous est demandé, indiquez votre numéro de dossier
                <span className="copy-line">
                  <strong>{file.reference}</strong>
                  <CopyButton value={file.reference} label="le numéro de dossier" />
                </span>
              </li>
              <li>
                Gardez le SMS de confirmation, puis déclarez le paiement ci-contre.
              </li>
            </ol>
            <p className="note">
              Ne communiquez jamais votre code secret Orange Money, ni à nous ni à
              personne d&apos;autre.
            </p>
          </div>
          <div>
            {file.paymentStatus === "declare" && file.paymentDeclaredAt ? (
              <p className="track-alert track-alert-info">
                Paiement déclaré le {formatDateTime(file.paymentDeclaredAt)} (ID {file.transactionId}).
                L&apos;équipe le vérifie sur son relevé Orange Money.
              </p>
            ) : null}
            <DeclarePaymentForm
              token={token}
              transactionId={file.transactionId}
              payerPhone={file.payerPhone || file.phone}
            />
          </div>
        </div>
      ) : null}

      {needsPayment && file.paymentMethod === "especes" ? (
        <div className="track-box">
          <h2>Payer en espèces</h2>
          <p>
            Le règlement de <strong>{file.amount}</strong> se fait au bureau de l&apos;ONG à
            Bangui, sur rendez-vous. Écrivez-nous sur WhatsApp en indiquant votre numéro
            de dossier <strong>{file.reference}</strong> pour convenir d&apos;un moment.
            Un reçu vous sera remis.
          </p>
        </div>
      ) : null}

      <div className="track-help">
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <Icon name="whatsapp" size={20} />
          Écrire à l&apos;équipe sur WhatsApp
        </a>
        <a href={`tel:${site.phoneHref}`} className="btn btn-outline">
          <Icon name="phone" size={20} />
          {site.phone}
        </a>
        <Link href="/programmes" className="line-more">
          Retour aux formations
        </Link>
      </div>
    </section>
  );
}
