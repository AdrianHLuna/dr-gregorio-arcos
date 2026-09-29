import { AlertTriangle } from "lucide-react";

interface AlarmSignsSectionProps {
  signs: string[];
}

/**
 * AISO v3.1 §3.8 — obligatoria en toda página de síntoma. Dirige a
 * urgencias, nunca a WhatsApp. Restilizada con el rojo arterial real de la
 * marca en vez del rojo genérico de Tailwind: la coincidencia entre "alarma
 * médica" y "color de marca" es intencional en este sitio, ya que el rojo
 * del logo representa justamente la arteria. Esquinas rectas y borde grueso,
 * acorde a la identidad gráfica y bold del sitio (sin esquinas redondeadas
 * suaves como en los sitios de tema claro del registro).
 */
export default function AlarmSignsSection({ signs }: AlarmSignsSectionProps) {
  return (
    <section className="my-8 border-2 border-artery bg-artery-deep/25 p-6">
      <h2 className="flex items-center gap-2 text-lg font-bold text-artery-soft">
        <AlertTriangle className="shrink-0" aria-hidden="true" />
        Señales de alarma: acude a urgencias
      </h2>
      <p className="mt-2 text-sm text-foreground/85">
        Si presentas cualquiera de lo siguiente, acude de inmediato a un servicio de urgencias o llama a
        emergencias. No esperes a agendar una consulta ni escribas por WhatsApp.
      </p>
      <ul className="mt-4 space-y-2 text-sm text-foreground">
        {signs.map((sign, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-artery" aria-hidden="true">
              •
            </span>
            <span>{sign}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
