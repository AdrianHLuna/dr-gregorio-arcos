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
  duration?: string;
  badge?: string;
}

export interface Hotspot {
  id: string;
  x: number; // percentage from left (0 - 100)
  y: number; // percentage from top (0 - 100)
  title: string;
  description: string;
  category: "art" | "medical" | "tech" | "facility";
}

export interface ZoneFeature {
  icon: "HeartPulse" | "ShieldCheck" | "Sparkles" | "Activity" | "Bed" | "Building2" | "DoorOpen" | "PhoneCall" | "Stethoscope";
  title: string;
  text: string;
}

export interface ZoneGalleryItem {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

export interface ConsultorioZone {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  description: string;
  mainImage: {
    src: string;
    alt: string;
    title: string;
  };
  hotspots: Hotspot[];
  features: ZoneFeature[];
  gallery: ZoneGalleryItem[];
  linkedVideoId: string;
}

export const consultorioZones: ConsultorioZone[] = [
  {
    id: "muro-insignia",
    name: "Muro Insignia & Despacho",
    subtitle: "El corazón visual y médico del consultorio",
    badge: "Muro Anatómico",
    description:
      "Un espacio diseñado con paneles acanalados de madera y esculturas anatómicas retroiluminadas en rojo arterial y azul venoso, simbolizando la circulación corporal. Aquí el Dr. Gregorio recibe a sus pacientes en un entorno privado, cálido y confidencial.",
    mainImage: {
      src: "/images/consultorio/img_5839.webp",
      alt: "Muro de madera con siluetas anatómicas vasculares iluminadas en azul y rojo, escritorio médico y neón de Dr. Gregorio Alberto González Arcos",
      title: "Muro Escultórico Vascular y Despacho Médico",
    },
    hotspots: [
      {
        id: "hotspot-siluetas",
        x: 42,
        y: 36,
        title: "Escultura Vascular Retroiluminada",
        description: "Siluetas anatómicas en acrílico con iluminación LED roja (arterial) y azul (venosa) que representan la hemodinámica humana.",
        category: "art",
      },
      {
        id: "hotspot-neon",
        x: 40,
        y: 58,
        title: "Firma Neón Oficial",
        description: "Rótulo luminoso del Dr. Gregorio Alberto González Arcos, especialista en Angiología y Cirugía Vascular y Endovascular.",
        category: "facility",
      },
      {
        id: "hotspot-cedulas",
        x: 14,
        y: 32,
        title: "Acreditaciones Universitarias UNAM / IPN",
        description: "Títulos y diplomas de alta especialidad médica enmarcados a la vista para máxima certeza del paciente.",
        category: "medical",
      },
      {
        id: "hotspot-escritorio",
        x: 64,
        y: 62,
        title: "Escritorio de Valoración Médica",
        description: "Espacio privado y climatizado para dialogar con el paciente y su familia, explicando el diagnóstico sin prisas.",
        category: "facility",
      },
    ],
    features: [
      {
        icon: "HeartPulse",
        title: "Cromoterapia Vascular",
        text: "Iluminación ambiental roja y azul que brinda una atmósfera moderna, cálida y profesional.",
      },
      {
        icon: "ShieldCheck",
        title: "Acreditación Visible",
        text: "Cédula de Especialidad 12726412 con respaldo académico en angiología y cirugía vascular.",
      },
      {
        icon: "Sparkles",
        title: "Privacidad y Confort",
        text: "Espacio cerrado y climatizado exclusivo para la confidencialidad de cada consulta médica.",
      },
    ],
    gallery: [
      {
        src: "/images/consultorio/img_5839.webp",
        alt: "Muro insignia frontal con iluminación vascular",
        title: "Muro Insignia Frontal",
        caption: "Perspectiva frontal del muro de madera y esculturas de circulación en neón",
      },
      {
        src: "/images/consultorio/img_5834.webp",
        alt: "Perspectiva angular del consultorio con iluminación arquitectónica",
        title: "Perspectiva Angular del Consultorio",
        caption: "Vista amplia de la sala médica, paneles de madera y diplomas",
      },
      {
        src: "/images/consultorio/img_5835.webp",
        alt: "Encuadre arquitectónico vertical del despacho médico",
        title: "Encuadre Arquitectónico",
        caption: "Diseño médico contemporáneo con iluminación LED empotrada",
      },
      {
        src: "/images/consultorio/img_5832.webp",
        alt: "Monitor de consulta con logotipo de angiología",
        title: "Monitor y Logotipo Oficial",
        caption: "Pantalla de consulta con el emblema vascular y vista a la sala",
      },
    ],
    linkedVideoId: "video-recorrido-completo",
  },
  {
    id: "diagnostico-doppler",
    name: "Diagnóstico & Ultrasonido",
    subtitle: "Mapeo hemodinámico y exploración vascular in-situ",
    badge: "Área Clínica",
    description:
      "Área de exploración clínica con acabados en mármol, camilla ergonómica y monitor para ecografía vascular. Permite revisar el flujo venoso y arterial en tiempo real durante la consulta para diagnosticar várices, insuficiencia venosa, trombosis y afecciones arteriales.",
    mainImage: {
      src: "/images/consultorio/img_5840.webp",
      alt: "Área de exploración clínica con camilla médica, monitor de ultrasonido Doppler y muro de mármol",
      title: "Estación de Exploración y Camilla Clínica",
    },
    hotspots: [
      {
        id: "hotspot-camilla",
        x: 68,
        y: 64,
        title: "Camilla de Exploración Clínica",
        description: "Camilla cómoda y ergonómica para realizar exámenes de circulación en miembros inferiores.",
        category: "medical",
      },
      {
        id: "hotspot-pantalla",
        x: 74,
        y: 16,
        title: "Monitor para Ultrasonido Doppler",
        description: "Pantalla donde el doctor proyecta y explica al paciente los hallazgos del flujo circulatorio.",
        category: "tech",
      },
      {
        id: "hotspot-curaciones",
        x: 84,
        y: 82,
        title: "Insumos y Manejo de Úlceras",
        description: "Carrito clínico con material estéril para curaciones avanzadas de úlceras venosas y pie diabético.",
        category: "medical",
      },
      {
        id: "hotspot-escalon",
        x: 44,
        y: 68,
        title: "Accesibilidad para Pacientes",
        description: "Escalón auxiliar antiderrapante y banco giratorio para facilitar la subida de adultos mayores.",
        category: "facility",
      },
    ],
    features: [
      {
        icon: "Activity",
        title: "Mapeo Doppler In-Situ",
        text: "Evaluación ecográfica inmediata del flujo vascular sin requerir citas adicionales fuera.",
      },
      {
        icon: "Bed",
        title: "Camilla Ergonómica",
        text: "Posiciones adecuadas para pruebas hemodinámicas en reposo y de pie con máxima comodidad.",
      },
      {
        icon: "Sparkles",
        title: "Asepsia y Bioseguridad",
        text: "Acabados en mármol y protocolos de desinfección rigurosos para la seguridad del paciente.",
      },
    ],
    gallery: [
      {
        src: "/images/consultorio/img_5840.webp",
        alt: "Estación de camilla clínica y muro de mármol",
        title: "Estación de Camilla y Doppler",
        caption: "Área de exploración clínica y monitor de visualización",
      },
      {
        src: "/images/consultorio/img_5838.webp",
        alt: "Vista panorámica de todo el consultorio y camilla de valoración",
        title: "Panorámica de la Sala Clínica",
        caption: "Espacio amplio, climatizado y con distribución médica integral",
      },
      {
        src: "/images/consultorio/img_5850.webp",
        alt: "Mesa médica con modelo anatómico de pierna para angiología",
        title: "Mesa con Modelo Anatómico 3D",
        caption: "Modelo didáctico de circulación venosa y arterial para orientación del paciente",
      },
    ],
    linkedVideoId: "video-ultrasonido-diagnostico",
  },
  {
    id: "acceso-torre",
    name: "Acceso & Consultorio 403",
    subtitle: "Ubicación en Torre Médica Santa, Piso 4",
    badge: "Torre Médica Santa",
    description:
      "Ubicado en el 4° piso de Torre Médica Santa en Av. Vasco Núñez de Balboa #1003, Fracc. Hornos, Acapulco. La fachada exterior cuenta con esquema anatómico a escala real y rotulación de cédulas para la certeza y confianza de cada paciente.",
    mainImage: {
      src: "/images/consultorio/img_5822.webp",
      alt: "Ventanal exterior del consultorio con esquema anatómico circulatorio de cuerpo entero y cédula profesional",
      title: "Fachada Exterior con Esquema Vascular y Cédula Profesional",
    },
    hotspots: [
      {
        id: "hotspot-esquema",
        x: 62,
        y: 40,
        title: "Esquema Vascular de Cuerpo Entero",
        description: "Infografía circulatoria a escala en el ventanal exterior que ilustra el mapa arterial y venoso.",
        category: "art",
      },
      {
        id: "hotspot-cedula-ext",
        x: 60,
        y: 74,
        title: "Cédula de Especialidad: 12726412",
        description: "Acreditación oficial en Angiología, Cirugía Vascular y Endovascular visible al público.",
        category: "medical",
      },
      {
        id: "hotspot-urgencias",
        x: 14,
        y: 73,
        title: "Doble Especialidad Médica",
        description: "Angiólogo y Cirujano Vascular con especialidad en Urgencias Médico Quirúrgicas (Céd. 5259295).",
        category: "medical",
      },
    ],
    features: [
      {
        icon: "Building2",
        title: "Torre Médica Santa",
        text: "Edificio médico de prestigio en Acapulco con elevador, seguridad y estacionamiento.",
      },
      {
        icon: "DoorOpen",
        title: "Consultorio 403",
        text: "Cuarto piso, acceso directo y señalización clara en los pasillos de la torre.",
      },
      {
        icon: "PhoneCall",
        title: "Contacto Directo",
        text: "Línea telefónica y WhatsApp oficial al 744 177 9103 para agendar y orientarle.",
      },
    ],
    gallery: [
      {
        src: "/images/consultorio/img_5822.webp",
        alt: "Ventanal exterior con infografía anatómica",
        title: "Ventanal Anatómico Exterior",
        caption: "Ilustración vascular de cuerpo entero y cédula profesional en fachada",
      },
      {
        src: "/images/consultorio/img_5844.webp",
        alt: "Rótulo de especialidades y cédulas médicas",
        title: "Rótulo de Especialidades Médicas",
        caption: "Detalle de acreditaciones oficiales en Angiología y Urgencias",
      },
      {
        src: "/images/consultorio/img_5847.webp",
        alt: "Puerta oficial del Consultorio 403",
        title: "Puerta Oficial Consultorio 403",
        caption: "Acceso principal en el piso 4 con teléfono directo 744 177 9103",
      },
      {
        src: "/images/consultorio/img_5823.webp",
        alt: "Fachada de entrada al consultorio con corona",
        title: "Entrada del Consultorio",
        caption: "Detalle de bienvenida y señalización para pacientes",
      },
    ],
    linkedVideoId: "video-recepcion-consultorio",
  },
];

export const galleryVideos: GalleryVideo[] = [
  {
    id: "video-recorrido-completo",
    src: "/images/consultorio/video-recorrido-completo.mov",
    title: "Recorrido Panorámico del Consultorio",
    description: "Recorrido en video de 360° mostrando el muro con siluetas anatómicas iluminadas, escritorio del doctor, ambiente climatizado y distribución general.",
    poster: "/images/consultorio/img_5839.webp",
    type: "video/quicktime",
    duration: "26 seg",
    badge: "Recorrido 360°",
  },
  {
    id: "video-ultrasonido-diagnostico",
    src: "/images/consultorio/video-ultrasonido-diagnostico.mov",
    title: "Área de Ultrasonido y Camilla Diagnóstica",
    description: "Demostración de la estación de exploración clínica, camilla médica, monitor de ultrasonido Doppler y acabados en mármol.",
    poster: "/images/consultorio/img_5840.webp",
    type: "video/quicktime",
    duration: "19 seg",
    badge: "Equipamiento Doppler",
  },
  {
    id: "video-recepcion-consultorio",
    src: "/images/consultorio/video-recepcion-consultorio.mov",
    title: "Acceso y Puerta del Consultorio 403",
    description: "Recorrido desde el pasillo de Torre Médica Santa hacia la puerta de acceso oficial del Consultorio 403.",
    poster: "/images/consultorio/img_5847.webp",
    type: "video/quicktime",
    duration: "10 seg",
    badge: "Acceso Piso 4",
  },
  {
    id: "video-area-clinica",
    src: "/images/consultorio/video-area-clinica.mov",
    title: "Despacho Médico y Modelo Anatómico 3D",
    description: "Detalle del escritorio de consulta privada, modelo anatómico 3D de circulación en piernas y diplomas de especialidad.",
    poster: "/images/consultorio/img_5850.webp",
    type: "video/quicktime",
    duration: "10 seg",
    badge: "Despacho Médico",
  },
];

export const galleryImages: GalleryImage[] = [
  // Fotografías de alta resolución del Consultorio (Material reciente)
  {
    id: "consultorio-muro-insignia",
    src: "/images/consultorio/img_5839.webp",
    alt: "Muro con siluetas anatómicas iluminadas en azul y rojo en el consultorio del Dr. Gregorio",
    title: "Muro Escultórico de Circulación Vascular",
    category: "consultorio",
    categoryLabel: "Consultorio e Instalaciones",
    description: "Muro de madera acanalada con figuras retroiluminadas en rojo arterial y azul venoso, firma en neón y diplomas.",
  },
  {
    id: "consultorio-panoramica",
    src: "/images/consultorio/img_5838.webp",
    alt: "Vista panorámica de todo el consultorio y camilla de exploración",
    title: "Vista Panorámica Integral",
    category: "consultorio",
    categoryLabel: "Consultorio e Instalaciones",
    description: "Perspectiva completa del consultorio 403: despacho de valoración, camilla de examen y ambiente climatizado.",
  },
  {
    id: "consultorio-perspectiva",
    src: "/images/consultorio/img_5834.webp",
    alt: "Perspectiva angular del consultorio con iluminación y títulos",
    title: "Diseño Médico Contemporáneo",
    category: "consultorio",
    categoryLabel: "Consultorio e Instalaciones",
    description: "Arquitectura médica cuidada para ofrecer un ambiente sereno, cómodo y profesional a cada paciente.",
  },
  {
    id: "consultorio-estacion-doppler",
    src: "/images/consultorio/img_5840.webp",
    alt: "Área de exploración clínica con camilla y monitor para ultrasonido Doppler",
    title: "Estación de Ultrasonido y Camilla Clínica",
    category: "equipamiento",
    categoryLabel: "Equipamiento Diagnóstico",
    description: "Espacio equipado para mapeo hemodinámico Doppler vascular y exploración de várices in-situ.",
  },
  {
    id: "consultorio-despacho-modelo",
    src: "/images/consultorio/img_5850.webp",
    alt: "Escritorio de consulta con modelo anatómico de pierna para angiología",
    title: "Despacho de Orientación Médica",
    category: "consultorio",
    categoryLabel: "Consultorio e Instalaciones",
    description: "Modelo tridimensional de pierna para explicar al paciente la causa de várices y mala circulación.",
  },
  {
    id: "consultorio-monitor-logo",
    src: "/images/consultorio/img_5832.webp",
    alt: "Monitor de consulta con logotipo oficial de angiología y cirugía vascular",
    title: "Monitor Clínico con Emblema Vascular",
    category: "equipamiento",
    categoryLabel: "Equipamiento Diagnóstico",
    description: "Estación digital para revisión de historias clínicas y estudios vasculares.",
  },
  {
    id: "consultorio-fachada-esquema",
    src: "/images/consultorio/img_5822.webp",
    alt: "Ventanal exterior con esquema circulatorio y cédula profesional de especialidad",
    title: "Ventanal Exterior con Mapa Circulatorio",
    category: "consultorio",
    categoryLabel: "Consultorio e Instalaciones",
    description: "Fachada exterior en Torre Médica Santa con infografía anatómica y Cédula Especialidad 12726412.",
  },
  {
    id: "consultorio-fachada-cedulas",
    src: "/images/consultorio/img_5844.webp",
    alt: "Rótulo de especialidades médicas en fachada exterior",
    title: "Acreditaciones Oficiales en Fachada",
    category: "consultorio",
    categoryLabel: "Consultorio e Instalaciones",
    description: "Especialidades en Angiología y Cirugía Vascular (Céd. 12726412) y Urgencias (Céd. 5259295).",
  },
  {
    id: "consultorio-puerta-403",
    src: "/images/consultorio/img_5847.webp",
    alt: "Puerta de acceso al Consultorio 403 en Torre Médica Santa",
    title: "Acceso al Consultorio 403",
    category: "consultorio",
    categoryLabel: "Consultorio e Instalaciones",
    description: "Piso 4 de Torre Médica Santa, con número directo para citas 744 177 9103.",
  },
  // Fotos de atención médica y Dr. Gregorio
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
