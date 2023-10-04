"use client";

import Menu from "@/app/_components/Menu";
import ProductSwitcher from "@/app/_components/ProductSwitcher";
import { File, Folder } from "@/lib/docs";
import { convertToTitleCase } from "@/lib/helper_functions";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavigationMenusProps {
  data: Array<File | Folder>;
}

function NavigationMenus({ data }: NavigationMenusProps): JSX.Element {
  return (
    <ul>
      {data.map((item) => {
        if (item.type === "folder") {
          const folder = item as Folder;
          return (
            <Menu key={folder.name} title={convertToTitleCase(folder.name)}>
              <ul>
                <NavigationMenus data={folder.files} />
              </ul>
            </Menu>
          );
        } else {
          const file = item as File;
          return (
            <li
              key={file.name}
              className="text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Link href={file.path}>{convertToTitleCase(file.name)}</Link>
            </li>
          );
        }
      })}
    </ul>
  );
}

export default function Sidebar({ data }: NavigationMenusProps) {
  const [product, setProduct] = useState("desktop");
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
