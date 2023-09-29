"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export default function SwitchProducts() {
  const router = useRouter();

  return (
    <Select
      defaultValue="desktop"
      onValueChange={(val) => router.push(val === "desktop" ? "/" : `/${val}`)}
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
