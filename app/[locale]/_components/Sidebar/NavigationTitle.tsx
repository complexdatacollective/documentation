import { type ReactNode } from 'react';
import { Link } from '@/navigation';

type NavigationTitleProps = {
  children: ReactNode;
  title: string;
  titleURL: string | null;
  highlighted: boolean;
};

const NavigationTitle = ({
  children,
  title,
  titleURL,
  highlighted,
}: NavigationTitleProps) => {
  return (
    <div>
      {titleURL ? (
        <Link
          className={`${
            highlighted && 'text-blue-600'
          } text-xs font-bold transition-colors`}
          href={titleURL}
        >
          {title}
        </Link>
      ) : (
        title
      )}
      <div>{children}</div>
    </div>
  );
};

export default NavigationTitle;
