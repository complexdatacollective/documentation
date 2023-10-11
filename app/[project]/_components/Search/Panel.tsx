import React from "react";

// will style this ui later
export function Panel({
  children,
  header,
  footer,
}: {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div>
      {header && <div>{header}</div>}
      <div>{children}</div>
      {footer && <div>{footer}</div>}
    </div>
  );
}
