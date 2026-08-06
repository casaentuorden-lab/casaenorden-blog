import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { Post, PostMeta } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "content/posts");

function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function readPostFile(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
}

function toPostMeta(slug: string, data: Record<string, any>): PostMeta {
  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    image: data.image ?? "",
    category: data.category ?? "General",
  };
}

/** Metadatos de todos los articulos, ordenados del mas reciente al mas antiguo. */
export function getAllPostsMeta(): PostMeta[] {
  const posts = getPostSlugs().map((slug) => {
    const { data } = readPostFile(slug);
    return toPostMeta(slug, data);
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostSlugs(): string[] {
  return getPostSlugs();
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const { data, content } = readPostFile(slug);
  // sanitize:false permite el HTML en bruto que usamos en los articulos
  // (tarjetas de producto). El contenido de content/posts lo escribimos
  // nosotros mismos, no viene de usuarios, asi que es seguro.
  const processedContent = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(content);
  const rawHtml = processedContent.toString();

  // Los enlaces de afiliado deben abrir en pestaña nueva y llevar rel="sponsored"
  // (recomendado por Google/Amazon para enlaces patrocinados).
  const contentHtml = rawHtml.replace(
    /<a href=/g,
    '<a target="_blank" rel="sponsored noopener noreferrer" href='
  );

  return {
    ...toPostMeta(slug, data),
    contentHtml,
  };
}
