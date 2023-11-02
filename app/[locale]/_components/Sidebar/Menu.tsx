import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type ReactNode } from "react";

type MenuProps = {
  title: string;
  value: string | undefined;
  children: ReactNode;
};

export default function Menu({ title, children, value }: MenuProps) {
  return (
    <Accordion value={value} type="single" collapsible className="w-full">
      <AccordionItem value={title}>
        <AccordionTrigger className="text-red-400 text-base">
          {title}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
