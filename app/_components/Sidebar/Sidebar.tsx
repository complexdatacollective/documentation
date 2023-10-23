"use client";

import NavigationMenus, {
  type Folder,
  type NavigationMenusProps,
} from "@/app/_components/Sidebar/NavigationMenus";
import ProductSwitcher from "@/app/_components/Sidebar/ProductSwitcher";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar({ data }: Omit<NavigationMenusProps, "activeMenus">) {
  const [product, setProduct] = useState("");
  const [productData, setProductData] = useState<Folder>();
  const pathName = usePathname();

  useEffect(() => {
    setProduct(pathName.split("/")[1] ? pathName.split("/")[1] : "desktop");
  }, [pathName]);

  useEffect(() => {
    const pdata = data.filter(
      (item) => item.type === "folder" && item.name === product
    )[0] as Folder;

    setProductData(pdata);
  }, [product, data]);

  return (
    <div className="flex flex-col gap-2 sticky top-20">
      <ProductSwitcher product={product} setProduct={setProduct} />
      {productData && (
        <NavigationMenus activeMenus={pathName.split("/").splice(1)} data={productData.files} />
      )}
    </div>
  );
}
