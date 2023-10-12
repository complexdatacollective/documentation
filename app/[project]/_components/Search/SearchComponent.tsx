"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchDialog from "./SearchDialog";
import { useState } from "react";

const SearchComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
      <SearchDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default SearchComponent;
