import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { site } from "../lib/site";

export async function GET(context: APIContext) {
  const posts = (await getCollection("posts")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: site.name,
    description: site.description,
    site: context.site ?? "https://blog-ia-swift.vercel.app",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.data.slug}`,
      categories: post.data.tags,
    })),
    customData: "<language>es</language>",
  });
}
