import React from 'react';

interface FollowerMarketPlaceStatProps {
    label: string;
    value: number | string;
    color?: string;
    icon: React.ReactNode;
}

const FollowrMarketPlaceStat: React.FC<FollowerMarketPlaceStatProps> = ({ label, value, icon, color }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md gap-4">
            <div className="flex flex-col items-start justify-center">
                <span className="text-gray-700">{label}</span>
                <span className={`font-bold text-${color}-600`}>{value}</span>
            </div>
            <div className={`text-${color}-500 bg-${color}-100 p-4 rounded-xl`}>{icon}</div>
        </div>
    );
}
export default FollowrMarketPlaceStat;