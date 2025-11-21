import { CheckCircle, Shield, Star, TrendingUp, Users, DollarSign } from 'lucide-react';
import React from 'react';

interface FollowerMasterCardProps {
    id: string;
    imgPath?: string;
    name: string;
    isVerified?: boolean;
    rating?: number;
    numberofTrades?: number;
    profitPercentage?: number;
    winRate?: number;
    riskScore?: number;
    monthlyReturn?: number;
    followersCount: number;
    minInvestment?: number;
    handleViewProfile?: (id: string) => void;
}

const FollowerMasterCard: React.FC<FollowerMasterCardProps> = ({ id, imgPath, name, isVerified, rating, numberofTrades, profitPercentage, winRate, riskScore,  monthlyReturn, followersCount, minInvestment, handleViewProfile }) => {
    const profitPercentageValue = typeof profitPercentage === 'number' ? profitPercentage : 0;
    const win = typeof winRate === 'number' ? winRate : 0;
    const risk = typeof riskScore === 'number' ? riskScore : 0;
    const monthly = typeof monthlyReturn === 'number' ? monthlyReturn : 0;
    const followers = typeof followersCount === 'number' ? followersCount : 0;
    const minimumInvestment = typeof minInvestment === 'number' ? minInvestment : 0;

    const getRiskColor = (score: number) =>
        score <= 4 ? 'bg-green-500 text-green-700' : score <= 7 ? 'bg-yellow-500 text-yellow-700' : 'bg-red-500 text-red-700';

    const getRiskLabel = (score: number) => (score <= 4 ? 'Low Risk' : score <= 7 ? 'Medium Risk' : 'High Risk');

    return (
        <div
            className="bg-white rounded-xl border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all cursor-pointer overflow-hidden group"
            onClick={() => handleViewProfile && handleViewProfile(id)}
        >
            {/* Header */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 relative">
                <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                        {imgPath ? (
                            <img src={imgPath} alt={name} className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-white font-bold text-xl">{name?.charAt(0)?.toUpperCase() ?? '?'}</span>
                        )}
                    </div>
                    {isVerified && (
                        <div className="bg-yellow-500 text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs font-medium">
                            <CheckCircle className="w-3 h-3" />
                            Verified
                        </div>
                    )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
                <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-gray-700">{rating ?? '—'}</span>
                    <span className="text-sm text-gray-600">({numberofTrades ?? 0} trades)</span>
                </div>
            </div>

            {/* Stats */}
            <div className="p-6 space-y-4">
                {/* Profit & Win Rate */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="flex items-center gap-1 mb-1">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            <span className="text-xs font-medium text-gray-600">Total Profit</span>
                        </div>
                        <p className="text-xl font-bold text-green-600">+{profitPercentageValue}%</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-1 mb-1">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-medium text-gray-600">Win Rate</span>
                        </div>
                        <p className="text-xl font-bold text-blue-600">{win}%</p>
                    </div>
                </div>

                {/* Risk Score */}
                <div>
                    <div className="flex items-center gap-1 mb-2">
                        <Shield className="w-4 h-4 text-gray-600" />
                        <span className="text-xs font-medium text-gray-600">Risk Score</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                                className={`h-2 rounded-full ${risk <= 4 ? 'bg-green-500' : risk <= 7 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                style={{ width: `${Math.min(Math.max(risk, 0), 10) * 10}%` }}
                            ></div>
                        </div>
                        <span className={`text-xs font-semibold px-2 py-1 rounded ${getRiskColor(risk)}`}>
                            {getRiskLabel(risk)}
                        </span>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="pt-4 border-t border-gray-100 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Monthly Return:</span>
                        <span className="font-semibold text-green-600">+{monthly}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Followers:</span>
                        <span className="font-semibold text-gray-900 flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {followers}
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Min Investment:</span>
                        <span className="font-semibold text-gray-900 flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            ${minimumInvestment}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FollowerMasterCard;