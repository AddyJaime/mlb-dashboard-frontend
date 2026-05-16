"use client";

import { getAllStadiums, getStadiumAttendance, getStadiumById } from "@/services/services/stadium.service";
import { Attendance } from "@/types/attendance";
import { Stadium } from "@/types/stadium";
import { ArrowLeftRight, Calendar, Ruler, Target, TrendingUp, Trophy, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function CompareView() {
  const [stadiums, setStadiums] = useState<Stadium[]>([]);
  const [stadium1, setStadium1] = useState<Stadium | null>(null);
  const [stadium2, setStadium2] = useState<Stadium | null>(null);
  const [attendance1, setAttendance1] = useState<Attendance[]>([]);
  const [attendance2, setAttendance2] = useState<Attendance[]>([]);

  useEffect(() => {
    async function fetchStadiums() {
      const data = await getAllStadiums();
      setStadiums(data);
    }
    fetchStadiums();
  }, []);

  async function handleSelectStadium1(id: number) {
    const [stadium, attendance] = await Promise.all([
      getStadiumById(id),
      getStadiumAttendance(id),
    ]);
    setStadium1(stadium);
    setAttendance1(attendance);
  }

  async function handleSelectStadium2(id: number) {
    const [stadium, attendance] = await Promise.all([
      getStadiumById(id),
      getStadiumAttendance(id),
    ]);
    setStadium2(stadium);
    setAttendance2(attendance);
  }

  const bothSelected = stadium1 !== null && stadium2 !== null;

  const attendanceChartData = (() => {
    if (!bothSelected) return [];
    const years = new Set([...attendance1.map((a) => a.year), ...attendance2.map((a) => a.year)]);
    return Array.from(years)
      .sort()
      .map((year) => ({
        year,
        [stadium1.name]: attendance1.find((a) => a.year === year)?.total_attendance ?? 0,
        [stadium2.name]: attendance2.find((a) => a.year === year)?.total_attendance ?? 0,
      }));
  })();

  const categories = bothSelected
    ? [
        { icon: <Users className="w-4 h-4" />, label: "Capacity", v1: stadium1.capacity.toLocaleString(), v2: stadium2.capacity.toLocaleString() },
        { icon: <Calendar className="w-4 h-4" />, label: "Year Opened", v1: stadium1.yearOpen, v2: stadium2.yearOpen },
        { icon: <Ruler className="w-4 h-4" />, label: "Left Field", v1: `${stadium1.leftFieldFt} ft`, v2: `${stadium2.leftFieldFt} ft` },
        { icon: <Ruler className="w-4 h-4" />, label: "Right Field", v1: `${stadium1.rightFieldFt} ft`, v2: `${stadium2.rightFieldFt} ft` },
        { icon: <Ruler className="w-4 h-4" />, label: "Center Field", v1: `${stadium1.centerFieldFt} ft`, v2: `${stadium2.centerFieldFt} ft` },
        { icon: <TrendingUp className="w-4 h-4" />, label: "Home Win %", v1: `${stadium1.homeWinPercentage}%`, v2: `${stadium2.homeWinPercentage}%` },
        { icon: <Trophy className="w-4 h-4" />, label: "Total Games", v1: stadium1.totalGames.toLocaleString(), v2: stadium2.totalGames.toLocaleString() },
        { icon: <Target className="w-4 h-4" />, label: "Perfect Games", v1: stadium1.perfectGames, v2: stadium2.perfectGames },
      ]
    : [];

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-7">
      {/* HEADER */}
      <div className="mb-8">
        <p className="text-medium font-bold uppercase text-red-600">Compare</p>
        <h1 className="text-3xl font-bold mt-2">Stadium Comparison</h1>
        <p className="text-gray-500 text-lg mt-3">
          Select two stadiums to compare their stats, capacity, and attendance side by side.
        </p>
      </div>

      {/* SELECTORES */}
      <div className="flex items-center gap-4">
        <div className="flex items-center flex-1 gap-4">
          <div className="flex-1">
            <p className="text-sm font-bold mb-2">Stadium 1</p>
            <select
              value={stadium1?.id ?? ""}
              onChange={(e) => {
                if (e.target.value) handleSelectStadium1(Number(e.target.value));
                else setStadium1(null);
              }}
              className="w-full cursor-pointer border border-gray-300 bg-gray-50 rounded-lg p-3 text-medium hover:border-red-400 transition focus:outline-none"
            >
              <option value="">Select a stadium</option>
              {stadiums.map((stadium) => (
                <option key={stadium.id} value={stadium.id}>{stadium.name}</option>
              ))}
            </select>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-gray-100 mt-5">
            <ArrowLeftRight className="w-4 h-4 text-black" />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold mb-2">Stadium 2</p>
          <select
            value={stadium2?.id ?? ""}
            onChange={(e) => {
              if (e.target.value) handleSelectStadium2(Number(e.target.value));
              else setStadium2(null);
            }}
            className="w-full cursor-pointer border border-gray-300 bg-gray-50 rounded-lg p-3 text-medium hover:border-red-400 transition focus:outline-none"
          >
            <option value="">Select a stadium</option>
            {stadiums.map((stadium) => (
              <option key={stadium.id} value={stadium.id}>{stadium.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* PLACEHOLDER */}
      {!bothSelected && (
        <div className="mt-16 flex flex-col items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-200">
            <ArrowLeftRight className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="mt-4 text-lg font-semibold text-foreground">Select two stadiums to compare</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Use the dropdowns above to pick stadiums for a side-by-side comparison.
          </p>
        </div>
      )}

      {/* COMPARACION */}
      {bothSelected && (
        <div className="mt-8">
          {/* STADIUM IMAGES */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="relative rounded-xl overflow-hidden h-52">
              <Image src={`http://localhost:3000${stadium1.imageUrl}`} alt={stadium1.name} fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-bold text-lg">{stadium1.name}</p>
                <p className="text-white/80 text-sm">{stadium1.team}</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-52">
              <Image src={`http://localhost:3000${stadium2.imageUrl}`} alt={stadium2.name} fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-bold text-lg">{stadium2.name}</p>
                <p className="text-white/80 text-sm">{stadium2.team}</p>
              </div>
            </div>
          </div>

          {/* COMPARISON TABLE */}
          <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
              <div className="p-4 text-center">
                <p className="font-bold text-red-600">{stadium1.name}</p>
                <p className="text-xs text-gray-500">{stadium1.city}, {stadium1.state}</p>
              </div>
              <div className="p-4 text-center border-x border-gray-200">
                <p className="text-xs font-bold uppercase text-gray-400">Category</p>
              </div>
              <div className="p-4 text-center">
                <p className="font-bold text-blue-600">{stadium2.name}</p>
                <p className="text-xs text-gray-500">{stadium2.city}, {stadium2.state}</p>
              </div>
            </div>

            {categories.map((cat, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-b border-gray-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
              >
                <div className="p-4 text-center">
                  <span className="font-bold text-red-600">{cat.v1}</span>
                </div>
                <div className="p-4 text-center border-x border-gray-100 flex items-center justify-center gap-2">
                  <span className="text-gray-400">{cat.icon}</span>
                  <span className="text-xs text-gray-500 font-medium">{cat.label}</span>
                </div>
                <div className="p-4 text-center">
                  <span className="font-bold text-blue-600">{cat.v2}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ATTENDANCE CHART */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-sm uppercase text-gray-500 mb-6">Average Attendance Comparison</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceChartData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} tick={{ fontSize: 12 }} />
                <Tooltip formatter={(v) => typeof v === "number" ? v.toLocaleString() : v} />
                <Legend />
                <Bar dataKey={stadium1.name} fill="#dc2626" radius={[4, 4, 0, 0]} />
                <Bar dataKey={stadium2.name} fill="#2563eb" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </section>
  );
}