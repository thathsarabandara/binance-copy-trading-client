import React, { useState } from 'react';
import FollowerLayout from '../../../layouts/FollowerLayout';
import {
  Search,
  Filter,
  TrendingUp,
  Shield,
  ChevronDown,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FollowrMarketPlaceStat from '../../../components/FollowrMarketPlaceStat';
import { FaChartLine } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import FollowerMasterCard from '../../../components/FollowerMasterCard';

interface MasterTrader {
  id: string;
  name: string;
  verified: boolean;
  profitPercentage: number;
  winRate: number;
  riskScore: number;
  monthlyReturn: number;
  followersCount: number;
  minInvestment: number;
  rating: number;
  avatar: string;
  totalTrades: number;
  handleViewProfile?: () => void;
}

const Marketplace: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'profit' | 'winRate' | 'risk' | 'followers'>('profit');

  // Mock data
  const masterTraders: MasterTrader[] = [
    {
      id: '1',
      name: 'CryptoKing',
      verified: true,
      profitPercentage: 125.5,
      winRate: 78,
      riskScore: 6.5,
      monthlyReturn: 12.3,
      followersCount: 1250,
      minInvestment: 1000,
      rating: 4.8,
      avatar: 'CK',
      totalTrades: 856,
    },
    {
      id: '2',
      name: 'BinanceWhale',
      verified: true,
      profitPercentage: 98.2,
      winRate: 72,
      riskScore: 5.2,
      monthlyReturn: 8.5,
      followersCount: 2100,
      minInvestment: 5000,
      rating: 4.9,
      avatar: 'BW',
      totalTrades: 1204,
    },
    {
      id: '3',
      name: 'TraderPro',
      verified: true,
      profitPercentage: 156.8,
      winRate: 82,
      riskScore: 7.8,
      monthlyReturn: 15.2,
      followersCount: 890,
      minInvestment: 2000,
      rating: 4.7,
      avatar: 'TP',
      totalTrades: 642,
    },
    {
      id: '4',
      name: 'SafeTrader',
      verified: false,
      profitPercentage: 45.3,
      winRate: 68,
      riskScore: 3.5,
      monthlyReturn: 4.2,
      followersCount: 450,
      minInvestment: 500,
      rating: 4.4,
      avatar: 'ST',
      totalTrades: 324,
    },
    {
      id: '5',
      name: 'MoonHunter',
      verified: true,
      profitPercentage: 210.5,
      winRate: 65,
      riskScore: 9.2,
      monthlyReturn: 18.7,
      followersCount: 680,
      minInvestment: 3000,
      rating: 4.5,
      avatar: 'MH',
      totalTrades: 478,
    },
    {
      id: '6',
      name: 'SteadyGains',
      verified: true,
      profitPercentage: 67.8,
      winRate: 75,
      riskScore: 4.1,
      monthlyReturn: 6.8,
      followersCount: 1560,
      minInvestment: 1500,
      rating: 4.6,
      avatar: 'SG',
      totalTrades: 892,
      handleViewProfile: () => handleViewProfile('6'),
    },
  ];

  const handleViewProfile = (traderId: string) => {
    navigate(`/follower/marketplace/${traderId}`);
  };

  return (
    <FollowerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Marketplace</h1>
          <p className="text-gray-600 mt-1">Browse and choose from top-performing master traders</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search master traders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Sort By */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white cursor-pointer"
              >
                <option value="profit">Sort by Profit</option>
                <option value="winRate">Sort by Win Rate</option>
                <option value="risk">Sort by Risk</option>
                <option value="followers">Sort by Followers</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Filters Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filters</span>
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Min Profit %</label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Min Win Rate %</label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Max Risk Score</label>
                <input
                  type="number"
                  placeholder="10"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>All time</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <FollowrMarketPlaceStat
            label="Total Traders"
            value={masterTraders.length}
            color="gray"
            icon={<FaChartLine/>}
          />
          <FollowrMarketPlaceStat
            label="Verified Traders"
            value={masterTraders.filter((t) => t.verified).length}
            color="yellow"
            icon={<MdVerified />}
          />
          <FollowrMarketPlaceStat
            label="Avg Profit %"
            value={
              (masterTraders.reduce((acc, t) => acc + t.profitPercentage, 0) / masterTraders.length).toFixed(1) + '%'
            }
            color="green"
            icon={<TrendingUp />}
          />
          <FollowrMarketPlaceStat
            label="Avg Risk Score"
            value={
              (masterTraders.reduce((acc, t) => acc + t.riskScore, 0) / masterTraders.length).toFixed(1)
            }
            color="red"
            icon={<Shield />}
          />
        </div>

        {/* Master Traders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {masterTraders.map((trader) => (
            <FollowerMasterCard {...trader} key={trader.id}/>
            
          ))}
        </div>
      </div>
    </FollowerLayout>
  );
};

export default Marketplace;
