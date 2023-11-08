import { type ReactNode } from 'react';

type ButtonPrimaryProps = {
  children: ReactNode;
  href: string;
};

function ButtonPrimary({ children, href }: ButtonPrimaryProps) {
  return (
    <a
      className="btn inline-block rounded-md bg-violet-700 p-4 text-center text-white hover:bg-violet-800"
      style={{ textDecoration: 'none' }}
      href={href}
    >
      <p>{children}</p>
    </a>
  );
}

export default ButtonPrimary;
