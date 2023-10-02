import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function MDXFile({ name }: { name: string }) {
  const ServerComponent = dynamic(() => import(`@/docs/fresco/${name}.mdx`));
  return <ServerComponent />;
}
