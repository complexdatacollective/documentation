"use client";

import EmptyQueryBoundary from "@/app/[project]/_components/Search/EmtyQueryBoundary";
import FallbackComponent from "@/app/[project]/_components/Search/FallbackComponent";
import { Separator } from "@/components/ui/separator";
import { algolia_client } from "@/lib/algolia-client.mjs";
import { DynamicWidgets, Hits, SearchBox } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import Hit from "./Hit";

export default function AlgoliaSearch() {
  return (
    <div className="w-full">
      <InstantSearchNext
        searchClient={algolia_client}
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME!}
        insights={true}
      >
        <div className="w-full">
          <div>
            <DynamicWidgets fallbackComponent={FallbackComponent} />
          </div>
          <div className=" relative">
            <SearchBox
              placeholder="search for document..."
              classNames={{
                root: "rounded-md p-1.5 w-full",
                resetIcon: "hidden",
                input: "p-2 rounded-lg w-full bg-transparent",
                submitIcon: "hidden",
                reset: "hidden",
              }}
            />
            <Separator className="absolute top-[60px]" />
            <EmptyQueryBoundary fallback={null}>
              <Hits className="mt-10 h-64 overflow-y-auto overflow-x-hidden" hitComponent={Hit} />
            </EmptyQueryBoundary>
          </div>
        </div>
      </InstantSearchNext>
    </div>
  );
}
