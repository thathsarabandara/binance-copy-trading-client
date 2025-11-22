import React from 'react';

interface MyTradeStatCardProps {
    icon?: React.ReactNode;
    lablel: string;
    value: string | number;
    color?: string;
}

const MyTradeStatCard: React.FC<MyTradeStatCardProps> = ({ icon, lablel, value, color }) => {   
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 bg-${color}-100 text-${color}-600 rounded-lg flex items-center justify-center`}>
                {icon}
              </div>
              <span className="text-sm font-medium text-gray-600">{lablel}</span>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {value}
            </p>
        </div>
    );
};

export default MyTradeStatCard;