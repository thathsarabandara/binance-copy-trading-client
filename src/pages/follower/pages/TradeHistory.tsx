import React, { useState } from 'react';
import FollowerLayout from '../../../layouts/FollowerLayout';
import { Download, Filter } from 'lucide-react';
import MyTradeStatCard from '../../../components/MyTradeStatCard';
import { FiActivity } from 'react-icons/fi';
import { Table } from '../../../components/Table';

const TradeHistory: React.FC = () => {
  const [filterMasterTrader, setFilterMasterTrader] = useState('all');
  const [filterProfit, setFilterProfit] = useState('all');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const trades = [
    {
      id: '1',
      symbol: 'BTCUSDT',
      masterTrader: 'CryptoKing',
      side: 'LONG',
      entryPrice: 42500,
      exitPrice: 43800,
      quantity: 0.5,
      pnl: 650,
      pnlPercentage: 3.06,
      fees: 12.5,
      duration: '4h 32m',
      openTime: '2024-01-10 10:00:00',
      closeTime: '2024-01-10 14:32:00',
    },
    {
      id: '2',
      symbol: 'ETHUSDT',
      masterTrader: 'BinanceWhale',
      side: 'LONG',
      entryPrice: 2250,
      exitPrice: 2310,
      quantity: 5,
      pnl: 300,
      pnlPercentage: 2.67,
      fees: 8.5,
      duration: '6h 15m',
      openTime: '2024-01-09 08:00:00',
      closeTime: '2024-01-09 14:15:00',
    },
    {
      id: '3',
      symbol: 'BNBUSDT',
      masterTrader: 'TraderPro',
      side: 'SHORT',
      entryPrice: 315,
      exitPrice: 308,
      quantity: 10,
      pnl: 70,
      pnlPercentage: 2.22,
      fees: 5.5,
      duration: '2h 45m',
      openTime: '2024-01-08 16:00:00',
      closeTime: '2024-01-08 18:45:00',
    },
    {
      id: '4',
      symbol: 'BTCUSDT',
      masterTrader: 'CryptoKing',
      side: 'LONG',
      entryPrice: 41800,
      exitPrice: 40900,
      quantity: 0.3,
      pnl: -270,
      pnlPercentage: -2.15,
      fees: 10.2,
      duration: '8h 20m',
      openTime: '2024-01-07 10:00:00',
      closeTime: '2024-01-07 18:20:00',
    },
  ];

  const handleExport = () => {
    alert('Exporting trade history to CSV...');
  };

  const totalProfit = trades.reduce((acc, trade) => acc + trade.pnl, 0);
  const totalFees = trades.reduce((acc, trade) => acc + trade.fees, 0);
  const winningTrades = trades.filter((t) => t.pnl > 0).length;

  return (
    <FollowerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Trade History</h1>
            <p className="text-gray-600 mt-1">Complete history of all copied trades</p>
          </div>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <MyTradeStatCard lablel='Total Trades' icon={<FiActivity/>} color='blue' value={trades.length} />
          <MyTradeStatCard lablel='Net Profit' icon={<FiActivity/>} color='green' value={`$${totalProfit}`}  />
          <MyTradeStatCard lablel='Win Rate' icon={<FiActivity/>} color='yellow' value={`${((winningTrades / trades.length) * 100).toFixed(1)}%`} />
          <MyTradeStatCard lablel='Total Fees' icon={<FiActivity/>} color='gray' value={`$${totalFees} `}/>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-yellow-600" />
            <h2 className="text-lg font-bold text-gray-900">Filters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Master Trader</label>
              <select
                value={filterMasterTrader}
                onChange={(e) => setFilterMasterTrader(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">All Traders</option>
                <option value="CryptoKing">CryptoKing</option>
                <option value="BinanceWhale">BinanceWhale</option>
                <option value="TraderPro">TraderPro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Profit/Loss</label>
              <select
                value={filterProfit}
                onChange={(e) => setFilterProfit(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">All</option>
                <option value="profit">Profitable Only</option>
                <option value="loss">Loss Only</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date From</label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date To</label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
        </div>

        {/* Trades Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <Table 
              data={trades}
              columns={[
                { 
                  key: 'symbol',
                  header: 'Symbol',
                  render: (trade) => <span className="font-bold text-gray-900">{trade.symbol}</span>,
                  className: 'font-bold text-gray-900'
                },
                { key: 'masterTrader', 
                  header: 'Master Trader',
                  render: (trade) => <span className="text-sm text-gray-700">{trade.masterTrader}</span>,
                  className: 'text-sm text-gray-700'  
                },
                { 
                  key: 'side', 
                  header: 'Side',
                  render: (trade) => (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        trade.side === 'LONG' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {trade.side}
                    </span>
                  ),
                },
                { 
                  key: 'entryPrice', 
                  header: 'Entry',
                  render: (trade) => <span className="text-right text-sm text-gray-900">${trade.entryPrice.toLocaleString()}</span>,
                  className: 'text-right text-sm text-gray-900'
                },
                { 
                  key: 'exitPrice', 
                  header: 'Exit',
                  render: (trade) => <span className="text-right text-sm text-gray-900">${trade.exitPrice.toLocaleString()}</span>,
                  className: 'text-right text-sm text-gray-900'
                },
                { 
                  key: 'pnl', 
                  header: 'PnL',
                  render: (trade) => (
                    <div className="flex flex-col items-end">
                      <span className={`font-bold ${trade.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {trade.pnl >= 0 ? '+' : ''}${trade.pnl.toFixed(2)}
                      </span>
                      <span className={`text-xs ${trade.pnlPercentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ({trade.pnlPercentage >= 0 ? '+' : ''}{trade.pnlPercentage.toFixed(2)}%)
                      </span>
                    </div>
                  ),
                  className: 'text-right'
                },
                { 
                  key: 'fees', 
                  header: 'Fees',
                  render: (trade) => <span className="text-right text-sm text-gray-600">${trade.fees}</span>,
                  className: 'text-right text-sm text-gray-600'
                },
                { 
                  key: 'duration', 
                  header: 'Duration',
                  render: (trade) => <span className="text-sm text-gray-600">{trade.duration}</span>,
                  className: 'text-sm text-gray-600'
                },
                { 
                  key: 'closeTime', 
                  header: 'Close Time',
                  render: (trade) => <span className="text-sm text-gray-600">{trade.closeTime}</span>,
                  className: 'text-sm text-gray-600'
                },
              ]}
            />
          </div>
        </div>
      </div>
    </FollowerLayout>
  );
};

export default TradeHistory;
