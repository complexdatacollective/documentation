import { getDoc } from '@/lib/docs';
import { options } from '@/lib/mdxOptions';
import { unstable_setRequestLocale } from 'next-intl/server';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import InnerLanguageSwitcher from './[...docPath]/_components/InnerLanguageSwitcher';
import { customComponents } from './[...docPath]/_components/customComponents/customComponents';

// Todo: consider moving the InnerLanguageSwitcher and customComponents
// Todo: to _component in [project] segment

type PageProps = { params: { locale: string; project: string } };

export default function Page({ params }: PageProps) {
  const { locale, project } = params;
  const filePath = `/${project}/index`;

  // setting setRequestLocale to support next-intl for static rendering
  unstable_setRequestLocale(params.locale);

  const doc = getDoc({
    locale,
    project,
    pathSegment: ['index'],
  });

  if (!doc || doc?.content === null) notFound();

  // Frontmatter data of markdown files
  const { title, content, lastUpdated } = doc;

  return (
    <article className="prose prose-sm prose-slate mx-5 dark:prose-invert md:prose-base lg:prose-lg prose-blockquote:border-blue-500">
      <h1>{title}</h1>
      <InnerLanguageSwitcher currentLocale={locale} filePath={filePath} />
      <MDXRemote
        options={options}
        components={customComponents}
        source={content}
      />
      <p className="text-sm text-red-400">{lastUpdated}</p>
    </article>
  );
}
