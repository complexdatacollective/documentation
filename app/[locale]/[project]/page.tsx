import { getAllProjects } from "@/lib/docs";

export async function generateStaticParams() {
  const projectParams = getAllProjects();
  return projectParams;
}

export default function ProjectPage({ params }: { params: { project: string } }) {
  return (
    <h1 className="mx-4">
      Project Page Params: <span className="text-blue-400 text-2xl">{params.project}</span>
    </h1>
  );
}
