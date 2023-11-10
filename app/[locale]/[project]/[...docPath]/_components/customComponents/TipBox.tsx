import React, { type ReactNode } from 'react';
import { Terminal, Lightbulb, ShieldAlert } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type TipBoxProps = {
  children: ReactNode;
  danger: boolean;
};

const TipBox = ({ children, danger }: TipBoxProps) => {
  return (
    <Alert
      variant={danger ? 'destructive' : 'default'}
      className={`my-5 border ${danger ? 'border-red-400' : 'border-blue-500'}`}
    >
      <Terminal className="h-4 w-4" />
      <AlertTitle>
        {danger ? (
          <ShieldAlert className="text-red-400" />
        ) : (
          <Lightbulb className="text-blue-500" />
        )}
      </AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

export default TipBox;
