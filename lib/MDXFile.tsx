import dynamic from "next/dynamic";

export default function MDXFile({ name }: { name: string }) {
  const ServerComponent = dynamic(() => import(`@/docs/${name}.mdx`));
  return <ServerComponent />;
}
