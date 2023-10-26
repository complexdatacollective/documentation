"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "next-intl";
import { useRouter } from "next-intl/client";

interface LanguageSwitcherProps {
  width: string;
}

const LanguageSwitcher = ({ width }: LanguageSwitcherProps) => {
  const locale = useLocale();
  const router = useRouter();

  return (
    <Select
      onValueChange={(val) => {
        router.push("/", { locale: val });
      }}
    >
      <SelectTrigger
        className={`dark:bg-slate-700 dark:hover:bg-slate-600 bg-white hover:bg-stone-100 ${width} space-x-1 text-xs sm:text-sm`}
      >
        <SelectValue placeholder={locale === "en" ? "English" : "Русский"} />
      </SelectTrigger>
      <SelectContent className="dark:bg-slate-700 bg-white">
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ru">Русский</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
