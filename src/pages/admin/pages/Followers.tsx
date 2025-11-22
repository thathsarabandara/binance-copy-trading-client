import React, { useState } from 'react';
import { Search, Filter, Users, Ban, StopCircle, Eye, MoreVertical } from 'lucide-react';
import type { AdminFollower } from '../../../types/admin';
import FollowrMarketPlaceStat from '../../../components/FollowrMarketPlaceStat';
import { FaCircleDollarToSlot } from 'react-icons/fa6';
import { FaChartLine } from 'react-icons/fa';
import { Table } from '../../../components/Table';

const Followers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const followers: AdminFollower[] = [
    {
      id: '1',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      profileImage: '',
      balance: 25000,
      totalInvestedCapital: 15000,
      monthlyReturns: 12.5,
      riskScore: 6.5,
      masterTraders: [
        { id: '1', name: 'John Crypto', capitalAllocated: 10000 },
        { id: '2', name: 'Sarah Trader', capitalAllocated: 5000 },
      ],
      accountStatus: 'active',
      joinedDate: '2023-09-10',
    },
    {
      id: '2',
      name: 'Emma Wilson',
      email: 'emma@example.com',
      profileImage: '',
      balance: 50000,
      totalInvestedCapital: 30000,
      monthlyReturns: 18.3,
      riskScore: 7.8,
      masterTraders: [{ id: '1', name: 'John Crypto', capitalAllocated: 30000 }],
      accountStatus: 'active',
      joinedDate: '2023-07-22',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Followers Management</h1>
            <p className="text-gray-600 mt-1">View and manage all platform followers</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search followers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
                <option value="blocked">Blocked</option>
              </select>
              <button className="px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <FollowrMarketPlaceStat label='Total Followers' value={"1,234"} color='blue' icon={<Users className="w-5 h-5 text-yellow-600" />}   />
          <FollowrMarketPlaceStat label='Total Capital' value={"$2.5M"} color='green' icon={<FaCircleDollarToSlot />}   />
          <FollowrMarketPlaceStat label='Avg Returns' value={"+15.2%"} color='green' icon={<FaChartLine />}   />
          <FollowrMarketPlaceStat label='Suspended' value={"12"} color='red' icon={<Ban />}   />
        </div>

        {/* Followers Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <Table
              columns={[
                { 
                  key: 'follower',
                  header: 'Follower',
                  render: (row: any) => row.follower, 
               },
                { 
                  key: 'balance',
                  header: 'Balance', 
                  render: (row: any) => row.balance,
                },
                { 
                  key: 'invested',
                  header: 'Invested', 
                  render: (row: any) => row.invested,
                },
                { 
                  key: 'monthlyReturns',
                  header: 'Monthly Returns', 
                  render: (row: any) => row.monthlyReturns,
                },
                { 
                  key: 'riskScore',
                  header: 'Risk Score', 
                  render: (row: any) => row.riskScore,
                },
                { 
                  key: 'following',
                  header: 'Following', 
                  render: (row: any) => row.following,
                },
                { 
                  key: 'actions',
                  header: 'Actions', 
                  render: (row: any) => row.actions,
                },
              ]}
              data={followers.map((follower) => ({
                follower: (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {follower.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{follower.name}</p>
                      <p className="text-sm text-gray-500">{follower.email}</p>
                    </div>
                  </div>
                ),
                balance: (
                  <span className="font-medium text-gray-900">
                    ${follower.balance.toLocaleString()}
                  </span>
                ),
                invested: (
                  <span className="font-medium text-gray-900">
                    ${follower.totalInvestedCapital.toLocaleString()}
                  </span>
                ),
                monthlyReturns: (
                  <span
                    className={`font-medium ${
                      follower.monthlyReturns >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {follower.monthlyReturns >= 0 ? '+' : ''}
                    {follower.monthlyReturns}%
                  </span>
                ),
                riskScore: (
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[80px]">
                      <div
                        className={`h-2 rounded-full ${
                          follower.riskScore >= 7
                            ? 'bg-red-500'
                            : follower.riskScore >= 5
                            ? 'bg-yellow-500'
                            : 'bg-green-500'
                        }`}
                        style={{ width: `${(follower.riskScore / 10) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {follower.riskScore}
                    </span>
                  </div>
                ),
                following: (
                  <span className="text-sm text-gray-900">
                    {follower.masterTraders.length} Trader
                    {follower.masterTraders.length !== 1 ? 's' : ''}
                  </span>
                ),
                actions: (
                  <div className="flex items-center gap-2">
                    <button
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"          
                      title="View Details"
                    >
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                      title="Stop Copying"
                    >
                      <StopCircle className="w-4 h-4 text-red-600" />
                    </button>
                    <button
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      title="More Actions"
                    >
                      <MoreVertical className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                ),
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Followers;
