"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type ProductSwitcherProps = {
  setProduct: Dispatch<SetStateAction<string>>;
  product: string;
};

export default function ProductSwitcher({ setProduct, product }: ProductSwitcherProps) {
  const router = useRouter();

  return (
    <Select
      value={product}
      onValueChange={(val) => {
        setProduct(val);
        router.push(`/${val}`);
      }}
    >
      <SelectTrigger className="w-full h-16 text-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
        <SelectValue placeholder="Select software" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem className="text-lg" value="desktop">
            Desktop
          </SelectItem>
          <SelectItem className="text-lg" value="fresco">
            Fresco
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
