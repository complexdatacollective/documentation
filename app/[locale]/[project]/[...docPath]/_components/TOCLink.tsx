"use client";

import useHighlighted from "@/hooks/useHighlighted";
import { type HeadingNode } from "@/lib/tableOfContents";
import Link from "next/link";
import { useEffect, useRef } from "react";

const TOCLink = ({ node }: { node: HeadingNode }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [highlighted] = useHighlighted(node.data.id);

  useEffect(() => {
    if (highlighted && ref.current) {
      ref.current.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [highlighted]);

  return (
    <Link
      ref={ref}
      href={`#${node.data.id}`}
      className={`block ${
        node.depth === 2 ? "text-sm lg:text-base" : "text-xs lg:text-sm"
      } hover:accent-color py-1 ${
        highlighted
          ? "text-violet-500"
          : "text-slate-500 transition-colors dark:hover:text-white"
      }`}
    >
      {node.value}
    </Link>
  );
};

export default TOCLink;
