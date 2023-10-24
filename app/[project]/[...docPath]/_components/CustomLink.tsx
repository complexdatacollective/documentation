"use client";

import Link from "next/link";
import React from "react";

type CustomLinkProps = { id: string; children: React.ReactNode; className?: string };

const CustomLink = ({ id, children, className }: CustomLinkProps) => {
  return (
    <Link
      className={`flex gap-1.5 items-center no-underline hover:text-blue-400 transition-all group ${className} `}
      href={`#${id}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
