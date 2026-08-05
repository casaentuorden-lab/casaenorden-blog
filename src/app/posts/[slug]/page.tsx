import type { Metadata } from "next";
import Container from "@/components/Container";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { getAllPostSlugs, getAllPostsMeta, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const meta = getAllPostsMeta().find((post) => post.slug === params.slug);
  if (!meta) return {};

  const url = `${siteConfig.url}/posts/${meta.slug}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.description,
      url,
      images: [{ url: meta.image }],
      publishedTime: meta.date,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [meta.image],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  return (
    <article className="pb-16">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-bottle/5 sm:aspect-[21/9]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
        />
      </div>

      <Container className="max-w-3xl">
        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wide text-bottle/50">
          <span className="rounded-full bg-brass px-3 py-1 text-bone">
            {post.category}
          </span>
          <span>{formatDate(post.date)}</span>
        </div>

        <h1 className="mt-4 font-serif text-2xl font-bold leading-tight text-bottle sm:text-3xl md:text-4xl">
          {post.title}
        </h1>

        <p className="mt-3 text-lg text-bottle/70">{post.description}</p>

        <div className="mt-6">
          <AffiliateDisclosure />
        </div>

        <div
          className="article-content mt-8"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </Container>
    </article>
  );
}
