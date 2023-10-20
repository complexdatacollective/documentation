"use client";

export interface HeadingNode {
  value: string;
  depth: number;
  data: {
    id: string;
  };
  children: HeadingNode[];
}

interface TableOfContentsProps {
  nodes: HeadingNode[] | unknown;
}

const TableOfContents = ({ nodes }: TableOfContentsProps) => {
  if (!Array.isArray(nodes) || !nodes?.length) return null;

  return (
    <div className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert mx-auto">
      <h3 className={"secondary-text"}>Table of contents</h3>
      {renderNodes(nodes)}
    </div>
  );
};

function renderNodes(nodes: HeadingNode[]) {
  return (
    <ul>
      {nodes.map((node) => (
        <li key={node.data.id}>
          <a href={`#${node.data.id}`}>{node.value}</a>
          {node.children?.length > 0 && renderNodes(node.children)}
        </li>
      ))}
    </ul>
  );
}

export default TableOfContents;
