"use client";

import SwitchProducts from "@/components/SwitchProducts";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DesktopMenus from "../desktop/_components/DesktopMenus";
import FrescoMenus from "../fresco/_components/FrescoMenus";

const Sidebar = () => {
  const pathname = usePathname();
  const [isPathDesktop, setIsPathDesktop] = useState(false);

  useEffect(() => {
    setIsPathDesktop(pathname.includes("desktop"));
  }, [pathname]);

  return (
    <div className="sticky top-1">
      <div className="flex flex-col gap-2">
        <SwitchProducts />
        {isPathDesktop ? <DesktopMenus /> : <FrescoMenus />}
      </div>
    </div>
  );
};

export default Sidebar;
