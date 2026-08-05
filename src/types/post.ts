export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};
