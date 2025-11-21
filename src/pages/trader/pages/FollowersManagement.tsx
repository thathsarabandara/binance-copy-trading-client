import React, { useState, useEffect } from 'react';
import { Card } from '../../../components/Card';
import { Table } from '../../../components/Table';
import { Badge } from '../../../components/Badge';
import DashboardLayout from '../../../components/DashboardLayout';
import type { Follower, FollowerStats } from '../../../types';
import { RiUserFollowFill } from 'react-icons/ri';
import { FaCircle, FaDollarSign } from 'react-icons/fa';
import { GiSandsOfTime } from 'react-icons/gi';
import { IoMdSettings } from 'react-icons/io';

const FollowersManagement: React.FC = () => {
  const [followers, setFollowers] = useState<Follower[]>([]);
  const [stats, setStats] = useState<FollowerStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [autoAccept, setAutoAccept] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStats({
        totalFollowers: 247,
        activeFollowers: 235,
        totalCapitalCopying: 3250000,
        pendingApprovals: 5,
      });
      setFollowers([
        {
          id: '1',
          userId: 'user1',
          userName: 'John Trader',
          userEmail: 'john@example.com',
          copyCapital: 50000,
          profit: 2450.50,
          profitPercent: 4.9,
          joinDate: new Date(Date.now() - 30 * 86400000).toISOString(),
          status: 'ACTIVE',
          lastActivityAt: new Date().toISOString(),
        },
        {
          id: '2',
          userId: 'user2',
          userName: 'Sarah Investment',
          userEmail: 'sarah@example.com',
          copyCapital: 25000,
          profit: -580.25,
          profitPercent: -2.32,
          joinDate: new Date(Date.now() - 15 * 86400000).toISOString(),
          status: 'ACTIVE',
          lastActivityAt: new Date(Date.now() - 3600000).toISOString(),
        },
        {
          id: '3',
          userId: 'user3',
          userName: 'Mike Capital',
          userEmail: 'mike@example.com',
          copyCapital: 100000,
          profit: 8750.00,
          profitPercent: 8.75,
          joinDate: new Date(Date.now() - 60 * 86400000).toISOString(),
          status: 'ACTIVE',
          lastActivityAt: new Date().toISOString(),
        },
        {
          id: '4',
          userId: 'user4',
          userName: 'Emma Trading',
          userEmail: 'emma@example.com',
          copyCapital: 15000,
          profit: 345.75,
          profitPercent: 2.30,
          joinDate: new Date(Date.now() - 7 * 86400000).toISOString(),
          status: 'PAUSED',
          lastActivityAt: new Date(Date.now() - 86400000).toISOString(),
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const handleRemoveFollower = (followerId: string) => {
    if (confirm('Are you sure you want to remove this follower?')) {
      setFollowers(followers.filter((f) => f.id !== followerId));
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return <Badge variant="success">Active</Badge>;
      case 'PAUSED':
        return <Badge variant="warning">Paused</Badge>;
      case 'CANCELLED':
        return <Badge variant="error">Cancelled</Badge>;
      default:
        return <Badge variant="default">{status}</Badge>;
    }
  };

  const formatPnL = (profit: number, profitPercent: number) => {
    const isPositive = profit >= 0;
    return (
      <div className={`font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? '+' : ''}${profit.toFixed(2)}
        <span className="text-xs ml-1">
          ({isPositive ? '+' : ''}{profitPercent.toFixed(2)}%)
        </span>
      </div>
    );
  };

  const columns = [
    {
      key: 'userName',
      header: 'Follower',
      render: (item: Follower) => (
        <div>
          <div className="font-semibold text-gray-900">{item.userName}</div>
          <div className="text-sm text-gray-500">{item.userEmail}</div>
        </div>
      ),
    },
    {
      key: 'copyCapital',
      header: 'Copy Capital',
      render: (item: Follower) => (
        <span className="font-semibold text-gray-900">${item.copyCapital.toLocaleString()}</span>
      ),
    },
    {
      key: 'profit',
      header: 'Profit',
      render: (item: Follower) => formatPnL(item.profit, item.profitPercent),
    },
    {
      key: 'joinDate',
      header: 'Join Date',
      render: (item: Follower) => (
        <span className="text-gray-600">{new Date(item.joinDate).toLocaleDateString()}</span>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (item: Follower) => getStatusBadge(item.status),
    },
    {
      key: 'actions',
      header: 'Actions',
      render: (item: Follower) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleRemoveFollower(item.id)}
            className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
          >
            Remove
          </button>
          <button
            className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
          >
            View Details
          </button>
        </div>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Followers Management</h1>
          <p className="text-gray-600">Monitor and manage who is copying your trades</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Total Followers</p>
                <p className="text-2xl font-bold">{stats?.totalFollowers}</p>
              </div>
              <div className="text-3xl opacity-50"><RiUserFollowFill /></div>
            </div>
          </Card>
          <Card className="bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Active</p>
                <p className="text-2xl font-bold text-green-600">{stats?.activeFollowers}</p>
              </div>
              <div className="text-3xl text-green-600"><FaCircle /></div>
            </div>
          </Card>
          <Card className="bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Total Capital</p>
                <p className="text-3xl font-bold text-gray-900">
                  ${(stats?.totalCapitalCopying || 0).toLocaleString()}
                </p>
              </div>
              <div className="text-3xl text-gray-900"><FaDollarSign /></div>
            </div>
          </Card>
          <Card className="bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{stats?.pendingApprovals}</p>
              </div>
              <div className="text-3xl text-yellow-600"><GiSandsOfTime /></div>
            </div>
          </Card>
        </div>

        {/* Settings */}
        <Card title="Copy Settings" icon={<IoMdSettings />} className="mb-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">Auto-Accept Followers</p>
                <p className="text-sm text-gray-600">
                  Automatically approve new followers without manual review
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoAccept}
                  onChange={(e) => setAutoAccept(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">Minimum Balance Requirement</p>
                <p className="text-sm text-gray-600">
                  Set minimum balance followers must have to copy your trades
                </p>
              </div>
              <input
                type="number"
                defaultValue={1000}
                className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>
        </Card>

        {/* Followers Table */}
        <Card title="Active Followers" icon={<RiUserFollowFill />}>
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-16 bg-gray-100 rounded animate-pulse"></div>
              ))}
            </div>
          ) : (
            <Table
              data={followers}
              columns={columns}
              emptyMessage="No followers yet"
            />
          )}
        </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FollowersManagement;
