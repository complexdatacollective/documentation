import Menu from "@/app/_components/Sidebar/Menu";
import { convertToTitleCase } from "@/lib/helper_functions";
import Link from "next/link";

export interface Folder {
  type: "folder";
  name: string;
  files: Array<File | Folder>;
}

export interface File {
  type: "file";
  name: string;
  path: string;
}

export interface NavigationMenusProps {
  data: Array<File | Folder>;
}

export default function NavigationMenus({ data }: NavigationMenusProps): JSX.Element {
  return (
    <ul>
      {data.map((item) => {
        if (item.type === "folder") {
          const folder = item as Folder;
          return (
            <Menu key={folder.name} title={convertToTitleCase(folder.name)}>
              <ul>
                <NavigationMenus data={folder.files} />
              </ul>
            </Menu>
          );
        } else {
          const file = item as File;
          return (
            <li
              key={file.name}
              className="text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Link href={file.path}>{convertToTitleCase(file.name)}</Link>
            </li>
          );
        }
      })}
    </ul>
  );
}
