import Menu from "@/app/_components/Menu";
import { convertToTitleCase } from "@/lib/helper_functions";
import Link from "next/link";
import { useEffect, useState } from "react";
import { File, Folder, fetchFileSystemData } from "../_actions/actions";

interface NavigationProps {
  data: Array<File | Folder>;
}

function Navigation({ data }: NavigationProps): JSX.Element {
  return (
    <ul>
      {data.map((item) => {
        if (item.type === "folder") {
          const folder = item as Folder;
          return (
            <Menu key={folder.name} title={convertToTitleCase(folder.name)}>
              <ul>
                <Navigation data={folder.files} />
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

export default function Menus({ mainPath }: { mainPath: string }): JSX.Element {
  const [data, setData] = useState<Array<File | Folder>>([]);

  useEffect(() => {
    async function getFileSystemData() {
      const fileSystemData = await fetchFileSystemData(
        `${process.env.NEXT_PUBLIC_DOCS_PATH}/${mainPath}`
      );
      setData(fileSystemData);
    }

    getFileSystemData();
  }, [mainPath]);

  return <Navigation data={data} />;
}
