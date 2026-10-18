import type { PaymentMethod, PaymentStatus } from "@/db/schema";

/** Select value for "tell me about the next sessions". */
export const NEXT_SESSIONS = "prochaines-sessions";

export const paymentMethodLabels: Record<PaymentMethod, string> = {
  orange_money: "Orange Money",
  especes: "Espèces au bureau",
};

/** The Fondation's programmes are free, so the statuses describe an application. */
export const paymentStatusLabels: Record<PaymentStatus, string> = {
  en_attente: "À étudier",
  declare: "Paiement déclaré",
  confirme: "Retenue",
  annule: "Non retenue",
};

export const paymentStatusOrder: PaymentStatus[] = ["en_attente", "confirme", "annule"];
