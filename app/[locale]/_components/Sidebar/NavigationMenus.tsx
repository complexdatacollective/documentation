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
  source: string;
}

export interface NavigationMenusProps {
  data: Array<File | Folder>;
  activeMenus: string[];
}

export default function NavigationMenus({ data, activeMenus }: NavigationMenusProps): JSX.Element {
  const locale = useLocale();
  const decodedActiveMenus = activeMenus.map((m) => decodeURIComponent(m));

  return (
    <ul>
      {data.map((item) => {
        if (item.type === "folder") {
          const folder = item as Folder;
          const activeMenu = decodedActiveMenus.find((m) => m === folder.name);

          return (
            <Menu
              value={activeMenu && convertToTitleCase(activeMenu)}
              key={folder.name}
              title={convertToTitleCase(folder.name)}
            >
              <ul>
                <NavigationMenus activeMenus={decodedActiveMenus} data={folder.files} />
              </ul>
            </Menu>
          );
        } else {
          const file = item as File;
          console.log("PATH:", `/${locale}${file.path}`);
          return (
            <li
              key={file.name}
              className={`${
                activeMenus.includes(file.source) ? "text-violet-500" : "text-slate-500"
              } dark:hover:text-white transition-colors`}
            >
              <Link
                onClick={() => console.log("HELLOW")}
                className="text-sm"
                href={`/${locale}${file.path}`}
              >
                {file.name}
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
}
