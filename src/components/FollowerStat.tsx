import React from 'react';

interface FollowerStatProps {
  icon?: React.ReactNode;
  label: string;
  color?: string;
  value: number | string;
  isSubtext?: boolean;
  subtext?: string;
  isPositive?: boolean;
  change?: number; 
}
const FollowerStat: React.FC<FollowerStatProps> = ({
  icon,
  label,
  value,
  color,
  isSubtext = false,
  subtext,
  isPositive = true,
  change,
}) => {
    return (
        <div className="bg-white shadow-sm rounded-lg p-4 space-x-4 flex flex-col justify-start items-start space-y-3 border border-gray-100 ">
            <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${color ? color : 'bg-gray-100'} mx-4 `}>
                {icon}
            </div>
            <p className="text-sm font-medium text-gray-600 text-start">{label}</p>
            <div className='flex items-center gap-3'>
                <p className={`text-2xl font-bold `}>
                    {value}
                </p>
                {isSubtext && subtext && (
                    <p className="text-xs text-gray-500">{subtext}</p>
                )}
                {change !== undefined && (
                    <p className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {isPositive ? '+' : '-'}${Math.abs(change).toLocaleString()} 
                    </p>
                )}
            </div>
        </div>
    );
}
export default FollowerStat;