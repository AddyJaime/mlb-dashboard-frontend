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

  const filteredStadiums = stadiums.filter((stadium) => {
    return (
      stadium.name.toLowerCase().includes(query.toLowerCase()) ||
      stadium.city.toLowerCase().includes(query.toLowerCase())
    );
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
          <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm text-gray-700 hover:bg-gray-100 transition">
            <SlidersHorizontal className="h-5 w-5" />
            <span className="font-medium">Filters</span>
          </button>
        </div>
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
