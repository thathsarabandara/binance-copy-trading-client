import { LifeBuoy } from "lucide-react";
import React from "react";

interface TicketCardProps {
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed' | 'other';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  department: 'support' | 'sales' | 'technical' | 'billing' | 'account' | 'trading' | 'other';
  user: {
    id: string;
    name: string;
    email: string;
  };
responses: Array<{
    id: string;
    author: string;
    message: string;
    timestamp: string;
  }>;
  assignedTo?: string;
  createdAt: string;
}
const TicketCard: React.FC<TicketCardProps> = ({
    title,
    description,
    status,
    priority,
    department,
    user,
    assignedTo,
    responses,
    createdAt,
}) => {
  return (
    <div
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
    >
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-4 flex-1">
                <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 
                    ${priority === 'urgent'? 'bg-red-100'
                        : priority === 'high'
                        ? 'bg-orange-100'
                        : priority === 'medium'
                        ? 'bg-yellow-100'
                        : 'bg-blue-100'
                    }`}
                >
                    <LifeBuoy
                      className={`w-6 h-6 ${
                          priority === 'urgent'
                          ? 'text-red-600'
                          : priority === 'high'
                          ? 'text-orange-600'
                          : priority === 'medium'
                          ? 'text-yellow-600'
                          : 'text-blue-600'
                      }`}
                    />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                       <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                        <span
                            className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                            priority === 'urgent'
                            ? 'bg-red-100 text-red-700'
                            : priority === 'high'
                            ? 'bg-orange-100 text-orange-700'
                            : priority === 'medium'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                        >
                        {priority}
                        </span>
                        <span className="inline-flex px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium capitalize">
                            {department}
                        </span>
                    </div>
                    <p className="text-gray-600 mb-3">{description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>
                            <strong>User:</strong> {user.name} ({user.email})
                        </span>
                        <span>•</span>
                        <span>
                            <strong>Created:</strong> {createdAt}
                        </span>
                        {assignedTo && (
                            <>
                                <span>•</span>
                                <span>
                                    <strong>Assigned to:</strong> {assignedTo}
                                </span>
                            </>
                        )}
                    </div>
                    {responses.length > 0 && (
                        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-700">
                                 <strong>Latest Response:</strong> {responses[0].message}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                by {responses[0].author} at {responses[0].timestamp}
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col items-end gap-2">
                <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      status === 'open'
                        ? 'bg-yellow-100 text-yellow-700'
                        : status === 'in_progress'
                        ? 'bg-blue-100 text-blue-700'
                        : status === 'resolved'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                >
                    {status.replace('_', ' ')}
                </span>
            </div>
        </div>
        <div className="flex gap-3 pt-3 border-t border-gray-200">
            <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition-colors text-sm font-medium">
                View & Reply
            </button>
                {status === 'open' && (
                  <button className="px-4 py-2 border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium">
                    Assign to Me
                  </button>
                )}
                {status === 'in_progress' && (
                  <button className="px-4 py-2 border border-green-500 text-green-600 hover:bg-green-50 rounded-lg transition-colors text-sm font-medium">
                    Mark as Resolved
                  </button>
                )}
            <button className="px-4 py-2 border border-red-500 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium">
                Mark as Urgent
            </button>
        </div>
    </div>
  );
}
export default TicketCard;