import { Button } from "@/components/ui/button";
import logo from "@/public/assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import SearchCommand from "../../[project]/_components/Search/SearchCommand";
import LanguageSwitcher from "./languageSwitcher";
import { ThemeToggle } from "./themeToggle";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const themeTranslations = {
    light: t("themeLight"),
    dark: t("themeDark"),
    system: t("themeSystem"),
  };

  const searchCommandTranslations = {
    searchPlaceholder: t("SearchPlaceholder"),
  };

  return (
    <div className="border-slate-200 border-b mb-5 sticky top-0 z-50 bg-slate-950">
      <div className="container flex items-center justify-between h-16 p-1">
        <Link href={"/"} className="flex gap-0.5 items-center">
          <Image width="40" height="40" priority src={logo} alt="Logo" />
          <span className="text-green-400">Network Canvas</span>
        </Link>
        <div className="flex gap-3 items-center">
          <SearchCommand searchCommandTranslations={searchCommandTranslations} />
          <LanguageSwitcher width="w-fit" />
          <ThemeToggle themeTranslations={themeTranslations} />
          <Button>{t("communityBtn")}</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
