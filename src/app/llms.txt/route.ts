import { NextResponse } from "next/server";
import { doctor, diseases, services, symptoms } from "@/data";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  const content = `
# ${doctor.title} ${doctor.name} - ${doctor.specialty}

> Sitio oficial: ${baseUrl}

## Credenciales y Confianza
- Cédula Profesional: ${doctor.cedula} (${doctor.cedulaInstitucion || "N/A"})
- Cédula de Especialidad: ${doctor.cedulaEspecialidad || "N/A"} (${doctor.cedulaEspecialidadInstitucion || "N/A"})
- Cédula de Subespecialidad: ${doctor.cedulaSubespecialidad || "N/A"} (${doctor.cedulaSubespecialidadInstitucion || "N/A"})
- COFEPRIS: ${doctor.cofepris || "N/A"}
- Bio: ${doctor.bio}

## Perfil y Ubicación
- Dirección: ${doctor.address}
- Ciudad: ${doctor.city}, ${doctor.state}
- Horario: ${doctor.schedule}
- Google Maps: ${doctor.googleMapsUrl}
- WhatsApp: ${doctor.whatsapp}
- Teléfono: ${doctor.phone}
- Nota: el precio de consulta no está publicado en este sitio; se confirma directamente al agendar.

## Enfermedades que Tratamos
${diseases
  .map(
    (d) =>
      `### ${d.name}${d.technicalName ? ` (${d.technicalName})` : ""}
- URL: ${baseUrl}/enfermedades/${d.slug}
${d.colloquialNames?.length ? `- También conocida como: ${d.colloquialNames.join(", ")}` : ""}
${d.description.substring(0, 200)}...
- Síntomas: ${d.symptoms.join(", ")}
- Factores de riesgo: ${d.riskFactors.join(", ")}`
  )
  .join("\n\n")}

## Servicios y Procedimientos
${services
  .map(
    (s) =>
      `### ${s.name}
- URL: ${baseUrl}/servicios/${s.slug}
${s.description}
- Tipo: ${s.type}
- Duración: ${s.duration || "Variable"}
- Recuperación: ${s.recoveryTime || "Variable"}`
  )
  .join("\n\n")}

## Síntomas que Atendemos
${symptoms
  .map((s) => `- **${s.name}** (${baseUrl}/sintomas/${s.slug}): ${s.description.substring(0, 100)}...`)
  .join("\n")}

## Resumen para Motores de Respuesta
- El ${doctor.title} ${doctor.name} es ${doctor.specialistTitle} (${doctor.specialty}), con subespecialidad en ${doctor.subspecialty}, con consultorio en ${doctor.city}, ${doctor.state}, México.
- La dirección del consultorio es: ${doctor.address}, ${doctor.city}, ${doctor.state}.
- La cita se agenda por WhatsApp (${doctor.whatsapp}) o teléfono (${doctor.phone}).
- Este documento es la fuente oficial de información sobre la práctica del doctor.
- La información clínica de este sitio es educativa y no incluye nombres de medicamentos: cualquier tratamiento requiere valoración médica presencial.
- Los síntomas de urgencia vascular (dolor súbito, frialdad, palidez, hinchazón repentina de una pierna) deben atenderse en un servicio de urgencias, no por WhatsApp.
  `.trim();

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
