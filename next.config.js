const rehypePrettyCode = require('rehype-pretty-code');

/** @type {import('rehype-pretty-code').Options} */
const options = {
  // Rehype theme options
  theme: 'one-dark-pro',
};

const withMDX = require('@next/mdx')({
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

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts',
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  // basePath: '/documentation',
  // assetPrefix: '/documentation',
  images: {
    unoptimized: true,
  },
};

// Merge MDX config with Next.js config
module.exports = withNextIntl(withMDX(nextConfig));
