"use client";

import EmptyQueryBoundary from "@/app/[project]/_components/Search/EmtyQueryBoundary";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandGroup,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { algolia_client } from "@/lib/algolia-client.mjs";
import { useEffect, useState } from "react";
import { Hits } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import CustomSearchBox from "./CustomSearchBox";
import Hit from "./Hit";
import NoResultsBoundary from "./NoResultsBoundary";
import { DialogContextProvider } from "./Provider/DialogContext";

export default function SearchCommand() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  return (
    <DialogContextProvider open={open} setOpen={setOpen}>
      <Button
        className="min-w-[250px] text-left flex gap-1 px-2 items-center justify-between"
        variant={"secondary"}
        onClick={() => setOpen(true)}
      >
        <span>Search documentation...</span>
        <span className="rounded-lg bg-white dark:bg-slate-900 p-2 text-xs">Ctrl+J</span>
      </Button>

      <InstantSearchNext
        searchClient={algolia_client}
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME!}
        insights={true}
      >
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command className="rounded-lg border shadow-md">
            <CustomSearchBox />
            <CommandSeparator />

            <CommandList>
              <NoResultsBoundary />
              <CommandGroup>
                <EmptyQueryBoundary>
                  <Hits hitComponent={Hit} />
                </EmptyQueryBoundary>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </InstantSearchNext>
    </DialogContextProvider>
  );
}
