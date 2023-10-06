import algoliasearch from "algoliasearch";

export const algolia_client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID + "",
  process.env.ALGOLIA_ADMIN_KEY + ""
);
