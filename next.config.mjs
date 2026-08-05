/** @type {import('next').NextConfig} */
const nextConfig = {
  // "output: export" solo se activa en el build de producción: en "next dev"
  // no aporta nada y las rutas de metadatos dinámicas (sitemap.ts) devuelven
  // un 500 en modo desarrollo si está activo (bug conocido de Next.js, ver
  // https://github.com/vercel/next.js/issues/59136).
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
