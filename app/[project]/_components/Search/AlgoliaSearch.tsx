"use client";

import EmptyQueryBoundary from "@/app/[project]/_components/Search/EmtyQueryBoundary";
import FallbackComponent from "@/app/[project]/_components/Search/FallbackComponent";
import { algolia_client } from "@/lib/algolia-client.mjs";
import { DynamicWidgets, Hits, SearchBox } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import Hit from "./Hit";

export default function Search() {
  return (
    <InstantSearchNext
      searchClient={algolia_client}
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME + ""}
      insights={true}
    >
      <div className="w-[500px]">
        <div>
          <DynamicWidgets fallbackComponent={FallbackComponent} />
        </div>
        <div>
          <SearchBox
            placeholder="search for document..."
            classNames={{
              root: "bg-blue-400 rounded-md p-1.5 w-full",
              resetIcon: "hidden",
              input: "p-2 rounded-lg w-full",
              submitIcon: "hidden",
            }}
          />
          <EmptyQueryBoundary fallback={null}>
            <Hits hitComponent={Hit} />
          </EmptyQueryBoundary>
        </div>
      </div>
    </InstantSearchNext>
  );
}
