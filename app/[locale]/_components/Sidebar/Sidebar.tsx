'use client';

import { filterSidebarData } from '@/lib/helper_functions';
import { usePathname } from '@/navigation';
import { type SidebarData } from '@/types';
import { useEffect, useMemo, useState } from 'react';
import ProductSwitcher from './ProductSwitcher';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import NavigationMenus from './NavigationMenus';

type SidebarProps = {
  data: SidebarData;
  locale: string;
};

export default function Sidebar({ data, locale }: SidebarProps) {
  const [product, setProduct] = useState('');
  const pathName = usePathname();
  const pathItems = pathName.split('/').splice(1);

  useEffect(() => {
    const currentProduct = pathName.split('/')[1]; // splitting pathname to get current "product"
    setProduct(currentProduct ? currentProduct : 'desktop'); // setting default product to "desktop" if it's empty string
  }, [pathName]);

  const filteredSidebarData = useMemo(
    () => filterSidebarData(product, data, locale),
    [product, data, locale],
  );

  return (
    <div className="sticky top-20 flex flex-col gap-2">
      <ProductSwitcher product={product} setProduct={setProduct} />

      <ScrollArea className="h-[750px] rounded-md border p-4">
        {filteredSidebarData && (
          <NavigationMenus
            pathItems={pathItems}
            sidebarData={filteredSidebarData.files}
          />
        )}
      </ScrollArea>
    </div>
  );
}
