"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface EntityCarouselProps {
  children: React.ReactNode;
  ariaLabel: string;
}

/**
 * Carrusel horizontal deslizable (scroll-snap) — patrón de tarjetas de este
 * sitio (dirección "Circulación"), distinto del grid vertical uniforme o de
 * la lista-índice de los otros sitios del registro. Flechas opcionales para
 * quien no usa gesto táctil o rueda del mouse; el scroll nativo siempre
 * funciona sin ellas.
 */
export default function EntityCarousel({ children, ariaLabel }: EntityCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 420);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="group"
        aria-label={ariaLabel}
        className="snap-row flex gap-5 overflow-x-auto pb-4"
      >
        {children}
      </div>
      <div className="mt-4 hidden justify-end gap-2 md:flex">
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => scrollBy(-1)}
          className="hard-cut flex h-11 w-11 items-center justify-center border border-border text-foreground hover:border-vein hover:text-vein"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Siguiente"
          onClick={() => scrollBy(1)}
          className="hard-cut flex h-11 w-11 items-center justify-center border border-border text-foreground hover:border-artery hover:text-artery"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
