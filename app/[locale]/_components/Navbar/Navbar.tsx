import { Button } from '@/components/ui/button';
import { Link } from '@/navigation';
import logo from '@/public/assets/img/logo.svg';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import SearchCommand from './Search/SearchCommand';
import { ThemeToggle } from './themeToggle';
import LanguageSwitcher from './languageSwitcher';

const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <div className="sticky top-0 z-50 mb-5 border-b border-slate-200 bg-slate-950">
      <div className="container flex h-16 items-center justify-between p-1">
        <Link href={'/'} className="flex items-center gap-0.5">
          <Image
            width="40"
            height="40"
            priority
            src={logo as string}
            alt="Logo"
          />
          <span className="text-white">Network Canvas</span>
        </Link>
        <div className="flex items-center gap-3">
          <SearchCommand />
          <LanguageSwitcher width="w-fit" />
          <ThemeToggle />
          <Button>{t('communityBtn')}</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
