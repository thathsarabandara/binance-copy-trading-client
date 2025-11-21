import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Activity,
  History,
  Users,
  Settings,
  DollarSign,
  Plug,
  Bell,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed: controlledCollapsed, onToggle }) => {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const location = useLocation();

  const collapsed = controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalCollapsed(!internalCollapsed);
    }
  };

  const navItems: NavItem[] = [
    { label: 'Dashboard', path: '/trader/dashboard', icon: <LayoutDashboard size={20} /> },
    { label: 'Live Trades', path: '/trader/live-trades', icon: <Activity size={20} /> },
    { label: 'Trade History', path: '/trader/history', icon: <History size={20} /> },
    { label: 'Followers', path: '/trader/followers', icon: <Users size={20} /> },
    { label: 'Settings', path: '/trader/settings', icon: <Settings size={20} /> },
    { label: 'Earnings', path: '/trader/earnings', icon: <DollarSign size={20} /> },
    { label: 'API Connection', path: '/trader/api', icon: <Plug size={20} /> },
    { label: 'Notifications', path: '/trader/notifications', icon: <Bell size={20} /> },
    { label: 'Help & Support', path: '/trader/help', icon: <HelpCircle size={20} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out z-40 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
        {!collapsed && (
          <Link to="/trader/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LK</span>
            </div>
            <span className="text-lg font-bold text-gray-900">LK Trader</span>
          </Link>
        )}
        {collapsed && (
          <Link to="/trader/dashboard" className="w-full flex justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LK</span>
            </div>
          </Link>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
                  isActive(item.path)
                    ? 'bg-yellow-50 text-yellow-600 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
                title={collapsed ? item.label : undefined}
              >
                <span className={isActive(item.path) ? 'text-yellow-600' : 'text-gray-500'}>
                  {item.icon}
                </span>
                {!collapsed && <span className="text-sm">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
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

      {/* Footer */}
      <div className="border-t border-gray-200 p-3">
        
        <Link
          to="/trader/auth/login"
          className="w-full flex items-center justify-center gap-3 px-3 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors mt-2"
          title={collapsed ? 'Logout' : undefined}
        >
          <LogOut size={20} />
          {!collapsed && <span className="text-sm font-medium">Logout</span>}
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
