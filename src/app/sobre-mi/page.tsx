import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce la historia detrás de Casa en Orden: por qué escribo sobre organización del hogar y qué encontrarás en el blog.",
};

export default function SobreMiPage() {
  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brass">
        Sobre mí
      </p>
      <h1 className="font-serif text-3xl font-bold text-bottle sm:text-4xl">
        Hola, soy la persona detrás de {siteConfig.name}
      </h1>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-bottle/80 sm:text-lg">
        <p>
          Empecé {siteConfig.name} porque, como en tantas casas, el caos de
          cajones, armarios y despensa se me había ido de las manos. No soy
          arquitecta de interiores ni experta en minimalismo: soy alguien a
          quien le gusta que las cosas tengan su sitio y que encontrarlas no
          suponga un drama antes de salir de casa.
        </p>
        <p>
          Aquí comparto los trucos, sistemas y productos que de verdad me han
          funcionado —probados en una casa real, con presupuesto real y sin
          reformas de por medio—. Nada de ideas imposibles de mantener: solo
          soluciones sencillas que se quedan.
        </p>
        <p>
          Muchas de las fotos e ideas que ves aquí nacen de mi tablero de
          Pinterest, donde guardo inspiración a diario. Si llegaste desde
          allí, ¡bienvenida! Este blog es la versión con pasos concretos de
          todo lo que suelo guardar para "algún día".
        </p>
        <p>
          Algunos artículos incluyen enlaces de afiliado de Amazon hacia los
          productos que menciono. Puedes leer todos los detalles en el{" "}
          <a
            href="/aviso-afiliados"
            className="font-semibold text-brass-dark underline hover:text-brass"
          >
            aviso legal de afiliados
          </a>
          .
        </p>
      </div>
    </Container>
  );
}
