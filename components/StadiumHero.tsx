import Image from "next/image";
import StadiumAbout from "./StadiumAbout";
import StadiumInfo from "./StadiumInfo";

type StadiumHeroProps = {
  imageUrl: string;
  name: string;
  team: string;
  league: "AL" | "NL";
  description: string;
  city: string;
  state: string;
  capacity: number;
  yearOpen: number;

};

export default function StadiumHero({
  imageUrl,
  name,
  team,
  league,
  description,
  city,
  state,
  capacity,
  yearOpen
}: StadiumHeroProps) {
  return (
    // py agregar espacio arriba y abajo
    <div className="py-8">
      {/* max-w-5xl centra y limita el ancho para que no vaya de borde a borde, mx-auto centra horiz el div dentro de su padre  */}
      <div className="max-w-7xl mx-auto px-6">
        {/* relative para que el gradiente y el texto se posicionen dentro de la imagen */}
        <div className="relative h-[450px] rounded-2xl overflow-hidden">
          <Image
            src={`http://localhost:3000${imageUrl}`}
            fill
            alt="Stadium hero image"
            className="object-cover"
          />

          {/*este div se va a poner donde el padre le indica y el padre es el div relative de arriba osea se va a poner debajo de el porque le esta indicando, inset le pone sombre a las cuatro esquinas  */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* texto encima del gradiente, pegado al fondo de la imagen */}
          <div className="absolute bottom-0 left-0 p-8">
            {/* w-fit evita que el badge ocupe todo el ancho */}
            <span className="w-fit bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
              {league}
            </span>
            <h1 className="text-white text-5xl font-bold mt-3">{name}</h1>
            <p className="text-gray-300 text-base mt-1">{team}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-10 px-6 mt-8 max-w-7xl mx-auto">
        <div className="col-span-3 flex flex-col gap-6">
          <StadiumAbout description={description} />
        </div>
        <div className="col-span-2 max-w-l" >
          <StadiumInfo city={city} state={state} capacity={capacity} yearOpen={yearOpen} league={league}/>
        </div>
      </div>
    </div>
  );
}
