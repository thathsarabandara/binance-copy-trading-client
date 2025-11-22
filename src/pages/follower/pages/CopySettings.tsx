import React, { useState } from 'react';
import FollowerLayout from '../../../layouts/FollowerLayout';
// import { useSearchParams } from 'react-router-dom';
import { Settings, DollarSign, Shield, Percent, Calculator, AlertTriangle, Save } from 'lucide-react';

const CopySettings: React.FC = () => {
  // const [searchParams] = useSearchParams();
  // const traderId = searchParams.get('trader'); // TODO: Use this for fetching trader-specific settings

  const [copyMethod, setCopyMethod] = useState<'fixed' | 'percentage' | 'proportional'>('proportional');
  const [fixedAmount, setFixedAmount] = useState(1000);
  const [percentageOfBalance, setPercentageOfBalance] = useState(10);
  const [proportionalMultiplier, setProportionalMultiplier] = useState(1);
  const [maxDailyLoss, setMaxDailyLoss] = useState(5);
  const [maxTotalAllocation, setMaxTotalAllocation] = useState(50);
  const [tradeSizeMultiplier, setTradeSizeMultiplier] = useState(1);

  const userBalance = 10000;

  const getEstimatedTradeSize = () => {
    const masterTradeSize = 500;
    switch (copyMethod) {
      case 'fixed':
        return fixedAmount;
      case 'percentage':
        return (userBalance * percentageOfBalance) / 100;
      case 'proportional':
        return masterTradeSize * proportionalMultiplier * tradeSizeMultiplier;
      default:
        return 0;
    }
  };

  const handleSave = () => {
    alert('Copy settings saved successfully!');
  };

  return (
    <FollowerLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Copy Settings</h1>
          <p className="text-gray-600 mt-1">Configure how you want to copy trades from CryptoKing</p>
        </div>

        {/* Balance Info */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Available Balance</p>
              <p className="text-3xl font-bold text-gray-900">${userBalance.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-700 mb-1">Estimated Trade Size</p>
              <p className="text-3xl font-bold text-yellow-600">${getEstimatedTradeSize().toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Copy Method */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <Calculator className="w-6 h-6 text-yellow-600" />
            <h2 className="text-xl font-bold text-gray-900">Copy Method</h2>
          </div>

          <div className="space-y-4">
            {/* Fixed Amount */}
            <label className="flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="copyMethod"
                value="fixed"
                checked={copyMethod === 'fixed'}
                onChange={(e) => setCopyMethod(e.target.value as any)}
                className="mt-1"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-yellow-600" />
                  <h3 className="font-semibold text-gray-900">Fixed Amount</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Use a fixed dollar amount for each copied trade, regardless of the master trader's trade size.
                </p>
                {copyMethod === 'fixed' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Amount per trade</label>
                    <input
                      type="number"
                      value={fixedAmount}
                      onChange={(e) => setFixedAmount(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                )}
              </div>
            </label>

            {/* Percentage */}
            <label className="flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="copyMethod"
                value="percentage"
                checked={copyMethod === 'percentage'}
                onChange={(e) => setCopyMethod(e.target.value as any)}
                className="mt-1"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Percent className="w-5 h-5 text-yellow-600" />
                  <h3 className="font-semibold text-gray-900">Percentage of Balance</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Use a percentage of your available balance for each trade. Amount adjusts automatically.
                </p>
                {copyMethod === 'percentage' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Percentage ({percentageOfBalance}%)
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={percentageOfBalance}
                      onChange={(e) => setPercentageOfBalance(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
            </label>

            {/* Proportional */}
            <label className="flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="copyMethod"
                value="proportional"
                checked={copyMethod === 'proportional'}
                onChange={(e) => setCopyMethod(e.target.value as any)}
                className="mt-1"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Settings className="w-5 h-5 text-yellow-600" />
                  <h3 className="font-semibold text-gray-900">Proportional Mode</h3>
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">Recommended</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Copy trades proportionally to the master trader's position size with a custom multiplier.
                </p>
                {copyMethod === 'proportional' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Multiplier ({proportionalMultiplier}x)
                    </label>
                    <input
                      type="range"
                      min="0.1"
                      max="10"
                      step="0.1"
                      value={proportionalMultiplier}
                      onChange={(e) => setProportionalMultiplier(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
            </label>
          </div>
        </div>

        {/* Risk Controls */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-yellow-600" />
            <h2 className="text-xl font-bold text-gray-900">Risk Controls</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Daily Loss (%) - Stop copying if daily loss exceeds this limit
              </label>
              <input
                type="number"
                value={maxDailyLoss}
                onChange={(e) => setMaxDailyLoss(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Total Allocation (%) - Maximum percentage of balance to allocate
              </label>
              <input
                type="number"
                value={maxTotalAllocation}
                onChange={(e) => setMaxTotalAllocation(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Trade Size Multiplier</label>
              <input
                type="number"
                step="0.1"
                value={tradeSizeMultiplier}
                onChange={(e) => setTradeSizeMultiplier(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="1"
              />
              <p className="text-xs text-gray-500 mt-1">Adjust overall trade size (0.5 = half size, 2 = double size)</p>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-900 mb-1">Important Risk Warning</p>
            <p className="text-sm text-red-700">
              Copy trading involves significant risk. Past performance does not guarantee future results. Only invest what
              you can afford to lose.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold transition-colors">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <Save className="w-5 h-5" />
            Save & Start Copying
          </button>
        </div>
      </div>
    </FollowerLayout>
  );
};

export default CopySettings;
