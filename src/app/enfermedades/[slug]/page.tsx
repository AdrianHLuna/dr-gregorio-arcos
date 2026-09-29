import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { doctor, diseases, services, symptoms } from "@/data";
import { generateDiseaseSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import FloatingButtons from "@/components/FloatingButtons";
import EntityImage from "@/components/EntityImage";
import { MessageCircle } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(props: PageProps<"/enfermedades/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) return {};

  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
    alternates: { canonical: `/enfermedades/${disease.slug}` },
    openGraph: {
      title: disease.seo.title,
      description: disease.seo.description,
      url: `/enfermedades/${disease.slug}`,
      images: disease.image ? [{ url: disease.image }] : undefined,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function DiseasePage(props: PageProps<"/enfermedades/[slug]">) {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) notFound();

  const relatedServices = services.filter((s) => disease.relatedServices?.includes(s.id));
  const relatedSymptoms = symptoms.filter((s) => disease.relatedSymptoms?.includes(s.id));
  const whatsappHref = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, ${doctor.title} ${doctor.name}. Vi su página sobre ${disease.name} y me gustaría agendar una valoración.`
  )}`;

  return (
    <>
      <StructuredData data={generateDiseaseSchemas(disease)} />
      <main className="bg-ink">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Enfermedades", href: "/enfermedades" },
            { label: disease.name },
          ]}
          isDark
        />

        <header className="mx-auto max-w-5xl px-6 pt-2">
          <EntityImage src={disease.image} alt={disease.name} size="hero" priority />
          <div className="mt-6">
            <h1 className="text-3xl font-semibold text-foreground md:text-4xl">{disease.name}</h1>
            {disease.colloquialNames && disease.colloquialNames.length > 0 && (
              <p className="mt-2 text-sm text-vein-soft">
                También conocida como: {disease.colloquialNames.join(", ")}
              </p>
            )}
            <div className="mt-4">
              <MedicalReviewByline lastReviewed={disease.lastReviewed} />
            </div>
          </div>
        </header>

        <article className="mx-auto grid max-w-5xl gap-10 px-6 pb-20 pt-8 lg:grid-cols-[2fr_1fr]">
          <div>
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                ¿Qué es {disease.name.toLowerCase()}?
              </h2>
              <p className="mt-3 text-muted-foreground">{disease.description}</p>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-foreground">Síntomas</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {disease.symptoms.map((s, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-artery" aria-hidden="true">
                      —
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-foreground">Causas</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {disease.causes.map((c, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-vein" aria-hidden="true">
                      —
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-foreground">Factores de riesgo</h2>
              <ul className="mt-3 grid gap-2 text-muted-foreground sm:grid-cols-2">
                {disease.riskFactors.map((r, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-vein" aria-hidden="true">
                      —
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </section>

            {disease.mexicoStats && (
              <section className="mt-10 border-l-2 border-vein bg-surface p-5">
                <h2 className="text-lg font-semibold text-foreground">Contexto en México</h2>
                <p className="mt-2 text-sm text-muted-foreground">{disease.mexicoStats}</p>
              </section>
            )}

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-foreground">Complicaciones</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {disease.complications.map((c, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-artery" aria-hidden="true">
                      —
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-foreground">Tratamientos</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {disease.treatments.map((t, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-vein" aria-hidden="true">
                      —
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-foreground">Preguntas frecuentes</h2>
              <div className="mt-4 space-y-5">
                {disease.faqs.map((faq, i) => (
                  <div key={i} className="border-t border-border-soft pt-4">
                    <h3 className="font-medium text-foreground">{faq.question}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {disease.sources && disease.sources.length > 0 && (
              <section className="mt-10 text-xs text-muted-foreground">
                <h2 className="font-semibold text-foreground">Fuentes</h2>
                <ul className="mt-1 list-inside list-disc">
                  {disease.sources.map((src, i) => (
                    <li key={i}>{src}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="border-2 border-artery bg-gradient-to-b from-artery-deep/30 to-transparent p-6 shadow-[0_18px_40px_-24px_rgba(175,54,53,0.55)]">
              <p className="font-medium text-foreground">
                {doctor.title} {doctor.name} atiende {disease.name.toLowerCase()} en Acapulco de Juárez.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="hard-cut mt-5 flex items-center justify-center gap-2 bg-artery px-5 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-artery-deep"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Agendar valoración
              </a>
            </div>

            {(relatedServices.length > 0 || relatedSymptoms.length > 0) && (
              <div className="mt-6 border border-border-soft bg-surface p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-vein-pale">Relacionados</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {relatedServices.map((s) => (
                    <li key={s.id}>
                      <Link href={`/servicios/${s.slug}`} className="hard-cut text-foreground hover:text-vein-pale">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                  {relatedSymptoms.map((s) => (
                    <li key={s.id}>
                      <Link href={`/sintomas/${s.slug}`} className="hard-cut text-foreground hover:text-vein-pale">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </article>
      </main>

      <FloatingButtons context={disease.name.toLowerCase()} />
    </>
  );
}
