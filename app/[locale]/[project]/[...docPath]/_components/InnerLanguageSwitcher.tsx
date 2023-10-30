"use client";

import { File, Folder } from "@/app/[locale]/_components/Sidebar/NavigationMenus";
import { Button } from "@/components/ui/button";
import data from "@/public/sidebar.json";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

type InnerLanguageSwitcherProps = {
  currentDocId: string;
  currentLocale: string; // better typing for this
  docAvailableTxt: string;
};

const getAvailableLocales = (sidebarData: Array<File | Folder>, currentDocId: string) => {
  const allDocFiles = getDocsFromSidebarData(sidebarData);
  const availableLocales = allDocFiles
    .filter((file) => file.docId === currentDocId)
    .map((file) => file.language);

  return availableLocales;
};

const getDocsFromSidebarData = (siData: Array<File | Folder>, docFiles: Array<File> = []) => {
  siData.forEach((item) => {
    if (item.type === "folder") {
      docFiles = getDocsFromSidebarData(item.files, docFiles);
    } else {
      docFiles.push(item);
    }
  });

  return docFiles;
};

const InnerLanguageSwitcher = ({
  currentDocId,
  currentLocale,
  docAvailableTxt,
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
      {docAvailableTxt}
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
