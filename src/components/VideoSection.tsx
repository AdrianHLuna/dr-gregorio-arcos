"use client";

import { galleryVideos } from "@/data/gallery";
import { Video as VideoIcon, Sparkles, Clock, CheckCircle2 } from "lucide-react";

export default function VideoSection() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {galleryVideos.map((vid, idx) => (
          <div
            key={vid.id}
            className="group flex flex-col overflow-hidden border border-border bg-ink-raised shadow-lg transition-all duration-300 hover:border-artery hover:shadow-xl hover:shadow-artery/10"
          >
            {/* Reproductor de Video */}
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <video
                controls
                playsInline
                preload="metadata"
                poster={vid.poster}
                className="h-full w-full object-cover"
              >
                <source src={vid.src} type="video/quicktime" />
                <source src={vid.src} type="video/mp4" />
                Tu navegador no soporta la reproducción de video HTML5.
              </video>

              {vid.duration && (
                <span className="absolute bottom-3 right-3 rounded bg-black/85 px-2 py-0.5 text-xs font-mono text-white shadow-md">
                  {vid.duration}
                </span>
              )}
            </div>

            {/* Información del Video */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-artery-soft">
                    <VideoIcon className="h-4 w-4" />
                    <span>{vid.badge || `Video ${idx + 1}`}</span>
                  </div>
                  {vid.duration && (
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {vid.duration}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-artery-soft transition-colors">
                  {vid.title}
                </h3>
                <p className="mt-2 text-sm text-vein-soft leading-relaxed">{vid.description}</p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border-soft pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5 text-vein-pale">
                  <Sparkles className="h-3.5 w-3.5 text-artery-soft" />
                  Torre Médica Santa · Consultorio 403
                </span>
                <span className="font-mono text-foreground/60">4K / HD</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
