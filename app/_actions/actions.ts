"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getSortedDocsData(dir: string) {
  const docsDirectory = path.join(process.cwd(), dir);

  // Get file names
  const fileNames = fs.readdirSync(docsDirectory);
  const allDocsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(docsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const docData: DocArticle = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date ?? "",
      dir,
    };

    // Combine the data with the id
    return docData;
  });

  console.log("HELLO:", allDocsData);

  // Sort docs by date
  return allDocsData;
}
// allDocsData.sort((a, b) => (a.date < b.date ? 1 : -1));
