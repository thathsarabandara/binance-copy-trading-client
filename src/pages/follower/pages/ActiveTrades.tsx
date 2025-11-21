import React, { useState, useEffect } from 'react';
import FollowerLayout from '../../../layouts/FollowerLayout';
import { Activity, RefreshCw, TrendingUp, TrendingDown, Clock } from 'lucide-react';
import MyTradeStatCard from '../../../components/MyTradeStatCard';
import { Table } from '../../../components/Table';

const ActiveTrades: React.FC = () => {
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => {
        setLastUpdate(new Date());
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const openTrades = [
    {
      id: '1',
      symbol: 'BTCUSDT',
      masterTrader: 'CryptoKing',
      side: 'LONG',
      entryPrice: 43250,
      currentPrice: 44100,
      quantity: 0.5,
      leverage: 10,
      pnl: 425,
      pnlPercentage: 1.96,
      openTime: '2024-01-15 10:30:00',
      marginUsed: 2162.5,
    },
    {
      id: '2',
      symbol: 'ETHUSDT',
      masterTrader: 'BinanceWhale',
      side: 'LONG',
      entryPrice: 2280,
      currentPrice: 2315,
      quantity: 5,
      leverage: 5,
      pnl: 175,
      pnlPercentage: 1.53,
      openTime: '2024-01-15 14:20:00',
      marginUsed: 2280,
    },
    {
      id: '3',
      symbol: 'BNBUSDT',
      masterTrader: 'TraderPro',
      side: 'SHORT',
      entryPrice: 310,
      currentPrice: 305,
      quantity: 10,
      leverage: 3,
      pnl: 50,
      pnlPercentage: 1.61,
      openTime: '2024-01-15 16:45:00',
      marginUsed: 1033.33,
    },
    {
      id: '4',
      symbol: 'ADAUSDT',
      masterTrader: 'CryptoKing',
      side: 'LONG',
      entryPrice: 0.52,
      currentPrice: 0.51,
      quantity: 2000,
      leverage: 5,
      pnl: -20,
      pnlPercentage: -1.92,
      openTime: '2024-01-15 18:00:00',
      marginUsed: 208,
    },
  ];

  const totalPnL = openTrades.reduce((acc, trade) => acc + trade.pnl, 0);
  const totalMarginUsed = openTrades.reduce((acc, trade) => acc + trade.marginUsed, 0);

  return (
    <FollowerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Active Trades</h1>
            <p className="text-gray-600 mt-1">Real-time monitoring of your copied trades</p>
          </div>
          
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={autoRefresh}
                onChange={(e) => setAutoRefresh(e.target.checked)}
                className="rounded text-yellow-500 focus:ring-yellow-500"
              />
              <span className="text-gray-700">Auto-refresh</span>
            </label>
            <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MyTradeStatCard lablel="Open Trades" icon={<Activity/>} color='blue' value={openTrades.length} />
          <MyTradeStatCard lablel="Total Unrealized PnL" icon={totalPnL >= 0 ? <TrendingUp/> : <TrendingDown/>} color={totalPnL >= 0 ? 'green' : 'red'} value={`${totalPnL >= 0 ? '+' : ''}$${totalPnL.toFixed(2)}`} />
          <MyTradeStatCard lablel="Margin Used" icon={<Activity/>} color='purple' value={`$${totalMarginUsed.toFixed(2)}`} />
        </div>

        {/* Last Update */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>Last updated: {lastUpdate.toLocaleTimeString()}</span>
          {autoRefresh && <span className="text-green-600 font-medium">(Auto-refreshing every 5s)</span>}
        </div>

        {/* Trades Table */}
        <Table data={openTrades} columns={[
          {
            key: 'symbol',
            header: 'Symbol',
            render: (trade) => <span className="font-bold text-gray-900">{trade.symbol}</span>,
          },
          {
            key: 'masterTrader',
            header: 'Master Trader',
            render: (trade) => <span className="text-sm text-gray-700">{trade.masterTrader}</span>,
          },
          {
            key: 'side',
            header: 'Side',
            render: (trade) => (
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  trade.side === 'LONG'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {trade.side}
              </span>
            ),
          },
          {
            key: 'entryPrice',
            header: 'Entry Price',
            className: 'text-right',  
            render: (trade) => <span className="text-sm text-gray-900">${trade.entryPrice.toLocaleString()}</span>,
          },
          {
            key: 'currentPrice',
            header: 'Current Price',
            className: 'text-right',
            render: (trade) => <span className="font-semibold text-gray-900">${trade.currentPrice.toLocaleString()}</span>,
          },
          {
            key: 'quantity',
            header: 'Quantity',
            className: 'text-right',
            render: (trade) => <span className="text-sm text-gray-900">{trade.quantity}</span>,
          },
          {
            key: 'leverage',
            header: 'Leverage',
            className: 'text-center',
            render: (trade) => (
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">
                {trade.leverage}x
              </span>
            ),
          },
          {
            key: 'pnl',
            header: 'PnL',
            className: 'text-right',
            render: (trade) => (
              <div className="flex flex-col items-end">
                <span className={`font-bold text-base ${
                  trade.pnl >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {trade.pnl >= 0 ? '+' : ''}${trade.pnl.toFixed(2)}
                </span>
                <span className={`text-xs ${
                  trade.pnlPercentage >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  ({trade.pnlPercentage >= 0 ? '+' : ''}{trade.pnlPercentage.toFixed(2)}%)
                </span>
              </div>
            ),
          },
          {
            key: 'openTime',
            header: 'Open Time',
            render: (trade) => <span className="text-sm text-gray-600">{trade.openTime}</span>,
          },
        ]} emptyMessage="No active trades available." />

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-900">
            <strong>Note:</strong> These trades are copied automatically from your master traders. You cannot manually
            close or modify them. Trades will close automatically when the master trader closes their position.
          </p>
        </div>
      </div>
    </FollowerLayout>
  );
};

export default ActiveTrades;
