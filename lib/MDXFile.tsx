import dynamic from "next/dynamic";

export default function MDXFile({ name }: { name: string }) {
  const ServerComponent = dynamic(
    () => import(`${process.env.NEXT_PUBLIC_DOCS_PATH}/${name}.mdx`)
  );
  return <ServerComponent />;
}
