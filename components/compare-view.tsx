"use client";

import { ArrowLeftRight } from "lucide-react";

export default function CompareView() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-7">
      {/* HEADER */}
      <div className="mb-8 mr-19">
        <p className="text-medium font-bold uppercase  text-red-600">Compare</p>

        <h1 className="text-3xl font-bold mt-2">Stadium Comparison</h1>

        <p className="text-gray-500 text-sm mt-3">
          Select two stadiums to compare their stats, capacity, and attendance
          side by side.
        </p>
      </div>

      {/* SELECTORES */}
      <div className="flex items-center gap-4">
        {["STADIUM 1", "STADIUM 2"].map((label, index) => (
          <div key={label} className="flex items-center flex-1 gap-4">
            <div className="flex-1">
              <p className="text-xs font-bold  mb-2">{label}</p>

              <select className="w-full cursor-pointer border border-gray-300 bg-gray-50 rounded-lg p-3 text-medium hover:border-red-400 transition focus:outline-none">
                <option>Select a stadium...</option>
              </select>
            </div>

            {/* ICONO SOLO ENTRE LOS DOS */}
            {index === 0 && (
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 mt-5">
                <ArrowLeftRight className="w-4 h-4 text-black " />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* PLACEHOLDER */}
      <div className="mt-16 flex flex-col items-center justify-center ">
        <div className="flex h-16 w-16 items-center justify-center  rounded-2xl bg-gray-200 mr-13">
          <ArrowLeftRight className="h-8 w-8 text-muted-foreground" />
        </div>

        <p className="mt-4 text-lg font-semibold text-foreground mr-11">
          Select two stadiums to compare
        </p>

        <p className="mt-1 text-sm text-muted-foreground mr-10">
          Use the dropdowns above to pick stadiums for a side-by-side
          comparison.
        </p>
      </div>
    </section>
  );
}
