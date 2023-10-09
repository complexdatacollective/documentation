export function convertToTitleCase(str: string) {
  // Remove leading underscore and split the string into an array of words
  let words = str.replace(/^_/, "").split("-");

  // Capitalize each word
  let capitalizedWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words with spaces and return the final string
  return capitalizedWords.join(" ");
}

export function formatPathPattern(pathPattern: string): string {
  // Remove the "/docs" prefix
  let formattedPath = pathPattern.replace("docs/", "");

  // Remove the file extension
  formattedPath = formattedPath.replace(/\.mdx?$/, "");

  return formattedPath;
}

export function convertToUrlText(text: string): string {
  // Convert the text to lowercase
  const lowercaseText = text.toLowerCase();

  // Replace spaces with hyphens
  const hyphenatedText = lowercaseText.replace(/\s+/g, "-");

  // Remove any non-alphanumeric characters except hyphens
  const cleanedText = hyphenatedText.replace(/[^a-z0-9-]/g, "");

  return cleanedText;
}
