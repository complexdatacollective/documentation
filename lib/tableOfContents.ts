import { Node } from "unist";
import { VFile } from "vfile";
import { toString } from "mdast-util-to-string";
import { remark } from "remark";
import { visit } from "unist-util-visit";

type HeadingNode = {
  value: string;
  depth: number;
  data: {
    id: string;
  };
  children: HeadingNode[];
};

export function headingTree(): (node: Node, file: VFile) => void {
  return (node, file) => {
    file.data.headings = getHeadingsForTree(node);
  };
}

function getHeadingsForTree(root: Node): HeadingNode[] {
  const nodes = {};
  const output: HeadingNode[] = [];
  const indexMap = {};
  visit(root, "heading", (node: Node) => {
    addID(node, nodes);
    transformNode(node, output, indexMap);
  });

  return output;
}

/*
 * Add an "id" attribute to the heading elements based on their content
 */
function addID(node: Node, nodes: Record<string, number>): void {
  const id = node.children.map((c: Node) => c.value || "").join("");
  nodes[id] = (nodes[id] || 0) + 1;
  node.data = node.data || {
    id: `${id}${nodes[id] > 1 ? ` ${nodes[id] - 1}` : ""}`
      .replace(/[^a-zA-Z\d\s-]/g, "")
      .split(" ")
      .join("-")
      .toLowerCase(),
  };
}

// sadas

function transformNode(node: Node, output: HeadingNode[], indexMap: Record<string, any>): void {
  const transformedNode: HeadingNode = {
    value: toString(node),
    depth: node.depth as number,
    data: node.data,
    children: [],
  };

  if (node.depth === 2) {
    output.push(transformedNode);
    indexMap[node.depth] = transformedNode;
  } else {
    const parent = indexMap[node.depth - 1];
    if (parent) {
      parent.children.push(transformedNode);
      indexMap[node.depth] = transformedNode;
    }
  }
}

export async function getHeadings(content: string) {
  // Use remark to convert Markdown into HTML string
  const processedContent = await remark().use(headingTree).process(content);

  return processedContent.data.headings;
}
