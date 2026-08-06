import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Qué datos recoge Casa en Orden, uso de cookies y enlaces de afiliado de Amazon, conforme al RGPD y la normativa española.",
};

const CONTACT_EMAIL = "casaenorden@gmail.com";

export default function PoliticaPrivacidadPage() {
  return (
    <Container className="max-w-3xl py-12 sm:py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brass">
        Aviso legal
      </p>
      <h1 className="font-serif text-3xl font-bold text-bottle sm:text-4xl">
        Política de privacidad
      </h1>
      <p className="mt-3 text-sm text-bottle/60">
        Última actualización: agosto de 2026.
      </p>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-bottle/80 sm:text-lg">
        <p>
          En {siteConfig.name} nos tomamos en serio tu privacidad. Este blog
          está pensado para leerse sin necesidad de registrarte ni crear una
          cuenta, y esta página explica de forma clara qué datos se recogen
          (muy pocos), cómo se usan las cookies y qué ocurre cuando haces
          clic en un enlace de afiliado de Amazon.
        </p>

        <h2 className="pt-2 font-serif text-xl font-bold text-bottle">
          Responsable del tratamiento
        </h2>
        <p>
          El responsable de este sitio web es {siteConfig.name}. Para
          cualquier consulta relacionada con la privacidad o el tratamiento
          de datos puedes escribir a{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-brass-dark underline hover:text-brass"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>

        <h2 className="pt-2 font-serif text-xl font-bold text-bottle">
          Qué datos recogemos
        </h2>
        <p>
          {siteConfig.name} es un blog estático: no tiene sistema de
          registro de usuarios, ni login, ni formularios de contacto,
          comentarios o boletín en sus páginas. No recopilamos activamente
          nombres, direcciones ni datos de contacto.
        </p>
        <p>
          Como en cualquier sitio web, nuestro proveedor de hosting puede
          generar registros técnicos mínimos y automáticos para poder
          servir la página correctamente (por ejemplo, dirección IP, tipo de
          navegador o fecha de la visita). Estos datos no se usan para
          identificarte personalmente y se conservan según la propia
          política del proveedor de hosting.
        </p>
        <p>
          Si nos escribes por correo electrónico a{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-brass-dark underline hover:text-brass"
          >
            {CONTACT_EMAIL}
          </a>
          , trataremos los datos que nos facilites (tu dirección de correo y
          el contenido del mensaje) únicamente para responder a tu consulta,
          y no los cederemos a terceros ni los usaremos con otro fin.
        </p>

        <h2 className="pt-2 font-serif text-xl font-bold text-bottle">
          Uso de cookies
        </h2>
        <p>
          Tal y como está configurado actualmente, {siteConfig.name}{" "}
          <strong className="text-bottle">
            no instala cookies propias de analítica, publicidad o
            seguimiento
          </strong>
          . Si en el futuro incorporamos herramientas que sí las requieran
          (por ejemplo, estadísticas de visitas), actualizaremos esta
          política y te pediremos tu consentimiento mediante un aviso de
          cookies antes de activarlas.
        </p>
        <p>
          Ten en cuenta que, si haces clic en un enlace hacia Amazon.es y
          navegas a su web, Amazon puede instalar sus propias cookies según
          su propia política de privacidad, completamente ajena a este
          sitio y fuera de nuestro control.
        </p>

        <h2 className="pt-2 font-serif text-xl font-bold text-bottle">
          Enlaces de afiliado de Amazon
        </h2>
        <p>
          {siteConfig.name} participa en el Programa de Afiliados de Amazon
          EU. Algunos artículos incluyen enlaces que te llevan a Amazon.es;
          si compras a través de ellos, podemos recibir una pequeña comisión
          sin coste adicional para ti. Puedes leer todos los detalles en
          nuestro{" "}
          <Link
            href="/aviso-afiliados"
            className="font-semibold text-brass-dark underline hover:text-brass"
          >
            aviso legal de afiliados
          </Link>
          . Una vez sales de {siteConfig.name} hacia Amazon, es Amazon quien
          trata tus datos conforme a su propia política de privacidad.
        </p>

        <h2 className="pt-2 font-serif text-xl font-bold text-bottle">
          Base legal y destinatarios
        </h2>
        <p>
          El tratamiento de los registros técnicos mínimos descritos arriba
          se basa en el interés legítimo de mantener el sitio web
          funcionando de forma segura (art. 6.1.f RGPD). Estos datos los
          procesa nuestro proveedor de hosting como encargado del
          tratamiento, sin que se cedan a ningún otro tercero salvo
          obligación legal.
        </p>

        <h2 className="pt-2 font-serif text-xl font-bold text-bottle">
          Tus derechos
        </h2>
        <p>
          De acuerdo con el Reglamento General de Protección de Datos
          (RGPD) y la normativa española aplicable, tienes derecho a
          acceder, rectificar y suprimir tus datos, así como a solicitar la
          limitación de su tratamiento, oponerte a él o pedir su
          portabilidad. Puedes ejercer estos derechos escribiendo a{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-brass-dark underline hover:text-brass"
          >
            {CONTACT_EMAIL}
          </a>
          . Si consideras que no hemos atendido tu solicitud correctamente,
          también puedes presentar una reclamación ante la Agencia Española
          de Protección de Datos (AEPD).
        </p>

        <h2 className="pt-2 font-serif text-xl font-bold text-bottle">
          Menores de edad
        </h2>
        <p>
          Este blog está dirigido a un público general y no recopila
          intencionadamente datos de menores de edad.
        </p>

        <h2 className="pt-2 font-serif text-xl font-bold text-bottle">
          Cambios en esta política
        </h2>
        <p>
          Podemos actualizar esta política de privacidad para reflejar
          cambios en el sitio o en la normativa aplicable. La fecha de la
          última actualización siempre aparece al principio de esta página.
        </p>
      </div>
    </Container>
  );
}
