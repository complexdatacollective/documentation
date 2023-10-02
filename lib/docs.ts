import fs, { PathLike } from "fs";
import { join } from "path";
import matter from "gray-matter";

const DOCS_PATH = "docs"; // <- hard coded 'docs' - should be part of env?

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
  return join(process.cwd(), DOCS_PATH, `${path}.md`);
};

// Takes a path segment and returns an object containing parsed markdown for the
// file at the segment, along with useful metadata.
export function getDoc(pathSegment: string[]) {
  const path = segmentToPath(pathSegment);
  const markdownFile = fs.readFileSync(path, "utf-8");
  const matterResult = matter(markdownFile);

  return {
    // Add other elements of the frontmatter here as needed.
    title: matterResult.data.title ?? undefined,
    lastUpdated: matterResult.data.date ?? undefined,
    content: matterResult.content,
  };
}
