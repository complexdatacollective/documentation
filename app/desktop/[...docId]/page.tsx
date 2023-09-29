import { getDocData, getSortedDocsData } from "@/lib/docs";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import rehypePrettyCode from "rehype-pretty-code";
import { StepBack } from "lucide-react";

const components = {
  h1: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h1 className="text-green-400">{props.children}</h1>
  ),
};

export async function generateMetadata({ params }: { params: { docId: string[] } }) {
  const posts = getSortedDocsData(`docs/desktop/${params.docId[0]}`);
  const post = posts.find((post) => post.id === params.docId[1]);

  if (!post) return { title: "Doc Not Found" };

  return { title: post.title };
}

// export async function generateStaticParams({ params }: { params: { docId: string[] } }) {
//   const posts = getSortedDocsData(`docs/desktop/${params.docId[0]}`);

//   return posts.map((post) => ({ postId: post.id }));
// }

const DocPage = async ({ params }: { params: { docId: string[] } }) => {
  const post = await getDocData(`docs/desktop/${params.docId[0]}`, params.docId[1]);

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto">
      <MDXRemote
        options={{
          mdxOptions: {
            rehypePlugins: [rehypePrettyCode],
          },
        }}
        components={components}
        source={post.content}
      ></MDXRemote>
      <p className="text-sm text-red-400">{post.date}</p>
      <Link className="flex gap-0 items-center" href={"/desktop"}>
        <StepBack /> Back
      </Link>
    </article>
  );
};

export default DocPage;
