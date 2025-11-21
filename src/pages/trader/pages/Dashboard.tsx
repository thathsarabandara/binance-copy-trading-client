import React, { useState, useEffect } from 'react';
import { Card, StatCard } from '../../../components/Card';
import { LineChart } from '../../../components/Chart';
import { Alert } from '../../../components/Badge';
import DashboardLayout from '../../../components/DashboardLayout';
import type { DashboardStats, Alert as AlertType } from '../../../types';
import { IoMdWarning } from 'react-icons/io';
import { FaChartLine, FaDollarSign, FaMoneyBill } from 'react-icons/fa';
import { IoBarChart, IoLockClosed, IoStatsChart } from 'react-icons/io5';
import { RiUserFollowFill } from 'react-icons/ri';
import { TbPlugConnected, TbTargetArrow } from 'react-icons/tb';

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [alerts, setAlerts] = useState<AlertType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with actual API call
    setTimeout(() => {
      setStats({
        balance: 125000.50,
        equity: 128450.75,
        totalFollowers: 247,
        totalCapitalCopying: 3250000,
        todayPnl: 2450.25,
        todayPnlPercent: 1.95,
        weeklyPnl: [1200, -500, 800, 1500, -300, 2100, 2450],
        weeklyLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        openPositions: 8,
        closedTradesToday: 12,
      });
      setAlerts([
        {
          id: '1',
          type: 'FOLLOWER_LEFT',
          message: '3 followers stopped copying in the last 24 hours',
          severity: 'medium',
          timestamp: new Date().toISOString(),
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-32 bg-gray-200 rounded-xl"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Master Trader Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your trading overview.</p>
        </div>

        {/* Alerts */}
        {alerts.length > 0 && (
          <div className="mb-6 space-y-3">
            {alerts.map((alert) => (
              <Alert
                key={alert.id}
                variant={alert.severity === 'high' ? 'error' : alert.severity === 'medium' ? 'warning' : 'info'}
                onClose={() => setAlerts(alerts.filter((a) => a.id !== alert.id))}
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg text-yellow-600"><IoMdWarning /></span>
                  <div>
                    <p className="font-semibold">{alert.message}</p>
                    <p className="text-xs mt-1 opacity-75">
                      {new Date(alert.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              </Alert>
            ))}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Account Balance"
            value={`$${stats?.balance.toLocaleString()}`}
            subtitle="USDT"
            icon={<FaDollarSign />}
            trend="up"
            trendValue="+2.4%"
          />
          <StatCard
            title="Total Equity"
            value={`$${stats?.equity.toLocaleString()}`}
            subtitle="Including unrealized P&L"
            icon={<IoBarChart />}
            trend="up"
            trendValue="+2.7%"
          />
          <StatCard
            title="Total Followers"
            value={stats?.totalFollowers || 0}
            subtitle="Active copy traders"
            icon={<RiUserFollowFill />}
            trend="neutral"
            trendValue="247"
          />
          <StatCard
            title="Today's P&L"
            value={`$${stats?.todayPnl.toLocaleString()}`}
            subtitle={`${stats?.todayPnlPercent}%`}
            icon={<FaChartLine />}
            trend={stats?.todayPnl && stats.todayPnl > 0 ? 'up' : 'down'}
            trendValue={`${stats?.todayPnlPercent}%`}
          />
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Total Capital Copying</p>
                <p className="text-2xl font-bold">${(stats?.totalCapitalCopying || 0).toLocaleString()}</p>
              </div>
              <div className="text-3xl"><FaMoneyBill /></div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Open Positions</p>
                <p className="text-2xl font-bold text-gray-900">{stats?.openPositions}</p>
              </div>
              <div className="text-3xl"><TbTargetArrow /></div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Closed Today</p>
                <p className="text-2xl font-bold text-gray-900">{stats?.closedTradesToday}</p>
              </div>
              <div className="text-3xl"><IoLockClosed /></div>
            </div>
          </Card>
        </div>

        {/* Weekly P&L Chart */}
        <Card title="Weekly Performance" icon={<IoStatsChart />} className="mb-8">
          <LineChart
            data={stats?.weeklyPnl || []}
            labels={stats?.weeklyLabels || []}
            title="Profit & Loss"
            color="#EAB308"
            height={300}
          />
        </Card>

        {/* Connection Status */}
        <Card title="Connection Status" icon={<TbPlugConnected />}>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="font-semibold text-gray-900">Binance API</p>
                  <p className="text-sm text-gray-600">Connected and syncing</p>
                </div>
              </div>
              <span className="text-green-600 text-sm font-medium">Live</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="font-semibold text-gray-900">Copy Trading System</p>
                  <p className="text-sm text-gray-600">Processing orders</p>
                </div>
              </div>
              <span className="text-yellow-600 text-sm font-medium">Active</span>
            </div>
          </div>
        </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
