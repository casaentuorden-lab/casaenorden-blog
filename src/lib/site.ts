export const siteConfig = {
  name: "Casa en Orden",
  tagline: "Trucos y organización para una casa (y una vida) más simple",
  description:
    "Ideas prácticas, trucos y productos recomendados para organizar tu casa: cocina, armarios, baño y mucho más. Contenido pensado para leer desde el móvil.",
  // Cambia esta URL por el dominio real cuando lo tengas listo.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.casaenorden.com",
  locale: "es_ES",
};

export type SiteConfig = typeof siteConfig;
