type StadiumFieldDimensionsProps = {
  leftFieldFt: number;
  centerFieldFt: number;
  rightFieldFt: number;
};

export default function StadiumFieldDimensions({
  leftFieldFt,
  centerFieldFt,
  rightFieldFt,
}: StadiumFieldDimensionsProps) {
  return (
    <div className="border p-6  border-gray-300 bg-gray-50 rounded-xl">
      <h2 className="font-bold text-lg mb-4">Field Dimensions</h2>

      <div className="flex gap-4">

        {/* Left Field — fondo gris claro, número negro */}
        <div className="flex-1 bg-gray-100 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-400 mb-2">Left Field</p>
          <p className="text-4xl font-bold">{leftFieldFt}</p>
          <p className="text-xs text-gray-500 mt-2">ft</p>
        </div>

        {/* Center Field — fondo rosa claro, número rojo para destacarlo */}
        <div className="flex-1 bg-red-50 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-400 mb-2">Center Field</p>
          <p className="text-4xl font-bold text-red-500">{centerFieldFt}</p>
          <p className="text-xs text-gray-400 mt-2">ft</p>
        </div>

        {/* Right Field — fondo gris claro, número negro */}
        <div className="flex-1 bg-gray-100 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-400 mb-2">Right Field</p>
          <p className="text-4xl font-bold">{rightFieldFt}</p>
          <p className="text-xs text-gray-400 mt-2">ft</p>
        </div>

      </div>
    </div>
  );
}