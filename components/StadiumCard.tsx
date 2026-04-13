import Image from "next/image";

export default function StadiumCard() {
  return (
    <div className="w-full border border-gray-300 rounded-xl overflow-hidden bg-white hover:shadow-lg transition duration-300">
      
      {/* Imagen */}
      <div className="relative w-full h-45">
        <Image
          src="/stadium-hero.jpg"
          alt="Stadium hero image"
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 text-black">

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 leading-tight">
          Dodger Stadium
        </h2>

        {/* Team */}
        <p className="text-gray-500 text-xs mt-0.5">
          Los Angeles Dodgers
        </p>

        {/* Info */}
        <div className="mt-3 space-y-2 text-xs text-gray-600">
          <p>📍 Los Angeles, California</p>
          <p>👥 56,000 capacity</p>
          <p>📅 Opened 1962</p>
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