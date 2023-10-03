import { fetchFileSystemData } from "@/lib/docs";
import NavigationSwitcher from "./NavigationSwitcher";

export default function Navigations(): JSX.Element {
  const fileSystemData = fetchFileSystemData(`${process.env.NEXT_PUBLIC_DOCS_PATH}`);

  return <NavigationSwitcher data={fileSystemData} />;
}
