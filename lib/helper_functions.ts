// Converts text to title Case eg: network-canvas => Network Canvas
export function convertToTitleCase(str: string) {
  let words = str.replace(/^_/, "").split("-");
  let capitalizedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
}

// Removes "/docs" and ".md/mdx" from path
export function formatPathPattern(pathPattern: string): string {
  let formattedPath = pathPattern.replace("docs/", "");
  formattedPath = formattedPath.replace(/\.mdx?$/, "");

  return formattedPath;
}

// Converts text to URL eg: Network Canvas => network-canvas
export function convertToUrlText(text: string): string {
  const lowercaseText = text.toLowerCase();
  const hyphenatedText = lowercaseText.replace(/\s+/g, "-");
  const cleanedText = hyphenatedText.replace(/[^a-z0-9-]/g, "");

  return cleanedText;
}
