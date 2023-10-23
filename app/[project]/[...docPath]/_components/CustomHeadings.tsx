import { convertToUrlText } from "@/lib/helper_functions";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import CustomLink from "./CustomLink";

// temporary custom styled heading components
export const styledHeadings = {
  h2: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h2
      id={convertToUrlText(props.children?.toString() ?? "")}
      className="adjust-heading dark:text-green-400 flex items-center gap-1.5"
    >
      <CustomLink id={`${convertToUrlText(props.children?.toString() ?? "")}`} />
      {props.children}
    </h2>
  ),
  h3: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h3
      id={convertToUrlText(props.children?.toString() ?? "")}
      className="flex items-center gap-1.5"
    >
      <CustomLink id={`${convertToUrlText(props.children?.toString() ?? "")}`} />
      {props.children}
    </h3>
  ),
  h4: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h4
      id={convertToUrlText(props.children?.toString() ?? "")}
      className="flex items-center gap-1.5"
    >
      <CustomLink id={`${convertToUrlText(props.children?.toString() ?? "")}`} />
      {props.children}
    </h4>
  ),
  h5: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h5
      id={convertToUrlText(props.children?.toString() ?? "")}
      className="flex items-center gap-1.5"
    >
      <CustomLink id={`${convertToUrlText(props.children?.toString() ?? "")}`} />
      {props.children}
    </h5>
  ),
  h6: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h6
      id={convertToUrlText(props.children?.toString() ?? "")}
      className="flex items-center gap-1.5"
    >
      <CustomLink id={`${convertToUrlText(props.children?.toString() ?? "")}`} />
      {props.children}
    </h6>
  ),
};
