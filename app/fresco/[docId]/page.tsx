import { getPostData, getSortedPostsData } from "@/lib/docs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import rehypePrettyCode from "rehype-pretty-code";

const components = {
  h1: (props: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
    <h1 className="text-green-400">{props.children}</h1>
  ),
};

export async function generateMetadata({ params }: { params: { docId: string } }) {
  const posts = getSortedPostsData(); //deduped
  const post = posts.find((post) => post.id === params.docId);

  if (!post) return { title: "Doc Not Found" };

  return { title: post.title };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData(); //deduped

  return posts.map((post) => ({ postId: post.id }));
}

const DocPage = async ({ params }: { params: { docId: string } }) => {
  const post = await getPostData(params.docId);

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
    </article>
  );
};

export default DocPage;
