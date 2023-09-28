import { ReactNode } from "react";

export const MyH1 = ({ children }: { children: ReactNode }) => (
  <h1 className="text-yellow-400">{children}</h1>
);
