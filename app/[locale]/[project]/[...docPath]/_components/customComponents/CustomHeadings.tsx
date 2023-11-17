import { Link2 } from 'lucide-react';
import { type DetailedHTMLProps, type HTMLAttributes } from 'react';
import HeaderLink from './HeaderLink';

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
        <HeaderLink className="text-green-400" id={props.id}>
          {props.children}
          <Link2 className="hidden text-violet-500 group-hover:block" />
        </HeaderLink>
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
        <HeaderLink id={props.id}>
          {props.children}
          <Link2 className="hidden text-violet-500 group-hover:block" />
        </HeaderLink>
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
        <HeaderLink id={props.id}>
          {props.children}
          <Link2 className="hidden text-violet-500 group-hover:block" />
        </HeaderLink>
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
        <HeaderLink id={props.id}>
          {props.children}
          <Link2 className="hidden text-violet-500 group-hover:block" />
        </HeaderLink>
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
        <HeaderLink id={props.id}>
          {props.children}
          <Link2 className="hidden text-violet-500 group-hover:block" />
        </HeaderLink>
      ) : (
        props.children
      )}
    </h6>
  ),
};
