import { Separator } from "@/components/ui/separator";
import { getAllFiles, getDoc } from "@/lib/docs";
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

type DocPageProps = {
  params: { locale: string; project: string; docPath: string[] };
  docAvailableTxt: string;
};

// Generating Metadata
export async function generateMetadata({
  params: { docPath, project, locale },
}: Omit<DocPageProps, "docAvailableTxt">) {
  const decodedParams = docPath.map((p) => decodeURIComponent(p));
  const segmentWithProject = [project, ...decodedParams];
  const { title } = getDoc(segmentWithProject, locale);

  if (!title) {
    console.error(`No title found for ${docPath}!`);
    return { title: "Network Canvas Documentation" };
  }

  return { title: title };
}

// Generating Static Params
export async function generateStaticParams() {
  const docs = getAllFiles();
  return docs;
}

// The Page Component
const DocPage = async ({ params: { locale, project, docPath }, docAvailableTxt }: DocPageProps) => {
  const decodedParams = docPath.map((p) => decodeURIComponent(p));
  const segmentWithProject = [project, ...decodedParams];

  const { content, lastUpdated, toc, docId } = getDoc(segmentWithProject, locale);
  const headings = toc ? await getHeadings(content as string) : null;

  if (content === null) notFound();

  return (
    <div className="flex gap-1 items-start">
      <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate dark:prose-invert mx-5">
        {docId && (
          <InnerLanguageSwitcher
            currentLocale={locale}
            currentDocId={docId}
            docAvailableTxt={docAvailableTxt}
          />
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

// Using wrapper component to support useTranslations hook because it's not supported in an async component
const DocPageWrapper = (props: Omit<DocPageProps, "docAvailableTxt">) => {
  // setting setRequestLocale to support next-intl for static rendering
  unstable_setRequestLocale(props.params.locale);

  const t = useTranslations("DocPage");
  const docAvailableTxt = t("docAvailableLanguageTxt");

  return <DocPage {...props} docAvailableTxt={docAvailableTxt} />;
};

export default DocPageWrapper;
