"use client";

import { Link2 } from "lucide-react";
import Link from "next/link";
import React, { MouseEvent } from "react";

const CustomLink = ({ id }: { id: string }) => {
  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const headingElement = document.getElementById(id);

    if (headingElement) {
      const navbarHeight = 80;
      const topOffset = headingElement.getBoundingClientRect().top;
      const scrollOptions: ScrollIntoViewOptions = {
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      };

      window.scrollBy({ top: topOffset - navbarHeight, ...scrollOptions });
    }
  };

  return (
    <Link onClick={handleLinkClick} className="text-violet-500" href={`#${id}`}>
      <Link2 />
    </Link>
  );
};

export default CustomLink;
