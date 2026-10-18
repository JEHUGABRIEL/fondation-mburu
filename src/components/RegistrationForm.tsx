"use client";

import Link from "next/link";
import { FormStatus, Honeypot } from "@/components/FormStatus";
import { Icon } from "@/components/Icon";
import { type FormState, submitRegistration } from "@/lib/public-actions";
import { NEXT_SESSIONS } from "@/lib/registration";
import { useActionForm } from "@/lib/use-action-form";

export type FormationOption = { slug: string; label: string };

const initialState: FormState = { status: "idle", message: "" };
export function RegistrationForm({ formations }: { formations: FormationOption[] }) {
  const { state, onSubmit, pending } = useActionForm(submitRegistration, initialState);
  const done = state.status === "success";

  return (
    <form className="form" onSubmit={onSubmit}>
      <h3 className="form-title">
        Envoyer une <span className="lt">candidature</span>
      </h3>
      <p className="note">
        Les champs marqués d&apos;un astérisque (*) sont obligatoires.
      </p>
      <fieldset className="form-fields" disabled={pending || done}>
        <div className="row2">
          <label>
            Nom complet *
            <input
              name="name"
              type="text"
              placeholder="Votre nom et prénom"
              autoComplete="name"
              maxLength={120}
              required
            />
          </label>
          <label>
            Téléphone *
            <input
              name="phone"
              type="tel"
              placeholder="+236 ..."
              autoComplete="tel"
              maxLength={40}
              required
            />
          </label>
        </div>
        <div className="row2">
          <label>
            E-mail (facultatif)
            <input
              name="email"
              type="email"
              placeholder="vous@exemple.com"
              autoComplete="email"
              maxLength={200}
            />
          </label>
          <label>
            Programme choisi *
            <select name="formation" required defaultValue="">
              <option value="" disabled>
                Sélectionner un programme
              </option>
              {formations.map((formation) => (
                <option value={formation.slug} key={formation.slug}>
                  {formation.label}
                </option>
              ))}
              <option value={NEXT_SESSIONS}>
                Je souhaite être informé·e des prochaines sessions
              </option>
            </select>
          </label>
        </div>
        {/* Programmes are free: no payment step. */}
        <input type="hidden" name="paymentMethod" value="orange_money" />
        <label>
          Votre message (facultatif)
          <textarea
            name="message"
            rows={4}
            placeholder="Lycée et classe, groupement, disponibilité, question…"
            maxLength={2000}
          />
        </label>
        <Honeypot />
        <button type="submit" className="btn btn-brand">
          {pending ? "Envoi en cours…" : done ? "Candidature envoyée" : "Envoyer ma candidature"}
          <Icon name={done ? "check" : "arrow-right"} size={20} />
        </button>
      </fieldset>
      <p className="note form-privacy">
        Vos informations servent uniquement à traiter votre demande.{" "}
        <Link href="/mentions-legales#confidentialite">En savoir plus</Link>
      </p>
      <FormStatus state={state} />
    </form>
  );
}
