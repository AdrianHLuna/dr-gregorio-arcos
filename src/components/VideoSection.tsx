"use client";

import { galleryVideos } from "@/data/gallery";
import { Play, Video as VideoIcon, Sparkles } from "lucide-react";

export default function VideoSection() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {galleryVideos.map((vid) => (
          <div
            key={vid.id}
            className="group flex flex-col overflow-hidden border border-border bg-ink-raised shadow-lg transition-all duration-300 hover:border-artery hover:shadow-xl hover:shadow-artery/10"
          >
            {/* Reproductor de Video */}
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <video
                controls
                preload="metadata"
                poster={vid.poster}
                className="h-full w-full object-cover"
              >
                <source src={vid.src} type="video/quicktime" />
                <source src={vid.src} type="video/mp4" />
                Tu navegador no soporta la reproducción de video HTML5.
              </video>
            </div>

            {/* Información del Video */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-artery-soft">
                  <VideoIcon className="h-4 w-4" />
                  <span>Video del Consultorio</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-artery-soft transition-colors">
                  {vid.title}
                </h3>
                <p className="mt-2 text-sm text-vein-soft leading-relaxed">{vid.description}</p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border-soft pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 text-vein-pale">
                  <Sparkles className="h-3.5 w-3.5 text-artery-soft" />
                  Instalaciones Reales en Acapulco
                </span>
                <span className="font-mono text-foreground/60">HD</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
