import HeroSection from "@/components/hero-section";
import { SearchSection } from "@/components/SearchSection";
import StadiumCard from "@/components/StadiumCard";
import { getStadiumById } from "@/services/services/stadium.service";
export  default async function Home() {
 
  const stadium = await getStadiumById(2);
 
  return (
    <main className="p-10">
      <HeroSection />
      <SearchSection />

      {/* GRID DE CARDS  */}
      <div className="max-w-7xl mx-auto px-5 mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
          <StadiumCard stadium={stadium}/>
    
        </div>
      </div>
    </main>
  );
}
