"use client";

import NavigationMenus, {
  type Folder,
  type NavigationMenusProps,
} from "@/app/_components/Sidebar/NavigationMenus";
import ProductSwitcher from "@/app/_components/Sidebar/ProductSwitcher";
import { useEffect, useState } from "react";

export default function Sidebar({ data }: NavigationMenusProps) {
  const [product, setProduct] = useState("desktop"); // using default desktop, can be changed to introductory product or smt
  const [productData, setProductData] = useState<Folder>();

  useEffect(() => {
    const pdata = data.filter(
      (item) => item.type === "folder" && item.name === product
    )[0] as Folder;

    setProductData(pdata);
  }, [product, data]);

  return (
    <div className="flex flex-col gap-2">
      <ProductSwitcher setProduct={setProduct} />
      {productData && <NavigationMenus data={productData.files} />}
    </div>
  );
}
