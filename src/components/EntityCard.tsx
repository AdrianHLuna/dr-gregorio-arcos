import Link from "next/link";
import type { Route } from "next";
import { ArrowUpRight } from "lucide-react";
import EntityImage from "./EntityImage";

interface EntityCardProps {
  /** String en vez de `Route`: se construye dinámicamente a partir del slug
   * de cada entidad, y el tipado literal de rutas de Next solo se aplica de
   * forma especial al prop `href` de `<Link>` en el sitio donde se llama, no
   * a props intermedios — se castea al pasarlo a `<Link>` más abajo. */
  href: string;
  image?: string;
  name: string;
  excerpt: string;
  cta: string;
  index: number;
  accent?: "artery" | "vein";
  /** "carousel" (por defecto): ancho fijo para la fila deslizable de la Home.
   * "grid": ocupa toda su celda — usado en las páginas de índice completas
   * (`/enfermedades`, `/servicios`, `/sintomas`), donde AGENTS.md §2 exige
   * que las 10 entidades se vean siempre, sin requerir scroll horizontal. */
  layout?: "carousel" | "grid";
}

const ACCENT_TEXT: Record<NonNullable<EntityCardProps["accent"]>, string> = {
  artery: "text-artery-soft",
  vein: "text-vein-pale",
};
const ACCENT_HOVER: Record<NonNullable<EntityCardProps["accent"]>, string> = {
  artery: "hover:border-artery",
  vein: "hover:border-vein",
};
const ACCENT_LINK: Record<NonNullable<EntityCardProps["accent"]>, string> = {
  artery: "hover:text-artery",
  vein: "hover:text-vein-pale",
};

/**
 * Tarjeta del carrusel horizontal (dirección "Circulación"). Contenedor de
 * imagen siempre grande (AGENTS.md §2, aspect-[4/3] con mínimo ~220px de
 * lado mayor) e índice numerado sobre la imagen, en vez de folio circular o
 * icono de acento — composición distinta a los 4 sitios ya registrados.
 */
export default function EntityCard({
  href,
  image,
  name,
  excerpt,
  cta,
  index,
  accent = "artery",
  layout = "carousel",
}: EntityCardProps) {
  const widthClass = layout === "carousel" ? "snap-item w-[78vw] shrink-0 sm:w-72" : "w-full";
  return (
    <article className={`hard-cut ${widthClass} border border-border bg-surface ${ACCENT_HOVER[accent]}`}>
      <div className="relative">
        <EntityImage src={image} alt={name} size="card" />
        <span className={`absolute left-3 top-3 bg-ink/80 px-2 py-1 font-mono text-xs ${ACCENT_TEXT[accent]}`}>
          {String(index).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-col gap-3 p-5">
        <h3 className="text-base font-semibold leading-snug text-foreground">{name}</h3>
        <p className="line-clamp-3 text-sm text-muted-foreground">{excerpt}</p>
        <Link
          href={href as Route}
          className={`hard-cut mt-1 inline-flex items-center gap-1.5 self-start text-sm font-medium text-foreground ${ACCENT_LINK[accent]}`}
        >
          {cta}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
