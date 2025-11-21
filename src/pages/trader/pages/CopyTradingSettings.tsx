import React, { useState } from 'react';
import { Card } from '../../../components/Card';
import DashboardLayout from '../../../components/DashboardLayout';
import type { CopySettings } from '../../../types';
import { FaBalanceScaleRight, FaBell, FaUsers } from 'react-icons/fa';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';

const CopyTradingSettings: React.FC = () => {
  const [settings, setSettings] = useState<CopySettings>({
    id: '1',
    masterId: 'master1',
    copyRatioMode: 'PERCENTAGE',
    copyRatioValue: 100,
    maxDrawdownPercent: 10,
    lotSizeMultiplier: 1,
    dailyLossLimit: 5,
    enabled: true,
    autoAcceptFollowers: true,
    minFollowerBalance: 1000,
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
    alert('Settings saved successfully!');
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Copy Trading Settings</h1>
          <p className="text-gray-600">Configure how the copy system handles your orders</p>
        </div>

        {/* Status Card */}
        <Card className="mb-6 bg-white border-2 border-yellow-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-black-100 text-sm mb-2">Copy Trading Status</p>
              <p className="text-2xl font-bold flex items-center gap-3">
                <span className={`w-4 h-4 rounded-full animate-pulse ${settings.enabled ? 'bg-green-500' : 'bg-red-500'}`}></span>
                {settings.enabled ? 'Active' : 'Disabled'}
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.enabled}
                onChange={(e) => setSettings({ ...settings, enabled: e.target.checked })}
                className="sr-only peer"
              />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
            </label>
          </div>
        </Card>

        {/* Copy Ratio Settings */}
        <Card title="Copy Ratio Configuration" icon={<FaBalanceScaleRight />} className="mb-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Copy Ratio Mode
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { value: 'FIXED_AMOUNT', label: 'Fixed Amount', desc: 'Copy exact $ amount' },
                  { value: 'PERCENTAGE', label: 'Percentage', desc: 'Copy % of balance' },
                  { value: 'PROPORTIONAL', label: 'Proportional', desc: 'Scale by balance' },
                ].map((mode) => (
                  <button
                    key={mode.value}
                    onClick={() => setSettings({ ...settings, copyRatioMode: mode.value as any })}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      settings.copyRatioMode === mode.value
                        ? 'border-yellow-500 bg-yellow-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold text-gray-900 mb-1">{mode.label}</div>
                    <div className="text-xs text-gray-600">{mode.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {settings.copyRatioMode === 'FIXED_AMOUNT' ? 'Amount (USDT)' : 'Percentage (%)'}
              </label>
              <input
                type="number"
                value={settings.copyRatioValue}
                onChange={(e) => setSettings({ ...settings, copyRatioValue: parseFloat(e.target.value) })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                min={0}
                max={settings.copyRatioMode === 'PERCENTAGE' ? 100 : undefined}
              />
              <p className="text-xs text-gray-500 mt-2">
                {settings.copyRatioMode === 'PERCENTAGE'
                  ? 'Followers will copy trades using this % of their balance'
                  : 'Followers will copy trades with this fixed amount'}
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Lot Size Multiplier
              </label>
              <input
                type="number"
                value={settings.lotSizeMultiplier}
                onChange={(e) => setSettings({ ...settings, lotSizeMultiplier: parseFloat(e.target.value) })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                min={0.1}
                step={0.1}
              />
              <p className="text-xs text-gray-500 mt-2">
                Multiplier applied to follower position sizes (e.g., 1.5x means 50% larger positions)
              </p>
            </div>
          </div>
        </Card>

        {/* Risk Management */}
        <Card title="Risk Management" icon={<IoShieldCheckmarkSharp />} className="mb-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Maximum Drawdown (%)
              </label>
              <input
                type="number"
                value={settings.maxDrawdownPercent}
                onChange={(e) => setSettings({ ...settings, maxDrawdownPercent: parseFloat(e.target.value) })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                min={0}
                max={100}
              />
              <p className="text-xs text-gray-500 mt-2">
                Stop copying if follower's loss exceeds this percentage
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Daily Loss Limit (%)
              </label>
              <input
                type="number"
                value={settings.dailyLossLimit}
                onChange={(e) => setSettings({ ...settings, dailyLossLimit: parseFloat(e.target.value) })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                min={0}
                max={100}
              />
              <p className="text-xs text-gray-500 mt-2">
                Pause copying for the day if this daily loss % is reached
              </p>
            </div>
          </div>
        </Card>

        {/* Follower Settings */}
        <Card title="Follower Settings" icon={<FaUsers />} className="mb-6">
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
                  checked={settings.autoAcceptFollowers}
                  onChange={(e) => setSettings({ ...settings, autoAcceptFollowers: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </label>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Minimum Follower Balance (USDT)
              </label>
              <input
                type="number"
                value={settings.minFollowerBalance}
                onChange={(e) => setSettings({ ...settings, minFollowerBalance: parseFloat(e.target.value) })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                min={0}
              />
              <p className="text-xs text-gray-500 mt-2">
                Minimum balance required for users to copy your trades
              </p>
            </div>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card title="Alert Notifications" icon={<FaBell />} className="mb-6">
          <div className="space-y-3">
            {[
              { label: 'New follower joined', key: 'newFollower' },
              { label: 'Follower stopped copying', key: 'followerStopped' },
              { label: 'Copy trade failed', key: 'tradeFailed' },
              { label: 'High drawdown detected', key: 'highDrawdown' },
              { label: 'API connection issues', key: 'apiIssues' },
            ].map((notification) => (
              <div key={notification.key} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <span className="text-gray-700">{notification.label}</span>
                <input type="checkbox" defaultChecked className="w-5 h-5 text-yellow-500 rounded focus:ring-2 focus:ring-yellow-500" />
              </div>
            ))}
          </div>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end gap-4">
          <button
            className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Reset to Default
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CopyTradingSettings;
