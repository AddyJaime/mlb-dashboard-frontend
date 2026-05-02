"use client";

import { Stadium } from "@/types/stadium";
import StadiumCard from "./StadiumCard";
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

type StadiumGridProps = {
  stadiums: Stadium[];
};

export default function StadiumGrid({ stadiums }: StadiumGridProps) {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [league, setLeague] = useState("All");
  const [state, setState] = useState("All");
  const [capacity, setCapacity] = useState("All")

  const filteredStadiums = stadiums.filter((stadium) => {
   let capacityMatch = false;
    if (capacity === "All") {
      capacityMatch = true;
    } else if (capacity === "Small"){
      capacityMatch = stadium.capacity < 40000;
    } else if (capacity === "Medium"){
      capacityMatch = stadium.capacity >= 40000 && stadium.capacity <= 50000
    } else if (capacity === "Large"){
    capacityMatch = stadium.capacity > 50000
    }

    return (
      (stadium.name.toLowerCase().includes(query.toLowerCase()) ||
        stadium.city.toLowerCase().includes(query.toLowerCase())) &&
      (league === "All" || stadium.league === league)
    ) && (
      state === "All" || stadium.state === state
    ) && (capacityMatch)
  });

  return (
    <>
      <section className="w-full border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-4">
          <div className="flex items-center flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search stadiums, teams, or cities..."
              className="ml-3 w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm text-gray-700 hover:bg-gray-100 transition"
          >
            <SlidersHorizontal className="h-5 w-5" />
            <span className="font-medium">Filters</span>
          </button>
        </div>
        {showFilters && (
          <div className="max-w-7xl mx-auto px-6 pb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col sm:flex-row gap-6">
              {/* League */}
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">League</p>
                <div className="flex gap-2">
                  <button
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${league === "All" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                    onClick={() => setLeague("All")}
                  >
                    All
                  </button>
                  <button
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${league === "AL" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                    onClick={() => setLeague("AL")}
                  >
                    AL
                  </button>
                  <button
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${league === "NL" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                    onClick={() => setLeague("NL")}
                  >
                    NL
                  </button>
                </div>
              </div>

              {/* State */}
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">State</p>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white outline-none cursor-pointer"
                >
                  <option value="All">All</option>
                  {[...new Set(stadiums.map(s => s.state))].map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* Capacity */}
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Capacity</p>
                <select
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white outline-none cursor-pointer"
                >
                  <option value="All">All Sizes</option>
                  <option value="Small">Small (&lt; 40,000)</option>
                  <option value="Medium">Medium (40,000 – 50,000)</option>
                  <option value="Large">Large (&gt; 50,000)</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </section>
      <p className="max-w-7xl mx-auto px-6 text-sm text-gray-500">
        Showing {filteredStadiums.length} of {stadiums.length} stadiums
      </p>
      {/* GRID DE CARDS  */}
      <div className="max-w-7xl mx-auto px-5 mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
          {filteredStadiums.map((stadium, index) => {
            return (
              <StadiumCard
                key={stadium.id}
                stadium={stadium}
                isFirst={index === 0}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
