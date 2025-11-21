import React, { useState, useEffect } from 'react';
import { Card } from '../../../components/Card';
import { Table } from '../../../components/Table';
import { Badge } from '../../../components/Badge';
import DashboardLayout from '../../../components/DashboardLayout';
import type { Position } from '../../../types';
import { FaChartLine, FaCircle, FaDollarSign } from 'react-icons/fa';
import { BiLineChart, BiLineChartDown } from 'react-icons/bi';
import { CiCircleAlert } from 'react-icons/ci';
import { FiRefreshCcw } from 'react-icons/fi';

const LiveTradesMonitor: React.FC = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPositions([
        {
          id: '1',
          accountId: 'acc1',
          symbol: 'BTCUSDT',
          side: 'BUY',
          size: 0.5,
          entryPrice: 43250.50,
          markPrice: 43850.75,
          unrealizedPnl: 300.125,
          unrealizedPnlPercent: 1.39,
          leverage: 10,
          marginType: 'ISOLATED',
          openedAt: new Date(Date.now() - 3600000).toISOString(),
          liquidationPrice: 39500,
        },
        {
          id: '2',
          accountId: 'acc1',
          symbol: 'ETHUSDT',
          side: 'SELL',
          size: 2,
          entryPrice: 2285.30,
          markPrice: 2265.45,
          unrealizedPnl: 39.70,
          unrealizedPnlPercent: 0.87,
          leverage: 5,
          marginType: 'CROSS',
          openedAt: new Date(Date.now() - 7200000).toISOString(),
          liquidationPrice: 2450,
        },
        {
          id: '3',
          accountId: 'acc1',
          symbol: 'SOLUSDT',
          side: 'BUY',
          size: 50,
          entryPrice: 98.45,
          markPrice: 96.80,
          unrealizedPnl: -82.50,
          unrealizedPnlPercent: -1.68,
          leverage: 3,
          marginType: 'ISOLATED',
          openedAt: new Date(Date.now() - 1800000).toISOString(),
          liquidationPrice: 82.30,
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const formatPnL = (pnl?: number, pnlPercent?: number) => {
    if (pnl === undefined) return '-';
    const isPositive = pnl >= 0;
    return (
      <div className={`font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? '+' : ''}${pnl.toFixed(2)}
        {pnlPercent && (
          <span className="text-xs ml-1">
            ({isPositive ? '+' : ''}{pnlPercent.toFixed(2)}%)
          </span>
        )}
      </div>
    );
  };

  const formatDuration = (timestamp: string) => {
    const diff = Date.now() - new Date(timestamp).getTime();
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };

  const columns = [
    {
      key: 'symbol',
      header: 'Symbol',
      render: (item: Position) => (
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">{item.symbol}</span>
          <Badge variant={item.side === 'BUY' ? 'success' : 'error'}>
            {item.side}
          </Badge>
        </div>
      ),
    },
    {
      key: 'size',
      header: 'Size',
      render: (item: Position) => (
        <span className="text-gray-700">{item.size}</span>
      ),
    },
    {
      key: 'entryPrice',
      header: 'Entry Price',
      render: (item: Position) => (
        <span className="text-gray-700">${item.entryPrice.toLocaleString()}</span>
      ),
    },
    {
      key: 'markPrice',
      header: 'Mark Price',
      render: (item: Position) => (
        <span className="text-gray-700">${item.markPrice?.toLocaleString()}</span>
      ),
    },
    {
      key: 'unrealizedPnl',
      header: 'Unrealized P&L',
      render: (item: Position) => formatPnL(item.unrealizedPnl, item.unrealizedPnlPercent),
    },
    {
      key: 'leverage',
      header: 'Leverage',
      render: (item: Position) => (
        <Badge variant="warning">{item.leverage}x</Badge>
      ),
    },
    {
      key: 'marginType',
      header: 'Margin',
      render: (item: Position) => (
        <Badge variant="default">{item.marginType}</Badge>
      ),
    },
    {
      key: 'duration',
      header: 'Duration',
      render: (item: Position) => (
        <span className="text-gray-600 text-sm">{formatDuration(item.openedAt)}</span>
      ),
    },
  ];

  const totalUnrealizedPnl = positions.reduce((sum, pos) => sum + (pos.unrealizedPnl || 0), 0);

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Trades Monitor</h1>
          <p className="text-gray-600">Real-time view of your open positions from Binance</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Open Positions</p>
                <p className="text-2xl font-bold text-gray-900">{positions.length}</p>
              </div>
              <div className="text-2xl"><FaChartLine /></div>
            </div>
          </Card>
          <Card className="bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Total Unrealized P&L</p>
                <p className={`text-2xl font-bold ${totalUnrealizedPnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {totalUnrealizedPnl >= 0 ? '+' : ''}${totalUnrealizedPnl.toFixed(2)}
                </p>
              </div>
              <div className="text-2xl">{totalUnrealizedPnl >= 0 ? <BiLineChart /> : <BiLineChartDown />}</div>
            </div>
          </Card>
          <Card className="bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Status</p>
                <p className="text-2xl font-bold flex items-center gap-2">Live</p>
              </div>
              <div className="text-2xl text-green-600"><FaCircle /></div>
            </div>
          </Card>
        </div>

        {/* Info Banner */}
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl"><CiCircleAlert /></span>
            <div className="flex-1">
              <p className="font-semibold text-blue-900 mb-1">Read-Only View</p>
              <p className="text-blue-800 text-sm">
                This page displays your current positions from your Binance account. 
                You cannot close or modify trades here. All trades are executed and managed 
                directly on Binance. Your followers' positions automatically mirror your trades.
              </p>
            </div>
          </div>
        </div>

        {/* Positions Table */}
        <Card title="Current Open Positions" icon={<FaDollarSign />}>
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-gray-100 rounded animate-pulse"></div>
              ))}
            </div>
          ) : (
            <Table
              data={positions}
              columns={columns}
              emptyMessage="No open positions"
            />
          )}
        </Card>

        {/* Auto-refresh Notice */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            <FiRefreshCcw /> Auto-refreshing every 5 seconds • Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LiveTradesMonitor;
