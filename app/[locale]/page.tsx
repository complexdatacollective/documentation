import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const HomePage = ({ params: { locale } }: { params: { locale: string } }) => {
  // setting setRequestLocale to support next-intl for static rendering
  unstable_setRequestLocale(locale);
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
