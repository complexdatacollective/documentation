// This component might be useful when we want to display documents client-side
// We can delete it before production release in case we don't use it.

"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import React, { useEffect, useState } from "react";

const ShowMDX = ({ content }: { content: string }) => {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    async function getSerializedContent() {
      const result = await serialize(content, {
        mdxOptions: {
          development: process.env.NODE_ENV === "development",
        },
      });
      setMdxSource(result);
    }

    getSerializedContent();
  }, [content]);

  return (
    <article className="overflow-hidden whitespace-nowrap overflow-ellipsis w-[500px]">
      {mdxSource && <MDXRemote {...mdxSource} />}
    </article>
  );
};

export default ShowMDX;