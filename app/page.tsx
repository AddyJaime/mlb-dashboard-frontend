//  Next.js tiene dos modos para renderizar
//   páginas:

//   - Estático: Next.js pre-genera la página
//   durante npm run build — antes de que haya
//   usuarios
//   - Dinámico: Next.js genera la página cuando
//   un usuario la pide

//  export const dynamic = 'force-dynamic' le
//   dice a Next.js: "esta página no se 
//   pre-genera en el build, espera a que llegue 
//   una petición real." Para entonces todos los
//   contenedores ya están corriendo y el fetch
//   funciona.

export const dynamic = 'force-dynamic';


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
