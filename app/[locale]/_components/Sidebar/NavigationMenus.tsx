import { type DocFile, type Folder } from '@/types';
import Menu from './Menu';
import NavigationLink from './NavigationLink';

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
          const activeMenu = pathItems.find((pt) => pt === folder.source); //find active menu from path items
          // render menu (folder)
          return (
            <Menu
              activeMenu={activeMenu}
              itemValue={folder.source}
              key={folder.name}
              title={folder.name.toLocaleUpperCase()}
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
          const isDocumetInView = '/' + pathItems.join('/') === file.path;
          // render menu item (file)

          return (
            <li key={file.name}>
              <NavigationLink
                highlighted={isDocumetInView}
                fileName={file.name}
                filePath={file.path}
              />
            </li>
          );
        }
      })}
    </ul>
  );
}
