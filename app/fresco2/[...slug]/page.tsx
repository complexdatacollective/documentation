import MDXFile from "@/lib/MDXFile";
import React from "react";
import Content, { meta } from "@/docs/fresco/hello.mdx";

const AllDocsPage = ({ params }: { params: { slug: string[] } }) => {
  console.log("METADATA:", meta);

  return (
    <div>
      <MDXFile name="hello" />
    </div>
  );
};

export default AllDocsPage;
