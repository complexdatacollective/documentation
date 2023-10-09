"use client";

import { Panel } from "@/components/Panel";
import { Hit as AlgoliaHit } from "instantsearch.js";
import { DynamicWidgets, Highlight, Hits, RefinementList, SearchBox } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";

import { algolia_client } from "@/lib/algolia-client";

type HitProps = {
  hit: AlgoliaHit<{
    title: string;
    content: string;
  }>;
};

function Hit({ hit }: HitProps) {
  return (
    <>
      <Highlight hit={hit} attribute="content" className="Hit-label" />
      <span className="Hit-price">${hit.content}</span>
    </>
  );
}

export default function Search() {
  return (
    <InstantSearchNext
      searchClient={algolia_client}
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME + ""}
      routing
    >
      <div className="Container">
        <div>
          <DynamicWidgets fallbackComponent={FallbackComponent} />
        </div>
        <div>
          <SearchBox className="bg-blue-400 p-2" />
          <Hits content="hey" hitComponent={Hit} />
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
