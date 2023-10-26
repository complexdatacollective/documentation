import { Separator } from "@/components/ui/separator";
import { getAllFiles, getDoc } from "@/lib/docs";
import { getHeadings } from "@/lib/tableOfContents";
import { StepBack } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { styledHeadings } from "./_components/CustomHeadings";
import TableOfContents from "./_components/TableOfContents";

type DocPageProps = {
  params: { locale: string; project: string; docPath: string[] };
};

export async function generateMetadata({ params: { docPath, project, locale } }: DocPageProps) {
  const decodedParams = docPath.map((p) => decodeURIComponent(p));
  const segmentWithProject = [project, ...decodedParams];
  const { title } = getDoc(segmentWithProject, locale);

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

const DocPage = async ({ params: { locale, project, docPath } }: DocPageProps) => {
  const decodedParams = docPath.map((p) => decodeURIComponent(p));
  const segmentWithProject = [project, ...decodedParams];

  const { content, lastUpdated, toc } = getDoc(segmentWithProject, locale);
  const headings = toc ? await getHeadings(content as string) : null;

  if (content === null) notFound();

  return (
    <div className="flex gap-1 items-start">
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert mx-5">
        <MDXRemote components={{ ...styledHeadings }} source={content} />
        <p className="text-sm text-red-400">{lastUpdated}</p>
        <Link className="flex gap-0 items-center" href={"/"}>
          <StepBack /> Back
        </Link>
      </article>
      {headings && (
        <div className="sticky top-20">
          <TableOfContents nodes={headings} />
          <Separator />
        </div>
      )}
    </div>
  );
};

export default DocPage;