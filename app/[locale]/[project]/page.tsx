import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type PageProps = { params: { locale: string; project: string } };

export default function Page({ params }: PageProps) {
  // setting setRequestLocale to support next-intl for static rendering
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("ProjectPage");

  return (
    <div>
      <p>
        {t("title")} <span className="uppercase">{params.project}</span>
      </p>
    </div>
  );
}
