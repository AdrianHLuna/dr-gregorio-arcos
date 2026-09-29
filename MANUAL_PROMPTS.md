# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dr. Gregorio Alberto González Arcos — Angiología, Cirugía Vascular y Endovascular
**Ciudad:** Acapulco de Juárez, Guerrero (Torre Médica Santa)
**Especialidad:** Angiólogo, con subespecialidad en Urgencias Médico-Quirúrgicas

**Nota de discreción clínica:** varias enfermedades y síntomas de este catálogo involucran heridas, úlceras y cambios de color en la piel. Todos los prompts de úlceras/heridas están redactados para verse **clínicas y educativas, nunca gráficas ni explícitas**: primeros planos discretos de vendaje, curación en proceso o diagramas anatómicos esquemáticos, jamás tejido necrótico, sangre abundante o heridas abiertas en detalle crudo — el mismo criterio de discreción usado en el manual de Gustavo Álvarez para temas sensibles. Cada prompt representa visualmente el tema real que describe (nunca una escena genérica de "doctor con tablet" desconectada del padecimiento, síntoma o procedimiento específico).

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/...jpg`).

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud y sitios web de Angiología y Cirugía Vascular de alta gama.
Tono: Preciso, discreto y de autoridad clínica (Angiología, Cirugía Vascular y Endovascular), sobrio y editorial — nunca explícito ni gráfico.
Estilo: Fotorrealismo y renders 3D de anatomía vascular (venas y arterias) para enfermedades y estudios; fotografía clínica de alta gama para procedimientos; fotografía discreta de escenas cotidianas de paciente para síntomas.
Convención de color anatómica OBLIGATORIA (viene del logo real de la marca): las ARTERIAS y todo lo relacionado con circulación arterial se representan siempre en rojo (#AF3635); las VENAS y todo lo relacionado con circulación venosa se representan siempre en azul (#4B63A8). Nunca invertir esta convención.
Restricciones: Cero heridas abiertas explícitas, tejido necrótico, sangre abundante o contenido gráfico/desagradable — usar vendajes, curaciones en proceso, diagramas anatómicos esquemáticos o encuadres discretos en su lugar. Prohibidos hologramas, neones, HUDs interactivos o elementos de ciencia ficción. Cero palabras, texto, marcas de agua, firmas o números.
Formato: JPG horizontal de aspecto 16:9 (--ar 16:9 --v 6.0).

Instrucciones generales de color y estilo:
- Lighting: Clean, bright clinical studio lighting with deep, moody shadows for a bold editorial feel.
- Color Palette: Ink Black (#222220), Navy (#1C253F), Arterial Red (#AF3635), Venous Blue (#4B63A8), Steel Blue (#384A7E), Deep Garnet (#581B1B), Muted Violet (#46437A), Pale Lavender (#D1CEFB).
- Composition: Focused clinical macro or bold asymmetric editorial framing, strong single light source.
- Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style --ar 16:9 --v 6.0
- Negative Prompt: hologram, sci-fi, futuristic, neon, glowing digital UI, hud, blueprints, user interface, text, words, letters, watermark, signature, explicit gore, open wound close-up, necrotic tissue, excessive blood.
```

---

## 🩺 SECCIÓN 1: PROMPTS PARA ENFERMEDADES VASCULARES

### 1. Insuficiencia Venosa Crónica (`public/enfermedades/insuficiencia-venosa-cronica.jpg`)
```text
3D anatomical cross-section illustration of a leg vein showing a damaged, incompetent one-way valve failing to close, with blood pooling and backflowing below it, clean educational medical textbook style.

Lighting: Clean, bright clinical studio lighting, deep shadow background.
Color Palette: Venous Blue (#4B63A8), Steel Blue (#384A7E), Ink Black (#222220), Pale Lavender (#D1CEFB) accents.
Composition: Vertical cross-section of the vein wall and valve, focused macro framing.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood pooling outside vessel, gore, arterial red color used incorrectly.
```

### 2. Várices — Venas Varicosas (`public/enfermedades/varices.jpg`)
```text
Photorealistic close-up clinical photograph of the back of a person's calf showing visibly bulging, twisted blue-toned varicose veins beneath the skin, natural skin texture, tasteful discreet medical photography framing from knee to ankle only.

Lighting: Soft clinical daylight from the side, subtle shadow definition.
Color Palette: Venous Blue (#4B63A8) vein tones against natural skin, Steel Blue (#384A7E) shadow accents.
Composition: Medium close-up of the calf, no face visible.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI look, blood, wounds, gore.
```

