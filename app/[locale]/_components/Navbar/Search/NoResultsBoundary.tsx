import { CommandEmpty } from "@/components/ui/command";
import { useInstantSearch } from "react-instantsearch";

export default function NoResultsBoundary({
  noResultForTxt,
}: {
  noResultForTxt: string;
}) {
  const { results, indexUiState } = useInstantSearch();

  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <>
        <div className="mt-10 text-lg flex justify-center items-center h-64 overflow-y-auto overflow-x-hidden">
          <CommandEmpty>
            {noResultForTxt} <q>{indexUiState.query}</q>.
          </CommandEmpty>
        </div>
      </>
    );
  }

  return null;
}
