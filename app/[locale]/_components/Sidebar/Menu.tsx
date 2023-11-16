import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { type ReactNode } from 'react';

type MenuProps = {
  title: string;
  itemValue: string;
  value: string | undefined;
  children: ReactNode;
};

export default function Menu({ title, children, itemValue, value }: MenuProps) {
  return (
    <Accordion value={value} type="single" collapsible className="w-full">
      <AccordionItem value={itemValue}>
        <AccordionTrigger className="text-base text-red-400">
          {title}
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
