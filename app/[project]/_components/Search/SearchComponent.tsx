"use client";

import { DialogContextProvider } from "@/app/[project]/_components/Search/Provider/DialogContext";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import SearchCommand from "./SearchCommand";

const SearchComponent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  return (
    <DialogContextProvider open={open} setOpen={setOpen}>
      <Button
        className="min-w-[250px] text-left flex gap-1 px-2 items-center justify-between"
        variant={"secondary"}
        onClick={() => setOpen(true)}
      >
        <span>Search documentation...</span>
        <span className="rounded-lg bg-white dark:bg-slate-900 p-2 text-xs">Ctrl+J</span>
      </Button>
      <SearchCommand />
    </DialogContextProvider>
  );
};

export default SearchComponent;
