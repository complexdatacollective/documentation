import { Panel } from "@/app/[project]/_components/Search/Panel";
import { RefinementList } from "react-instantsearch";

export default function FallbackComponent({ attribute }: { attribute: string }) {
  return (
    <Panel header={attribute}>
      <RefinementList attribute={attribute} />
    </Panel>
  );
}
