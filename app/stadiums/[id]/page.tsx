import {
  getStadiumById,
  getStadiumAttendance,
} from "@/services/services/stadium.service";
import StadiumHero from "@/components/StadiumHero";

export const revalidate = 3600;

export default async function StadiumDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [stadium, attendance] = await Promise.all([
    getStadiumById(Number(id)),
    getStadiumAttendance(Number(id)),
  ]);
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
        leftFieldFt={stadium.leftFieldFt}
        centerFieldFt={stadium.centerFieldFt}
        rightFieldFt={stadium.rightFieldFt}
        totalGames={stadium.totalGames}
        perfectGames={stadium.perfectGames}
        homeWinPercentage={stadium.homeWinPercentage}
        attendance={attendance}
        latitude={stadium.latitude}
        longitude={stadium.longitude}
      />
    </main>
  );
}
