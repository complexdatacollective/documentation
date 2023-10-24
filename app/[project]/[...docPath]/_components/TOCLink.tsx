import useHighlighted from "@/hooks/useHighlighted";
import { type HeadingNode } from "@/lib/tableOfContents";
import Link from "next/link";

const TOCLink = ({ node }: { node: HeadingNode }) => {
  const [highlighted, setHighlighted] = useHighlighted(node.data.id);

  return (
    <Link
      href={`#${node.data.id}`}
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
