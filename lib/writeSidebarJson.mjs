import fs from "fs";
import { basename, join, relative } from "path";
import dotenv from "dotenv";
import matter from "gray-matter";
import { readdir } from "fs/promises";

dotenv.config();

const relativePathToDocs = join(
  process.cwd(),
  process.env.NEXT_PUBLIC_DOCS_PATH
);

// Get file-system data to generate dynamic navigation menus
function generateSidebarDataForDirectory(directory = relativePathToDocs) {
  const files = fs.readdirSync(directory)

  const sortedFiles = files.sort((a, b) => {
    const fileA = join(directory, a);
    const fileB = join(directory, b);
    const statsA = fs.statSync(fileA);
    const statsB = fs.statSync(fileB);

    if (statsA.isDirectory() && !statsB.isDirectory()) {
      return 1;
    } else if (!statsA.isDirectory() && statsB.isDirectory()) {
      return -1;
    }

    return a.localeCompare(b);
  });

  return sortedFiles.map((file) => {
    const filePath = join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      const nestedFiles = generateSidebarDataForDirectory(filePath);

      return {
        type: "folder",
        name: file,
        files: nestedFiles,
      };
    } else {
      const fileRelativePath = relative(process.env.NEXT_PUBLIC_DOCS_PATH + "", filePath);
      const markdownFile = fs.readFileSync(filePath, "utf-8");
      const matterResult = matter(markdownFile);
      const fileLink = fileRelativePath.replace(/\.(md|mdx)$/, "").replace(/\\/g, "/");
      const fileName = basename(fileLink);

      return {
        type: "file",
        name: matterResult.data.title,
        path: `/${fileLink}`,
        source: fileName,
        docId: matterResult.data.docId ?? null,
        language: matterResult.data.language,
      };
    }
  });
}

try {
  const sidebarData = generateSidebarDataForDirectory();
  fs.writeFileSync("./public/sidebar.json", JSON.stringify(sidebarData, null, 2), "utf-8");
} catch (e) {
  console.log('Error writing sidebar data!', e);
}

