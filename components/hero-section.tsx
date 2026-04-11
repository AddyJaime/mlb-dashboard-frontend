export default function HeroSection() {
  return (
    <section className="w-full text-white bg-black">

      {/* Background */}
      <div className="bg-[url('/stadium-hero.jpg')] bg-cover bg-center">
        
        {/* Overlay */}
        <div className="bg-black/70">

          {/* Container */}
          <div className="max-w-7xl mx-auto px-6 py-24">

            {/* Text */}
            <p className="text-red-500 uppercase tracking-widest text-sm">
              Major League Baseball
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mt-2">
              Stadium Data Dashboard
            </h1>

            <p className="mt-4 text-gray-300 max-w-xl">
              Explore detailed analytics, attendance trends, and historical data for every MLB ballpark across America.
            </p>

            {/* Stats Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Card 1 */}
              <div className="bg-black/60 border border-gray-800 rounded-xl p-6 flex items-center gap-4">
                <div className="bg-red-600/20 p-3 rounded-lg">
                  📍
                </div>
                <div>
                  <h2 className="text-2xl font-bold">11</h2>
                  <p className="text-gray-400 text-sm">Active Stadiums</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-black/60 border border-gray-800 rounded-xl p-6 flex items-center gap-4">
                <div className="bg-red-600/20 p-3 rounded-lg">
                  📈
                </div>
                <div>
                  <h2 className="text-2xl font-bold">43,772</h2>
                  <p className="text-gray-400 text-sm">Avg. Capacity</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-black/60 border border-gray-800 rounded-xl p-6 flex items-center gap-4">
                <div className="bg-red-600/20 p-3 rounded-lg">
                  🏆
                </div>
                <div>
                  <h2 className="text-2xl font-bold">1912</h2>
                  <p className="text-gray-400 text-sm">Oldest Park (Fenway)</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}