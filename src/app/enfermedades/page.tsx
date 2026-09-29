import type { Metadata } from "next";
import { diseases } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import EntityCard from "@/components/EntityCard";

export const metadata: Metadata = {
  title: "Enfermedades Vasculares que Atendemos",
  description:
    "Catálogo de enfermedades venosas y arteriales atendidas por el Dr. González Arcos, Angiólogo en Acapulco de Juárez, Guerrero.",
  alternates: { canonical: "/enfermedades" },
};

/**
 * A propósito NO es el carrusel horizontal de la Home (AGENTS.md §2,
 * aclarado 2026-09-24): el carrusel es válido como preview, pero la página
 * de índice completa siempre debe mostrar las 10 enfermedades sin requerir
 * scroll horizontal ni interacción.
 */
export default function EnfermedadesPage() {
  return (
    <main className="bg-ink pb-20">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades" }]} isDark />
      <header className="mx-auto max-w-6xl px-6 pb-8 pt-4">
        <span className="text-xs uppercase tracking-[0.3em] text-artery-soft">Diagnóstico</span>
        <h1 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">
          Enfermedades Vasculares que Atendemos
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Enfermedades venosas y arteriales que se valoran y tratan en consulta de Angiología, Cirugía Vascular y
          Endovascular.
        </p>
      </header>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {diseases.map((disease, i) => (
          <EntityCard
            key={disease.id}
            layout="grid"
            href={`/enfermedades/${disease.slug}`}
            image={disease.image}
            name={disease.name}
            excerpt={disease.description}
            cta="Ver guía médica"
            index={i + 1}
            accent="artery"
          />
        ))}
      </div>
    </main>
  );
}
