import React, { useState } from 'react';
import { CreditCard, Edit, Plus, Users as UsersIcon, DollarSign } from 'lucide-react';
import type { SubscriptionPlan } from '../../../types/admin';

const Subscriptions: React.FC = () => {
  const [, setShowCreateModal] = useState(false);

  // Mock data
  const plans: SubscriptionPlan[] = [
    {
      id: '1',
      name: 'Free Plan',
      description: 'Basic features for beginners',
      price: 0,
      billingCycle: 'monthly',
      features: ['Follow up to 2 master traders', 'Basic analytics', 'Email support'],
      performanceFeePercentage: 0,
      maxFollowers: 2,
      maxMasterTraders: 0,
      freeTrialDays: 0,
      status: 'active',
      subscribersCount: 523,
    },
    {
      id: '2',
      name: 'Pro Plan',
      description: 'Advanced features for serious traders',
      price: 49,
      billingCycle: 'monthly',
      features: [
        'Follow up to 10 master traders',
        'Advanced analytics',
        'Priority support',
        'Custom risk management',
      ],
      performanceFeePercentage: 20,
      maxFollowers: 10,
      maxMasterTraders: 0,
      freeTrialDays: 14,
      status: 'active',
      subscribersCount: 342,
    },
    {
      id: '3',
      name: 'Master Trader',
      description: 'For professional traders who want followers',
      price: 99,
      billingCycle: 'monthly',
      features: [
        'Unlimited followers',
        'Detailed performance tracking',
        'Custom branding',
        '24/7 support',
      ],
      performanceFeePercentage: 30,
      maxFollowers: 999999,
      maxMasterTraders: 1,
      freeTrialDays: 7,
      status: 'active',
      subscribersCount: 145,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Subscription Management</h1>
            <p className="text-gray-600 mt-1">Control platform pricing and subscription features</p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create Plan
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Total Subscribers</span>
              <UsersIcon className="w-5 h-5 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">1,010</h3>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Monthly Revenue</span>
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-600">$45,000</h3>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Active Plans</span>
              <CreditCard className="w-5 h-5 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">3</h3>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Free Trial Users</span>
              <span className="text-2xl">🎁</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">67</h3>
          </div>
        </div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-xl shadow-sm border-2 p-6 hover:shadow-lg transition-all ${
                plan.name === 'Pro Plan'
                  ? 'border-yellow-400 relative'
                  : 'border-gray-200'
              }`}
            >
              {plan.name === 'Pro Plan' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/{plan.billingCycle}</span>
                </div>
                {plan.freeTrialDays > 0 && (
                  <p className="text-sm text-yellow-600 mt-2">
                    {plan.freeTrialDays} days free trial
                  </p>
                )}
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-yellow-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Performance Fee</span>
                  <span className="font-medium text-gray-900">
                    {plan.performanceFeePercentage}%
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subscribers</span>
                  <span className="font-medium text-gray-900">{plan.subscribersCount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Status</span>
                  <span
                    className={`font-medium ${
                      plan.status === 'active' ? 'text-green-600' : 'text-gray-600'
                    }`}
                  >
                    {plan.status}
                  </span>
                </div>
              </div>

              <button className="w-full mt-6 px-4 py-3 border-2 border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 rounded-lg font-medium text-gray-900 transition-all flex items-center justify-center gap-2">
                <Edit className="w-4 h-4" />
                Edit Plan
              </button>
            </div>
          ))}
        </div>

        {/* Settings */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Global Settings</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div>
                <h3 className="font-medium text-gray-900">Free Plan Enabled</h3>
                <p className="text-sm text-gray-600">
                  Allow users to use the platform with free plan
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div>
                <h3 className="font-medium text-gray-900">Auto-Charge Subscriptions</h3>
                <p className="text-sm text-gray-600">
                  Automatically charge recurring subscriptions
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Disable Non-Paying Users</h3>
                <p className="text-sm text-gray-600">
                  Block access for users with failed payments
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
