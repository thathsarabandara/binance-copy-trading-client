import React from 'react';
import FollowerLayout from '../../../layouts/FollowerLayout';
import { Wallet, TrendingUp, AlertTriangle, RefreshCw, ExternalLink } from 'lucide-react';

const WalletBalance: React.FC = () => {
  const balanceData = {
    spotBalance: 5250.50,
    futuresBalance: 8420.75,
    availableMargin: 6180.25,
    usedMargin: 2240.50,
    unrealizedPnL: 630.00,
    marginRatio: 26.6,
    totalEquity: 14301.25,
  };

  const getMarginRatioColor = (ratio: number) => {
    if (ratio < 30) return 'text-green-600 bg-green-100';
    if (ratio < 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getMarginRatioLabel = (ratio: number) => {
    if (ratio < 30) return 'Safe';
    if (ratio < 60) return 'Warning';
    return 'High Risk';
  };

  return (
    <FollowerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Wallet & Balance</h1>
            <p className="text-gray-600 mt-1">Your Binance account balance overview</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors">
            <RefreshCw className="w-4 h-4" />
            Refresh Balance
          </button>
        </div>

        {/* Total Equity */}
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8 shadow-sm border border-yellow-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Total Equity</p>
              <p className="text-5xl font-bold text-gray-900 mb-1">${balanceData.totalEquity.toLocaleString()}</p>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-semibold">+${balanceData.unrealizedPnL} Unrealized PnL</span>
              </div>
            </div>
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
              <Wallet className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        {/* Balance Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Spot Balance */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Spot Balance</h2>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Spot</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">${balanceData.spotBalance.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Available for spot trading</p>
          </div>

          {/* Futures Balance */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Futures Balance</h2>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                Futures
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">${balanceData.futuresBalance.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Available for futures trading</p>
          </div>
        </div>

        {/* Margin Information */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Margin Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Available Margin</p>
              <p className="text-2xl font-bold text-green-600">${balanceData.availableMargin.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-1">Free to use</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Used Margin</p>
              <p className="text-2xl font-bold text-yellow-600">${balanceData.usedMargin.toLocaleString()}</p>
              <p className="text-xs text-gray-500 mt-1">Currently in use</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">Unrealized PnL</p>
              <p className={`text-2xl font-bold ${balanceData.unrealizedPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {balanceData.unrealizedPnL >= 0 ? '+' : ''}${balanceData.unrealizedPnL.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 mt-1">From open positions</p>
            </div>
          </div>
        </div>

        {/* Margin Ratio */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Margin Ratio</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">Current Margin Ratio</span>
              <span className={`px-4 py-2 rounded-lg font-bold text-xl ${getMarginRatioColor(balanceData.marginRatio)}`}>
                {balanceData.marginRatio}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`h-4 rounded-full transition-all ${
                  balanceData.marginRatio < 30
                    ? 'bg-green-500'
                    : balanceData.marginRatio < 60
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
                style={{ width: `${balanceData.marginRatio}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Status:</span>
              <span className={`font-semibold ${getMarginRatioColor(balanceData.marginRatio)}`}>
                {getMarginRatioLabel(balanceData.marginRatio)}
              </span>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                Margin ratio shows how much of your margin is being used. Keep it below 60% to avoid liquidation risk.
              </p>
            </div>
          </div>
        </div>

        {/* Risk Warning */}
        {balanceData.marginRatio > 60 && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-900 mb-1">High Margin Ratio Warning</p>
              <p className="text-sm text-red-700">
                Your margin ratio is high. Consider reducing your positions or adding more funds to avoid liquidation.
              </p>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://www.binance.com/en/my/wallet/account/main"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-yellow-400 hover:bg-yellow-50 transition-all group"
            >
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Deposit Funds</h3>
                <p className="text-sm text-gray-600">Add funds to your Binance account</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-yellow-600" />
            </a>

            <a
              href="https://www.binance.com/en/my/wallet/account/main"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-yellow-400 hover:bg-yellow-50 transition-all group"
            >
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Withdraw Funds</h3>
                <p className="text-sm text-gray-600">Withdraw funds from your account</p>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-yellow-600" />
            </a>
          </div>
        </div>
      </div>
    </FollowerLayout>
  );
};

export default WalletBalance;
