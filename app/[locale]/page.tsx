// export const dynamic = "force-dynamic";

import { useTranslations } from "next-intl";

const HomePage = ({ params: { locale } }: { params: { locale: string } }) => {
  const t = useTranslations("Home");

  return (
    <main>
      <h2>
        {t("title")} {locale}
      </h2>
    </main>
  );
};

export default HomePage;
