import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import { getAllPostsMeta } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  const posts = getAllPostsMeta();

  return (
    <>
      <section className="border-b border-bottle/10 bg-bone-dark/40">
        <Container className="py-14 text-center sm:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brass">
            Blog de organización del hogar
          </p>
          <h1 className="mx-auto max-w-2xl font-serif text-3xl font-bold leading-tight text-bottle sm:text-4xl md:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-bottle/70 sm:text-lg">
            {siteConfig.tagline}. Ideas prácticas, sin complicaciones y con
            productos que de verdad ayudan.
          </p>
        </Container>
      </section>

      <Container className="py-10 sm:py-14">
        <h2 className="mb-6 font-serif text-xl font-bold text-bottle sm:text-2xl">
          Últimos artículos
        </h2>

        {posts.length === 0 ? (
          <p className="text-bottle/60">
            Todavía no hay artículos publicados. Añade un archivo{" "}
            <code>.md</code> en <code>content/posts</code> para empezar.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
