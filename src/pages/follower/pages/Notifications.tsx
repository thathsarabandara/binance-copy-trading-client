import React, { useState } from 'react';
import FollowerLayout from '../../../layouts/FollowerLayout';
import {
  Bell,
  CheckCircle,
  Filter,
} from 'lucide-react';
import NotificationCard from '../../../components/NotificationCard';

interface Notification {
  id: string;
  type: 'trade_copied' | 'trade_closed' | 'copy_failed' | 'api_disconnected' | 'high_drawdown' | 'subscription_expiring' | 'margin_warning';
  title: string;
  message: string;
  severity: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
  createdAt: string;
}

const Notifications: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'unread'>('all');
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'trade_copied',
      title: 'Trade Copied Successfully',
      message: 'BTCUSDT LONG position from CryptoKing has been copied to your account.',
      severity: 'success',
      read: false,
      createdAt: '2024-01-15 10:30:00',
    },
    {
      id: '2',
      type: 'high_drawdown',
      title: 'High Drawdown Warning',
      message: 'Master trader CryptoKing is approaching daily loss limit (4.5% of 5%).',
      severity: 'warning',
      read: false,
      createdAt: '2024-01-15 09:15:00',
    },
    {
      id: '3',
      type: 'trade_closed',
      title: 'Trade Closed with Profit',
      message: 'ETHUSDT position closed with +$175 profit by BinanceWhale.',
      severity: 'success',
      read: true,
      createdAt: '2024-01-15 08:45:00',
    },
    {
      id: '4',
      type: 'copy_failed',
      title: 'Copy Failed - Insufficient Margin',
      message: 'Failed to copy BNBUSDT trade from TraderPro due to insufficient available margin.',
      severity: 'error',
      read: false,
      createdAt: '2024-01-14 16:20:00',
    },
    {
      id: '5',
      type: 'api_disconnected',
      title: 'API Connection Warning',
      message: 'Your Binance API connection is unstable. Please check your settings.',
      severity: 'error',
      read: true,
      createdAt: '2024-01-14 14:00:00',
    },
    {
      id: '6',
      type: 'margin_warning',
      title: 'Margin Ratio Warning',
      message: 'Your margin ratio has reached 65%. Consider reducing positions or adding funds.',
      severity: 'warning',
      read: true,
      createdAt: '2024-01-14 12:30:00',
    },
  ]);

  const handleMarkAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
  };

  const handleDelete = (id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  const filteredNotifications =
    filterType === 'unread'
      ? notifications.filter((n) => !n.read)
      : notifications;

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <FollowerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            <p className="text-gray-600 mt-1">
              Stay updated with all your copy trading activities
              {unreadCount > 0 && (
                <span className="ml-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {unreadCount} unread
                </span>
              )}
            </p>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllAsRead}
              className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors"
            >
              <CheckCircle className="w-4 h-4" />
              Mark All as Read
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <div className="flex gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filterType === 'all'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All ({notifications.length})
              </button>
              <button
                onClick={() => setFilterType('unread')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filterType === 'unread'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Unread ({unreadCount})
              </button>
            </div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-100">
              <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No notifications to display</p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                id={notification.id}
                title={notification.title}
                message={notification.message}
                severity={notification.severity}
                read={notification.read}
                createdAt={notification.createdAt}
                handleMarkAsRead={handleMarkAsRead}
                handleDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>
    </FollowerLayout>
  );
};

export default Notifications;
