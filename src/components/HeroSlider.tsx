"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { doctor } from "@/data";

const HERO_IMAGES = [
  { id: "hero1", src: "/images/hero.jpeg", alt: `${doctor.title} ${doctor.name}` },
  { id: "hero2", src: "/images/hero2.jpeg", alt: `${doctor.title} ${doctor.name} - Consulta Especializada` },
  { id: "hero3", src: "/images/hero3.jpeg", alt: `${doctor.title} ${doctor.name} - Angiología y Cirugía Vascular` },
];

const INTERVAL_MS = 4500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % HERO_IMAGES.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden border border-border-soft bg-ink-raised shadow-2xl">
      {HERO_IMAGES.map((img, i) => (
        <div
          key={img.id}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: index === i ? 1 : 0,
            zIndex: index === i ? 1 : 0,
            pointerEvents: index === i ? "auto" : "none",
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover object-top"
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 550px"
          />
        </div>
      ))}

      {/* Velo degradado inferior para acentuar los controles */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-ink/80 to-transparent" />

      {/* Indicadores de diapositiva */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {HERO_IMAGES.map((img, i) => (
          <button
            key={img.id}
            type="button"
            aria-label={`Ver foto ${i + 1}`}
            aria-current={index === i}
            onClick={() => setIndex(i)}
            className={`hard-cut h-2 transition-all ${index === i ? "w-8 bg-artery" : "w-2 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>
    </div>
  );
}
