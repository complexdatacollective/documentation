import { getDoc, getSortedDocsData } from "@/lib/docs";
import { StepBack } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import rehypePrettyCode from "rehype-pretty-code";

const components = {
  h1: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => <h1 className="dark:text-green-400">{props.children}</h1>,
  h2: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => <h2 className="dark:text-green-400">{props.children}</h2>,
};

export async function generateMetadata({
  params: { docPath, project },
}: {
  params: { project: string; docPath: string[] };
}) {
  const segmentWithProject = [project, ...docPath];
  const { title } = getDoc(segmentWithProject);

  if (!title) {
    console.error(`No title found for ${docPath}!`);
    return { title: "Network Canvas Documentation" };
  }

  return { title: title };
}

export async function generateStaticParams() {
  const docs = getSortedDocsData("docs/desktop");

  return docs;
}

const DocPage = async ({
  params: { project, docPath },
}: {
  params: { project: string; docPath: string[] };
}) => {
  const segmentWithProject = [project, ...docPath];
  const { content, lastUpdated } = await getDoc(segmentWithProject);

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert mx-auto">
      <MDXRemote
        options={{
          mdxOptions: {
            rehypePlugins: [rehypePrettyCode],
          },
        }}
        components={components}
        source={content}
      ></MDXRemote>
      <p className="text-sm text-red-400">{lastUpdated}</p>
      <Link className="flex gap-0 items-center" href={"/desktop"}>
        <StepBack /> Back
      </Link>
    </article>
  );
};

export default DocPage;
