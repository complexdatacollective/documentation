import Menu from "@/app/_components/Menu";
import { getAllFiles } from "@/lib/docs";
import Link from "next/link";

/**
 * You need to recreate the navigation generation since I changed how things are structured.
 * Try to make it as dynamic as possible! In other words, folders should be headings, and files
 * should be links. The way you did it below is too static.
 */

const DesktopMenus = () => {
  const files = getAllFiles("docs");
  const filePaths = files
    .filter((file) => !file.params.docPath.includes("docs/fresco"))
    .map((file) => ({
      docPath: file.params.docPath.split("/").filter((p) => p !== "docs" && p !== "desktop"),
    }));

  return (
    <div className="h-screen overflow-auto px-2">
      {filePaths.map((item, index) => (
        <RenderMenu key={index} arr={item.docPath} />
      ))}
    </div>
  );
};

export default DesktopMenus;

function RenderMenu({ arr }: { arr: string[] }) {
  // const arr = ["_interface-documentation", "interface", "name-generator-using-forms.md"];

  if (!arr[0].includes(".md")) {
    let newArray = arr.filter((_, index) => index !== 0);

    return (
      <Menu title={arr[0]}>
        <RenderMenu arr={newArray} />
      </Menu>
    );
  } else {
    return (
      <ul className="flex gap-2 flex-col">
        <li className="text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors">
          <Link href="#">{arr}</Link>
        </li>
      </ul>
    );
  }
}
