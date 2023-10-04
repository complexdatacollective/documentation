export const runtime = "nodejs";

const HomePage = () => {
  return (
    <main className="flex justify-center flex-col items-center gap-2">
      <h2>Home Page</h2>
      <div className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto"></div>
    </main>
  );
};

export default HomePage;
