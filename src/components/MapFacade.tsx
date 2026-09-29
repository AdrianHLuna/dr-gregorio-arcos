interface MapFacadeProps {
  address: string;
  city?: string;
  state?: string;
  geo?: { latitude: number; longitude: number };
  googleMapsUrl?: string;
}

/**
 * Mapa real e interactivo desde la primera carga (AGENTS.md §7 — nunca clic
 * para "ver el mapa"). Franja informativa con dirección, horario y acciones
 * vive debajo en `/contacto/page.tsx`.
 *
 * Utiliza coordenadas geo o la dirección completa estructurada (incluyendo
 * municipio y estado) más un zoom fijo z=16 para evitar que Google Maps
 * des-haga el zoom mostrando todo el país.
 */
export default function MapFacade({ address, city, state, geo, googleMapsUrl }: MapFacadeProps) {
  const query = geo
    ? `${geo.latitude},${geo.longitude}`
    : [address.replace(/#|int\.\s*\d+/gi, "").trim(), city, state, "México"].filter(Boolean).join(", ");

  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;
  const externalMapsUrl =
    googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  return (
    <div className="relative h-[60vh] w-full bg-navy">
      <iframe
        src={mapsEmbedUrl}
        className="h-full w-full border-0 grayscale-[35%] contrast-[1.05]"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación del consultorio"
      />
      <a
        href={externalMapsUrl}
        target="_blank"
        rel="noreferrer"
        className="hard-cut absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 border border-white/30 bg-ink/90 px-3 py-2 text-xs font-semibold text-foreground backdrop-blur-md transition-colors hover:border-vein hover:text-vein-pale"
      >
        Abrir en Google Maps ↗
      </a>
    </div>
  );
}
