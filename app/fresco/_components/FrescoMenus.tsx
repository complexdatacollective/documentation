"use client";

import { getSortedDocsData } from "@/app/_actions/actions";
import Menu from "@/app/_components/Menu";
import Link from "next/link";
import { useEffect, useState } from "react";

const FrescoMenus = () => {
  const [state, setState] = useState<any>({});

  useEffect(() => {
    getMenusData();
  }, []);

  async function getMenusData() {
    const firstData = await getSortedDocsData("docs/fresco/first");
    const secondData = await getSortedDocsData("docs/fresco/second");
    const thirdData = await getSortedDocsData("docs/fresco/third");

    setState({ firstData, secondData, thirdData });
  }

  return (
    <div className="h-screen overflow-auto px-2">
      <Menu title={"First menu"}>
        <ul className="flex gap-2 flex-col">
          {state?.firstData?.map((doc: any) => (
            <li
              key={doc.id}
              className="text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Link href={`/fresco/${doc?.dir.split("/").slice(-1)}/${doc.id}`}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </Menu>

      <Menu title={"Second menu"}>
        <ul className="flex gap-2 flex-col">
          {state?.secondData?.map((doc: any) => (
            <li
              key={doc.id}
              className="text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Link href={`/fresco/${doc?.dir.split("/").slice(-1)}/${doc.id}`}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </Menu>

      <Menu title={"Third menu"}>
        <ul className="flex gap-2 flex-col">
          {state?.thirdData?.map((doc: any) => (
            <li
              key={doc.id}
              className="text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Link href={`/fresco/${doc?.dir.split("/").slice(-1)}/${doc.id}`}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </Menu>
    </div>
  );
};

export default FrescoMenus;
