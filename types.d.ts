export interface Folder {
  type: "folder";
  name: string;
  files: Array<DocFile | Folder>;
}

export interface DocFile {
  type: "file";
  name: string;
  path: string;
  source: string;
  docId: string;
  language: string;
}
