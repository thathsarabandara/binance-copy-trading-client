import { ArrowDown, ArrowUp } from 'lucide-react';
import React from 'react';

interface AdminStatCardProps {
    title: string;
    value: number;
    change: number;
    icon: React.ReactNode;
    trend: 'up' | 'down';
    format?: 'number' | 'currency';
}

const AdminStatCard: React.FC<AdminStatCardProps> = ({
  title,
  value,
  change,
  icon,
  trend,
  format = 'number',
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900">
            {format === 'currency'
              ? `$${value.toLocaleString()}`
              : value.toLocaleString()}
          </h3>
          <div
            className={`flex items-center gap-1 mt-2 text-sm font-medium ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {trend === 'up' ? (
              <ArrowUp className="w-4 h-4" />
            ) : (
              <ArrowDown className="w-4 h-4" />
            )}
            <span>{Math.abs(change)}%</span>
            <span className="text-gray-500 font-normal">vs last month</span>
          </div>
        </div>
        <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default AdminStatCard;