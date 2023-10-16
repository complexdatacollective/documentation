"use client";

import { CommandItem } from "@/components/ui/command";
import { formatPathPattern } from "@/lib/helper_functions";
import { Hit as AlgoliaHit } from "instantsearch.js";
import { FileText } from "lucide-react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const { setOpen } = useContext(DialogContext);
  const path = "/" + formatPathPattern(hit.filePath);

  const handleSelect = () => {
    router.push(path);
    setOpen(false);
  };

  return (
    <CommandItem className="cursor-pointer" onSelect={handleSelect}>
      <FileText className="mr-2 h-4 w-4" />
      <div className="underline flex gap-2 flex-col">
        <Highlight
          classNames={{ highlighted: "text-red-400 bg-black", root: "text-teal-400 text-lg" }}
          hit={hit}
          attribute="title"
        />

        <Snippet
          classNames={{ root: "" }}
          attribute="content"
          hit={hit}
          highlightedTagName={"mark"}
        />
      </div>
    </CommandItem>
  );
}
