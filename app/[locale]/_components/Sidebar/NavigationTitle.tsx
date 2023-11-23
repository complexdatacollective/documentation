import { type ReactNode } from 'react';
import { Link } from '@/navigation';

type NavigationTitleProps = {
  children: ReactNode;
  title: string;
  titleURL: string | null;
};

const NavigationTitle = ({
  children,
  title,
  titleURL,
}: NavigationTitleProps) => {
  return (
    <div>
      {titleURL ? (
        <Link
          href={titleURL}
          className="font-bolder text-base text-green-400 no-underline"
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
