"use client";

import { useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import { Menu, X } from "lucide-react";
import { doctor } from "@/data";

interface MobileMenuProps {
  items: { label: string; href: Route }[];
}

/**
 * Menú hamburguesa móvil — la nav de escritorio usa `hidden md:flex`, así
 * que en pantallas chicas esta es la única forma de navegar. Botón de 44px
 * para cumplir el mínimo táctil de accesibilidad (§5.3). Restilizado sobre
 * el fondo negro de marca de este sitio.
 */
export default function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="hard-cut flex h-11 w-11 shrink-0 items-center justify-center border border-border text-foreground hover:border-artery"
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>

      {open && (
        <nav
          aria-label="Principal (móvil)"
          className="absolute inset-x-0 top-full border-t border-border bg-ink-raised shadow-xl"
        >
          <ul className="divide-y divide-border-soft">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center px-4 text-foreground hover:text-artery-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center gap-2 bg-whatsapp px-4 text-white"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
