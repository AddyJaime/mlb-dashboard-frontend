import { Target, Trophy, Sparkles } from "lucide-react";

type HistoricalStatisticsProps = {
  homeWinPercentage: number;
  totalGames: number;
  perfectGames: number;
};

export default function HistoricalStatistics({
  homeWinPercentage,
  totalGames,
  perfectGames,
}: HistoricalStatisticsProps) {
  return (
    <div className="border border-gray-300 bg-gray-50 rounded-xl p-6">
      <h2 className="font-bold text-lg mb-4">Historical Statistics</h2>

      <div className="flex gap-4">
      

        {/* Total Games */}
        <div className="flex-1 bg-gray-100 rounded-xl p-5">
          {/* ícono con fondo rojo claro */}
          <div className="bg-red-50 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
            <Target size={18} className="text-red-600" />
          </div>
          <p className="text-2xl font-bold">{totalGames.toLocaleString()}</p>
          <p className="text-sm text-gray-500 mt-1">Total Games</p>
        </div>

        {/* Home Win % */}
        <div className="flex-1 bg-gray-100 rounded-xl p-5">
          <div className="bg-red-50 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
            <Trophy size={18} className="text-red-600" />
          </div>
          <p className="text-2xl font-bold">{homeWinPercentage}%</p>
          <p className="text-sm text-gray-500 mt-1">Home Win %</p>
        </div>

        {/* Perfect Games */}
     
        <div className="flex-1 bg-gray-100 rounded-xl p-5">
          <div className="bg-red-50 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
            <Sparkles size={18} className="text-red-600" />
          </div>
          <p className="text-2xl font-bold">{perfectGames}</p>
          <p className="text-sm text-gray-500 mt-1">Perfect Games</p>
        </div>
      </div>
    </div>
  );
}