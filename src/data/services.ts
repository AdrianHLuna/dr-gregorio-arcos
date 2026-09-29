import type { MedicalService } from "@/types/schema";

// Catálogo real de servicios y procedimientos del Dr. Gregorio Alberto
// González Arcos, Angiólogo (Angiología, Cirugía Vascular y Endovascular) en
// Acapulco de Juárez, Guerrero. El doctor no proporcionó precios por
// procedimiento en el intake — se omite `priceRange` en todos los servicios
// en lugar de inventar cifras (AGENTS.md §9).
export const services: MedicalService[] = [
  {
    id: "s-escleroterapia",
    slug: "escleroterapia",
    name: "Escleroterapia",
    description:
      "Procedimiento ambulatorio para cerrar várices pequeñas y moderadas mediante la inyección de una solución directamente en la vena afectada.",
    longDescription:
      "La escleroterapia es un procedimiento ambulatorio en el que se inyecta una solución directamente dentro de la vena afectada, provocando que sus paredes se cierren y que, con el tiempo, el cuerpo la reabsorba de forma natural. Se usa principalmente en várices pequeñas y moderadas, arañitas vasculares y venas residuales tras otros tratamientos, y no requiere hospitalización.",
    type: "consultorio",
    anesthesiaType: "No requiere anestesia general; sensación mínima de piquete en cada aplicación",
    duration: "30 a 45 minutos por sesión",
    recoveryTime: "Reincorporación a actividades cotidianas el mismo día",
    isPainful: false,
    benefits: [
      "Procedimiento ambulatorio sin hospitalización",
      "Mejora la apariencia y los síntomas de las venas tratadas",
      "Recuperación rápida, con reincorporación a actividades cotidianas el mismo día",
      "Puede repetirse en distintas sesiones según la extensión de las venas a tratar",
    ],
    postOpRecommendations: [
      "Uso de medias de compresión graduada durante el periodo indicado por el angiólogo",
      "Caminar diariamente para favorecer la circulación",
      "Evitar exposición solar directa sobre la zona tratada durante las primeras semanas",
      "Evitar baños muy calientes o saunas los primeros días",
    ],
    technicalSpecs: {
      Tipo: "Consultorio",
      Duración: "30 a 45 minutos por sesión",
      Anestesia: "No requiere anestesia general",
      Doloroso: "Molestia leve tipo piquete",
    },
    faqs: [
      {
        question: "¿La escleroterapia es dolorosa?",
        answer:
          "La mayoría de los pacientes refiere solo una molestia leve, similar a un piquete, en el momento de la inyección. No requiere anestesia general y es un procedimiento que se realiza en consultorio.",
      },
      {
        question: "¿Cuántas sesiones de escleroterapia se necesitan?",
        answer:
          "El número de sesiones depende de la cantidad y el tamaño de las venas a tratar; algunas personas requieren una sola sesión y otras varias, espaciadas semanas entre sí, según lo determine el angiólogo tras la valoración.",
      },
      {
        question: "¿Puedo hacer vida normal después de la escleroterapia?",
        answer:
          "Sí, la mayoría de las personas retoma sus actividades cotidianas el mismo día, aunque se recomienda usar medias de compresión y evitar la exposición solar directa sobre la zona tratada durante el periodo indicado por el angiólogo.",
      },
    ],
    relatedConditions: ["d-insuficiencia-venosa", "d-varices", "d-tromboflebitis-superficial"],
    lastReviewed: "2026-09-24",
    image: "/servicios/escleroterapia.jpg",
    seo: {
      title: "Escleroterapia para Várices | Angiólogo en Acapulco",
      description:
        "Elimina várices y arañitas vasculares con escleroterapia. Procedimiento ambulatorio con el Dr. González Arcos, Angiólogo en Acapulco.",
      keywords: ["escleroterapia en Acapulco", "tratamiento de várices sin cirugía", "angiólogo escleroterapia Guerrero"],
    },
  },
  {
    id: "s-safenectomia",
    slug: "safenectomia",
    name: "Safenectomía (Cirugía de Várices)",
    description:
      "Cirugía indicada para retirar la vena safena o tramos varicosos extensos que no responden a tratamientos menos invasivos.",
    longDescription:
      "La safenectomía es una cirugía en la que se retira la vena safena afectada o los tramos varicosos más extensos, cuando la insuficiencia venosa ha dañado la vena de forma importante y otros tratamientos, como la escleroterapia o la ablación endovenosa, no son suficientes. Se realiza bajo anestesia regional o general según cada caso.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional (raquídea o epidural) o general, según valoración",
    duration: "45 a 90 minutos, según la extensión a tratar",
    recoveryTime: "1 a 2 semanas para actividades cotidianas, evitando esfuerzo físico intenso por más tiempo",
    isPainful: true,
    benefits: [
      "Retiro completo de la vena safena afectada o de sus tramos varicosos",
      "Reduce el riesgo de complicaciones como tromboflebitis o sangrado de várices",
      "Resultado duradero en la vena tratada",
      "Adecuada para várices extensas que no responden a tratamientos menos invasivos",
    ],
    postOpRecommendations: [
      "Reposo relativo los primeros días con caminata progresiva supervisada",
      "Uso de medias de compresión graduada durante el periodo indicado",
      "Evitar esfuerzo físico intenso y levantar peso durante las primeras semanas",
      "Acudir a las revisiones postoperatorias programadas",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Duración: "45 a 90 minutos",
      Anestesia: "Regional o general según valoración",
      Doloroso: "Molestia postoperatoria manejable",
    },
    faqs: [
      {
        question: "¿Cuándo se recomienda una safenectomía en lugar de escleroterapia?",
        answer:
          "La safenectomía se recomienda cuando la vena safena principal está muy dilatada o existen várices extensas que no responden bien a procedimientos menos invasivos como la escleroterapia o la ablación endovenosa. El angiólogo define la opción adecuada con una valoración por Doppler vascular.",
      },
      {
        question: "¿Cuánto tiempo de recuperación requiere una safenectomía?",
        answer:
          "La mayoría de las personas retoma actividades cotidianas ligeras en una o dos semanas, aunque se recomienda evitar esfuerzo físico intenso durante más tiempo, según lo indique el angiólogo en las revisiones postoperatorias.",
      },
      {
        question: "¿Quitar la vena safena afecta la circulación de la pierna?",
        answer:
          "No. Cuando la vena safena está enferma ya no cumple su función de forma adecuada y la sangre circula por otras venas sanas de la pierna, por lo que retirarla no compromete la circulación general de la extremidad.",
      },
    ],
    relatedConditions: ["d-varices"],
    lastReviewed: "2026-09-24",
    image: "/servicios/safenectomia.jpg",
    seo: {
      title: "Safenectomía: Cirugía de Várices | Angiólogo Acapulco",
      description:
        "Cirugía de várices extensas con safenectomía, realizada por el Dr. González Arcos, Angiólogo y Cirujano Vascular en Acapulco.",
      keywords: ["safenectomía en Acapulco", "cirugía de várices Acapulco", "angiólogo cirugía vascular Guerrero"],
    },
  },
  {
    id: "s-angioplastia-periferica",
    slug: "angioplastia-periferica",
    name: "Angioplastia Periférica",
    description:
      "Procedimiento mínimamente invasivo que abre arterias de las piernas estrechadas u obstruidas mediante un catéter con globo.",
    longDescription:
      "La angioplastia periférica es un procedimiento mínimamente invasivo en el que se introduce un catéter con un globo hasta el segmento de la arteria estrechado u obstruido, para inflarlo y restablecer el paso de la sangre; en algunos casos se coloca además un dispositivo llamado stent para mantener la arteria abierta. Se indica en personas con enfermedad arterial periférica sintomática.",
    type: "hospitalario",
    anesthesiaType: "Anestesia local con sedación, según el caso",
    duration: "1 a 2 horas, según la extensión de la obstrucción",
    recoveryTime: "De unos días a un par de semanas, según el caso",
    isPainful: false,
    benefits: [
      "Restablece el flujo de sangre en arterias estrechadas u obstruidas",
      "Procedimiento mínimamente invasivo, sin cirugía abierta",
      "Mejora sensiblemente el dolor al caminar y otros síntomas de mala circulación arterial",
      "Recuperación más rápida que una cirugía abierta de derivación",
    ],
    postOpRecommendations: [
      "Reposo relativo el día del procedimiento",
      "Vigilancia del sitio de punción para descartar sangrado o hematoma",
      "Continuar el control estricto de factores de riesgo cardiovascular",
      "Acudir a las revisiones de seguimiento con Doppler vascular",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Duración: "1 a 2 horas",
      Anestesia: "Local con sedación",
      Doloroso: "Molestia leve en el sitio de punción",
    },
    faqs: [
      {
        question: "¿En qué consiste la angioplastia periférica?",
        answer:
          "Consiste en introducir un catéter con un globo hasta el segmento de la arteria estrechado u obstruido, e inflarlo para abrir el paso de la sangre; en algunos casos se coloca además un dispositivo llamado stent para mantener la arteria abierta.",
      },
      {
        question: "¿La angioplastia periférica requiere cirugía abierta?",
        answer:
          "No. Es un procedimiento mínimamente invasivo que se realiza a través de una punción, generalmente en la ingle o el brazo, sin necesidad de abrir la pierna, lo que permite una recuperación más rápida que una cirugía de derivación.",
      },
      {
        question: "¿Después de la angioplastia el problema puede regresar?",
        answer:
          "Es posible que la arteria vuelva a estrecharse con el tiempo, sobre todo si no se controlan los factores de riesgo como el tabaquismo, la diabetes o el colesterol elevado, por lo que el seguimiento vascular periódico es importante.",
      },
    ],
    relatedConditions: ["d-enfermedad-arterial-periferica"],
    lastReviewed: "2026-09-24",
    image: "/servicios/angioplastia-periferica.jpg",
    seo: {
      title: "Angioplastia Periférica | Angiólogo en Acapulco",
      description:
        "Procedimiento mínimamente invasivo para abrir arterias obstruidas de la pierna, con el Dr. González Arcos, Angiólogo en Acapulco.",
      keywords: [
        "angioplastia periférica Acapulco",
        "tratamiento arterias obstruidas piernas",
        "angiólogo intervencionista Acapulco",
      ],
    },
  },
  {
    id: "s-bypass-vascular",
    slug: "bypass-vascular",
    name: "Bypass Vascular (Derivación Arterial)",
    description:
      "Cirugía que crea una derivación con injerto para restaurar el flujo de sangre más allá de una obstrucción arterial extensa.",
    longDescription:
      "El bypass vascular es una cirugía en la que se crea una derivación, mediante un injerto, para que la sangre rodee un segmento de arteria obstruido y llegue de nuevo a la parte de la extremidad que estaba recibiendo poco flujo. Se indica cuando la obstrucción arterial es demasiado extensa o compleja para tratarse solo con angioplastia.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general, según el segmento a tratar",
    duration: "2 a 4 horas, según la complejidad",
    recoveryTime: "Varias semanas, con reincorporación gradual a las actividades",
    isPainful: true,
    benefits: [
      "Restaura el flujo de sangre más allá de una obstrucción arterial extensa",
      "Alternativa eficaz cuando la angioplastia no es suficiente",
      "Puede evitar la progresión hacia una amputación en casos avanzados",
      "Mejora la cicatrización de heridas al restaurar el aporte de sangre",
    ],
    postOpRecommendations: [
      "Vigilancia estrecha de la herida quirúrgica",
      "Reincorporación gradual a la actividad física según indicación médica",
      "Control estricto de factores de riesgo cardiovascular",
      "Seguimiento periódico con Doppler vascular del injerto",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Duración: "2 a 4 horas",
      Anestesia: "Regional o general",
      Doloroso: "Dolor postoperatorio manejable",
    },
    faqs: [
      {
        question: "¿Qué es un bypass vascular?",
        answer:
          "Es una cirugía en la que se crea una derivación, con un injerto, para que la sangre rodee un segmento de arteria obstruido y llegue de nuevo a la parte de la pierna que estaba recibiendo poco flujo.",
      },
      {
        question: "¿Cuándo se elige un bypass en lugar de una angioplastia?",
        answer:
          "El bypass vascular se recomienda cuando la obstrucción arterial es muy extensa o compleja para tratarse solo con un catéter, o cuando la angioplastia no logró restablecer un flujo adecuado. El angiólogo decide la mejor opción según los estudios de imagen.",
      },
      {
        question: "¿Qué tan larga es la recuperación de un bypass vascular?",
        answer:
          "La recuperación completa puede tomar varias semanas, con reincorporación gradual a las actividades cotidianas según la evolución de la herida quirúrgica y la indicación del equipo médico.",
      },
    ],
    relatedConditions: ["d-enfermedad-arterial-periferica", "d-isquemia-arterial-aguda"],
    lastReviewed: "2026-09-24",
    image: "/servicios/bypass-vascular.jpg",
    seo: {
      title: "Bypass Vascular (Derivación Arterial) | Acapulco",
      description:
        "Cirugía de derivación arterial para restaurar la circulación de la pierna. Dr. González Arcos, Cirujano Vascular en Acapulco.",
      keywords: ["bypass vascular Acapulco", "derivación arterial piernas", "cirujano vascular Acapulco Guerrero"],
    },
  },
  {
    id: "s-evar",
    slug: "tratamiento-endovascular-de-aneurisma-evar",
    name: "Tratamiento Endovascular de Aneurisma (EVAR)",
    description:
      "Procedimiento mínimamente invasivo que coloca una endoprótesis dentro de la aorta para excluir un aneurisma sin abrir el abdomen.",
    longDescription:
      "El tratamiento endovascular de aneurisma, conocido como EVAR, consiste en colocar, a través de una punción arterial, una prótesis o endoprótesis dentro de la aorta para excluir el aneurisma de la circulación y evitar que siga creciendo o se rompa, sin necesidad de abrir el abdomen. La anatomía del aneurisma, valorada con estudios de imagen, determina si es la opción adecuada.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general, según el caso",
    duration: "1 a 3 horas, según la complejidad del aneurisma",
    recoveryTime: "De días a un par de semanas, más corta que la cirugía abierta",
    isPainful: true,
    benefits: [
      "Trata el aneurisma sin necesidad de abrir el abdomen",
      "Recuperación más rápida que la cirugía abierta tradicional",
      "Reduce el riesgo de ruptura del aneurisma tratado",
      "Adecuado para pacientes con anatomía favorable tras estudios de imagen",
    ],
    postOpRecommendations: [
      "Vigilancia del sitio de punción",
      "Estudios de imagen de seguimiento periódicos para verificar el sellado del aneurisma",
      "Control estricto de la presión arterial",
      "Reincorporación gradual a la actividad física",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Duración: "1 a 3 horas",
      Anestesia: "Regional o general",
      Doloroso: "Molestia postoperatoria leve",
    },
    faqs: [
      {
        question: "¿En qué consiste el tratamiento endovascular de aneurisma (EVAR)?",
        answer:
          "Consiste en colocar, a través de una punción arterial, una prótesis o endoprótesis dentro de la aorta para excluir el aneurisma de la circulación y evitar que siga creciendo o se rompa, sin necesidad de abrir el abdomen.",
      },
      {
        question: "¿El EVAR sustituye siempre a la cirugía abierta?",
        answer:
          "No en todos los casos. La anatomía del aneurisma, determinada con estudios de imagen, define si el paciente es candidato a EVAR o si requiere manejo con cirugía abierta tradicional. El angiólogo explica cuál es la opción más adecuada tras la valoración.",
      },
      {
        question: "¿Después del EVAR es necesario un seguimiento especial?",
        answer:
          "Sí. Se requieren estudios de imagen periódicos para verificar que la endoprótesis siga sellando correctamente el aneurisma y detectar a tiempo cualquier cambio que requiera atención.",
      },
    ],
    relatedConditions: ["d-aneurisma-aorta-abdominal"],
    lastReviewed: "2026-09-24",
    image: "/servicios/evar.jpg",
    seo: {
      title: "Tratamiento Endovascular de Aneurisma EVAR Acapulco",
      description:
        "EVAR: tratamiento mínimamente invasivo del aneurisma de aorta abdominal con el Dr. González Arcos en Acapulco, Guerrero.",
      keywords: ["EVAR Acapulco", "tratamiento endovascular aneurisma aorta", "angiólogo aneurisma Acapulco"],
    },
  },
  {
    id: "s-trombectomia",
    slug: "trombectomia",
    name: "Trombectomía",
    description:
      "Procedimiento que retira de forma directa un coágulo que obstruye una vena o arteria, indicado en casos de urgencia vascular.",
    longDescription:
      "La trombectomía es un procedimiento en el que se retira de forma directa el coágulo que obstruye una vena o una arteria. Se indica principalmente en la isquemia arterial aguda, donde un coágulo obstruye de forma súbita una arteria de la extremidad, y en casos seleccionados de trombosis venosa muy extensa, siempre bajo valoración urgente del angiólogo.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional, general o local con sedación, según el caso y la urgencia",
    duration: "Variable según la urgencia y la extensión del coágulo",
    recoveryTime: "Depende de la causa de fondo y la extensión del daño previo a la extremidad",
    isPainful: true,
    benefits: [
      "Retira el coágulo que obstruye la vena o arteria de forma directa",
      "Puede evitar complicaciones graves como la embolia pulmonar o la pérdida de la extremidad",
      "Restablece el flujo de sangre de forma más inmediata en casos seleccionados",
    ],
    postOpRecommendations: [
      "Seguimiento estrecho de la causa de fondo que originó el coágulo",
      "Uso de medias de compresión si el origen fue venoso",
      "Control de factores de riesgo cardiovascular si el origen fue arterial",
      "Revisiones periódicas con Doppler vascular",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Duración: "Variable según el caso",
      Anestesia: "Según el caso y la urgencia",
      Doloroso: "Depende de la extensión del procedimiento",
    },
    faqs: [
      {
        question: "¿Cuándo se necesita una trombectomía de urgencia?",
        answer:
          "Se necesita cuando un coágulo obstruye de forma súbita una arteria, como en la isquemia arterial aguda, poniendo en riesgo la extremidad, o en casos seleccionados de trombosis venosa muy extensa. En ambos casos, el tiempo de atención es determinante.",
      },
      {
        question: "¿La trombectomía es lo mismo que la anticoagulación?",
        answer:
          "No. La anticoagulación ayuda a evitar que un coágulo crezca o se formen nuevos, mientras que la trombectomía retira físicamente el coágulo que ya está obstruyendo el vaso. En algunos casos se usan ambos manejos de forma complementaria.",
      },
    ],
    relatedConditions: ["d-trombosis-venosa-profunda", "d-isquemia-arterial-aguda"],
    lastReviewed: "2026-09-24",
    image: "/servicios/trombectomia.jpg",
    seo: {
      title: "Trombectomía: Urgencia Vascular | Angiólogo Acapulco",
      description:
        "Retiro urgente de coágulos que obstruyen venas o arterias. Trombectomía con el Dr. González Arcos en Acapulco, Guerrero.",
      keywords: ["trombectomía Acapulco", "urgencia vascular coágulo", "angiólogo urgencias Acapulco"],
    },
  },
  {
    id: "s-curacion-heridas",
    slug: "curacion-avanzada-de-heridas-y-pie-diabetico",
    name: "Curación Avanzada de Heridas y Pie Diabético",
    description:
      "Manejo especializado de heridas de origen vascular y de pie diabético, con valoración de la circulación de la extremidad.",
    longDescription:
      "La curación avanzada de heridas incluye limpieza y desbridamiento del tejido no viable cuando es necesario, control de la infección local y aplicación de apósitos especializados según el tipo de herida, además de valorar si existe un problema de circulación de fondo, venoso o arterial, que esté retrasando la cicatrización. Es central en el manejo del pie diabético y de las úlceras vasculares.",
    type: "consultorio",
    anesthesiaType: "No suele requerir anestesia; anestesia local en desbridamientos más extensos",
    duration: "20 a 40 minutos por sesión de curación",
    recoveryTime: "Variable según el tamaño y origen de la herida, de semanas a meses",
    isPainful: false,
    benefits: [
      "Favorece la cicatrización de heridas de origen vascular y del pie diabético",
      "Reduce el riesgo de infección y de complicaciones mayores",
      "Incluye valoración de la circulación de la extremidad, no solo de la herida",
      "Seguimiento continuo hasta el cierre de la herida",
    ],
    postOpRecommendations: [
      "Mantener la herida limpia y protegida entre curaciones",
      "Acudir a las curaciones programadas sin espaciarlas más de lo indicado",
      "Usar el calzado o dispositivo de descarga recomendado",
      "Control estricto de la glucosa en personas con diabetes",
    ],
    technicalSpecs: {
      Tipo: "Consultorio",
      Duración: "20 a 40 minutos por sesión",
      Doloroso: "No, salvo en desbridamientos extensos",
    },
    faqs: [
      {
        question: "¿En qué consiste la curación avanzada de heridas?",
        answer:
          "Incluye limpieza y desbridamiento del tejido no viable cuando es necesario, control de la infección local y aplicación de apósitos especializados según el tipo de herida, además de valorar si existe un problema de circulación de fondo que esté retrasando la cicatrización.",
      },
      {
        question: "¿Cada cuánto se debe acudir a curación de una herida de pie diabético?",
        answer:
          "La frecuencia depende del tipo y tamaño de la herida; el angiólogo establece un calendario de curaciones que suele ser más frecuente al inicio y se espacia conforme la herida mejora.",
      },
      {
        question: "¿Esta curación reemplaza el control de la diabetes con otros médicos?",
        answer:
          "No. La curación avanzada de heridas se enfoca en el manejo local de la herida y en la valoración de la circulación de la extremidad, pero el control de la glucosa debe continuarse con el médico que atiende la diabetes de forma integral.",
      },
    ],
    relatedConditions: ["d-pie-diabetico", "d-linfedema", "d-ulceras-vasculares"],
    lastReviewed: "2026-09-24",
    image: "/servicios/curacion-avanzada-heridas.jpg",
    seo: {
      title: "Curación de Heridas y Pie Diabético | Acapulco",
      description:
        "Curación avanzada de heridas vasculares y de pie diabético con el Dr. González Arcos, Angiólogo en Acapulco de Juárez.",
      keywords: [
        "curación de heridas Acapulco",
        "pie diabético tratamiento Acapulco",
        "angiólogo heridas vasculares Guerrero",
      ],
    },
  },
  {
    id: "s-doppler-vascular",
    slug: "doppler-vascular",
    name: "Doppler Vascular (Ultrasonido Doppler)",
    description:
      "Estudio de ultrasonido no invasivo que muestra en tiempo real el flujo de sangre en venas y arterias para confirmar el diagnóstico.",
    longDescription:
      "El Doppler vascular es un estudio de ultrasonido que permite ver, en tiempo real, cómo circula la sangre por las venas y arterias, lo que ayuda a detectar obstrucciones, coágulos o válvulas venosas que no funcionan correctamente. Es un estudio central tanto para el diagnóstico inicial de la mayoría de las condiciones vasculares como para el seguimiento tras un procedimiento.",
    type: "consultorio",
    anesthesiaType: "No requiere anestesia",
    duration: "20 a 40 minutos, según el territorio vascular a estudiar",
    recoveryTime: "No aplica; estudio no invasivo",
    isPainful: false,
    benefits: [
      "Estudio no invasivo y sin radiación",
      "Permite ver el flujo de sangre en venas y arterias en tiempo real",
      "Ayuda a confirmar el diagnóstico antes de decidir un tratamiento",
      "Útil tanto para el diagnóstico inicial como para el seguimiento tras un procedimiento",
    ],
    postOpRecommendations: [],
    technicalSpecs: {
      Tipo: "Consultorio",
      Duración: "20 a 40 minutos",
      Doloroso: "No, estudio no invasivo",
    },
    faqs: [
      {
        question: "¿Para qué sirve el Doppler vascular?",
        answer:
          "El Doppler vascular es un estudio de ultrasonido que permite ver, en tiempo real, cómo circula la sangre por las venas y arterias, lo que ayuda a detectar obstrucciones, coágulos o válvulas venosas que no funcionan correctamente.",
      },
      {
        question: "¿El Doppler vascular duele o requiere preparación especial?",
        answer:
          "No. Es un estudio no invasivo, similar a un ultrasonido convencional, que no requiere anestesia ni preparación especial en la mayoría de los casos, aunque el angiólogo puede indicar alguna recomendación específica según el motivo del estudio.",
      },
    ],
    relatedConditions: [
      "d-insuficiencia-venosa",
      "d-trombosis-venosa-profunda",
      "d-enfermedad-arterial-periferica",
      "d-tromboflebitis-superficial",
    ],
    lastReviewed: "2026-09-24",
    image: "/servicios/doppler-vascular.jpg",
    seo: {
      title: "Doppler Vascular (Ultrasonido) | Angiólogo Acapulco",
      description:
        "Estudio de Doppler vascular para diagnosticar problemas de venas y arterias, con el Dr. González Arcos en Acapulco, Guerrero.",
      keywords: ["doppler vascular Acapulco", "ultrasonido de venas y arterias", "angiólogo estudios vasculares Acapulco"],
    },
  },
  {
    id: "s-ablacion-endovenosa",
    slug: "ablacion-endovenosa-laser-o-radiofrecuencia",
    name: "Ablación Endovenosa con Láser o Radiofrecuencia",
    description:
      "Procedimiento ambulatorio que cierra la vena safena enferma desde dentro usando energía térmica, sin necesidad de retirarla quirúrgicamente.",
    longDescription:
      "La ablación endovenosa utiliza energía térmica, ya sea láser o radiofrecuencia, aplicada desde dentro de la vena safena enferma para cerrarla de forma controlada, sin necesidad de retirarla quirúrgicamente como en la safenectomía. Se realiza a través de una punción mínima bajo anestesia local, con buenos resultados funcionales y estéticos en la mayoría de los casos.",
    type: "ambulatorio",
    anesthesiaType: "Anestesia local a lo largo del trayecto de la vena",
    duration: "45 a 60 minutos",
    recoveryTime: "Reincorporación a actividades cotidianas en 1 a 2 días",
    isPainful: false,
    benefits: [
      "Cierra la vena enferma sin necesidad de retirarla quirúrgicamente",
      "Procedimiento ambulatorio con incisiones mínimas o nulas",
      "Recuperación más rápida que la safenectomía tradicional",
      "Buenos resultados estéticos y funcionales en la mayoría de los casos",
    ],
    postOpRecommendations: [
      "Uso de medias de compresión graduada durante el periodo indicado",
      "Caminar de forma regular desde el mismo día del procedimiento",
      "Evitar esfuerzo físico intenso durante la primera semana",
      "Acudir a la revisión de seguimiento con Doppler vascular",
    ],
    technicalSpecs: {
      Tipo: "Ambulatorio",
      Duración: "45 a 60 minutos",
      Anestesia: "Local",
      Doloroso: "Molestia leve durante la aplicación de anestesia",
    },
    faqs: [
      {
        question: "¿Qué diferencia hay entre ablación con láser y con radiofrecuencia?",
        answer:
          "Ambas técnicas cierran la vena enferma desde dentro usando energía térmica; la diferencia está en el tipo de energía que utilizan. El angiólogo determina cuál es la más adecuada según las características de la vena a tratar.",
      },
      {
        question: "¿La ablación endovenosa deja cicatriz?",
        answer:
          "Al realizarse a través de una punción mínima, generalmente no deja una cicatriz quirúrgica visible como la safenectomía tradicional, lo que la hace una opción atractiva para várices de la vena safena principal.",
      },
      {
        question: "¿Cuándo se recomienda ablación endovenosa en lugar de safenectomía?",
        answer:
          "Se recomienda cuando la anatomía de la vena safena es favorable para esta técnica; el angiólogo decide la mejor opción tras valorar el trayecto y el calibre de la vena con Doppler vascular.",
      },
    ],
    relatedConditions: ["d-insuficiencia-venosa", "d-varices"],
    lastReviewed: "2026-09-24",
    image: "/servicios/ablacion-endovenosa.jpg",
    seo: {
      title: "Ablación Endovenosa Láser o Radiofrecuencia Acapulco",
      description:
        "Cierre de venas varicosas con ablación endovenosa por láser o radiofrecuencia. Dr. González Arcos, Angiólogo en Acapulco.",
      keywords: ["ablación endovenosa Acapulco", "tratamiento láser várices Acapulco", "radiofrecuencia venas Guerrero"],
    },
  },
  {
    id: "s-amputacion-menor",
    slug: "amputacion-menor-por-complicacion-vascular",
    name: "Amputación Menor por Complicación Vascular",
    description:
      "Procedimiento quirúrgico que retira tejido no viable del pie o los dedos para detener una complicación vascular grave y proteger el resto de la extremidad.",
    longDescription:
      "La amputación menor se considera cuando una parte del pie o los dedos ya no tiene tejido viable por una infección grave o por falta de circulación que no respondió a otros tratamientos, casi siempre en el contexto de un pie diabético avanzado. El objetivo es detener la progresión de la complicación y proteger, en la medida de lo posible, el resto de la extremidad.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional, local o general según la extensión",
    duration: "30 a 90 minutos, según la extensión",
    recoveryTime: "Varias semanas, con curaciones y rehabilitación posteriores",
    isPainful: true,
    benefits: [
      "Elimina el tejido que ya no es viable, deteniendo la progresión de la infección",
      "Puede preservar la mayor parte posible de la extremidad frente a una amputación mayor",
      "Permite iniciar el proceso de cicatrización y rehabilitación de forma más segura",
    ],
    postOpRecommendations: [
      "Curaciones periódicas de la zona operada",
      "Valoración y mejora de la circulación arterial de la extremidad cuando es necesario",
      "Uso del calzado o dispositivo de descarga indicado",
      "Rehabilitación y educación en cuidado del pie para prevenir nuevas lesiones",
    ],
    technicalSpecs: {
      Tipo: "Hospitalario",
      Duración: "30 a 90 minutos",
      Anestesia: "Según la extensión",
      Doloroso: "Dolor postoperatorio manejable",
    },
    faqs: [
      {
        question: "¿Cuándo es necesaria una amputación menor?",
        answer:
          "Se considera cuando una parte del pie o los dedos ya no tiene tejido viable por una infección grave o falta de circulación que no respondió a otros tratamientos, con el objetivo de detener la progresión y proteger el resto de la extremidad.",
      },
      {
        question: "¿Una amputación menor significa que se perderá toda la pierna?",
        answer:
          "No. La amputación menor se limita a los dedos o una parte pequeña del pie, y busca precisamente evitar que la complicación avance hasta requerir una amputación mayor, siempre que la circulación del resto de la extremidad lo permita.",
      },
      {
        question: "¿Qué sigue después de una amputación menor?",
        answer:
          "Después del procedimiento se requieren curaciones periódicas, valorar y mejorar la circulación arterial si es necesario, y un proceso de rehabilitación que incluye educación en el cuidado del pie para prevenir nuevas lesiones.",
      },
    ],
    relatedConditions: ["d-pie-diabetico"],
    lastReviewed: "2026-09-24",
    image: "/servicios/amputacion-menor.jpg",
    seo: {
      title: "Amputación Menor por Complicación Vascular Acapulco",
      description:
        "Manejo quirúrgico de complicaciones vasculares graves del pie con el Dr. González Arcos, Cirujano Vascular en Acapulco.",
      keywords: [
        "amputación menor Acapulco",
        "complicación vascular pie diabético",
        "cirujano vascular Acapulco Guerrero",
      ],
    },
  },
];
