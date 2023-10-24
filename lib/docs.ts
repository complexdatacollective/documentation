import fs, { PathLike } from "fs";
import { join } from "path";
import matter from "gray-matter";

export type DocRouteParams = {
  params: {
    docPath: string;
  };
};

const isDirectory = (source: PathLike) => fs.lstatSync(source).isDirectory();

// Given a path, return an array of all filenames in that directory and all subdirectories.
export const getAllFiles = function (
  dirPath: string = process.env.NEXT_PUBLIC_DOCS_PATH!,
  arrayOfFiles: DocRouteParams[] = []
) {
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

// Get all project names
export const getAllProjects = function () {
  const docsDirectory = join(process.cwd(), process.env.NEXT_PUBLIC_DOCS_PATH!);
  const projectParams = fs
    .readdirSync(docsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => ({
      params: {
        project: dirent.name,
      },
    }));

  return projectParams;
};

// Take a nextjs route segment and convert it to a path, adding the .md/mdx extension.
const segmentToPath = (segment: string[]) => {
  const path = segment.join("/");
  const pathToMdFile = join(process.cwd(), process.env.NEXT_PUBLIC_DOCS_PATH!, `${path}.md`);
  const pathToMdXFile = join(process.cwd(), process.env.NEXT_PUBLIC_DOCS_PATH!, `${path}.mdx`);

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
    title: matterResult.data.title,
    lastUpdated: matterResult.data.date,
    content: matterResult.content,
    toc: matterResult.data.toc,
  };
}
