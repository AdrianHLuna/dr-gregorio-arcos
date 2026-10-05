"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { galleryImages, type GalleryImage } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight, Maximize2, Building2, UserCheck, Stethoscope, Sparkles } from "lucide-react";

type FilterCategory = "all" | "consultorio" | "doctor" | "equipamiento";

interface FilterOption {
  key: FilterCategory;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const filterOptions: FilterOption[] = [
  { key: "all", label: "Todas las fotos", icon: Sparkles },
  { key: "consultorio", label: "Consultorio e Instalaciones", icon: Building2 },
  { key: "doctor", label: "Dr. Gregorio y Atención", icon: UserCheck },
  { key: "equipamiento", label: "Equipamiento Diagnóstico", icon: Stethoscope },
];

export default function PhotoGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages = galleryImages.filter((img) => {
    if (activeFilter === "all") return true;
    return img.category === activeFilter;
  });

  const activeImage: GalleryImage | null =
    selectedImageIndex !== null && filteredImages[selectedImageIndex]
      ? filteredImages[selectedImageIndex]
      : null;

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! > 0 ? prev! - 1 : filteredImages.length - 1));
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev! < filteredImages.length - 1 ? prev! + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredImages.length]);

  return (
    <div className="w-full">
      {/* Botones de filtro por categoría */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        {filterOptions.map((opt) => {
          const Icon = opt.icon;
          const isActive = activeFilter === opt.key;
          return (
            <button
              key={opt.key}
              type="button"
              onClick={() => {
                setActiveFilter(opt.key);
                setSelectedImageIndex(null);
              }}
              className={`hard-cut flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                isActive
                  ? "bg-artery text-white border-2 border-artery shadow-lg shadow-artery/20"
                  : "bg-ink-raised/80 text-foreground/80 border border-border hover:border-artery hover:text-white"
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-vein-pale"}`} />
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((img, idx) => (
          <div
            key={img.id}
            onClick={() => setSelectedImageIndex(idx)}
            className="group relative cursor-pointer overflow-hidden border border-border bg-ink-raised transition-all duration-300 hover:border-artery hover:shadow-xl hover:shadow-artery/10"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

              <span className="absolute top-3 left-3 hard-cut border border-white/20 bg-ink/75 px-2.5 py-1 text-[11px] font-semibold text-vein-pale backdrop-blur-md">
                {img.categoryLabel}
              </span>

              <div className="absolute top-3 right-3 hard-cut flex h-8 w-8 items-center justify-center border border-white/30 bg-ink/60 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h3 className="text-base font-semibold text-white group-hover:text-artery-soft transition-colors">
                  {img.title}
                </h3>
                <p className="mt-1 text-xs text-vein-soft line-clamp-2">{img.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox de Zoom */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 md:p-8 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div
            className="relative flex max-h-[92vh] max-w-5xl flex-col border border-border bg-ink-raised shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabecera modal */}
            <div className="flex items-center justify-between border-b border-border bg-ink px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="hard-cut border border-artery/40 bg-artery/10 px-2.5 py-0.5 text-xs font-semibold text-artery-soft">
                  {activeImage.categoryLabel}
                </span>
                <h3 className="text-base font-semibold text-white">{activeImage.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImageIndex(null)}
                aria-label="Cerrar vista ampliada"
                className="hard-cut flex h-9 w-9 items-center justify-center border border-white/20 bg-ink text-white hover:border-artery hover:bg-artery hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Imagen principal */}
            <div className="relative flex min-h-[300px] max-h-[68vh] w-full justify-center bg-black overflow-hidden">
              <div className="relative h-[65vh] w-full">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Botones Prev / Next */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    aria-label="Imagen anterior"
                    className="absolute left-4 top-1/2 -translate-y-1/2 hard-cut flex h-11 w-11 items-center justify-center border border-white/30 bg-ink/80 text-white hover:border-artery hover:bg-artery"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    aria-label="Siguiente imagen"
                    className="absolute right-4 top-1/2 -translate-y-1/2 hard-cut flex h-11 w-11 items-center justify-center border border-white/30 bg-ink/80 text-white hover:border-artery hover:bg-artery"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {/* Pie con descripción y paginador */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-border bg-ink px-6 py-4">
              <p className="text-sm text-vein-pale max-w-2xl">{activeImage.description}</p>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                Imagen {(selectedImageIndex ?? 0) + 1} de {filteredImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
