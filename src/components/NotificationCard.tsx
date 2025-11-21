import { AlertTriangle, CheckCircle, Info, Trash2, XCircle } from "lucide-react";
import React  from "react";

interface NotificationCardProps {
    id: string;
    title: string;
    message: string;
    severity: 'info' | 'warning' | 'error' | 'success';
    read: boolean;
    createdAt: string;
    handleMarkAsRead?: (id: string) => void;
    handleDelete?: (id: string) => void;
}

const severityStyles = {
  info: 'bg-blue-50 border-blue-400 text-blue-800',
  warning: 'bg-yellow-50 border-yellow-400 text-yellow-800',
  error: 'bg-red-50 border-red-400 text-red-800',
  success: 'bg-green-50 border-green-400 text-green-800',
};

const getIcon = (severity: string) => {
    switch (severity) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Info className="w-5 h-5 text-blue-600" />;
    }
  };
const NotificationCard: React.FC<NotificationCardProps> = ({
    id,
    title,
    message,
    severity,
    read,
    createdAt,
    handleMarkAsRead,
    handleDelete,
}) => {
  return (
    <div
        className={`rounded-xl border p-4 transition-all ${
                  read ? 'bg-white border-gray-200' : severityStyles[severity]
                } ${!read ? 'shadow-sm' : ''}`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">{getIcon(severity)}</div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{title}</h3>
                      {!read && (
                        <span className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0 mt-2"></span>
                      )}
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{message}</p>
                    <p className="text-xs text-gray-500">{createdAt}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 flex-shrink-0">
                    {!read && (
                      <button
                        onClick={() => handleMarkAsRead?.(id)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Mark as read"
                      >
                        <CheckCircle className="w-4 h-4 text-gray-600" />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete?.(id)}
                      className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
  );
};

export default NotificationCard;