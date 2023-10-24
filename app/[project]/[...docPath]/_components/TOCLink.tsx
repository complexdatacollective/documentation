import useHighlighted from "@/hooks/useHighlighted";
import { type HeadingNode } from "@/lib/tableOfContents";
import Link from "next/link";
import { MouseEvent } from "react";

const TOCLink = ({ node }: { node: HeadingNode }) => {
  const [highlighted, setHighlighted] = useHighlighted(node.data.id);

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, node: HeadingNode) => {
    event.preventDefault();
    setHighlighted(node.data.id);

    const headingElement = document.getElementById(node.data.id);

    if (headingElement) {
      const navbarHeight = 80;
      const topOffset = headingElement.getBoundingClientRect().top;
      const scrollOptions: ScrollIntoViewOptions = {
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      };

      window.scrollBy({ top: topOffset - navbarHeight, ...scrollOptions });
    }
  };

  return (
    <Link
      href={`#${node.data.id}`}
      onClick={(event) => handleLinkClick(event, node)}
      className={`block ${
        node.depth === 2 ? "text-sm lg:text-base" : "text-xs lg:text-sm"
      } hover:accent-color py-1 ${
        highlighted ? "text-violet-500" : "text-slate-500 transition-colors dark:hover:text-white"
      }`}
    >
      {node.value}
    </Link>
  );
};

export default TOCLink;
