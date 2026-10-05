import type { Metadata } from "next";
import Link from "next/link";
import { doctor } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import PhotoGallery from "@/components/PhotoGallery";
import VideoSection from "@/components/VideoSection";
import StructuredData from "@/components/StructuredData";
import { Camera, Video, MessageCircle, ShieldCheck } from "lucide-react";
import { formatCredentials } from "@/lib/credentials";

export const metadata: Metadata = {
  title: `Galería de Fotos y Videos del Consultorio | ${doctor.title} ${doctor.name}`,
  description: `Conozca el consultorio 403 en Torre Médica Santa, el equipamiento de ultrasonido Doppler vascular y al ${doctor.title} ${doctor.name} en Acapulco de Juárez.`,
  keywords: [
    "consultorio vascular acapulco",
    "fotos dr gregorio alberto gonzalez arcos",
    "torre medica santa acapulco consultorio 403",
    "ultrasonido doppler acapulco",
    "galeria medica angiologia acapulco",
  ],
};

export default function GaleriaPage() {
  const whatsappHref = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, ${doctor.title} ${doctor.name}. Vi la galería de su consultorio y me gustaría agendar una consulta.`
  )}`;

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `Consultorio del ${doctor.title} ${doctor.name}`,
    description: "Consultorio médico de Angiología, Cirugía Vascular y Endovascular en Acapulco.",
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
      addressCountry: doctor.country,
    },
    telephone: doctor.phone,
    image: `${process.env.NEXT_PUBLIC_SITE_URL || ""}${doctor.photo}`,
  };

  return (
    <div className="bg-ink min-h-screen">
      <StructuredData data={gallerySchema} />

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Galería de Fotos y Videos" },
          ]}
          isDark
        />
      </div>

      {/* Hero Header Galería */}
      <section className="relative border-b border-border-soft bg-navy px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex items-center gap-2 border border-white/20 bg-ink/50 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-vein-pale backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4 text-artery-soft" />
            {formatCredentials(doctor)}
          </span>

          <h1 className="mt-4 text-3xl font-semibold text-foreground md:text-5xl">
            Galería del Consultorio y Atención Médica
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-vein-soft md:text-lg">
            Recorrido visual por nuestras instalaciones en Torre Médica Santa, el equipamiento de diagnóstico vascular y la atención profesional del {doctor.title} {doctor.name}.
          </p>
        </div>
      </section>

      {/* Sección 1: Galería de Fotos */}
      <section aria-labelledby="fotos-heading" className="px-6 py-16 md:py-20 border-b border-border-soft">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-artery-soft font-semibold">
              <Camera className="h-4 w-4" />
              <span>Instalaciones y Atención</span>
            </div>
            <h2 id="fotos-heading" className="mt-2 text-2xl font-semibold text-foreground md:text-4xl">
              Fotografías Oficiales
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
              Explore nuestro espacio de consulta privada, áreas de recepción y la tecnología de ultrasonido Doppler vascular.
            </p>
          </div>

          <PhotoGallery />
        </div>
      </section>

      {/* Sección 2: Sección de Videos */}
      <section aria-labelledby="videos-heading" className="bg-navy px-6 py-16 md:py-20 border-b border-border-soft">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-vein-pale font-semibold">
              <Video className="h-4 w-4" />
              <span>Recorridos en Video</span>
            </div>
            <h2 id="videos-heading" className="mt-2 text-2xl font-semibold text-foreground md:text-4xl">
              Videos del Consultorio y Equipamiento
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
              Vea en video la distribución de nuestras instalaciones y la tecnología utilizada para el diagnóstico preciso de enfermedades venosas y arteriales.
            </p>
          </div>

          <VideoSection />
        </div>
      </section>

      {/* CTA Final */}
      <section aria-labelledby="cta-galeria-heading" className="px-6 py-16 text-center bg-ink">
        <div className="mx-auto max-w-3xl">
          <h2 id="cta-galeria-heading" className="text-2xl font-semibold text-foreground md:text-3xl">
            ¿Desea agendar su valoración en estas instalaciones?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Atención médica directa en el consultorio 403 de Torre Médica Santa, Vasco Núñez de Balboa #1003, Fracc. Hornos, Acapulco.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="hard-cut inline-flex items-center gap-2 bg-artery px-8 py-3.5 font-semibold text-white hover:bg-artery-deep transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar Cita por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="hard-cut inline-flex items-center gap-2 border border-border bg-ink-raised px-7 py-3.5 font-semibold text-foreground hover:border-artery hover:text-artery-soft"
            >
              Ver Ubicación y Horarios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
