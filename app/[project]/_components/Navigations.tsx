import { fetchFileSystemData } from "@/lib/docs";
import NavigationSwitcher from "./NavigationSwitcher";

export default function Navigations(): JSX.Element {
  const fileSystemData = fetchFileSystemData(`docs`);

  return <NavigationSwitcher data={fileSystemData} />;
}