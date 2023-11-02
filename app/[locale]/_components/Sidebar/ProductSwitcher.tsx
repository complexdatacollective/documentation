"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "@/navigation";
import { type Dispatch, type SetStateAction } from "react";

type ProductSwitcherProps = {
  setProduct: Dispatch<SetStateAction<string>>;
  product: string;
};

export default function ProductSwitcher({
  setProduct,
  product,
}: ProductSwitcherProps) {
  const router = useRouter();

  return (
    <Select
      value={product}
      onValueChange={(val) => {
        setProduct(val);
        router.push(`/${val}`);
      }}
    >
      <SelectTrigger className="w-full h-16 text-sm lg:text-base hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
        <SelectValue placeholder="Select software" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem className="text-sm lg:text-base" value="desktop">
            Desktop
          </SelectItem>
          <SelectItem className="text-sm lg:text-base" value="fresco">
            Fresco
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
