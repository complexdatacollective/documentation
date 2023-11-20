import Link from 'next/link';

const CustomAnchor = (props: React.JSX.IntrinsicElements['a']) => {
  return <Link href={props.href ?? '#'}>{props.children}</Link>;
};

export default CustomAnchor;
