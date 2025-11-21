import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Store,
  Users,
  Settings as SettingsIcon,
  History,
  Activity,
  Wallet,
  Bell,
  UserCircle,
  ChevronLeft,
  ChevronRight,
  LogOut,
  TrendingUp,
} from 'lucide-react';

interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

const FollowerSidebar: React.FC<SidebarProps> = ({ isCollapsed = false, onToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(isCollapsed);

  const handleToggle = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    onToggle?.();
  };

  const handleLogout = () => {
    // Add logout logic here
    navigate('/follower/auth/login');
  };

  const menuItems = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/follower/dashboard',
    },
    {
      label: 'Marketplace',
      icon: Store,
      path: '/follower/marketplace',
    },
    {
      label: 'My Traders',
      icon: Users,
      path: '/follower/my-traders',
    },
    {
      label: 'Active Trades',
      icon: Activity,
      path: '/follower/active-trades',
    },
    {
      label: 'Trade History',
      icon: History,
      path: '/follower/trade-history',
    },
    {
      label: 'Wallet',
      icon: Wallet,
      path: '/follower/wallet',
    },
    {
      label: 'Notifications',
      icon: Bell,
      path: '/follower/notifications',
    },
    {
      label: 'Settings',
      icon: SettingsIcon,
      path: '/follower/settings',
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 z-40 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Logo Section */}
      <div className="h-20 flex items-center justify-between px-4 border-b border-gray-200">
        {!collapsed && (
          <Link to="/follower/dashboard" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">LK Trader</h2>
              <p className="text-xs text-yellow-600 font-medium">Follower</p>
            </div>
          </Link>
        )}
        {collapsed && (
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg mx-auto">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className="absolute -right-3 top-24 w-6 h-6 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        {collapsed ? (
          <ChevronRight className="w-4 h-4 text-white" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-white" />
        )}
      </button>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-6">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
                    active
                      ? 'bg-yellow-50 text-yellow-600 shadow-sm'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-yellow-600'
                  } ${collapsed ? 'justify-center' : ''}`}
                  title={collapsed ? item.label : ''}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${active ? 'text-yellow-600' : ''}`} />
                  {!collapsed && (
                    <span className={`font-medium ${active ? 'font-semibold' : ''}`}>
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile & Logout */}
      <div className="border-t border-gray-200 p-4">
        <div
          className={`flex items-center gap-3 mb-3 ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
            <UserCircle className="w-6 h-6 text-yellow-700" />
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">John Doe</p>
              <p className="text-xs text-gray-500 truncate">Active Follower</p>
            </div>
          )}
        </div>

        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors ${
            collapsed ? 'justify-center' : ''
          }`}
          title={collapsed ? 'Logout' : ''}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default FollowerSidebar;
