'use client';

import { Link } from '@/navigation';
import { useEffect, useRef } from 'react';

type NavigationLinkProps = {
  filePath: string;
  fileName: string;
  highlighted: boolean;
};

const NavigationLink = ({
  filePath,
  fileName,
  highlighted,
}: NavigationLinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (highlighted && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'auto',
        block: 'nearest',
        inline: 'nearest',
      });
    }
  }, [highlighted]);

  return (
    <Link
      ref={ref}
      className={`${
        highlighted ? 'text-violet-500' : 'text-slate-500'
      } text-sm transition-colors hover:text-violet-500 dark:hover:text-white`}
      href={filePath}
    >
      {fileName}
    </Link>
  );
};

export default NavigationLink;
