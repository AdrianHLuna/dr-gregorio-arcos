import type { Metadata } from "next";
import { symptoms } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import EntityCard from "@/components/EntityCard";

export const metadata: Metadata = {
  title: "Síntomas Vasculares: ¿Cuándo Consultar?",
  description:
    "Guía de síntomas venosos y arteriales frecuentes y cuándo acudir con el Dr. González Arcos, Angiólogo en Acapulco de Juárez.",
  alternates: { canonical: "/sintomas" },
};

/**
 * A propósito NO es el carrusel horizontal de la Home (AGENTS.md §2,
 * aclarado 2026-09-24): el carrusel es válido como preview, pero la página
 * de índice completa siempre debe mostrar los 10 síntomas sin requerir
 * scroll horizontal ni interacción.
 */
export default function SintomasPage() {
  return (
    <main className="bg-ink pb-20">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} isDark />
      <header className="mx-auto max-w-6xl px-6 pb-8 pt-4">
        <span className="text-xs uppercase tracking-[0.3em] text-vein-pale">Orientación</span>
        <h1 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">
          Síntomas Vasculares: ¿Cuándo Consultar?
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Si tu síntoma es de aparición súbita o intensa, acude directamente a un servicio de urgencias: estas
          páginas son orientación educativa, no reemplazan una valoración de urgencia.
        </p>
      </header>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {symptoms.map((symptom, i) => (
          <EntityCard
            key={symptom.id}
            layout="grid"
            href={`/sintomas/${symptom.slug}`}
            image={symptom.image}
            name={symptom.name}
            excerpt={symptom.description}
            cta="Ver orientación"
            index={i + 1}
            accent="vein"
          />
        ))}
      </div>
    </main>
  );
}
