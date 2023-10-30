"use client";

import { File, Folder } from "@/app/[locale]/_components/Sidebar/NavigationMenus";
import { Button } from "@/components/ui/button";
import data from "@/public/sidebar.json";
import { useRouter } from "next/navigation";

type InnerLanguageSwitcherProps = {
  currentDocId: string;
  availabeLocales: string[];
  docAvailableTxt: string;
};

const InnerLanguageSwitcher = ({
  currentDocId,
  availabeLocales,
  docAvailableTxt,
}: InnerLanguageSwitcherProps) => {
  const router = useRouter();
  const sidebarData = JSON.parse(JSON.stringify(data));

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

  const handleInnerLanguageSwitch = (availabeLocal: string) => {
    const allDocFiles = getDocsFromSidebarData(sidebarData);
    const translatedDoc = allDocFiles.find(
      (file) => file.docId === currentDocId && file.language === availabeLocal
    );

    if (translatedDoc) {
      router.push(translatedDoc.path);
    }
  };

  return (
    <p>
      {docAvailableTxt}
      {availabeLocales.map((availabeLocal) => (
        <Button
          key={availabeLocal}
          onClick={() => handleInnerLanguageSwitch(availabeLocal)}
          variant={"ghost"}
          className="text-green-500 underline"
        >
          {availabeLocal}
        </Button>
      ))}
    </p>
  );
};

export default InnerLanguageSwitcher;
