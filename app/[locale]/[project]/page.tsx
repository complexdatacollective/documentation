export default function Page({ params }: { params: { project: string } }) {
  return (
    <div>
      <p>
        Page for {params.project}. Replace with something! This needs to be
        localised too.
      </p>
    </div>
  );
}
