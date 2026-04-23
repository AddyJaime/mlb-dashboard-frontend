import { MapPin, Users, Calendar } from "lucide-react";
import { Stadium } from "@/types/stadium";
import Image from "next/image";

type StadiumCardProps = {
  stadium: Stadium;
};

export default function StadiumCard({stadium}: StadiumCardProps) {
  return (
    <div className="w-full group border border-gray-300 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:border-red-400/50">
      {/* Imagen */}
      <div className="relative h-64">
        {/* contenedor con altura fija (controla tamaño de la imagen) */}
        <Image
          src={`http://localhost:3000${stadium.imageUrl}`}
          alt="Stadium hero image"
          fill // la imagen ocupa TODO el contenedor
          className="object-cover transition-transform duration-300 group-hover:scale-105 " // llena sin deformarse (recorta si es necesario)
        />
      </div>

      {/* Contenido */}
      <div className="p-4 ">
        {/* Title */}
        <h2 className="text-lg font-bold text-black transition group-hover:text-red-600 leading-tight">
       {stadium.name}
        </h2>

        {/* Team */}
        <p className="text-gray-500 text-sm mt-0.5">{stadium.team}</p>

        {/* Info */}
        <div className="mt-3 space-y-2 text-sm text-gray-600">
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-red-500" />
            {stadium.state}
          </p>

          <p className="flex items-center gap-2">
            <Users className="w-4 h-4 text-red-500" />
            {stadium.capacity}
          </p>

          <p className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-red-500" />
           {stadium.yearOpen}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-3" />

        {/* Bottom Info */}
        <div className="flex justify-between text-xs">
          <div>
            <p className="text-gray-400">Surface</p>
            <p className="font-medium text-gray-900">Grass</p>
          </div>

          <div className="text-right">
            <p className="text-gray-400">Roof</p>
            <p className="font-medium text-gray-900">Open</p>
          </div>
        </div>
      </div>
    </div>
  );
}
