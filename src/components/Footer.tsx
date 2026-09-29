import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { doctor, diseases, services, symptoms } from "@/data";
import { formatCredentials } from "@/lib/credentials";

const MAX_LINKS = 6;

/**
 * Footer sobre fondo negro de marca, con el logotipo real en su variante
 * blanca vertical (icono + nombre + especialidad), centrado y con espacio
 * considerable (AGENTS.md §6). Columnas de enfermedades/servicios/síntomas
 * (máx. 6 + "Ver todos") para reforzar el internal linking del grafo.
 */
export default function Footer() {
  const columns = [
    { title: "Enfermedades", href: "/enfermedades", items: diseases.map((d) => ({ label: d.name, href: `/enfermedades/${d.slug}` })) },
    { title: "Servicios", href: "/servicios", items: services.map((s) => ({ label: s.name, href: `/servicios/${s.slug}` })) },
    { title: "Síntomas", href: "/sintomas", items: symptoms.map((s) => ({ label: s.name, href: `/sintomas/${s.slug}` })) },
  ];

  return (
    <footer className="border-t border-border-soft bg-ink-raised text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo-footer-white.png"
            alt={`${doctor.title} ${doctor.name} — ${doctor.specialty}`}
            width={1057}
            height={682}
            className="h-32 w-auto md:h-40"
          />
          <p className="mt-6 text-sm text-vein-soft">{doctor.specialty}</p>
          <address className="mt-4 max-w-md not-italic text-sm text-muted-foreground">
            {doctor.address}, {doctor.city}, {doctor.state}
            <br />
            {doctor.schedule}
            <br />
            Tel: {doctor.phone}
          </address>
          <p className="mt-4 text-xs text-vein-soft">{formatCredentials(doctor)}</p>
        </div>

        <nav aria-label="Mapa del sitio" className="mt-12 grid gap-8 border-t border-border-soft pt-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <Link href={col.href as Route} className="hard-cut text-sm font-semibold uppercase tracking-wide text-artery-soft hover:text-artery">
                {col.title}
              </Link>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {col.items.slice(0, MAX_LINKS).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href as Route} className="hard-cut hover:text-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
                {col.items.length > MAX_LINKS && (
                  <li>
                    <Link href={col.href as Route} className="hard-cut underline hover:text-foreground">
                      Ver todos
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-2 border-t border-border-soft pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl">
            El contenido de este sitio es informativo y educativo; no sustituye una consulta médica profesional.
          </p>
          <Link href="/aviso-de-privacidad" className="hard-cut shrink-0 underline hover:text-foreground">
            Aviso de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
