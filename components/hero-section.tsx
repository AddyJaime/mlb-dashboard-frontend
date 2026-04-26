import { Stadium } from "@/types/stadium"
import { MapPin, TrendingUp, Trophy } from "lucide-react"


export default function HeroSection({count, stadiums}: {count: number, stadiums: Stadium[] }) {
  const avgCapacity = Math.round(stadiums.reduce((acc, stadium)=> {
    return acc + stadium.capacity
  }, 0) / stadiums.length)

  const oldestPark = stadiums.reduce((acc, stadium)=> {
    if (stadium.yearOpen < acc.yearOpen) {
      return stadium
    } else {
      return acc
    }
  }, stadiums[0])
  return (
    
    <section className="w-full bg-gray-50 border-b border-gray-200">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Text */}
        <p className="text-red-400 font-bold uppercase tracking-widest text-m">
          Major League Baseball
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-2 text-gray-900">
          Stadium Data Dashboard
        </h1>

        <p className="mt-4 text-gray-600 max-w-xl">
          Explore detailed analytics, attendance trends, and historical data for every MLB ballpark across America.
        </p>

        {/* Stats Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center gap-4 shadow-sm">
            <div className="bg-red-100 text-red-600 p-3 rounded-lg">
              <MapPin/>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{count}</h2>
              <p className="text-gray-500 text-sm">Active Stadiums</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center gap-4 shadow-sm">
            <div className="bg-red-100 text-red-600 p-3 rounded-lg">
              <TrendingUp />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{avgCapacity.toLocaleString()}</h2>
              <p className="text-gray-500 text-sm">Avg. Capacity</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center gap-4 shadow-sm">
            <div className="bg-red-100 text-red-600 p-3 rounded-lg">
              <Trophy/>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{oldestPark.yearOpen}</h2>
              <p className="text-gray-500 text-sm">{oldestPark.name}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}