import fs from "fs";
import { basename, join, relative } from "path";
import dotenv from "dotenv";

dotenv.config();

// Get file-system data to generate dynamic navigation menus

export function fetchFileSystemData(directory) {
  const relativePath = join(process.cwd(), directory);

  const files = fs.readdirSync(relativePath);

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
      const nestedFiles = fetchFileSystemData(filePath);
      return {
        type: "folder",
        name: file,
        files: nestedFiles,
      };
    } else {
      const fileRelativePath = relative(process.env.NEXT_PUBLIC_DOCS_PATH + "", filePath);
      const fileLink = fileRelativePath.replace(/\.(md|mdx)$/, "");
      const fileName = basename(fileLink);
      return {
        type: "file",
        name: fileName,
        path: `/${fileLink}`,
      };
    }
  });
}

(function () {
  console.log("FUNCTION STARTED");
  const fsData = fetchFileSystemData(process.env.NEXT_PUBLIC_DOCS_PATH + "");

  console.log("JSON BEING CREATED DOWN HERE");
  fs.writeFileSync("./public/sidebar.json", JSON.stringify(fsData, null, 2), "utf-8");
  console.log("JSON SHOULD BE READY");
})();
