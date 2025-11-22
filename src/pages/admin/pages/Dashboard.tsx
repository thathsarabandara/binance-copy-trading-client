import React from 'react';
import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  AlertCircle,
  CheckCircle,
  Clock,
} from 'lucide-react';
import type { PlatformStats, DailyProfit, APIHealthStatus, ErrorLog } from '../../../types/admin';
import AdminStatCard from '../../../components/AdminStatCard';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const stats: PlatformStats = {
    totalMasterTraders: 145,
    totalFollowers: 1234,
    totalCapitalCopying: 2500000,
    totalPlatformEarnings: 125000,
    activeCopySessions: 856,
    subscriptionRevenue: 45000,
  };

  const dailyProfits: DailyProfit[] = [
    { date: '2024-01-15', profit: 12500 },
    { date: '2024-01-16', profit: 15800 },
    { date: '2024-01-17', profit: 14200 },
    { date: '2024-01-18', profit: 18900 },
    { date: '2024-01-19', profit: 16500 },
    { date: '2024-01-20', profit: 21200 },
    { date: '2024-01-21', profit: 19800 },
  ];

  const apiHealth: APIHealthStatus = {
    status: 'healthy',
    lastCheck: '2 minutes ago',
    responseTime: 145,
    uptime: 99.98,
  };

  const recentErrors: ErrorLog[] = [
    {
      id: '1',
      timestamp: '2024-01-21 14:32:15',
      severity: 'medium',
      message: 'API rate limit exceeded for user #4532',
      source: 'Binance API',
      resolved: false,
    },
    {
      id: '2',
      timestamp: '2024-01-21 13:15:42',
      severity: 'low',
      message: 'Slow response time detected',
      source: 'Copy Engine',
      resolved: true,
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="max-w-7xl">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Complete platform overview and insights</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <AdminStatCard
            title="Total Master Traders"
            value={stats.totalMasterTraders}
            change={12.5}
            icon={<TrendingUp />}
            trend="up"
          />
          <AdminStatCard
            title="Total Followers"
            value={stats.totalFollowers}
            change={8.3}
            icon={<Users />}
            trend="up"
          />
          <AdminStatCard
            title="Total Capital Copying"
            value={stats.totalCapitalCopying}
            change={15.7}
            icon={<DollarSign />}
            trend="up"
            format="currency"
          />
          <AdminStatCard
            title="Platform Earnings"
            value={stats.totalPlatformEarnings}
            change={22.4}
            icon={<DollarSign />}
            trend="up"
            format="currency"
          />
          <AdminStatCard
            title="Active Copy Sessions"
            value={stats.activeCopySessions}
            change={5.2}
            icon={<Activity />}
            trend="up"
          />
          <AdminStatCard
            title="Subscription Revenue"
            value={stats.subscriptionRevenue}
            change={18.9}
            icon={<DollarSign />}
            trend="up"
            format="currency"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Daily Profit Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Daily Profit Trend</h2>
                <p className="text-sm text-gray-600 mt-1">Last 7 days performance</p>
              </div>
              <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
              </select>
            </div>

            {/* Simple Bar Chart */}
            <div className="h-64 flex items-end justify-between gap-2">
              {dailyProfits.map((item, index) => {
                const maxProfit = Math.max(...dailyProfits.map((d) => d.profit));
                const heightPercent = (item.profit / maxProfit) * 100;

                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="relative w-full group">
                      <div
                        className="w-full bg-gradient-to-t from-yellow-500 to-yellow-400 rounded-t-lg hover:from-yellow-600 hover:to-yellow-500 transition-all cursor-pointer"
                        style={{ height: `${heightPercent}%` }}
                      />
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        ${item.profit.toLocaleString()}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* API Health Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">API Health Status</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">System Status</p>
                    <p className="text-xs text-gray-600 capitalize">{apiHealth.status}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Last Check</span>
                  <span className="text-sm font-medium text-gray-900">
                    {apiHealth.lastCheck}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Response Time</span>
                  <span className="text-sm font-medium text-gray-900">
                    {apiHealth.responseTime}ms
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Uptime</span>
                  <span className="text-sm font-medium text-green-600">
                    {apiHealth.uptime}%
                  </span>
                </div>
              </div>

              <button className="w-full mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors">
                View Detailed Report
              </button>
            </div>
          </div>
        </div>

        {/* Error Logs Alert */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <h2 className="text-lg font-bold text-gray-900">Recent Error Logs</h2>
            </div>
            <button className="text-sm text-yellow-600 hover:text-yellow-700 font-medium">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {recentErrors.map((error) => (
              <div
                key={error.id}
                className="flex items-start justify-between p-4 border border-gray-200 rounded-lg hover:border-yellow-300 transition-colors"
              >
                <div className="flex items-start gap-3 flex-1">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      error.severity === 'critical'
                        ? 'bg-red-500'
                        : error.severity === 'high'
                        ? 'bg-orange-500'
                        : error.severity === 'medium'
                        ? 'bg-yellow-500'
                        : 'bg-blue-500'
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{error.message}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {error.timestamp}
                      </span>
                      <span className="text-xs text-gray-500">{error.source}</span>
                    </div>
                  </div>
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded ${
                    error.resolved
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {error.resolved ? 'Resolved' : 'Active'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="p-4 bg-white border-2 border-gray-200 hover:border-yellow-400 rounded-xl transition-all text-center"
              onClick={()=> navigate('/admin/master-traders')}
          >
            <TrendingUp className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Manage Traders</span>
          </button>
          <button className="p-4 bg-white border-2 border-gray-200 hover:border-yellow-400 rounded-xl transition-all text-center"
              onClick={()=> navigate('/admin/followers')}
          >
            <Users className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">View Followers</span>
          </button>
          <button className="p-4 bg-white border-2 border-gray-200 hover:border-yellow-400 rounded-xl transition-all text-center"
              onClick={()=> navigate('/admin/copy-monitoring')}
          >
            <Activity className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Copy Monitor</span>
          </button>
          <button className="p-4 bg-white border-2 border-gray-200 hover:border-yellow-400 rounded-xl transition-all text-center"
              onClick={()=> navigate('/admin/payouts')}
          >
            <DollarSign className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-900">Manage Payouts</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
