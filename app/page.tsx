import Posts from "@/components/Posts";
import MDXFile, { getMdxMetaData } from "@/lib/MDXFile";

export default function Home() {
  const data = getMdxMetaData("hello");

  console.log("DATACHA", data);

  return (
    <main className="flex justify-center flex-col items-center gap-2 my-3">
      <div className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto">
        <MDXFile name="hello" />
      </div>
      <hr />
      <Posts />
    </main>
  );
}
