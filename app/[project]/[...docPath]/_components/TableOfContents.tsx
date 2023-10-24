"use client";

import { type HeadingNode } from "@/lib/tableOfContents";
import TOCLink from "./TOCLink";

interface TableOfContentsProps {
  nodes: HeadingNode[] | null;
}

const TableOfContents = ({ nodes }: TableOfContentsProps) => {
  if (!nodes) return null;

  return (
    <div className={`overflow-x-hidden ${nodes.length > 10 && "h-[600px]"} overflow-y-hidden`}>
      <div className="group">
        <h3 className="text-slate-300 uppercase text-md">Table of contents</h3>
        <div className={`group-hover:overflow-y-auto px-3 ${nodes.length > 10 && "h-[600px]"}`}>
          {renderNodes(nodes)}
        </div>
      </div>
    </div>
  );
};

function renderNodes(nodes: HeadingNode[]) {
  return (
    <ul className="mx-6">
      {nodes.map((node) => (
        <li key={node.data.id}>
          <TOCLink node={node} />
          {node.children?.length > 0 && renderNodes(node.children)}
        </li>
      ))}
    </ul>
  );
}

export default TableOfContents;
