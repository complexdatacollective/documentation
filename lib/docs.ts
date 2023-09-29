import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type SubfoldersType = {
  folder: string;
  files: DocArticle[];
};

// export const getdocsDataWithFolders = (
//   directoryPath: string,
//   callback: (subfolders: SubfoldersType[]) => void
// ) => {
//   fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
//     if (err) {
//       console.error("Error reading directory:", err);
//       return;
//     }

//     const subfolders = files
//       .filter((file) => file.isDirectory())
//       .map((file) => ({
//         folder: file.name,
//         files: getSortedDocsData(`docs/desktop/${file.name}`),
//       }));

//     callback(subfolders);
//   });
// };

export function getSortedDocsData(dir: string) {
  const docsDirectory = path.join(process.cwd(), dir);

  // Get file names
  const fileNames = fs.readdirSync(docsDirectory);
  const allDocsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(docsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const docData: DocArticle = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date ?? "",
    };

    // Combine the data with the id
    return docData;
  });
  // Sort docs by date
  return allDocsData;
}
// allDocsData.sort((a, b) => (a.date < b.date ? 1 : -1));

export async function getDocData(dir: string, id: string) {
  const fullPath = path.join(dir, `${id}.mdx`);
  const markdownFile = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(markdownFile);

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date ?? "",
    content: matterResult.content,
  };
}
