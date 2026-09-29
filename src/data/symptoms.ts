import type { Symptom } from "@/types/schema";

// Catálogo real de síntomas atendidos por el Dr. Gregorio Alberto González
// Arcos, Angiólogo (Angiología, Cirugía Vascular y Endovascular) en Acapulco
// de Juárez, Guerrero. Todos los síntomas incluyen `alarmSigns` no vacío que
// dirige a urgencias, nunca a WhatsApp (AGENTS.md §3/§5).
export const symptoms: Symptom[] = [
  {
    id: "sy-piernas-hinchadas",
    slug: "piernas-hinchadas-edema-en-piernas",
    name: "Piernas Hinchadas (Edema en Piernas)",
    colloquialNames: ["pies hinchados", "tobillos hinchados", "edema en piernas"],
    description:
      "La hinchazón de las piernas, o edema, es la acumulación de líquido en los tejidos de las piernas y los tobillos, que suele notarse al final del día o al presionar la piel con el dedo y ver que queda una marca temporal. Cuando aparece de forma repetida en ambas piernas suele relacionarse con problemas de circulación venosa o linfática; cuando aparece de forma repentina en una sola pierna requiere valorarse con mayor urgencia.",
    causes: [
      "Insuficiencia venosa crónica",
      "Linfedema",
      "Permanecer de pie o sentado por periodos prolongados",
      "Embarazo",
      "Trombosis venosa profunda cuando la hinchazón es repentina y de una sola pierna",
    ],
    alarmSigns: [
      "Hinchazón repentina de una sola pierna, con dolor o calor local",
      "Hinchazón acompañada de dificultad para respirar o dolor en el pecho",
      "Hinchazón con fiebre y enrojecimiento intenso de la piel",
      "Hinchazón que aparece de golpe junto con palidez o frialdad de la pierna",
    ],
    whyConsult:
      "La hinchazón de piernas que se repite día tras día suele deberse a insuficiencia venosa o linfedema, condiciones que se controlan mejor cuanto antes se detectan; una valoración angiológica identifica la causa exacta y evita que progrese a complicaciones como úlceras vasculares.",
    faqs: [
      {
        question: "¿La hinchazón de piernas siempre es por el corazón o los riñones?",
        answer:
          "No siempre. Aunque algunas enfermedades del corazón, los riñones o el hígado pueden causar hinchazón en las piernas, una causa muy frecuente es un problema de circulación venosa o linfática local, que un angiólogo puede identificar con la exploración y, si es necesario, un estudio de Doppler vascular.",
      },
      {
        question: "¿Por qué mis piernas se hinchan más al final del día?",
        answer:
          "Es común en la insuficiencia venosa crónica: al estar de pie o sentado durante horas, la sangre tiene más dificultad para regresar al corazón y se acumula en las piernas, lo que provoca que la hinchazón sea más notoria por la tarde y mejore parcialmente con el descanso nocturno.",
      },
    ],
    relatedConditions: ["d-insuficiencia-venosa", "d-linfedema"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/piernas-hinchadas.jpg",
    seo: {
      title: "Piernas Hinchadas (Edema) | Angiólogo en Acapulco",
      description:
        "¿Piernas o tobillos hinchados? El Dr. González Arcos, Angiólogo en Acapulco, identifica la causa circulatoria del edema en piernas.",
      keywords: ["piernas hinchadas Acapulco", "edema en piernas causas", "angiólogo hinchazón de piernas Acapulco"],
    },
  },
  {
    id: "sy-dolor-pesadez-piernas",
    slug: "dolor-o-pesadez-en-las-piernas",
    name: "Dolor o Pesadez en las Piernas",
    colloquialNames: ["piernas cansadas", "piernas pesadas"],
    description:
      "El dolor o la pesadez en las piernas es la sensación de cansancio, tensión o molestia difusa en las piernas, generalmente al final del día o tras permanecer de pie mucho tiempo. Es uno de los síntomas más frecuentes de la insuficiencia venosa crónica y de las várices, y suele mejorar al elevar las piernas o caminar.",
    causes: [
      "Insuficiencia venosa crónica",
      "Várices",
      "Tromboflebitis superficial",
      "Permanecer de pie o sentado por periodos prolongados",
    ],
    alarmSigns: [
      "Dolor intenso y de aparición súbita en una sola pierna",
      "Dolor acompañado de hinchazón repentina y calor local",
      "Dolor en la pantorrilla junto con dificultad para respirar",
    ],
    whyConsult:
      "Cuando la pesadez o el dolor en las piernas se repiten casi a diario, suelen ser la señal más temprana de insuficiencia venosa crónica; identificarla a tiempo con una valoración angiológica permite iniciar medidas sencillas antes de que aparezcan várices más visibles o cambios en la piel.",
    faqs: [
      {
        question: "¿La pesadez en las piernas es normal después de estar de pie todo el día?",
        answer:
          "Un poco de cansancio ocasional puede ser normal, pero si la pesadez se repite casi todos los días, mejora al elevar las piernas y empeora conforme avanza el día, es probable que se trate de insuficiencia venosa crónica y conviene valorarla con un angiólogo.",
      },
      {
        question: "¿Qué puedo hacer mientras consigo una cita si me duelen mucho las piernas?",
        answer:
          "Elevar las piernas por encima del nivel del corazón durante algunos minutos, evitar permanecer de pie inmóvil por periodos muy largos y caminar con regularidad puede aliviar temporalmente la molestia, pero no sustituye una valoración con un angiólogo para identificar la causa.",
      },
    ],
    relatedConditions: ["d-insuficiencia-venosa", "d-varices", "d-tromboflebitis-superficial"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/dolor-pesadez-piernas.jpg",
    seo: {
      title: "Dolor o Pesadez en las Piernas | Angiólogo Acapulco",
      description:
        "Piernas cansadas o pesadas al final del día pueden ser insuficiencia venosa. Valoración con el Dr. González Arcos en Acapulco.",
      keywords: ["piernas pesadas Acapulco", "dolor en las piernas circulación", "angiólogo piernas cansadas Acapulco"],
    },
  },
  {
    id: "sy-venas-visibles",
    slug: "venas-visibles-y-abultadas",
    name: "Venas Visibles y Abultadas",
    colloquialNames: ["várices", "venas marcadas", "venas saltadas"],
    description:
      "Las venas visibles y abultadas son venas superficiales de las piernas que se notan bajo la piel como cordones azulados, violáceos o, en el caso de las arañitas vasculares, como líneas finas rojizas o moradas. Aparecen cuando las válvulas de esas venas dejan de cerrar correctamente y la sangre se acumula en ellas.",
    causes: [
      "Várices",
      "Insuficiencia venosa crónica",
      "Tromboflebitis superficial",
      "Predisposición genética a la debilidad de la pared venosa",
    ],
    alarmSigns: [
      "Vena que se vuelve dura, enrojecida y muy dolorosa de forma repentina",
      "Sangrado que no se detiene al presionar una várice",
      "Hinchazón importante y súbita de la pierna junto con las venas visibles",
    ],
    whyConsult:
      "Aunque muchas personas solo buscan atención por el aspecto de las venas visibles, estas suelen ser la manifestación externa de una insuficiencia venosa de fondo; valorarlas con un angiólogo permite decidir si basta con vigilancia o si conviene un tratamiento como escleroterapia o ablación endovenosa.",
    faqs: [
      {
        question: "¿Las venas visibles siempre necesitan tratamiento?",
        answer:
          "No todas requieren tratamiento inmediato; algunas se vigilan y solo se tratan si crecen, duelen o generan otros síntomas. El angiólogo valora el tamaño, la extensión y los síntomas asociados para decidir la mejor conducta.",
      },
      {
        question: "¿Qué diferencia hay entre arañitas vasculares y várices verdaderas?",
        answer:
          "Las arañitas vasculares son venas muy pequeñas y superficiales que se ven como líneas finas, mientras que las várices son venas de mayor calibre, abultadas y palpables. Ambas pueden tratarse, pero con técnicas distintas según su tamaño.",
      },
    ],
    relatedConditions: ["d-insuficiencia-venosa", "d-varices", "d-tromboflebitis-superficial"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/venas-visibles.jpg",
    seo: {
      title: "Venas Visibles y Abultadas | Angiólogo en Acapulco",
      description:
        "¿Venas azuladas o abultadas en las piernas? El Dr. González Arcos, Angiólogo en Acapulco, valora si requieren tratamiento.",
      keywords: ["venas visibles en las piernas Acapulco", "venas abultadas tratamiento", "angiólogo várices Acapulco"],
    },
  },
  {
    id: "sy-calambres-nocturnos",
    slug: "calambres-nocturnos-en-las-piernas",
    name: "Calambres Nocturnos en las Piernas",
    colloquialNames: ["calambres en las piernas de noche"],
    description:
      "Los calambres nocturnos son contracciones musculares involuntarias y dolorosas que aparecen en las piernas durante la noche, con frecuencia en la pantorrilla. Aunque tienen varias causas posibles, cuando se acompañan de pesadez, hinchazón o venas visibles durante el día, pueden relacionarse con insuficiencia venosa crónica o várices.",
    causes: [
      "Insuficiencia venosa crónica",
      "Várices",
      "Deshidratación",
      "Permanecer mucho tiempo en la misma posición durante el día",
    ],
    alarmSigns: [
      "Calambre que no cede y se acompaña de hinchazón importante y dolor intenso en una sola pierna",
      "Debilidad o adormecimiento que persiste después del calambre",
    ],
    whyConsult:
      "Si los calambres nocturnos se repiten con frecuencia y coinciden con pesadez o venas visibles en las piernas durante el día, conviene descartar insuficiencia venosa crónica con una valoración angiológica, ya que tratar la causa venosa de fondo suele reducir su frecuencia.",
    faqs: [
      {
        question: "¿Los calambres nocturnos siempre son por falta de algún mineral?",
        answer:
          "No siempre. Aunque la deshidratación o desequilibrios minerales pueden causar calambres ocasionales, cuando se repiten con frecuencia y se acompañan de pesadez o venas visibles en las piernas, la insuficiencia venosa crónica es una causa que debe descartarse.",
      },
      {
        question: "¿Qué puedo hacer si me dan calambres en las piernas por las noches?",
        answer:
          "Estirar suavemente la pantorrilla al presentarse el calambre y mantenerse bien hidratado puede ayudar en el momento, pero si los calambres son frecuentes conviene una valoración con un angiólogo para descartar una causa venosa de fondo.",
      },
    ],
    relatedConditions: ["d-insuficiencia-venosa", "d-varices"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/calambres-nocturnos.jpg",
    seo: {
      title: "Calambres Nocturnos en las Piernas | Angiólogo Acapulco",
      description:
        "Calambres frecuentes en las piernas por la noche pueden relacionarse con las venas. Valoración con el Dr. González Arcos en Acapulco.",
      keywords: ["calambres nocturnos en las piernas", "calambres en las piernas circulación", "angiólogo calambres Acapulco"],
    },
  },
  {
    id: "sy-cambios-color-piel",
    slug: "cambios-de-color-en-la-piel-de-las-piernas",
    name: "Cambios de Color en la Piel de las Piernas",
    colloquialNames: ["piel manchada de las piernas", "piel oscura en los tobillos"],
    description:
      "Los cambios de color en la piel de las piernas, como manchas cafés u oscuras cerca de los tobillos, enrojecimiento o palidez, pueden indicar distintos problemas de circulación. El origen puede ser venoso, cuando la piel se oscurece con el tiempo, o arterial, cuando la piel se ve pálida o azulada por falta de flujo de sangre.",
    causes: [
      "Insuficiencia venosa crónica de larga evolución",
      "Enfermedad arterial periférica",
      "Tromboflebitis superficial",
      "Úlceras vasculares previas",
    ],
    alarmSigns: [
      "Cambio de color repentino hacia un tono azulado o muy pálido, con frialdad y dolor intenso",
      "Piel que se vuelve negra o con ampollas de aparición súbita",
      "Cambio de color acompañado de fiebre o mal olor",
    ],
    whyConsult:
      "Un cambio de color persistente en la piel de las piernas rara vez es solo un problema estético: puede ser la señal de una insuficiencia venosa avanzada o de una enfermedad arterial periférica, ambas condiciones que se manejan mejor entre más pronto se identifiquen.",
    faqs: [
      {
        question: "¿Por qué la piel cerca de mis tobillos se ve más oscura que el resto de la pierna?",
        answer:
          "Esa pigmentación oscura ocurre cuando la insuficiencia venosa crónica ha estado presente por tiempo prolongado y pequeñas cantidades de sangre escapan hacia el tejido de la piel. Es una señal de que conviene tratar la insuficiencia venosa de fondo.",
      },
      {
        question: "¿Un cambio de color pálido o azulado en la pierna es urgente?",
        answer:
          "Si el cambio de color aparece de forma súbita, junto con frialdad y dolor intenso, sí es una urgencia vascular y debe atenderse de inmediato en un servicio de urgencias, ya que puede tratarse de una isquemia arterial aguda.",
      },
    ],
    relatedConditions: ["d-enfermedad-arterial-periferica", "d-ulceras-vasculares", "d-tromboflebitis-superficial"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/cambios-color-piel.jpg",
    seo: {
      title: "Cambios de Color en la Piel de la Pierna | Acapulco",
      description:
        "Manchas oscuras, palidez o piel azulada en la pierna requieren valoración vascular. Dr. González Arcos, Angiólogo en Acapulco.",
      keywords: [
        "cambios de color en la piel de la pierna",
        "piel oscura en los tobillos",
        "angiólogo piel de las piernas Acapulco",
      ],
    },
  },
  {
    id: "sy-ulceras-no-cierran",
    slug: "ulceras-o-heridas-que-no-cierran",
    name: "Úlceras o Heridas que No Cierran",
    colloquialNames: ["llagas que no sanan", "heridas que no cicatrizan"],
    description:
      "Una herida o úlcera que no cierra en varias semanas, a pesar de mantenerla limpia, es una señal de que algo más allá de la piel está impidiendo la cicatrización, casi siempre relacionado con una circulación deficiente, venosa o arterial, o con diabetes mal controlada.",
    causes: [
      "Insuficiencia venosa crónica",
      "Enfermedad arterial periférica",
      "Pie diabético",
      "Presión prolongada sobre la piel",
    ],
    alarmSigns: [
      "Herida con enrojecimiento extenso, calor, hinchazón y mal olor (signos de infección)",
      "Fiebre asociada a una herida en la pierna o el pie",
      "Herida acompañada de dolor intenso, frialdad o cambio de color repentino en la extremidad",
      "Aparición de tejido negro alrededor de la herida",
    ],
    whyConsult:
      "Una herida que no cicatriza en dos o tres semanas debe valorarse con un angiólogo para identificar si el origen es venoso, arterial o relacionado con diabetes, ya que tratar solo la herida sin corregir la causa de fondo retrasa la cicatrización y aumenta el riesgo de complicaciones.",
    faqs: [
      {
        question: "¿Cuánto tiempo debe pasar para considerar que una herida 'no cierra'?",
        answer:
          "Como referencia general, una herida en la pierna o el pie que no muestra señales claras de mejoría después de dos a tres semanas de cuidados básicos debe valorarse con un angiólogo para descartar una causa circulatoria de fondo.",
      },
      {
        question: "¿Curar la herida en casa es suficiente si no cierra?",
        answer:
          "Mantener la herida limpia es importante, pero si no cierra a pesar de esos cuidados, es necesario identificar y tratar la causa circulatoria de fondo, venosa, arterial o relacionada con diabetes, porque de lo contrario la herida seguirá sin cicatrizar.",
      },
    ],
    relatedConditions: ["d-pie-diabetico", "d-ulceras-vasculares"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/ulceras-no-cierran.jpg",
    seo: {
      title: "Úlceras o Heridas que No Cierran | Angiólogo Acapulco",
      description:
        "Herida en la pierna o el pie que no cicatriza puede ser una úlcera vascular o pie diabético. Valoración con el Dr. González Arcos.",
      keywords: ["heridas que no cierran Acapulco", "úlceras que no cicatrizan", "angiólogo heridas Acapulco"],
    },
  },
  {
    id: "sy-frialdad-palidez",
    slug: "frialdad-o-palidez-en-manos-o-pies",
    name: "Frialdad o Palidez en Manos o Pies",
    colloquialNames: ["pies fríos", "manos frías", "pies pálidos"],
    description:
      "La frialdad o palidez persistente en los pies o las manos, en comparación con el resto del cuerpo, puede ser señal de que la sangre arterial no está llegando con normalidad a esa zona. Cuando es progresiva y se acompaña de dolor al caminar, suele relacionarse con enfermedad arterial periférica; cuando aparece de forma súbita e intensa es una urgencia vascular.",
    causes: [
      "Enfermedad arterial periférica",
      "Pie diabético con compromiso circulatorio asociado",
      "Isquemia arterial aguda cuando la frialdad es súbita",
      "Exposición al frío, causa no vascular y generalmente reversible",
    ],
    alarmSigns: [
      "Frialdad y palidez de aparición súbita en una extremidad, con dolor intenso",
      "Frialdad acompañada de ausencia de pulso, debilidad o incapacidad para mover la extremidad",
      "Cambio de color hacia un tono azulado o negruzco de aparición reciente",
    ],
    whyConsult:
      "La frialdad o palidez que aparece de forma progresiva en los pies, sobre todo si se acompaña de dolor al caminar, debe valorarse con un angiólogo para descartar enfermedad arterial periférica; cuando aparece de golpe y con dolor intenso, es una urgencia que no debe esperar a una cita programada.",
    faqs: [
      {
        question: "¿Por qué tengo los pies fríos aunque haga calor?",
        answer:
          "Cuando la frialdad en los pies es constante, incluso en ambientes cálidos, y no se explica solo por el clima, puede deberse a que las arterias de las piernas están llevando menos sangre de la necesaria, como ocurre en la enfermedad arterial periférica, y conviene valorarlo con un angiólogo.",
      },
      {
        question: "¿La frialdad en los pies siempre significa un problema arterial?",
        answer:
          "No siempre, ya que el frío ambiental o la mala circulación superficial temporal también la explican, pero cuando es persistente, progresiva o se acompaña de dolor al caminar, sí debe descartarse una causa arterial con una valoración vascular.",
      },
    ],
    relatedConditions: ["d-enfermedad-arterial-periferica", "d-pie-diabetico", "d-isquemia-arterial-aguda"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/frialdad-palidez.jpg",
    seo: {
      title: "Frialdad o Palidez en Pies y Manos | Angiólogo Acapulco",
      description:
        "Pies fríos o pálidos de forma persistente pueden indicar mala circulación arterial. Valoración con el Dr. González Arcos en Acapulco.",
      keywords: ["pies fríos circulación Acapulco", "palidez en los pies causas", "angiólogo enfermedad arterial Acapulco"],
    },
  },
  {
    id: "sy-claudicacion-intermitente",
    slug: "dolor-al-caminar-claudicacion-intermitente",
    name: "Dolor al Caminar que Mejora con el Reposo (Claudicación Intermitente)",
    colloquialNames: ["dolor al caminar", "claudicación intermitente"],
    description:
      "La claudicación intermitente es un dolor, calambre o fatiga en la pantorrilla, el muslo o el glúteo que aparece al caminar cierta distancia y mejora rápidamente al detenerse a descansar. Es el síntoma más característico de la enfermedad arterial periférica y refleja que el músculo no recibe suficiente sangre durante el esfuerzo.",
    causes: [
      "Enfermedad arterial periférica",
      "Isquemia arterial aguda en su forma más grave y de aparición súbita",
      "Arteriosclerosis avanzada",
    ],
    alarmSigns: [
      "Dolor que aparece en reposo, no solo al caminar, y no mejora al detenerse",
      "Dolor intenso y súbito junto con frialdad, palidez o pérdida de fuerza en la extremidad",
      "Aparición de una herida que no cicatriza en el pie del lado que duele al caminar",
    ],
    whyConsult:
      "La distancia que se puede caminar antes de que aparezca el dolor tiende a acortarse con el tiempo si la enfermedad arterial periférica no se trata; una valoración angiológica oportuna, con Doppler vascular, permite decidir el tratamiento adecuado antes de que la claudicación limite las actividades cotidianas.",
    faqs: [
      {
        question: "¿Por qué me duele la pierna solo al caminar y se me quita al parar?",
        answer:
          "Ese patrón se llama claudicación intermitente: al caminar, el músculo necesita más sangre de la que las arterias estrechadas pueden entregarle, por lo que aparece el dolor, y este cede al detenerse porque baja la demanda de sangre del músculo.",
      },
      {
        question: "¿La claudicación intermitente empeora con el tiempo?",
        answer:
          "Si la enfermedad arterial periférica de fondo no se trata, es común que la distancia que se puede caminar sin dolor se vaya acortando. Por eso se recomienda una valoración angiológica en cuanto aparece este patrón de dolor, y no esperar a que empeore.",
      },
    ],
    relatedConditions: ["d-enfermedad-arterial-periferica", "d-isquemia-arterial-aguda"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/claudicacion-intermitente.jpg",
    seo: {
      title: "Dolor al Caminar (Claudicación) | Angiólogo Acapulco",
      description:
        "¿Dolor en la pierna al caminar que mejora al descansar? Es claudicación intermitente. Valoración con el Dr. González Arcos en Acapulco.",
      keywords: ["claudicación intermitente Acapulco", "dolor al caminar en la pierna", "angiólogo enfermedad arterial Acapulco"],
    },
  },
  {
    id: "sy-hormigueo-adormecimiento",
    slug: "hormigueo-o-adormecimiento-en-las-extremidades",
    name: "Hormigueo o Adormecimiento en las Extremidades",
    colloquialNames: ["hormigueo en los pies", "pies dormidos", "adormecimiento de manos o pies"],
    description:
      "El hormigueo o adormecimiento en las manos o los pies es una sensación anormal, como piquetes o pérdida parcial de la sensibilidad, que en personas con diabetes suele relacionarse con daño a los nervios periféricos, conocido como neuropatía diabética. Cuando afecta los pies, aumenta el riesgo de que una herida pase desapercibida.",
    causes: [
      "Neuropatía diabética por diabetes de larga evolución o mal controlada",
      "Compresión nerviosa local",
      "Mala circulación arterial asociada",
    ],
    alarmSigns: [
      "Adormecimiento súbito y completo de una extremidad, especialmente si se acompaña de debilidad",
      "Pérdida de sensibilidad junto con una herida que no se había notado antes",
      "Hormigueo o adormecimiento con dificultad para hablar o mover un lado del cuerpo (posible urgencia neurológica)",
    ],
    whyConsult:
      "En personas con diabetes, el hormigueo o adormecimiento persistente en los pies suele ser la primera señal de neuropatía diabética, lo que aumenta el riesgo de que una herida pase desapercibida y evolucione hacia un pie diabético; por eso conviene revisar los pies de forma regular y consultar ante estos síntomas.",
    faqs: [
      {
        question: "¿El hormigueo en los pies siempre es por diabetes?",
        answer:
          "No siempre, pero en personas con diabetes es una de las causas más frecuentes y relevantes, porque refleja daño a los nervios periféricos. Si tienes diabetes y notas hormigueo o adormecimiento persistente en los pies, conviene una valoración que revise también la circulación de la extremidad.",
      },
      {
        question: "¿Por qué el adormecimiento de los pies aumenta el riesgo de heridas?",
        answer:
          "Porque al perder sensibilidad, una herida, un roce del calzado o una quemadura leve pueden pasar desapercibidos, permitiendo que se agraven antes de que la persona los note. Por eso la revisión diaria de los pies es tan importante cuando hay adormecimiento persistente.",
      },
    ],
    relatedConditions: ["d-pie-diabetico"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/hormigueo-adormecimiento.jpg",
    seo: {
      title: "Hormigueo o Adormecimiento en Pies | Angiólogo Acapulco",
      description:
        "El hormigueo o adormecimiento en los pies puede señalar pie diabético. Valoración vascular con el Dr. González Arcos en Acapulco.",
      keywords: ["hormigueo en los pies Acapulco", "adormecimiento de pies diabetes", "angiólogo pie diabético Acapulco"],
    },
  },
  {
    id: "sy-hinchazon-repentina-una-pierna",
    slug: "hinchazon-repentina-y-dolor-en-una-sola-pierna",
    name: "Hinchazón Repentina y Dolor en una Sola Pierna",
    colloquialNames: ["pierna hinchada de repente", "hinchazón súbita de una pierna"],
    description:
      "La hinchazón que aparece de forma repentina en una sola pierna, especialmente si se acompaña de dolor, calor y enrojecimiento, es un síntoma que debe tomarse en serio porque puede ser la manifestación de una trombosis venosa profunda, una urgencia vascular real.",
    causes: [
      "Trombosis venosa profunda",
      "Traumatismo local, causa no vascular a descartar",
      "Infección de la piel o el tejido subcutáneo, causa no vascular a descartar",
    ],
    alarmSigns: [
      "Hinchazón repentina de una sola pierna con dolor y calor local",
      "Hinchazón acompañada de dificultad para respirar, dolor en el pecho o tos con sangre (posible señal de que un coágulo llegó al pulmón)",
      "Piel de la pierna enrojecida, tensa y caliente al tacto de aparición reciente",
    ],
    whyConsult:
      "Ante hinchazón repentina y dolor en una sola pierna, la prioridad es descartar una trombosis venosa profunda cuanto antes, ya que el coágulo puede desprenderse y viajar a los pulmones; esta combinación de síntomas debe atenderse de inmediato en un servicio de urgencias, no en una consulta programada.",
    faqs: [
      {
        question: "¿Toda hinchazón repentina de una pierna es trombosis venosa profunda?",
        answer:
          "No todas, pero esta combinación de síntomas debe descartarse de inmediato en un servicio de urgencias mediante un estudio de Doppler vascular, ya que la trombosis venosa profunda es una de las causas más importantes a identificar o descartar cuanto antes por su riesgo de complicarse con una embolia pulmonar.",
      },
      {
        question: "¿Puedo esperar a una cita programada si tengo esta combinación de síntomas?",
        answer:
          "No. La hinchazón repentina y dolorosa de una sola pierna, sobre todo si se acompaña de calor y enrojecimiento, debe valorarse de inmediato en un servicio de urgencias, no en una consulta programada ni por mensaje de WhatsApp.",
      },
    ],
    relatedConditions: ["d-trombosis-venosa-profunda"],
    lastReviewed: "2026-09-24",
    image: "/sintomas/hinchazon-repentina-una-pierna.jpg",
    seo: {
      title: "Hinchazón Repentina en una Pierna | Urgencia Acapulco",
      description:
        "Hinchazón súbita y dolor en una sola pierna pueden ser trombosis venosa profunda, una urgencia vascular. Atención en Acapulco.",
      keywords: ["hinchazón repentina de una pierna", "trombosis venosa profunda síntomas", "urgencia vascular Acapulco"],
    },
  },
];
