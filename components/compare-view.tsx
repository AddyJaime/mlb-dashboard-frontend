"use client"

import { ArrowLeftRight } from "lucide-react"

export default function CompareView() {
  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-7">

      {/* HEADER */}
      <div className="mb-8 mr-19">
            <p className="text-medium font-bold uppercase  text-red-600">
          Compare
        </p>

        <h1 className="text-3xl font-bold mt-2">
          Stadium Comparison
        </h1>

        <p className="text-gray-500 text-sm mt-3">
          Select two stadiums to compare their stats, capacity, and attendance side by side.
        </p>
      </div>

      {/* SELECTORES */}
      <div className="flex items-center gap-4">
        
        {["STADIUM 1", "STADIUM 2"].map((label, index) => (
          <div key={label} className="flex items-center flex-1 gap-4">
            
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">{label}</p>

              <select className="w-full border border-gray-300 rounded-lg p-3 text-medium">
                <option>Select a stadium...</option>
              </select>
            </div>

            {/* ICONO SOLO ENTRE LOS DOS */}
            {index === 0 && (
              <div className="mt-5 text-gray-400">
                ⇄
              </div>
            )}

          </div>
        ))}

      </div>

      {/* PLACEHOLDER */}
      <div className="mt-16 flex flex-col items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
          <ArrowLeftRight className="h-8 w-8 text-muted-foreground" />
        </div>

        <p className="mt-4 text-lg font-semibold text-foreground">
          Select two stadiums to compare
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          Use the dropdowns above to pick stadiums for a side-by-side comparison.
        </p>
      </div>

    </section>
  )
}