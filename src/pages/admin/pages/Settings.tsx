import React, { useState } from 'react';
import { Settings as SettingsIcon, Save, AlertCircle, Database } from 'lucide-react';
import type { SystemSettings } from '../../../types/admin';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState<SystemSettings>({
    maintenance: {
      enabled: false,
      message: 'System is under maintenance. We will be back soon.',
      estimatedEndTime: undefined,
    },
    apiRateLimit: {
      requestsPerMinute: 60,
      requestsPerHour: 1000,
    },
    trading: {
      minBalanceToFollow: 100,
      defaultCopyRatio: 0.1,
      maxFollowersPerTrader: 200,
    },
    risk: {
      defaultRiskLimit: 10,
      maxLeverageAllowed: 10,
    },
    notifications: {
      emailEnabled: true,
      smsEnabled: false,
      pushEnabled: true,
    },
  });

  const handleSave = () => {
    console.log('Saving settings:', settings);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
            <p className="text-gray-600 mt-1">Configure global platform rules and settings</p>
          </div>
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-8 space-y-6">
        {/* Maintenance Mode */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Maintenance Mode</h2>
              <p className="text-sm text-gray-600">Enable maintenance mode to restrict access</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Enable Maintenance Mode</h3>
                <p className="text-sm text-gray-600">
                  Users won't be able to access the platform
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.maintenance.enabled}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      maintenance: { ...settings.maintenance, enabled: e.target.checked },
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maintenance Message
              </label>
              <textarea
                value={settings.maintenance.message}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    maintenance: { ...settings.maintenance, message: e.target.value },
                  })
                }
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
        </div>

        {/* API Rate Limits */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <SettingsIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">API Rate Limits</h2>
              <p className="text-sm text-gray-600">Control API request limits</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Requests Per Minute
              </label>
              <input
                type="number"
                value={settings.apiRateLimit.requestsPerMinute}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    apiRateLimit: {
                      ...settings.apiRateLimit,
                      requestsPerMinute: parseInt(e.target.value),
                    },
                  })
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Requests Per Hour
              </label>
              <input
                type="number"
                value={settings.apiRateLimit.requestsPerHour}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    apiRateLimit: {
                      ...settings.apiRateLimit,
                      requestsPerHour: parseInt(e.target.value),
                    },
                  })
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
        </div>

        {/* Trading Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Trading Settings</h2>
              <p className="text-sm text-gray-600">Configure trading parameters</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Balance to Follow ($)
              </label>
              <input
                type="number"
                value={settings.trading.minBalanceToFollow}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    trading: {
                      ...settings.trading,
                      minBalanceToFollow: parseInt(e.target.value),
                    },
                  })
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Copy Ratio (%)
              </label>
              <input
                type="number"
                step="0.01"
                value={settings.trading.defaultCopyRatio * 100}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    trading: {
                      ...settings.trading,
                      defaultCopyRatio: parseFloat(e.target.value) / 100,
                    },
                  })
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Followers Per Trader
              </label>
              <input
                type="number"
                value={settings.trading.maxFollowersPerTrader}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    trading: {
                      ...settings.trading,
                      maxFollowersPerTrader: parseInt(e.target.value),
                    },
                  })
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
        </div>

        {/* Risk Management */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⚠️</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Risk Management</h2>
              <p className="text-sm text-gray-600">Set risk limits for new users</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Default Risk Limit (%)
              </label>
              <input
                type="number"
                value={settings.risk.defaultRiskLimit}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    risk: { ...settings.risk, defaultRiskLimit: parseInt(e.target.value) },
                  })
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Leverage Allowed
              </label>
              <input
                type="number"
                value={settings.risk.maxLeverageAllowed}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    risk: { ...settings.risk, maxLeverageAllowed: parseInt(e.target.value) },
                  })
                }
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📧</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Notification Settings</h2>
              <p className="text-sm text-gray-600">Configure notification channels</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Email Notifications</h3>
                <p className="text-sm text-gray-600">Send email notifications to users</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.emailEnabled}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      notifications: {
                        ...settings.notifications,
                        emailEnabled: e.target.checked,
                      },
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">SMS Notifications</h3>
                <p className="text-sm text-gray-600">Send SMS notifications to users</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.smsEnabled}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      notifications: { ...settings.notifications, smsEnabled: e.target.checked },
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Push Notifications</h3>
                <p className="text-sm text-gray-600">Send push notifications to users</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.pushEnabled}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      notifications: {
                        ...settings.notifications,
                        pushEnabled: e.target.checked,
                      },
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Database Backup */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Database Backup</h2>
              <p className="text-sm text-gray-600">Backup and restore database</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors">
              Create Backup Now
            </button>
            <button className="px-6 py-3 border border-gray-200 hover:bg-gray-50 font-medium rounded-lg transition-colors">
              View Backup History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
