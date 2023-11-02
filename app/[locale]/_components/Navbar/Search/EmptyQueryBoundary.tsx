import { useInstantSearch } from "react-instantsearch";

type EmptyQueryBoundaryProps = {
  noResultTxt: string;
  children: React.ReactNode;
};

export default function EmptyQueryBoundary({
  children,
  noResultTxt,
}: EmptyQueryBoundaryProps) {
  const { indexUiState } = useInstantSearch();

  if (!indexUiState.query) {
    return (
      <div className="mt-10 text-lg flex justify-center items-center h-64 overflow-y-auto overflow-x-hidden">
        {noResultTxt}
      </div>
    );
  }

  return <div className="mt-5">{children}</div>;
}
