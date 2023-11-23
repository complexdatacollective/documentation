import { type DocFile, type Folder } from '@/types';
import Menu from './Menu';
import NavigationLink from './NavigationLink';
import NavigationTitle from './NavigationTitle';

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
            <li key={folder.name}>
              {folder.isCollapsible ? (
                <Menu
                  activeMenu={activeMenu}
                  itemValue={folder.source}
                  title={folder.name.toLocaleUpperCase()}
                  titleURL={folder.homePage}
                >
                  <NavigationMenus
                    pathItems={pathItems}
                    sidebarData={folder.files}
                  />
                </Menu>
              ) : (
                <NavigationTitle
                  title={folder.name.toLocaleUpperCase()}
                  titleURL={folder.homePage}
                >
                  <NavigationMenus
                    pathItems={pathItems}
                    sidebarData={folder.files}
                  />
                </NavigationTitle>
              )}
            </li>
          );
        } else {
          const file = item;
          const isDocumetInView = '/' + pathItems.join('/') === file.path;
          // render menu item (file)
          return (
            <li className="ml-2" key={file.name}>
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
