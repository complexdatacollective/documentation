"use client";

import NavigationMenus, {
  type Folder,
  type NavigationMenusProps,
} from "@/app/[locale]/_components/Sidebar/NavigationMenus";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ProductSwitcher from "./ProductSwitcher";

export default function Sidebar({
  data,
  local,
}: Omit<NavigationMenusProps & { local: string }, "activeMenus">) {
  const [product, setProduct] = useState("");
  const [productData, setProductData] = useState<Folder>();
  const pathName = usePathname();

  useEffect(() => {
    setProduct(pathName.split("/")[2] ? pathName.split("/")[2] : "desktop");
  }, [pathName]);

  useEffect(() => {
    const pdata = data.filter(
      (item) => item.type === "folder" && item.name === product
    )[0] as Folder;

    setProductData(pdata);
  }, [product, data]);

  return (
    <div className="flex flex-col gap-2 sticky top-20">
      <ProductSwitcher product={product} setProduct={setProduct} local={local} />
      {productData && (
        <NavigationMenus activeMenus={pathName.split("/").splice(1)} data={productData.files} />
      )}
    </div>
  );
}
