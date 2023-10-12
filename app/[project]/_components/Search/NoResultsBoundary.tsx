import { useInstantSearch } from "react-instantsearch";

export default function NoResultsBoundary({ children }: React.PropsWithChildren) {
  const { results } = useInstantSearch();

  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <>
        <NoResults />
        <div hidden>{children}</div>
      </>
    );
  }

  return <>{children}</>;
}

function NoResults() {
  const { indexUiState } = useInstantSearch();

  return (
    <div className="mt-10 text-lg flex justify-center items-center h-64 overflow-y-auto overflow-x-hidden">
      <p>
        No results for <q>{indexUiState.query}</q>.
      </p>
    </div>
  );
}
