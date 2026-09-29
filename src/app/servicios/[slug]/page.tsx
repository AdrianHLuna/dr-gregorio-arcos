import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { doctor, diseases, services } from "@/data";
import { generateServiceSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import FloatingButtons from "@/components/FloatingButtons";
import EntityImage from "@/components/EntityImage";
import { MessageCircle } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `/servicios/${service.slug}`,
      images: service.image ? [{ url: service.image }] : undefined,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function ServicePage(props: PageProps<"/servicios/[slug]">) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedConditions = diseases.filter((d) => service.relatedConditions?.includes(d.id));
  const whatsappHref = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, ${doctor.title} ${doctor.name}. Vi su página sobre ${service.name} y me gustaría agendar una valoración.`
  )}`;

  return (
    <>
      <StructuredData data={generateServiceSchemas(service)} />
      <main className="bg-navy">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Servicios", href: "/servicios" },
            { label: service.name },
          ]}
          isDark
        />

        <header className="mx-auto max-w-5xl px-6 pt-2">
          <EntityImage src={service.image} alt={service.name} size="hero" priority />
          <div className="mt-6">
            <h1 className="text-3xl font-semibold text-foreground md:text-4xl">{service.name}</h1>
            <div className="mt-4">
              <MedicalReviewByline lastReviewed={service.lastReviewed} />
            </div>
          </div>
        </header>

        <article className="mx-auto grid max-w-5xl gap-10 px-6 pb-20 pt-8 lg:grid-cols-[2fr_1fr]">
          <div>
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                ¿En qué consiste {service.name.toLowerCase()}?
              </h2>
              <p className="mt-3 text-muted-foreground">{service.longDescription}</p>
            </section>

            {service.technicalSpecs && (
              <section className="mt-10">
                <h2 className="text-xl font-semibold text-foreground">Datos técnicos</h2>
                <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {Object.entries(service.technicalSpecs).map(([key, value]) => (
                    <div key={key} className="border border-border-soft bg-surface p-4">
                      <dt className="text-xs uppercase tracking-wide text-vein-pale">{key}</dt>
                      <dd className="mt-1 font-medium text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-foreground">Beneficios</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-vein" aria-hidden="true">
                      —
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </section>

            {service.postOpRecommendations.length > 0 && (
              <section className="mt-10">
                <h2 className="text-xl font-semibold text-foreground">Recomendaciones posteriores</h2>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  {service.postOpRecommendations.map((r, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-vein" aria-hidden="true">
                        —
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {service.faqs && service.faqs.length > 0 && (
              <section className="mt-10">
                <h2 className="text-xl font-semibold text-foreground">Preguntas frecuentes</h2>
                <div className="mt-4 space-y-5">
                  {service.faqs.map((faq, i) => (
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
            <div className="border-2 border-vein bg-gradient-to-b from-steel/30 to-transparent p-6 shadow-[0_18px_40px_-24px_rgba(75,99,168,0.55)]">
              <p className="font-medium text-foreground">
                {doctor.title} {doctor.name} realiza {service.name.toLowerCase()} en Acapulco de Juárez.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="hard-cut mt-5 flex items-center justify-center gap-2 bg-vein px-5 py-3.5 text-sm font-semibold text-accent-foreground hover:bg-steel"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Agendar valoración
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

      <FloatingButtons context={service.name.toLowerCase()} />
    </>
  );
}
