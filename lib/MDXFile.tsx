import dynamic from "next/dynamic";

export default function MDXFile({ name }: { name: string }) {
  const ServerComponent = dynamic(() => import(`@/public/docs/${name}.mdx`));
  return <ServerComponent />;
}
