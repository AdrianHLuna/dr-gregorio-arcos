import Link from "next/link";
import Image from "next/image";
import { doctor, diseases, services, symptoms, galleryImages, galleryVideos } from "@/data";
import { generateHomeSchemas } from "@/lib/schemas";
import { formatCredentials } from "@/lib/credentials";
import StructuredData from "@/components/StructuredData";
import HeroSlider from "@/components/HeroSlider";
import EntityCarousel from "@/components/EntityCarousel";
import EntityCard from "@/components/EntityCard";
import { MessageCircle, ShieldCheck, Stethoscope, Camera, Video } from "lucide-react";

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

      {/* Hero en 2 columnas: información clara del doctor a la izquierda y contenedor enmarcado para el slider de fotografías a la derecha */}
      <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-ink px-6 py-12 md:px-12 md:py-20 lg:px-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 border border-white/20 bg-ink-raised px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-vein-pale">
              <ShieldCheck className="h-3.5 w-3.5 text-artery-soft" aria-hidden="true" />
              {formatCredentials(doctor)}
            </span>
            <h1 className="text-3xl font-semibold leading-[1.08] text-foreground text-balance md:text-5xl lg:text-6xl">
              {doctor.title} {doctor.name}
            </h1>
            <p className="text-base text-vein-soft md:text-lg font-medium">
              {doctor.specialistTitle} · {doctor.specialty} en {doctor.city}, {doctor.state}.
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{doctor.philosophy}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="hard-cut inline-flex items-center gap-2 bg-artery px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-artery-deep transition-colors"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Agendar por WhatsApp
              </a>
              <Link
                href="/enfermedades"
                className="hard-cut inline-flex items-center gap-2 border border-white/30 bg-ink-raised px-7 py-3.5 text-sm font-semibold text-foreground hover:border-vein hover:text-vein-pale transition-colors"
              >
                Ver enfermedades
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <HeroSlider />
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
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden border border-border-soft lg:mx-0 shadow-xl">
            <Image
              src="/images/aboutme.jpeg"
              alt={`${doctor.title} ${doctor.name}`}
              fill
              className="object-cover object-[center_top]"
              sizes="(max-width: 768px) 100vw, 320px"
              priority
            />
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

      {/* Sección Galería y Videos Destacados en el Home */}
      <section aria-labelledby="home-gallery-heading" className="border-t border-border-soft bg-ink px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-artery-soft font-semibold">Conozca el Consultorio</span>
              <h2 id="home-gallery-heading" className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
                Galería del Consultorio y Videos
              </h2>
            </div>
            <Link href="/galeria" className="hard-cut text-sm font-medium text-artery-soft hover:text-artery">
              Ver galería completa y 2 videos →
            </Link>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Instalaciones en Torre Médica Santa (Consultorio 403), equipamiento de ultrasonido Doppler vascular y atención profesional del Dr. Gregorio Alberto González Arcos en Acapulco.
          </p>

          {/* Grid de Fotos Destacadas */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {galleryImages.slice(0, 3).map((img) => (
              <Link
                key={img.id}
                href="/galeria"
                className="group relative overflow-hidden border border-border bg-ink-raised transition-all hover:border-artery hover:shadow-xl hover:shadow-artery/10"
              >
                <div className="relative aspect-[4/3] w-full bg-ink">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-artery-soft">
                      {img.categoryLabel}
                    </span>
                    <p className="text-sm font-semibold text-white group-hover:text-artery-soft transition-colors">
                      {img.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bloque de Video en Home */}
          <div className="mt-10 border border-border bg-navy p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
              <div className="relative aspect-video w-full overflow-hidden border border-border-soft bg-black shadow-lg">
                <video
                  controls
                  preload="metadata"
                  poster={galleryVideos[0].poster}
                  className="h-full w-full object-cover"
                >
                  <source src={galleryVideos[0].src} type="video/quicktime" />
                  <source src={galleryVideos[0].src} type="video/mp4" />
                  Tu navegador no soporta reproductor de video HTML5.
                </video>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-vein-pale font-semibold">Video de las Instalaciones</span>
                <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">
                  {galleryVideos[0].title}
                </h3>
                <p className="mt-3 text-sm text-vein-soft leading-relaxed">
                  {galleryVideos[0].description}
                </p>
                <div className="mt-6">
                  <Link
                    href="/galeria"
                    className="hard-cut inline-flex items-center gap-2 bg-artery px-5 py-2.5 text-xs font-semibold text-white hover:bg-artery-deep transition-colors"
                  >
                    <Video className="h-4 w-4" />
                    Ver los 2 videos en la Galería
                  </Link>
                </div>
              </div>
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
