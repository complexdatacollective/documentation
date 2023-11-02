import { Separator } from "@/components/ui/separator";
import { getAllMarkdownDocs, getDoc, processPath } from "@/lib/docs";
import { getHeadings } from "@/lib/tableOfContents";
import { StepBack } from "lucide-react";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { styledHeadings } from "./_components/CustomHeadings";
import InnerLanguageSwitcher from "./_components/InnerLanguageSwitcher";
import TableOfContents from "./_components/TableOfContents";

export async function generateMetadata({
  params,
}: {
  params: { locale: string; project: string; docPath: string[] };
}) {
  const { locale, project, docPath } = params;

  const doc = getDoc({
    locale,
    project,
    pathSegment: docPath,
  });

  if (!doc || !doc.title) {
    throw new Error(`Error getting document title for:${docPath}`);
  }

  return { title: doc.title };
}

// Generating Static Params for each page
export async function generateStaticParams({
  params,
}: {
  params: { locale: string; project: string };
}) {
  const { locale, project } = params;
  const docs = await getAllMarkdownDocs();

  // Filter docs by locale and project
  const filteredDocs = docs.map(processPath).filter((processedPath) => {
    const docLocale = processedPath[0];
    const docProject = processedPath[1];

    return docLocale === locale && docProject === project;
  });

  return filteredDocs.map((doc) => ({
    locale,
    project,
    docPath: doc.slice(2), //remove the locale and the project from the docPath
  }));
}

// The Page Component
const Page = async ({
  params,
}: {
  params: { locale: string; project: string; docPath: string[] };
}) => {
  const { locale, project, docPath } = params;

  // setting setRequestLocale to support next-intl for static rendering
  unstable_setRequestLocale(locale);

  const doc = getDoc({
    locale,
    project,
    pathSegment: docPath,
  });

  if (!doc) {
    notFound();
  }

  const { title, content, lastUpdated, toc, docId } = doc;

  const headings = toc ? await getHeadings(content as string) : null;

  if (content === null) notFound();

  return (
    <div className="flex gap-1 items-start">
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert mx-5">
        {docId && (
          <InnerLanguageSwitcher currentLocale={locale} currentDocId={docId} />
        )}
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

export default Page;
