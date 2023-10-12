import { useInstantSearch } from "react-instantsearch";

export default function EmptyQueryBoundary({ children }: { children: React.ReactNode }) {
  const { indexUiState } = useInstantSearch();

  if (!indexUiState.query) {
    return (
      <div className="mt-10 text-lg flex justify-center items-center h-64 overflow-y-auto overflow-x-hidden">
        No results
      </div>
    );
  }

  return <div className="mt-10 h-64 overflow-y-auto overflow-x-hidden">{children}</div>;
}
