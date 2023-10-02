import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type SubfoldersType = {
  folder: string;
  files: DocArticle[];
};

export function getDocNamesWithFolders(directory: string = "docs/desktop") {
  const docs = [];

  // Get the full path of the directory
  const dirPath = path.join(process.cwd(), directory);

  // Read the directory
  const subDirectories = fs.readdirSync(dirPath);

  // Iterate through the subdirectories
  for (const subDir of subDirectories) {
    const subDirPath = path.join(dirPath, subDir);

    // Read the files inside the subdirectory
    const files = fs.readdirSync(subDirPath);

    // Iterate through the files
    for (const file of files) {
      // Extract the folder name and filename without the extension
      const folderName = subDir;
      const filename = path.parse(file).name;

      // Create an object with folderName and filename properties
      const doc = { folderName, filename };

      // Push the object to the docs array
      docs.push(doc);
    }
  }

  return docs;
}

export async function getDocData(filePath: string) {
  const markdownFile = fs.readFileSync(filePath + ".md", "utf-8");
  const matterResult = matter(markdownFile);

  return {
    title: matterResult.data.title,
    date: matterResult.data.date ?? "",
    content: matterResult.content,
  };
}
