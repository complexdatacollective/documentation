import { convertToTitleCase } from '@/lib/helper_functions';
import { type DocFile, type Folder } from '@/types';
import Menu from './Menu';
import { Link } from '@/navigation';

export interface NavigationMenusProps {
  sidebarData: (Folder | DocFile)[];
  pathItems: string[];
}

export default function NavigationMenus({
  sidebarData,
  pathItems,
}: NavigationMenusProps): JSX.Element {
  return (
    <ul className="flex flex-col gap-1 ">
      {sidebarData.map((item) => {
        if (item.type === 'folder') {
          const folder = item;
          const activeMenu = pathItems.find((pt) => pt === folder.name); //find active menu from path items
          // render menu (folder)
          return (
            <Menu
              value={activeMenu && convertToTitleCase(activeMenu)}
              key={folder.name}
              title={convertToTitleCase(folder.name)}
            >
              <ul>
                <NavigationMenus
                  pathItems={pathItems}
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
                pathItems.includes(file.source)
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
