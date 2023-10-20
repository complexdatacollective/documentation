import { getAllFiles, getDoc } from "@/lib/docs";
import { convertToUrlText } from "@/lib/helper_functions";
import { getHeadings } from "@/lib/tableOfContents";
import { Link2, StepBack } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import TableOfContents from "./_components/TableOfContents";

// temporary custom styled components
const components = {
  h1: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h1
      id={convertToUrlText(props.children?.toString() ?? "")}
      className="dark:text-green-400 flex items-center gap-1.5"
    >
      <Link
        className="text-violet-500"
        href={`#${convertToUrlText(props.children?.toString() ?? "")}`}
      >
        <Link2 />
      </Link>
      {props.children}
    </h1>
  ),
  h2: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h2
      id={convertToUrlText(props.children?.toString() ?? "")}
      className="dark:text-green-400 flex items-center gap-1.5"
    >
      <Link
        className="text-violet-500"
        href={`#${convertToUrlText(props.children?.toString() ?? "")}`}
      >
        <Link2 />
      </Link>
      {props.children}
    </h2>
  ),
  h3: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h3
      id={convertToUrlText(props.children?.toString() ?? "")}
      className="flex items-center gap-1.5"
    >
      <Link
        className="text-violet-500"
        href={`#${convertToUrlText(props.children?.toString() ?? "")}`}
      >
        <Link2 />
      </Link>
      {props.children}
    </h3>
  ),
  h4: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h4
      id={convertToUrlText(props.children?.toString() ?? "")}
      className="flex items-center gap-1.5"
    >
      <Link
        className="text-violet-500"
        href={`#${convertToUrlText(props.children?.toString() ?? "")}`}
      >
        <Link2 />
      </Link>
      {props.children}
    </h4>
  ),
  h5: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h5
      id={convertToUrlText(props.children?.toString() ?? "")}
      className="flex items-center gap-1.5"
    >
      <Link
        className="text-violet-500"
        href={`#${convertToUrlText(props.children?.toString() ?? "")}`}
      >
        <Link2 />
      </Link>
      {props.children}
    </h5>
  ),
  h6: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h6
      id={convertToUrlText(props.children?.toString() ?? "")}
      className="flex items-center gap-1.5"
    >
      <Link
        className="text-violet-500"
        href={`#${convertToUrlText(props.children?.toString() ?? "")}`}
      >
        <Link2 />
      </Link>
      {props.children}
    </h6>
  ),
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
  const docs = getAllFiles();
  return docs;
}

const DocPage = async ({
  params: { project, docPath },
}: {
  params: { project: string; docPath: string[] };
}) => {
  const segmentWithProject = [project, ...docPath];
  const { content, lastUpdated } = getDoc(segmentWithProject);
  const headings = await getHeadings(content as string);

  if (content === null) return notFound();

  return (
    <>
      <TableOfContents nodes={headings} />
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert mx-auto">
        <MDXRemote components={components} source={content} />
        <p className="text-sm text-red-400">{lastUpdated}</p>
        <Link className="flex gap-0 items-center" href={"/"}>
          <StepBack /> Back
        </Link>
      </article>
    </>
  );
};

export default DocPage;
