import { SidebarData, type DocFile, type Folder } from '@/types';
import { locales } from '@/locales.mjs';
import data from '@/public/sidebar.json';

const sidebarData: SidebarData = JSON.parse(
  JSON.stringify(data),
) as SidebarData;

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

export const getLocaleBasedSidebarData = (
  data: SidebarData,
  locale: string,
) => {
  return data.filter((item) => item[locale])[0][locale];
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

// Check if the file path for the translated doc exists
export function isPathExist(data: Folder, docPath: string, isExist = false) {
  for (const item of data.files) {
    if (item.type === 'file') {
      isExist = docPath === item.path;
    } else {
      isExist = isPathExist(item, docPath, isExist);
    }

    if (isExist) break;
  }

  return isExist;
}

// get available locales for the document
export function getAvailableLocales(filePath: string) {
  const availableLocales = locales.filter((locale) => {
    const localeBasedSidebarData = getLocaleBasedSidebarData(
      sidebarData,
      locale,
    );
    const result = isPathExist(localeBasedSidebarData[0], filePath);

    return result;
  });

  return availableLocales;
}
