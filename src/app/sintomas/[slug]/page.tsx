import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { doctor, diseases, symptoms } from "@/data";
import { generateSymptomSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import AlarmSignsSection from "@/components/AlarmSignsSection";
import FloatingButtons from "@/components/FloatingButtons";
import EntityImage from "@/components/EntityImage";
import { MessageCircle } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/sintomas/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) return {};

  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
    alternates: { canonical: `/sintomas/${symptom.slug}` },
    openGraph: {
      title: symptom.seo.title,
      description: symptom.seo.description,
      url: `/sintomas/${symptom.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function SymptomPage(props: PageProps<"/sintomas/[slug]">) {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) notFound();

  const relatedConditions = diseases.filter((d) => symptom.relatedConditions.includes(d.id));
  const whatsappHref = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, ${doctor.title} ${doctor.name}. Vi su página sobre ${symptom.name} y me gustaría agendar una consulta.`
  )}`;

  return (
    <>
      <StructuredData data={generateSymptomSchemas(symptom)} />
      <main className="bg-ink">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Síntomas", href: "/sintomas" },
            { label: symptom.name },
          ]}
          isDark
        />

        <header className="mx-auto max-w-5xl px-6 pt-2">
          <EntityImage src={symptom.image} alt={symptom.name} size="hero" priority />
          <div className="mt-6">
            <h1 className="text-3xl font-semibold text-foreground md:text-4xl">{symptom.name}</h1>
            {symptom.colloquialNames && symptom.colloquialNames.length > 0 && (
              <p className="mt-2 text-sm text-vein-soft">
                También se le llama: {symptom.colloquialNames.join(", ")}
              </p>
            )}
            <div className="mt-4">
              <MedicalReviewByline lastReviewed={symptom.lastReviewed} />
            </div>
          </div>
        </header>

        <article className="mx-auto grid max-w-5xl gap-10 px-6 pb-20 pt-8 lg:grid-cols-[2fr_1fr]">
          <div>
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                ¿Qué es {symptom.name.toLowerCase()}?
              </h2>
              <p className="mt-3 text-muted-foreground">{symptom.description}</p>
            </section>

            <AlarmSignsSection signs={symptom.alarmSigns} />

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-foreground">Causas posibles</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {symptom.causes.map((c, i) => (
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
              <h2 className="text-xl font-semibold text-foreground">¿Por qué consultar?</h2>
              <p className="mt-3 text-muted-foreground">{symptom.whyConsult}</p>
            </section>

            {symptom.faqs && symptom.faqs.length > 0 && (
              <section className="mt-10">
                <h2 className="text-xl font-semibold text-foreground">Preguntas frecuentes</h2>
                <div className="mt-4 space-y-5">
                  {symptom.faqs.map((faq, i) => (
                    <div key={i} className="border-t border-border-soft pt-4">
                      <h3 className="font-medium text-foreground">{faq.question}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="border-2 border-vein bg-gradient-to-b from-vein/20 to-transparent p-6 shadow-[0_18px_40px_-24px_rgba(75,99,168,0.55)]">
              <p className="font-medium text-foreground">
                {doctor.title} {doctor.name} atiende {symptom.name.toLowerCase()} en consulta programada, no
                urgente.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="hard-cut mt-5 flex items-center justify-center gap-2 bg-artery px-5 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-artery-deep"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Agendar consulta
              </a>
            </div>

            {relatedConditions.length > 0 && (
              <div className="mt-6 border border-border-soft bg-surface p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-artery-soft">
                  Enfermedades relacionadas
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {relatedConditions.map((d) => (
                    <li key={d.id}>
                      <Link href={`/enfermedades/${d.slug}`} className="hard-cut text-foreground hover:text-artery-soft">
                        {d.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </article>
      </main>

      <FloatingButtons context={symptom.name.toLowerCase()} />
    </>
  );
}
