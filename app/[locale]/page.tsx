// export const dynamic = "force-dynamic";

import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const HomePage = ({ params: { locale } }: { params: { locale: string } }) => {
  const t = useTranslations("Home");
  // setting setRequestLocale to support next-intl for static rendering
  unstable_setRequestLocale(locale);

  return (
    <main>
      <h2>
        {t("title")} {locale}
      </h2>
    </main>
  );
};

export default HomePage;
