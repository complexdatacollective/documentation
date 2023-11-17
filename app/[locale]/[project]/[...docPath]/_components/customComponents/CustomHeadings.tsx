import { Link2 } from 'lucide-react';
import { type DetailedHTMLProps, type HTMLAttributes } from 'react';
import CustomLink from './CustomLink';

// TEMPORARY custom styled heading components
export const styledHeadings = {
  h2: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => (
    <h2 id={props.id}>
      {props.id ? (
        <CustomLink className="text-green-400" id={props.id}>
          {props.children}
          <Link2 className="hidden text-violet-500 group-hover:block" />
        </CustomLink>
      ) : (
        props.children
      )}
    </h2>
  ),
  h3: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => (
    <h3 id={props.id}>
      {props.id ? (
        <CustomLink id={props.id}>
          {props.children}
          <Link2 className="hidden text-violet-500 group-hover:block" />
        </CustomLink>
      ) : (
        props.children
      )}
    </h3>
  ),
  h4: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => (
    <h4 id={props.id}>
      {props.id ? (
        <CustomLink id={props.id}>
          {props.children}
          <Link2 className="hidden text-violet-500 group-hover:block" />
        </CustomLink>
      ) : (
        props.children
      )}
    </h4>
  ),
  h5: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => (
    <h5 id={props.id}>
      {props.id ? (
        <CustomLink id={props.id}>
          {props.children}
          <Link2 className="hidden text-violet-500 group-hover:block" />
        </CustomLink>
      ) : (
        props.children
      )}
    </h5>
  ),
  h6: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => (
    <h6 id={props.id}>
      {props.id ? (
        <CustomLink id={props.id}>
          {props.children}
          <Link2 className="hidden text-violet-500 group-hover:block" />
        </CustomLink>
      ) : (
        props.children
      )}
    </h6>
  ),
};
