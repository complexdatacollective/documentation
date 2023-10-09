"use client";

import { Panel } from "@/components/Panel";
import { Hit as AlgoliaHit } from "instantsearch.js";
import {
  DynamicWidgets,
  Highlight,
  Hits,
  RefinementList,
  SearchBox,
  Snippet,
  useInstantSearch,
} from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";

import { algolia_client } from "@/lib/algolia-client";
import ShowMDX from "./ShowMDX";
import Link from "next/link";
import { formatPathPattern } from "@/lib/helper_functions";

type HitProps = {
  hit: AlgoliaHit<{
    title: string;
    content: string;
    filePath: string;
  }>;
};

function Hit({ hit }: HitProps) {
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

function FallbackComponent({ attribute }: { attribute: string }) {
  return (
    <Panel header={attribute}>
      <RefinementList attribute={attribute} />
    </Panel>
  );
}

function EmptyQueryBoundary({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
}) {
  const { indexUiState } = useInstantSearch();

  if (!indexUiState.query) {
    return fallback;
  }

  return children;
}
