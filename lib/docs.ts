import fs, { PathOrFileDescriptor, readdirSync } from "fs";
import { readdir } from "node:fs/promises";
import { join, sep } from "path";
import matter from "gray-matter";

export type DocRouteParams = {
  params: {
    docPath: string;
  };
};

// Remove CWD, locale, project, and extension from path
export const processPath = (docPath: string) => {
  return docPath
    .replace(process.cwd() + sep, "") // Remove CWD
    .replace("docs" + sep, "") // Remove docs subdirectory
    .replace(".mdx", "")
    .replace(".md", "") // Remove file extensions
    .split(sep) // Split into segments based on the platform directory separator
    .map(decodeURIComponent); // decoding because of UTF-8 characters
};

export const relativePathToDocs = join(
  process.cwd(),
  process.env.NEXT_PUBLIC_DOCS_PATH!
);

export const getAllMarkdownDocs = async () => {
  const files = await readdir(relativePathToDocs, {
    withFileTypes: true,
    recursive: true,
  });

  return files
    .filter((dirent) => dirent.isFile()) // Only get files
    .filter(
      (dirent) => dirent.name.endsWith(".mdx") || dirent.name.endsWith(".md")
    ) // Only get files with .md or .mdx extension
    .map((dirent) => join(dirent.path, dirent.name)); // Get the full path
};

// Get all project names
export const getAllProjects = function () {
  const docsDirectory = join(process.cwd(), process.env.NEXT_PUBLIC_DOCS_PATH!);

  const locales = fs
    .readdirSync(docsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory());

  const projects = locales.map((locale) => {
    const projects = fs
      .readdirSync(join(docsDirectory, locale.name), { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory());
    return projects.map((project) => project.name);
  });

  // Make projects unique
  return [...new Set(projects.flat())];
};

export function getDoc({
  locale,
  project,
  pathSegment,
}: {
  locale: string;
  project: string;
  pathSegment: string[];
}) {
  const path = join(
    process.cwd(),
    process.env.NEXT_PUBLIC_DOCS_PATH!,
    locale,
    project,
    ...pathSegment
  );

  // Check if the file exists.
  let file;

  if (fs.existsSync(path + ".md")) {
    file = path + ".md";
  } else if (fs.existsSync(path + ".mdx")) {
    file = path + ".mdx";
  } else {
    return null;
  }

  const markdownFile = fs.readFileSync(file, "utf-8");
  const matterResult = matter(markdownFile);

  return {
    // Add other elements of the frontmatter here as needed.
    title: matterResult.data.title,
    lastUpdated: matterResult.data.date,
    content: matterResult.content,
    toc: matterResult.data.toc,
    docId: matterResult.data.docId ?? null,
  };
}
