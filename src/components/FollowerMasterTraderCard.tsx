import React from 'react';

interface FollowerMasterTraderCardProps {
  imgPath?: string;
  name: string;
  status: 'active' | 'paused' | 'offline';
  isProfit: boolean;
  profitValue: number;
  allocationValue: number;
}

const FollowerMasterTraderCard: React.FC<FollowerMasterTraderCardProps> = ({ imgPath, name, status, profitValue, allocationValue }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:border-yellow-400 hover:shadow-md transition-all cursor-pointer">
        <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                {imgPath ? <img src={imgPath} alt={name} className="w-12 h-12 rounded-full" /> : <span className="text-white font-bold text-lg">{name.charAt(0)}</span>}
            </div>
            <div>
                <h3 className="font-semibold text-gray-900">{name}</h3>
                <p className="text-xs text-gray-500">{status}</p>
            </div>
        </div>
        <div className="space-y-2">
            <div className="flex justify-between text-sm">
                <span className="text-gray-600">Profit:</span>
                <span className="font-semibold text-green-600">+{profitValue}%</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-gray-600">Allocation:</span>
                <span className="font-semibold text-gray-900">${allocationValue.toLocaleString()}</span>
            </div>
        </div>
    </div>
  );}
export default FollowerMasterTraderCard;