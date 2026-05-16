"use client"


import dynamic from "next/dynamic";
// renderiza este componente solo en el browser no en el servidor
const MapView = dynamic(() => import("./MapView"), { ssr: false });

type StadiumLocationProps = {
  longitude: number;
  latitude: number;
};

export default function StadiumLocation({
  longitude,
  latitude,
}: StadiumLocationProps) {
  return (
    <div className="border border-gray-300 rounded-xl p-8 flex flex-col gap-5 bg-gray-50 mt-7 ">
      <MapView longitude={longitude} latitude={latitude} />
    </div>
  );
}
