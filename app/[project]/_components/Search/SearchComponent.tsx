"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchDialog from "./SearchDialog";
import { useState } from "react";
import { DialogContextProvider } from "@/app/[project]/_components/Search/Provider/DialogContext";

const SearchComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <DialogContextProvider open={open} setOpen={setOpen}>
      <div>
        <Button
          className="min-w-[250px] text-left flex items-center justify-between"
          variant={"secondary"}
          onClick={() => setOpen(true)}
        >
          <span>Search documentation...</span>
          <Search />
        </Button>
      </div>
      <SearchDialog />
    </DialogContextProvider>
  );
};

export default SearchComponent;
