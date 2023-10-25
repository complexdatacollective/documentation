// export const dynamic = "force-dynamic";

const HomePage = ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <main>
      <h2>Home Page {locale}</h2>
    </main>
  );
};

export default HomePage;
