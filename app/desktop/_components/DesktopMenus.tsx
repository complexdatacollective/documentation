import Menu from "@/app/_components/Menu";
import { getSortedDocsData } from "@/lib/docs";
import Link from "next/link";

const DesktopMenus = () => {
  const tutorialsData = getSortedDocsData("docs/desktop/_tutorials");
  const how_toData = getSortedDocsData("docs/desktop/_how-to-guides");
  const interfaceDocumentationData = getSortedDocsData("docs/desktop/_interface-documentation");
  const keyConceptsData = getSortedDocsData("docs/desktop/_key-concepts");
  const referenceData = getSortedDocsData("docs/desktop/_reference");

  return (
    <div className="h-screen overflow-auto px-2">
      <Menu title={"Tutorials"}>
        <ul className="flex gap-2 flex-col">
          {tutorialsData.map((doc) => (
            <li
              key={doc.id}
              className="text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Link href={`/desktop/${doc.id}`}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </Menu>

      <Menu title={"How-to Guides"}>
        <ul className="flex gap-2 flex-col">
          {how_toData.map((doc) => (
            <li
              key={doc.id}
              className="text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Link href={`/desktop/${doc.id}`}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </Menu>

      <Menu title={"Interface Documentation"}>
        <ul className="flex gap-2 flex-col">
          {interfaceDocumentationData.map((doc) => (
            <li
              key={doc.id}
              className="text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Link href={`/desktop/${doc.id}`}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </Menu>

      <Menu title={"Key Concepts"}>
        <ul className="flex gap-2 flex-col">
          {keyConceptsData.map((doc) => (
            <li
              key={doc.id}
              className="text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Link href={`/desktop/${doc.id}`}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </Menu>

      <Menu title={"Technical Reference"}>
        <ul className="flex gap-2 flex-col">
          {referenceData.map((doc) => (
            <li
              key={doc.id}
              className="text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <Link href={`/desktop/${doc.id}`}>{doc.title}</Link>
            </li>
          ))}
        </ul>
      </Menu>
    </div>
  );
};

export default DesktopMenus;
