import React, { useState } from 'react';
import { DollarSign, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import type { WithdrawalRequest, PlatformRevenue } from '../../../types/admin';
import AdminTradeStatCard from '../../../components/AdminTradeCard';
import { Table } from '../../../components/Table';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Payouts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'withdrawals' | 'revenue'>('withdrawals');
  const withdrawalRequests: WithdrawalRequest[] = [
    {
      id: '1',
      masterTraderId: '1',
      masterTraderName: 'John Crypto',
      amount: 5600,
      requestDate: '2024-01-20 10:30:00',
      status: 'pending',
      paymentMethod: 'Bank Transfer',
      accountDetails: '****1234',
    },
    {
      id: '2',
      masterTraderId: '2',
      masterTraderName: 'Sarah Trader',
      amount: 3200,
      requestDate: '2024-01-19 14:15:00',
      status: 'approved',
      paymentMethod: 'PayPal',
      accountDetails: 'sarah@example.com',
    },
  ];

  const platformRevenue: PlatformRevenue = {
    subscriptionIncome: 45000,
    performanceFeeIncome: 80000,
    totalRevenue: 125000,
    monthlyBreakdown: [
      { month: 'Jan', subscription: 45000, performanceFee: 80000 },
      { month: 'Dec', subscription: 42000, performanceFee: 75000 },
      { month: 'Nov', subscription: 38000, performanceFee: 68000 },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payout & Earnings Management</h1>
          <p className="text-gray-600 mt-1">Manage withdrawals and track platform revenue</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('withdrawals')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'withdrawals'
                  ? 'text-yellow-600 border-b-2 border-yellow-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Withdrawal Requests
            </button>
            <button
              onClick={() => setActiveTab('revenue')}
              className={`flex-1 px-6 py-4 font-medium transition-colors ${
                activeTab === 'revenue'
                  ? 'text-yellow-600 border-b-2 border-yellow-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Platform Revenue
            </button>
          </div>

          {/* Withdrawals Tab */}
          {activeTab === 'withdrawals' && (
            <div className="p-6">
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <AdminTradeStatCard title="Total Withdrawals" value={"248,600"} icon={<DollarSign className="w-6 h-6 text-yellow-600" />} subtext='$24,500 total'/>
                <AdminTradeStatCard title="Pending Requests" value={"8"} icon={<Clock className="w-6 h-6 text-yellow-600" />} subtext='$24,500 total'/>
                <AdminTradeStatCard title="Approved Today" value={"5"} icon={<CheckCircle className="w-6 h-6 text-green-600" />} subtext='$18,200 paid'/>
                <AdminTradeStatCard title="Total This Month" value={"$156K"} icon={<DollarSign className="w-6 h-6 text-blue-600" />} subtext='42 withdrawals'/>
              </div>

              {/* Requests Table */}
              <div className="overflow-x-auto">
                <Table 
                  columns={[
                    { 
                      key: 'masterTraderName', 
                      header: 'Trader', 
                      render: (request: WithdrawalRequest) => (
                        <span className="font-medium text-gray-900">
                          {request.masterTraderName}
                        </span>
                      ),
                    },
                    { 
                      key: 'amount', 
                      header: 'Amount', 
                      render: (request: WithdrawalRequest) => (
                        <span className="font-bold text-gray-900">
                          ${request.amount.toLocaleString()}
                        </span>
                      ),
                    },
                    { 
                      key: 'requestDate', 
                      header: 'Request Date', 
                      render: (request: WithdrawalRequest) => (
                        <span className="text-sm text-gray-600">
                          {request.requestDate}
                        </span>
                      ),
                    },
                    { 
                      key: 'paymentMethod', 
                      header: 'Payment Method', 
                      render: (request: WithdrawalRequest) => (
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-900">
                            {request.paymentMethod}
                          </span>
                          <span className="text-xs text-gray-500">
                            {request.accountDetails}
                          </span>
                        </div>
                      ),
                    },
                    { 
                      key: 'status', 
                      header: 'Status', 
                      render: (request: WithdrawalRequest) => (
                        <span
                            className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                              request.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-700'
                                : request.status === 'approved'
                                ? 'bg-green-100 text-green-700'
                                : request.status === 'rejected'
                                ? 'bg-red-100 text-red-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}
                          >
                            {request.status}
                          </span>
                      ),
                    },
                    { 
                      key: 'actions', 
                      header: 'Actions', 
                      render: () => (
                        <div>
                          <button className="text-green-600 hover:text-green-900 mr-2 bg-green-100 px-2 py-1 rounded"
                            onClick={() =>{
                              alert('Approve clicked');
                            }}
                          >
                            <FaCheck className="inline mr-1" /> Approve</button>
                          <button className="text-red-600 hover:text-red-900 bg-red-100 px-2 py-1 rounded"
                            onClick={() =>{
                              alert('Reject clicked');
                            }}
                          >
                            <FaTimes className="inline mr-1" /> Reject</button>
                        </div>
                      ),
                    },
                  ]}
                  data={withdrawalRequests}
                />
              </div>
            </div>
          )}

          {/* Revenue Tab */}
          {activeTab === 'revenue' && (
            <div className="p-6">
              {/* Revenue Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">Total Revenue</span>
                    <DollarSign className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    ${platformRevenue.totalRevenue.toLocaleString()}
                  </h3>
                  <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    +22.4% from last month
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">Subscription Income</span>
                    <span className="text-2xl">💳</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    ${platformRevenue.subscriptionIncome.toLocaleString()}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {((platformRevenue.subscriptionIncome / platformRevenue.totalRevenue) * 100).toFixed(1)}% of total
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">Performance Fees</span>
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    ${platformRevenue.performanceFeeIncome.toLocaleString()}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {((platformRevenue.performanceFeeIncome / platformRevenue.totalRevenue) * 100).toFixed(1)}% of total
                  </p>
                </div>
              </div>

              {/* Monthly Breakdown */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Monthly Breakdown</h3>
                <div className="space-y-4">
                  {platformRevenue.monthlyBreakdown.map((month, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-gray-900">{month.month} 2024</span>
                        <span className="text-lg font-bold text-gray-900">
                          ${(month.subscription + month.performanceFee).toLocaleString()}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-3">
                          <span className="text-xs text-gray-600">Subscriptions</span>
                          <p className="text-lg font-bold text-blue-600">
                            ${month.subscription.toLocaleString()}
                          </p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <span className="text-xs text-gray-600">Performance Fees</span>
                          <p className="text-lg font-bold text-green-600">
                            ${month.performanceFee.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payouts;
