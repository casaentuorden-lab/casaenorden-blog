import Link from "next/link";
import { PostMeta } from "@/types/post";
import { formatDate } from "@/lib/format";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-bottle/10 bg-bone-light shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-bottle/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brass px-3 py-1 text-xs font-semibold uppercase tracking-wide text-bone shadow-soft">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-bottle/50">
          {formatDate(post.date)}
        </p>
        <h3 className="font-serif text-lg font-bold leading-snug text-bottle group-hover:text-brass-dark">
          {post.title}
        </h3>
        <p className="line-clamp-3 text-sm text-bottle/70">{post.description}</p>
        <span className="mt-auto pt-2 text-sm font-semibold text-brass">
          Leer artículo →
        </span>
      </div>
    </Link>
  );
}
