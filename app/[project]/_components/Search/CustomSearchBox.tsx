import { Input } from "@/components/ui/input";
import { Loader, Search as SearchIcon } from "lucide-react";
import { useRef, useState } from "react";
import { UseSearchBoxProps, useInstantSearch, useSearchBox } from "react-instantsearch";

export default function CustomSearchBox(props: UseSearchBoxProps) {
  const { query, refine } = useSearchBox(props);
  const { status } = useInstantSearch();
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef<HTMLInputElement>(null);

  const isSearchStalled = status === "stalled";

  function setQuery(newQuery: string) {
    setInputValue(newQuery);

    refine(newQuery);
  }

  return (
    <form
      autoFocus
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();

        if (inputRef.current) {
          inputRef.current.blur();
        }
      }}
      onReset={(event) => {
        event.preventDefault();
        event.stopPropagation();

        setQuery("");

        if (inputRef.current) {
          inputRef.current.focus();
        }
      }}
    >
      <div className="flex items-center px-1.5">
        {isSearchStalled ? (
          <Loader size={"19px"} className="text-gray-400 animate-spin" />
        ) : (
          <SearchIcon size={"19px"} className="text-gray-400" />
        )}
        <Input
          className="border-transparent w-[90%] px-1.5"
          ref={inputRef}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder="Search for documents..."
          spellCheck={false}
          type="text"
          value={inputValue}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
          }}
        />
      </div>
      <button hidden type="submit">
        Submit
      </button>
      <button type="reset" hidden>
        Reset
      </button>
    </form>
  );
}
