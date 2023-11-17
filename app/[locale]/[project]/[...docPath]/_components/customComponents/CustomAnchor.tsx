/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import Link from 'next/link';

const CustomAnchor = (props: any) => {
  return <Link href={props.href}>{props.children}</Link>;
};

export default CustomAnchor;

// Todo: fix type of CustomAnchor later
// The below type is not working
// DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
