import Link from "next/link";
import Container from "./Container";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/aviso-afiliados", label: "Aviso legal" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-bottle/10 bg-bone/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-lg font-bold tracking-tight text-bottle sm:text-xl"
        >
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M3 11.5 12 4l9 7.5"
              stroke="#C4923D"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.5 10v8.5a1 1 0 0 0 1 1H10v-5.5h4V19.5h3.5a1 1 0 0 0 1-1V10"
              stroke="#2F4A3C"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="flex items-center gap-3 text-sm font-medium text-bottle sm:gap-6 sm:text-[0.95rem]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-1 py-1 transition-colors hover:text-brass"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
