import { algolia_client } from "./algolia-client.mjs";
import { markdownToText } from "./markdownToText.mjs";
import dotenv from "dotenv";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

dotenv.config();

const isDirectory = (source) => fs.lstatSync(source).isDirectory();

// Given a path, return an array of all filenames in that directory and all subdirectories.
export const getAllFilePaths = function (
  dirPath = process.env.NEXT_PUBLIC_DOCS_PATH,
  arrayOfFiles = []
) {
  const relativePath = join(process.cwd(), dirPath);
  const files = fs.readdirSync(relativePath);

  files.forEach(function (file) {
    if (isDirectory(dirPath + "/" + file)) {
      arrayOfFiles = getAllFilePaths(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push({
        docPath: dirPath + "/" + file,
      });
    }
  });

  return arrayOfFiles;
};

// Get all documents and parse the content as text
export async function getAllDocFiles() {
  const allFilePaths = getAllFilePaths();

  const articles = allFilePaths.map(async (file) => {
    const source = fs.readFileSync(file.docPath);
    const { content, data } = matter(source);
    const plainText = await markdownToText(content);

    return { content: plainText, data, filePath: file.docPath };
  });

  return Promise.all(articles);
}

// Transform documents to search objects to save them in the index
function transformDocsToSearchObjects(articles) {
  const transFormed = articles.map((article) => {
    return {
      objectID: article.data.title,
      title: article.data.title,
      filePath: article.filePath,
      content: article.content,
    };
  });

  return transFormed;
}

// Index the files after build
(async function indexAllFiles() {
  console.log("STARTED INDEXING");

  try {
    const articles = await getAllDocFiles();
    const transformed = transformDocsToSearchObjects(articles);

    const index = algolia_client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME);

    const algoliaResponse = await index.saveObjects(transformed);

    console.log(
      `SUCCESSFULLY ADDED ${algoliaResponse.objectIDs.length} RECORDS TO Algolia SEARCH.`
    );
  } catch (error) {
    console.error(error);
  }
})();
