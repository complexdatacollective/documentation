"use client";

import { Button } from "@/components/ui/button";
import {
  getAvailableLocales,
  getDocsFromSidebarData,
} from "@/lib/helper_functions";
import data from "@/public/sidebar.json";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

type InnerLanguageSwitcherProps = {
  currentDocId: string;
  currentLocale: string;
};

const InnerLanguageSwitcher = ({
  currentDocId,
  currentLocale,
}: InnerLanguageSwitcherProps) => {
  const router = useRouter();
  const sidebarData = JSON.parse(JSON.stringify(data));

  const availableLocales = useCallback(
    () => getAvailableLocales(sidebarData, currentDocId),
    [sidebarData, currentDocId]
  );

  const handleInnerLanguageSwitch = (availableLocal: string) => {
    const allDocFiles = getDocsFromSidebarData(sidebarData);
    const translatedDoc = allDocFiles.find(
      (file) => file.docId === currentDocId && file.language === availableLocal
    );

    if (translatedDoc) {
      router.push(translatedDoc.path);
    }
  };

  return (
    <p>
      {availableLocales()
        .filter((locale) => locale !== currentLocale)
        .map((availableLocal) => (
          <Button
            key={availableLocal}
            onClick={() => handleInnerLanguageSwitch(availableLocal)}
            variant={"ghost"}
            className="text-green-500 underline"
          >
            {availableLocal}
          </Button>
        ))}
    </p>
  );
};

export default InnerLanguageSwitcher;
