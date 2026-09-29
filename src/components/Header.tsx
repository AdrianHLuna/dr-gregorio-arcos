import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import MobileMenu from "./MobileMenu";

const navItems: { label: string; href: Route }[] = [
  { label: "Inicio", href: "/" },
  { label: "Enfermedades", href: "/enfermedades" },
  { label: "Servicios", href: "/servicios" },
  { label: "Síntomas", href: "/sintomas" },
  { label: "Contacto", href: "/contacto" },
];

/**
 * Header asimétrico de una sola fila — deliberadamente distinto del esqueleto
 * de dos niveles (barra de credenciales + fila logo/nav/botón) que comparten
 * `dr-gustavo-alvarez` y `dr-oliver-martinez` (hallazgo real 2026-09-24: los
 * 3 headers se veían iguales solo repintados). Aquí: logo grande a la
 * izquierda (más alto que la fila, se sale ligeramente del borde inferior —
 * tratamiento "bold" acorde a la animación de corte duro de este sitio),
 * credenciales como placa roja inline junto al logo (no una barra superior
 * de ancho completo), nav condensada a la derecha.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 overflow-visible border-b-2 border-artery bg-ink-raised">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="relative -mb-3 shrink-0 md:-mb-4"
          aria-label={`${doctor.title} ${doctor.name}`}
        >
          <Image
            src="/logo-header-white.png"
            alt={`${doctor.title} ${doctor.name} — ${doctor.specialty}`}
            width={1083}
            height={278}
            priority
            className="h-16 w-auto py-2 sm:h-20 md:h-24"
          />
        </Link>

        <nav aria-label="Principal" className="hidden md:flex items-center gap-5 lg:gap-6">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hard-cut whitespace-nowrap text-sm text-foreground/80 hover:text-artery-soft"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="hard-cut hidden whitespace-nowrap shrink-0 bg-whatsapp px-4 py-2 text-xs font-medium text-white md:inline-block hover:brightness-110"
        >
          WhatsApp
        </a>
        <MobileMenu items={navItems} />
      </div>
      {/* Fila de credenciales aparte: al ir en la fila principal junto al logo
          y el nav, el texto (largo por requisito de cumplimiento) se salía y
          se sobreponía al link "Enfermedades" a partir de cierto ancho —
          bug real detectado en QA visual 2026-09-24. Aquí nunca compite por
          espacio horizontal con el nav. */}
      <div className="hidden border-t border-white/10 bg-ink px-4 py-1.5 lg:block">
        <p className="mx-auto max-w-6xl text-[11px] uppercase tracking-wider text-vein-pale">
          {formatCredentials(doctor)}
        </p>
      </div>
    </header>
  );
}
