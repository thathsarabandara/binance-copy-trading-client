import { Pause, Play, Settings } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TraderCardProps {
    traderId: string;
    name: string;
    avatar?: string;
    status: string;
    allocation: number;
    profitGenerated: number;
    profitPercentage: number;
    followingSince: string;
    copyMethod: string;
    openTrades: number;
}

const TraderCard: React.FC<TraderCardProps> = ({traderId, name, avatar, status, allocation, profitGenerated, profitPercentage, followingSince, copyMethod, openTrades,}) => {
    const navigate = useNavigate();
    return (
    <div className='border p-4 border-yellow-500 rounded-lg hover:shadow-md hover:shadow-yellow-200'>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex items-center gap-4 flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-white font-bold text-xl">{avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                        <span
                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            status === 'active'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                        >
                            {status}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600">Following since {followingSince}</p>
                    <p className="text-sm text-gray-600 mt-1">Copy method: {copyMethod}</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
                <div>
                    <p className="text-xs text-gray-600 mb-1">Allocation</p>
                    <p className="text-lg font-bold text-gray-900">${allocation.toLocaleString()}</p>
                </div>
                <div>
                    <p className="text-xs text-gray-600 mb-1">Profit Generated</p>
                    <p className="text-lg font-bold text-green-600">+${profitGenerated.toLocaleString()}</p>
                    <p className="text-xs text-green-600">+{profitPercentage}%</p>
                </div>
                <div>
                    <p className="text-xs text-gray-600 mb-1">Open Trades</p>
                    <p className="text-lg font-bold text-gray-900">{openTrades}</p>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-2 lg:flex-col lg:min-w-[140px]">
                <button
                    onClick={() => {}}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    status === 'active'
                        ? 'bg-red-100 text-red-700 hover:bg-red-200'
                        : 'bg-green-100 text-green-700 hover:bg-green-200'
                    }`}
                >
                    {status === 'active' ? (
                        <>
                        <Pause className="w-4 h-4" />
                            Pause
                        </>
                            ) : (
                        <>
                        <Play className="w-4 h-4" />
                            Resume
                        </>
                        )}
                    </button>
                    <button
                        onClick={() => {
                            navigate(`/follower/copy-settings?trader=${traderId}`);
                        }}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 hover:bg-yellow-200 rounded-lg font-medium transition-colors"
                    >
                        <Settings className="w-4 h-4" />
                        Settings
                    </button>
                    <button
                        onClick={() => {
                            navigate(`/follower/marketplace/${traderId}`);
                        }}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                    >
                        View Profile
                    </button>
            </div>
        </div>
    </div>
  );
};

export default TraderCard;