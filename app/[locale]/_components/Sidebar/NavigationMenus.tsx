import { convertToTitleCase } from "@/lib/helper_functions";
import Link from "next/link";
import Menu from "./Menu";
import { useLocale } from "next-intl";

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
  activeMenus: string[];
}

export default function NavigationMenus({ data, activeMenus }: NavigationMenusProps): JSX.Element {
  const locale = useLocale();

  return (
    <ul>
      {data.map((item) => {
        if (item.type === "folder") {
          const folder = item as Folder;
          const activeMenu = activeMenus.find((m) => m === folder.name);

          return (
            <Menu
              value={activeMenu && convertToTitleCase(activeMenu)}
              key={folder.name}
              title={convertToTitleCase(folder.name)}
            >
              <ul>
                <NavigationMenus activeMenus={activeMenus} data={folder.files} />
              </ul>
            </Menu>
          );
        } else {
          const file = item as File;
          return (
            <li
              key={file.name}
              className={`${
                activeMenus.includes(file.name) ? "text-violet-500" : "text-slate-500"
              } dark:hover:text-white transition-colors`}
            >
              <Link className="text-sm" href={`/${locale}${file.path}`}>
                {convertToTitleCase(file.name)}
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
}
