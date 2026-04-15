# ACORVI — Sitio Web Oficial

Sitio web de la agencia ACORVI, construido con Next.js 14 + Tailwind CSS.

## Stack Técnico

- **Framework:** Next.js 14 (App Router)
- **Estilos:** Tailwind CSS
- **Lenguaje:** TypeScript
- **Deploy:** Vercel

## Secciones Implementadas

1. **Navbar** — Fija, responsive, con CTA
2. **Hero** — Headline + stats + widget animado
3. **Servicios** — 3 cards: Video Automation, Flujos IA, Marketing
4. **Demo** — Pipeline visual con terminal live log
5. **Proceso** — 4 pasos: Diagnóstico → Diseño → Implementación → Resultados
6. **Sobre Nosotros** — Historia + valores + tech stack
7. **Portfolio** — Grid preparado para casos de estudio
8. **Testimonios** — 3 testimoniales con métricas de resultado
9. **Contacto** — Formulario + WhatsApp CTA + FAQ
10. **Footer** — Links + redes sociales

## Setup Local

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev
# → http://localhost:3000

# Build producción
npm run build

# Previsualizar producción
npm start
```

## Deploy en Vercel

### Opción 1: CLI (recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login (primera vez)
vercel login

# Deploy a preview
vercel

# Deploy a producción
vercel --prod
```

### Opción 2: GitHub + Vercel Dashboard

1. Pushear este código a GitHub:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/acorvi-website.git
   git push -u origin master
   ```

2. Ir a [vercel.com](https://vercel.com)
3. "New Project" → importar el repo de GitHub
4. Framework: Next.js (auto-detectado)
5. Deploy

### Variables de Entorno (Opcional)

Para conectar formulario de contacto a un backend real, agregar en Vercel:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=521234567890
NEXT_PUBLIC_CONTACT_EMAIL=hola@acorvi.com
```

## Personalización

### Número de WhatsApp

En todos los componentes, buscar `1234567890` y reemplazar con el número real de ACORVI.

### Colores

Los colores de marca están en `tailwind.config.ts`:

```ts
brand: {
  blue: "#1E40AF",      // Principal
  "blue-light": "#3B82F6",
  red: "#DC2626",       // Acento
  "red-light": "#EF4444",
  green: "#16A34A",     // CTAs
  "green-light": "#22C55E",
}
```

### Contenido

- **Portfolio:** Editar `src/components/Portfolio.tsx` → agregar screenshots/links reales
- **Testimonios:** Editar `src/components/Testimonials.tsx` → reemplazar con testimoniales reales
- **Sobre Nosotros:** Editar `src/components/About.tsx` → actualizar estadísticas reales

## QA Checklist

- [ ] Responsive en móvil (375px, 390px, 414px)
- [ ] Responsive en tablet (768px)
- [ ] Responsive en desktop (1280px+)
- [ ] Navbar sticky funciona
- [ ] Smooth scroll a secciones
- [ ] Formulario de contacto envía a WhatsApp
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 90
- [ ] Lighthouse SEO > 90
- [ ] Meta tags correctos
- [ ] No errores en consola

## Estructura del Proyecto

```
acorvi-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout + metadata SEO
│   │   ├── page.tsx        # Página principal
│   │   └── globals.css     # Estilos globales + animaciones
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Demo.tsx
│       ├── Process.tsx
│       ├── About.tsx
│       ├── Portfolio.tsx
│       ├── Testimonials.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```
