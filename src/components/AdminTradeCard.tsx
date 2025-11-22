import React from 'react';

interface AdminTradeStatCardProps {
    title: string;
    value: number | string;
    subtext: string;
    icon: React.ReactNode;
    
}

const AdminTradeStatCard: React.FC<AdminTradeStatCardProps> = ({
  title,
  value,
  subtext,
  icon,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900">
            {value.toLocaleString()}
          </h3>
          <div className="flex items-center gap-1 mt-2 text-sm font-medium text-gray-500">
            <span>{subtext}</span>
          </div>
        </div>
        <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default AdminTradeStatCard;