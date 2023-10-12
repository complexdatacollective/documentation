"use client";

import { formatPathPattern } from "@/lib/helper_functions";
import { Hit as AlgoliaHit } from "instantsearch.js";
import Link from "next/link";
import { useContext } from "react";
import { Highlight, Snippet } from "react-instantsearch";
import { DialogContext } from "./Provider/DialogContext";

type HitProps = {
  hit: AlgoliaHit<{
    title: string;
    content: string;
    filePath: string;
  }>;
};

export default function Hit({ hit }: HitProps) {
  const { setOpen } = useContext(DialogContext);
  const path = "/" + formatPathPattern(hit.filePath);

  return (
    <Link onClick={() => setOpen(false)} href={path} className="underline flex gap-2 flex-col">
      <Highlight
        classNames={{ highlighted: "text-red-400 bg-black", root: "text-teal-400" }}
        hit={hit}
        attribute="title"
      />

      <Snippet
        classNames={{ root: "" }}
        attribute="content"
        hit={hit}
        highlightedTagName={"mark"}
      />
    </Link>
  );
}
