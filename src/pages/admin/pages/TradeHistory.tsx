import React, { useState } from 'react';
import { Search, Download, Calendar, Users } from 'lucide-react';
import type { GlobalTrade } from '../../../types/admin';
import FollowrMarketPlaceStat from '../../../components/FollowrMarketPlaceStat';
import { Table } from '../../../components/Table';

const TradeHistory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSymbol, setFilterSymbol] = useState('all');
  const [dateRange, setDateRange] = useState('today');
  const trades: GlobalTrade[] = [
    {
      id: '1',
      timestamp: '2024-01-21 15:30:45',
      masterTrader: { id: '1', name: 'John Crypto' },
      follower: { id: '5', name: 'Mike Johnson' },
      symbol: 'BTCUSDT',
      side: 'BUY',
      entryPrice: 42500,
      exitPrice: 43200,
      quantity: 0.5,
      pnl: 350,
      fees: 42.5,
      copyDelay: 180,
      status: 'closed',
    },
    {
      id: '2',
      timestamp: '2024-01-21 14:22:10',
      masterTrader: { id: '2', name: 'Sarah Trader' },
      follower: { id: '8', name: 'Emma Wilson' },
      symbol: 'ETHUSDT',
      side: 'SELL',
      entryPrice: 2450,
      quantity: 2.5,
      pnl: 0,
      fees: 15.3,
      copyDelay: 245,
      status: 'open',
    },
  ];

  const exportToCSV = () => {
    console.log('Exporting to CSV...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Global Trade History</h1>
            <p className="text-gray-600 mt-1">Complete trading activity across all users</p>
          </div>
          <button
            onClick={exportToCSV}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search trades..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <select
              value={filterSymbol}
              onChange={(e) => setFilterSymbol(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="all">All Symbols</option>
              <option value="BTCUSDT">BTCUSDT</option>
              <option value="ETHUSDT">ETHUSDT</option>
              <option value="BNBUSDT">BNBUSDT</option>
            </select>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="all">All Time</option>
            </select>
            <button className="px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5 text-gray-600" />
              Custom Range
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <FollowrMarketPlaceStat label='Total Trades' value={"3,456"} color='blue' icon={<Users className="w-5 h-5 text-yellow-600" />}   />
          <FollowrMarketPlaceStat label='Total Volume' value={"$2.8M"} color='green' icon={<Download />}   />
          <FollowrMarketPlaceStat label='Total PnL' value={"+$125K"} color='green' icon={<Calendar />}   />
          <FollowrMarketPlaceStat label='Total Fees' value={"$8,450"} color='red' icon={<Search />}   />
        </div>

        {/* Trades Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <Table
              columns={[
                { 
                  key: 'timestamp',
                  header: 'Time',
                  render: (row: any) => row.timestamp, 
               },
                { 
                  key: 'masterTrader',
                  header: 'Master Trader',
                  render: (row: any) => row.masterTrader.name,
                },
                { 
                  key: 'follower',
                  header: 'Follower',
                  render: (row: any) => row.follower.name,
                },
                { 
                  key: 'tradeDetails',
                  header: 'Trade Details',
                  render: (row: any) => (
                    <div className="flex flex-col">
                      <span
                        className={`text-sm font-medium ${
                          row.side === 'BUY' ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {row.side} {row.symbol}
                      </span>
                      <span className="text-xs text-gray-500">Qty: {row.quantity}</span>
                    </div>
                  ),
                },
                { 
                  key: 'entryExit',
                  header: 'Entry / Exit',
                  render: (row: any) => (
                    <div className="flex flex-col text-sm">
                      <span className="text-gray-900">
                        Entry: ${row.entryPrice.toLocaleString()}
                      </span>
                      {row.exitPrice && (
                        <span className="text-gray-600">
                          Exit: ${row.exitPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  ),
                },
                { 
                  key: 'pnl',
                  header: 'PnL',
                  render: (row: any) => (
                    <div className="flex flex-col">
                      <span
                        className={`font-medium ${
                          row.pnl >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {row.pnl >= 0 ? '+' : ''}${row.pnl.toLocaleString()}
                      </span>
                      <span className="text-xs text-gray-500">Fee: ${row.fees}</span>
                    </div>
                  ),
                },
                { 
                  key: 'latency',
                  header: 'Latency',
                  render: (row: any) => (
                    <span
                      className={`text-sm font-medium ${
                        row.copyDelay < 300 ? 'text-green-600' : 'text-yellow-600'
                      }`}
                    >
                      {row.copyDelay}ms
                    </span>
                  ),
                },
                { 
                  key: 'status',
                  header: 'Status',
                  render: (row: any) => (
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        row.status === 'closed'
                          ? 'bg-gray-100 text-gray-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {row.status}
                    </span>
                  ),
                },
              ]}
              data={trades}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeHistory;
