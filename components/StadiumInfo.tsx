import { MapPin, Users, Calendar, Trophy } from "lucide-react";

type StadiuminfoProps = {
  city: string;
  state: string;
  capacity: number;
  yearOpen: number;
  league: "AL" | "NL";
};

export default function StadiumInfo({ city, state, capacity, yearOpen, league }: StadiuminfoProps) {
  return (
    // cuadro con borde para la sección Stadium Info
    <div className="border border-gray-300 rounded-xl p-8 flex flex-col gap-5 bg-gray-50 ">
      <h2 className="font-bold text-xl">Stadium Info</h2>

      {/* cada item tiene ícono + label + valor */}
      <div className="flex items-start gap-3">
        <MapPin className="text-red-600 mt-1" size={18} />
        <div>
          <p className="text-sm text-gray-400">Location</p>
          <p className="font-semibold text-lg">{city}, {state}</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Users className="text-red-600 mt-1" size={18} />
        <div>
          <p className="text-sm text-gray-400">Capacity</p>
          <p className="font-semibold text-lg">{capacity.toLocaleString()}</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Calendar className="text-red-600 mt-1" size={18} />
        <div>
          <p className="text-sm text-gray-400">Year Opened</p>
          <p className="font-semibold text-lg">{yearOpen}</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Trophy className="text-red-600 mt-1" size={18} />
        <div>
          <p className="text-sm text-gray-400">League</p>
          <p className="font-semibold text-lg">{league === "AL" ? "American League" : "National League"}</p>
        </div>
      </div>

    </div>
  );
}
