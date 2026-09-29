import type { Metadata, Viewport } from "next";
import { doctor } from "@/data";
import { jost } from "@/lib/fonts";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBottomNav from "@/components/StickyBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dr-gregorio-arcos.com"),
  title: {
    default: `${doctor.title} ${doctor.name} — ${doctor.specialistTitle} en ${doctor.city}`,
    template: `%s | ${doctor.title} ${doctor.name}`,
  },
  description: `${doctor.title} ${doctor.name}, ${doctor.specialistTitle} con subespecialidad en ${doctor.subspecialty} en ${doctor.city}, ${doctor.state}. Diagnóstico y tratamiento de enfermedades venosas y arteriales.`,
  openGraph: {
    title: `${doctor.title} ${doctor.name} — ${doctor.specialistTitle} en ${doctor.city}`,
    description: doctor.bio,
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${doctor.title} ${doctor.name} — ${doctor.specialistTitle} en ${doctor.city}`,
    description: doctor.bio,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#af3635",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={jost.variable}>
      <body className="pb-16 md:pb-0">
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
        <StickyBottomNav />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
