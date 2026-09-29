interface MapFacadeProps {
  address: string;
}

/**
 * Mapa real e interactivo desde la primera carga (AGENTS.md §7 — nunca clic
 * para "ver el mapa"). Ya NO lleva ninguna tarjeta flotante encima: una
 * tarjeta superpuesta (centrada o anclada a una esquina) terminaba tapando el
 * pin en viewports angostos, donde su alto ocupa una porción grande del mapa
 * (reporte directo del usuario, persistió 2026-09-24 pese al primer intento
 * de solo reposicionarla). La dirección, horario y botones de acción viven
 * ahora en la franja debajo del mapa (`/contacto/page.tsx`), nunca encima.
 *
 * Sin `loading="lazy"`: confirmado con DevTools (2026-09-24) que el iframe se
 * quedaba en blanco de forma permanente — cero peticiones de red a Google —
 * porque el chequeo de intersección del navegador ocurre antes de que el
 * layout de `h-[60vh]` termine de asentarse en la hidratación, y sin un
 * scroll posterior que lo re-dispare, nunca vuelve a intentarlo. Esto
 * contradice además la regla de "mapa real desde la primera carga" — un mapa
 * diferido a propósito no cumple eso de todas formas.
 */
export default function MapFacade({ address }: MapFacadeProps) {
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div className="h-[60vh] w-full bg-navy">
      <iframe
        src={mapsEmbedUrl}
        className="h-full w-full border-0 grayscale-[35%] contrast-[1.05]"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación del consultorio"
      />
    </div>
  );
}
