import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal de afiliados de Amazon",
  description:
    "Información sobre el Programa de Afiliados de Amazon y cómo Casa en Orden utiliza enlaces de afiliado.",
};

export default function AvisoAfiliadosPage() {
  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brass">
        Aviso legal
      </p>
      <h1 className="font-serif text-3xl font-bold text-bottle sm:text-4xl">
        Aviso de afiliados de Amazon
      </h1>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-bottle/80 sm:text-lg">
        <p>
          {siteConfig.name} es participante en el Programa de Afiliados de
          Amazon EU, un programa de publicidad para afiliados diseñado para
          ofrecer a los sitios web un modo de obtener comisiones por
          publicidad, publicitando e incluyendo enlaces a Amazon.es (y otros
          dominios de Amazon aplicables).
        </p>

        <p>
          Esto significa que, cuando haces clic en algunos de los enlaces de
          este blog y realizas una compra en Amazon, {siteConfig.name} puede
          recibir una pequeña comisión por esa venta. Esta comisión{" "}
          <strong className="text-bottle">no supone ningún coste adicional</strong>{" "}
          para ti: el precio que pagas es exactamente el mismo que si
          hubieras llegado a Amazon por tu cuenta.
        </p>

        <h2 className="pt-2 font-serif text-xl font-bold text-bottle">
          ¿Cómo identificar estos enlaces?
        </h2>
        <p>
          Los artículos que contienen enlaces de afiliado incluyen un aviso
          visible al principio del texto. Además, los propios enlaces suelen
          ir acompañados de textos como "Ver precio en Amazon" o "Producto
          recomendado".
        </p>

        <h2 className="pt-2 font-serif text-xl font-bold text-bottle">
          Independencia editorial
        </h2>
        <p>
          Solo recomendamos productos que consideramos útiles, que hemos
          investigado o probado, o que responden genuinamente a la temática
          del artículo. La existencia de una comisión no influye en si un
          producto se recomienda o no.
        </p>

        <h2 className="pt-2 font-serif text-xl font-bold text-bottle">
          Precios y disponibilidad
        </h2>
        <p>
          Los precios y la disponibilidad de los productos mostrados en
          Amazon pueden cambiar en cualquier momento. Te recomendamos
          comprobar siempre el precio actual en la página del producto antes
          de comprar.
        </p>

        <p className="pt-4 text-sm text-bottle/60">
          Amazon y el logotipo de Amazon son marcas registradas de
          Amazon.com, Inc. o sus filiales.
        </p>
      </div>
    </Container>
  );
}
