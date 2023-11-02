import { convertToUrlText } from "@/lib/helper_functions";
import { Link2 } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import CustomLink from "./CustomLink";

// TEMPORARY custom styled heading components
// Todo: Fix heading id for other languages (it's not working for russian language)
// Todo: probably will work for other languages, so it's better to fix it later
export const styledHeadings = {
  h2: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => (
    <h2 id={convertToUrlText(props.children?.toString() ?? "")}>
      <CustomLink
        className="text-green-400"
        id={`${convertToUrlText(props.children?.toString() ?? "")}`}
      >
        {props.children}
        <Link2 className="text-violet-500 hidden group-hover:block" />
      </CustomLink>
    </h2>
  ),
  h3: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => (
    <h3 id={convertToUrlText(props.children?.toString() ?? "")}>
      <CustomLink id={`${convertToUrlText(props.children?.toString() ?? "")}`}>
        {props.children}
        <Link2 className="text-violet-500 hidden group-hover:block" />
      </CustomLink>
    </h3>
  ),
  h4: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => (
    <h4 id={convertToUrlText(props.children?.toString() ?? "")}>
      <CustomLink id={`${convertToUrlText(props.children?.toString() ?? "")}`}>
        {props.children}
        <Link2 className="text-violet-500 hidden group-hover:block" />
      </CustomLink>
    </h4>
  ),
  h5: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => (
    <h5 id={convertToUrlText(props.children?.toString() ?? "")}>
      <CustomLink id={`${convertToUrlText(props.children?.toString() ?? "")}`}>
        {props.children}
        <Link2 className="text-violet-500 hidden group-hover:block" />
      </CustomLink>
    </h5>
  ),
  h6: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => (
    <h6 id={convertToUrlText(props.children?.toString() ?? "")}>
      <CustomLink id={`${convertToUrlText(props.children?.toString() ?? "")}`}>
        {props.children}
        <Link2 className="text-violet-500 hidden group-hover:block" />
      </CustomLink>
    </h6>
  ),
};
