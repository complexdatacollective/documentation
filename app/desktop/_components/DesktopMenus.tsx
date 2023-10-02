"use client";

import { getSortedDocsData } from "@/app/_actions/actions";
import Menu from "@/app/_components/Menu";
import Link from "next/link";
import { useEffect, useState } from "react";

const DesktopMenus = () => {
  const [state, setState] = useState<any>({});

  useEffect(() => {
    getMenusData();
  }, []);

  async function getMenusData() {
    const tutorialsData = await getSortedDocsData("docs/desktop/_tutorials");
    const how_toData = await getSortedDocsData("docs/desktop/_how-to-guides");
    const interfaceDocumentationData = await getSortedDocsData(
      "docs/desktop/_interface-documentation"
    );
    const keyConceptsData = await getSortedDocsData("docs/desktop/_key-concepts");
    const referenceData = await getSortedDocsData("docs/desktop/_reference");

    setState({
      tutorialsData,
      how_toData,
      interfaceDocumentationData,
      keyConceptsData,
      referenceData,
    });
  }

  return (
    <div className="h-screen overflow-auto px-2">
      <Menu title={"Tutorials"}>
        <ul className="flex gap-2 flex-col">
          {state?.tutorialsData?.map((doc: any) => (
            <li
              key={doc.id}
              className="text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Link href={`/desktop/${doc?.dir.split("/").slice(-1)}/${doc.id}`}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </Menu>

      <Menu title={"How-to Guides"}>
        <ul className="flex gap-2 flex-col">
          {state?.how_toData?.map((doc: any) => (
            <li
              key={doc.id}
              className="text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Link href={`/desktop/${doc?.dir.split("/").slice(-1)}/${doc.id}`}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </Menu>

      <Menu title={"Interface Documentation"}>
        <ul className="flex gap-2 flex-col">
          {state?.interfaceDocumentationData?.map((doc: any) => (
            <li
              key={doc.id}
              className="text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Link href={`/desktop/${doc?.dir.split("/").slice(-1)}/${doc.id}`}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </Menu>

      <Menu title={"Key Concepts"}>
        <ul className="flex gap-2 flex-col">
          {state?.keyConceptsData?.map((doc: any) => (
            <li
              key={doc.id}
              className="text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Link href={`/desktop/${doc?.dir.split("/").slice(-1)}/${doc.id}`}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </Menu>

      <Menu title={"Technical Reference"}>
        <ul className="flex gap-2 flex-col">
          {state?.referenceData?.map((doc: any) => (
            <li
              key={doc.id}
              className="text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Link href={`/desktop/${doc?.dir.split("/").slice(-1)}/${doc.id}`}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </Menu>
    </div>
  );
};

export default DesktopMenus;
