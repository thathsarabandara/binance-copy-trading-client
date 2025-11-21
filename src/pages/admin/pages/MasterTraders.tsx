import React, { useState } from 'react';
import {
  TrendingUp,
  Search,
  Filter,
  CheckCircle,
  XCircle,
  Ban,
  Eye,
  Link as LinkIcon,
  Users as UsersIcon,
} from 'lucide-react';
import type { AdminMasterTrader } from '../../../types/admin';
import AdminStatCard from '../../../components/AdminStatCard';
import { Table } from '../../../components/Table';

const MasterTraders: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedTrader, setSelectedTrader] = useState<AdminMasterTrader | null>(null);
  const [showModal, setShowModal] = useState(false);

  const traders: AdminMasterTrader[] = [
    {
      id: '1',
      name: 'John Crypto',
      email: 'john@example.com',
      profileImage: '',
      apiStatus: 'connected',
      verificationStatus: 'verified',
      followersCount: 156,
      totalCapitalCopying: 450000,
      performanceStats: {
        totalPnL: 125000,
        winRate: 78.5,
        totalTrades: 342,
        roi: 42.3,
      },
      earnings: 15600,
      accountStatus: 'active',
      joinedDate: '2023-08-15',
      tradingLimits: {
        maxFollowers: 200,
        maxCapitalPerFollower: 50000,
      },
    },
    {
      id: '2',
      name: 'Sarah Trader',
      email: 'sarah@example.com',
      profileImage: '',
      apiStatus: 'connected',
      verificationStatus: 'pending',
      followersCount: 89,
      totalCapitalCopying: 220000,
      performanceStats: {
        totalPnL: 65000,
        winRate: 72.4,
        totalTrades: 198,
        roi: 38.7,
      },
      earnings: 8900,
      accountStatus: 'active',
      joinedDate: '2023-11-20',
      tradingLimits: {
        maxFollowers: 150,
        maxCapitalPerFollower: 30000,
      },
    },
  ];

  const handleApprove = (traderId: string) => {
    console.log('Approve trader:', traderId);
  };

  const handleReject = (traderId: string) => {
    console.log('Reject trader:', traderId);
  };

  const handleViewDetails = (trader: AdminMasterTrader) => {
    setSelectedTrader(trader);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Master Traders Management</h1>
            <p className="text-gray-600 mt-1">Manage all registered master traders</p>
          </div>
          <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Add Trader
          </button>
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
                placeholder="Search by name, email, or ID..."
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
                <option value="pending">Pending</option>
                <option value="blocked">Blocked</option>
              </select>
              <button className="px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-700">More Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <AdminStatCard title='Total Traders' value={145} change={12} icon={<TrendingUp className="w-6 h-6 text-yellow-600" />} trend='up' format='number' />
          <AdminStatCard title='Pending Verification' value={8} change={0} icon={<CheckCircle className="w-6 h-6 text-yellow-600" />} trend='down' format='number' />
          <AdminStatCard title='Blocked' value={3} change={0} icon={<Ban className="w-6 h-6 text-yellow-600" />} trend='down' format='number' />
          <AdminStatCard title='API Issues' value={5} change={0} icon={<LinkIcon className="w-6 h-6 text-yellow-600" />} trend='down' format='number' />
        </div>

        {/* Traders Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <Table columns={[
            { 
              key: 'name',
              header: 'Name', 
              render: (trader: AdminMasterTrader) => (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-medium">
                    {trader.name.charAt(0)}
                  </div>
                  <span className="font-medium text-gray-900">{trader.name}</span>
                </div>
              ),
            },
            { 
              key: 'email',
              header: 'Email', 
              render: (trader: AdminMasterTrader) => (
                <span className="text-gray-700">{trader.email}</span>
              ),
            },
            { 
              key: 'followersCount',
              header: 'Followers', 
              render: (trader: AdminMasterTrader) => (
                <div className="flex items-center gap-2">
                  <UsersIcon className="w-4 h-4 text-yellow-600" />
                  <span className="font-medium text-gray-900">{trader.followersCount}</span>
                </div>
              ),
            },
            { 
              key: 'totalCapitalCopying',
              header: 'Total Capital Copying', 
              render: (trader: AdminMasterTrader) => (
                <span className="text-gray-700">${trader.totalCapitalCopying.toLocaleString()}</span>
              ),
            },
            { 
              key: 'verificationStatus',
              header: 'Verification Status', 
              render: (trader: AdminMasterTrader) => (
                <span className="text-gray-700">{trader.verificationStatus}</span>
              ),
            },
            { 
              key: 'accountStatus',
              header: 'Account Status', 
              render: (trader: AdminMasterTrader) => (
                <span className="text-gray-700">{trader.accountStatus}</span>
              ),
            },
            { 
              key: 'actions',
              header: 'Actions', 
              render: (trader: AdminMasterTrader) => (
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleViewDetails(trader)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Eye className="w-5 h-5 text-gray-600" />
                  </button>
                  {trader.verificationStatus === 'pending' && (
                    <>
                      <button
                        onClick={() => handleApprove(trader.id)}
                        className="p-2 hover:bg-green-100 rounded-lg transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </button>
                      <button
                        onClick={() => handleReject(trader.id)}
                        className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                      >
                        <XCircle className="w-5 h-5 text-red-600" />
                      </button>
                    </>
                  )}
                </div>
              ),
            },
          ]} 
            data={traders} />
        </div>
      </div>
      {/* Details Modal */}
      {showModal && selectedTrader && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Trader Details</h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <XCircle className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Personal Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600">Name</label>
                    <p className="font-medium text-gray-900">{selectedTrader.name}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Email</label>
                    <p className="font-medium text-gray-900">{selectedTrader.email}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Joined Date</label>
                    <p className="font-medium text-gray-900">{selectedTrader.joinedDate}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Account Status</label>
                    <p className="font-medium text-gray-900 capitalize">
                      {selectedTrader.accountStatus}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Trading Limits</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600">Max Followers</label>
                    <p className="font-medium text-gray-900">
                      {selectedTrader.tradingLimits.maxFollowers}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Max Capital Per Follower</label>
                    <p className="font-medium text-gray-900">
                      ${selectedTrader.tradingLimits.maxCapitalPerFollower.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button className="flex-1 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors">
                  Edit Trader
                </button>
                <button className="flex-1 px-6 py-3 border border-red-500 text-red-600 hover:bg-red-50 font-medium rounded-lg transition-colors">
                  Block Trader
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasterTraders;
