import { convertToTitleCase } from '@/lib/helper_functions';
import { type SidebarData } from '@/types';
import Link from 'next/link';
import Menu from './Menu';

export interface NavigationMenusProps {
  sidebarData: SidebarData;
  pathItems: string[];
}

export default function NavigationMenus({
  sidebarData,
  pathItems,
}: NavigationMenusProps): JSX.Element {
  const decodedPathItems = pathItems.map(decodeURIComponent);

  return (
    <ul className="flex flex-col gap-1">
      {sidebarData.map((item) => {
        if (item.type === 'folder') {
          const folder = item;
          const activeMenu = decodedPathItems.find((pt) => pt === folder.name); //find active menu from path items
          // render menu (folder)
          return (
            <Menu
              value={activeMenu && convertToTitleCase(activeMenu)}
              key={folder.name}
              title={convertToTitleCase(folder.name)}
            >
              <ul>
                <NavigationMenus
                  pathItems={decodedPathItems}
                  sidebarData={folder.files}
                />
              </ul>
            </Menu>
          );
        } else {
          const file = item;
          // render menu item (file)
          return (
            <li
              key={file.name}
              className={`${
                decodedPathItems.includes(file.source)
                  ? 'text-violet-500'
                  : 'text-slate-500'
              } transition-colors hover:text-violet-500 dark:hover:text-white`}
            >
              <Link className="text-sm" href={file.path}>
                {file.name}
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
}
