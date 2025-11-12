# Landing Page con Next.js

Sitio web landing page profesional construido con Next.js, TypeScript y Tailwind CSS.

## Características

- **Home**: Landing page con 4 bloques de contenido
  - Hero Banner: Sección principal con llamado a la acción
  - Flip Cards: 3 tarjetas con efecto flip al pasar el mouse
  - Four Cards: Sección con 4 tarjetas de servicios
  - Formulario de Contacto: Para agendar servicios con fecha

- **Páginas adicionales**:
  - Productos
  - Capacitación
  - Soporte
  - Blog (con contenido desde archivos Markdown)

## Instalación

```bash
cd landing-page
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Blog

Los artículos del blog se encuentran en `content/blog/` como archivos Markdown.

### Estructura de un artículo:

```markdown
---
title: "Título del artículo"
date: "2025-11-10"
excerpt: "Descripción breve"
author: "Nombre del autor"
---

# Contenido del artículo

Tu contenido aquí...
```

Los artículos se renderizan en tiempo de compilación (Static Site Generation).

## Producción

```bash
npm run build
npm start
```

## Tecnologías

- Next.js 15
- TypeScript
- Tailwind CSS
- Grommet (UI Component Library)
- Grommet Icons
- React Markdown
- Gray Matter
- Styled Components
