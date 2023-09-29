import SwitchProducts from "@/components/SwitchProducts";
import DesktopMenus from "../desktop/_components/DesktopMenus";

const Sidebar = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col gap-2">
        <SwitchProducts />
        <DesktopMenus />
      </div>
    </div>
  );
};

export default Sidebar;
