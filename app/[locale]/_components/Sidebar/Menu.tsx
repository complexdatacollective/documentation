'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useEffect, useState, type ReactNode } from 'react';

type MenuProps = {
  title: string;
  itemValue: string;
  activeMenu: string | undefined;
  children: ReactNode;
};

export default function Menu({
  title,
  children,
  itemValue,
  activeMenu,
}: MenuProps) {
  const [value, setValue] = useState<string>();

  useEffect(() => {
    setValue(activeMenu);
  }, [activeMenu]);

  return (
    <Accordion
      value={value}
      type="single"
      collapsible
      className="w-full"
      onValueChange={setValue}
    >
      <AccordionItem value={itemValue}>
        <AccordionTrigger className="text-xs">{title}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
