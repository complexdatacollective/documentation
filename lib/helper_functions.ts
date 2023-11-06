import { type DocFile, type Folder } from '@/types';

// Converts text to title Case eg: network-canvas => Network Canvas
export function convertToTitleCase(str: string) {
  let words = str.replace(/^_/, '').split('-');
  let capitalizedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(' ');
}

// Removes "/docs" and ".md/mdx" from path
export function formatPathPattern(pathPattern: string): string {
  let formattedPath = pathPattern.replace('docs/', '');
  formattedPath = formattedPath.replace(/\.mdx?$/, '');

  return formattedPath;
}

// Converts text to URL eg: Network Canvas => network-canvas
export function convertToUrlText(text: string): string {
  const lowercaseText = text.toLowerCase();
  const hyphenatedText = lowercaseText.replace(/\s+/g, '-');
  const cleanedText = hyphenatedText.replace(/[^a-z0-9-\u0400-\u04FF]/g, '');

  return cleanedText;
}

// Gets translated docs data from sidebar json based on specific docId
export function getTranslatedFilesDataByDocId(
  sidebarData: Array<DocFile | Folder>,
  currentDocId: string,
) {
  const allDocFiles = getDocsFromSidebarData(sidebarData);
  const translatedFiles = allDocFiles.filter(
    (file) => file.docId === currentDocId,
  );

  return translatedFiles;
}

// Todo: This function can be re-written with array.reduce method try that later
// Extracts all documents from sidebar data
export function getDocsFromSidebarData(
  siData: Array<DocFile | Folder>,
  docFiles: Array<DocFile> = [],
) {
  siData.forEach((item) => {
    if (item.type === 'folder') {
      docFiles = getDocsFromSidebarData(item.files, docFiles);
    } else {
      docFiles.push(item);
    }
  });

  return docFiles;
}

// filter sidebar data based on product and locale
export function filterSidebarData(
  product: string,
  sidebarData: (Folder | DocFile)[],
  locale: string,
) {
  const localeBasedSidebarData = sidebarData.filter(
    (item) => item.type === 'folder' && item.name === locale,
  )[0] as Folder;

  const productBasedSidebarData = localeBasedSidebarData.files.filter(
    (item) => item.type === 'folder' && item.name === product,
  )[0] as Folder;

  return productBasedSidebarData;
}
