import { convertToUrlText } from '@/lib/helper_functions';
import { Link2 } from 'lucide-react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import CustomLink from './CustomLink';

// TEMPORARY custom styled heading components
export const styledHeadings = {
  h2: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => (
    <h2 id={convertToUrlText(props.children?.toString() ?? '')}>
      <CustomLink
        className="text-green-400"
        id={`${convertToUrlText(props.children?.toString() ?? '')}`}
      >
        {props.children}
        <Link2 className="hidden text-violet-500 group-hover:block" />
      </CustomLink>
    </h2>
  ),
  h3: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => (
    <h3 id={convertToUrlText(props.children?.toString() ?? '')}>
      <CustomLink id={`${convertToUrlText(props.children?.toString() ?? '')}`}>
        {props.children}
        <Link2 className="hidden text-violet-500 group-hover:block" />
      </CustomLink>
    </h3>
  ),
  h4: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => (
    <h4 id={convertToUrlText(props.children?.toString() ?? '')}>
      <CustomLink id={`${convertToUrlText(props.children?.toString() ?? '')}`}>
        {props.children}
        <Link2 className="hidden text-violet-500 group-hover:block" />
      </CustomLink>
    </h4>
  ),
  h5: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => (
    <h5 id={convertToUrlText(props.children?.toString() ?? '')}>
      <CustomLink id={`${convertToUrlText(props.children?.toString() ?? '')}`}>
        {props.children}
        <Link2 className="hidden text-violet-500 group-hover:block" />
      </CustomLink>
    </h5>
  ),
  h6: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => (
    <h6 id={convertToUrlText(props.children?.toString() ?? '')}>
      <CustomLink id={`${convertToUrlText(props.children?.toString() ?? '')}`}>
        {props.children}
        <Link2 className="hidden text-violet-500 group-hover:block" />
      </CustomLink>
    </h6>
  ),
};