### 3. Trombosis Venosa Profunda (`public/enfermedades/trombosis-venosa-profunda.jpg`)
```text
3D anatomical illustration of a deep leg vein with a dark red-blue clot fully obstructing the vessel lumen, surrounding tissue subtly inflamed, clean clinical cross-section, urgent but non-graphic medical textbook style.

Lighting: Focused clinical spotlighting on the obstructed vein segment.
Color Palette: Venous Blue (#4B63A8) vessel walls, Deep Garnet (#581B1B) clot mass, Ink Black (#222220) background.
Composition: Longitudinal cross-section of the deep vein, macro framing.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, excessive blood, gore.
```

### 4. Enfermedad Arterial Periférica (`public/enfermedades/enfermedad-arterial-periferica.jpg`)
```text
3D anatomical cross-section illustration of a leg artery narrowed by thick atherosclerotic plaque buildup along the inner wall, reducing the open lumen, clean clinical educational style.

Lighting: Bright clean laboratory lighting with a focused highlight on the narrowed segment.
Color Palette: Arterial Red (#AF3635) vessel walls and blood, Steel Blue (#384A7E) surrounding tissue, Ink Black (#222220) background.
Composition: Longitudinal cross-section of the artery, macro clinical framing.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood outside vessel, gore.
```

### 5. Aneurisma de Aorta Abdominal (`public/enfermedades/aneurisma-aorta-abdominal.jpg`)
```text
3D anatomical illustration of the abdominal aorta showing a localized balloon-like bulging dilation in the vessel wall, clean sterile organic tissue style, clinical vascular textbook illustration.

Lighting: Focused clinical spotlighting on the dilated aortic segment.
Color Palette: Arterial Red (#AF3635) aortic wall and blood, Ink Black (#222220) background, subtle Steel Blue (#384A7E) surrounding structures.
Composition: Sagittal abdominal anatomical view centered on the dilated segment.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore, rupture depiction.
```

### 6. Pie Diabético (`public/enfermedades/pie-diabetico.jpg`)
```text
Discreet clinical photograph of a healthcare provider's gloved hands gently examining a patient's foot, checking skin and inspecting a small clean bandaged area, calm consultation-room setting, no visible open wound.

Lighting: Bright clean clinical exam room lighting.
Color Palette: Navy (#1C253F) gloves and linens, Arterial Red (#AF3635) subtle accent on equipment, Clinical White.
Composition: Medium close-up on hands and foot, tasteful and non-graphic.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, open wound close-up, necrotic tissue, blood, gore.
```

### 7. Linfedema (`public/enfermedades/linfedema.jpg`)
```text
3D anatomical illustration of the lymphatic vessel network in a leg showing fluid buildup and swelling in the surrounding soft tissue due to blocked lymphatic drainage, clean educational cross-section style.

Lighting: Bright clean laboratory lighting with soft highlight on the swollen tissue layer.
Color Palette: Pale Lavender (#D1CEFB) lymphatic fluid and vessels, Steel Blue (#384A7E) tissue layers, Ink Black (#222220) background.
Composition: Cross-section of the lower leg, macro clinical framing.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 8. Úlceras Vasculares (`public/enfermedades/ulceras-vasculares.jpg`)
```text
Discreet clinical photograph of a nurse's gloved hands carefully applying a clean fresh compression bandage wrap around a lower leg, calm clinical wound-care setting, bandage fully covers the treated area, no open wound visible.

