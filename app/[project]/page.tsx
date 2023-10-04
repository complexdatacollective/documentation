export const runtime = "nodejs";

export default function ProjectPage({ params }: { params: { project: string } }) {
  console.log("PARAMS:", params);

  return (
    <h1 className="mx-4">
      Project Page Params: <span className="text-blue-400 text-2xl">{params.project}</span>{" "}
    </h1>
  );
}
