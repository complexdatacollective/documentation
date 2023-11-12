import { Separator } from '@/components/ui/separator';
import { getAllMarkdownDocs, getDoc, processPath } from '@/lib/docs';
import { getHeadings } from '@/lib/tableOfContents';
import { unstable_setRequestLocale } from 'next-intl/server';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import InnerLanguageSwitcher from './_components/InnerLanguageSwitcher';
import TableOfContents from './_components/TableOfContents';
import { customComponents } from './_components/customComponents/customComponents';
import WorkInProgress from './_components/customComponents/WorkInProgress';
import SummaryCard from './_components/customComponents/SummaryCard';
import ComponentInfo from './_components/customComponents/ComponentInfo';
import Practices from './_components/customComponents/Practices';

type PageParams = {
  locale: string;
  project: string;
  docPath: string[];
};

type PageParamsWithoutDocPath = Omit<PageParams, 'docPath'>;

export function generateMetadata({ params }: { params: PageParams }) {
  const { locale, project, docPath } = params;
  const doc = getDoc({
    locale,
    project,
    pathSegment: docPath,
  });
  if (!doc || !doc.title) {
    throw new Error(`Error getting document title for:${docPath.join('')}`);
  }

  return { title: doc.title };
}

export async function generateStaticParams({
  params,
}: {
  params: PageParamsWithoutDocPath;
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
const Page = async ({ params }: { params: PageParams }) => {
  const { locale, project, docPath } = params;
  // setting setRequestLocale to support next-intl for static rendering
  unstable_setRequestLocale(locale);

  const doc = getDoc({
    locale,
    project,
    pathSegment: docPath,
  });

  if (!doc || doc.content === null) notFound();

  const {
    title,
    content,
    lastUpdated,
    toc,
    docId,
    wip,
    summaryData,
    componentInfo,
    practices,
  } = doc;
  const headings = toc ? await getHeadings(content) : null;

  return (
    <div className="flex items-start gap-1">
      <article className="prose prose-sm prose-slate mx-5 dark:prose-invert md:prose-base lg:prose-lg prose-blockquote:border-blue-500">
        <h1>{title}</h1>
        <ComponentInfo data={componentInfo} />
        <SummaryCard data={summaryData} />
        {docId && (
          <InnerLanguageSwitcher currentLocale={locale} currentDocId={docId} />
        )}
        {wip ? (
          <WorkInProgress />
        ) : (
          <MDXRemote components={customComponents} source={content} />
        )}

        <Practices data={practices} />
        <p className="text-sm text-red-400">{lastUpdated}</p>
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
