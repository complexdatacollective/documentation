import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function MDXFile({ name }: { name: string }) {
  const ServerComponent = dynamic(() => import(`@/docs/${name}.mdx`));
  return <ServerComponent />;
}

export const getMdxMetaData = (name: string) => {
  const fileDirectory = path.join(process.cwd(), "docs/fresco");

  // Read markdown file as string
  const fullPath = path.join(fileDirectory, `${name}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the doc metadata section
  const matterResult = matter(fileContents);

  const docData: DocArticle = {
    id: name,
    title: matterResult.data.title,
    date: matterResult.data.date,
    dir: "",
  };

  // Combine the data with the id
  return docData;
};
