"use client";

import SwitchProducts from "@/components/SwitchProducts";
import NavigationMenus from "../[project]/_components/NavigationMenus";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [mainPath, setMainPath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setMainPath(pathname.split("/")[1]);
  }, [pathname]);

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
