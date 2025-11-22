import React, { useState } from 'react';
import FollowerLayout from '../../../layouts/FollowerLayout';
import {
  User,
  Key,
  Shield,
  Bell,
  Trash2,
  Save,
  Eye,
  EyeOff,
} from 'lucide-react';

const AccountSettings: React.FC = () => {
  const [showApiKey, setShowApiKey] = useState(false);
  const [showApiSecret, setShowApiSecret] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'api' | 'security' | 'notifications'>('profile');

  const [email, setEmail] = useState('john.doe@example.com');
  const [username, setUsername] = useState('JohnDoe');
  const [apiKey, setApiKey] = useState('****************************abcd');
  const [apiSecret, setApiSecret] = useState('****************************xyz');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [tradeCopiedNotif, setTradeCopiedNotif] = useState(true);
  const [tradeClosedNotif, setTradeClosedNotif] = useState(true);
  const [copyFailedNotif, setCopyFailedNotif] = useState(true);
  const [highDrawdownNotif, setHighDrawdownNotif] = useState(true);

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      alert('Account deletion initiated. You will receive a confirmation email.');
    }
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'api', label: 'API Keys', icon: Key },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <FollowerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account preferences and security</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-yellow-50 text-yellow-600 border-b-2 border-yellow-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="p-6">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Profile Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* API Keys Tab */}
            {activeTab === 'api' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Binance API Configuration</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Connect your Binance account to enable copy trading. Make sure to enable "Enable Futures" permission
                    for your API key.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">API Key</label>
                      <div className="relative">
                        <input
                          type={showApiKey ? 'text' : 'password'}
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                          className="w-full px-4 py-2 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <button
                          onClick={() => setShowApiKey(!showApiKey)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showApiKey ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">API Secret</label>
                      <div className="relative">
                        <input
                          type={showApiSecret ? 'text' : 'password'}
                          value={apiSecret}
                          onChange={(e) => setApiSecret(e.target.value)}
                          className="w-full px-4 py-2 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <button
                          onClick={() => setShowApiSecret(!showApiSecret)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showApiSecret ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-900">
                        <strong>How to get your API keys:</strong>
                        <br />
                        1. Log in to Binance and go to API Management
                        <br />
                        2. Create a new API key with "Enable Futures" permission
                        <br />
                        3. Copy and paste your API Key and Secret here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                      <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Two-Factor Authentication</h3>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={twoFactorEnabled}
                      onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                      className="w-5 h-5 rounded text-yellow-500 focus:ring-yellow-500"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Enable 2FA</p>
                      <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Email Notifications</h3>
                  <label className="flex items-center gap-3 mb-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={emailNotifications}
                      onChange={(e) => setEmailNotifications(e.target.checked)}
                      className="w-5 h-5 rounded text-yellow-500 focus:ring-yellow-500"
                    />
                    <div>
                      <p className="font-medium text-gray-900">Enable Email Notifications</p>
                      <p className="text-sm text-gray-600">Receive email alerts for important events</p>
                    </div>
                  </label>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Notification Preferences</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={tradeCopiedNotif}
                        onChange={(e) => setTradeCopiedNotif(e.target.checked)}
                        className="w-4 h-4 rounded text-yellow-500 focus:ring-yellow-500"
                      />
                      <span className="text-sm text-gray-900">Trade copied successfully</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={tradeClosedNotif}
                        onChange={(e) => setTradeClosedNotif(e.target.checked)}
                        className="w-4 h-4 rounded text-yellow-500 focus:ring-yellow-500"
                      />
                      <span className="text-sm text-gray-900">Trade closed</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={copyFailedNotif}
                        onChange={(e) => setCopyFailedNotif(e.target.checked)}
                        className="w-4 h-4 rounded text-yellow-500 focus:ring-yellow-500"
                      />
                      <span className="text-sm text-gray-900">Copy trade failed</span>
                    </label>
                    <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={highDrawdownNotif}
                        onChange={(e) => setHighDrawdownNotif(e.target.checked)}
                        className="w-4 h-4 rounded text-yellow-500 focus:ring-yellow-500"
                      />
                      <span className="text-sm text-gray-900">High drawdown warnings</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-200">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold shadow-lg transition-colors"
              >
                <Save className="w-5 h-5" />
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-red-900 mb-2">Danger Zone</h3>
          <p className="text-sm text-red-700 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button
            onClick={handleDeleteAccount}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors"
          >
            <Trash2 className="w-5 h-5" />
            Delete Account
          </button>
        </div>
      </div>
    </FollowerLayout>
  );
};

export default AccountSettings;
