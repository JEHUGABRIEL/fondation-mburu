import type { Metadata } from "next";
import Link from "next/link";
import { getImageOptions } from "@/lib/admin/queries";
import { requireAdmin } from "@/lib/auth/session";
import { FormationForm } from "../../../_components/FormationForm";

export const metadata: Metadata = { title: "Nouveau programme" };

export default async function NewFormationPage() {
  await requireAdmin();
  const imageOptions = await getImageOptions();
  return (
    <>
      <div className="adm-head">
        <div>
          <p className="adm-crumb">
            <Link href="/admin/programmes">Programmes</Link>
          </p>
          <h1>Nouveau programme</h1>
        </div>
      </div>
      <FormationForm imageOptions={imageOptions} />
    </>
  );
}
