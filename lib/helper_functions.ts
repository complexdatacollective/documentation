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
