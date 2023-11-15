import { SidebarData, type DocFile, type Folder } from '@/types';

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

export const getLocaleBasedSidebarData = (
  sidebarData: SidebarData,
  locale: string,
) => {
  const data = sidebarData.filter((item) => item[locale])[0][locale];
  return data;
};

// filter sidebar data based on product and locale
export function filterSidebarData(
  product: string,
  sidebarData: SidebarData,
  locale: string,
) {
  const localeBasedSidebarData = getLocaleBasedSidebarData(sidebarData, locale);

  const productBasedSidebarData = localeBasedSidebarData.filter(
    (item) => item.name === product,
  )[0];

  return productBasedSidebarData;
}

// Check if the translated file exists
export function isPathExist(
  localeBasedSidebarData: Folder,
  docPath: string,
  isExist = false,
) {
  for (const item of localeBasedSidebarData.files) {
    if (item.type === 'file') {
      isExist = docPath === item.path;
    } else {
      isExist = isPathExist(item, docPath, isExist);
    }

    if (isExist) break;
  }

  return isExist;
}
