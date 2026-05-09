@AGENTS.md

# Bruma Café — Brand Context

## Marca

Cafetería de especialidad / estudio / refugio urbano en Montevideo.
Antes fuimos Cardenal Carrasco. Hoy somos una marca 100% propia y local.

**Tagline:** *La pausa que el día necesita*

**Narrativa:** Un estudio donde el diseño y la calidez conviven. Donde la taza de café no es el producto sino la excusa para detenerse.

**Voz de marca:** Slow living, artesanal, cálida, editorial, auténtica. Sin pretensión.

---

## Tipografía — Grupo A: Clásico Artesanal

| Clase Tailwind | Fuente | Variable CSS | Uso |
|---|---|---|---|
| `font-heading` | **Playfair Display** (serif) | `--font-playfair` | Titulares, nombre de marca, encabezados de sección |
| `font-body` | **Source Sans Pro** (sans-serif) | `--font-source-sans` | Cuerpo de texto en toda la web, etiquetas de producto |
| `font-accent` | **Source Sans Pro** (sans-serif) | `--font-source-sans` | Micro-copys, etiquetas, metadata (misma que body) |
| `font-script` | **Pinyon Script** (cursive) | `--font-pinyon` | Detalles decorativos — máximo 2-3 palabras, nunca en bloques |

**Import:** `app/layout.tsx` via `next/font/google`

---

## Paleta de Color

| Token | Hex | Uso |
|---|---|---|
| `crema` | `#F7F2EC` | Fondo principal |
| `crema-dark` | `#EDE5DA` | Fondo secundario, placeholders, separadores |
| `palta` | `#A9CB5A` | Acentos, CTA subrayados, tags, hover states |
| `palta-dark` | `#8FB843` | Hover de botones primarios |
| `salvia` | `#4A6741` | Botones primarios, fondos de sección oscuros |
| `nude` | `#C9A98A` | Acentos secundarios |
| `arcilla` | `#D4B8A5` | Líneas divisorias suaves |
| `carbon` | `#2D2D2D` | Texto principal, headings |
| `carbon-light` | `#6B6B6B` | Texto de cuerpo, párrafos |
| `carbon-lighter` | `#9B9B9B` | Metadatos, micro-copys, textos desactivados |
| `olive` | `#5E6B4D` | Acentos alternativos |
| `olive-light` | `#8B9A6B` | Fondos suaves |

Definidas en `app/globals.css` dentro del bloque `@theme`.

---

## Dirección de Diseño

- **Estilo:** Warm minimalism, editorial, boutique, slow-living
- **Referencias:** Kinfolk, Scandinavian café branding, Japanese café minimalism
- **Fondo:** siempre `bg-crema` (#F7F2EC)
- **Espaciado:** Extremo. Sections con `py-24` o `py-32`. Nada amontonado.
- **Layouts:** Asimétricos, sin cuadrículas estándar de 2 columnas. Texto breve intercalado con imágenes.
- **CTA minimalista:** Texto subrayado en `text-palta` con `underline-offset-8`, nunca botón cuando es CTA secundario.
- **Sin glassmorphism, sin animaciones exageradas, sin vibras de tech startup.**

---

## Stack Técnico

- **Framework:** Next.js 16.2.4 (App Router)
- **React:** 19.2.4
- **Estilos:** Tailwind CSS v4 (CSS-based config en `globals.css`)
- **Fuentes:** `next/font/google`
- **Sin librerías UI externas.** Todo custom.
- **Componentes compartidos:** `app/components/` — Navbar, Footer, Hero, Mission, Gallery, Reviews, ScrollReveal, WhatsAppButton
