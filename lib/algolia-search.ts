import fs from "fs";
import matter from "gray-matter";
import { algolia_client } from "./algolia-client";
import { getAllFiles } from "./docs";
import { markdownToText } from "./markdownToText";

type Articles = {
  content: string;
  data: {
    [key: string]: any;
  };
  filePath: string;
}[];

const allFilePaths = getAllFiles().map((p) => ({
  docPath: p.params.docPath,
}));

export async function getAllDocFiles() {
  const articles = allFilePaths.map(async (file) => {
    const source = fs.readFileSync(file.docPath);
    const { content, data } = matter(source);
    const plainText = await markdownToText(content);

    return { content: plainText, data, filePath: file.docPath };
  });

  return Promise.all(articles);
}

function transformDocsToSearchObjects(articles: Articles) {
  const transFormed = articles.map((article) => {
    return {
      title: article.data.title,
      filePath: article.filePath,
      content: article.content,
    };
  });

  return transFormed;
}

export async function indexAllFiles() {
  try {
    const articles = await getAllDocFiles();
    const transformed = transformDocsToSearchObjects(articles);

    console.log("Transformed Data:", transformed);

    const index = algolia_client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME + "");

    const algoliaResponse = await index.saveObjects(transformed, {
      autoGenerateObjectIDIfNotExist: true,
    });

    console.log(
      `Successfully added ${algoliaResponse.objectIDs.length} records to Algolia search.`
    );
  } catch (error) {
    console.error(error);
  }
}
