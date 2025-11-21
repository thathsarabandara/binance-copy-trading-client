import React, { useState } from 'react';
import FollowerLayout from '../../../layouts/FollowerLayout';
import { useParams } from 'react-router-dom';
import {
  TrendingUp,
  Users,
  DollarSign,
  Star,
  CheckCircle,
  Calendar,
  Activity,
  ArrowDown,
  Clock,
  BarChart3,
} from 'lucide-react';
import { Line } from 'react-chartjs-2';

const MasterTraderProfile: React.FC = () => {
  const { traderId } = useParams();
  const [showCopyModal, setShowCopyModal] = useState(false);

  // Mock data
  const trader = {
    id: traderId,
    name: 'CryptoKing',
    verified: true,
    profitPercentage: 125.5,
    winRate: 78,
    riskScore: 6.5,
    monthlyReturn: 12.3,
    followersCount: 1250,
    minimumInvestment: 1000,
    rating: 4.8,
    avatar: 'CK',
    totalTrades: 856,
    joinedDate: '2023-06-15',
    maxDrawdown: 15.2,
    averageHoldTime: '4h 32m',
    sharpeRatio: 2.34,
    subscriptionFee: 0,
    strategyDescription:
      'Focus on high-liquidity BTC and ETH pairs with technical analysis. Using momentum and trend-following strategies with strict risk management.',
    capitalFollowing: 3250000,
  };

  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Profit %',
        data: [5, 12, 18, 25, 40, 65, 125.5],
        borderColor: '#EAB308',
        backgroundColor: 'rgba(234, 179, 8, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const recentTrades = [
    { symbol: 'BTCUSDT', type: 'LONG', entry: 42500, exit: 43800, profit: 3.06, date: '2024-01-15' },
    { symbol: 'ETHUSDT', type: 'LONG', entry: 2250, exit: 2310, profit: 2.67, date: '2024-01-14' },
    { symbol: 'BNBUSDT', type: 'SHORT', entry: 315, exit: 308, profit: 2.22, date: '2024-01-13' },
    { symbol: 'BTCUSDT', type: 'LONG', entry: 41800, exit: 40900, profit: -2.15, date: '2024-01-12' },
  ];

  const reviews = [
    {
      id: '1',
      username: 'TraderJoe',
      rating: 5,
      comment: 'Excellent trader! Consistent profits with good risk management.',
      date: '2024-01-10',
    },
    {
      id: '2',
      username: 'InvestorSam',
      rating: 4,
      comment: 'Good performance overall, but can have some volatile periods.',
      date: '2024-01-08',
    },
  ];

  const stats = [
    { label: 'Total Trades', value: trader.totalTrades, icon: Activity },
    { label: 'Win Rate', value: `${trader.winRate}%`, icon: CheckCircle },
    { label: 'Avg Hold Time', value: trader.averageHoldTime, icon: Clock },
    { label: 'Max Drawdown', value: `${trader.maxDrawdown}%`, icon: ArrowDown },
  ];

  return (
    <FollowerLayout>
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-8 shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-3xl">{trader.avatar}</span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{trader.name}</h1>
                {trader.verified && (
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium">
                    <CheckCircle className="w-4 h-4" />
                    Verified
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">{trader.rating}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{trader.followersCount} followers</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {new Date(trader.joinedDate).toLocaleDateString()}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{trader.strategyDescription}</p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold">
                  <TrendingUp className="w-4 h-4 inline mr-1" />
                  +{trader.profitPercentage}% Total Profit
                </div>
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold">
                  <BarChart3 className="w-4 h-4 inline mr-1" />
                  {trader.winRate}% Win Rate
                </div>
                <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-semibold">
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  ${(trader.capitalFollowing / 1000000).toFixed(2)}M Capital
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowCopyModal(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg"
            >
              Start Copying
            </button>
          </div>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-yellow-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">{stat.label}</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Performance Chart & Risk Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Performance History</h2>
            <div className="h-72">
              <Line
                data={performanceData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: { grid: { display: false } },
                    y: { grid: { color: '#F3F4F6' } },
                  },
                }}
              />
            </div>
          </div>

          {/* Risk Metrics */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Risk Metrics</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Risk Score</span>
                  <span className="text-sm font-bold text-yellow-600">{trader.riskScore}/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: `${trader.riskScore * 10}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Medium Risk</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Max Drawdown</span>
                  <span className="text-sm font-bold text-red-600">{trader.maxDrawdown}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: `${trader.maxDrawdown}%` }}></div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Sharpe Ratio:</span>
                  <span className="text-sm font-semibold text-gray-900">{trader.sharpeRatio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Monthly Return:</span>
                  <span className="text-sm font-semibold text-green-600">+{trader.monthlyReturn}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Subscription Fee:</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {trader.subscriptionFee === 0 ? 'Free' : `$${trader.subscriptionFee}/mo`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Min Investment:</span>
                  <span className="text-sm font-semibold text-gray-900">${trader.minimumInvestment}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Trades */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Trade History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Symbol</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Type</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Entry</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Exit</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Profit %</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentTrades.map((trade, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-semibold text-gray-900">{trade.symbol}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          trade.type === 'LONG'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {trade.type}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right text-sm text-gray-900">${trade.entry.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right text-sm text-gray-900">${trade.exit.toLocaleString()}</td>
                    <td className="py-3 px-4 text-right">
                      <span className={`font-semibold ${trade.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {trade.profit >= 0 ? '+' : ''}
                        {trade.profit}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right text-sm text-gray-600">{trade.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Follower Reviews</h2>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-700 font-semibold text-sm">
                        {review.username.charAt(0)}
                      </span>
                    </div>
                    <span className="font-semibold text-gray-900">{review.username}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-2">{review.comment}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Copy Modal */}
        {showCopyModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Copying {trader.name}</h3>
              <p className="text-gray-600 mb-6">
                You'll be redirected to configure your copy settings. Minimum investment: $
                {trader.minimumInvestment}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCopyModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={() => (window.location.href = `/follower/copy-settings?trader=${trader.id}`)}
                  className="flex-1 px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </FollowerLayout>
  );
};

export default MasterTraderProfile;
