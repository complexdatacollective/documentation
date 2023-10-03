import MDXFile from "@/lib/MDXFile";

export const runtime = "nodejs";

const DesktopPage = () => {
  return (
    <main className="flex justify-center flex-col items-center gap-2">
      <div className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto">
        <MDXFile name="hello" />
      </div>
    </main>
  );
};

export default DesktopPage;