Lighting: Bright clean clinical lighting.
Color Palette: Navy (#1C253F) gloves, Venous Blue (#4B63A8) bandage accent tone, Clinical White wrap.
Composition: Medium close-up on the hands wrapping the bandage.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, open wound, necrotic tissue, blood, gore, graphic content.
```

### 9. Tromboflebitis Superficial (`public/enfermedades/tromboflebitis-superficial.jpg`)
```text
3D anatomical illustration of a superficial leg vein with visible inflammation and a small clot along its length, the vein wall shown reddened and swollen against the skin's underside, clean educational medical style.

Lighting: Focused clinical spotlighting along the inflamed vein segment.
Color Palette: Venous Blue (#4B63A8) vein, Deep Garnet (#581B1B) inflamed clot segment, Ink Black (#222220) background.
Composition: Close-up longitudinal view of the superficial vein beneath the skin layer.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, blood, gore.
```

### 10. Isquemia Arterial Aguda (`public/enfermedades/isquemia-arterial-aguda.jpg`)
```text
3D anatomical illustration of a leg artery suddenly and completely blocked by a dark embolic clot, tissue beyond the blockage shown pale and desaturated to convey lost blood flow, clean urgent clinical textbook style.

Lighting: Dramatic focused clinical spotlighting, deep shadow contrast to convey urgency.
Color Palette: Arterial Red (#AF3635) healthy vessel segment, Deep Garnet (#581B1B) clot, desaturated pale gray-blue tissue beyond the blockage.
Composition: Longitudinal cross-section of the artery, macro clinical framing.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, neon, text, watermark, signature, excessive blood, gore.
```

---

## 🏥 SECCIÓN 2: PROMPTS PARA SERVICIOS Y PROCEDIMIENTOS VASCULARES

### 1. Escleroterapia (`public/servicios/escleroterapia.jpg`)
```text
Clinical photorealistic close-up photo of a gloved hand performing a sclerotherapy injection with a fine needle into a visible varicose vein on a calf, clean modern outpatient clinic setting, tasteful medical framing.

Lighting: Clean, bright clinical studio lighting.
Color Palette: Navy (#1C253F) gloves, Venous Blue (#4B63A8) vein tone, Clinical White surroundings.
Composition: Close-up on the calf and the injecting hand, no face visible.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon, gore.
```

### 2. Safenectomía — Cirugía de Várices (`public/servicios/safenectomia.jpg`)
```text
Clinical photorealistic photograph of a surgical team performing a minor vein-stripping leg surgery in a modern operating room, sterile blue drapes covering all but the surgical field, focused overhead surgical light.

Lighting: Bright focused operating theater lighting.
Color Palette: Navy (#1C253F) surgical drapes, Venous Blue (#4B63A8) accent tones, Clinical White, Steel Blue (#384A7E).
Composition: Wide clinical shot of the surgical team and equipment, surgical field appropriately draped and non-explicit.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon, gore, explicit open incision detail.
```

### 3. Angioplastia Periférica (`public/servicios/angioplastia-periferica.jpg`)
```text
3D medical rendering of a balloon angioplasty catheter inflating inside a narrowed leg artery, expanding the vessel wall and pushing plaque outward, sterile schematic device illustration.

Lighting: Studio spotlighting with soft red vascular reflections.
Color Palette: Arterial Red (#AF3635) vessel and blood, Metallic Silver catheter device, Ink Black (#222220) background.
Composition: Cross-section macro view of the catheter inside the artery.
Suffixes: realistic medical CGI, 8k render, unreal engine 5 style --ar 16:9 --v 6.0
Negative Prompt: blood pooling, text, watermark, signature, sci-fi, neon, HUD, gore.
```

### 4. Bypass Vascular — Derivación Arterial (`public/servicios/bypass-vascular.jpg`)
```text
3D medical illustration of a vascular bypass graft tube connecting two segments of a leg artery around a blocked section, sterile anatomical schematic render showing blood flow rerouted through the graft.

Lighting: Clean studio spotlighting, red vascular accents.
Color Palette: Arterial Red (#AF3635) native artery and blood flow, Steel Blue (#384A7E) graft tube, Ink Black (#222220) background.
Composition: Side anatomical view of the bypass graft and surrounding artery.
Suffixes: realistic medical CGI, 8k render, unreal engine 5 style --ar 16:9 --v 6.0
Negative Prompt: blood pooling, text, watermark, signature, sci-fi, neon, HUD, gore.
```

### 5. Tratamiento Endovascular de Aneurisma — EVAR (`public/servicios/evar.jpg`)
```text
3D medical rendering of a stent-graft endoprosthesis deployed inside a dilated abdominal aortic segment, sealing off the aneurysm sac from blood flow, sterile schematic device illustration.

Lighting: Studio spotlighting with soft red vascular reflections.
Color Palette: Arterial Red (#AF3635) aortic wall and blood flow, Metallic Silver stent-graft device, Ink Black (#222220) background.
Composition: Cross-section anatomical view of the aorta with the deployed graft.
Suffixes: realistic medical CGI, 8k render, unreal engine 5 style --ar 16:9 --v 6.0
Negative Prompt: blood pooling, text, watermark, signature, sci-fi, neon, HUD, gore.
```

### 6. Trombectomía (`public/servicios/trombectomia.jpg`)
```text
3D medical rendering of a thrombectomy catheter device capturing and removing a dark clot from inside a blood vessel, sterile schematic device illustration, urgent but clean clinical style.

Lighting: Focused clinical spotlighting on the catheter tip and clot.
Color Palette: Venous Blue (#4B63A8) vessel wall, Deep Garnet (#581B1B) clot, Metallic Silver catheter device.
Composition: Macro cross-section view of the catheter retrieving the clot inside the vessel.
Suffixes: realistic medical CGI, 8k render, unreal engine 5 style --ar 16:9 --v 6.0
Negative Prompt: blood pooling, text, watermark, signature, sci-fi, neon, HUD, gore.
```

### 7. Curación Avanzada de Heridas y Pie Diabético (`public/servicios/curacion-avanzada-heridas.jpg`)
```text
Discreet clinical photograph of a healthcare provider's gloved hands applying a clean specialized wound dressing to a patient's foot, organized wound-care tray with sterile supplies visible nearby, calm and professional clinical setting.

Lighting: Bright clean clinical exam room lighting.
Color Palette: Navy (#1C253F) gloves, Venous Blue (#4B63A8) tray accents, Clinical White dressing and surfaces.
Composition: Medium close-up on the hands and foot, fully non-graphic.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, open wound close-up, necrotic tissue, blood, gore.
```

### 8. Doppler Vascular — Ultrasonido Doppler (`public/servicios/doppler-vascular.jpg`)
```text
Clinical photorealistic photo of a vascular ultrasound probe being used on a patient's leg, a Doppler blood-flow waveform and color-flow image visible on a nearby monitor, modern outpatient clinic setting.

Lighting: Clean, bright clinical studio lighting with monitor glow.
Color Palette: Navy (#1C253F) equipment, Arterial Red (#AF3635) and Venous Blue (#4B63A8) color-flow waveform on the monitor, Clinical White.
Composition: Medium shot including the probe, the leg, and the monitor screen.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon, gore.
```

### 9. Ablación Endovenosa con Láser o Radiofrecuencia (`public/servicios/ablacion-endovenosa.jpg`)
```text
3D medical rendering of a thin endovenous laser or radiofrequency catheter fiber inserted inside a diseased leg vein, emitting a controlled thermal energy glow that seals the vein wall shut, sterile schematic device illustration.

Lighting: Studio spotlighting with a warm energy glow at the catheter tip.
Color Palette: Venous Blue (#4B63A8) vessel wall, warm amber-red energy glow at the fiber tip, Metallic Silver catheter.
Composition: Macro cross-section view of the catheter inside the vein.
Suffixes: realistic medical CGI, 8k render, unreal engine 5 style --ar 16:9 --v 6.0
Negative Prompt: blood pooling, text, watermark, signature, sci-fi, neon overload, HUD, gore.
```

### 10. Amputación Menor por Complicación Vascular (`public/servicios/amputacion-menor.jpg`)
```text
Discreet clinical photograph of a surgical team in a modern operating room preparing sterile instruments and drapes for a minor foot procedure, focused overhead surgical light, surgical field fully and appropriately draped, non-explicit.

Lighting: Bright focused operating theater lighting.
Color Palette: Navy (#1C253F) surgical drapes, Arterial Red (#AF3635) subtle accent on equipment, Clinical White, Metallic Silver instruments.
Composition: Wide clinical shot of the surgical team and instrument tray, no exposed surgical site detail.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, gore, explicit surgical site detail.
```

---

## 🩹 SECCIÓN 3: PROMPTS PARA SÍNTOMAS VASCULARES

### 1. Piernas Hinchadas — Edema en Piernas (`public/sintomas/piernas-hinchadas.jpg`)
```text
Photorealistic photo of a person sitting on the edge of a sofa in the evening, gently pressing a finger into the skin of their swollen ankle and looking down with a concerned expression, shoes removed nearby, calm home setting.

Lighting: Warm soft evening indoor lighting.
Color Palette: Navy (#1C253F) clothing, Venous Blue (#4B63A8) subtle accents, warm neutral home tones.
Composition: Medium shot focused on the hand, ankle and posture, no face close-up needed.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore.
```

### 2. Dolor o Pesadez en las Piernas (`public/sintomas/dolor-pesadez-piernas.jpg`)
```text
Photorealistic photo of a person lying on a sofa with both legs elevated on a cushion, eyes closed, hands resting on their thighs as if relieving heavy, tired legs after a long day, calm home environment.

Lighting: Soft warm indoor lamp lighting.
Color Palette: Navy (#1C253F) cushions, Venous Blue (#4B63A8) throw blanket accent, warm neutral tones.
Composition: Medium wide shot of the person reclined with legs elevated.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore.
```

### 3. Venas Visibles y Abultadas (`public/sintomas/venas-visibles.jpg`)
```text
Photorealistic close-up clinical photograph of the side of a person's calf showing visible bluish, thread-like spider veins and slightly raised varicose veins under natural skin texture, tasteful discreet medical photography framing.

Lighting: Soft natural daylight from the side.
Color Palette: Venous Blue (#4B63A8) vein tones against natural skin, neutral background.
Composition: Medium close-up of the calf only, no face visible.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, blood, gore.
```

### 4. Calambres Nocturnos en las Piernas (`public/sintomas/calambres-nocturnos.jpg`)
```text
Photorealistic shot of a person sitting up suddenly in bed at night, one hand gripping their calf with a wincing, pained expression as if a sudden cramp just woke them, soft bedside lamp light, quiet bedroom environment.

Lighting: Soft warm night lamp lighting, deep shadows.
Color Palette: Navy (#1C253F) bed linens, Venous Blue (#4B63A8) accent pillow, warm lamp glow.
Composition: Medium shot centered on the seated figure gripping the calf.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, gore.
```

### 5. Cambios de Color en la Piel de las Piernas (`public/sintomas/cambios-color-piel.jpg`)
```text
Photorealistic close-up clinical photograph of the lower leg and ankle area showing a natural brownish skin discoloration patch near the ankle against surrounding normal skin tone, tasteful discreet dermatological framing.

Lighting: Bright even clinical lighting, no harsh shadows.
Color Palette: Deep Garnet (#581B1B) discoloration tone, natural skin tones, neutral background.
Composition: Medium close-up of the ankle and lower leg only.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, open wound, blood, gore.
```

### 6. Úlceras o Heridas que No Cierran (`public/sintomas/ulceras-no-cierran.jpg`)
```text
Discreet clinical photograph of a healthcare provider's gloved hands carefully checking a neatly bandaged lower leg wound during a follow-up visit, clean consultation room setting, bandage fully covers the area, no open wound visible.

Lighting: Bright clean clinical lighting.
Color Palette: Navy (#1C253F) gloves, Clinical White bandage, Venous Blue (#4B63A8) subtle accent.
Composition: Medium close-up on the hands and bandaged leg.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, open wound, necrotic tissue, blood, gore, graphic content.
```

### 7. Frialdad o Palidez en Manos o Pies (`public/sintomas/frialdad-palidez.jpg`)
```text
Photorealistic photo of a person at home wrapping both hands around a warm mug while wearing thick socks near a heater, visibly pale fingertips, cozy indoor setting suggesting persistent coldness in the extremities.

Lighting: Warm ambient indoor lighting contrasted with cool pale skin tones.
Color Palette: Navy (#1C253F) sweater, Steel Blue (#384A7E) sock accents, warm mug tones.
Composition: Medium close-up on the hands and mug, feet visible in frame.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore.
```

### 8. Dolor al Caminar que Mejora con el Reposo — Claudicación Intermitente (`public/sintomas/claudicacion-intermitente.jpg`)
```text
Photorealistic photo of a person pausing mid-walk on a park path, one hand pressed against their calf with a strained expression, clearly stopping to rest, outdoor daylight setting.

Lighting: Natural bright outdoor daylight.
Color Palette: Navy (#1C253F) activewear, Arterial Red (#AF3635) subtle accent on clothing, natural outdoor greens and neutrals.
Composition: Medium shot of the person paused mid-stride, hand on calf.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore.
```

### 9. Hormigueo o Adormecimiento en las Extremidades (`public/sintomas/hormigueo-adormecimiento.jpg`)
```text
Photorealistic close-up photo of a person gently shaking and flexing their bare foot while seated, subtle puzzled expression, as if trying to relieve a tingling, numb sensation, calm home setting.

Lighting: Soft natural indoor daylight.
Color Palette: Steel Blue (#384A7E) clothing accents, warm neutral home tones.
Composition: Medium close-up on the foot and lower leg, seated posture.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore.
```

### 10. Hinchazón Repentina y Dolor en una Sola Pierna (`public/sintomas/hinchazon-repentina-una-pierna.jpg`)
```text
Photorealistic photo of a person sitting anxiously on a chair, both hands cradling one visibly more swollen calf than the other, concerned urgent expression, home setting suggesting they just noticed the sudden change.

Lighting: Bright clean indoor lighting with slightly dramatic contrast to convey urgency.
Color Palette: Arterial Red (#AF3635) subtle warning accent in clothing, Navy (#1C253F) furniture tones.
Composition: Medium shot focused on the hands cradling the swollen leg.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, gore, blood.
```
