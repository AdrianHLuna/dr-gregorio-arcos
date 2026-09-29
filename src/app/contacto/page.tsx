import type { Metadata } from "next";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import Breadcrumbs from "@/components/Breadcrumbs";
import MapFacade from "@/components/MapFacade";
import { MapPin, Clock, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Agenda tu cita con ${doctor.title} ${doctor.name}, ${doctor.specialistTitle}, en ${doctor.city}. Dirección, horario y mapa.`,
  alternates: { canonical: "/contacto" },
};

const whatsappHref = (whatsapp: string, name: string) =>
  `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, Dr. ${name}. Vi su página web y me gustaría agendar una cita.`
  )}`;

/**
 * Contacto de "Circulación": mapa real e interactivo arriba, franja de acción
 * debajo (nunca superpuesta — ver MapFacade.tsx). Un único acento vivo
 * (artery) para la acción principal; el resto de la información vive sobre
 * neutros oscuros, sin competir con un segundo o tercer color saturado.
 */
export default function ContactoPage() {
  return (
    <main className="bg-ink">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} isDark />

      <MapFacade
        address={doctor.address}
        city={doctor.city}
        state={doctor.state}
        geo={doctor.geo}
        googleMapsUrl={doctor.googleMapsUrl}
      />

      <div className="border-y border-border bg-ink-raised">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-artery-soft" aria-hidden="true" />
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-vein-pale">Consultorio</h2>
                <p className="mt-1.5 text-foreground">{doctor.address}</p>
                <p className="text-sm text-muted-foreground">
                  {doctor.city}, {doctor.state}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-artery-soft" aria-hidden="true" />
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-vein-pale">Horario</h2>
                <p className="mt-1.5 text-foreground">{doctor.schedule}</p>
                <p className="mt-3 text-xs text-muted-foreground">{formatCredentials(doctor)}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-border-soft pt-6 md:border-t-0 md:border-l md:pl-10 md:pt-0">
            <p className="text-sm text-muted-foreground">
              Tel: {doctor.phone}
              <br />
              {doctor.email}
            </p>
            <a
              href={whatsappHref(doctor.whatsapp, doctor.name)}
              target="_blank"
              rel="noreferrer"
              className="hard-cut flex items-center justify-center gap-2 bg-whatsapp px-5 py-3.5 text-sm font-semibold text-white hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Agendar por WhatsApp
            </a>
            <a
              href={`tel:${doctor.phone}`}
              className="hard-cut flex items-center justify-center gap-2 bg-artery px-5 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-artery-deep"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Llamar al consultorio
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
