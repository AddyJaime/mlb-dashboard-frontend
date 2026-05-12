"use client"

import { Attendance } from "@/types/attendance"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"


type AttendanceTrendsProps = {
attendance: Attendance[]
}

export default function AttendanceTrends({attendance}:AttendanceTrendsProps){

  return (
    <div className="border p-6  border-gray-300 bg-gray-50 rounded-xl">
        <h2 className="font-bold text-lg mb-4">Attendance Trends</h2>
      {/* flex justify-between pone Total Attendance a la izquierda y Per Season a la derecha */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-sm">Total Attendance</h2>
        <span className="text-sm text-gray-400">Per Season</span>
      </div>
      <ResponsiveContainer width="100%"   height={300}>
      <BarChart data={attendance}>
      <XAxis dataKey="year"/>
      <Bar fill="#b91c1c" dataKey="total_attendance"/>
      <CartesianGrid/>
      {/* tickFormatter convierte el número crudo a formato M — ej: 3000000 → 3.0M */}
      <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}/>
      {/* formatter le da formato con comas al valor en el tooltip — ej: 3000000 → 3,000,000 */}
      <Tooltip formatter={(value) => Number(value).toLocaleString()}/>
      </BarChart> 


      </ResponsiveContainer>
    </div>
  )
}