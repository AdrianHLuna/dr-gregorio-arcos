import type { NextConfig } from "next";

// Security headers — AISO v3.1 §8.1. X-XSS-Protection deprecado, sustituido por CSP.
// 'unsafe-eval' solo en dev: Turbopack/React Fast Refresh usan eval() para HMR;
// React nunca usa eval() en producción, así que la build de producción no lo necesita.
const scriptSrc =
  process.env.NODE_ENV === "production"
    ? "'self' 'unsafe-inline' https://www.googletagmanager.com"
    : "'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value:
      `default-src 'self'; script-src ${scriptSrc}; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.google-analytics.com https://www.googletagmanager.com; frame-src https://www.youtube-nocookie.com https://www.google.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none'`,
  },
];

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "img.youtube.com" }],
    qualities: [60, 75],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
