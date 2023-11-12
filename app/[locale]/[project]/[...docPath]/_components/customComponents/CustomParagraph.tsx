import { type DetailedHTMLProps, type HTMLAttributes } from 'react';

const CustomParagraph = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >,
) => <p style={{ margin: 0, padding: 0 }}>{props.children}</p>;

export default CustomParagraph;
