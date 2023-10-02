import { getDocData, getSortedDocsData } from "@/lib/docs";
import { StepBack } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import rehypePrettyCode from "rehype-pretty-code";

const components = {
  h1: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h1 className="dark:text-green-400">{props.children}</h1>
  ),
  h2: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h2 className="dark:text-green-400">{props.children}</h2>
  ),

  // img: (props) => <Image width={300} height={300} src={props.src ?? ""} alt={props.alt ?? ""} />,
};

export async function generateMetadata({ params }: { params: { docId: string[] } }) {
  const docs = getSortedDocsData(`docs/desktop/${params.docId[0]}`);
  const doc = docs.find((post) => post.id === params.docId[1]);

  if (!doc) return { title: "Doc Not Found" };

  return { title: doc.title };
}

export async function generateStaticParams() {
  const docs = getSortedDocsData("docs/desktop/_tutorials");

  return docs.map((doc) => ({ docId: ["_tutorials", doc.id] }));
}

const DocPage = async ({ params }: { params: { docId: string[] } }) => {
  const doc = await getDocData(`docs/desktop/${params.docId.join("/")}`);

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert mx-auto">
      <MDXRemote
        options={{
          mdxOptions: {
            rehypePlugins: [rehypePrettyCode],
          },
        }}
        components={components}
        source={doc.content}
      ></MDXRemote>
      <p className="text-sm text-red-400">{doc.date}</p>
      <Link className="flex gap-0 items-center" href={"/desktop"}>
        <StepBack /> Back
      </Link>
    </article>
  );
};

export default DocPage;
