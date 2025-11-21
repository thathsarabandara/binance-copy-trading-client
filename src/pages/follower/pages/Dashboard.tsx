import React, { useState } from 'react';
import FollowerLayout from '../../../layouts/FollowerLayout';
import {
  TrendingUp,
  DollarSign,
  Activity,
  Users,
  AlertTriangle,
  PlayCircle,
  PauseCircle,
} from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import FollowerStat from '../../../components/FollowerStat';
import FollowerMasterTraderCard from '../../../components/FollowerMasterTraderCard';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const FollowerDashboard: React.FC = () => {
  const [copyingActive, setCopyingActive] = useState(true);

  // Mock data
  const stats = {
    totalInvestedCapital: 50000,
    totalProfitLoss: 8750,
    totalProfitLossPercentage: 17.5,
    todayPnL: 425,
    todayPnLPercentage: 0.85,
    activeMasterTraders: 3,
    openTrades: 12,
    riskStatus: 'safe' as const,
    maxDrawdown: 5.2,
  };

  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Portfolio Value',
        data: [50000, 51500, 53200, 52800, 55400, 57200, 58750],
        borderColor: '#EAB308',
        backgroundColor: 'rgba(234, 179, 8, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1F2937',
        padding: 12,
        titleColor: '#F9FAFB',
        bodyColor: '#F9FAFB',
        borderColor: '#EAB308',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
        },
      },
      y: {
        grid: {
          color: '#F3F4F6',
        },
        ticks: {
          color: '#6B7280',
          callback: (value: number | string) => `$${Number(value).toLocaleString()}`,
        },
      },
    },
  };

  const activeMasterTraders = [
    { id: '1', name: 'CryptoKing',isProfit: true, profitValue: 12.5, allocationValue: 15000, status: "active" as const },
    { id: '2', name: 'BinanceWhale', isProfit: true, profitValue: 8.3, allocationValue: 20000, status: "active" as const },
    { id: '3', name: 'TraderPro', isProfit: true, profitValue: 15.2, allocationValue: 15000, status: "active" as const },
  ];

  const openTrades = [
    { symbol: 'BTCUSDT', entry: 43250, current: 44100, pnl: 850, percentage: 1.96, master: 'CryptoKing' },
    { symbol: 'ETHUSDT', entry: 2280, current: 2315, pnl: 35, percentage: 1.53, master: 'BinanceWhale' },
    { symbol: 'BNBUSDT', entry: 310, current: 305, pnl: -5, percentage: -1.61, master: 'TraderPro' },
  ];

  const alerts = [
    { type: 'warning', message: 'Master trader CryptoKing approaching daily loss limit', time: '5m ago' },
    { type: 'success', message: 'Trade BTCUSDT closed with +$850 profit', time: '1h ago' },
  ];

  return (
    <FollowerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's your copy trading overview</p>
          </div>
          
          <button
            onClick={() => setCopyingActive(!copyingActive)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-lg transition-all ${
              copyingActive
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-yellow-500 hover:bg-yellow-600 text-white'
            }`}
          >
            {copyingActive ? (
              <>
                <PauseCircle className="w-5 h-5" />
                Stop Copying
              </>
            ) : (
              <>
                <PlayCircle className="w-5 h-5" />
                Start Copying
              </>
            )}
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Invested Capital */}
          <FollowerStat label="Total Invested Capital" color='bg-yellow-100' value={`$${stats.totalInvestedCapital.toLocaleString()}`} icon={<DollarSign className="w-6 h-6 text-yellow-600" />} />

          {/* Total Profit/Loss */}
          <FollowerStat label="Total Profit/Loss" icon={<TrendingUp className="w-6 h-6 text-green-600" />} color={stats.totalProfitLoss >= 0 ? 'bg-green-100' : 'bg-red-100'} value={`$${Math.abs(stats.totalProfitLoss).toLocaleString()}`} isPositive={stats.totalProfitLoss >= 0} change={stats.totalProfitLoss} />
          
          {/* Today's PnL */}
          <FollowerStat label="Today's PnL" icon={<Activity className="w-6 h-6 text-blue-600" />} color={stats.todayPnL >= 0 ? 'bg-blue-100' : 'bg-red-100'} value={`$${Math.abs(stats.todayPnL).toLocaleString()}`} isPositive={stats.todayPnL >= 0} change={stats.todayPnL} />

          {/* Active Master Traders */}
          <FollowerStat label="Active Master Traders" icon={<Users className="w-6 h-6 text-purple-600" />} color="bg-purple-100" value={stats.activeMasterTraders} isSubtext={true} subtext={`${stats.openTrades} open trades`} />
          
        </div>

        {/* Alerts */}
        {alerts.length > 0 && (
          <div className="space-y-2">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 p-4 rounded-lg border ${
                  alert.type === 'warning'
                    ? 'bg-yellow-50 border-yellow-200'
                    : 'bg-green-50 border-green-200'
                }`}
              >
                <AlertTriangle
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    alert.type === 'warning' ? 'text-yellow-600' : 'text-green-600'
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                  <p className="text-xs text-gray-600 mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Performance Chart & Risk Status */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Performance Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Performance Overview</h2>
              <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>All time</option>
              </select>
            </div>
            <div className="h-72">
              <Line data={performanceData} options={chartOptions} />
            </div>
          </div>

          {/* Risk Status */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Risk Status</h2>
            <div className="space-y-4">
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-2xl font-bold text-green-600 mb-1">Safe</p>
                <p className="text-sm text-gray-600">Your portfolio is within safe limits</p>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Max Drawdown</span>
                    <span className="text-sm font-bold text-gray-900">{stats.maxDrawdown}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${stats.maxDrawdown * 2}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Limit: 50%</p>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Your portfolio is performing well with low risk. Continue monitoring your master traders' performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Master Traders */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Active Master Traders</h2>
            <a href="/follower/my-traders" className="text-yellow-600 hover:text-yellow-700 font-medium text-sm">
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeMasterTraders.map((trader) => (
                <FollowerMasterTraderCard {...trader} key={trader.id} />
            ))}
          </div>
        </div>

        {/* Open Running Trades */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Open Running Trades</h2>
            <a href="/follower/active-trades" className="text-yellow-600 hover:text-yellow-700 font-medium text-sm">
              View All →
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Symbol</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Master Trader</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Entry Price</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Current Price</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">PnL</th>
                </tr>
              </thead>
              <tbody>
                {openTrades.map((trade, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <span className="font-semibold text-gray-900">{trade.symbol}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-gray-600">{trade.master}</span>
                    </td>
                    <td className="py-3 px-4 text-right text-sm text-gray-900">
                      ${trade.entry.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right text-sm text-gray-900">
                      ${trade.current.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex flex-col items-end">
                        <span className={`font-semibold ${
                          trade.pnl >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {trade.pnl >= 0 ? '+' : ''}${trade.pnl.toLocaleString()}
                        </span>
                        <span className={`text-xs ${
                          trade.percentage >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          ({trade.percentage >= 0 ? '+' : ''}{trade.percentage}%)
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </FollowerLayout>
  );
};

export default FollowerDashboard;
