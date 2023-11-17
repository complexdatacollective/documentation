/* eslint-disable no-console */
import Link from 'next/link';
import { type DetailedHTMLProps, type HTMLAttributes } from 'react';

interface CustomAnchorProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  href: string;
}

const CustomAnchor = (props: CustomAnchorProps) => {
  return <Link href={props.href}>{props.children}</Link>;
};

export default CustomAnchor;
