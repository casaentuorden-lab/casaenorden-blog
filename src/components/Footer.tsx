import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-bone/10 bg-bottle text-bone">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-serif text-lg font-bold">{siteConfig.name}</p>
          <p className="mt-1 max-w-sm text-sm text-bone/75">
            {siteConfig.tagline}.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/sobre-mi" className="text-bone/85 hover:text-brass">
            Sobre mí
          </Link>
          <Link href="/aviso-afiliados" className="text-bone/85 hover:text-brass">
            Aviso legal de afiliados de Amazon
          </Link>
        </div>
      </Container>

      <Container className="border-t border-bone/10 py-5">
        <p className="text-xs leading-relaxed text-bone/60">
          Como Afiliado de Amazon, {siteConfig.name} obtiene ingresos por las
          compras adscritas que cumplen los requisitos aplicables. Consulta
          nuestro{" "}
          <Link href="/aviso-afiliados" className="underline hover:text-brass">
            aviso legal de afiliados
          </Link>
          .
        </p>
        <p className="mt-2 text-xs text-bone/50">
          © {year} {siteConfig.name}. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
