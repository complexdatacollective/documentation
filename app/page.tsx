import AlgoliaSearch from "@/app/[project]/_components/Search/AlgoliaSearch";

// export const dynamic = "force-dynamic";

const HomePage = () => {
  return (
    <main className="flex justify-center flex-col items-center gap-2">
      <h2>Home Page</h2>
      <AlgoliaSearch />
    </main>
  );
};

export default HomePage;
