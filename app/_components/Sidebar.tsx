import SwitchProducts from "@/components/SwitchProducts";
import DesktopMenus from "../desktop/_components/DesktopMenus";

const Sidebar = () => {
  return (
    <div className="sticky top-1">
      <div className="flex flex-col gap-2">
        <SwitchProducts />
        <DesktopMenus />
      </div>
    </div>
  );
};

export default Sidebar;
