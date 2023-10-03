import Navigations from "@/app/[project]/_components/Navigations";

export const runtime = "nodejs";

const Sidebar = () => {
  return (
    <div className="sticky top-1">
      <Navigations />
    </div>
  );
};

export default Sidebar;
