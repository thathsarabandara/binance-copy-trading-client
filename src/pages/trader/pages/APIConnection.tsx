import React, { useState } from 'react';
import { Card } from '../../../components/Card';
import { Badge, Alert } from '../../../components/Badge';
import DashboardLayout from '../../../components/DashboardLayout';
import { TiInputChecked } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import { FaKey } from 'react-icons/fa';
import { LuTestTubeDiagonal } from 'react-icons/lu';
import { IoIosWarning } from 'react-icons/io';

const APIConnection: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [apiSecret, setApiSecret] = useState('');
  const [isConnected, setIsConnected] = useState(true);
  const [isTesting, setIsTesting] = useState(false);
  const [testResults, setTestResults] = useState<any>(null);

  const handleTestConnection = async () => {
    setIsTesting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setTestResults({
      readAccess: true,
      futuresPermission: true,
      spotPermission: true,
      ipRestricted: false,
    });
    setIsTesting(false);
  };

  const handleConnect = async () => {
    if (!apiKey || !apiSecret) {
      alert('Please enter both API Key and Secret');
      return;
    }
    setIsTesting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsConnected(true);
    setIsTesting(false);
    alert('API connected successfully!');
  };

  const handleDisconnect = () => {
    if (confirm('Are you sure you want to disconnect your Binance API?')) {
      setIsConnected(false);
      setApiKey('');
      setApiSecret('');
      setTestResults(null);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">API Connection</h1>
          <p className="text-gray-600">Connect your real Binance account to enable copy trading</p>
        </div>

        {/* Connection Status */}
        <Card className={`mb-6 ${isConnected ? 'bg-gradient-to-br from-green-400 to-green-500' : 'bg-gradient-to-br from-gray-400 to-gray-500'} text-white border-0`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-opacity-90 text-sm mb-2">Binance API Status</p>
              <p className="text-2xl font-bold flex items-center gap-3">
                <span className={`w-4 h-4 bg-white rounded-full ${isConnected ? 'animate-pulse' : ''}`}></span>
                {isConnected ? 'Connected' : 'Disconnected'}
              </p>
            </div>
            <div className="text-3xl opacity-50">
              {isConnected ? <TiInputChecked /> : <ImCross />}
            </div>
          </div>
        </Card>

        {isConnected && (
          <Alert variant="success" className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold mb-1 flex items-center gap-2 text-xl"><TiInputChecked /> <p>API Connected Successfully</p></p>
                <p className="text-sm">Your trades are being synced automatically from Binance.</p>
              </div>
              <button
                onClick={handleDisconnect}
                className="px-4 py-2 bg-white text-red-600 rounded-lg font-medium hover:bg-red-50 transition-colors"
              >
                Disconnect
              </button>
            </div>
          </Alert>
        )}

        {/* Setup Instructions */}
        {!isConnected && (
          <Card title="🔐 How to Get Your Binance API Keys" className="mb-6">
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <p className="font-semibold mb-1">Login to Binance</p>
                  <p className="text-sm text-gray-600">Go to your Binance account and navigate to API Management</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <p className="font-semibold mb-1">Create API Key</p>
                  <p className="text-sm text-gray-600">Click "Create API" and choose "System generated"</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold mb-1">Set Permissions</p>
                  <p className="text-sm text-gray-600">Enable "Enable Reading" and "Enable Futures" (DO NOT enable withdrawals)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <p className="font-semibold mb-1">Copy Your Keys</p>
                  <p className="text-sm text-gray-600">Save your API Key and Secret Key securely. You'll need them below.</p>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* API Key Form */}
        <Card title="API Credentials" icon={<FaKey />} className="mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                API Key
              </label>
              <input
                type="text"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder={isConnected ? '•••••••••••••••••••••••••' : 'Enter your Binance API Key'}
                disabled={isConnected}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                API Secret
              </label>
              <input
                type="password"
                value={apiSecret}
                onChange={(e) => setApiSecret(e.target.value)}
                placeholder={isConnected ? '•••••••••••••••••••••••••' : 'Enter your Binance API Secret'}
                disabled={isConnected}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            {!isConnected && (
              <div className="flex gap-3">
                <button
                  onClick={handleTestConnection}
                  disabled={isTesting || !apiKey || !apiSecret}
                  className="flex-1 px-6 py-3 border border-yellow-500 text-yellow-600 rounded-lg font-medium hover:bg-yellow-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isTesting ? 'Testing...' : 'Test Connection'}
                </button>
                <button
                  onClick={handleConnect}
                  disabled={isTesting || !apiKey || !apiSecret}
                  className="flex-1 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isTesting ? 'Connecting...' : 'Connect API'}
                </button>
              </div>
            )}
          </div>
        </Card>

        {/* Test Results */}
        {testResults && (
          <Card title="Connection Test Results" icon={<LuTestTubeDiagonal />} className="mb-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Read-Only Access</span>
                <Badge variant={testResults.readAccess ? 'success' : 'error'}>
                  {testResults.readAccess ? '✓ Granted' : '✗ Denied'}
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Futures Permission</span>
                <Badge variant={testResults.futuresPermission ? 'success' : 'error'}>
                  {testResults.futuresPermission ? '✓ Enabled' : '✗ Disabled'}
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Spot Permission</span>
                <Badge variant={testResults.spotPermission ? 'success' : 'error'}>
                  {testResults.spotPermission ? '✓ Enabled' : '✗ Disabled'}
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">IP Restriction</span>
                <Badge variant={testResults.ipRestricted ? 'warning' : 'success'}>
                  {testResults.ipRestricted ? '⚠ Restricted' : '✓ No Restriction'}
                </Badge>
              </div>
            </div>
          </Card>
        )}

        {/* Security Notice */}
        <Card className="bg-red-50 border-red-200">
          <div className="flex items-start gap-3">
            <span className="text-2xl"><IoIosWarning /></span>
            <div>
              <p className="font-semibold text-red-900 mb-2">Security Warnings</p>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• NEVER enable withdrawal permissions on your API key</li>
                <li>• Keep your API Secret secure and never share it with anyone</li>
                <li>• Enable IP restrictions on Binance for additional security</li>
                <li>• Regularly rotate your API keys for better security</li>
                <li>• Monitor your account for any unauthorized activity</li>
              </ul>
            </div>
          </div>
        </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default APIConnection;
