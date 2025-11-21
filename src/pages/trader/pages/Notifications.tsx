import React, { useState, useEffect } from 'react';
import { Card } from '../../../components/Card';
import { Badge } from '../../../components/Badge';
import DashboardLayout from '../../../components/DashboardLayout';
import type { Notification } from '../../../types';
import { TiInputChecked } from 'react-icons/ti';
import { IoIosWarning, IoMdMail } from 'react-icons/io';
import { ImCross } from 'react-icons/im';
import { FaBell } from 'react-icons/fa';
import { IoBarChart, IoPeopleSharp, IoSettings } from 'react-icons/io5';
import { SlCalender } from 'react-icons/sl';
import { MdCelebration } from 'react-icons/md';

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setNotifications([
        {
          id: '1',
          title: 'New Follower',
          message: 'John Trader started copying your trades with $50,000',
          level: 'success',
          read: false,
          createdAt: new Date(Date.now() - 3600000).toISOString(),
          related: { type: 'FOLLOWER', id: 'follower1' },
        },
        {
          id: '2',
          title: 'Follower Stopped Copying',
          message: 'Sarah Investment has stopped copying your trades',
          level: 'warning',
          read: false,
          createdAt: new Date(Date.now() - 7200000).toISOString(),
          related: { type: 'FOLLOWER', id: 'follower2' },
        },
        {
          id: '3',
          title: 'Copy Trade Failed',
          message: 'Failed to copy BTC/USDT order for 2 followers due to insufficient balance',
          level: 'error',
          read: false,
          createdAt: new Date(Date.now() - 10800000).toISOString(),
          related: { type: 'ORDER', id: 'order123' },
        },
        {
          id: '4',
          title: 'High Drawdown Alert',
          message: 'Follower Mike Capital has reached 8% drawdown',
          level: 'warning',
          read: true,
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          related: { type: 'FOLLOWER', id: 'follower3' },
        },
        {
          id: '5',
          title: 'API Connection Success',
          message: 'Your Binance API has been connected successfully',
          level: 'success',
          read: true,
          createdAt: new Date(Date.now() - 172800000).toISOString(),
          related: { type: 'SYSTEM' },
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const handleMarkAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const handleDelete = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const getNotificationIcon = (level: string, type?: string) => {
    if (type === 'FOLLOWER') return <IoPeopleSharp />;
    if (type === 'ORDER') return <IoBarChart />;
    if (type === 'SYSTEM') return <IoSettings />;
    switch (level) {
      case 'success':
        return <TiInputChecked />;
      case 'warning':
        return <IoIosWarning />;
      case 'error':
        return <ImCross />;
      default:
        return  <FaBell />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'success':
        return 'bg-green-100 border-green-300';
      case 'warning':
        return 'bg-yellow-100 border-yellow-300';
      case 'error':
        return 'bg-red-100 border-red-300';
      default:
        return 'bg-blue-100 border-blue-300';
    }
  };

  const filteredNotifications = notifications.filter(
    (n) => filter === 'all' || !n.read
  );

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
            <p className="text-gray-600">Stay updated with important alerts and events</p>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={handleMarkAllAsRead}
              className="px-4 py-2 text-sm bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors"
            >
              Mark All as Read
            </button>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Unread</p>
                <p className="text-2xl font-bold">{unreadCount}</p>
              </div>
              <div className="text-3xl opacity-50"><FaBell /></div>
            </div>
          </Card>
          <Card className="bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Total</p>
                <p className="text-2xl font-bold text-gray-900">{notifications.length}</p>
              </div>
              <div className="text-3xl opacity-50"><IoMdMail /></div>
            </div>
          </Card>
          <Card className="bg-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Today</p>
                <p className="text-2xl font-bold text-gray-900">
                  {notifications.filter((n) => {
                    const diff = Date.now() - new Date(n.createdAt).getTime();
                    return diff < 86400000;
                  }).length}
                </p>
              </div>
              <div className="text-3xl opacity-50"><SlCalender /></div>
            </div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">Filter:</span>
            <div className="flex gap-2">
              {[
                { value: 'all', label: 'All' },
                { value: 'unread', label: 'Unread' },
              ].map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value as any)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === f.value
                      ? 'bg-yellow-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Notifications List */}
        <div className="space-y-4">
          {loading ? (
            [1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-gray-100 rounded-xl animate-pulse"></div>
            ))
          ) : filteredNotifications.length === 0 ? (
            <Card>
              <div className="text-center py-12 text-gray-500 flex flex-col items-center justify-center">
                <p className="text-4xl mb-3"><MdCelebration /></p>
                <p className="font-semibold">No notifications</p>
                <p className="text-sm mt-1">You're all caught up!</p>
              </div>
            </Card>
          ) : (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`border-2 rounded-xl p-5 transition-all ${
                  notification.read ? 'bg-white border-gray-200' : `${getLevelColor(notification.level)} border-2`
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">
                    {getNotificationIcon(notification.level, notification.related?.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      </div>
                      {!notification.read && (
                        <Badge variant="warning">New</Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-gray-500">
                        {new Date(notification.createdAt).toLocaleString()}
                      </span>
                      <div className="flex gap-2">
                        {!notification.read && (
                          <button
                            onClick={() => handleMarkAsRead(notification.id)}
                            className="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                          >
                            Mark as Read
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(notification.id)}
                          className="text-xs px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
