import React, { useState } from 'react';
import { Key, Search, AlertCircle, CheckCircle, Ban, RefreshCw } from 'lucide-react';
import type { APIKeyInfo } from '../../../types/admin';
import FollowrMarketPlaceStat from '../../../components/FollowrMarketPlaceStat';
import { Table } from '../../../components/Table';

const APIManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const apiKeys: APIKeyInfo[] = [
    {
      id: '1',
      userId: '1',
      userName: 'John Crypto',
      userType: 'master_trader',
      apiKey: 'ak_live_1234...abcd',
      permissions: ['SPOT_TRADE', 'READ_ACCOUNT'],
      status: 'active',
      lastUsed: '2024-01-21 15:30:00',
      createdAt: '2023-08-15',
      failedAuthAttempts: 0,
    },
    {
      id: '2',
      userId: '5',
      userName: 'Mike Johnson',
      userType: 'follower',
      apiKey: 'ak_live_5678...efgh',
      permissions: ['SPOT_TRADE', 'READ_ACCOUNT'],
      status: 'active',
      lastUsed: '2024-01-21 14:22:00',
      createdAt: '2023-09-10',
      failedAuthAttempts: 0,
    },
    {
      id: '3',
      userId: '12',
      userName: 'Tom Anderson',
      userType: 'follower',
      apiKey: 'ak_live_9012...ijkl',
      permissions: ['SPOT_TRADE'],
      status: 'invalid',
      lastUsed: '2024-01-18 09:15:00',
      createdAt: '2023-12-05',
      failedAuthAttempts: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">API Management</h1>
            <p className="text-gray-600 mt-1">Monitor all API connections and health status</p>
          </div>
          <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
            <RefreshCw className="w-5 h-5" />
            Revalidate All
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
                placeholder="Search by user name, email, or API key..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="all">All Users</option>
                <option value="master_trader">Master Traders</option>
                <option value="follower">Followers</option>
              </select>
              <select className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="expired">Expired</option>
                <option value="invalid">Invalid</option>
              </select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <FollowrMarketPlaceStat label='Total API Keys' value={"1,379"} color='blue' icon={<Key className="w-5 h-5 text-yellow-600" />}   />
          <FollowrMarketPlaceStat label='Active Keys' value={"1,298"} color='green' icon={<CheckCircle className="w-5 h-5 text-green-600" />}   />
          <FollowrMarketPlaceStat label='Issues Detected' value={"23"} color='red' icon={<AlertCircle className="w-5 h-5 text-red-600" />}   />
          <FollowrMarketPlaceStat label='Failed Auth' value={"58"} color='orange' icon={<Ban className="w-5 h-5 text-orange-600" />}   />
        </div>

        {/* API Keys Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <Table 
              columns={[
                {
                  key: 'user',
                  header: 'User',
                  className: 'px-6 py-4',
                  render: (item: APIKeyInfo) => (
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{item.userName}</span>
                      <span className="text-sm text-gray-500">ID: {item.userId}</span>
                    </div>
                  ),
                },
                {
                  key: 'type',
                  header: 'Type',
                  className: 'px-6 py-4',
                  render: (item: APIKeyInfo) => (
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        item.userType === 'master_trader'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {item.userType === 'master_trader' ? 'Master Trader' : 'Follower'}
                    </span>
                  ),
                },
                {
                  key: 'apiKey',
                  header: 'API Key',
                  className: 'px-6 py-4',
                  render: (item: APIKeyInfo) => (
                    <div className="flex items-center gap-2">
                      <Key className="w-4 h-4 text-gray-400" />
                      <code className="text-sm font-mono text-gray-900">{item.apiKey}</code>
                    </div>
                  ),
                },
                {
                  key: 'permissions',
                  header: 'Permissions',
                  className: 'px-6 py-4',
                  render: (item: APIKeyInfo) => (
                    <div className="flex flex-wrap gap-1">
                      {item.permissions.map((perm, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {perm}
                        </span>
                      ))}
                    </div>
                  ),
                },
                {
                  key: 'status',
                  header: 'Status',
                  className: 'px-6 py-4',
                  render: (item: APIKeyInfo) => (
                    <div className="flex flex-col gap-1">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium w-fit ${
                          item.status === 'active'
                            ? 'bg-green-100 text-green-700'
                            : item.status === 'expired'
                            ? 'bg-yellow-100 text-yellow-700'
                            : item.status === 'invalid'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {item.status === 'active' && <CheckCircle className="w-3 h-3" />}
                        {item.status === 'invalid' && <AlertCircle className="w-3 h-3" />}
                        {item.status}
                      </span>
                      {item.failedAuthAttempts > 0 && (
                        <span className="text-xs text-red-600">
                          {item.failedAuthAttempts} failed attempts
                        </span>
                      )}
                    </div>
                  ),
                },
                {
                  key: 'lastUsed',
                  header: 'Last Used',
                  className: 'px-6 py-4 text-sm text-gray-600',
                  render: (item: APIKeyInfo) => item.lastUsed,
                },
                {
                  key: 'actions',
                  header: 'Actions',
                  className: 'px-6 py-4',
                  render: (item: APIKeyInfo) => (
                    <div className="flex items-center gap-2">
                      <button
                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Revalidate"
                        onClick={()=> {
                          alert(`Refreshed:,${item}`)
                        }}
                      >   
                        <RefreshCw className="w-4 h-4 text-blue-600" />
                      </button>
                      <button
                        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                        title="Disable"
                        onClick={()=> {
                          alert(`Disabled:,${item}`)
                        }}  
                      >
                        <Ban className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  ),
                },
              ]}
              data={apiKeys}
            />
          </div>          
        </div>
      </div>
    </div>
  );
};

export default APIManagement;
