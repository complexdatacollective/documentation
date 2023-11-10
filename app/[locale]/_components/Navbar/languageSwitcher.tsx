'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from '@/navigation';
import { useLocale } from 'next-intl';

interface LanguageSwitcherProps {
  width: string;
}

const LanguageSwitcher = ({ width }: LanguageSwitcherProps) => {
  const locale = useLocale();
  const router = useRouter();

  return (
    <Select
      onValueChange={(val) => {
        router.push(`/${val}/desktop`); // temporarily pushing to desktop docs
      }}
    >
      <SelectTrigger
        className={`bg-white hover:bg-stone-100 dark:bg-slate-700 dark:hover:bg-slate-600 ${width} space-x-1 text-xs sm:text-sm`}
      >
        <SelectValue placeholder={locale === 'en' ? 'English' : 'Русский'} />
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-slate-700">
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ru">Русский</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
