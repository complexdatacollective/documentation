"use client";

import EmptyQueryBoundary from "@/app/[project]/_components/Search/EmtyQueryBoundary";
import { Separator } from "@/components/ui/separator";
import { algolia_client } from "@/lib/algolia-client.mjs";
import { Hits } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import CustomSearchBox from "./CustomSearchBox";
import Hit from "./Hit";
import NoResultsBoundary from "./NoResultsBoundary";

export default function AlgoliaSearch() {
  return (
    <div className="w-[550px]">
      <InstantSearchNext
        searchClient={algolia_client}
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME!}
        insights={true}
      >
        <CustomSearchBox />
        <Separator />
        <NoResultsBoundary />
        <EmptyQueryBoundary>
          <Hits hitComponent={Hit} />
        </EmptyQueryBoundary>
      </InstantSearchNext>
    </div>
  );
}
