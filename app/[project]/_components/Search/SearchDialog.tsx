import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import AlgoliaSearch from "./AlgoliaSearch";
import { DialogContext } from "./Provider/DialogContext";
import { useContext } from "react";

export default function SearchDialog() {
  const { open, setOpen } = useContext(DialogContext);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[600px] h-[400px]">
        <DialogHeader className="overflow-hidden">
          <AlgoliaSearch />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
