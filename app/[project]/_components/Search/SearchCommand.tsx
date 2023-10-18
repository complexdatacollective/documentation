"use client";

import EmptyQueryBoundary from "@/app/[project]/_components/Search/EmtyQueryBoundary";
import {
  Command,
  CommandDialog,
  CommandGroup,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { algolia_client } from "@/lib/algolia-client.mjs";
import { useContext } from "react";
import { Hits } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import CustomSearchBox from "./CustomSearchBox";
import Hit from "./Hit";
import NoResultsBoundary from "./NoResultsBoundary";
import { DialogContext } from "./Provider/DialogContext";

export default function SearchCommand() {
  const { open, setOpen } = useContext(DialogContext);

  return (
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
  );
}
