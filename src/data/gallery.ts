export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: "doctor" | "consultorio" | "equipamiento";
  categoryLabel: string;
  description: string;
}

export interface GalleryVideo {
  id: string;
  src: string;
  title: string;
  description: string;
  poster: string;
  type: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "dr-escritorio",
    src: "/images/IMG_5955.jpg",
    alt: "Dr. Gregorio Alberto González Arcos en su escritorio de consulta",
    title: "Dr. Gregorio Alberto González Arcos",
    category: "doctor",
    categoryLabel: "Dr. Gregorio y Atención",
    description: "Angiólogo y Cirujano Vascular en su escritorio de consulta médica en Torre Médica Santa.",
  },
  {
    id: "letrero-consultorio",
    src: "/images/IMG_5818.jpeg",
    alt: "Fachada y letrero iluminado de Dr. Gregorio Alberto González Arcos",
    title: "Señalización Oficial del Consultorio",
    category: "consultorio",
    categoryLabel: "Consultorio e Instalaciones",
    description: "Consultorio 403 en Torre Médica Santa, Acapulco de Juárez, Guerrero.",
  },
  {
    id: "escritorio-letrero",
    src: "/images/IMG_5819.jpeg",
    alt: "Escritorio de consulta con placa iluminada",
    title: "Área de Consulta Privada",
    category: "consultorio",
    categoryLabel: "Consultorio e Instalaciones",
    description: "Espacio moderno para valoración clínica y atención de pacientes vasculares.",
  },
  {
    id: "recepcion-espera",
    src: "/images/IMG_5821.jpeg",
    alt: "Sala de recepción y espera",
    title: "Sala de Espera",
    category: "consultorio",
    categoryLabel: "Consultorio e Instalaciones",
    description: "Área de recepción cómoda y segura para acompañantes y pacientes.",
  },
  {
    id: "dr-valoracion-1",
    src: "/images/IMG_5917.jpg",
    alt: "Dr. Gregorio realizando valoración clínica vascular a paciente",
    title: "Valoración Clínica Vascular",
    category: "doctor",
    categoryLabel: "Dr. Gregorio y Atención",
    description: "Examen clínico minucioso para detectar várices, insuficiencia venosa o problemas arteriales.",
  },
  {
    id: "dr-consulta-2",
    src: "/images/IMG_5932.jpg",
    alt: "Dr. Gregorio en consulta médica con paciente",
    title: "Atención Médica Especializada",
    category: "doctor",
    categoryLabel: "Dr. Gregorio y Atención",
    description: "Diagnóstico personalizado con explicación en lenguaje accesible sobre el origen de los síntomas.",
  },
  {
    id: "dr-explicacion",
    src: "/images/IMG_5958.jpg",
    alt: "Dr. Gregorio explicando diagnóstico vascular al paciente",
    title: "Orientación Médica Integral",
    category: "doctor",
    categoryLabel: "Dr. Gregorio y Atención",
    description: "Acompañamiento continuo desde el diagnóstico hasta la recuperación del paciente.",
  },
  {
    id: "dr-paciente",
    src: "/images/IMG_5964.jpg",
    alt: "Dr. Gregorio atendiendo a paciente en consultorio",
    title: "Consulta Especializada",
    category: "doctor",
    categoryLabel: "Dr. Gregorio y Atención",
    description: "Compromiso con una revisión vascular honesta, clara y profesional.",
  },
  {
    id: "ultrasonido-doppler",
    src: "/images/IMG_5857.jpeg",
    alt: "Equipo de Ultrasonido Doppler Vascular en consultorio",
    title: "Ultrasonido Doppler Vascular",
    category: "equipamiento",
    categoryLabel: "Equipamiento Diagnóstico",
    description: "Tecnología para la evaluación de flujo venoso y arterial no invasiva.",
  },
  {
    id: "camilla-doppler",
    src: "/images/IMG_5859.jpeg",
    alt: "Camilla de exploración clínica y equipo de ecografía vascular",
    title: "Área de Exploración Físico-Vascular",
    category: "equipamiento",
    categoryLabel: "Equipamiento Diagnóstico",
    description: "Espacio equipado para estudios hemodinámicos y revisiones de extremidades.",
  },
  {
    id: "equipo-diagnostico",
    src: "/images/IMG_5861.jpeg",
    alt: "Equipo diagnóstico de precisión médica vascular",
    title: "Tecnología Vascular Especializada",
    category: "equipamiento",
    categoryLabel: "Equipamiento Diagnóstico",
    description: "Equipamiento médico para el mapeo diagnóstico de várices y circulación.",
  },
  {
    id: "ilustracion-vascular",
    src: "/images/IMG_5838.jpeg",
    alt: "Modelos e ilustración médica anatómica vascular",
    title: "Guías Anatómicas Educativas",
    category: "consultorio",
    categoryLabel: "Consultorio e Instalaciones",
    description: "Material anatómico para explicar al paciente la circulación venosa y arterial.",
  },
  {
    id: "diploma-consultorio",
    src: "/images/IMG_5841.jpeg",
    alt: "Acreditaciones y certificaciones en el consultorio",
    title: "Certificaciones Profesionales",
    category: "consultorio",
    categoryLabel: "Consultorio e Instalaciones",
    description: "Respaldo de especialidad por la UNAM e IPN visible en el consultorio.",
  },
  {
    id: "procedimiento-clinico-1",
    src: "/images/IMG_5873.jpeg",
    alt: "Evaluación clínica de miembros inferiores",
    title: "Revisión Circulatoria de Piernas",
    category: "doctor",
    categoryLabel: "Dr. Gregorio y Atención",
    description: "Examen de insuficiencia venosa periférica y edema en miembros inferiores.",
  },
  {
    id: "procedimiento-clinico-2",
    src: "/images/IMG_5878.jpeg",
    alt: "Atención directa y revisión de extremidades",
    title: "Evaluación Arterial y Venosa",
    category: "doctor",
    categoryLabel: "Dr. Gregorio y Atención",
    description: "Toma de pulsos periféricos y evaluación de circulación distal.",
  },
  {
    id: "procedimiento-clinico-3",
    src: "/images/IMG_5880.jpeg",
    alt: "Examen circulatorio y valoración vascular exhaustiva",
    title: "Diagnóstico Preventivo",
    category: "doctor",
    categoryLabel: "Dr. Gregorio y Atención",
    description: "Detección a tiempo de complicaciones venosas y arteriales.",
  },
  {
    id: "procedimiento-clinico-4",
    src: "/images/IMG_5900.jpeg",
    alt: "Consulta especializada en angiología",
    title: "Valoración de Várices y Úlceras",
    category: "doctor",
    categoryLabel: "Dr. Gregorio y Atención",
    description: "Planes de tratamiento para úlceras venosas y complicaciones de circulación.",
  },
];

export const galleryVideos: GalleryVideo[] = [
  {
    id: "video-consultorio",
    src: "/images/IMG_5844.mov",
    title: "Recorrido por el Consultorio del Dr. Gregorio",
    description: "Conozca las instalaciones, recepción y área de atención médica en Torre Médica Santa, Acapulco.",
    poster: "/images/IMG_5819.jpeg",
    type: "video/quicktime",
  },
  {
    id: "video-equipamiento",
    src: "/images/IMG_5851.mov",
    title: "Demostración de Equipamiento y Área Diagnóstica",
    description: "Recorrido en video por la camilla de exploración y el equipo de ultrasonido Doppler vascular.",
    poster: "/images/IMG_5857.jpeg",
    type: "video/quicktime",
  },
];
