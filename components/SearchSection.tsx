"use client"

import { Search , SlidersHorizontal} from "lucide-react"

export function SearchSection(){
  return(
    <section className="w-full  border-t border-gray-200  ">
    <div className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-4">

     {/* search and input container */}
      <div className="flex items-center flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">

        {/* icon */}
      <Search className="h-5 w-5 text-gray-400"/>

      {/* Input */}
     <input
     type="text"
     placeholder="Search stadiums. teams, or cities..."
     className="ml-3 w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
     />
      </div>
    
   {/* FILTER BUTTON */}
        <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm text-gray-700 hover:bg-gray-100 transition">
          <SlidersHorizontal className="h-5 w-5" />
          <span className="font-medium">Filters</span>
        </button>
    </div>
    </section>
  )
}