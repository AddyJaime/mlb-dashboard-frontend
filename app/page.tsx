import HeroSection from "@/components/hero-section";
import StadiumGrid from "@/components/StadiumGrid";
import { getAllStadiums } from "@/services/services/stadium.service";
export default async function Home() {
  const stadiums = await getAllStadiums();

  return (
    <main className="p-10">
      <HeroSection count={stadiums.length} stadiums={stadiums} />
      <StadiumGrid stadiums={stadiums}/>
    </main>
  );
}
