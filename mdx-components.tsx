import type { MDXComponents } from "mdx/types";
import "@/assets/styles/style.css";
import { MyH1 } from "./components/Headings";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <MyH1>{children}</MyH1>,
    ...components,
  };
}
