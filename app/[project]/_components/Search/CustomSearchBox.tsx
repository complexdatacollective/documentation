import { Input } from "@/components/ui/input";
import React, { useState, useRef } from "react";
import { useInstantSearch, useSearchBox, UseSearchBoxProps } from "react-instantsearch";

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
      <Input
        className="border-transparent"
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
      <button hidden type="submit">
        Submit
      </button>
      <button type="reset" hidden>
        Reset
      </button>
      <span hidden={!isSearchStalled}>Searching…</span>
    </form>
  );
}
