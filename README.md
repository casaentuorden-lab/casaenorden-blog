# Casa en Orden

Blog estático (Next.js App Router + Tailwind CSS) de trucos y organización del hogar, en español, con enlaces de afiliado de Amazon. Sin base de datos ni backend: los artículos son archivos Markdown.

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Añadir un artículo nuevo

Crea un archivo `.md` en `content/posts/` con este frontmatter:

```md
---
title: "Título del artículo"
description: "Descripción corta para las tarjetas y el SEO."
date: "2026-08-05"
image: "/images/posts/mi-imagen.jpg"
category: "Armarios"
---

Contenido en Markdown...

[Ver precio en Amazon](ENLACE-AFILIADO-AQUI)
```

El slug de la URL sale del nombre de archivo (`mi-articulo.md` → `/posts/mi-articulo`). No hace falta tocar ningún otro archivo: la portada, el sitemap y las páginas de artículo se generan solos.

Sustituye cada `ENLACE-AFILIADO-AQUI` por tu enlace real de Amazon Afiliados cuando lo tengas.

## Imágenes

Las imágenes de los artículos van en `public/images/posts/`. El artículo de ejemplo usa una ilustración `.svg` de marcador de posición (`cocina-pequena.svg`) — sustitúyela por una foto real (`.jpg`/`.png`) cuando la tengas; solo tienes que apuntar el campo `image` del frontmatter al nuevo archivo.

## Antes de publicar

- Cambia `NEXT_PUBLIC_SITE_URL` (o el valor por defecto en `src/lib/site.ts`) por tu dominio real: lo usan el SEO, Open Graph y el sitemap.
- Revisa el texto de `src/app/aviso-afiliados/page.tsx` y `src/app/sobre-mi/page.tsx`.

## Build de producción (exportación estática)

```bash
npm run build
```

`next.config.mjs` tiene `output: "export"`, así que el resultado queda en la carpeta `out/`: HTML/CSS/JS estático, listo para subir a cualquier hosting (Netlify, GitHub Pages, S3, cPanel...) sin necesidad de un servidor Node.

## Nota sobre este entorno

Este proyecto se generó en un entorno sin Node.js/npm instalado, así que no fue posible ejecutar `npm install` ni `npm run build` para verificarlo en vivo. La estructura sigue los patrones estándar de Next.js 14 (App Router) + Tailwind 3, pero conviene que ejecutes `npm install && npm run dev` como primer paso y me avises si algo no arranca.
