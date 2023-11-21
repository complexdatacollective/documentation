import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
};
