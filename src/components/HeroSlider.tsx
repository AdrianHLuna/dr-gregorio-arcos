"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { doctor } from "@/data";

type Mood = "portrait" | "artery" | "vein";
const SLIDES: Mood[] = ["portrait", "artery", "vein"];
const INTERVAL_MS = 4200;

/**
 * Fondo rotativo a sangre completa (dirección "Circulación") — ya NO es un
 * panel de 5/12 al lado de un bloque de texto fijo: eso era prácticamente el
 * mismo split 50/50 que usa `dr-gustavo-alvarez`, solo con otros colores
 * (hallazgo real del usuario 2026-09-24). Ahora el slider ES el fondo
 * completo del Hero; el texto vive superpuesto encima (ver `page.tsx`), no
 * a un lado. 3 "moods" rotan con corte duro — retrato, resplandor arterial,
 * resplandor venoso — pero la base siempre es oscura (ink→navy); el color
 * es un acento localizado en una esquina, nunca una pantalla sólida de rojo
 * o azul completo. La primera versión llenaba toda la pantalla de un solo
 * color saturado en cada mood, lo cual el usuario señaló como "no
 * convincente" (2026-09-24) — la paleta en sí estaba bien, el problema era
 * usarla a manera de bloques de color planos en vez de acentos.
 */
export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [hasPhoto] = useState(doctor.photo && doctor.photo !== "/doctor-placeholder.jpg");

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const mood = SLIDES[index];

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink-raised">
      <div className="absolute inset-0" style={{ display: mood === "portrait" ? "block" : "none" }}>
        {hasPhoto ? (
          <Image src={doctor.photo} alt={`${doctor.title} ${doctor.name}`} fill className="object-cover" priority />
        ) : (
          <div className="vascular-fallback flex h-full w-full flex-col items-center justify-center gap-4 text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-vein-pale">Retrato del doctor</span>
            <span className="max-w-xs text-xs text-muted-foreground">
              Espacio reservado — pendiente de fotografía oficial
            </span>
          </div>
        )}
      </div>

      <div className="vascular-fallback absolute inset-0" style={{ display: mood === "artery" ? "block" : "none" }} />
      <div
        className="vascular-fallback-vein absolute inset-0"
        style={{ display: mood === "vein" ? "block" : "none" }}
      />

      {/* Velo de degradado permanente para que el texto superpuesto (en
          page.tsx) sea legible sobre cualquiera de los 3 fondos. */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

      <div className="absolute right-6 top-6 flex gap-2 md:right-10 md:top-10">
        {SLIDES.map((s, i) => (
          <button
            key={s}
            type="button"
            aria-label={`Ver fondo ${i + 1}`}
            aria-current={index === i}
            onClick={() => setIndex(i)}
            className={`hard-cut h-1.5 w-8 ${index === i ? "bg-artery" : "bg-white/25"}`}
          />
        ))}
      </div>
    </div>
  );
}
