const rehypePrettyCode = require("rehype-pretty-code");

/** @type {import('rehype-pretty-code').Options} */
const options = {
  // Rehype theme options
  theme: "one-dark-pro",
};

const withMDX = require("@next/mdx")({
  // Optionally provide remark and rehype plugins
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [rehypePrettyCode, options],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);
