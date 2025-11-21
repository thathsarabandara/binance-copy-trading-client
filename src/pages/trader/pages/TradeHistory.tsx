import React, { useState, useEffect } from 'react';
import { Card } from '../../../components/Card';
import { Table } from '../../../components/Table';
import { Badge } from '../../../components/Badge';
import DashboardLayout from '../../../components/DashboardLayout';
import type { Trade } from '../../../types';
import { BiImport, BiLineChart, BiLineChartDown } from 'react-icons/bi';
import { BsFillBarChartFill } from 'react-icons/bs';
import { FaClipboardList, FaTrophy } from 'react-icons/fa';
import { GiLaurelsTrophy } from 'react-icons/gi';

const TradeHistory: React.FC = () => {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);
  const [dateFilter, setDateFilter] = useState('7d');

  useEffect(() => {
    setTimeout(() => {
      setTrades([
        {
          id: '1',
          orderId: 'ord1',
          accountId: 'acc1',
          symbol: 'BTCUSDT',
          side: 'BUY',
          entryPrice: 42500,
          exitPrice: 43250,
          quantity: 0.5,
          pnl: 375,
          pnlPercent: 1.76,
          fee: 12.5,
          feeAsset: 'USDT',
          leverage: 10,
          duration: 3600000,
          openedAt: new Date(Date.now() - 86400000).toISOString(),
          closedAt: new Date(Date.now() - 82800000).toISOString(),
          status: 'CLOSED',
        },
        {
          id: '2',
          orderId: 'ord2',
          accountId: 'acc1',
          symbol: 'ETHUSDT',
          side: 'SELL',
          entryPrice: 2300,
          exitPrice: 2250,
          quantity: 2,
          pnl: 100,
          pnlPercent: 2.17,
          fee: 8.0,
          feeAsset: 'USDT',
          leverage: 5,
          duration: 7200000,
          openedAt: new Date(Date.now() - 172800000).toISOString(),
          closedAt: new Date(Date.now() - 165600000).toISOString(),
          status: 'CLOSED',
        },
        {
          id: '3',
          orderId: 'ord3',
          accountId: 'acc1',
          symbol: 'SOLUSDT',
          side: 'BUY',
          entryPrice: 100,
          exitPrice: 98,
          quantity: 50,
          pnl: -100,
          pnlPercent: -2.0,
          fee: 15.0,
          feeAsset: 'USDT',
          leverage: 3,
          duration: 5400000,
          openedAt: new Date(Date.now() - 259200000).toISOString(),
          closedAt: new Date(Date.now() - 253800000).toISOString(),
          status: 'CLOSED',
        },
      ]);
      setLoading(false);
    }, 800);
  }, [dateFilter]);

  const formatDuration = (ms?: number) => {
    if (!ms) return '-';
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };

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

  const columns = [
    {
      key: 'symbol',
      header: 'Symbol',
      render: (item: Trade) => (
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">{item.symbol}</span>
          <Badge variant={item.side === 'BUY' ? 'success' : 'error'}>
            {item.side}
          </Badge>
        </div>
      ),
    },
    {
      key: 'entryPrice',
      header: 'Entry',
      render: (item: Trade) => (
        <span className="text-gray-700">${item.entryPrice.toLocaleString()}</span>
      ),
    },
    {
      key: 'exitPrice',
      header: 'Exit',
      render: (item: Trade) => (
        <span className="text-gray-700">${item.exitPrice?.toLocaleString()}</span>
      ),
    },
    {
      key: 'quantity',
      header: 'Quantity',
      render: (item: Trade) => (
        <span className="text-gray-700">{item.quantity}</span>
      ),
    },
    {
      key: 'pnl',
      header: 'P&L',
      render: (item: Trade) => formatPnL(item.pnl, item.pnlPercent),
    },
    {
      key: 'fee',
      header: 'Fee',
      render: (item: Trade) => (
        <span className="text-gray-600">${item.fee?.toFixed(2)}</span>
      ),
    },
    {
      key: 'leverage',
      header: 'Leverage',
      render: (item: Trade) => (
        <Badge variant="warning">{item.leverage}x</Badge>
      ),
    },
    {
      key: 'duration',
      header: 'Duration',
      render: (item: Trade) => (
        <span className="text-gray-600 text-sm">{formatDuration(item.duration)}</span>
      ),
    },
    {
      key: 'closedAt',
      header: 'Closed',
      render: (item: Trade) => (
        <span className="text-gray-600 text-sm">
          {item.closedAt ? new Date(item.closedAt).toLocaleDateString() : '-'}
        </span>
      ),
    },
  ];

  const totalPnl = trades.reduce((sum, trade) => sum + (trade.pnl || 0), 0);
  const winningTrades = trades.filter((t) => (t.pnl || 0) > 0).length;
  const winRate = trades.length > 0 ? (winningTrades / trades.length) * 100 : 0;

  const handleExport = () => {
    alert('Export to CSV feature coming soon!');
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Trade History</h1>
            <p className="text-gray-600">Complete record of your closed trades from Binance</p>
          </div>
          <button
            onClick={handleExport}
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center space-x-auto"
          >
            <BiImport className='text-lg font-bold'/> <p className="ml-2">Export CSV</p>
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Total Trades</p>
                <p className="text-2xl font-bold text-gray-900">{trades.length}</p>
              </div>
              <div className="text-3xl"><BsFillBarChartFill /></div>
            </div>
          </Card>
          <Card className="bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Total P&L</p>
                <p className={`text-2xl font-bold ${totalPnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {totalPnl >= 0 ? '+' : ''}${totalPnl.toFixed(2)}
                </p>
              </div>
              <div className="text-3xl">{totalPnl >= 0 ? <BiLineChart /> : <BiLineChartDown />}</div>
            </div>
          </Card>
          <Card className="bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Win Rate</p>
                <p className="text-2xl font-bold text-gray-900">{winRate.toFixed(1)}%</p>
              </div>
              <div className="text-3xl"><FaTrophy /></div>
            </div>
          </Card>
          <Card className="bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Winning Trades</p>
                <p className="text-2xl font-bold">{winningTrades}/{trades.length}</p>
              </div>
              <div className="text-3xl"><GiLaurelsTrophy /></div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Filter by:</span>
            <div className="flex gap-2">
              {['24h', '7d', '30d', 'All'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setDateFilter(filter.toLowerCase())}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    dateFilter === filter.toLowerCase()
                      ? 'bg-yellow-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Trades Table */}
        <Card title="Closed Trades" icon={<FaClipboardList/>}>
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-gray-100 rounded animate-pulse"></div>
              ))}
            </div>
          ) : (
            <Table
              data={trades}
              columns={columns}
              emptyMessage="No trades found for the selected period"
            />
          )}
        </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TradeHistory;
