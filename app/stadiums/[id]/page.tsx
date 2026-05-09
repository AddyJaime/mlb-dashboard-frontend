import { getStadiumById } from "@/services/services/stadium.service";
import StadiumHero from "@/components/StadiumHero";

export default async function StadiumDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const stadium = await getStadiumById(Number(id));

  return (
    <main>
      <StadiumHero
      imageUrl={stadium.imageUrl}
      name={stadium.name}
      team={stadium.team}
      league={stadium.league}
      description={stadium.description}
      city={stadium.city}
      state={stadium.state}
      capacity={stadium.capacity}
      yearOpen={stadium.yearOpen}
      />
    </main>
  );
}
