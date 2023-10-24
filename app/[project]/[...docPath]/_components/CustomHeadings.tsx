import { convertToUrlText } from "@/lib/helper_functions";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import CustomLink from "./CustomLink";
import { Link2 } from "lucide-react";

// temporary custom styled heading components
export const styledHeadings = {
  h2: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <CustomLink id={`${convertToUrlText(props.children?.toString() ?? "")}`}>
      <h2
        id={convertToUrlText(props.children?.toString() ?? "")}
        className="adjust-heading dark:text-green-400 flex items-center gap-1.5"
      >
        {props.children}
        <Link2 className="text-violet-500 hidden group-hover:block" />
      </h2>
    </CustomLink>
  ),
  h3: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <CustomLink id={`${convertToUrlText(props.children?.toString() ?? "")}`}>
      <h3
        id={convertToUrlText(props.children?.toString() ?? "")}
        className="adjust-heading flex items-center gap-1.5"
      >
        {props.children}
        <Link2 className="text-violet-500 hidden group-hover:block" />
      </h3>
    </CustomLink>
  ),
  h4: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <CustomLink id={`${convertToUrlText(props.children?.toString() ?? "")}`}>
      <h4
        id={convertToUrlText(props.children?.toString() ?? "")}
        className="adjust-heading flex items-center gap-1.5"
      >
        {props.children}
        <Link2 className="text-violet-500 hidden group-hover:block" />
      </h4>
    </CustomLink>
  ),
  h5: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <CustomLink id={`${convertToUrlText(props.children?.toString() ?? "")}`}>
      <h5
        id={convertToUrlText(props.children?.toString() ?? "")}
        className="adjust-heading flex items-center gap-1.5"
      >
        {props.children}
        <Link2 className="text-violet-500 hidden group-hover:block" />
      </h5>
    </CustomLink>
  ),
  h6: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <CustomLink id={`${convertToUrlText(props.children?.toString() ?? "")}`}>
      <h6
        id={convertToUrlText(props.children?.toString() ?? "")}
        className="adjust-heading flex items-center gap-1.5"
      >
        {props.children}
        <Link2 className="text-violet-500 hidden group-hover:block" />
      </h6>
    </CustomLink>
  ),
};
