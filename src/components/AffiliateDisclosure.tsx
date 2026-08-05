import Link from "next/link";

export default function AffiliateDisclosure() {
  return (
    <p className="rounded-xl border border-brass/30 bg-brass/10 px-4 py-3 text-sm text-bottle/80">
      Este artículo puede contener enlaces de afiliado de Amazon. Si compras a
      través de ellos, {" "}
      <span className="font-semibold">Casa en Orden</span> puede recibir una
      pequeña comisión sin coste adicional para ti. Más información en
      nuestro{" "}
      <Link href="/aviso-afiliados" className="underline hover:text-brass">
        aviso legal de afiliados
      </Link>
      .
    </p>
  );
}
