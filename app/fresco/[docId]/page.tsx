import { getPostData, getSortedPostsData } from "@/lib/docs";
import { MDXRemote } from "next-mdx-remote/rsc";

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
      <MDXRemote source={post.content}></MDXRemote>
      <p className="text-sm text-red-400">{post.date}</p>
    </article>
  );
};

export default DocPage;
