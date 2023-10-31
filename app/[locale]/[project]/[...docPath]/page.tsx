import { Separator } from "@/components/ui/separator";
import { getAllMarkdownDocs, getDoc, processPath } from "@/lib/docs";
import { getHeadings } from "@/lib/tableOfContents";
import { StepBack } from "lucide-react";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { styledHeadings } from "./_components/CustomHeadings";
import InnerLanguageSwitcher from "./_components/InnerLanguageSwitcher";
import TableOfContents from "./_components/TableOfContents";

// Generating Static Params for each page
export async function generateStaticParams({
  params,
}: {
  params: { locale: string; project: string };
}) {
  const { locale, project } = params;
  const docs = await getAllMarkdownDocs();

  // Filter docs by locale and project
  const filteredDocs = docs.filter((doc) => {
    const processedPath = processPath(doc);
    const docLocale = processedPath[0];
    const docProject = processedPath[1];

    return docLocale === locale && docProject === project;
  });

  return filteredDocs.map((doc) => ({
    locale,
    project,
    docPath: processPath(doc).slice(2),
  }));
}

// export default function Page({
//   params,
// }: {
//   params: { locale: string; project: string; docPath: string[] };
// }) {
//   const { locale, project, docPath } = params;

//   return (
//     <div>
//       Post: {locale} {project} {docPath.map((p) => p).join("/")}
//     </div>
//   );
// }

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
