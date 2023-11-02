import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { getAllLocales } from "./lib/docs";

// export const locales = ["en", "ru"] as const;
const locales = getAllLocales().map((dirent) => dirent.name);

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
