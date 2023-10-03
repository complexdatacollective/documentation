import SwitchProducts from "@/components/SwitchProducts";
import NavigationMenus from "../[project]/_components/NavigationMenus";

const Sidebar = () => {
  const mainPath = "desktop";

  return (
    <div className="sticky top-1">
      <div className="flex flex-col gap-2">
        <SwitchProducts />
        {mainPath && <NavigationMenus mainPath={mainPath} />}
      </div>
    </div>
  );
};

export default Sidebar;
