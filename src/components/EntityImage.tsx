"use client";

import Image from "next/image";
import { useState } from "react";
import { Activity } from "lucide-react";

interface EntityImageProps {
  src?: string;
  alt: string;
  /** AISO v3.1 §2 — el contenedor de imagen SIEMPRE debe ser grande, nunca
   * una miniatura. "card" es el tamaño mínimo usado en el carrusel horizontal
   * (~220px de lado mayor); "hero" es el tamaño ampliado de las vistas de
   * detalle (más grande que la tarjeta que llevó ahí). */
  size?: "card" | "hero";
  className?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
}

const sizeClass: Record<NonNullable<EntityImageProps["size"]>, string> = {
  card: "aspect-[4/3] min-h-[220px]",
  hero: "aspect-[4/3] sm:aspect-[16/10] md:aspect-[3/2] max-h-[380px] md:max-h-[440px] w-full",
};

/**
 * Contenedor de imagen obligatorio en tarjetas y vistas de detalle
 * (AGENTS.md §2). Fallback clínico: degradado diagonal rojo arterial / azul
 * venoso (colores reales del logo) con una línea de acento inferior — nunca
 * un ícono genérico centrado a solas ni un recuadro plano.
 */
export default function EntityImage({
  src,
  alt,
  size = "card",
  className = "",
  priority = false,
  objectFit = "cover",
  objectPosition = "object-center",
}: EntityImageProps) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        className={`vascular-fallback relative flex items-center justify-center overflow-hidden ${sizeClass[size]} ${className}`}
        role="img"
        aria-label={alt}
      >
        <Activity className="h-12 w-12 text-white/70 md:h-16 md:w-16" strokeWidth={1.5} aria-hidden="true" />
        <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-artery via-artery-soft to-vein" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-surface ${sizeClass[size]} ${className}`}>
      <Image
        src={src as string}
        alt={alt}
        fill
        priority={priority}
        className={`${objectFit === "contain" ? "object-contain" : "object-cover"} ${objectPosition}`}
        sizes={size === "hero" ? "(max-width: 768px) 100vw, 900px" : "(max-width: 768px) 80vw, 320px"}
        onError={() => setFailed(true)}
      />
      <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-artery via-artery-soft to-vein" />
    </div>
  );
}
