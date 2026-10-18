import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { requireAdmin } from "@/lib/auth/session";
import { Flash } from "../../_components/Alerts";
import { RegistrationList } from "../../_components/RegistrationList";

export const metadata: Metadata = { title: "Candidatures" };

export default async function Page({ searchParams }: PageProps<"/admin/inscriptions">) {
  await requireAdmin();
  const { ok, statut } = await searchParams;

  return (
    <>
      <div className="adm-head">
        <div>
          <h1>Candidatures</h1>
          <p>Candidatures envoyées depuis la page Programmes : étudiez chaque dossier, puis retenez-le ou non.</p>
        </div>
        <a href="/admin/export/inscriptions" download className="adm-btn adm-btn-ghost">
          <Icon name="download" size={16} />
          Exporter (CSV)
        </a>
      </div>
      <Flash ok={ok} />
      <RegistrationList statut={typeof statut === "string" ? statut : undefined} />
    </>
  );
}
