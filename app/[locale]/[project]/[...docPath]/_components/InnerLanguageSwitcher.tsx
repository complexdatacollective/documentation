import { getTranslatedFilesDataByDocId } from "@/lib/helper_functions";
import data from "@/public/sidebar.json";
import { getTranslator } from "next-intl/server";
import Link from "next/link";

type InnerLanguageSwitcherProps = {
  currentDocId: string;
  currentLocale: string;
};

const InnerLanguageSwitcher = async ({
  currentDocId,
  currentLocale,
}: InnerLanguageSwitcherProps) => {
  const t = await getTranslator(currentLocale, "DocPage");
  const sidebarData = JSON.parse(JSON.stringify(data));
  const translatedDocs = getTranslatedFilesDataByDocId(
    sidebarData,
    currentDocId
  );

  return (
    <div className="flex gap-2 my-1">
      <span>{t("docAvailableTxt")}</span>
      {translatedDocs
        .filter((doc) => doc.language !== currentLocale) //remove the current locale-based file
        .map((doc) => (
          <Link
            className="text-blue-400 hover:text-cyan-400 transition-colors"
            key={doc.language}
            href={doc.path}
          >
            {doc.language}
          </Link>
        ))}
    </div>
  );
};

export default InnerLanguageSwitcher;
