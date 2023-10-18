import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export async function markdownToText(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);

  const html = String(result);
  const text = html.replace(/<[^>]*>/g, ""); // remove HTML tags

  return text;
}
