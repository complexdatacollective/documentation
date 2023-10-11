import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import algoliasearch from "algoliasearch";
import { markdownToText } from "./markdownToText.mjs";
import dotenv from "dotenv";

dotenv.config();

const algolia_client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID + "",
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY + ""
);

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

function transformDocsToSearchObjects(articles) {
  const transFormed = articles.map((article) => {
    return {
      title: article.data.title,
      filePath: article.filePath,
      content: article.content,
    };
  });

  return transFormed;
}

(async function indexAllFiles() {
  console.log("STARTED READING");

  try {
    const articles = await getAllDocFiles();
    const transformed = transformDocsToSearchObjects(articles);

    const index = algolia_client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME + "");

    const algoliaResponse = await index.saveObjects(transformed, {
      autoGenerateObjectIDIfNotExist: true,
    });

    console.log(
      `SUCCESSFULLY ADDED ${algoliaResponse.objectIDs.length} RECORDS TO Algolia SEARCH.`
    );
  } catch (error) {
    console.error(error);
  }
})();
