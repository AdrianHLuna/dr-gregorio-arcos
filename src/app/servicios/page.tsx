import type { Metadata } from "next";
import { services } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import EntityCard from "@/components/EntityCard";

export const metadata: Metadata = {
  title: "Servicios y Procedimientos Vasculares",
  description:
    "Catálogo de servicios y procedimientos de Angiología, Cirugía Vascular y Endovascular con el Dr. González Arcos en Acapulco.",
  alternates: { canonical: "/servicios" },
};

/**
 * A propósito NO es el carrusel horizontal de la Home (AGENTS.md §2,
 * aclarado 2026-09-24): el carrusel es válido como preview, pero la página
 * de índice completa siempre debe mostrar los 10 servicios sin requerir
 * scroll horizontal ni interacción.
 */
export default function ServiciosPage() {
  return (
    <main className="bg-navy pb-20">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} isDark />
      <header className="mx-auto max-w-6xl px-6 pb-8 pt-4">
        <span className="text-xs uppercase tracking-[0.3em] text-vein-pale">Procedimientos</span>
        <h1 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">
          Servicios y Procedimientos Vasculares
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Desde estudios de diagnóstico no invasivos hasta procedimientos endovasculares y cirugía vascular.
        </p>
      </header>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <EntityCard
            key={service.id}
            layout="grid"
            href={`/servicios/${service.slug}`}
            image={service.image}
            name={service.name}
            excerpt={service.description}
            cta="Ver procedimiento"
            index={i + 1}
            accent="vein"
          />
        ))}
      </div>
    </main>
  );
}
