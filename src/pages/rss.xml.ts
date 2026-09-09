import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { site } from "../lib/site";

export async function GET(context: APIContext) {
  const posts = (await getCollection("posts")).sort((a, b) =>
    a.data.date < b.data.date ? 1 : a.data.date > b.data.date ? -1 : 0,
  );

  return rss({
    title: site.name,
    description: site.description,
    site: context.site ?? "https://blog-ia-swift.vercel.app",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(`${post.data.date}T12:00:00Z`),
      link: `/posts/${post.data.slug}`,
      categories: post.data.tags,
    })),
    customData: "<language>es</language>",
  });
}
