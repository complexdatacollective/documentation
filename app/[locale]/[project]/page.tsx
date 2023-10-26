import { getAllProjects } from "@/lib/docs";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  const projectParams = getAllProjects();
  return projectParams;
}

export default function ProjectPage({ params }: { params: { project: string; locale: string } }) {
  // setting setRequestLocale to support next-intl for static rendering
  unstable_setRequestLocale(params.locale);

  return (
    <h1 className="mx-4">
      Project Page Params: <span className="text-blue-400 text-2xl">{params.project}</span>
    </h1>
  );
}
