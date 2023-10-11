import algoliasearch from "algoliasearch";

export const algolia_client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID + "",
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY + ""
);
