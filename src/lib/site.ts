export const siteConfig = {
  name: "Casa en Orden",
  tagline: "Trucos y organización para una casa (y una vida) más simple",
  description:
    "Ideas prácticas, trucos y productos recomendados para organizar tu casa: cocina, armarios, baño y mucho más. Contenido pensado para leer desde el móvil.",
  // Dominio real de despliegue en Vercel. Si en el futuro se conecta un
  // dominio propio, actualiza este valor (o la env var NEXT_PUBLIC_SITE_URL).
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://casaenorden-blog.vercel.app",
  locale: "es_ES",
};

export type SiteConfig = typeof siteConfig;
