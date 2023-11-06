export interface Folder {
  type: 'folder';
  name: string;
  files: Array<DocFile | Folder>;
}

export interface DocFile {
  type: 'file';
  name: string;
  path: string;
  source: string;
  docId: string;
  language: string;
}

export type SidebarData = Array<DocFile | Folder>;

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
export type Messages = typeof import('./messages/en.json');
