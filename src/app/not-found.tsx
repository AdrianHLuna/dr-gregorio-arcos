import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-ink px-4 text-center">
      <span className="h-1.5 w-16 bg-artery" />
      <h1 className="mt-6 text-4xl font-semibold text-foreground">404</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        No encontramos la página que buscas. Puede que el enlace esté roto o la página se haya movido.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="hard-cut bg-artery px-6 py-3 text-primary-foreground hover:bg-artery-deep">
          Ir al inicio
        </Link>
        <Link href="/servicios" className="hard-cut border border-border px-6 py-3 text-foreground hover:border-vein">
          Ver servicios
        </Link>
      </div>
    </main>
  );
}
