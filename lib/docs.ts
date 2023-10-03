import fs, { PathLike } from "fs";
import matter from "gray-matter";
import { basename, join, relative } from "path";

const DOCS_PATH = process.env.NEXT_PUBLIC_DOCS_PATH + "";

export type DocRouteParams = {
  params: {
    docPath: string;
  };
};

const isDirectory = (source: PathLike) => fs.lstatSync(source).isDirectory();

// Given a path, return an array of all filenames in that directory and all subdirectories.
export const getAllFiles = function (dirPath: string, arrayOfFiles: DocRouteParams[] = []) {
  const relativePath = join(process.cwd(), dirPath);
  const files = fs.readdirSync(relativePath);

  files.forEach(function (file) {
    if (isDirectory(dirPath + "/" + file)) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push({
        params: {
          docPath: dirPath + "/" + file,
        },
      });
    }
  });

  return arrayOfFiles;
};

// Take a nextjs route segment and convert it to a path, adding the .md extension.
const segmentToPath = (segment: string[]) => {
  const path = segment.join("/");
  const pathToMdFile = join(process.cwd(), DOCS_PATH, `${path}.md`);
  const pathToMdXFile = join(process.cwd(), DOCS_PATH, `${path}.mdx`);

  if (fs.existsSync(pathToMdFile)) {
    return pathToMdFile;
  } else if (fs.existsSync(pathToMdXFile)) {
    return pathToMdXFile;
  } else {
    return null;
  }
};

// Takes a path segment and returns an object containing parsed markdown for the
// file at the segment, along with useful metadata.
export function getDoc(pathSegment: string[]) {
  const path = segmentToPath(pathSegment);

  if (path === null)
    return {
      title: "File not found",
      content: null,
      lastUpdated: undefined,
    };

  const markdownFile = fs.readFileSync(path, "utf-8");
  const matterResult = matter(markdownFile);

  return {
    // Add other elements of the frontmatter here as needed.
    title: matterResult.data.title ?? undefined,
    lastUpdated: matterResult.data.date ?? undefined,
    content: matterResult.content,
  };
}

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

export function fetchFileSystemData(directory: string = DOCS_PATH): Array<File | Folder> {
  const files = fs.readdirSync(directory);

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
      } as Folder;
    } else {
      const fileRelativePath = relative(DOCS_PATH, filePath);
      const fileLink = fileRelativePath.replace(/\.(md|mdx)$/, "");
      const fileName = basename(fileLink);
      return {
        type: "file",
        name: fileName,
        path: `/${fileLink}`,
      } as File;
    }
  });
}
