import React from 'react';
import FollowerLayout from '../../../layouts/FollowerLayout';
import { Users, TrendingUp, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MyTradeStatCard from '../../../components/MyTradeStatCard';
import TraderCard from '../../../components/TraderCard';
const MyTraders: React.FC = () => {
  const navigate = useNavigate();

  const followedTraders = [
    {
      id: '1',
      name: 'CryptoKing',
      avatar: 'CK',
      status: 'active',
      allocation: 15000,
      profitGenerated: 1875,
      profitPercentage: 12.5,
      followingSince: '2023-12-01',
      copyMethod: 'Proportional (1x)',
      openTrades: 5,
    },
    {
      id: '2',
      name: 'BinanceWhale',
      avatar: 'BW',
      status: 'active',
      allocation: 20000,
      profitGenerated: 1660,
      profitPercentage: 8.3,
      followingSince: '2023-11-15',
      copyMethod: 'Fixed ($1000)',
      openTrades: 3,
    },
    {
      id: '3',
      name: 'TraderPro',
      avatar: 'TP',
      status: 'paused',
      allocation: 15000,
      profitGenerated: 2280,
      profitPercentage: 15.2,
      followingSince: '2023-10-20',
      copyMethod: 'Percentage (10%)',
      openTrades: 0,
    },
  ];

  const totalAllocation = followedTraders.reduce((acc, trader) => acc + trader.allocation, 0);
  const totalProfit = followedTraders.reduce((acc, trader) => acc + trader.profitGenerated, 0);
  const activeTraders = followedTraders.filter((t) => t.status === 'active').length;

  return (
    <FollowerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Master Traders</h1>
          <p className="text-gray-600 mt-1">Manage all the master traders you're following</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MyTradeStatCard
            icon={<Users className="w-5 h-5 text-purple-600" />}
            lablel="Active Traders"
            value={`${activeTraders} / ${followedTraders.length}`}
            color="purple"
          />
          <MyTradeStatCard
            icon={<BarChart3 className="w-5 h-5 text-yellow-600" />}
            lablel="Total Allocation"
            value={`$${totalAllocation.toLocaleString()}`}
            color="yellow"
          />
          <MyTradeStatCard
            icon={<TrendingUp className="w-5 h-5 text-green-600" />}
            lablel="Total Profit"
            value={`+${totalProfit.toLocaleString()}`}
            color="green"
          />
        </div>
        

        {/* Traders List */}
        <div className="space-y-4">
          {followedTraders.map((trader) => (
            <TraderCard 
              key={trader.id}
              traderId={trader.id}
              name={trader.name}
              avatar={trader.avatar}
              status={trader.status}
              allocation={trader.allocation}
              profitGenerated={trader.profitGenerated}
              profitPercentage={trader.profitPercentage}
              followingSince={trader.followingSince}
              copyMethod={trader.copyMethod}
              openTrades={trader.openTrades}
            />
          ))}
        </div>

        {/* Add New Trader Button */}
        <div className="text-center">
          <button
            onClick={() => navigate('/follower/marketplace')}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold shadow-lg transition-colors"
          >
            Browse More Traders
          </button>
        </div>
      </div>
    </FollowerLayout>
  );
};

export default MyTraders;
