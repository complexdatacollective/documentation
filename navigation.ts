import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { env } from './env.mjs';

type Locales = string[];

export const locales: Locales = JSON.parse(
  env.NEXT_PUBLIC_LANGUAGES,
) as Locales;

// export const locales = ['en', 'ru'] as const;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
