import { Jost } from "next/font/google";

// Tipografía de este sitio ("Circulación"). La paleta real de marca
// (PALETA DE COLORES DR. GREGORIO_compressed.pdf) sugiere "Century Gothic
// Pro" para todo el sistema — es una fuente de Monotype, de paga, y no se
// piratea (mismo criterio que Myriad→PT Sans en dr-gustavo-alvarez y TT
// Supermolot→Oxanium en dr-aram-alarcon). Jost es la sustituta gratuita más
// citada para Century Gothic/Futura: geometría circular casi idéntica en la
// "o", "a" de un solo piso y proporciones monolineales. Un solo family para
// todo el sitio (encabezados y cuerpo), tal como pide la marca real.
export const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jost",
});
