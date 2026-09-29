import type { MedicalCondition } from "@/types/schema";

// Catálogo real de enfermedades atendidas por el Dr. Gregorio Alberto González
// Arcos, Angiólogo (Angiología, Cirugía Vascular y Endovascular) en Acapulco de
// Juárez, Guerrero. Contenido clínico general verificable, sin cifras
// inventadas ni nombres de medicamentos — AGENTS.md §3.
export const diseases: MedicalCondition[] = [
  {
    id: "d-insuficiencia-venosa",
    slug: "insuficiencia-venosa-cronica",
    name: "Insuficiencia Venosa Crónica",
    technicalName: "Insuficiencia Venosa Crónica de Miembros Inferiores",
    colloquialNames: ["mala circulación en las piernas", "venas flojas"],
    description:
      "La insuficiencia venosa crónica es la dificultad de las venas de las piernas para regresar la sangre hacia el corazón de forma eficiente, lo que provoca que se acumule en las extremidades inferiores. Con el tiempo genera hinchazón, pesadez, venas visibles y, en casos avanzados, cambios en la piel o úlceras. Es una condición progresiva pero manejable cuando se detecta y trata a tiempo.",
    symptoms: [
      "Hinchazón de tobillos y piernas al final del día",
      "Sensación de pesadez o cansancio en las piernas",
      "Venas visibles y abultadas",
      "Calambres nocturnos en las piernas",
      "Picazón en la piel de las piernas",
      "Cambios de color en la piel cerca de los tobillos",
    ],
    causes: [
      "Debilitamiento de las válvulas venosas con el paso del tiempo",
      "Permanecer de pie o sentado por periodos prolongados",
      "Embarazo y cambios hormonales",
      "Antecedentes familiares de enfermedad venosa",
      "Sobrepeso u obesidad",
    ],
    riskFactors: [
      "Antecedentes familiares de várices o insuficiencia venosa",
      "Trabajos que requieren estar de pie muchas horas",
      "Sobrepeso u obesidad",
      "Embarazos múltiples",
      "Edad mayor a 50 años",
      "Sedentarismo",
    ],
    mexicoStats:
      "La insuficiencia venosa crónica es una de las consultas más frecuentes en angiología en México, con mayor prevalencia en mujeres y en personas cuya actividad laboral implica permanecer de pie por periodos prolongados.",
    complications: [
      "Úlceras vasculares de difícil cicatrización",
      "Tromboflebitis superficial",
      "Cambios permanentes en la piel (pigmentación, endurecimiento)",
      "Sangrado de várices superficiales",
    ],
    treatments: [
      "Uso de medias de compresión graduada",
      "Escleroterapia para várices pequeñas y moderadas",
      "Ablación endovenosa con láser o radiofrecuencia",
      "Elevación de piernas y ejercicio regular supervisado",
      "Doppler vascular para valorar el reflujo venoso",
    ],
    faqs: [
      {
        question: "¿La insuficiencia venosa crónica es lo mismo que tener 'mala circulación'?",
        answer:
          "Coloquialmente se le llama mala circulación en las piernas, pero en términos médicos es la falla de las válvulas venosas para regresar la sangre al corazón, lo que provoca que se acumule en las piernas. Un angiólogo confirma el diagnóstico con exploración física y, si es necesario, un estudio de Doppler vascular.",
      },
      {
        question: "¿La insuficiencia venosa crónica tiene cura definitiva?",
        answer:
          "No siempre se habla de cura porque es una condición relacionada con el debilitamiento progresivo de las válvulas venosas, pero sí se controla de forma efectiva con medidas de compresión, cambios de hábitos y, cuando está indicado, procedimientos como la escleroterapia o la ablación endovenosa.",
      },
      {
        question: "¿Cuándo debo acudir con un angiólogo por insuficiencia venosa?",
        answer:
          "Conviene acudir con un angiólogo cuando la hinchazón, pesadez o venas visibles en las piernas persisten por varias semanas, empeoran con el tiempo o se acompañan de cambios en la piel, ya que una valoración temprana puede evitar complicaciones como úlceras vasculares.",
      },
      {
        question: "¿Usar medias de compresión basta para tratarla?",
        answer:
          "Las medias de compresión ayudan a controlar los síntomas y son parte del tratamiento, pero no corrigen la causa. La valoración con un angiólogo permite definir si además se requiere un procedimiento como escleroterapia o ablación endovenosa.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la insuficiencia venosa crónica"],
    relatedServices: ["s-escleroterapia", "s-ablacion-endovenosa", "s-doppler-vascular"],
    relatedSymptoms: ["sy-piernas-hinchadas", "sy-venas-visibles", "sy-dolor-pesadez-piernas", "sy-calambres-nocturnos"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/insuficiencia-venosa-cronica.jpg",
    seo: {
      title: "Insuficiencia Venosa Crónica | Angiólogo en Acapulco",
      description:
        "¿Piernas hinchadas o con venas visibles? El Dr. González Arcos, Angiólogo en Acapulco, diagnostica y trata la insuficiencia venosa crónica.",
      keywords: [
        "insuficiencia venosa crónica en Acapulco",
        "mala circulación en las piernas Acapulco",
        "angiólogo para venas en Acapulco",
      ],
    },
  },
  {
    id: "d-varices",
    slug: "varices",
    name: "Várices (Venas Varicosas)",
    technicalName: "Venas Varicosas de Miembros Inferiores",
    colloquialNames: ["várices", "venas abultadas"],
    description:
      "Las várices son venas superficiales de las piernas que se dilatan, se alargan y se vuelven visibles bajo la piel debido a que sus válvulas dejan de cerrar correctamente. Suelen aparecer como cordones azulados o violáceos, a veces abultados, y pueden acompañarse de pesadez o dolor. Aunque muchas personas las consideran solo un problema estético, en realidad son una manifestación de insuficiencia venosa que conviene valorar.",
    symptoms: [
      "Venas azuladas o violáceas visibles y abultadas en las piernas",
      "Pesadez o dolor al final del día",
      "Picazón alrededor de las venas afectadas",
      "Hinchazón leve de tobillos",
      "Calambres nocturnos",
    ],
    causes: [
      "Válvulas venosas que no cierran correctamente",
      "Debilidad congénita de la pared venosa",
      "Presión venosa elevada por permanecer de pie por tiempo prolongado",
      "Cambios hormonales (embarazo, anticoncepción hormonal)",
    ],
    riskFactors: [
      "Antecedentes familiares de várices",
      "Sexo femenino",
      "Embarazo",
      "Permanecer de pie muchas horas al día",
      "Sobrepeso u obesidad",
      "Edad avanzada",
    ],
    mexicoStats:
      "Las várices se encuentran entre los motivos de consulta más comunes en angiología en México, particularmente en mujeres adultas y personas con antecedentes familiares de enfermedad venosa.",
    complications: [
      "Tromboflebitis superficial",
      "Sangrado espontáneo de la várice",
      "Cambios de pigmentación en la piel",
      "Progresión a úlceras vasculares si no se trata la insuficiencia venosa de fondo",
    ],
    treatments: [
      "Escleroterapia",
      "Ablación endovenosa con láser o radiofrecuencia",
      "Safenectomía en casos de várices extensas o de safena principal",
      "Medias de compresión graduada",
    ],
    faqs: [
      {
        question: "¿Las várices son solo un problema estético?",
        answer:
          "No necesariamente. Aunque muchas personas buscan tratarlas por su aspecto, las várices son una señal de que las válvulas venosas no están funcionando bien, por lo que también conviene valorarlas desde el punto de vista vascular, no solo estético.",
      },
      {
        question: "¿Qué diferencia hay entre escleroterapia y safenectomía para tratar várices?",
        answer:
          "La escleroterapia es un procedimiento ambulatorio indicado para várices pequeñas y moderadas, mientras que la safenectomía es una cirugía recomendada cuando la vena safena principal está muy dilatada o hay várices extensas. El angiólogo determina cuál es la opción adecuada tras una valoración con Doppler vascular.",
      },
      {
        question: "¿Las várices vuelven a salir después del tratamiento?",
        answer:
          "El tratamiento elimina o cierra las venas varicosas tratadas, pero como la insuficiencia venosa es una condición progresiva, es posible que con los años aparezcan nuevas várices en otras venas, por lo que se recomienda seguimiento periódico con el angiólogo.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de insuficiencia venosa crónica y várices"],
    relatedServices: ["s-safenectomia", "s-escleroterapia", "s-ablacion-endovenosa"],
    relatedSymptoms: ["sy-venas-visibles", "sy-dolor-pesadez-piernas", "sy-calambres-nocturnos"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/varices.jpg",
    seo: {
      title: "Várices (Venas Varicosas) | Angiólogo en Acapulco",
      description:
        "Tratamiento de várices con escleroterapia, ablación endovenosa o cirugía con el Dr. González Arcos, Angiólogo en Acapulco, Guerrero.",
      keywords: [
        "várices en Acapulco",
        "tratamiento de venas varicosas Acapulco",
        "angiólogo para várices en Guerrero",
      ],
    },
  },
  {
    id: "d-trombosis-venosa-profunda",
    slug: "trombosis-venosa-profunda",
    name: "Trombosis Venosa Profunda",
    technicalName: "Trombosis Venosa Profunda de Miembros Inferiores",
    colloquialNames: ["coágulo en la pierna", "trombo en la vena"],
    description:
      "La trombosis venosa profunda es la formación de un coágulo de sangre dentro de una vena profunda, casi siempre en la pierna, que puede obstruir parcial o totalmente el retorno de sangre al corazón. Provoca hinchazón repentina, dolor y calor en una sola pierna, y requiere atención médica urgente porque el coágulo puede desprenderse y viajar hasta los pulmones.",
    symptoms: [
      "Hinchazón repentina de una sola pierna",
      "Dolor o sensibilidad en la pantorrilla o el muslo",
      "Piel caliente y enrojecida en la zona afectada",
      "Sensación de pesadez que aparece de forma súbita",
      "Venas superficiales más visibles de lo habitual",
    ],
    causes: [
      "Inmovilidad prolongada (viajes largos, reposo en cama, hospitalización)",
      "Cirugías recientes, especialmente ortopédicas o abdominales",
      "Alteraciones de la coagulación",
      "Embarazo y periodo posparto",
      "Uso de anticonceptivos hormonales",
    ],
    riskFactors: [
      "Cirugía o traumatismo reciente",
      "Inmovilización prolongada",
      "Cáncer activo",
      "Antecedente personal o familiar de trombosis",
      "Embarazo",
      "Obesidad",
      "Tabaquismo",
    ],
    mexicoStats:
      "La trombosis venosa profunda es una de las causas vasculares de consulta urgente más relevantes, ya que su principal riesgo es la embolia pulmonar si el coágulo se desprende.",
    complications: [
      "Embolia pulmonar",
      "Síndrome postrombótico (hinchazón y dolor crónico de la pierna)",
      "Daño permanente a las válvulas venosas",
    ],
    treatments: [
      "Anticoagulación bajo supervisión médica estricta",
      "Uso de medias de compresión graduada durante la recuperación",
      "Trombectomía en casos seleccionados de trombosis extensa",
      "Doppler vascular de seguimiento para evaluar la resolución del coágulo",
    ],
    faqs: [
      {
        question: "¿La trombosis venosa profunda es una urgencia?",
        answer:
          "Sí. La hinchazón repentina y el dolor en una sola pierna deben valorarse de inmediato en un servicio de urgencias, ya que el coágulo puede desprenderse y viajar a los pulmones, provocando una embolia pulmonar que pone en riesgo la vida.",
      },
      {
        question: "¿Cómo se confirma el diagnóstico de trombosis venosa profunda?",
        answer:
          "El diagnóstico se confirma principalmente con un estudio de Doppler vascular, que permite ver si existe un coágulo dentro de la vena y qué tan extenso es, además de la valoración clínica del angiólogo.",
      },
      {
        question: "¿Después de una trombosis venosa profunda quedan secuelas?",
        answer:
          "Algunas personas desarrollan el llamado síndrome postrombótico, con hinchazón y pesadez crónica en la pierna afectada, por lo que el seguimiento médico y el uso de medias de compresión durante la recuperación son importantes para reducir ese riesgo.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la enfermedad tromboembólica venosa"],
    relatedServices: ["s-trombectomia", "s-doppler-vascular"],
    relatedSymptoms: ["sy-hinchazon-repentina-una-pierna"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/trombosis-venosa-profunda.jpg",
    seo: {
      title: "Trombosis Venosa Profunda | Angiólogo en Acapulco",
      description:
        "Hinchazón repentina en una pierna puede ser trombosis venosa profunda. El Dr. González Arcos, Angiólogo en Acapulco, orienta el diagnóstico.",
      keywords: [
        "trombosis venosa profunda Acapulco",
        "coágulo en la pierna síntomas",
        "angiólogo urgencias vasculares Acapulco",
      ],
    },
  },
  {
    id: "d-enfermedad-arterial-periferica",
    slug: "enfermedad-arterial-periferica",
    name: "Enfermedad Arterial Periférica",
    technicalName: "Enfermedad Arterial Periférica de Miembros Inferiores",
    colloquialNames: ["mala circulación arterial", "arterias tapadas de las piernas"],
    description:
      "La enfermedad arterial periférica es el estrechamiento u obstrucción de las arterias que llevan sangre a las piernas, generalmente por acumulación de placa en sus paredes. Esto reduce el flujo de sangre oxigenada hacia los músculos y la piel, provocando dolor al caminar que mejora con el reposo, frialdad y, en casos avanzados, heridas que no cicatrizan.",
    symptoms: [
      "Dolor, calambre o fatiga en la pantorrilla al caminar que mejora al detenerse",
      "Frialdad en pies o piernas",
      "Palidez o cambio de color en la piel de las piernas",
      "Piel más delgada, brillante o con menos vello en las piernas",
      "Pulsos débiles o ausentes en los pies",
      "Heridas en los pies que cicatrizan lentamente",
    ],
    causes: [
      "Acumulación de placa (arteriosclerosis) en las paredes arteriales",
      "Tabaquismo",
      "Diabetes no controlada",
      "Hipertensión arterial no controlada",
      "Niveles elevados de colesterol",
    ],
    riskFactors: [
      "Tabaquismo activo o pasado",
      "Diabetes",
      "Hipertensión arterial",
      "Colesterol elevado",
      "Edad mayor a 60 años",
      "Antecedentes familiares de enfermedad arterial",
    ],
    mexicoStats:
      "La enfermedad arterial periférica suele estar subdiagnosticada porque muchas personas atribuyen el dolor al caminar al cansancio normal, por lo que la detección oportuna en consulta angiológica es clave.",
    complications: [
      "Claudicación intermitente incapacitante",
      "Úlceras arteriales de difícil cicatrización",
      "Isquemia arterial aguda",
      "Riesgo de amputación en casos avanzados no tratados",
    ],
    treatments: [
      "Control estricto de factores de riesgo cardiovascular",
      "Programa de caminata supervisada",
      "Angioplastia periférica",
      "Bypass vascular (derivación arterial) en obstrucciones extensas",
      "Doppler vascular para localizar y medir la obstrucción",
    ],
    faqs: [
      {
        question: "¿Por qué me duele la pantorrilla al caminar y se me quita al detenerme?",
        answer:
          "Ese patrón se llama claudicación intermitente y es una señal característica de enfermedad arterial periférica: al caminar, el músculo necesita más sangre de la que las arterias estrechadas pueden entregar, y el dolor cede al detenerse porque baja la demanda. Debe valorarse con un angiólogo.",
      },
      {
        question: "¿La enfermedad arterial periférica se puede tratar sin cirugía?",
        answer:
          "En etapas iniciales, el control de factores de riesgo (dejar de fumar, controlar la diabetes y la presión arterial) junto con un programa de caminata supervisada puede mejorar los síntomas. Cuando la obstrucción es significativa, procedimientos como la angioplastia periférica o el bypass vascular restauran el flujo de sangre.",
      },
      {
        question: "¿Qué relación tiene esta enfermedad con el pie diabético?",
        answer:
          "En personas con diabetes, la enfermedad arterial periférica reduce el flujo de sangre hacia los pies, lo que dificulta la cicatrización de heridas y aumenta el riesgo de desarrollar pie diabético, por lo que ambas condiciones suelen valorarse juntas.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la enfermedad arterial periférica"],
    relatedServices: ["s-angioplastia-periferica", "s-bypass-vascular", "s-doppler-vascular"],
    relatedSymptoms: ["sy-claudicacion-intermitente", "sy-frialdad-palidez", "sy-cambios-color-piel"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/enfermedad-arterial-periferica.jpg",
    seo: {
      title: "Enfermedad Arterial Periférica | Angiólogo Acapulco",
      description:
        "¿Dolor al caminar que mejora al descansar? Puede ser enfermedad arterial periférica. Valoración con el Dr. González Arcos en Acapulco.",
      keywords: [
        "enfermedad arterial periférica Acapulco",
        "dolor al caminar en las piernas",
        "angiólogo arterias Acapulco",
      ],
    },
  },
  {
    id: "d-aneurisma-aorta-abdominal",
    slug: "aneurisma-aorta-abdominal",
    name: "Aneurisma de Aorta Abdominal",
    technicalName: "Aneurisma de Aorta Abdominal",
    colloquialNames: ["aneurisma en la arteria principal del abdomen"],
    description:
      "El aneurisma de aorta abdominal es una dilatación anormal y permanente de la aorta, la arteria principal que lleva sangre desde el corazón hacia el abdomen y las piernas. En la mayoría de los casos no produce síntomas y se detecta de forma incidental en un estudio de imagen, pero si crece de manera importante puede romperse, lo que constituye una urgencia vascular con riesgo de vida.",
    symptoms: [
      "La mayoría de los casos no presenta síntomas y se detecta en un estudio de imagen por otro motivo",
      "Sensación de pulsación en el abdomen",
      "Dolor abdominal o de espalda persistente en aneurismas grandes",
      "Dolor abdominal intenso y repentino si el aneurisma se rompe (urgencia médica)",
    ],
    causes: [
      "Debilitamiento progresivo de la pared de la aorta",
      "Arteriosclerosis",
      "Hipertensión arterial no controlada",
      "Predisposición genética",
    ],
    riskFactors: [
      "Sexo masculino",
      "Edad mayor a 65 años",
      "Tabaquismo",
      "Hipertensión arterial",
      "Antecedentes familiares de aneurisma de aorta",
      "Enfermedad arterial periférica asociada",
    ],
    mexicoStats:
      "Al ser frecuentemente asintomático, el aneurisma de aorta abdominal suele encontrarse de manera incidental en estudios de imagen realizados por otras razones, lo que hace importante la valoración vascular en personas con factores de riesgo.",
    complications: [
      "Ruptura del aneurisma (urgencia vascular con alta mortalidad)",
      "Formación de coágulos dentro del aneurisma",
      "Compresión de estructuras abdominales cercanas",
    ],
    treatments: [
      "Vigilancia periódica con estudios de imagen en aneurismas pequeños",
      "Control estricto de la presión arterial",
      "Tratamiento endovascular de aneurisma (EVAR)",
      "Referencia oportuna a manejo quirúrgico especializado en aneurismas de gran tamaño",
    ],
    faqs: [
      {
        question: "¿Cómo se detecta un aneurisma de aorta abdominal si no da síntomas?",
        answer:
          "La mayoría se descubre de forma incidental en un ultrasonido, tomografía o radiografía realizada por otro motivo. Por eso, en personas con factores de riesgo como tabaquismo o antecedentes familiares, el angiólogo puede recomendar un estudio de imagen para descartarlo de forma intencionada.",
      },
      {
        question: "¿Todos los aneurismas de aorta abdominal requieren cirugía?",
        answer:
          "No. Los aneurismas pequeños suelen vigilarse de forma periódica con estudios de imagen y control estricto de la presión arterial. La decisión de tratarlo con un procedimiento como el EVAR depende principalmente de su tamaño y velocidad de crecimiento.",
      },
      {
        question: "¿Qué señales indican que un aneurisma se está rompiendo?",
        answer:
          "Un dolor abdominal o de espalda intenso y repentino, especialmente si se acompaña de mareo o desmayo, es una urgencia médica que requiere atención inmediata en un servicio de urgencias, no una consulta programada.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento del aneurisma de aorta abdominal"],
    relatedServices: ["s-evar"],
    relatedSymptoms: [],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/aneurisma-aorta-abdominal.jpg",
    seo: {
      title: "Aneurisma de Aorta Abdominal | Angiólogo Acapulco",
      description:
        "Diagnóstico y seguimiento del aneurisma de aorta abdominal con el Dr. González Arcos, Angiólogo y Cirujano Vascular en Acapulco.",
      keywords: [
        "aneurisma de aorta abdominal Acapulco",
        "angiólogo cirugía vascular Acapulco",
        "EVAR en Acapulco",
      ],
    },
  },
  {
    id: "d-pie-diabetico",
    slug: "pie-diabetico",
    name: "Pie Diabético",
    technicalName: "Síndrome de Pie Diabético",
    colloquialNames: ["pie del diabético", "heridas en el pie por diabetes"],
    description:
      "El pie diabético es el conjunto de alteraciones que ocurren en los pies de personas con diabetes mal controlada, resultado de la combinación de mala circulación arterial y daño a los nervios periféricos. Esto provoca que pequeñas heridas pasen desapercibidas, cicatricen con lentitud y se infecten con facilidad, por lo que requiere vigilancia constante para evitar complicaciones graves.",
    symptoms: [
      "Heridas o úlceras en los pies que no cicatrizan",
      "Hormigueo, adormecimiento o pérdida de sensibilidad en los pies",
      "Frialdad en los pies por mala circulación asociada",
      "Cambios en la forma del pie",
      "Callosidades que se agrietan o infectan con facilidad",
      "Enrojecimiento, calor o mal olor en una herida (signo de infección)",
    ],
    causes: [
      "Diabetes con control glucémico deficiente por tiempo prolongado",
      "Enfermedad arterial periférica asociada",
      "Daño a los nervios periféricos (neuropatía diabética)",
      "Deformidades del pie que generan puntos de presión anormal",
    ],
    riskFactors: [
      "Diabetes de larga evolución",
      "Mal control de la glucosa",
      "Enfermedad arterial periférica",
      "Neuropatía diabética previa",
      "Antecedente de úlceras o amputación previa",
      "Uso de calzado inadecuado",
    ],
    mexicoStats:
      "El pie diabético es una de las complicaciones más serias de la diabetes en México y una de las principales causas de amputación no traumática, por lo que la revisión periódica de los pies en personas con diabetes es fundamental.",
    complications: [
      "Infección profunda del pie",
      "Osteomielitis (infección del hueso)",
      "Gangrena",
      "Amputación menor o mayor si no se trata a tiempo",
    ],
    treatments: [
      "Curación avanzada de heridas y control de infección",
      "Desbridamiento de tejido no viable",
      "Valoración de la circulación arterial del pie con Doppler vascular",
      "Angioplastia periférica cuando existe obstrucción arterial asociada",
      "Amputación menor únicamente cuando el tejido ya no es viable",
      "Educación en cuidado diario del pie",
    ],
    faqs: [
      {
        question: "¿Por qué una herida pequeña en el pie es peligrosa si tengo diabetes?",
        answer:
          "Porque la diabetes mal controlada afecta tanto la circulación arterial como la sensibilidad de los pies, así que una herida puede pasar desapercibida, no doler, cicatrizar muy lento e infectarse sin que la persona lo note a tiempo. Por eso toda herida en el pie de una persona con diabetes debe revisarse cuanto antes.",
      },
      {
        question: "¿El pie diabético siempre termina en amputación?",
        answer:
          "No. Con detección temprana, curación adecuada de heridas y, cuando es necesario, procedimientos para mejorar la circulación arterial del pie, muchas úlceras cicatrizan sin llegar a una amputación. El riesgo aumenta cuando la herida se detecta tarde o la infección ya es profunda.",
      },
      {
        question: "¿Cada cuánto debo revisarme los pies si tengo diabetes?",
        answer:
          "Se recomienda revisar los pies todos los días en casa buscando heridas, cambios de color o callosidades, y acudir a valoración con un angiólogo al menos una vez al año, o antes si aparece cualquier lesión.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Prevención, diagnóstico y tratamiento del pie diabético"],
    relatedServices: ["s-curacion-heridas", "s-amputacion-menor"],
    relatedSymptoms: ["sy-ulceras-no-cierran", "sy-frialdad-palidez", "sy-hormigueo-adormecimiento"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/pie-diabetico.jpg",
    seo: {
      title: "Pie Diabético | Angiólogo en Acapulco, Guerrero",
      description:
        "Curación de heridas y valoración vascular del pie diabético con el Dr. González Arcos, Angiólogo en Acapulco de Juárez.",
      keywords: [
        "pie diabético Acapulco",
        "heridas que no cierran diabetes",
        "angiólogo pie diabético Guerrero",
      ],
    },
  },
  {
    id: "d-linfedema",
    slug: "linfedema",
    name: "Linfedema",
    technicalName: "Linfedema de Miembros Inferiores",
    colloquialNames: ["hinchazón linfática", "pierna hinchada por líquido linfático"],
    description:
      "El linfedema es la acumulación anormal de líquido linfático en los tejidos, generalmente de una pierna, debido a que el sistema linfático no logra drenarlo con eficiencia. Provoca una hinchazón progresiva que, a diferencia de la hinchazón venosa simple, suele ser más firme y puede endurecer la piel con el tiempo si no se atiende.",
    symptoms: [
      "Hinchazón progresiva de una pierna, a veces de ambas",
      "Sensación de pesadez o tirantez en la piel",
      "Piel que se engruesa o endurece con el tiempo",
      "Dificultad para marcar la piel con el dedo en etapas avanzadas, a diferencia del edema blando inicial",
      "Episodios repetidos de infección de la piel en la zona afectada",
    ],
    causes: [
      "Malformación o insuficiencia congénita del sistema linfático",
      "Daño a los ganglios linfáticos por cirugía o radioterapia previa",
      "Infecciones repetidas de la piel y el tejido linfático",
      "Obstrucción del drenaje linfático por otras condiciones vasculares",
    ],
    riskFactors: [
      "Cirugías con extirpación de ganglios linfáticos",
      "Radioterapia previa en la zona pélvica o inguinal",
      "Infecciones repetidas de piel en las piernas",
      "Obesidad",
      "Antecedente familiar de linfedema",
    ],
    complications: [
      "Infecciones repetidas de la piel (celulitis)",
      "Endurecimiento y engrosamiento permanente de la piel",
      "Limitación progresiva del movimiento de la extremidad",
    ],
    treatments: [
      "Terapia descongestiva con vendaje y medias de compresión especializadas",
      "Cuidado meticuloso de la piel para prevenir infecciones",
      "Elevación de la extremidad afectada",
      "Curación de heridas asociadas cuando existen",
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia entre linfedema e insuficiencia venosa?",
        answer:
          "Ambas causan hinchazón en las piernas, pero el linfedema se debe a una falla en el drenaje del sistema linfático y suele producir una hinchazón más firme y progresiva, mientras que la insuficiencia venosa se debe a válvulas venosas que no cierran bien. El angiólogo distingue entre ambas con la exploración clínica y, si es necesario, estudios complementarios.",
      },
      {
        question: "¿El linfedema tiene tratamiento?",
        answer:
          "El linfedema no siempre se revierte por completo, pero se controla de forma efectiva con terapia descongestiva, vendaje especializado, medias de compresión y cuidado estricto de la piel, lo que reduce la hinchazón y previene complicaciones como las infecciones repetidas.",
      },
      {
        question: "¿Por qué las personas con linfedema deben cuidar tanto la piel?",
        answer:
          "Porque el líquido linfático acumulado favorece las infecciones de la piel, y cada episodio de infección puede dañar aún más el sistema linfático ya comprometido, empeorando el linfedema. Por eso el cuidado diario de la piel es parte central del tratamiento.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento del linfedema"],
    relatedServices: ["s-curacion-heridas"],
    relatedSymptoms: ["sy-piernas-hinchadas"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/linfedema.jpg",
    seo: {
      title: "Linfedema | Angiólogo en Acapulco, Guerrero",
      description:
        "¿Pierna hinchada y piel endurecida? El Dr. González Arcos, Angiólogo en Acapulco, valora y trata el linfedema.",
      keywords: ["linfedema Acapulco", "pierna hinchada por líquido linfático", "angiólogo linfedema Guerrero"],
    },
  },
  {
    id: "d-ulceras-vasculares",
    slug: "ulceras-vasculares",
    name: "Úlceras Vasculares",
    technicalName: "Úlceras Vasculares de Miembros Inferiores",
    colloquialNames: ["llagas en las piernas", "heridas que no sanan por mala circulación"],
    description:
      "Las úlceras vasculares son heridas abiertas en la piel, generalmente de las piernas, que se originan por una circulación deficiente, ya sea venosa o arterial, y por eso tardan en cicatrizar con las medidas habituales. Su tratamiento depende de identificar si el origen es venoso, arterial o mixto, porque el manejo de cada tipo es distinto.",
    symptoms: [
      "Herida abierta en la pierna o el pie que no cicatriza en varias semanas",
      "Dolor variable según el tipo de úlcera, más intenso en las de origen arterial",
      "Piel alrededor de la herida con cambios de color",
      "Secreción o mal olor si la herida está infectada",
      "Bordes irregulares o con tejido poco saludable",
    ],
    causes: [
      "Insuficiencia venosa crónica no tratada",
      "Enfermedad arterial periférica",
      "Presión prolongada sobre la piel",
      "Traumatismos menores que no cicatrizan por una mala circulación de fondo",
    ],
    riskFactors: [
      "Insuficiencia venosa crónica de larga evolución",
      "Enfermedad arterial periférica",
      "Diabetes",
      "Inmovilidad prolongada",
      "Antecedente de úlceras previas",
    ],
    complications: [
      "Infección local o profunda",
      "Retraso importante en la cicatrización",
      "Necesidad de desbridamiento repetido",
      "Riesgo de amputación en úlceras arteriales avanzadas no tratadas",
    ],
    treatments: [
      "Curación avanzada de heridas con desbridamiento cuando es necesario",
      "Corrección del origen vascular, venoso o arterial, mediante el procedimiento indicado",
      "Uso de compresión graduada en úlceras de origen venoso",
      "Angioplastia periférica en úlceras de origen arterial",
      "Control de infección local",
    ],
    faqs: [
      {
        question: "¿Por qué una herida en la pierna no cicatriza aunque la mantengo limpia?",
        answer:
          "Si la herida no cicatriza a pesar de una limpieza adecuada, es probable que exista un problema de circulación de fondo, venoso o arterial, que impide que la piel reciba lo necesario para sanar. Por eso las úlceras vasculares requieren valorar la causa circulatoria, no solo curar la herida.",
      },
      {
        question: "¿Todas las úlceras en las piernas son iguales?",
        answer:
          "No. Las úlceras venosas suelen ser menos dolorosas y aparecer cerca del tobillo, mientras que las úlceras arteriales suelen doler más y ubicarse en los dedos o el borde del pie. El tratamiento depende de identificar correctamente el origen con una valoración vascular.",
      },
      {
        question: "¿Cuánto tiempo tardan en sanar las úlceras vasculares?",
        answer:
          "El tiempo varía mucho según el tipo de úlcera, su tamaño y si se corrige la causa circulatoria de fondo; puede ir de varias semanas a varios meses. Corregir el origen vascular, y no solo curar la herida superficialmente, mejora las probabilidades de una cicatrización completa.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de úlceras de origen vascular"],
    relatedServices: ["s-curacion-heridas"],
    relatedSymptoms: ["sy-ulceras-no-cierran", "sy-cambios-color-piel"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/ulceras-vasculares.jpg",
    seo: {
      title: "Úlceras Vasculares | Angiólogo en Acapulco",
      description:
        "Heridas en la pierna que no cierran pueden ser úlceras vasculares. Diagnóstico y curación con el Dr. González Arcos en Acapulco.",
      keywords: [
        "úlceras vasculares Acapulco",
        "heridas en la pierna que no cierran",
        "angiólogo curación de heridas Acapulco",
      ],
    },
  },
  {
    id: "d-tromboflebitis-superficial",
    slug: "tromboflebitis-superficial",
    name: "Tromboflebitis Superficial",
    technicalName: "Tromboflebitis Venosa Superficial",
    colloquialNames: ["vena inflamada", "flebitis"],
    description:
      "La tromboflebitis superficial es la inflamación de una vena superficial, generalmente en una pierna, provocada por la formación de un pequeño coágulo dentro de ella. Se manifiesta como un cordón duro, enrojecido y doloroso al tacto sobre el trayecto de la vena, casi siempre relacionado con várices preexistentes.",
    symptoms: [
      "Cordón duro y doloroso a lo largo de una vena superficial",
      "Enrojecimiento y calor local sobre la vena afectada",
      "Sensibilidad al tocar la zona",
      "Hinchazón leve alrededor de la vena inflamada",
    ],
    causes: [
      "Várices preexistentes",
      "Traumatismo local sobre una vena superficial",
      "Inmovilidad prolongada",
      "Uso prolongado de catéteres venosos superficiales",
    ],
    riskFactors: [
      "Presencia de várices",
      "Antecedente de tromboflebitis previa",
      "Embarazo",
      "Inmovilidad prolongada",
      "Alteraciones de la coagulación",
    ],
    complications: [
      "Extensión del coágulo hacia el sistema venoso profundo",
      "Recurrencia en otras venas superficiales si no se trata la insuficiencia venosa de fondo",
    ],
    treatments: [
      "Medias de compresión graduada",
      "Elevación de la pierna afectada",
      "Escleroterapia de la vena afectada una vez resuelta la fase aguda",
      "Doppler vascular para descartar extensión hacia el sistema venoso profundo",
    ],
    faqs: [
      {
        question: "¿La tromboflebitis superficial es lo mismo que la trombosis venosa profunda?",
        answer:
          "No. La tromboflebitis superficial afecta una vena justo debajo de la piel y es menos riesgosa, mientras que la trombosis venosa profunda ocurre en venas más internas y tiene mayor riesgo de complicarse con una embolia pulmonar. Un estudio de Doppler vascular ayuda a diferenciarlas con certeza.",
      },
      {
        question: "¿Qué debo hacer si noto un cordón duro y doloroso en una vena de la pierna?",
        answer:
          "Conviene acudir con un angiólogo para valorar si se trata de una tromboflebitis superficial y descartar, mediante Doppler vascular, que el coágulo se haya extendido hacia el sistema venoso profundo.",
      },
      {
        question: "¿La tromboflebitis superficial se puede prevenir?",
        answer:
          "Tratar oportunamente las várices, evitar la inmovilidad prolongada y usar medias de compresión cuando el angiólogo lo indique reduce el riesgo de que una vena superficial se inflame y forme un coágulo.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la enfermedad tromboembólica venosa"],
    relatedServices: ["s-escleroterapia", "s-doppler-vascular"],
    relatedSymptoms: ["sy-venas-visibles", "sy-dolor-pesadez-piernas", "sy-cambios-color-piel"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/tromboflebitis-superficial.jpg",
    seo: {
      title: "Tromboflebitis Superficial | Angiólogo Acapulco",
      description:
        "Vena inflamada, dura y dolorosa en la pierna: valoración de tromboflebitis superficial con el Dr. González Arcos en Acapulco.",
      keywords: [
        "tromboflebitis superficial Acapulco",
        "vena inflamada en la pierna",
        "angiólogo flebitis Acapulco",
      ],
    },
  },
  {
    id: "d-isquemia-arterial-aguda",
    slug: "isquemia-arterial-aguda",
    name: "Isquemia Arterial Aguda",
    technicalName: "Isquemia Arterial Aguda de Extremidad",
    colloquialNames: ["arteria tapada de repente", "pierna sin circulación de golpe"],
    description:
      "La isquemia arterial aguda es la interrupción súbita del flujo de sangre arterial hacia una extremidad, generalmente por un coágulo que obstruye la arteria de forma repentina. Provoca dolor intenso, frialdad y palidez que aparecen de golpe, y constituye una urgencia vascular real: sin restablecer el flujo en pocas horas, el tejido puede dañarse de forma irreversible.",
    symptoms: [
      "Dolor intenso y súbito en la extremidad",
      "Palidez o color azulado repentino de la piel",
      "Frialdad marcada de aparición brusca",
      "Debilidad o incapacidad para mover la extremidad",
      "Ausencia de pulso en la extremidad afectada",
    ],
    causes: [
      "Coágulo que se desprende del corazón y obstruye una arteria de la extremidad (embolia)",
      "Obstrucción súbita sobre una placa de arteriosclerosis ya existente (trombosis arterial)",
      "Traumatismo arterial",
    ],
    riskFactors: [
      "Arritmias cardiacas, como la fibrilación auricular",
      "Enfermedad arterial periférica previa",
      "Enfermedad arterial coronaria",
      "Tabaquismo",
      "Antecedente de placas de arteriosclerosis",
    ],
    complications: [
      "Daño muscular y nervioso irreversible",
      "Pérdida de la extremidad (amputación mayor)",
      "Riesgo de vida si no se atiende con rapidez",
    ],
    treatments: [
      "Atención inmediata en un servicio de urgencias, nunca ambulatoria ni programada",
      "Trombectomía para retirar el coágulo que obstruye la arteria",
      "Bypass vascular cuando se requiere una derivación arterial",
      "Manejo posterior de la causa de fondo para prevenir un nuevo episodio",
    ],
    faqs: [
      {
        question: "¿Cómo distingo la isquemia arterial aguda del dolor muscular común?",
        answer:
          "La isquemia arterial aguda se presenta de forma súbita, con dolor intenso, frialdad marcada, cambio de color de la piel y, en ocasiones, dificultad para mover la extremidad, a diferencia de un dolor muscular que suele relacionarse con el esfuerzo físico y no se acompaña de estos cambios. Ante estos signos hay que acudir de inmediato a urgencias.",
      },
      {
        question: "¿Qué tan rápido hay que actuar ante una isquemia arterial aguda?",
        answer:
          "Se considera una urgencia vascular verdadera: entre más tiempo pase sin restablecer el flujo de sangre, mayor es el riesgo de daño irreversible al tejido y de pérdida de la extremidad. Por eso debe atenderse de inmediato en un servicio de urgencias, nunca esperar a una consulta programada.",
      },
      {
        question: "¿La isquemia arterial aguda puede repetirse?",
        answer:
          "Sí, sobre todo si no se trata la causa de fondo, como una arritmia cardiaca o una enfermedad arterial periférica avanzada. Por eso, después de resolver la urgencia, el seguimiento vascular es importante para prevenir un nuevo episodio.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la isquemia arterial aguda"],
    relatedServices: ["s-trombectomia", "s-bypass-vascular"],
    relatedSymptoms: ["sy-claudicacion-intermitente", "sy-frialdad-palidez"],
    lastReviewed: "2026-09-24",
    image: "/enfermedades/isquemia-arterial-aguda.jpg",
    seo: {
      title: "Isquemia Arterial Aguda | Urgencia Vascular Acapulco",
      description:
        "Dolor súbito, frialdad y palidez en una extremidad son urgencia vascular. El Dr. González Arcos atiende isquemia arterial aguda en Acapulco.",
      keywords: ["isquemia arterial aguda Acapulco", "urgencia vascular Acapulco", "angiólogo urgencias Guerrero"],
    },
  },
];
