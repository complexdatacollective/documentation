import { fetchFileSystemData } from "@/lib/docs";
import NavigationSwitcher from "./NavigationSwitcher";

export const runtime = "nodejs";

export default function Navigations(): JSX.Element {
  const fileSystemData = fetchFileSystemData(`./docs`);

  return (
    <div>
      <h2> Navigations</h2>
      <NavigationSwitcher data={fileSystemData} />
    </div>
  );
}
