import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";
import AlgoliaSearch from "./AlgoliaSearch";

interface SearchDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function SearchDialog({ open, setOpen }: SearchDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[600px] h-[400px]">
        <DialogHeader>
          <AlgoliaSearch />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
