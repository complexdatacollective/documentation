import dotenv from 'dotenv';
import fs from 'fs';
import matter from 'gray-matter';
import { basename, join, relative } from 'path';
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

    // get the nav_order from frontmatter or default to Infinity
    const getOrder = (filePath) => {
      if (fs.statSync(filePath).isFile()) {
        const markdownFile = fs.readFileSync(filePath, 'utf-8');
        const matterResult = matter(markdownFile);
        return matterResult.data.nav_order || Infinity;
      }
      return Infinity;
    };

    // compare based on nav_order or file name if nav_order is not present
    const orderA = getOrder(fileA);
    const orderB = getOrder(fileB);

    return orderA - orderB || a.localeCompare(b);
  });

  return sortedFiles
    .map((file) => {
      const filePath = join(directory, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        const nestedFiles = generateSidebarDataForDirectory(filePath, locale);
        const metadataPath = join(filePath, 'metadata.json');

        // check if metadata.json file exists in the folder
        if (fs.existsSync(metadataPath)) {
          const metadataString = fs.readFileSync(metadataPath, 'utf-8');
          const metadata = JSON.parse(metadataString);
          const translatedFolderName = metadata[locale];
          const homepage = metadata['homepage'];
          const isExpanded = metadata['isExpanded'];
          const homepageLocales = metadata['homepageLocales'];
          let isHomepageTranslated = false;

          if (homepageLocales) {
            isHomepageTranslated = homepageLocales.includes(locale);
          }

          // if there's no locale-based files in the folder and the folder doesn't have translated homepage,
          // then don't include it in sidebar.json
          if (!nestedFiles.length && !isHomepageTranslated) return null;

          return {
            type: 'folder',
            name: translatedFolderName,
            language: locale,
            source: file,
            homepage: homepage && isHomepageTranslated ? homepage : null,
            isExpanded: isExpanded ?? false, // assumes false if not exists
            files: nestedFiles,
          };
        } else {
          return {
            type: 'folder',
            name: file,
            language: locale,
            source: file,
            homepage: null,
            isExpanded: false,
            files: nestedFiles,
          };
        }
      } else {
        const fileRelativePath = relative(env.NEXT_PUBLIC_DOCS_PATH, filePath);

        // if the file is metadata.json or homepage (index.mdx/md),
        // then don't include this file inside a folder in sidebar.json
        // because homepages are hidden under un-expandable folders
        if (
          fileRelativePath.includes('metadata.json') ||
          fileRelativePath.includes(`index.${locale}.mdx`)
        ) {
          return null;
        }

        const markdownFile = fs.readFileSync(filePath, 'utf-8');
        const matterResult = matter(markdownFile);
        const formattedFilePath = fileRelativePath
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
