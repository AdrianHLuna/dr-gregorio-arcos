import type { DoctorProfile } from "@/types/schema";

// Datos reales del intake (2026-09-24). PENDIENTE: folio COFEPRIS, URL de
// Facebook (solo se dio el nombre de la página, no el link — tampoco hay
// Instagram), precio de consulta y métodos de pago (en blanco en el
// intake — nunca se inventan). El precio se deja con un valor técnico no
// significativo (1) que NUNCA debe mostrarse en pantalla ni en JSON-LD —
// ver instrucciones en src/lib/schemas.ts (baseGraph) y src/app/page.tsx.
export const doctor: DoctorProfile = {
  name: "Gregorio Alberto González Arcos",
  title: "Dr.",
  specialty: "Angiología, Cirugía Vascular y Endovascular",
  specialistTitle: "Angiólogo",
  subspecialty: "Urgencias Médico-Quirúrgicas",
  cedula: "2819616",
  cedulaInstitucion: "UAGRO",
  cedulaEspecialidad: "12726412",
  cedulaEspecialidadInstitucion: "UNAM",
  cedulaSubespecialidad: "5259295",
  cedulaSubespecialidadInstitucion: "IPN",
  phone: "+527444864745",
  whatsapp: "+527441186041",
  // Correo real, sí se dio en el intake.
  email: "alber_gonzalez2000@yahoo.com.mx",
  address: "Torre Médica Santa, Vasco Núñez de Balboa #1003, int. 403, Fracc. Hornos",
  city: "Acapulco de Juárez",
  state: "Guerrero",
  country: "México",
  // PENDIENTE: reemplazar por el enlace real de Google Business Profile
  // ("DR. GREGORIO ALBERTO GONZALEZ ARCOS" según el intake) cuando se confirme.
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Torre+Medica+Santa+Lucia+Vasco+Nunez+de+Balboa+1003+Hornos+Acapulco+Guerrero",
  geo: { latitude: 16.85829, longitude: -99.89346 },
  // PENDIENTE CRÍTICO: el doctor no dio precio (campo vacío en el intake).
  // Este "1" es un valor técnico para satisfacer el esquema (positive()) —
  // NUNCA renderizarlo en UI ni incluirlo en JSON-LD (ver instrucciones en
  // src/lib/schemas.ts y src/app/page.tsx).
  consultationPrice: 1,
  paymentMethods: [],
  // Nada dicho al respecto en el intake (ni "sí" ni "no") — se omite, no se inventa.
  insurances: undefined,
  schedule: "Lunes a miércoles de 12:00 a 18:00",
  openingHours: ["Mo-We 12:00-18:00"],
  acceptingNewPatients: true,
  // Fotografía oficial del Dr. Gregorio Alberto González Arcos.
  photo: "/images/hero.jpeg",
  bio: "El Dr. Gregorio Alberto González Arcos es Angiólogo, con especialidad en Angiología y Cirugía Vascular y Endovascular por la Universidad Nacional Autónoma de México, y una especialidad adicional en Urgencias Médico-Quirúrgicas por el Instituto Politécnico Nacional. Es Médico Cirujano egresado de la Universidad Autónoma de Guerrero. Atiende en su consultorio de la Torre Médica Santa, en Acapulco de Juárez, Guerrero, enfocado en el diagnóstico y tratamiento de enfermedades de las venas y las arterias, desde afecciones venosas frecuentes hasta procedimientos vasculares que requieren atención más especializada.",
  philosophy:
    "Mi compromiso es ofrecer a cada paciente una valoración vascular clara y honesta, explicando el origen de sus síntomas circulatorios en un lenguaje comprensible y acompañándolo en cada etapa del tratamiento, desde el diagnóstico hasta la recuperación.",
  experience: [],
  // PENDIENTE: el intake no incluyó años de experiencia, pacientes atendidos
  // ni procedimientos realizados — nunca se inventan (AGENTS.md §9). En
  // cuanto el doctor confirme cifras reales, agregar aquí, ej.:
  // stats: [{ label: "Años de experiencia", value: "+12" }, { label: "Pacientes atendidos", value: "+2,000" }]
  // La sección correspondiente en src/app/page.tsx ya está lista y se
  // muestra automáticamente en cuanto este arreglo tenga elementos.
  certifications: [],
  education: [
    { degree: "Médico Cirujano", institution: "Universidad Autónoma de Guerrero (UAGRO)" },
    {
      degree: "Especialidad en Angiología y Cirugía Vascular",
      institution: "Universidad Nacional Autónoma de México (UNAM)",
    },
    {
      degree: "Especialidad en Urgencias Médico-Quirúrgicas",
      institution: "Instituto Politécnico Nacional (IPN)",
    },
  ],
  sameAs: [],
};
