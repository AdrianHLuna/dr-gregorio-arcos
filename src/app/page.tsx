import Link from "next/link";
import { doctor, diseases, services, symptoms } from "@/data";
import { generateHomeSchemas } from "@/lib/schemas";
import { formatCredentials } from "@/lib/credentials";
import StructuredData from "@/components/StructuredData";
import HeroSlider from "@/components/HeroSlider";
import EntityCarousel from "@/components/EntityCarousel";
import EntityCard from "@/components/EntityCard";
import { MessageCircle, ShieldCheck, Stethoscope } from "lucide-react";

// Home de "Circulación" — Hero asimétrico con slider real (único de los 5
// sitios), carruseles horizontales de tarjetas grandes (AGENTS.md §1/§2) y
// tema oscuro dominante con acentos rojo arterial / azul venoso.
export default function Home() {
  const whatsappHref = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, ${doctor.title} ${doctor.name}. Vi su página web y me gustaría agendar una cita.`
  )}`;

  return (
    <>
      <StructuredData data={generateHomeSchemas()} />

      {/* Hero a sangre completa: el slider ya no es un panel al costado de un
          bloque de texto fijo (eso resultaba casi idéntico al split 50/50 de
          dr-gustavo-alvarez, hallazgo del usuario 2026-09-24). Ahora el fondo
          rotativo ocupa toda la sección y el texto se superpone anclado
          abajo-izquierda, sobre el velo de degradado que ya trae HeroSlider. */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <HeroSlider />
        <div className="relative z-10 flex min-h-screen flex-col justify-end gap-6 px-6 pb-16 pt-32 md:px-12 lg:px-16 lg:pb-24">
          <span className="inline-flex w-fit items-center gap-2 border border-white/30 bg-ink/40 px-3 py-1 text-xs uppercase tracking-[0.25em] text-vein-pale backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-artery-soft" aria-hidden="true" />
            {formatCredentials(doctor)}
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] text-foreground text-balance md:text-6xl">
            {doctor.title} {doctor.name}
          </h1>
          <p className="max-w-lg text-lg text-vein-soft">
            {doctor.specialistTitle} · {doctor.specialty} en {doctor.city}, {doctor.state}.
          </p>
          <p className="max-w-lg text-sm text-muted-foreground">{doctor.philosophy}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="hard-cut inline-flex items-center gap-2 bg-artery px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-artery-deep"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Agendar por WhatsApp
            </a>
            <Link
              href="/enfermedades"
              className="hard-cut inline-flex items-center gap-2 border border-white/40 bg-ink/30 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm hover:border-vein hover:text-vein-pale"
            >
              Ver enfermedades
            </Link>
          </div>
        </div>
      </section>

      {/* Barra de cifras (años de experiencia, pacientes atendidos, etc.) —
          PENDIENTE: `doctor.stats` no está poblado porque el intake de este
          doctor no incluyó estas cifras; nunca se inventan (AGENTS.md §9).
          Esta sección solo se renderiza cuando existan datos reales — ver
          `doctor.ts`. Estilo hard-cut propio del sitio (bordes rectos,
          divisores, un solo acento), deliberadamente distinto de la placa
          flotente de vidrio + barra con gradiente de `dr-gustavo-alvarez`. */}
      {doctor.stats && doctor.stats.length > 0 && (
        <section className="border-y border-border bg-ink-raised">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border sm:grid-cols-3 sm:divide-y-0">
            {doctor.stats.map((stat) => (
              <div key={stat.label} className="px-6 py-8 text-center">
                <p className="text-4xl font-semibold text-artery sm:text-5xl">{stat.value}</p>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.2em] text-vein-pale">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sobre el doctor */}
      <section aria-labelledby="about-heading" className="border-t border-border-soft bg-navy px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_2fr] lg:items-start">
          <div className="mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden border border-border-soft lg:mx-0">
            <div className="vascular-fallback flex h-full w-full flex-col items-center justify-center gap-3 text-center text-sm text-vein-pale">
              <Stethoscope className="h-10 w-10 text-artery-soft" aria-hidden="true" />
              <span className="px-6">
                Foto de {doctor.title} {doctor.name} — pendiente
              </span>
            </div>
          </div>
          <div>
            <h2 id="about-heading" className="text-2xl font-semibold text-foreground md:text-3xl">
              Sobre {doctor.title} {doctor.name}
            </h2>
            <p className="mt-5 text-muted-foreground">{doctor.bio}</p>
            {/* Repetición intencional de las cédulas (ya están en el Header):
                es la estructura habitual de estas páginas (AGENTS.md §3). */}
            <p className="mt-5 text-xs text-vein-soft">{formatCredentials(doctor)}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {doctor.education.map((ed, i) => (
                <div key={i} className="border border-border-soft bg-ink-raised/60 p-4">
                  <p className="text-sm font-semibold text-foreground">{ed.degree}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{ed.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section aria-labelledby="services-heading" className="border-t border-border-soft bg-ink px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-vein-pale">Procedimientos</span>
              <h2 id="services-heading" className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
                Servicios vasculares
              </h2>
            </div>
            <Link href="/servicios" className="hard-cut text-sm font-medium text-vein-pale hover:text-vein">
              Ver todos los servicios →
            </Link>
          </div>
          <div className="mt-8">
            <EntityCarousel ariaLabel="Servicios vasculares">
              {services.map((service, i) => (
                <EntityCard
                  key={service.id}
                  href={`/servicios/${service.slug}`}
                  image={service.image}
                  name={service.name}
                  excerpt={service.description}
                  cta="Ver procedimiento"
                  index={i + 1}
                  accent="vein"
                />
              ))}
            </EntityCarousel>
          </div>
        </div>
      </section>

      {/* Enfermedades */}
      <section aria-labelledby="diseases-heading" className="border-t border-border-soft bg-navy px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-artery-soft">Diagnóstico</span>
              <h2 id="diseases-heading" className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
                Enfermedades que atendemos
              </h2>
            </div>
            <Link href="/enfermedades" className="hard-cut text-sm font-medium text-artery-soft hover:text-artery">
              Ver todas las enfermedades →
            </Link>
          </div>
          <div className="mt-8">
            <EntityCarousel ariaLabel="Enfermedades vasculares">
              {diseases.map((disease, i) => (
                <EntityCard
                  key={disease.id}
                  href={`/enfermedades/${disease.slug}`}
                  image={disease.image}
                  name={disease.name}
                  excerpt={disease.description}
                  cta="Ver guía médica"
                  index={i + 1}
                  accent="artery"
                />
              ))}
            </EntityCarousel>
          </div>
        </div>
      </section>

      {/* Síntomas */}
      <section aria-labelledby="symptoms-heading" className="border-t border-border-soft bg-ink px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-vein-pale">Orientación</span>
              <h2 id="symptoms-heading" className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
                ¿Qué síntoma tienes?
              </h2>
            </div>
            <Link href="/sintomas" className="hard-cut text-sm font-medium text-vein-pale hover:text-vein">
              Ver todos los síntomas →
            </Link>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Si tu síntoma es de aparición súbita o intensa, acude directamente a un servicio de urgencias:
            estas páginas son orientación educativa, no reemplazan una valoración de urgencia.
          </p>
          <div className="mt-8">
            <EntityCarousel ariaLabel="Síntomas vasculares">
              {symptoms.map((symptom, i) => (
                <EntityCard
                  key={symptom.id}
                  href={`/sintomas/${symptom.slug}`}
                  image={symptom.image}
                  name={symptom.name}
                  excerpt={symptom.description}
                  cta="Ver orientación"
                  index={i + 1}
                  accent="vein"
                />
              ))}
            </EntityCarousel>
          </div>
        </div>
      </section>

      {/* CTA final — sin precio numérico (el doctor no lo proporcionó). */}
      <section aria-labelledby="cta-heading" className="border-t border-border-soft bg-navy px-6 py-20 text-center">
        <h2 id="cta-heading" className="text-2xl font-semibold text-foreground md:text-3xl">
          Agenda tu valoración vascular
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Contáctanos por WhatsApp o llamada para conocer el costo de tu consulta y agendar con{" "}
          {doctor.title} {doctor.name} en {doctor.city}.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="hard-cut mt-7 inline-flex items-center gap-2 bg-artery px-8 py-4 font-semibold text-primary-foreground hover:bg-artery-deep"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Agendar Cita Ahora
        </a>
      </section>
    </>
  );
}
