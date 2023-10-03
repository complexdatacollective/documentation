"use server";

import fs from "fs";
import { basename, join, relative } from "path";

// Get file-system data to generate dynamic navigation menus

export interface Folder {
  type: "folder";
  name: string;
  files: Array<File | Folder>;
}

export interface File {
  type: "file";
  name: string;
  path: string;
}

export async function fetchFileSystemData(directory: string): Promise<Array<File | Folder>> {
  const files = await fs.promises.readdir(directory);

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

  const fileSystemData: Array<File | Folder> = [];

  for (const file of sortedFiles) {
    const filePath = join(directory, file);
    const stats = await fs.promises.stat(filePath);

    if (stats.isDirectory()) {
      const nestedFiles = await fetchFileSystemData(filePath);
      const folder: Folder = {
        type: "folder",
        name: file,
        files: nestedFiles,
      };
      fileSystemData.push(folder);
    } else {
      const fileRelativePath = relative("./docs", filePath);
      const fileLink = fileRelativePath.replace(/\.(md|mdx)$/, "");
      const fileName = basename(fileLink);
      const file: File = {
        type: "file",
        name: fileName,
        path: `/${fileLink}`,
      };
      fileSystemData.push(file);
    }
  }

  return fileSystemData;
}
