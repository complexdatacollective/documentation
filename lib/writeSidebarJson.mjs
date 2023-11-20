import dotenv from 'dotenv';
import fs from 'fs';
import matter from 'gray-matter';
import { basename, join, relative, sep } from 'path';
import { env } from '../env.mjs';
import { locales } from '../locales.mjs';

dotenv.config();

const relativePathToDocs = join(process.cwd(), env.NEXT_PUBLIC_DOCS_PATH);

// Get file-system data to generate dynamic navigation menus
function generateSidebarDataForDirectory(directory, locale) {
  const files = fs.readdirSync(directory);

  // sort the files so that the document files will be at the top of the list and then comes folders
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

  return sortedFiles
    .map((file) => {
      const filePath = join(directory, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        const nestedFiles = generateSidebarDataForDirectory(filePath, locale);
        const metadataPath = join(filePath, 'metadata.json');

        const metadataString = fs.readFileSync(metadataPath, 'utf-8');
        const metadata = JSON.parse(metadataString);
        const translatedFolderName = metadata[locale];

        // return null if there's no files in the folder
        if (!nestedFiles.length) return null;

        return {
          type: 'folder',
          name: translatedFolderName,
          language: locale,
          source: file,
          files: nestedFiles,
        };
      } else {
        const fileRelativePath = relative(env.NEXT_PUBLIC_DOCS_PATH, filePath);

        // return null if the file is metadata.json
        if (fileRelativePath.includes('metadata.json')) return null;

        const markdownFile = fs.readFileSync(filePath, 'utf-8');
        const matterResult = matter(markdownFile);
        const formattedFilePath = fileRelativePath
          .replace(`${sep}index`, '') // remove index home page from path
          .replace(/\.(md|mdx)$/, '')
          .replace(/\\/g, '/');

        const fileLink = formattedFilePath.split('.')[0];
        const fileLanguage = formattedFilePath.split('.')[1];
        const fileName = basename(fileLink);

        if (fileLanguage === locale) {
          return {
            type: 'file',
            name: matterResult.data.title,
            language: locale,
            path: `/${fileLink}`,
            source: fileName,
          };
        }
      }
    })
    .filter(Boolean);
}

try {
  let sidebarData = [];

  locales.forEach((locale) => {
    const localeBasedData = generateSidebarDataForDirectory(
      relativePathToDocs,
      locale,
    );

    sidebarData.push({
      [locale]: localeBasedData,
    });
  });

  fs.writeFileSync(
    './public/sidebar.json',
    JSON.stringify(sidebarData, null, 2),
    'utf-8',
  );
} catch (e) {
  console.log('Error writing sidebar data!', e);
}
