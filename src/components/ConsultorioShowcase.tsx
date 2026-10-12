"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  consultorioZones,
  galleryVideos,
  galleryImages,
  type ConsultorioZone,
  type Hotspot,
  type GalleryVideo,
  type GalleryImage,
} from "@/data";
import { doctor } from "@/data";
import {
  Compass,
  Video,
  Images,
  Maximize2,
  Eye,
  EyeOff,
  Play,
  Pause,
  ShieldCheck,
  HeartPulse,
  Activity,
  Bed,
  Building2,
  DoorOpen,
  PhoneCall,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  MessageCircle,
  MapPin,
  CheckCircle2,
  Clock,
  Stethoscope,
  Layers,
} from "lucide-react";

type ShowcaseMode = "tour" | "cinema" | "mosaic";

export default function ConsultorioShowcase() {
  const [mode, setMode] = useState<ShowcaseMode>("tour");
  const [activeZoneIndex, setActiveZoneIndex] = useState(0);
  const [activeImageIndexInZone, setActiveImageIndexInZone] = useState(0);
  const [activeVideoId, setActiveVideoId] = useState(galleryVideos[0]?.id || "");
  const [showHotspots, setShowHotspots] = useState(true);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [mosaicFilter, setMosaicFilter] = useState<"all" | "muro" | "diagnostico" | "acceso">("all");
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    type: "image" | "video";
    src: string;
    title: string;
    description: string;
    badge?: string;
  } | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const activeZone: ConsultorioZone = consultorioZones[activeZoneIndex] || consultorioZones[0];
  const activeImage = activeZone.gallery[activeImageIndexInZone] || activeZone.gallery[0];
  const activeVideo = galleryVideos.find((v) => v.id === activeVideoId) || galleryVideos[0];

  // Hotspot selector helper
  const isViewingMainImage = activeImageIndexInZone === 0;

  // Filtered images for Mosaic view
  const mosaicImages = galleryImages.filter((img) => {
    if (mosaicFilter === "all") return true;
    if (mosaicFilter === "muro") return img.id.includes("muro") || img.id.includes("panoramica") || img.id.includes("perspectiva");
    if (mosaicFilter === "diagnostico") return img.id.includes("doppler") || img.id.includes("estacion") || img.id.includes("modelo");
    if (mosaicFilter === "acceso") return img.id.includes("fachada") || img.id.includes("puerta") || img.id.includes("403");
    return true;
  });

  // Helper de posición inteligente para tooltips:
  // Si el punto está abajo (y > 48%), se despliega hacia ARRIBA (bottom-12) para jamás recortarse con el pie de la imagen.
  // Si está a la derecha (x > 62%), se ancla a la derecha. Si está a la izquierda (x < 38%), a la izquierda.
  const getTooltipPositionClasses = (x: number, y: number) => {
    const vertical = y > 48 ? "bottom-12 mb-1" : "top-12 mt-1";
    let horizontal = "left-1/2 -translate-x-1/2";
    if (x > 62) {
      horizontal = "right-0 translate-x-3 sm:translate-x-0";
    } else if (x < 38) {
      horizontal = "left-0 -translate-x-3 sm:translate-x-0";
    }
    return `${vertical} ${horizontal}`;
  };

  // Switch to Cinema and play linked video
  const handleJumpToVideo = (videoId: string) => {
    setActiveVideoId(videoId);
    setMode("cinema");
    setIsVideoPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 100);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox?.isOpen) return;
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  const whatsappHref = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, Dr. Gregorio Alberto González Arcos. Vi el recorrido virtual de su consultorio en Torre Médica Santa y me gustaría agendar una consulta de valoración.`
  )}`;

  // Icon mapping
  const renderIcon = (name: string, className = "h-4 w-4") => {
    switch (name) {
      case "HeartPulse":
        return <HeartPulse className={className} />;
      case "ShieldCheck":
        return <ShieldCheck className={className} />;
      case "Sparkles":
        return <Sparkles className={className} />;
      case "Activity":
        return <Activity className={className} />;
      case "Bed":
        return <Bed className={className} />;
      case "Building2":
        return <Building2 className={className} />;
      case "DoorOpen":
        return <DoorOpen className={className} />;
      case "PhoneCall":
        return <PhoneCall className={className} />;
      default:
        return <Stethoscope className={className} />;
    }
  };

  return (
    <section
      id="consultorio-showcase"
      aria-labelledby="consultorio-showcase-title"
      className="relative overflow-hidden border-t border-border-soft bg-ink py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Luz ambiental sutil de fondo — acento rojo arterial y azul venoso */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-artery/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-vein/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Encabezado Principal de la Sección */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 border border-artery/30 bg-artery/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-artery-soft">
            <span className="h-2 w-2 rounded-full bg-artery animate-pulse" />
            Recorrido Virtual & Instalaciones
          </div>

          <h2
            id="consultorio-showcase-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl text-balance"
          >
            Conozca el Consultorio 403 en Torre Médica Santa
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-vein-soft md:text-lg text-balance">
            Un espacio contemporáneo diseñado para la salud vascular: muro escultórico con cromoterapia, tecnología de ultrasonido Doppler in-situ y atención médica personalizada en Acapulco.
          </p>
        </div>

        {/* Selector de Modo de Exploración (3 Pestañas Creativas) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setMode("tour")}
            className={`hard-cut flex items-center gap-2.5 px-5 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider transition-all ${
              mode === "tour"
                ? "bg-artery text-white border-2 border-artery shadow-lg shadow-artery/25"
                : "bg-ink-raised/90 text-foreground/80 border border-border hover:border-artery hover:text-white"
            }`}
          >
            <Compass className={`h-4 w-4 ${mode === "tour" ? "text-white" : "text-artery-soft"}`} />
            <span>Recorrido por Espacios</span>
            <span className="hidden sm:inline-block rounded bg-white/20 px-1.5 py-0.5 text-[10px]">
              3 Zonas
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMode("cinema")}
            className={`hard-cut flex items-center gap-2.5 px-5 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider transition-all ${
              mode === "cinema"
                ? "bg-artery text-white border-2 border-artery shadow-lg shadow-artery/25"
                : "bg-ink-raised/90 text-foreground/80 border border-border hover:border-artery hover:text-white"
            }`}
          >
            <Video className={`h-4 w-4 ${mode === "cinema" ? "text-white" : "text-vein-pale"}`} />
            <span>Cine de Videos HD</span>
            <span className="rounded bg-vein/30 text-vein-pale px-1.5 py-0.5 text-[10px]">
              4 Videos 4K
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMode("mosaic")}
            className={`hard-cut flex items-center gap-2.5 px-5 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider transition-all ${
              mode === "mosaic"
                ? "bg-artery text-white border-2 border-artery shadow-lg shadow-artery/25"
                : "bg-ink-raised/90 text-foreground/80 border border-border hover:border-artery hover:text-white"
            }`}
          >
            <Images className={`h-4 w-4 ${mode === "mosaic" ? "text-white" : "text-vein-pale"}`} />
            <span>Mosaico Fotográfico</span>
            <span className="hidden sm:inline-block rounded bg-white/20 px-1.5 py-0.5 text-[10px]">
              {galleryImages.length} Fotos
            </span>
          </button>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            MODO 1: RECORRIDO INTERACTIVO POR ZONAS (HOTSPOTS + GUÍA)
           ══════════════════════════════════════════════════════════════ */}
        {mode === "tour" && (
          <div className="mt-10 animate-fadeIn">
            {/* Barra de Zonas del Consultorio */}
            <div className="flex flex-wrap items-center justify-center gap-2 pb-6 border-b border-border-soft">
              {consultorioZones.map((zone, idx) => {
                const isActive = activeZoneIndex === idx;
                return (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => {
                      setActiveZoneIndex(idx);
                      setActiveImageIndexInZone(0);
                      setSelectedHotspot(null);
                    }}
                    className={`hard-cut flex items-center gap-2.5 px-4 py-2 text-xs md:text-sm font-medium transition-all ${
                      isActive
                        ? "border-b-2 border-artery text-white bg-ink-raised shadow-inner"
                        : "text-muted-foreground hover:text-white hover:bg-ink-raised/40"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold ${
                        isActive ? "bg-artery text-white" : "bg-border text-muted-foreground"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span>{zone.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Escenario Dual: Visor Interactivo a la Izquierda + Panel Explicativo a la Derecha */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-start">
              {/* Visor Panorámico con Puntos de Interés Interactivos */}
              <div className="relative flex flex-col border border-border bg-ink-raised overflow-hidden shadow-2xl">
                {/* Marco de Imagen */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black group">
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />

                  {/* Hotspots interactivos — solo en la foto principal de la zona */}
                  {showHotspots && isViewingMainImage && (
                    <div className="absolute inset-0 pointer-events-none">
                      {activeZone.hotspots.map((hotspot, idx) => {
                        const isSelected = selectedHotspot?.id === hotspot.id;
                        return (
                          <div
                            key={hotspot.id}
                            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-20"
                          >
                            <button
                              type="button"
                              onClick={() =>
                                setSelectedHotspot((prev) => (prev?.id === hotspot.id ? null : hotspot))
                              }
                              aria-label={`Punto ${idx + 1}: ${hotspot.title}`}
                              className={`group relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-white ring-2 ring-black/90 shadow-[0_4px_16px_rgba(0,0,0,0.95)] transition-transform hover:scale-125 focus:outline-none ${
                                isSelected
                                  ? "bg-artery text-white ring-4 ring-artery/80 scale-125 shadow-artery/50"
                                  : "bg-artery text-white hover:bg-artery-deep"
                              }`}
                            >
                              {/* Pulso de radar en rojo arterial con reborde oscuro para visibilidad en fondos blancos */}
                              <span className="absolute -inset-1.5 rounded-full bg-artery/60 animate-ping opacity-80 pointer-events-none ring-1 ring-black/60" />

                              {/* Número del punto para identificación rápida y ultra-nítida */}
                              <span className="text-xs font-black text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                                {idx + 1}
                              </span>
                            </button>

                            {/* Tooltip / Tarjeta flotante del Hotspot (100% sólida, alto contraste y posición inteligente) */}
                            {isSelected && (
                              <div
                                className={`absolute z-40 w-72 sm:w-80 border-2 border-artery bg-[#090b10] p-4 text-left shadow-[0_20px_50px_rgba(0,0,0,0.98)] ring-1 ring-white/30 rounded-none animate-fadeIn ${getTooltipPositionClasses(
                                  hotspot.x,
                                  hotspot.y
                                )}`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <div className="flex items-center justify-between gap-2 border-b border-white/15 pb-2.5">
                                  <div className="flex items-center gap-2">
                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-artery text-[10px] font-bold text-white ring-1 ring-black">
                                      {idx + 1}
                                    </span>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-artery-soft">
                                      Punto Clínico #{idx + 1}
                                    </span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => setSelectedHotspot(null)}
                                    className="flex h-6 w-6 items-center justify-center rounded bg-white/10 text-white hover:bg-artery hover:text-white transition-colors"
                                    aria-label="Cerrar detalle"
                                  >
                                    <X className="h-4 w-4" />
                                  </button>
                                </div>
                                <h4 className="mt-2.5 text-sm font-bold text-white tracking-wide leading-snug drop-shadow-sm">
                                  {hotspot.title}
                                </h4>
                                <p className="mt-1.5 text-xs text-zinc-100 font-normal leading-relaxed">
                                  {hotspot.description}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Barra Superior con Controles del Visor */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
                    <span className="pointer-events-auto border border-white/20 bg-ink/85 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-vein-pale backdrop-blur-md shadow-md">
                      {activeZone.badge}
                    </span>

                    <div className="flex items-center gap-2 pointer-events-auto">
                      {isViewingMainImage && (
                        <button
                          type="button"
                          onClick={() => setShowHotspots(!showHotspots)}
                          className={`hard-cut flex items-center gap-1.5 border px-2.5 py-1 text-xs font-medium backdrop-blur-md transition-colors ${
                            showHotspots
                              ? "border-artery/50 bg-ink/90 text-artery-soft hover:bg-artery hover:text-white"
                              : "border-white/20 bg-ink/70 text-muted-foreground hover:text-white"
                          }`}
                          title="Alternar puntos interactivos"
                        >
                          {showHotspots ? (
                            <>
                              <Eye className="h-3.5 w-3.5" />
                              <span className="hidden sm:inline">Ocultar puntos</span>
                            </>
                          ) : (
                            <>
                              <EyeOff className="h-3.5 w-3.5" />
                              <span className="hidden sm:inline">Ver puntos</span>
                            </>
                          )}
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() =>
                          setLightbox({
                            isOpen: true,
                            type: "image",
                            src: activeImage.src,
                            title: activeImage.title,
                            description: activeImage.caption,
                            badge: activeZone.name,
                          })
                        }
                        className="hard-cut flex items-center gap-1 border border-white/20 bg-ink/80 px-2.5 py-1 text-xs font-medium text-white hover:border-artery hover:bg-artery"
                        title="Ver en pantalla completa"
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">Ampliar</span>
                      </button>
                    </div>
                  </div>

                  {/* Pie del Visor con Título de la Foto */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink via-ink/90 to-transparent p-4 pt-10 pointer-events-none">
                    <p className="text-sm font-semibold text-white drop-shadow-sm">{activeImage.title}</p>
                    <p className="text-xs text-zinc-300 drop-shadow-sm">{activeImage.caption}</p>
                  </div>
                </div>

                {/* Barra inferior destacada de punto activo (100% legibilidad en móviles y pantallas grandes) */}
                {selectedHotspot && (
                  <div className="border-t-2 border-artery bg-[#090b10] p-3.5 sm:p-4 flex items-start sm:items-center justify-between gap-3 animate-fadeIn">
                    <div className="flex items-start sm:items-center gap-3">
                      <div className="flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-full bg-artery text-white font-bold text-xs ring-2 ring-black shadow-md">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-artery-soft bg-artery/20 px-1.5 py-0.5">
                            Detalle Seleccionado
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-white">{selectedHotspot.title}</span>
                        </div>
                        <p className="mt-1 text-xs text-zinc-200 leading-relaxed max-w-2xl font-normal">
                          {selectedHotspot.description}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedHotspot(null)}
                      className="hard-cut flex-shrink-0 border border-white/20 bg-ink px-3 py-1 text-xs font-semibold text-white hover:border-artery hover:bg-artery transition-colors"
                    >
                      Cerrar
                    </button>
                  </div>
                )}

                {/* Carrete de Miniaturas de la Zona Activa */}
                <div className="border-t border-border bg-ink p-3 flex items-center gap-3 overflow-x-auto">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-vein-soft whitespace-nowrap pl-1">
                    Vistas de la zona:
                  </span>
                  <div className="flex gap-2.5">
                    {activeZone.gallery.map((img, idx) => {
                      const isSelected = activeImageIndexInZone === idx;
                      return (
                        <button
                          key={img.src}
                          type="button"
                          onClick={() => {
                            setActiveImageIndexInZone(idx);
                            setSelectedHotspot(null);
                          }}
                          className={`hard-cut relative h-14 w-20 flex-shrink-0 overflow-hidden border-2 transition-all ${
                            isSelected
                              ? "border-artery ring-2 ring-artery/30 scale-105"
                              : "border-border opacity-70 hover:opacity-100 hover:border-white/40"
                          }`}
                        >
                          <Image src={img.src} alt={img.alt} fill className="object-cover" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Panel Explicativo de la Zona & Puntos Clave */}
              <div className="flex flex-col gap-6">
                <div className="border border-border bg-ink-raised p-6 shadow-xl">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-artery-soft">
                    {activeZone.subtitle}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{activeZone.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">{activeZone.description}</p>

                  {/* Lista interactiva de los puntos de la zona */}
                  <div className="mt-6 border-t border-border-soft pt-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-artery-soft" />
                        Puntos de interés en esta vista:
                      </span>
                      <span className="text-[10px] text-zinc-400">Clic para ver en foto</span>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {activeZone.hotspots.map((hotspot, idx) => {
                        const isSelected = selectedHotspot?.id === hotspot.id;
                        return (
                          <button
                            key={hotspot.id}
                            type="button"
                            onClick={() => {
                              setActiveImageIndexInZone(0);
                              setShowHotspots(true);
                              setSelectedHotspot(hotspot);
                            }}
                            className={`hard-cut flex items-start gap-3 p-2.5 text-left border transition-all ${
                              isSelected
                                ? "border-artery bg-artery/20 ring-1 ring-artery text-white"
                                : "border-border/80 bg-ink/70 hover:border-artery/60 hover:bg-ink text-zinc-200 hover:text-white"
                            }`}
                          >
                            <span
                              className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ring-1 ring-black ${
                                isSelected ? "bg-artery text-white" : "bg-zinc-800 text-white"
                              }`}
                            >
                              {idx + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold text-white line-clamp-1">{hotspot.title}</p>
                              <p className="text-[11px] text-zinc-300 line-clamp-2 mt-0.5 leading-snug font-normal">
                                {hotspot.description}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3 Beneficios Médicos / Atributos del Espacio */}
                  <div className="mt-6 space-y-3.5 border-t border-border-soft pt-5">
                    {activeZone.features.map((feat) => (
                      <div key={feat.title} className="flex items-start gap-3">
                        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center border border-artery/30 bg-artery/10 text-artery-soft">
                          {renderIcon(feat.icon, "h-3.5 w-3.5")}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white">{feat.title}</p>
                          <p className="text-[11px] leading-relaxed text-zinc-400">{feat.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Botón para saltar directo al video correspondiente */}
                  <div className="mt-6 pt-5 border-t border-border-soft flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleJumpToVideo(activeZone.linkedVideoId)}
                      className="hard-cut flex-1 flex items-center justify-center gap-2 bg-artery px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-artery-deep transition-colors"
                    >
                      <Play className="h-3.5 w-3.5 fill-current" />
                      Ver Video de Esta Zona en HD
                    </button>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="hard-cut flex items-center justify-center gap-2 border border-white/20 bg-ink px-4 py-3 text-xs font-semibold text-white hover:border-artery hover:text-artery-soft"
                    >
                      <MessageCircle className="h-4 w-4 text-whatsapp" />
                      Consultar
                    </a>
                  </div>
                </div>

                {/* Micro-ficha de ubicación Torre Médica Santa */}
                <div className="border border-border-soft bg-navy/60 p-4 flex items-center gap-3.5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-white/10 bg-ink text-artery-soft">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-white">Torre Médica Santa · Consultorio 403</p>
                    <p className="text-vein-soft">
                      Av. Vasco Núñez de Balboa #1003, Fracc. Hornos, Acapulco · Piso 4 con Elevador
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════
            MODO 2: CINE DE VIDEOS HD (4 RECORRIDOS 4K)
           ══════════════════════════════════════════════════════════════ */}
        {mode === "cinema" && (
          <div className="mt-10 animate-fadeIn space-y-8">
            {/* Reproductor de Video Principal */}
            <div className="border border-border bg-ink-raised shadow-2xl overflow-hidden">
              <div className="relative aspect-video w-full bg-black">
                <video
                  ref={videoRef}
                  key={activeVideo.src}
                  controls
                  playsInline
                  preload="metadata"
                  poster={activeVideo.poster}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  className="h-full w-full object-cover"
                >
                  <source src={activeVideo.src} type="video/quicktime" />
                  <source src={activeVideo.src} type="video/mp4" />
                  Tu navegador no soporta reproducción de video HTML5.
                </video>
              </div>

              {/* Información del Video Activo */}
              <div className="p-6 md:p-8 bg-ink border-t border-border">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="border border-artery/40 bg-artery/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-artery-soft">
                      {activeVideo.badge || "Video del Consultorio"}
                    </span>
                    <span className="text-xs text-muted-foreground">·</span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-vein-pale">
                      <Clock className="h-3 w-3" />
                      {activeVideo.duration}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs text-vein-pale">
                    <Sparkles className="h-3.5 w-3.5 text-artery-soft" />
                    Filmación Real · iPhone 16 Pro 4K
                  </span>
                </div>

                <h3 className="mt-3 text-xl md:text-2xl font-semibold text-white">
                  {activeVideo.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-200 max-w-3xl leading-relaxed">
                  {activeVideo.description}
                </p>
              </div>
            </div>

            {/* Selector de los 4 Videos (Tarjetas Interactivas) */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-vein-soft">
                  Seleccione un recorrido en video (4 disponibles)
                </h4>
                <span className="text-xs text-muted-foreground">Haga clic para reproducir</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryVideos.map((vid, idx) => {
                  const isSelected = activeVideoId === vid.id;
                  return (
                    <button
                      key={vid.id}
                      type="button"
                      onClick={() => {
                        setActiveVideoId(vid.id);
                        setTimeout(() => {
                          if (videoRef.current) {
                            videoRef.current.play().catch(() => {});
                          }
                        }, 50);
                      }}
                      className={`hard-cut flex flex-col text-left border p-3 transition-all ${
                        isSelected
                          ? "border-artery bg-navy shadow-lg shadow-artery/20"
                          : "border-border bg-ink-raised hover:border-white/40"
                      }`}
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-black">
                        <Image src={vid.poster} alt={vid.title} fill className="object-cover" />
                        <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-[10px] font-mono text-white">
                          {vid.duration}
                        </span>
                        <div
                          className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity ${
                            isSelected ? "opacity-100" : "opacity-0 hover:opacity-100"
                          }`}
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-artery text-white">
                            <Play className="h-4 w-4 fill-current ml-0.5" />
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-artery-soft">
                            Video {idx + 1}
                          </span>
                          <p className="mt-0.5 text-xs font-semibold text-white line-clamp-1">{vid.title}</p>
                          <p className="mt-1 text-[11px] text-muted-foreground line-clamp-2">
                            {vid.description}
                          </p>
                        </div>
                        {isSelected && (
                          <span className="mt-2.5 inline-flex items-center gap-1 text-[10px] font-semibold text-artery-soft">
                            <CheckCircle2 className="h-3 w-3" />
                            Reproduciendo
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════
            MODO 3: MOSAICO FOTOGRÁFICO DE ALTA RESOLUCIÓN
           ══════════════════════════════════════════════════════════════ */}
        {mode === "mosaic" && (
          <div className="mt-10 animate-fadeIn">
            {/* Filtros del Mosaico */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {[
                { key: "all", label: "Todas las fotos" },
                { key: "muro", label: "Muro Insignia & Panorámicas" },
                { key: "diagnostico", label: "Diagnóstico & Doppler" },
                { key: "acceso", label: "Acceso & Consultorio 403" },
              ].map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setMosaicFilter(f.key as any)}
                  className={`hard-cut px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                    mosaicFilter === f.key
                      ? "bg-artery text-white border border-artery"
                      : "bg-ink-raised text-muted-foreground border border-border hover:text-white hover:border-white/30"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Grid Mosaico de Fotografías */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mosaicImages.map((img) => (
                <div
                  key={img.id}
                  onClick={() =>
                    setLightbox({
                      isOpen: true,
                      type: "image",
                      src: img.src,
                      title: img.title,
                      description: img.description,
                      badge: img.categoryLabel,
                    })
                  }
                  className="group relative flex flex-col cursor-pointer overflow-hidden border border-border bg-ink-raised transition-all duration-300 hover:border-artery hover:shadow-xl hover:shadow-artery/10"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 border border-white/20 bg-ink/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-vein-pale backdrop-blur-md">
                      {img.categoryLabel}
                    </span>
                    <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center border border-white/30 bg-ink/80 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between border-t border-border bg-ink-raised p-4">
                    <h3 className="text-sm font-semibold text-white group-hover:text-artery-soft transition-colors">
                      {img.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-300 line-clamp-2">{img.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════════
            BLOQUE FINAL: CTA & AGENDAR EN ESTAS INSTALACIONES
           ══════════════════════════════════════════════════════════════ */}
        <div className="mt-16 border border-border bg-gradient-to-r from-navy via-ink-raised to-navy p-8 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-artery-soft">
                <ShieldCheck className="h-4 w-4" />
                <span>Atención Médica Presencial</span>
              </div>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
                ¿Desea una valoración vascular en estas instalaciones?
              </h3>
              <p className="mt-3 text-sm text-zinc-200 leading-relaxed max-w-2xl">
                El Dr. Gregorio Alberto González Arcos atiende en el Consultorio 403 de Torre Médica Santa. Reciba un diagnóstico honesto, explicación con ultrasonido Doppler in-situ y el plan de tratamiento adecuado para sus piernas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="hard-cut flex items-center justify-center gap-2.5 bg-artery px-6 py-3.5 text-sm font-semibold text-white hover:bg-artery-deep transition-colors shadow-lg shadow-artery/25"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar Cita en Consultorio 403
              </a>
              <Link
                href="/contacto"
                className="hard-cut flex items-center justify-center gap-2 border border-white/20 bg-ink px-6 py-3.5 text-sm font-semibold text-white hover:border-artery hover:text-artery-soft transition-colors"
              >
                <MapPin className="h-4 w-4 text-vein-pale" />
                Ver Ubicación y Horarios
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          MODAL LIGHTBOX FULLSCREEN (ZOOM DE ALTA RESOLUCIÓN)
         ══════════════════════════════════════════════════════════════ */}
      {lightbox?.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/94 p-4 md:p-8 backdrop-blur-md animate-fadeIn"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative flex max-h-[92vh] max-w-5xl flex-col border border-border bg-ink-raised shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabecera del Lightbox */}
            <div className="flex items-center justify-between border-b border-border bg-ink px-6 py-4">
              <div className="flex items-center gap-3">
                {lightbox.badge && (
                  <span className="border border-artery/40 bg-artery/10 px-2.5 py-0.5 text-xs font-semibold text-artery-soft">
                    {lightbox.badge}
                  </span>
                )}
                <h3 className="text-base font-semibold text-white line-clamp-1">{lightbox.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Cerrar vista ampliada"
                className="hard-cut flex h-9 w-9 items-center justify-center border border-white/20 bg-ink text-white hover:border-artery hover:bg-artery"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Imagen Principal */}
            <div className="relative flex min-h-[300px] max-h-[70vh] w-full justify-center bg-black overflow-hidden">
              <div className="relative h-[65vh] w-full">
                <Image
                  src={lightbox.src}
                  alt={lightbox.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Pie del Lightbox */}
            <div className="flex items-center justify-between border-t border-border bg-ink px-6 py-4">
              <div>
                <h4 className="text-sm font-semibold text-white">{lightbox.title}</h4>
                <p className="mt-0.5 text-xs text-zinc-200 max-w-2xl font-normal">
                  {lightbox.description}
                </p>
              </div>
              <span className="text-xs text-vein-pale whitespace-nowrap pl-4">
                Consultorio 403 · Torre Médica Santa
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
