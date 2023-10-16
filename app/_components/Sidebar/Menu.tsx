import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

type MenuProps = {
  title: string;
  activeTitles: string[];
  children: ReactNode;
};

export default function Menu({ title, children, activeTitles }: MenuProps) {
  return (
    <Accordion
      value={activeTitles.find((t) => t === title)}
      type="single"
      collapsible
      className="w-full"
    >
      <AccordionItem value={title}>
        <AccordionTrigger className="text-red-400">{title}</AccordionTrigger>
        <AccordionContent
          className={`${activeTitles.includes(title) ? "text-violet-500" : "text-slate-500"}`}
        >
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
