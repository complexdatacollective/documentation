import { formatPathPattern } from "@/lib/helper_functions";
import { Hit as AlgoliaHit } from "instantsearch.js";
import Link from "next/link";
import { Highlight, Snippet } from "react-instantsearch";

type HitProps = {
  hit: AlgoliaHit<{
    title: string;
    content: string;
    filePath: string;
  }>;
};

export default function Hit({ hit }: HitProps) {
  return (
    <div className="flex gap-2 flex-col">
      <Link href={formatPathPattern(hit.filePath)} className="text-xl underline">
        <Highlight
          classNames={{ highlighted: "text-red-400 bg-black", root: "text-teal-400" }}
          hit={hit}
          attribute="title"
        />
      </Link>
      <Link href={formatPathPattern(hit.filePath)} className="underline">
        <Snippet
          classNames={{ root: "overflow-hidden whitespace-nowrap overflow-ellipsis" }}
          attribute="content"
          hit={hit}
          highlightedTagName={"mark"}
        />
      </Link>
    </div>
  );
}
