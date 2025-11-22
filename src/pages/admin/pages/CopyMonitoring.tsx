import React, { useState } from 'react';
import { Activity, AlertTriangle, CheckCircle, XCircle, RefreshCw, Zap } from 'lucide-react';
import type { CopyTradeLog, CopyEngineStats } from '../../../types/admin';
import AdminTradeStatCard from '../../../components/AdminTradeCard';
import { Table } from '../../../components/Table';

const CopyMonitoring: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const engineStats: CopyEngineStats = {
    totalCopiesExecuted: 1258,
    successfulCopies: 1189,
    failedCopies: 69,
    averageLatency: 245,
    engineStatus: 'running',
  };

  const recentLogs: CopyTradeLog[] = [
    {
      id: '1',
      timestamp: '2024-01-21 15:30:45',
      masterTraderId: '1',
      masterTraderName: 'John Crypto',
      followerId: '5',
      followerName: 'Mike Johnson',
      symbol: 'BTCUSDT',
      action: 'BUY',
      quantity: 0.5,
      price: 42500,
      status: 'success',
      latency: 180,
    },
    {
      id: '2',
      timestamp: '2024-01-21 15:28:12',
      masterTraderId: '2',
      masterTraderName: 'Sarah Trader',
      followerId: '8',
      followerName: 'Emma Wilson',
      symbol: 'ETHUSDT',
      action: 'SELL',
      quantity: 2.5,
      price: 2450,
      status: 'failed',
      latency: 520,
      errorMessage: 'Insufficient balance',
    },
  ];

  const failureReasons = [
    { reason: 'Insufficient Balance', count: 35, percentage: 50.7 },
    { reason: 'API Connection Error', count: 18, percentage: 26.1 },
    { reason: 'Rate Limit Exceeded', count: 10, percentage: 14.5 },
    { reason: 'Invalid Order', count: 6, percentage: 8.7 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Copy Trading Monitoring</h1>
            <p className="text-gray-600 mt-1">Real-time copy engine performance</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Engine Status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Activity className="w-8 h-8 text-green-600 animate-pulse" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Copy Engine Status</h2>
                <p className="text-green-600 font-medium flex items-center gap-2 mt-1">
                  <CheckCircle className="w-4 h-4" />
                  Running Smoothly
                </p>
              </div>
            </div>
            <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors">
              Stop Engine
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <AdminTradeStatCard
            title="Total Executions"
            value={engineStats.totalCopiesExecuted}
            subtext="Today"
            icon={<Zap className="w-5 h-5 text-yellow-600" />}
          />
          <AdminTradeStatCard
            title="Success Rate"
            value={parseFloat(
              ((engineStats.successfulCopies / engineStats.totalCopiesExecuted) * 100).toFixed(1)
            )}
            subtext={`${engineStats.successfulCopies} successful`}
            icon={<CheckCircle className="w-5 h-5 text-green-600" />}
          />
          <AdminTradeStatCard
            title="Failed Copies"
            value={engineStats.failedCopies}
            subtext="Needs attention"
            icon={<XCircle className="w-5 h-5 text-red-600" />}
          />
          <AdminTradeStatCard
            title="Avg Latency"
            value={engineStats.averageLatency}
            subtext="Response time"
            icon={<Activity className="w-5 h-5 text-yellow-600" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Failure Reasons */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              Failure Analysis
            </h2>
            <div className="space-y-4">
              {failureReasons.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">{item.reason}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">{item.count}</span>
                      <span className="text-xs text-gray-500">({item.percentage}%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Chart Placeholder */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Execution Timeline</h2>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-center">
                <Activity className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Real-time execution chart</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Copy Logs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Recent Copy Executions</h2>
          </div>
          <div className="overflow-x-auto">
            <Table
              columns={[
                { 
                  key: 'timestamp',
                  header: 'Timestamp',
                  render: (log: CopyTradeLog) => <span className="text-sm text-gray-600">{log.timestamp}</span>,
                },
                {
                  key: 'masterTrader',
                  header: 'Master Trader',
                  render: (log: CopyTradeLog) => (
                    <span className="font-medium text-gray-900">{log.masterTraderName}</span>
                  ),
                },
                {
                  key: 'follower',
                  header: 'Follower',
                  render: (log: CopyTradeLog) => (
                    <span className="font-medium text-gray-900">{log.followerName}</span>
                  ),
                },
                {
                  key: 'trade',
                  header: 'Trade',
                  render: (log: CopyTradeLog) => (
                    <div className="flex flex-col">
                      <span
                        className={`text-sm font-medium ${
                          log.action === 'BUY' ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {log.action} {log.symbol}
                      </span>
                      <span className="text-xs text-gray-500">
                        {log.quantity} @ ${log.price.toLocaleString()}
                      </span>
                    </div>
                  ),
                },
                {
                  key: 'latency',
                  header: 'Latency',
                  render: (log: CopyTradeLog) => (
                    <span
                      className={`text-sm font-medium ${
                        log.latency < 300 ? 'text-green-600' : 'text-yellow-600'
                      }`}
                    >
                      {log.latency}ms
                    </span>
                  ),
                },
                {
                  key: 'status',
                  header: 'Status',
                  render: (log: CopyTradeLog) => (
                    log.status === 'success' ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        <CheckCircle className="w-3 h-3" />
                        Success
                      </span>
                    ) : (
                      <div className="flex flex-col gap-1">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium w-fit">
                          <XCircle className="w-3 h-3" />
                          Failed
                        </span>
                        {log.errorMessage && (
                          <span className="text-xs text-gray-500">{log.errorMessage}</span>
                        )}
                      </div>
                    )
                  ),
                },
              ]}
              data={recentLogs}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyMonitoring;
