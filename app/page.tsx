import HeroSection from "@/components/hero-section";
import { SearchSection } from "@/components/SearchSection";
import StadiumCard from "@/components/StadiumCard";

export default function Home() {
  return (
    <main className="p-10">
      <HeroSection />
      <SearchSection />

      {/* GRID DE CARDS  */}
      <div className="max-w-7xl mx-auto px-5 mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
          <StadiumCard />
          <StadiumCard />
          <StadiumCard />
          <StadiumCard />
        </div>
      </div>
    </main>
  );
}
