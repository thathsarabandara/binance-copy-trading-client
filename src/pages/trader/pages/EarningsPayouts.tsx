import React, { useState, useEffect } from 'react';
import { Card, StatCard } from '../../../components/Card';
import { Table } from '../../../components/Table';
import { Badge } from '../../../components/Badge';
import DashboardLayout from '../../../components/DashboardLayout';
import type { Earning, Payout, EarningsStats } from '../../../types';
import { FaDollarSign, FaMoneyBill, FaMoneyBillWave } from 'react-icons/fa';
import { GiAchievement, GiSandsOfTime } from 'react-icons/gi';
import { MdOutlinePayment } from 'react-icons/md';
import { IoIosWarning } from 'react-icons/io';

const EarningsPayouts: React.FC = () => {
  const [stats, setStats] = useState<EarningsStats | null>(null);
  const [earnings, setEarnings] = useState<Earning[]>([]);
  const [payouts, setPayouts] = useState<Payout[]>([]);
  const [loading, setLoading] = useState(true);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      setStats({
        totalEarnings: 45250.75,
        pendingWithdrawals: 5000,
        completedPayouts: 35000,
        availableBalance: 5250.75,
      });
      setEarnings([
        {
          id: '1',
          masterId: 'master1',
          followerId: 'follower1',
          amount: 125.50,
          type: 'SUBSCRIPTION_FEE',
          status: 'PAID',
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          paidAt: new Date().toISOString(),
        },
        {
          id: '2',
          masterId: 'master1',
          followerId: 'follower2',
          amount: 450.25,
          type: 'PERFORMANCE_FEE',
          status: 'PAID',
          createdAt: new Date(Date.now() - 172800000).toISOString(),
          paidAt: new Date().toISOString(),
        },
      ]);
      setPayouts([
        {
          id: '1',
          masterId: 'master1',
          amount: 10000,
          status: 'COMPLETED',
          requestedAt: new Date(Date.now() - 604800000).toISOString(),
          completedAt: new Date(Date.now() - 518400000).toISOString(),
          method: 'Bank Transfer',
        },
        {
          id: '2',
          masterId: 'master1',
          amount: 5000,
          status: 'PENDING',
          requestedAt: new Date(Date.now() - 86400000).toISOString(),
          method: 'Crypto Wallet',
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const handleRequestWithdrawal = () => {
    if (!withdrawAmount || parseFloat(withdrawAmount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    // Implement withdrawal request
    alert(`Withdrawal request for $${withdrawAmount} submitted!`);
    setShowWithdrawModal(false);
    setWithdrawAmount('');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'COMPLETED':
      case 'PAID':
        return <Badge variant="success">{status}</Badge>;
      case 'PENDING':
      case 'APPROVED':
        return <Badge variant="warning">{status}</Badge>;
      case 'REJECTED':
        return <Badge variant="error">{status}</Badge>;
      default:
        return <Badge variant="default">{status}</Badge>;
    }
  };

  const earningsColumns = [
    {
      key: 'type',
      header: 'Type',
      render: (item: Earning) => (
        <Badge variant={item.type === 'SUBSCRIPTION_FEE' ? 'info' : 'success'}>
          {item.type.replace('_', ' ')}
        </Badge>
      ),
    },
    {
      key: 'amount',
      header: 'Amount',
      render: (item: Earning) => (
        <span className="font-semibold text-gray-900">${item.amount.toFixed(2)}</span>
      ),
    },
    {
      key: 'createdAt',
      header: 'Date',
      render: (item: Earning) => (
        <span className="text-gray-600">{new Date(item.createdAt).toLocaleDateString()}</span>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (item: Earning) => getStatusBadge(item.status),
    },
  ];

  const payoutsColumns = [
    {
      key: 'amount',
      header: 'Amount',
      render: (item: Payout) => (
        <span className="font-semibold text-gray-900">${item.amount.toLocaleString()}</span>
      ),
    },
    {
      key: 'method',
      header: 'Method',
      render: (item: Payout) => (
        <span className="text-gray-700">{item.method}</span>
      ),
    },
    {
      key: 'requestedAt',
      header: 'Requested',
      render: (item: Payout) => (
        <span className="text-gray-600">{new Date(item.requestedAt).toLocaleDateString()}</span>
      ),
    },
    {
      key: 'completedAt',
      header: 'Completed',
      render: (item: Payout) => (
        <span className="text-gray-600">
          {item.completedAt ? new Date(item.completedAt).toLocaleDateString() : '-'}
        </span>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      render: (item: Payout) => getStatusBadge(item.status),
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Earnings & Payouts</h1>
            <p className="text-gray-600">Track your revenue from followers</p>
          </div>
          <button
            onClick={() => setShowWithdrawModal(true)}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors"
          >
            <FaMoneyBillWave className="inline mr-2" /> Request Withdrawal
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Earnings"
            value={`$${stats?.totalEarnings.toLocaleString()}`}
            icon={<FaDollarSign />}
            trend="up"
            trendValue="+12.5%"
          />
          <StatCard
            title="Available Balance"
            value={`$${stats?.availableBalance.toLocaleString()}`}
            subtitle="Ready to withdraw"
            icon={<FaMoneyBill />}
          />
          <StatCard
            title="Pending Withdrawals"
            value={`$${stats?.pendingWithdrawals.toLocaleString()}`}
            icon={<GiSandsOfTime />}
            trend="neutral"
          />
          <StatCard
            title="Completed Payouts"
            value={`$${stats?.completedPayouts.toLocaleString()}`}
            icon={<GiAchievement />}
            trend="up"
          />
        </div>

        {/* Recent Earnings */}
        <Card title="Recent Earnings" icon={<MdOutlinePayment />} className="mb-6">
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-gray-100 rounded animate-pulse"></div>
              ))}
            </div>
          ) : (
            <Table
              data={earnings}
              columns={earningsColumns}
              emptyMessage="No earnings yet"
            />
          )}
        </Card>

        {/* Payout History */}
        <Card title="Payout History" icon={<MdOutlinePayment />} className="mb-6">
          {loading ? (
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div key={i} className="h-16 bg-gray-100 rounded animate-pulse"></div>
              ))}
            </div>
          ) : (
            <Table
              data={payouts}
              columns={payoutsColumns}
              emptyMessage="No payout history"
            />
          )}
        </Card>

        {/* Info */}
        <Card className="bg-blue-50 border-blue-200">
          <div className="flex items-start gap-3">
            <span className="text-2xl"><IoIosWarning /></span>
            <div>
              <p className="font-semibold text-blue-900 mb-2">Payout Information</p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Withdrawal requests are processed within 2-5 business days</li>
                <li>• Minimum withdrawal amount is $100</li>
                <li>• Admin approval required for all withdrawals</li>
                <li>• Supported methods: Bank Transfer, PayPal, Crypto Wallet</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Withdrawal Modal */}
        {showWithdrawModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Request Withdrawal</h3>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Amount (USDT)
                </label>
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  min={100}
                  max={stats?.availableBalance}
                />
                <p className="text-xs text-gray-500 mt-2">
                  Available: ${stats?.availableBalance.toLocaleString()}
                </p>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Payment Method
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                  <option>Bank Transfer</option>
                  <option>PayPal</option>
                  <option>Crypto Wallet</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowWithdrawModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRequestWithdrawal}
                  className="flex-1 px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EarningsPayouts;
