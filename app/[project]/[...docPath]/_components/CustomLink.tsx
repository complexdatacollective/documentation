"use client";

import Link from "next/link";
import React from "react";

const CustomLink = ({ id, children }: { id: string; children: React.ReactNode }) => {
  return (
    <Link
      className="group no-underline hover:underline transition-transform"
      href={`#${id}`}
      scroll={true}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
