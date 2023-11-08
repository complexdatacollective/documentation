import React, { type ReactNode } from 'react';
import { Terminal, Lightbulb } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const TipBox = ({ children }: { children: ReactNode }) => {
  return (
    <Alert className="my-5 border border-red-400">
      <Terminal className="h-4 w-4" />
      <AlertTitle>
        <Lightbulb />
      </AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

export default TipBox;
