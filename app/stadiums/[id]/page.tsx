import { getStadiumById } from "@/services/services/stadium.service";

export default async function StadiumDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const stadium = await getStadiumById(Number(id));

  return (
    <main>
      <h1 className="bg-amber-800">{stadium.city}</h1>
    </main>
  );
}
